/**
 * Rebalanceo educativo con una secuencia de rentabilidades anuales definida por el usuario
 * (escenario ficticio, no histórico). Compara "sin rebalancear" con "rebalanceo anual" a pesos objetivo.
 * Costes de rebalanceo: porcentaje sobre el importe movido.
 */
export interface RebalanceInput {
  start: number;
  weights: number[]; // suman 1
  returns: number[][]; // returns[año][activo]
  costPct?: number; // sobre lo comprado+vendido
}
export interface RebalanceRow { year: number; buyHold: number; rebalanced: number; buyHoldWeights: number[]; turnover: number }

export function simulateRebalance(i: RebalanceInput): RebalanceRow[] {
  const sum = i.weights.reduce((a, b) => a + b, 0);
  if (Math.abs(sum - 1) > 1e-6) throw new Error('Los pesos deben sumar 100 %');
  let bh = i.weights.map((w) => w * i.start);
  let rb = i.weights.map((w) => w * i.start);
  const cost = i.costPct ?? 0;
  const rows: RebalanceRow[] = [{ year: 0, buyHold: i.start, rebalanced: i.start, buyHoldWeights: [...i.weights], turnover: 0 }];
  i.returns.forEach((r, idx) => {
    bh = bh.map((v, k) => v * (1 + (r[k] ?? 0)));
    rb = rb.map((v, k) => v * (1 + (r[k] ?? 0)));
    const total = rb.reduce((a, b) => a + b, 0);
    const target = i.weights.map((w) => w * total);
    const moved = rb.reduce((acc, v, k) => acc + Math.abs(v - target[k]), 0);
    const fee = moved * cost;
    const after = total - fee;
    rb = i.weights.map((w) => w * after);
    const bhTotal = bh.reduce((a, b) => a + b, 0);
    rows.push({ year: idx + 1, buyHold: bhTotal, rebalanced: after, buyHoldWeights: bh.map((v) => v / bhTotal), turnover: moved });
  });
  return rows;
}

/**
 * Volatilidad de una cartera equiponderada de n activos con la misma volatilidad σ
 * y la misma correlación ρ entre pares: σ_p = σ · √(1/n + (1 − 1/n)·ρ).
 * Modelo simplificado para mostrar por qué diversificar reduce riesgo… hasta un límite.
 */
export function equalWeightVol(sigma: number, n: number, rho: number): number {
  if (n < 1) throw new Error('n debe ser al menos 1');
  if (rho < -1 / (n - 1 || 1) - 1e-9 && n > 1) throw new Error('Correlación incompatible con n activos');
  return sigma * Math.sqrt(1 / n + (1 - 1 / n) * rho);
}
