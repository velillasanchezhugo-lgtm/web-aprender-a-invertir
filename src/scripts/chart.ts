/**
 * Gráfico de líneas SVG sin dependencias. Accesible: role="img", título y descripción,
 * y tabla de datos alternativa generada aparte. Respeta prefers-reduced-motion (sin animación).
 */
export interface Series { name: string; values: number[]; color: string; dashed?: boolean }
export interface ChartOpts { labels: (string | number)[]; series: Series[]; title: string; desc: string; yFormat: (v: number) => string; height?: number; zeroLine?: boolean }

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]!));

function niceTicks(min: number, max: number, count = 5): number[] {
  if (min === max) { max = min + 1; }
  const span = max - min;
  const step0 = span / count;
  const mag = Math.pow(10, Math.floor(Math.log10(step0)));
  const norm = step0 / mag;
  const step = (norm < 1.5 ? 1 : norm < 3 ? 2 : norm < 7 ? 5 : 10) * mag;
  const start = Math.floor(min / step) * step;
  const ticks: number[] = [];
  for (let v = start; v <= max + step * 0.5; v += step) ticks.push(Number(v.toFixed(10)));
  return ticks;
}

export function lineChart(o: ChartOpts): string {
  const W = 640, H = o.height ?? 300, L = 64, R = 12, T = 12, B = 30;
  const all = o.series.flatMap((s) => s.values).filter(Number.isFinite);
  let min = Math.min(...all, o.zeroLine ? 0 : Infinity);
  let max = Math.max(...all);
  if (!Number.isFinite(min)) min = 0;
  const ticks = niceTicks(min, max);
  min = ticks[0]; max = ticks[ticks.length - 1];
  const n = o.labels.length;
  const x = (i: number) => L + (n <= 1 ? 0 : (i / (n - 1)) * (W - L - R));
  const y = (v: number) => T + (1 - (v - min) / (max - min || 1)) * (H - T - B);
  const id = 'c' + Math.random().toString(36).slice(2, 8);
  let out = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="${id}t ${id}d" preserveAspectRatio="xMidYMid meet"><title id="${id}t">${esc(o.title)}</title><desc id="${id}d">${esc(o.desc)}</desc>`;
  out += '<g class="axis">';
  for (const t of ticks) {
    out += `<line class="grid-line" x1="${L}" x2="${W - R}" y1="${y(t)}" y2="${y(t)}" stroke-width="1"/>`;
    out += `<text x="${L - 6}" y="${y(t) + 4}" text-anchor="end">${esc(o.yFormat(t))}</text>`;
  }
  const every = Math.max(1, Math.ceil(n / 8));
  o.labels.forEach((lab, i) => { if (i % every === 0 || i === n - 1) out += `<text x="${x(i)}" y="${H - 8}" text-anchor="middle">${esc(String(lab))}</text>`; });
  out += '</g>';
  for (const s of o.series) {
    const pts = s.values.map((v, i) => (Number.isFinite(v) ? `${x(i).toFixed(1)},${y(v).toFixed(1)}` : null)).filter(Boolean).join(' ');
    out += `<polyline fill="none" stroke="${s.color}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" ${s.dashed ? 'stroke-dasharray="6 5"' : ''} points="${pts}"/>`;
  }
  out += '</svg>';
  out += `<div class="legend">${o.series.map((s) => `<span><i style="background:${s.color}"></i>${esc(s.name)}</span>`).join('')}</div>`;
  return out;
}

export function dataTable(caption: string, head: string[], rows: (string | number)[][]): string {
  return `<details class="data-table"><summary>Ver los datos en una tabla</summary><div class="table-wrap"><table class="data"><caption class="sr-only">${esc(caption)}</caption><thead><tr>${head.map((h, i) => `<th scope="col"${i ? ' class="num"' : ''}>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => (i ? `<td class="num">${esc(String(c))}</td>` : `<th scope="row">${esc(String(c))}</th>`)).join('')}</tr>`).join('')}</tbody></table></div></details>`;
}

/** Colores de series leídos de las variables CSS para respetar el tema. */
export function palette() {
  const cs = getComputedStyle(document.documentElement);
  const v = (n: string) => cs.getPropertyValue(n).trim();
  return { teal: v('--teal'), ochre: v('--ochre-bright'), ink: v('--ink-3'), loss: v('--loss'), gain: v('--gain') };
}

export const num = (form: HTMLFormElement, name: string): number => {
  const el = form.elements.namedItem(name) as HTMLInputElement | null;
  return el ? Number(el.value) : NaN;
};
