/**
 * Motor adaptativo de umotion Academy: personaliza qué estudia cada persona y en qué orden.
 * Puro, sin acceso al navegador, con pruebas en tests/adaptive.test.ts.
 *
 * Cómo funciona:
 * 1. Modelo del alumno: para cada competencia (src/data/skills.json) se estima la probabilidad de que
 *    la domine. Se actualiza con cada respuesta mediante «trazado bayesiano del conocimiento» (BKT),
 *    que tiene en cuenta que se puede acertar por azar o fallar por despiste.
 * 2. Perfil: objetivo, experiencia e intereses que la persona elige.
 * 3. Recomendador: puntúa cada sesión por lo que aún no domina, lo que le interesa, su objetivo,
 *    los prerrequisitos y la prioridad de saber invertir cuanto antes. Explica siempre por qué.
 * 4. Diagnóstico adaptativo: elige la siguiente pregunta según dónde hay más incertidumbre.
 *
 * Nada de esto sale del dispositivo. No usa datos financieros personales.
 */
import type { Goal, LevelId } from './academy';

export type TrackId = 'camino-cero' | 'productos' | 'formas' | 'invertir-ya' | 'trade-republic' | 'mantener' | 'empresas' | 'noticias' | 'trading';
export type Experience = 'nada' | 'algo' | 'invierto';
export type QType = 'choice' | 'truefalse' | 'estimate';

export interface SkillDef { id: string; domain: string; label: string; can: string; level?: number }
export interface DomainDef { id: string; label: string; desc: string; level?: number }
export interface Mastery { p: number; n: number; ok: number; last: string }
export type Model = Record<string, Mastery>;
/** goal: objetivo principal (el primero elegido); goals: todos los elegidos. */
export interface Profile { goal: Goal; goals?: Goal[]; experience: Experience; interests: TrackId[]; createdAt?: string }
export const goalsOf = (p: Profile | null | undefined): Goal[] => (p ? (p.goals?.length ? p.goals : [p.goal]) : []);
export interface CatalogItem { id: string; track: TrackId; order: number; level: LevelId; goals: Goal[]; prereqs: string[]; skills: string[]; title?: string }

export const TRACKS: Record<TrackId, { label: string; short: string }> = {
  'camino-cero': { label: 'Camino Cero', short: 'Qué es invertir' },
  productos: { label: 'Productos de inversión', short: 'Qué es cada producto y para quién encaja' },
  formas: { label: 'Formas de invertir', short: 'Por tu cuenta, gestionada o automatizada' },
  'invertir-ya': { label: 'Invertir ya', short: 'Cómo empezar, paso a paso' },
  'trade-republic': { label: 'Empieza con Trade Republic', short: 'Abrir la cuenta, usar la app y comparar productos' },
  mantener: { label: 'Mantener el rumbo', short: 'Revisar, aguantar, saber cuándo vender y declarar' },
  empresas: { label: 'Conocer empresas', short: 'Para saber más: cómo ver si una empresa va bien' },
  noticias: { label: 'Entender noticias', short: 'Para saber más: qué te afecta y qué no' },
  trading: { label: 'Tipos de trading', short: 'Para saber más: entenderlo sin jugarte el dinero' },
};

// ---------- Modelo del alumno (BKT) ----------
export const MASTERED = 0.85;
export const WEAK = 0.4;
const SLIP = 0.1;
const LEARN = 0.12;

/** Probabilidad de acertar por azar según el tipo de pregunta. */
export function guessRate(type: QType, options = 3): number {
  if (type === 'truefalse') return 0.5;
  if (type === 'estimate') return 0.1;
  return Math.min(0.5, Math.max(0.2, 1 / Math.max(options, 2)));
}

/** Punto de partida según la experiencia declarada (antes de responder nada). */
export function prior(skill: SkillDef | undefined, profile?: Pick<Profile, 'experience'> | null): number {
  const e = profile?.experience ?? 'nada';
  if (e === 'nada') return 0.1;
  const basic = skill && ['base', 'riesgo', 'proteccion'].includes(skill.domain);
  if (e === 'algo') return basic ? 0.35 : 0.2;
  return basic ? 0.5 : 0.35; // ya invierte
}

export function updateMastery(m: Mastery | undefined, correct: boolean, guess: number, today: string, p0: number, learn = LEARN): Mastery {
  const p = m?.p ?? p0;
  const post = correct ? (p * (1 - SLIP)) / (p * (1 - SLIP) + (1 - p) * guess) : (p * SLIP) / (p * SLIP + (1 - p) * (1 - guess));
  const next = post + (1 - post) * learn;
  return { p: Math.min(0.99, Math.max(0.01, next)), n: (m?.n ?? 0) + 1, ok: (m?.ok ?? 0) + (correct ? 1 : 0), last: today };
}

/** Registra una respuesta en todas las competencias que mide la pregunta. */
export function observe(model: Model, skills: string[], correct: boolean, guess: number, today: string, opts: { defs?: Record<string, SkillDef>; profile?: Profile | null; learn?: number } = {}): Model {
  const out = { ...model };
  for (const s of new Set(skills)) out[s] = updateMastery(out[s], correct, guess, today, prior(opts.defs?.[s], opts.profile), opts.learn ?? LEARN);
  return out;
}

