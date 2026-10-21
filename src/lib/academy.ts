/**
 * Motor pedagógico de umotion Academy. Puro, sin acceso al navegador, con pruebas en tests/academy.test.ts.
 *
 * Principios:
 * - Sesiones de ~5 minutos: una idea, un ejemplo, 2-3 preguntas y una acción aplicable ese mismo día.
 * - Repaso espaciado (sistema Leitner): lo que fallas vuelve mañana; lo que aciertas, cada vez más tarde.
 * - Las recompensas premian comprender y ser constante. Nunca operar, arriesgar ni gastar.
 */

// ---------- Preguntas ----------
export type Question =
  | { type: 'choice'; id: string; q: string; options: string[]; answer: number; explain: string }
  | { type: 'truefalse'; id: string; q: string; answer: boolean; explain: string }
  | { type: 'estimate'; id: string; q: string; answer: number; tolerance: number; min: number; max: number; step: number; unit: string; explain: string };

export type Response = number | boolean;

export function grade(q: Question, r: Response): boolean {
  switch (q.type) {
    case 'choice': return r === q.answer;
    case 'truefalse': return r === q.answer;
    case 'estimate': return typeof r === 'number' && Math.abs(r - q.answer) <= q.tolerance;
  }
}

/** Cuánto se acerca una estimación (1 = exacta, 0 = muy lejos). Sirve para dar pistas, no para puntuar. */
export function closeness(q: Extract<Question, { type: 'estimate' }>, r: number): number {
  const span = Math.max(q.max - q.min, 1e-9);
  return Math.max(0, 1 - Math.abs(r - q.answer) / span);
}

// ---------- Fechas (siempre AAAA-MM-DD, en hora local del usuario) ----------
export const toDay = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
export function addDays(day: string, n: number): string {
  const [y, m, d] = day.split('-').map(Number);
  const dt = new Date(y, m - 1, d + n);
  return toDay(dt);
}
export function diffDays(a: string, b: string): number {
  const [y1, m1, d1] = a.split('-').map(Number);
  const [y2, m2, d2] = b.split('-').map(Number);
  return Math.round((Date.UTC(y2, m2 - 1, d2) - Date.UTC(y1, m1 - 1, d1)) / 86400000);
}

// ---------- Repaso espaciado (Leitner) ----------
export const INTERVALS = [1, 3, 7, 14, 30];
export interface Card { box: number; due: string; seen: number; wrong: number }
export type Deck = Record<string, Card>;

export function review(deck: Deck, qid: string, correct: boolean, today: string): Deck {
  const prev = deck[qid] ?? { box: 0, due: today, seen: 0, wrong: 0 };
  const box = correct ? Math.min(prev.box + 1, INTERVALS.length - 1) : 0;
  const due = addDays(today, correct ? INTERVALS[box] : 1);
  return { ...deck, [qid]: { box, due, seen: prev.seen + 1, wrong: prev.wrong + (correct ? 0 : 1) } };
}
export function dueToday(deck: Deck, today: string, limit = 5): string[] {
  return Object.entries(deck)
    .filter(([, c]) => c.due <= today)
    .sort((a, b) => a[1].box - b[1].box || a[1].due.localeCompare(b[1].due))
    .slice(0, limit)
    .map(([id]) => id);
}
export const mastered = (deck: Deck) => Object.values(deck).filter((c) => c.box >= 3).length;

// ---------- Rachas ----------
export function streak(days: string[], today: string): { current: number; best: number } {
  const set = [...new Set(days)].sort();
  let best = 0, run = 0, prev: string | null = null;
  for (const d of set) { run = prev && diffDays(prev, d) === 1 ? run + 1 : 1; best = Math.max(best, run); prev = d; }
  // La racha actual sigue viva si el último día es hoy o ayer.
  let current = 0;
  if (prev && diffDays(prev, today) <= 1) {
    current = 1;
    for (let i = set.length - 1; i > 0 && diffDays(set[i - 1], set[i]) === 1; i--) current++;
  }
  return { current, best };
}

