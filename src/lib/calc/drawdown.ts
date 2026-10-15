/**
 * Caídas y recuperación.
 * - Subida necesaria para recuperar una caída d: d / (1 − d). Ej.: −50 % exige +100 %.
 * - Años para recuperar a una tasa constante r (supuesto): ln(1/(1−d)) / ln(1+r).
 */
export function requiredGain(drop: number): number {
  if (drop < 0 || drop >= 1) throw new Error('La caída debe estar entre 0 % y 99,99 %');
  return drop / (1 - drop);
}
export function yearsToRecover(drop: number, rate: number): number {
  if (rate <= 0) return Infinity;
  if (drop === 0) return 0;
  return Math.log(1 / (1 - drop)) / Math.log(1 + rate);
}
/**
 * Trayectoria anual: caída inicial y recuperación a tasa constante, con aportaciones anuales opcionales.
 * Devuelve el valor de la cartera y lo aportado, para ver el efecto de seguir aportando.
 */
export function path(opts: { start: number; drop: number; rate: number; years: number; yearly?: number }) {
  const { start, drop, rate, years, yearly = 0 } = opts;
  const rows = [{ year: 0, value: start, contributed: start }];
  let v = start * (1 - drop);
  let c = start;
  rows.push({ year: 1, value: v + yearly, contributed: c + yearly });
  v += yearly; c += yearly;
  for (let y = 2; y <= years; y++) {
    v = v * (1 + rate) + yearly;
    c += yearly;
    rows.push({ year: y, value: v, contributed: c });
  }
  return rows;
}
