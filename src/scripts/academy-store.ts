/**
 * Estado de la academia en el navegador (localStorage, clave «uacademy:academy»).
 * Nada sale del dispositivo.
 */
import { read, write } from './store';
import { review, toDay, type Deck, type Goal, type LevelId } from '../lib/academy';

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
}
const EMPTY: AcademyState = { plan: null, completed: {}, actions: {}, deck: {}, activity: [], exams: {}, placement: null, notes: {} };

export const getState = (): AcademyState => {
  const s = read<AcademyState>('academy', EMPTY);
  return { ...EMPTY, ...s, completed: s.completed ?? {}, actions: s.actions ?? {}, deck: s.deck ?? {}, activity: s.activity ?? [], exams: s.exams ?? {}, notes: s.notes ?? {} };
};
export const saveState = (s: AcademyState) => write('academy', s);
export const today = () => toDay(new Date());

export function logActivity(s: AcademyState): AcademyState {
  const d = today();
  if (!s.activity.includes(d)) s.activity = [...s.activity, d].slice(-400);
  return s;
}
export function answer(s: AcademyState, qid: string, correct: boolean): AcademyState {
  s.deck = review(s.deck, qid, correct, today());
  return logActivity(s);
}
export function completeSession(s: AcademyState, id: string): AcademyState {
  s.completed[id] = new Date().toISOString();
  return logActivity(s);
}