// ---------- Prueba de nivel ----------
export type LevelId = 'cero' | 'basico' | 'intermedio' | 'avanzado' | 'experto' | 'n1';
export const LEVEL_ORDER: LevelId[] = ['cero', 'basico', 'intermedio', 'avanzado', 'experto'];

/** Con la prueba inicial (6 preguntas) decide desde dónde empezar y qué sesiones puede saltarse. */
export function placement(results: Record<string, boolean>, conceptBySession: Record<string, string[]>): { level: LevelId; known: string[]; score: number } {
  const score = Object.values(results).filter(Boolean).length;
  const known = Object.entries(conceptBySession).filter(([, qids]) => qids.length > 0 && qids.every((q) => results[q])).map(([s]) => s);
  return { level: score >= 6 ? 'basico' : 'cero', known, score };
}

export const examPassed = (correct: number, total: number) => total > 0 && correct / total >= 0.8;

// ---------- Planificador de sesiones ----------
export type Goal = 'entender' | 'objetivo' | 'jubilacion' | 'miedo' | 'ordenar';
export interface SessionMeta { id: string; order: number; level: LevelId; goals: Goal[]; prereqs: string[]; minutes: number }
export interface PlanInput { goal: Goal; minutesPerDay: 5 | 10 | 15; days: number[]; start: string; skip?: string[] }
export interface PlanDay { date: string; sessions: string[]; review: boolean }

/**
 * Ordena las sesiones respetando los prerrequisitos y adelantando las que encajan con el objetivo.
 * Algoritmo: orden topológico; entre las disponibles se elige la de menor (orden − 3 si encaja con el objetivo).
 */
export function orderSessions(catalog: SessionMeta[], goal: Goal, skip: string[] = []): string[] {
  const left = new Map(catalog.filter((s) => !skip.includes(s.id)).map((s) => [s.id, s]));
  const done = new Set<string>(skip);
  const out: string[] = [];
  const score = (s: SessionMeta) => s.order - (s.goals.includes(goal) ? 3 : 0);
  while (left.size) {
    const ready = [...left.values()].filter((s) => s.prereqs.every((p) => done.has(p) || !catalog.some((c) => c.id === p)));
    if (!ready.length) throw new Error('Ciclo de prerrequisitos');
    ready.sort((a, b) => score(a) - score(b) || a.order - b.order);
    const next = ready[0];
    out.push(next.id); done.add(next.id); left.delete(next.id);
  }
  return out;
}

/** Reparte una lista ordenada de sesiones en los días elegidos (0 = domingo … 6 = sábado). Cada día de estudio incluye repaso. */
export function schedule(queue: string[], input: Omit<PlanInput, 'goal' | 'skip'>): PlanDay[] {
  if (!input.days.length) throw new Error('Elige al menos un día');
  const rest = [...queue];
  const perDay = input.minutesPerDay / 5;
  const plan: PlanDay[] = [];
  let date = input.start;
  let guard = 0;
  while (rest.length && guard++ < 1000) {
    const [y, m, d] = date.split('-').map(Number);
    if (input.days.includes(new Date(y, m - 1, d).getDay())) plan.push({ date, sessions: rest.splice(0, perDay), review: true });
    date = addDays(date, 1);
  }
  return plan;
}

/** Plan completo: orden pedagógico según el objetivo; lo que ya sabes (skip) va al final como repaso. */
export function buildPlan(catalog: SessionMeta[], input: PlanInput): PlanDay[] {
  const skip = input.skip ?? [];
  const order = [...orderSessions(catalog, input.goal, skip), ...skip.filter((id) => catalog.some((c) => c.id === id))];
  return schedule(order, input);
}
export const planOrder = (catalog: SessionMeta[], goal: Goal, known: string[] = []) => [...orderSessions(catalog, goal, known), ...known.filter((id) => catalog.some((c) => c.id === id))];

/** Siguiente sesión pendiente según el plan y lo completado. */
export function nextSession(order: string[], completed: Record<string, unknown>): string | null {
  return order.find((id) => !completed[id]) ?? null;
}

