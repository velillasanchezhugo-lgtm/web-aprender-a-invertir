/**
 * Simulador educativo de apalancamiento (CFD, margen, futuros simplificados).
 * - Exposición (nocional) = garantía aportada × apalancamiento.
 * - Resultado = exposición × variación del subyacente.
 * - Financiación (posiciones a crédito/CFD que se mantienen de un día a otro):
 *   nocional prestado × tipo anual × días / 365 (simplificación; cada entidad tiene su fórmula).
 * - Cierre por margen (normativa CNMV para CFD a minoristas): la posición se cierra cuando el
 *   saldo de la cuenta cae por debajo del 50 % de la garantía inicial.
 * - Protección de saldo negativo: en CFD para minoristas en la UE la pérdida se limita a los fondos
 *   de la cuenta de CFD. En otros productos (p. ej., futuros, cuentas de margen) la pérdida
 *   puede superar lo aportado.
 */
export interface LeverageInput {
  margin: number; // garantía aportada (EUR)
  leverage: number; // 1 = sin apalancamiento
  move: number; // −0.1 = −10 % del subyacente
  days: number;
  financingRate: number; // anual, 0.06 = 6 %
  costs?: number; // comisiones y diferencial (EUR)
  negativeBalanceProtection: boolean;
  closeOutLevel?: number; // 0.5 = 50 % de la garantía inicial
}
export interface LeverageResult {
  notional: number;
  grossPnl: number;
  financing: number;
  netPnl: number;
  endEquity: number;
  pctOnMargin: number;
  closeOutMove: number; // variación del subyacente que activa el cierre
  closedOut: boolean;
  lossBeyondDeposit: number; // deuda potencial con la entidad (si no hay protección)
  /** Pérdida aproximada si la entidad cierra justo en el umbral (sin hueco de precios). */
  closeOutLoss: number;
}

export function simulate(i: LeverageInput): LeverageResult {
  if (i.margin <= 0) throw new Error('La garantía debe ser positiva');
  if (i.leverage < 1) throw new Error('El apalancamiento mínimo es 1');
  const notional = i.margin * i.leverage;
  const borrowed = notional - i.margin;
  const financing = i.leverage > 1 ? borrowed * i.financingRate * (i.days / 365) : 0;
  const grossPnl = notional * i.move;
  const costs = i.costs ?? 0;
  const net = grossPnl - financing - costs;
  const level = i.closeOutLevel ?? 0.5;
  const closeOutMove = -(1 - level) / i.leverage; // ignorando costes y financiación
  const closedOut = i.margin + net < level * i.margin;
  let endEquity = i.margin + net;
  let lossBeyond = 0;
  if (endEquity < 0) {
    if (i.negativeBalanceProtection) { lossBeyond = 0; endEquity = 0; }
    else { lossBeyond = -endEquity; }
  }
  const effectiveNet = i.negativeBalanceProtection ? Math.max(net, -i.margin) : net;
  return { notional, grossPnl, financing, netPnl: effectiveNet, endEquity, pctOnMargin: effectiveNet / i.margin, closeOutMove, closedOut, lossBeyondDeposit: lossBeyond, closeOutLoss: -(1 - level) * i.margin };
}

/** Garantía inicial mínima por subyacente según la Resolución CNMV de 27/06/2019 (BOE-A-2019-9737), anexo I. */
export const CNMV_INITIAL_MARGIN = {
  fxMajor: 0.0333,
  indexMajorFxMinorGold: 0.05,
  commodityOtherIndex: 0.10,
  share: 0.20,
  crypto: 0.50,
} as const;
export const maxLeverage = (marginPct: number) => 1 / marginPct;
