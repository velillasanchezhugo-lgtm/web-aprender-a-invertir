/**
 * Modelo de comisiones por operación y costes anuales de un intermediario.
 * Los datos de cada intermediario (src/data/brokers.json) indican fuente y fecha.
 * Si un componente no está verificado, el cálculo lo marca como incompleto.
 */
export interface FeeRule {
  /** Comisión fija por operación (EUR). */
  fixed?: number;
  /** Comisión proporcional (0.0012 = 0,12 %). */
  pct?: number;
  min?: number;
  max?: number;
  /** Comisión adicional de tramitación/externa por operación (EUR). */
  extra?: number;
}
export interface BrokerFees {
  id: string;
  name: string;
  /** Regla para ETF en bolsa europea en EUR. */
  etfEU?: FeeRule | null;
  /** Regla para acción en bolsa española. */
  stockES?: FeeRule | null;
  /** Regla para acción estadounidense (en EUR equivalentes salvo indicación). */
  stockUS?: FeeRule | null;
  /** Regla para plan de inversión/aportación automática, si existe. */
  savingsPlan?: FeeRule | null;
  /** Coste de cambio de divisa (0.0025 = 0,25 %). null = no verificado. */
  fxPct?: number | null;
  /** Mínimo por conversión de divisa (EUR aprox.). */
  fxMin?: number;
  /** Coste anual fijo de custodia/conectividad estimado (EUR). */
  annualFixed?: number | null;
  verified: boolean;
}

export function tradeCost(rule: FeeRule | null | undefined, amount: number): number | null {
  if (!rule) return null;
  let c = (rule.fixed ?? 0) + (rule.pct ?? 0) * amount;
  if (rule.min !== undefined) c = Math.max(c, rule.min);
  if (rule.max !== undefined) c = Math.min(c, rule.max);
  return c + (rule.extra ?? 0);
}

export type Scenario = 'monthly-small' | 'occasional' | 'foreign' | 'frequent';
export interface ScenarioInput { scenario: Scenario; amount: number; tradesPerYear: number }
export interface ScenarioResult { id: string; name: string; annual: number | null; perTrade: number | null; pctOfInvested: number | null; notes: string[] }

export function annualCost(b: BrokerFees, s: ScenarioInput): ScenarioResult {
  const notes: string[] = [];
  let rule: FeeRule | null | undefined;
  let fx = 0;
  switch (s.scenario) {
    case 'monthly-small':
      rule = b.savingsPlan ?? b.etfEU;
      if (b.savingsPlan) notes.push('Usa el plan de inversión automático del intermediario.');
      else notes.push('Sin plan automático verificado: se usa la compra manual de ETF.');
      break;
    case 'occasional':
      rule = b.etfEU; break;
    case 'foreign':
      rule = b.stockUS;
      if (b.fxPct === null || b.fxPct === undefined) { notes.push('Coste de cambio de divisa no verificado.'); }
      else fx = Math.max(b.fxPct * s.amount, b.fxMin ?? 0);
      break;
    case 'frequent':
      rule = b.stockES; break;
  }
  const per = tradeCost(rule, s.amount);
  if (per === null) return { id: b.id, name: b.name, annual: null, perTrade: null, pctOfInvested: null, notes: [...notes, 'Tarifa no disponible o no verificada para este supuesto.'] };
  const perTrade = per + fx;
  const fixed = b.annualFixed ?? 0;
  if (b.annualFixed === null) notes.push('Costes anuales fijos no verificados.');
  const annual = perTrade * s.tradesPerYear + fixed;
  const invested = s.amount * s.tradesPerYear;
  return { id: b.id, name: b.name, annual, perTrade, pctOfInvested: invested > 0 ? annual / invested : null, notes };
}
