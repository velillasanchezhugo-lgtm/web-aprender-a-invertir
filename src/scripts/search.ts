/** Búsqueda local: normaliza acentos, puntúa por coincidencias en título, descripción y cuerpo. */
export interface Doc { t: string; d: string; u: string; k: string; b: string }
export const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
const STOP = new Set(['de', 'la', 'el', 'en', 'y', 'a', 'los', 'las', 'un', 'una', 'que', 'por', 'con', 'del', 'para', 'es', 'se', 'lo', 'al', 'como', 'mas', 'o']);
export function search(docs: Doc[], query: string) {
  const terms = norm(query).split(/[^a-z0-9ñ]+/).filter((w) => w.length > 1 && !STOP.has(w));
  if (!terms.length) return [];
  const out: { doc: Doc; score: number }[] = [];
  for (const doc of docs) {
    const t = norm(doc.t), d = norm(doc.d), b = norm(doc.b);
    let score = 0, all = true;
    for (const w of terms) {
      const stem = w.length > 5 ? w.slice(0, w.length - 2) : w;
      const s = (t.includes(stem) ? 10 : 0) + (d.includes(stem) ? 4 : 0) + (b.includes(stem) ? 1 + Math.min(3, b.split(stem).length - 2) : 0);
      if (!s) all = false;
      score += s;
    }
    if (score > 0) out.push({ doc, score: score * (all ? 2 : 1) });
  }
  return out.sort((a, b) => b.score - a.score);
}
