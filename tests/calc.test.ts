import { test } from 'node:test';
import assert from 'node:assert/strict';
import { compound, monthlyRate, netOfFees, realRate, validate } from '../src/lib/calc/compound.ts';
import { realValue, cumulative, annualized, futurePrice } from '../src/lib/calc/inflation.ts';
import { requiredGain, yearsToRecover, path } from '../src/lib/calc/drawdown.ts';
import { tradeCost, annualCost } from '../src/lib/calc/fees.ts';
import { simulate, maxLeverage, CNMV_INITIAL_MARGIN } from '../src/lib/calc/leverage.ts';
import { simulateRebalance, equalWeightVol } from '../src/lib/calc/rebalance.ts';
import { requiredMonthly } from '../src/lib/calc/goals.ts';
import { parseNum } from '../src/lib/calc/format.ts';

const close = (a: number, b: number, eps = 1e-6) => assert.ok(Math.abs(a - b) < eps, `${a} ≉ ${b}`);

test('tasa mensual equivalente compone a la anual', () => {
  close(Math.pow(1 + monthlyRate(0.06), 12) - 1, 0.06);
  close(monthlyRate(0), 0);
});

test('interés compuesto sin aportaciones = fórmula cerrada', () => {
  const rows = compound({ initial: 1000, monthly: 0, annualRate: 0.05, years: 10 });
  close(rows[10].nominal, 1000 * Math.pow(1.05, 10), 1e-6);
  assert.equal(rows.length, 11);
});

test('aportaciones con tasa 0 suman linealmente', () => {
  const rows = compound({ initial: 0, monthly: 100, annualRate: 0, years: 5 });
  close(rows[5].nominal, 6000);
  close(rows[5].contributed, 6000);
  close(rows[5].feesPaid, 0);
});

test('aportaciones mensuales = anualidad pospagable', () => {
  const m = monthlyRate(0.04);
  const n = 240;
  const fv = 200 * ((Math.pow(1 + m, n) - 1) / m);
  const rows = compound({ initial: 0, monthly: 200, annualRate: 0.04, years: 20 });
  close(rows[20].nominal, fv, 1e-6);
});

test('costes y real', () => {
  close(netOfFees(0.05, 0.01), 0.0395);
  close(realRate(0.05, 0.05), 0);
  const rows = compound({ initial: 10000, monthly: 0, annualRate: 0.05, years: 20, annualFee: 0.01, inflation: 0.02 });
  close(rows[20].nominal, 10000 * Math.pow(1.0395, 20), 1e-6);
  close(rows[20].real, rows[20].nominal / Math.pow(1.02, 20), 1e-6);
  assert.ok(rows[20].feesPaid > 0);
});

test('tasa negativa y validación', () => {
  const rows = compound({ initial: 1000, monthly: 0, annualRate: -0.1, years: 2 });
  close(rows[2].nominal, 810, 1e-6);
  assert.ok(validate({ initial: -1, monthly: 0, annualRate: 0.05, years: 10 }).length > 0);
  assert.ok(validate({ initial: 0, monthly: 0, annualRate: 0.05, years: 0 }).length > 0);
  assert.equal(validate({ initial: 0, monthly: 10, annualRate: 0.05, years: 10 }).length, 0);
});

test('inflación', () => {
  close(realValue(1000, 0.02, 10), 1000 / Math.pow(1.02, 10));
  close(futurePrice(100, 0.03, 1), 103);
  const s = { 2021: 6.5, 2022: 5.7, 2023: 3.1 };
  close(cumulative(s, 2021, 2023), 1.065 * 1.057 * 1.031 - 1);
  assert.throws(() => cumulative(s, 2020, 2023));
  close(annualized(0.21, 2), 0.1);
});

test('caídas: −50 % exige +100 %', () => {
  close(requiredGain(0.5), 1);
  close(requiredGain(0), 0);
  close(requiredGain(0.2), 0.25);
  assert.throws(() => requiredGain(1));
  assert.equal(yearsToRecover(0.5, 0), Infinity);
  close(yearsToRecover(0.5, 0.07), Math.log(2) / Math.log(1.07));
  const p = path({ start: 100, drop: 0.5, rate: 1, years: 2 });
  close(p[2].value, 100);
});

