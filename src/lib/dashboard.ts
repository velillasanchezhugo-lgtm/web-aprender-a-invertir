/**
 * Cálculos del panel de «Mi cuenta»: progreso por formación, rachas, ritmo y actividad.
 * Funciones puras (sin navegador) para poder probarlas; la página solo dibuja el resultado.
 */
import { addDays, diffDays, streak, toDay, mastered, type Deck } from './academy.ts';

export interface CatalogSession { id: string; track: string; title: string; href: string }
export interface Catalog { id: string; title: string; href: string; cls: string; tracks: Record<string, string>; sessions: CatalogSession[] }
/** Lo que el panel necesita del estado guardado de cada formación. */
export interface StateLite { completed: Record<string, string>; activity: string[]; deck: Deck }

/** Día local (AAAA-MM-DD) de una fecha guardada, sea ya un día o una marca ISO. */
export const dayOf = (v: string): string | null => {
  if (/^\d{4}-\d{2}-\d{2}$/.test(v)) return v;
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? null : toDay(d);
};

export interface FormationStats {
  id: string; title: string; href: string; cls: string;
  done: number; total: number; pct: number;
  next: CatalogSession | null;
  tracks: { id: string; label: string; done: number; total: number }[];
  strongest: string | null;
  mastered: number;
  /** Sesiones por día activo en las últimas 4 semanas y días que faltan a ese ritmo (null si no hay ritmo). */
  pace: number; etaDays: number | null;
  streak: { current: number; best: number };
  lastDay: string | null;
}

export function formationStats(c: Catalog, s: StateLite, today: string): FormationStats {
  const ids = new Set(c.sessions.map((x) => x.id));
  const doneIds = Object.keys(s.completed).filter((id) => ids.has(id));
  const done = doneIds.length, total = c.sessions.length;
  const tracks = Object.entries(c.tracks).map(([id, label]) => {
    const list = c.sessions.filter((x) => x.track === id);
    return { id, label, done: list.filter((x) => s.completed[x.id]).length, total: list.length };
  }).filter((t) => t.total);
  const started = tracks.filter((t) => t.done).sort((a, b) => b.done / b.total - a.done / a.total);
  const days = doneIds.map((id) => dayOf(s.completed[id])).filter(Boolean) as string[];
  const recent = days.filter((d) => diffDays(d, today) < 28 && diffDays(d, today) >= 0);
  const activeDays = new Set(recent).size;
  const pace = activeDays ? recent.length / 28 : 0;
  const left = total - done;
  return {
    id: c.id, title: c.title, href: c.href, cls: c.cls,
    done, total, pct: total ? Math.round((done / total) * 100) : 0,
    next: c.sessions.find((x) => !s.completed[x.id]) ?? null,
    tracks, strongest: started[0]?.label ?? null,
    mastered: mastered(s.deck ?? {}),
    pace: Math.round(pace * 100) / 100,
    etaDays: left === 0 ? 0 : pace > 0 ? Math.ceil(left / pace) : null,
    streak: streak(s.activity ?? [], today),
    lastDay: [...(s.activity ?? [])].sort().at(-1) ?? null,
  };
}

export interface Overview {
  formations: FormationStats[];
  streak: { current: number; best: number };
  daysStudied: number; sessionsDone: number;
  /** Últimas `weeks` semanas, de lunes a domingo: sesiones hechas cada día (todas las formaciones). */
  heat: { day: string; n: number }[];
  /** Sesiones de cada uno de los últimos 7 días. */
  week: { day: string; n: number }[];
  /** Momento del día en que más estudias, según la hora de las sesiones completadas. */
  bestTime: 'mañana' | 'tarde' | 'noche' | null;
}

export function overview(catalogs: Catalog[], states: Record<string, StateLite>, today: string, weeks = 12): Overview {
  const empty: StateLite = { completed: {}, activity: [], deck: {} };
  const formations = catalogs.map((c) => formationStats(c, states[c.id] ?? empty, today));
  const allDays = catalogs.flatMap((c) => states[c.id]?.activity ?? []);
  const perDay: Record<string, number> = {};
  const hours: number[] = [];
  for (const c of catalogs) for (const v of Object.values(states[c.id]?.completed ?? {})) {
    const d = dayOf(v); if (!d) continue;
    perDay[d] = (perDay[d] ?? 0) + 1;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(v)) { const h = new Date(v).getHours(); if (!Number.isNaN(h)) hours.push(h); }
  }
  // La cuadrícula empieza en lunes para que cada columna sea una semana.
  const [y, m, d] = today.split('-').map(Number);
  const dow = (new Date(y, m - 1, d).getDay() + 6) % 7;
  const start = addDays(today, -(weeks * 7 - 1) + (6 - dow));
  const heat = Array.from({ length: weeks * 7 }, (_, i) => { const day = addDays(start, i); return { day, n: diffDays(day, today) >= 0 ? perDay[day] ?? 0 : -1 }; });
  const week = Array.from({ length: 7 }, (_, i) => { const day = addDays(today, i - 6); return { day, n: perDay[day] ?? 0 }; });
  const slot = (h: number) => (h >= 6 && h < 14 ? 'mañana' : h >= 14 && h < 21 ? 'tarde' : 'noche') as Overview['bestTime'];
  const tally: Record<string, number> = {};
  hours.forEach((h) => { const k = slot(h)!; tally[k] = (tally[k] ?? 0) + 1; });
  const bestTime = (Object.entries(tally).sort((a, b) => b[1] - a[1])[0]?.[0] ?? null) as Overview['bestTime'];
  return {
    formations,
    streak: streak(allDays, today),
    daysStudied: new Set(allDays).size,
    sessionsDone: formations.reduce((a, f) => a + f.done, 0),
    heat, week, bestTime,
  };
}

/** Frase de ánimo según el estado, sin prometer nada. */
export function nudge(o: Overview, f: FormationStats | undefined): string {
  if (!f || !f.done) return 'Tu primera sesión dura unos minutos. Empieza hoy y verás aquí tu progreso.';
  if (f.done === f.total) return `Has terminado el Nivel 1 de ${f.title}. Haz el examen o repasa lo que más te costó.`;
  if (o.streak.current === 0) return 'Hoy no has estudiado todavía: una sesión basta para empezar una racha nueva.';
  if (o.streak.current >= o.streak.best && o.streak.best > 1) return `Estás en tu mejor racha: ${o.streak.current} días seguidos. ¡Sigue así!`;
  if (f.pct >= 75) return `Te queda poco: solo un ${100 - f.pct} % del Nivel 1 de ${f.title}.`;
  return `Llevas ${o.streak.current} ${o.streak.current === 1 ? 'día' : 'días'} seguidos. Tu récord es ${o.streak.best}.`;
}