// ---------- Logros (solo por comprender y ser constante) ----------
export interface BadgeInput { completed: string[]; zeroIds: string[]; streakBest: number; examsPassed: LevelId[]; masteredCards: number; actionsDone: number; finalExercise?: boolean; onePagePlan?: boolean }
export const BADGES = [
  { id: 'primer-paso', title: 'Primer paso', desc: 'Completaste tu primera sesión.', test: (b: BadgeInput) => b.completed.length >= 1 },
  { id: 'tres-dias', title: 'Tres días seguidos', desc: 'Aprendiste tres días seguidos.', test: (b: BadgeInput) => b.streakBest >= 3 },
  { id: 'semana', title: 'Una semana de hábito', desc: 'Siete días seguidos aprendiendo.', test: (b: BadgeInput) => b.streakBest >= 7 },
  { id: 'manos-a-la-obra', title: 'Manos a la obra', desc: 'Hiciste cinco acciones prácticas.', test: (b: BadgeInput) => b.actionsDone >= 5 },
  { id: 'memoria', title: 'Lo tienes claro', desc: 'Dominas diez conceptos en el repaso.', test: (b: BadgeInput) => b.masteredCards >= 10 },
  { id: 'camino-cero', title: 'Camino Cero completado', desc: 'Terminaste las 14 sesiones del nivel Cero.', test: (b: BadgeInput) => b.zeroIds.length > 0 && b.zeroIds.every((id) => b.completed.includes(id)) },
  { id: 'examen-cero', title: 'Nivel Cero superado', desc: 'Aprobaste el examen del nivel Cero.', test: (b: BadgeInput) => b.examsPassed.includes('cero') },
  { id: 'fundamentos', title: 'Fundamentos de inversión', desc: 'Aprobaste el examen del Nivel 1.', test: (b: BadgeInput) => b.examsPassed.includes('n1') },
  { id: 'nivel-1', title: 'Nivel 1 completo', desc: 'Examen, ejercicio con dinero ficticio y tu plan en una página.', test: (b: BadgeInput) => b.examsPassed.includes('n1') && !!b.finalExercise && !!b.onePagePlan },
] as const;
export const earnedBadges = (b: BadgeInput) => BADGES.filter((x) => x.test(b)).map((x) => x.id);

// ---------- Contenido del día ----------
/** Elige de forma estable un elemento para cada día (mismo para todos los usuarios ese día). */
export function pickOfDay<T>(items: T[], day: string): T {
  let h = 0;
  for (const ch of day) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return items[h % items.length];
}

/** Calendario .ics con las sesiones planificadas a una hora. */
export function planToIcs(plan: PlanDay[], time: string, titles: Record<string, string>, url: string): string {
  const [hh, mm] = time.split(':').map(Number);
  const stamp = (day: string, h: number, m: number) => `${day.replace(/-/g, '')}T${String(h).padStart(2, '0')}${String(m).padStart(2, '0')}00`;
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//umotion Academy//Plan//ES', 'CALSCALE:GREGORIAN'];
  plan.forEach((p, i) => {
    const end = Math.min(hh * 60 + mm + p.sessions.length * 5 + 2, 23 * 60 + 59);
    lines.push('BEGIN:VEVENT', `UID:plan-${i}-${p.date}@umotion-academy`, `DTSTAMP:${stamp(p.date, hh, mm)}`, `DTSTART:${stamp(p.date, hh, mm)}`, `DTEND:${stamp(p.date, Math.floor(end / 60) % 24, end % 60)}`,
      `SUMMARY:umotion Academy · ${p.sessions.map((s) => titles[s] ?? s).join(' + ')}`.slice(0, 250), `DESCRIPTION:Tu sesión de hoy (${p.sessions.length * 5} min): ${url}`, 'BEGIN:VALARM', 'TRIGGER:-PT0M', 'ACTION:DISPLAY', 'DESCRIPTION:Tu sesión de 5 minutos', 'END:VALARM', 'END:VEVENT');
  });
  lines.push('END:VCALENDAR');
  return lines.join('\r\n');
}

/**
 * Recordatorio diario recurrente a las 16:00 (hora de España) para el calendario del móvil.
 * Funciona sin cuenta ni servidor y en cualquier dispositivo, también en iPhone.
 */
