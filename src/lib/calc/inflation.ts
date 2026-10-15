/**
 * Poder adquisitivo.
 * Valor real de una cantidad tras n años con inflación i constante: V / (1 + i)^n.
 * Con una serie histórica de tasas anuales: V / Π(1 + i_t).
 */
export const realValue = (amount: number, inflation: number, years: number) =>
  amount / Math.pow(1 + inflation, years);

/** Precio futuro equivalente: lo que costará mañana lo que hoy cuesta `amount`. */
export const futurePrice = (amount: number, inflation: number, years: number) =>
  amount * Math.pow(1 + inflation, years);

/** Inflación acumulada entre dos años de una serie {año: tasa (%)}; incluye ambos extremos. */
export function cumulative(series: Record<number, number>, from: number, to: number): number {
  if (to < from) throw new Error('Rango no válido');
  let factor = 1;
  for (let y = from; y <= to; y++) {
    const v = series[y];
    if (v === undefined) throw new Error(`Falta el dato de ${y}`);
    factor *= 1 + v / 100;
  }
  return factor - 1;
}

/** Tasa anual media geométrica equivalente a una inflación acumulada en n años. */
export const annualized = (cum: number, years: number) => Math.pow(1 + cum, 1 / years) - 1;
