import { test } from 'node:test';
import assert from 'node:assert/strict';
import data from '../src/data/brokers.json' with { type: 'json' };
import sources from '../src/data/sources.json' with { type: 'json' };
import { tradeCost, annualCost } from '../src/lib/calc/fees.ts';

const by = Object.fromEntries(data.brokers.map((b) => [b.id, b]));
const close = (a: number | null, b: number) => assert.ok(a !== null && Math.abs(a - b) < 1e-9, `${a} ≠ ${b}`);

test('cada campo de cada bróker tiene estado de verificación y fuente existente', () => {
  for (const b of data.brokers) for (const [k, v] of Object.entries(b)) {
    if (v && typeof v === 'object' && !Array.isArray(v) && 'v' in v) {
      assert.ok(['si', 'parcial', 'no'].includes((v as any).v), `${b.id}.${k}`);
      assert.ok((sources as any)[(v as any).src], `${b.id}.${k}: fuente ${(v as any).src}`);
    }
  }
});

test('MyInvestor: 0,12 % con mínimo 1 € (ETF) / 3 € (acciones) y máximo 25 €', () => {
  close(tradeCost(by.myinvestor.fees.etfEU, 100), 1);
  close(tradeCost(by.myinvestor.fees.etfEU, 5000), 6);
  close(tradeCost(by.myinvestor.fees.stockES, 1000), 3);
  close(tradeCost(by.myinvestor.fees.stockES, 50000), 25);
});

test('DEGIRO: BME 1 € + 1 €, ETF globales 2 € + 1 €, conectividad excluida en Madrid', () => {
  close(tradeCost(by.degiro.fees.stockES, 1500), 2);
  close(tradeCost(by.degiro.fees.etfEU, 1000), 3);
  const r = annualCost({ ...by.degiro.fees, id: 'degiro', name: 'DEGIRO', verified: true } as any, { scenario: 'frequent', amount: 1500, tradesPerYear: 10 });
  close(r.annual, 20);
  const f = annualCost({ ...by.degiro.fees, id: 'degiro', name: 'DEGIRO', verified: true } as any, { scenario: 'foreign', amount: 1000, tradesPerYear: 1 });
  close(f.annual, 2 + 2.5 + 2.5);
});

test('Interactive Brokers: 0,05 % mínimo 3 € en Europa; divisa mínimo 2', () => {
  close(tradeCost(by['interactive-brokers'].fees.etfEU, 1000), 3);
  close(tradeCost(by['interactive-brokers'].fees.etfEU, 10000), 5);
  const f = annualCost({ ...by['interactive-brokers'].fees, id: 'ibkr', name: 'IBKR', verified: true } as any, { scenario: 'foreign', amount: 1000, tradesPerYear: 1 });
  close(f.perTrade, 1 + 2);
});

test('Trade Republic: datos parciales y divisa sin verificar', () => {
  assert.equal(by['trade-republic'].fees.v, 'parcial');
  const f = annualCost({ ...by['trade-republic'].fees, id: 'tr', name: 'TR', verified: false } as any, { scenario: 'foreign', amount: 1000, tradesPerYear: 1 });
  assert.ok(f.notes.some((n) => n.includes('divisa')));
});