export const pOf = (model: Model, id: string, defs?: Record<string, SkillDef>, profile?: Profile | null) => model[id]?.p ?? prior(defs?.[id], profile);

/** Al terminar una sesión con su lectura y su test, al menos se ha expuesto a la idea. */
export function exposeSession(model: Model, skills: string[], today: string, defs?: Record<string, SkillDef>, profile?: Profile | null): Model {
  const out = { ...model };
  for (const s of skills) {
    const p = pOf(out, s, defs, profile);
    out[s] = { p: p + (1 - p) * 0.15, n: out[s]?.n ?? 0, ok: out[s]?.ok ?? 0, last: today };
  }
  return out;
}

// ---------- Recomendador ----------
export interface Recommendation { id: string; kind: 'nueva' | 'refuerzo'; score: number; reasons: string[]; weakest: string[] }
interface RecOpts { defs: Record<string, SkillDef>; today?: string; limit?: number; lastTrack?: TrackId | null }

const gapOf = (item: CatalogItem, model: Model, o: RecOpts, profile: Profile | null) =>
  item.skills.length ? item.skills.reduce((a, s) => a + (1 - pOf(model, s, o.defs, profile)), 0) / item.skills.length : 0.5;

/** Un prerrequisito vale si se completó o si ya se dominan sus competencias. */
function prereqOk(id: string, catalog: Map<string, CatalogItem>, model: Model, completed: Record<string, unknown>, o: RecOpts, profile: Profile | null) {
  if (completed[id]) return true;
  const it = catalog.get(id);
  if (!it) return true;
  return it.skills.length > 0 && it.skills.every((s) => pOf(model, s, o.defs, profile) >= MASTERED);
}

/** Prioridad pedagógica: qué es invertir → productos → formas de invertir → empezar. El resto, para saber más. */
const BOOST: Partial<Record<TrackId, number>> = { productos: 0.9, formas: 0.85, 'invertir-ya': 0.8, 'trade-republic': 0.75, mantener: 0.7 };
function trackBoost(track: TrackId, profile: Profile | null): number {
  const e = profile?.experience ?? 'nada';
  if (track === 'camino-cero') return e === 'invierto' ? 0.2 : 1.2;
  return BOOST[track] ?? 0;
}

export function recommend(catalog: CatalogItem[], model: Model, profile: Profile | null, completed: Record<string, unknown>, o: RecOpts): Recommendation[] {
  const byId = new Map(catalog.map((c) => [c.id, c]));
  const out: Recommendation[] = [];
  const label = (s: string) => o.defs[s]?.label ?? s;

  for (const it of catalog) {
    const weakest = [...it.skills].sort((a, b) => pOf(model, a, o.defs, profile) - pOf(model, b, o.defs, profile));
    if (completed[it.id]) {
      // Refuerzo: competencias que se han fallado varias veces después de estudiarlas.
      const weak = it.skills.filter((s) => (model[s]?.n ?? 0) >= 2 && model[s].p < WEAK);
      if (weak.length) {
        const m = model[weak[0]];
        out.push({ id: it.id, kind: 'refuerzo', score: 2.2 + (1 - m.p), weakest: weak, reasons: [`Para reforzar «${label(weak[0])}»: has acertado ${m.ok} de ${m.n}`] });
      }
      continue;
    }
    if (!it.prereqs.every((p) => prereqOk(p, byId, model, completed, o, profile))) continue;
    const gap = gapOf(it, model, o, profile);
    const interest = profile?.interests.includes(it.track) ?? false;
    const goal = goalsOf(profile).some((g) => it.goals.includes(g));
    const known = gap < 1 - MASTERED;
    let score = 3 * gap + (interest ? 1.2 : 0) + (goal ? 0.8 : 0) + trackBoost(it.track, profile) + (o.lastTrack === it.track ? 0.3 : 0) - it.order * 0.002;
    if (known) score -= 3;
    const reasons: string[] = [];
    const seenWeak = weakest.find((s) => (model[s]?.n ?? 0) > 0 && model[s].p < WEAK);
    if (seenWeak) reasons.push(`Has fallado preguntas de «${label(seenWeak)}»`);
    else if (gap > 0.6) reasons.push(`Aún no has trabajado «${label(weakest[0])}»`);
    if (known) reasons.push('Ya parece que lo dominas: sirve de repaso');
    if (it.track === 'camino-cero' && !known && (profile?.experience ?? 'nada') !== 'invierto') reasons.push('Es parte de la base que todo lo demás necesita');
    if ((it.track === 'invertir-ya' || it.track === 'formas' || it.track === 'productos') && !known) reasons.push(it.track === 'productos' ? 'Conocer los productos es el primer paso para elegir bien' : it.track === 'formas' ? 'Te ayuda a elegir cómo invertir' : 'Te acerca a invertir por tu cuenta, con criterio');
    if (interest) reasons.push(`Te interesa: ${TRACKS[it.track].label}`);
    if (goal) reasons.push('Encaja con tu objetivo');
    out.push({ id: it.id, kind: 'nueva', score, reasons: reasons.slice(0, 3), weakest: weakest.slice(0, 2) });
  }
  return out.sort((a, b) => b.score - a.score || a.id.localeCompare(b.id)).slice(0, o.limit ?? 3);
}