test('comisiones con mínimo y máximo', () => {
  const rule = { pct: 0.0012, min: 1, max: 25 };
  close(tradeCost(rule, 100)!, 1);
  close(tradeCost(rule, 5000)!, 6);
  close(tradeCost(rule, 100000)!, 25);
  close(tradeCost({ fixed: 1, extra: 1 }, 500)!, 2);
  assert.equal(tradeCost(null, 100), null);
});

test('coste anual por supuesto, con divisa y datos no verificados', () => {
  const b = { id: 'x', name: 'X', etfEU: { fixed: 2 }, stockUS: { fixed: 1 }, stockES: null, fxPct: 0.0025, annualFixed: 0, verified: true };
  const r = annualCost(b, { scenario: 'foreign', amount: 1000, tradesPerYear: 4 });
  close(r.perTrade!, 1 + 2.5);
  close(r.annual!, 14);
  const r2 = annualCost(b, { scenario: 'frequent', amount: 1000, tradesPerYear: 50 });
  assert.equal(r2.annual, null);
  const r3 = annualCost({ ...b, fxPct: null }, { scenario: 'foreign', amount: 1000, tradesPerYear: 1 });
  assert.ok(r3.notes.some((n) => n.includes('divisa')));
});

test('apalancamiento amplifica y cierra al 50 %', () => {
  const r = simulate({ margin: 1000, leverage: 5, move: -0.1, days: 0, financingRate: 0, negativeBalanceProtection: true });
  close(r.notional, 5000);
  close(r.grossPnl, -500);
  close(r.closeOutMove, -0.1);
  assert.equal(r.closedOut, false); // justo en el umbral, no por debajo
  const r2 = simulate({ margin: 1000, leverage: 5, move: -0.11, days: 0, financingRate: 0, negativeBalanceProtection: true });
  assert.equal(r2.closedOut, true);
  const gap = simulate({ margin: 1000, leverage: 20, move: -0.08, days: 0, financingRate: 0, negativeBalanceProtection: false });
  close(gap.lossBeyondDeposit, 600);
  const gapP = simulate({ margin: 1000, leverage: 20, move: -0.08, days: 0, financingRate: 0, negativeBalanceProtection: true });
  close(gapP.netPnl, -1000);
  close(gapP.endEquity, 0);
  const fin = simulate({ margin: 1000, leverage: 5, move: 0, days: 365, financingRate: 0.05, negativeBalanceProtection: true });
  close(fin.financing, 200);
  const none = simulate({ margin: 1000, leverage: 1, move: 0.1, days: 30, financingRate: 0.05, negativeBalanceProtection: true });
  close(none.financing, 0);
  close(maxLeverage(CNMV_INITIAL_MARGIN.share), 5);
  close(maxLeverage(CNMV_INITIAL_MARGIN.fxMajor), 30, 0.1);
});

test('rebalanceo', () => {
  const rows = simulateRebalance({ start: 100, weights: [0.5, 0.5], returns: [[1, 0], [-0.5, 0]] });
  close(rows[1].buyHold, 150);
  close(rows[1].rebalanced, 150);
  close(rows[1].buyHoldWeights[0], 100 / 150);
  close(rows[2].buyHold, 100);
  close(rows[2].rebalanced, 112.5);
  assert.throws(() => simulateRebalance({ start: 1, weights: [0.5, 0.4], returns: [] }));
});

test('volatilidad por diversificación', () => {
  close(equalWeightVol(0.2, 1, 0.3), 0.2);
  close(equalWeightVol(0.2, 1000000, 0), 0, 1e-3);
  close(equalWeightVol(0.2, 1000000, 0.25), 0.1, 1e-4);
});

test('objetivos', () => {
  const r = requiredMonthly({ target: 12000, current: 0, years: 1, annualRate: 0 });
  close(r.monthly, 1000);
  const r2 = requiredMonthly({ target: 1000, current: 2000, years: 5, annualRate: 0.02 });
  assert.equal(r2.alreadyReached, true);
  const r3 = requiredMonthly({ target: 10000, current: 0, years: 10, annualRate: 0, inflation: 0.02, targetInTodayEuros: true });
  close(r3.nominalTarget, 10000 * Math.pow(1.02, 10));
});

test('lectura de números', () => {
  assert.equal(parseNum('1.234,5'), 1234.5);
  assert.equal(parseNum('1234.5'), 1234.5);
  assert.ok(Number.isNaN(parseNum('')));
});
