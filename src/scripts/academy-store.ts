/**
 * Estado de la academia en el navegador (localStorage, clave «uacademy:academy»).
 * Cada formación guarda su progreso aparte: Inversión en «academy», Emprendimiento en «academy-emprendimiento».
 * Nada sale del dispositivo.
 */
import { read, write } from './store';
import { review, toDay, type Deck, type Goal, type LevelId } from '../lib/academy';
import { observe, exposeSession, type Model, type Profile } from '../lib/adaptive';

export interface Plan { goal: Goal; minutesPerDay: 5 | 10 | 15; days: number[]; time: string; start: string; order: string[]; skip: string[]; createdAt: string }
export interface AcademyState {
  plan: Plan | null;
  completed: Record<string, string>; // sesión -> fecha
  actions: Record<string, string>; // sesión -> fecha de la acción hecha
  deck: Deck;
  activity: string[]; // días con actividad de aprendizaje
  exams: Partial<Record<LevelId, { correct: number; total: number; at: string; passed: boolean }>>;
  placement: { score: number; known: string[]; at: string } | null;
  notes: Record<string, string>;
  /** Perfil para personalizar (objetivo, experiencia, intereses). */
  profile: Profile | null;
  /** Modelo del alumno: dominio estimado de cada competencia. */
  model: Model;
  /** Diagnóstico adaptativo hecho (fecha y nº de preguntas). */
  diagnostic: { at: string; n: number } | null;
}
const EMPTY: AcademyState = { plan: null, completed: {}, actions: {}, deck: {}, activity: [], exams: {}, placement: null, notes: {}, profile: null, model: {}, diagnostic: null };

export type StoreKey = 'academy' | 'academy-emprendimiento';
export const getState = (key: StoreKey = 'academy'): AcademyState => {
  const s = read<AcademyState>(key, EMPTY);
  return { ...EMPTY, ...s, completed: s.completed ?? {}, actions: s.actions ?? {}, deck: s.deck ?? {}, activity: s.activity ?? [], exams: s.exams ?? {}, notes: s.notes ?? {}, model: s.model ?? {}, profile: s.profile ?? null, diagnostic: s.diagnostic ?? null };
};
export const saveState = (s: AcademyState, key: StoreKey = 'academy') => write(key, s);
export const today = () => toDay(new Date());

export function logActivity(s: AcademyState): AcademyState {
  const d = today();
  if (!s.activity.includes(d)) s.activity = [...s.activity, d].slice(-400);
  return s;
}
/** Qué mide cada pregunta: competencias y probabilidad de acertar por azar. */
export interface QMeta { skills: string[]; guess: number }

/** Registra una respuesta: repaso espaciado y, si se conoce qué mide, modelo del alumno. */
export function answer(s: AcademyState, qid: string, correct: boolean, meta?: QMeta, opts: { learn?: number; spaced?: boolean } = {}): AcademyState {
  if (opts.spaced !== false) s.deck = review(s.deck, qid, correct, today());
  if (meta?.skills.length) s.model = observe(s.model, meta.skills, correct, meta.guess, today(), { profile: s.profile, learn: opts.learn });
  return logActivity(s);
}
export function completeSession(s: AcademyState, id: string, skills: string[] = []): AcademyState {
  s.completed[id] = new Date().toISOString();
  if (skills.length) s.model = exposeSession(s.model, skills, today(), undefined, s.profile);
  return logActivity(s);
}
