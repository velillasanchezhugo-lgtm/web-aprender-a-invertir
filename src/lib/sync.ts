/**
 * Mezcla del progreso del dispositivo con el guardado en la cuenta. Pura, con pruebas en tests/sync.test.ts.
 *
 * Regla general: nunca se pierde nada. Lo completado se une (fecha más antigua), los repasos y el modelo
 * se quedan con lo más avanzado, y en lo que es una sola elección (plan, perfil) gana lo más reciente.
 */

type Rec = Record<string, unknown>;
const obj = (v: unknown): Rec => (v && typeof v === 'object' && !Array.isArray(v) ? (v as Rec) : {});
const arr = <T>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);
/** Claves que nunca se copian: evitan cambiar el prototipo de los objetos al mezclar datos que llegan de fuera. */
const BAD_KEYS = new Set(['__proto__', 'constructor', 'prototype']);
const entries = (v: unknown): [string, unknown][] => Object.entries(obj(v)).filter(([k]) => !BAD_KEYS.has(k));
/** Copia superficial sin claves peligrosas, conservando solo los valores que pasan el filtro. */
const clean = <T>(v: unknown, keep: (x: unknown) => x is T): Record<string, T> => {
  const out: Record<string, T> = {};
  for (const [k, x] of entries(v)) if (keep(x)) out[k] = x;
  return out;
};
const isStr = (x: unknown): x is string => typeof x === 'string' && x.length <= 64;
const isNum = (x: unknown): x is number => typeof x === 'number' && Number.isFinite(x);
const isObj = (x: unknown): x is Rec => !!x && typeof x === 'object' && !Array.isArray(x);

/** Une dos diccionarios de fechas quedándose con la más antigua (cuándo se hizo por primera vez). */
export function unionEarliest(a: unknown, b: unknown): Record<string, string> {
  const out = clean(a, isStr);
  for (const [k, v] of Object.entries(clean(b, isStr))) out[k] = out[k] && out[k] < v ? out[k] : v;
  return out;
}

interface Card { box: number; due: string; seen: number; wrong: number }
/** Tarjetas de repaso: se queda la que más se ha practicado (y, a igualdad, la de repaso más tardío). */
export function mergeDeck(a: unknown, b: unknown): Record<string, Card> {
  const isCard = (x: unknown): x is Card => isObj(x) && isNum(x.seen) && isStr(x.due);
  const out = clean(a, isCard);
  for (const [k, v] of Object.entries(clean(b, isCard))) {
    const c = out[k];
    out[k] = !c || v.seen > c.seen || (v.seen === c.seen && v.due > c.due) ? v : c;
  }
  return out;
}

interface Mastery { p: number; n: number; ok: number; last: string }
/** Modelo del alumno: por competencia, la estimación con más respuestas (a igualdad, la más reciente). */
export function mergeModel(a: unknown, b: unknown): Record<string, Mastery> {
  const isMastery = (x: unknown): x is Mastery => isObj(x) && isNum(x.p) && x.p >= 0 && x.p <= 1 && isNum(x.n);
  const out = clean(a, isMastery);
  for (const [k, v] of Object.entries(clean(b, isMastery))) {
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
  const exams: Rec = clean(L.exams, isObj);
  for (const [k, v] of entries(R.exams)) {
    if (!isObj(v)) continue;
    const a = obj(exams[k]), b = obj(v);
    const best = !exams[k] || Number(b.correct) / Number(b.total || 1) > Number(a.correct) / Number(a.total || 1) ? b : a;
    exams[k] = { ...best, passed: Boolean(a.passed) || Boolean(b.passed) };
  }
  const isNote = (x: unknown): x is string => typeof x === 'string' && x.length <= 20_000;
  const notes: Rec = clean(R.notes, isNote);
  for (const [k, v] of Object.entries(clean(L.notes, isNote))) if (v.trim()) notes[k] = v;
  return {
    ...R, ...L,
    plan: newer(obj(L.plan).goal ? obj(L.plan) : null, obj(R.plan).goal ? obj(R.plan) : null),
    profile: newer(obj(L.profile).goal ? obj(L.profile) : null, obj(R.profile).goal ? obj(R.profile) : null),
    placement: newer(obj(L.placement).at ? obj(L.placement) : null, obj(R.placement).at ? obj(R.placement) : null, 'at'),
    diagnostic: newer(obj(L.diagnostic).at ? obj(L.diagnostic) : null, obj(R.diagnostic).at ? obj(R.diagnostic) : null, 'at'),
    completed: unionEarliest(L.completed, R.completed),
    actions: unionEarliest(L.actions, R.actions),
    activity: [...new Set([...arr<unknown>(L.activity), ...arr<unknown>(R.activity)].filter((d): d is string => typeof d === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(d)))].sort().slice(-400),
    deck: mergeDeck(L.deck, R.deck),
    model: mergeModel(L.model, R.model),
    exams,
    notes,
  };
}

/** Progreso de lecturas («uacademy:progress»). */
export function mergeProgress(local: unknown, remote: unknown): Rec {
  const L = obj(local), R = obj(remote);
  const tools = clean(R.tools, isNum);
  for (const [k, v] of Object.entries(clean(L.tools, isNum))) tools[k] = Math.max(tools[k] ?? 0, v);
  const reviews: Rec = clean(R.reviews, isObj);
  for (const [k, v] of Object.entries(clean(L.reviews, isObj))) if (!reviews[k] || String(v.at) > String(obj(reviews[k]).at)) reviews[k] = v;
  const lastL = obj(L.last), lastR = obj(R.last);
  return {
    completed: unionEarliest(L.completed, R.completed),
    // Solo rutas internas de la web («/es/…»): nunca enlaces externos ni «javascript:».
    bookmarks: [...new Set([...arr<unknown>(R.bookmarks), ...arr<unknown>(L.bookmarks)].filter((u): u is string => typeof u === 'string' && u.length <= 300 && /^\/[^/\\]/.test(u)))],
    reviews,
    tools,
    ...(lastL.at || lastR.at ? { last: String(lastL.at ?? '') >= String(lastR.at ?? '') ? lastL : lastR } : {}),
  };
}

/**
 * Claves que se sincronizan con la cuenta (el tema visual y el consentimiento se quedan en el dispositivo).
 * Minimización de datos: el test detallado («quiz») y el plan en una página («one-page-plan») recogen respuestas
 * sobre la situación económica de la persona, así que no salen del dispositivo.
 */
export const SYNC_KEYS = ['academy', 'academy-emprendimiento', 'academy-claude', 'academy-chatgpt', 'progress', 'checklist', 'practice', 'final-exercise', 'badge', 'interest', 'class-notes', 'claude-kit', 'chatgpt-kit', 'prompt-practice', 'prompt-builder'] as const;
export type SyncKey = (typeof SYNC_KEYS)[number];
export type Snapshot = Partial<Record<SyncKey, unknown>>;

/** Mezcla completa. Para las claves sin reglas propias, gana lo del dispositivo si existe. */
export function mergeSnapshot(local: Snapshot, remote: Snapshot): Snapshot {
  const out: Snapshot = {};
  for (const k of SYNC_KEYS) {
    const l = local[k], r = remote[k];
    if (l == null && r == null) continue;
    if (k === 'academy' || k.startsWith('academy-')) out[k] = mergeAcademy(l, r);
    else if (k === 'progress') out[k] = mergeProgress(l, r);
    else out[k] = l ?? r;
  }
  return out;
}
