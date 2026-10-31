# Social cards

Generates the share image (Open Graph image, 1200 × 630) for every page.
LinkedIn, X, Slack and Teams show it when someone shares a link.

## Run

Run this after adding a page, renaming one or changing a title or first
paragraph:

```bash
npm i --no-save playwright && npx playwright install chromium   # once
node scripts/social-cards/generate.mjs
```

The script:

1. renders one card per page in `docs/` into `static/img/social/<section>-<page>.png`,
   plus `home.png` (the homepage and default image);
2. adds `image: /img/social/...png` to the page's front matter if it is missing;
3. removes cards for pages that no longer exist.

Commit the changed images and pages together.

## Files

| File | Purpose |
|---|---|
| `template.html` | Layout of the card (colours and font from `src/css/custom.css`) |
| `motif.mjs` | The federation motif (members around a shared core) |
| `generate.mjs` | Reads the pages, renders the cards, updates front matter |

## Per-page options (front matter)

| Key | Effect |
|---|---|
| `description` | Text on the card; also the page's meta description |
| `card_title` | Shorter title for the card |
| `card_description` | Card text, if it should differ from `description` |
| `card_section` | Text above the title |
| `image` | A custom image path; the script then leaves the page alone |

## After publishing

LinkedIn caches share images. To refresh the image of a link that was already
shared, paste the URL into the
[LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).
