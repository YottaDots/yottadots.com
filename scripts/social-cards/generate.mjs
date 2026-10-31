#!/usr/bin/env node
/**
 * YottaDots social cards
 *
 * Generates one 1200x630 PNG per documentation page (plus one for the
 * homepage) in static/img/social/, and makes sure each page's front matter
 * points to its card with `image:`. LinkedIn, X, Slack, Teams and others show
 * this image when someone shares a link.
 *
 * Run after adding or renaming a page, or changing a title:
 *
 *   npm i --no-save playwright && npx playwright install chromium   (once)
 *   node scripts/social-cards/generate.mjs
 *
 * Optional front matter per page:
 *   card_title:       shorter title for the card
 *   card_description: text for the card (default: first paragraph)
 *   card_section:     eyebrow text (default: section name)
 *   image:            a custom image; the script then leaves the page alone
 */
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { motifSvg } from './motif.mjs';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
const docsDir = path.join(root, 'docs');
const outDir = path.join(root, 'static/img/social');
const template = fs.readFileSync(path.join(here, 'template.html'), 'utf8');
const logo = 'data:image/png;base64,' +
  fs.readFileSync(path.join(root, 'static/img/cropped-logo-header.png')).toString('base64');

const SECTIONS = {
  why: 'Why YottaDots',
  method: 'Method',
  patterns: 'Patterns',
  'ai-coworker': 'AI Co-worker',
  canvases: 'Canvases',
  community: 'Community',
};
const SITE = 'yottadots.com';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function parse(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  const fmText = m ? m[1] : '';
  const body = m ? raw.slice(m[0].length) : raw;
  const fm = {};
  for (const line of fmText.split('\n')) {
    const kv = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].replace(/^['"]|['"]$/g, '').trim();
  }
  return { raw, fmText, hasFm: !!m, body, fm };
}

function firstParagraph(body) {
  const blocks = body.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
  for (const b of blocks) {
    if (/^(#|>|-|\*|\||```|<|---|\d+\.)/.test(b)) continue;
    return b.replace(/\s+/g, ' ').replace(/\*\*|__|\*|_|`/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  }
  return '';
}

// True if every word of the section name already appears in the title.
function repeats(title, section) {
  const words = (s) => s.toLowerCase().replace(/[^a-z0-9\- ]/g, '').split(/\s+/).filter(Boolean);
  const t = new Set(words(title));
  return words(section).every((w) => t.has(w));
}

function titleSize(title) {
  const n = title.length;
  if (n <= 18) return 84;
  if (n <= 30) return 72;
  if (n <= 48) return 60;
  return 50;
}

function render({ section, title, description }) {
  return template
    .replace('{{MOTIF}}', motifSvg())
    .replace('{{LOGO}}', logo)
    .replace('{{SECTION}}', esc(section))
    .replace('{{TITLE_SIZE}}', String(titleSize(title)))
    .replace('{{TITLE}}', esc(title).replace(/(\w)-(\w)/g, '$1\u2011$2'))
    .replace('{{DESCRIPTION}}', esc(description))
    .replace('{{SITE}}', SITE);
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return walk(p);
    return /\.mdx?$/.test(e.name) ? [p] : [];
  });
}

function setImage(file, doc, imagePath) {
  if (!doc.hasFm) {
    fs.writeFileSync(file, `---\nimage: ${imagePath}\n---\n\n` + doc.raw);
    return;
  }
  const lines = doc.fmText.split('\n').filter((l) => !/^image:/.test(l));
  lines.push(`image: ${imagePath}`);
  fs.writeFileSync(file, `---\n${lines.join('\n')}\n---\n` + doc.body);
}

const jobs = [{
  out: 'home.png',
  section: 'Open organization design',
  title: 'Federate your organization. Amplify it with AI.',
  description: 'An open methodology for organizations as a federation of independent members, with AI as a co-worker.',
}];

const managed = new Set();
for (const file of walk(docsDir).sort()) {
  const rel = path.relative(docsDir, file).replace(/\\/g, '/');
  const slug = rel.replace(/\.mdx?$/, '').replace(/\/index$/, '');
  const doc = parse(file);
  const imagePath = `/img/social/${slug.replace(/\//g, '-')}.png`;
  if (doc.fm.image && doc.fm.image !== imagePath) continue; // custom image, leave alone
  const top = rel.split('/')[0];
  const h1 = (doc.body.match(/^#\s+(.+)$/m) || [])[1];
  jobs.push({
    out: path.basename(imagePath),
    section: doc.fm.card_section ||
      // Avoid repeating the title: index pages named after their section get a neutral eyebrow.
      (SECTIONS[top] && !repeats(doc.fm.title || h1 || '', SECTIONS[top])
        ? SECTIONS[top] : 'Open organization design'),
    title: doc.fm.card_title || doc.fm.title || h1 || slug,
    description: doc.fm.card_description || doc.fm.description || firstParagraph(doc.body),
  });
  managed.add(path.basename(imagePath));
  if (doc.fm.image !== imagePath) setImage(file, doc, imagePath);
}

fs.mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const job of jobs) {
  await page.setContent(render(job), { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(outDir, job.out), type: 'png' });
  console.log('card', job.out, '-', job.title);
}
await browser.close();

// Remove cards for pages that no longer exist.
for (const f of fs.readdirSync(outDir)) {
  if (f.endsWith('.png') && f !== 'home.png' && !managed.has(f)) {
    fs.unlinkSync(path.join(outDir, f));
    console.log('removed', f);
  }
}
