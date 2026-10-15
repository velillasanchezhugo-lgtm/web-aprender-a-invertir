/**
 * Interés compuesto con aportaciones periódicas.
 * - Tasa anual efectiva r convertida a mensual: m = (1 + r)^(1/12) − 1.
 * - Costes anuales f (TER, custodia…) reducen la tasa: r_neta = (1 + r)(1 − f) − 1.
 * - Real (descontando inflación i): r_real = (1 + r_neta)/(1 + i) − 1.
 * - Aportaciones a final de cada mes (convención prudente).
 * Una tasa constante es un supuesto didáctico, no una previsión: los mercados no rinden en línea recta.
 */
export interface CompoundInput {
  initial: number;
  monthly: number;
  annualRate: number; // 0.05 = 5 %
  years: number;
  annualFee?: number; // 0.002 = 0,2 %
  inflation?: number; // 0.02 = 2 %
  /** Incremento anual de la aportación (p. ej., para mantener el poder adquisitivo). */
  contributionGrowth?: number;
}
export interface YearRow {
  year: number;
  contributed: number;
  nominal: number;
  real: number; // en euros de hoy
  feesPaid: number;
}

export const monthlyRate = (annual: number) => Math.pow(1 + annual, 1 / 12) - 1;
export const netOfFees = (r: number, f = 0) => (1 + r) * (1 - f) - 1;
export const realRate = (nominal: number, inflation: number) => (1 + nominal) / (1 + inflation) - 1;

export function validate(i: CompoundInput): string[] {
  const e: string[] = [];
  if (!Number.isFinite(i.initial) || i.initial < 0) e.push('La inversión inicial debe ser 0 o mayor.');
  if (!Number.isFinite(i.monthly) || i.monthly < 0) e.push('La aportación mensual debe ser 0 o mayor.');
  if (!Number.isFinite(i.years) || i.years < 1 || i.years > 70) e.push('El plazo debe estar entre 1 y 70 años.');
  if (!Number.isFinite(i.annualRate) || i.annualRate <= -1 || i.annualRate > 0.5) e.push('La tasa anual debe estar entre −99 % y 50 %.');
  if ((i.annualFee ?? 0) < 0 || (i.annualFee ?? 0) >= 1) e.push('Los costes anuales deben estar entre 0 % y 99 %.');
  if ((i.inflation ?? 0) <= -1 || (i.inflation ?? 0) > 0.5) e.push('La inflación debe estar entre −99 % y 50 %.');
  return e;
}

export function compound(i: CompoundInput): YearRow[] {
  const years = Math.round(i.years);
  const fee = i.annualFee ?? 0;
  const infl = i.inflation ?? 0;
  const mGross = monthlyRate(i.annualRate);
  const mNet = monthlyRate(netOfFees(i.annualRate, fee));
  const g = i.contributionGrowth ?? 0;
  let balance = i.initial;
  let grossShadow = i.initial; // mismo flujo sin costes, para estimar costes acumulados
  let contributed = i.initial;
  let monthlyNow = i.monthly;
  const rows: YearRow[] = [{ year: 0, contributed, nominal: balance, real: balance, feesPaid: 0 }];
  for (let y = 1; y <= years; y++) {
    for (let m = 0; m < 12; m++) {
      balance = balance * (1 + mNet) + monthlyNow;
      grossShadow = grossShadow * (1 + mGross) + monthlyNow;
      contributed += monthlyNow;
    }
    const deflator = Math.pow(1 + infl, y);
    rows.push({ year: y, contributed, nominal: balance, real: balance / deflator, feesPaid: grossShadow - balance });
    monthlyNow *= 1 + g;
  }
  return rows;
}
