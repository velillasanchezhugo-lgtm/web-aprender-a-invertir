/**
 * Planificador de objetivos.
 * Aportación mensual necesaria para alcanzar FV partiendo de PV con tasa mensual m y n meses:
 *   PMT = (FV − PV·(1+m)^n) · m / ((1+m)^n − 1); con m = 0: (FV − PV) / n.
 * El objetivo se puede expresar en euros de hoy: se infla a euros nominales con la inflación supuesta.
 */
import { monthlyRate } from './compound.ts';

export interface GoalInput { target: number; current: number; years: number; annualRate: number; inflation?: number; targetInTodayEuros?: boolean }
export interface GoalResult { monthly: number; nominalTarget: number; months: number; alreadyReached: boolean }

export function requiredMonthly(i: GoalInput): GoalResult {
  const n = Math.round(i.years * 12);
  if (n < 1) throw new Error('El plazo debe ser de al menos un mes');
  const nominalTarget = i.targetInTodayEuros ? i.target * Math.pow(1 + (i.inflation ?? 0), i.years) : i.target;
  const m = monthlyRate(i.annualRate);
  const grown = i.current * Math.pow(1 + m, n);
  if (grown >= nominalTarget) return { monthly: 0, nominalTarget, months: n, alreadyReached: true };
  const monthly = Math.abs(m) < 1e-12 ? (nominalTarget - i.current) / n : ((nominalTarget - grown) * m) / (Math.pow(1 + m, n) - 1);
  return { monthly, nominalTarget, months: n, alreadyReached: false };
}
