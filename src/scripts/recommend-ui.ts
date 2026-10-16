/**
 * Carga el índice de la academia (una vez) y muestra recomendaciones personalizadas.
 */
import { getState } from './academy-store';
import { recommend, personalRoute, type CatalogItem, type SkillDef, type DomainDef, type TrackId, type Recommendation } from '../lib/adaptive';

export interface AcademyIndex { catalog: CatalogItem[]; qmeta: Record<string, { skills: string[]; guess: number }>; titles: Record<string, string>; skills: SkillDef[]; domains: DomainDef[]; goals: Record<string, string> }
let cache: Promise<AcademyIndex> | null = null;
export const loadIndex = () => (cache ??= fetch('/es/academia.json').then((r) => r.json()));
export const defsOf = (ix: AcademyIndex) => Object.fromEntries(ix.skills.map((s) => [s.id, s])) as Record<string, SkillDef>;

export async function recommendations(limit = 3, opts: { exclude?: string; lastTrack?: string | null } = {}): Promise<{ ix: AcademyIndex; recs: Recommendation[] }> {
  const ix = await loadIndex();
  const s = getState();
  const completed = { ...s.completed, ...(opts.exclude ? { [opts.exclude]: true } : {}) };
  const recs = recommend(ix.catalog, s.model, s.profile, completed, { defs: defsOf(ix), limit, lastTrack: (opts.lastTrack as TrackId) ?? null });
  return { ix, recs };
}

export async function route(): Promise<{ ix: AcademyIndex; order: string[] }> {
  const ix = await loadIndex();
  const s = getState();
  return { ix, order: personalRoute(ix.catalog, s.model, s.profile, s.completed, { defs: defsOf(ix) }) };
}

const esc = (t: string) => t.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]!));

/** Rellena una tarjeta con la primera recomendación (enlace y motivos). */
export async function showRecommendation(card: HTMLElement, opts: { exclude?: string; lastTrack?: string | null } = {}) {
  try {
    const { ix, recs } = await recommendations(1, opts);
    const r = recs[0];
    if (!r) return;
    const a = card.querySelector<HTMLAnchorElement>('a')!;
    a.href = `/es/sesion/${r.id}/`;
    a.textContent = (r.kind === 'refuerzo' ? 'Repasa: ' : '') + (ix.titles[r.id] ?? r.id);
    const ul = card.querySelector('ul');
    if (ul) ul.innerHTML = r.reasons.map((x) => `<li>${esc(x)}</li>`).join('');
    card.hidden = false;
  } catch { /* sin conexión al índice: no se muestra */ }
}