/**
 * Ruta personal completa: aplica el recomendador una y otra vez suponiendo que cada sesión
 * se estudia (sus competencias suben a un nivel «visto»). Sirve para la lista y el calendario.
 */
export function personalRoute(catalog: CatalogItem[], model: Model, profile: Profile | null, completed: Record<string, unknown>, o: Omit<RecOpts, 'limit'>): string[] {
  const done: Record<string, unknown> = { ...completed };
  let m = { ...model };
  const route: string[] = [];
  let lastTrack = o.lastTrack ?? null;
  for (let guard = 0; guard < catalog.length; guard++) {
    const [next] = recommend(catalog, m, profile, done, { ...o, limit: 5, lastTrack }).filter((r) => r.kind === 'nueva');
    if (!next) break;
    route.push(next.id);
    done[next.id] = true;
    const it = catalog.find((c) => c.id === next.id)!;
    lastTrack = it.track;
    for (const s of it.skills) m = { ...m, [s]: { p: Math.max(pOf(m, s, o.defs, profile), 0.7), n: m[s]?.n ?? 0, ok: m[s]?.ok ?? 0, last: m[s]?.last ?? '' } };
  }
  return route;
}

// ---------- Resumen por áreas ----------
export interface DomainScore { id: string; label: string; p: number; mastered: number; total: number; seen: number }
export function domainSummary(domains: DomainDef[], skills: SkillDef[], model: Model, profile?: Profile | null): DomainScore[] {
  return domains.map((d) => {
    const ss = skills.filter((s) => s.domain === d.id);
    const p = ss.length ? ss.reduce((a, s) => a + (model[s.id]?.p ?? prior(s, profile)), 0) / ss.length : 0;
    return { id: d.id, label: d.label, p, mastered: ss.filter((s) => (model[s.id]?.p ?? 0) >= MASTERED).length, total: ss.length, seen: ss.filter((s) => model[s.id]).length };
  });
}

export function strengthsAndGaps(skills: SkillDef[], model: Model, n = 3): { strong: SkillDef[]; weak: SkillDef[] } {
  const seen = skills.filter((s) => (model[s.id]?.n ?? 0) > 0);
  const sorted = [...seen].sort((a, b) => model[b.id].p - model[a.id].p);
  return { strong: sorted.filter((s) => model[s.id].p >= 0.7).slice(0, n), weak: sorted.reverse().filter((s) => model[s.id].p < 0.6).slice(0, n) };
}

// ---------- Diagnóstico adaptativo ----------
export interface BankItem { qid: string; skills: string[]; domain: string }

/** Elige la siguiente pregunta: el área menos explorada y, dentro de ella, la de mayor incertidumbre (p cercana a 0,5). */
export function nextDiagnostic(bank: BankItem[], asked: string[], model: Model, max = 12, defs?: Record<string, SkillDef>, profile?: Profile | null): string | null {
  if (asked.length >= max) return null;
  const left = bank.filter((b) => !asked.includes(b.qid));
  if (!left.length) return null;
  const askedDomains = new Map<string, number>();
  for (const q of asked) { const b = bank.find((x) => x.qid === q); if (b) askedDomains.set(b.domain, (askedDomains.get(b.domain) ?? 0) + 1); }
  const unc = (b: BankItem) => b.skills.reduce((a, s) => { const p = pOf(model, s, defs, profile ?? null); return a + p * (1 - p); }, 0) / Math.max(b.skills.length, 1);
  left.sort((a, b) => (askedDomains.get(a.domain) ?? 0) - (askedDomains.get(b.domain) ?? 0) || unc(b) - unc(a) || a.qid.localeCompare(b.qid));
  return left[0].qid;
}

// ---------- Resumen para el tutor (sin datos personales) ----------
export function learnerBrief(profile: Profile | null, skills: SkillDef[], model: Model, completedCount: number, goalLabel?: string): string {
  const { strong, weak } = strengthsAndGaps(skills, model);
  const exp = { nada: 'empieza de cero', algo: 'sabe algo', invierto: 'ya invierte' }[profile?.experience ?? 'nada'];
  return [
    `Objetivo: ${goalLabel ?? profile?.goal ?? 'sin definir'}. Experiencia: ${exp}.`,
    profile?.interests.length ? `Le interesa: ${profile.interests.map((t) => TRACKS[t].label).join(', ')}.` : '',
    `Sesiones completadas: ${completedCount}.`,
    strong.length ? `Domina: ${strong.map((s) => s.label).join(', ')}.` : '',
    weak.length ? `Le cuesta: ${weak.map((s) => s.label).join(', ')}.` : '',
  ].filter(Boolean).join(' ');
}
