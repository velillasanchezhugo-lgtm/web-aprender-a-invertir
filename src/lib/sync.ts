/**
 * Mezcla del progreso del dispositivo con el guardado en la cuenta. Pura, con pruebas en tests/sync.test.ts.
 *
 * Regla general: nunca se pierde nada. Lo completado se une (fecha más antigua), los repasos y el modelo
 * se quedan con lo más avanzado, y en lo que es una sola elección (plan, perfil) gana lo más reciente.
 */

type Rec = Record<string, unknown>;
const obj = (v: unknown): Rec => (v && typeof v === 'object' && !Array.isArray(v) ? (v as Rec) : {});
const arr = <T>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);

/** Une dos diccionarios de fechas quedándose con la más antigua (cuándo se hizo por primera vez). */
export function unionEarliest(a: unknown, b: unknown): Record<string, string> {
  const out: Record<string, string> = { ...(obj(a) as Record<string, string>) };
  for (const [k, v] of Object.entries(obj(b) as Record<string, string>)) out[k] = out[k] && out[k] < v ? out[k] : v;
  return out;
}

interface Card { box: number; due: string; seen: number; wrong: number }
/** Tarjetas de repaso: se queda la que más se ha practicado (y, a igualdad, la de repaso más tardío). */
export function mergeDeck(a: unknown, b: unknown): Record<string, Card> {
  const out: Record<string, Card> = { ...(obj(a) as Record<string, Card>) };
  for (const [k, v] of Object.entries(obj(b) as Record<string, Card>)) {
    const c = out[k];
    out[k] = !c || v.seen > c.seen || (v.seen === c.seen && v.due > c.due) ? v : c;
  }
  return out;
}

interface Mastery { p: number; n: number; ok: number; last: string }
/** Modelo del alumno: por competencia, la estimación con más respuestas (a igualdad, la más reciente). */
export function mergeModel(a: unknown, b: unknown): Record<string, Mastery> {
  const out: Record<string, Mastery> = { ...(obj(a) as Record<string, Mastery>) };
  for (const [k, v] of Object.entries(obj(b) as Record<string, Mastery>)) {
    const c = out[k];
    out[k] = !c || v.n > c.n || (v.n === c.n && v.last > c.last) ? v : c;
  }
  return out;
}

const newer = <T extends Rec | null>(a: T, b: T, key = 'createdAt'): T => {
  if (!a) return b; if (!b) return a;
  return String(b[key] ?? '') > String(a[key] ?? '') ? b : a;
};

/** Estado de la academia («uacademy:academy»). */
export function mergeAcademy(local: unknown, remote: unknown): Rec {
  const L = obj(local), R = obj(remote);
  const exams: Rec = { ...obj(L.exams) };
  for (const [k, v] of Object.entries(obj(R.exams))) {
    const a = obj(exams[k]), b = obj(v);
    const best = !exams[k] || Number(b.correct) / Number(b.total || 1) > Number(a.correct) / Number(a.total || 1) ? b : a;
    exams[k] = { ...best, passed: Boolean(a.passed) || Boolean(b.passed) };
  }
  const notes: Rec = { ...obj(R.notes) };
  for (const [k, v] of Object.entries(obj(L.notes))) if (String(v ?? '').trim()) notes[k] = v;
  return {
    ...R, ...L,
    plan: newer(obj(L.plan).goal ? obj(L.plan) : null, obj(R.plan).goal ? obj(R.plan) : null),
    profile: newer(obj(L.profile).goal ? obj(L.profile) : null, obj(R.profile).goal ? obj(R.profile) : null),
    placement: newer(obj(L.placement).at ? obj(L.placement) : null, obj(R.placement).at ? obj(R.placement) : null, 'at'),
    diagnostic: newer(obj(L.diagnostic).at ? obj(L.diagnostic) : null, obj(R.diagnostic).at ? obj(R.diagnostic) : null, 'at'),
    completed: unionEarliest(L.completed, R.completed),
    actions: unionEarliest(L.actions, R.actions),
    activity: [...new Set([...arr<string>(L.activity), ...arr<string>(R.activity)])].sort().slice(-400),
    deck: mergeDeck(L.deck, R.deck),
    model: mergeModel(L.model, R.model),
    exams,
    notes,
  };
}

/** Progreso de lecturas («uacademy:progress»). */
export function mergeProgress(local: unknown, remote: unknown): Rec {
  const L = obj(local), R = obj(remote);
  const tools: Record<string, number> = { ...(obj(R.tools) as Record<string, number>) };
  for (const [k, v] of Object.entries(obj(L.tools) as Record<string, number>)) tools[k] = Math.max(tools[k] ?? 0, v);
  const reviews: Rec = { ...obj(R.reviews) };
  for (const [k, v] of Object.entries(obj(L.reviews))) if (!reviews[k] || String(obj(v).at) > String(obj(reviews[k]).at)) reviews[k] = v;
  const lastL = obj(L.last), lastR = obj(R.last);
  return {
    completed: unionEarliest(L.completed, R.completed),
    bookmarks: [...new Set([...arr<string>(R.bookmarks), ...arr<string>(L.bookmarks)])],
    reviews,
    tools,
    ...(lastL.at || lastR.at ? { last: String(lastL.at ?? '') >= String(lastR.at ?? '') ? lastL : lastR } : {}),
  };
}

/** Claves que se sincronizan con la cuenta (el tema visual y el consentimiento se quedan en el dispositivo). */
export const SYNC_KEYS = ['academy', 'progress', 'checklist', 'practice', 'final-exercise', 'quiz', 'one-page-plan', 'badge', 'interest', 'class-notes'] as const;
export type SyncKey = (typeof SYNC_KEYS)[number];
export type Snapshot = Partial<Record<SyncKey, unknown>>;

/** Mezcla completa. Para las claves sin reglas propias, gana lo del dispositivo si existe. */
export function mergeSnapshot(local: Snapshot, remote: Snapshot): Snapshot {
  const out: Snapshot = {};
  for (const k of SYNC_KEYS) {
    const l = local[k], r = remote[k];
    if (l == null && r == null) continue;
    if (k === 'academy') out[k] = mergeAcademy(l, r);
    else if (k === 'progress') out[k] = mergeProgress(l, r);
    else out[k] = l ?? r;
  }
  return out;
}
