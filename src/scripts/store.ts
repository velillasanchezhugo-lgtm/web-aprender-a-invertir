/**
 * Almacenamiento local del progreso. Todo vive en este dispositivo (localStorage);
 * nada se envía a ningún servidor ni a sistemas publicitarios.
 */
const PREFIX = 'uacademy:';

export interface Progress {
  completed: Record<string, string>; // slug -> fecha ISO
  bookmarks: string[]; // rutas
  last?: { path: string; title: string; at: string };
  reviews: Record<string, { correct: number; total: number; at: string }>;
  tools: Record<string, number>; // herramienta -> usos
}

const empty = (): Progress => ({ completed: {}, bookmarks: [], reviews: {}, tools: {} });

export function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw ? { ...fallback, ...JSON.parse(raw) } : fallback;
  } catch { return fallback; }
}
export function write(key: string, value: unknown) {
  try { localStorage.setItem(PREFIX + key, JSON.stringify(value)); } catch { /* lleno o bloqueado */ }
}
export function remove(key: string) {
  try { localStorage.removeItem(PREFIX + key); } catch { /* */ }
}

export const getProgress = () => read<Progress>('progress', empty());
export const saveProgress = (p: Progress) => write('progress', p);

export function markComplete(slug: string) {
  const p = getProgress(); p.completed[slug] = new Date().toISOString(); saveProgress(p);
}
export function unmarkComplete(slug: string) {
  const p = getProgress(); delete p.completed[slug]; saveProgress(p);
}
export function setLast(path: string, title: string) {
  const p = getProgress(); p.last = { path, title, at: new Date().toISOString() }; saveProgress(p);
}
export function toggleBookmark(path: string): boolean {
  const p = getProgress();
  const i = p.bookmarks.indexOf(path);
  if (i >= 0) p.bookmarks.splice(i, 1); else p.bookmarks.push(path);
  saveProgress(p);
  return i < 0;
}
export function recordReview(id: string, correct: number, total: number) {
  const p = getProgress(); p.reviews[id] = { correct, total, at: new Date().toISOString() }; saveProgress(p);
}
export function recordToolUse(tool: string) {
  const p = getProgress(); p.tools[tool] = (p.tools[tool] ?? 0) + 1; saveProgress(p);
}

/** Borra todo lo guardado por la plataforma en este dispositivo. */
export function wipeAll() {
  try {
    Object.keys(localStorage).filter((k) => k.startsWith(PREFIX)).forEach((k) => localStorage.removeItem(k));
  } catch { /* */ }
}
export function exportAll(): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  try {
    Object.keys(localStorage).filter((k) => k.startsWith(PREFIX)).forEach((k) => {
      const v = localStorage.getItem(k);
      try { out[k] = JSON.parse(v ?? 'null'); } catch { out[k] = v; }
    });
  } catch { /* */ }
  return out;
}