export function dailyReminderIcs(startDay: string, url: string): string {
  const d = startDay.replace(/-/g, '');
  return [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//umotion Academy//Recordatorio//ES', 'CALSCALE:GREGORIAN',
    'BEGIN:VTIMEZONE', 'TZID:Europe/Madrid',
    'BEGIN:DAYLIGHT', 'TZOFFSETFROM:+0100', 'TZOFFSETTO:+0200', 'TZNAME:CEST', 'DTSTART:19700329T020000', 'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU', 'END:DAYLIGHT',
    'BEGIN:STANDARD', 'TZOFFSETFROM:+0200', 'TZOFFSETTO:+0100', 'TZNAME:CET', 'DTSTART:19701025T030000', 'RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU', 'END:STANDARD',
    'END:VTIMEZONE',
    'BEGIN:VEVENT', `UID:recordatorio-diario-${d}@umotion-academy`, `DTSTAMP:${d}T000000Z`,
    `DTSTART;TZID=Europe/Madrid:${d}T160000`, `DTEND;TZID=Europe/Madrid:${d}T160500`, 'RRULE:FREQ=DAILY',
    'SUMMARY:umotion Academy · 5 minutos para no perder tu racha', `DESCRIPTION:Tu sesión de hoy: ${url}`, `URL:${url}`,
    'BEGIN:VALARM', 'TRIGGER:PT0M', 'ACTION:DISPLAY', 'DESCRIPTION:No pierdas tu racha: 5 minutos hoy', 'END:VALARM',
    'END:VEVENT', 'END:VCALENDAR',
  ].join('\r\n');
}

// ---------- Examen del Nivel 1 (docs/CURRICULO.md, sección 9.1) ----------
export interface ExamBankItem { qid: string; skills: string[]; session: string }
export interface Capacity { id: string; text: string; skills: string[] }

/** Generador pseudoaleatorio con semilla (mulberry32), para exámenes reproducibles y probables. */
export function seeded(seed: number) {
  let t = seed >>> 0;
  return () => { t += 0x6d2b79f5; let r = Math.imul(t ^ (t >>> 15), 1 | t); r ^= r + Math.imul(r ^ (r >>> 7), 61 | r); return ((r ^ (r >>> 14)) >>> 0) / 4294967296; };
}
const shuffle = <T>(xs: T[], rnd: () => number) => { const a = [...xs]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

/**
 * 30 preguntas: al menos `perCapacity` de cada capacidad (sin repetir pregunta ni, si se puede, sesión),
 * y el resto al azar del banco. Devuelve también a qué capacidad cuenta cada pregunta.
 */
export function buildN1Exam(bank: ExamBankItem[], caps: Capacity[], seed: number, total = 30, perCapacity = 2): { qids: string[]; capOf: Record<string, string> } {
  const rnd = seeded(seed);
  const pool = shuffle(bank, rnd);
  const chosen: string[] = [];
  const capOf: Record<string, string> = {};
  const usedSessions = new Set<string>();
  for (const c of caps) {
    const matches = pool.filter((b) => !chosen.includes(b.qid) && b.skills.some((s) => c.skills.includes(s)));
    const fresh = matches.filter((b) => !usedSessions.has(b.session));
    for (const b of [...fresh, ...matches.filter((m) => !fresh.includes(m))].slice(0, perCapacity)) { chosen.push(b.qid); capOf[b.qid] = c.id; usedSessions.add(b.session); }
  }
  for (const b of pool) {
    if (chosen.length >= total) break;
    if (chosen.includes(b.qid)) continue;
    chosen.push(b.qid);
    capOf[b.qid] = caps.find((c) => b.skills.some((s) => c.skills.includes(s)))?.id ?? '';
  }
  return { qids: shuffle(chosen, rnd), capOf };
}

/** Tras suspender, hay que esperar 24 horas para repetir. */
export function examWait(last: { at: string; passed: boolean } | undefined, now = new Date()): number {
  if (!last || last.passed) return 0;
  const ms = new Date(last.at).getTime() + 24 * 3600 * 1000 - now.getTime();
  return Math.max(0, ms);
}
