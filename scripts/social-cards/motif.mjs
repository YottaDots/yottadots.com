/**
 * The YottaDots "federation" motif: independent members (clusters of dots)
 * around a small shared core. Lines run from members to the core: members
 * delegate to the core, not the other way round (decision D1).
 *
 * Deterministic: the same output every run, so cards only change when the
 * content changes.
 */
export function motifSvg({ size = 560 } = {}) {
  const c = size / 2;
  const orange = '#f28c28';
  const grey = '#3a3c40';
  const members = 6;
  const ringR = size * 0.36;
  let lines = '';
  let dots = '';
  for (let i = 0; i < members; i++) {
    const a = (Math.PI * 2 * i) / members - Math.PI / 2 + 0.35;
    const mx = c + ringR * Math.cos(a);
    const my = c + ringR * Math.sin(a);
    lines += `<line x1="${mx.toFixed(1)}" y1="${my.toFixed(1)}" x2="${c}" y2="${c}" stroke="${grey}" stroke-width="2"/>`;
    // Each member: one larger dot with a few satellites (its own teams).
    const main = 20 + (i % 3) * 6;
    dots += `<circle cx="${mx.toFixed(1)}" cy="${my.toFixed(1)}" r="${main}" fill="${orange}"/>`;
    const sats = 3 + (i % 2);
    for (let s = 0; s < sats; s++) {
      const sa = a + (Math.PI * 2 * s) / sats + i;
      const sr = main + 18;
      const sx = mx + sr * Math.cos(sa);
      const sy = my + sr * Math.sin(sa);
      dots += `<circle cx="${sx.toFixed(1)}" cy="${sy.toFixed(1)}" r="${6 + (s % 2) * 2}" fill="${orange}" opacity="0.55"/>`;
    }
  }
  const core =
    `<circle cx="${c}" cy="${c}" r="34" fill="none" stroke="${orange}" stroke-width="3"/>` +
    `<circle cx="${c}" cy="${c}" r="12" fill="${orange}"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">${lines}${core}${dots}</svg>`;
}
