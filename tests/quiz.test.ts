import { test } from 'node:test';
import assert from 'node:assert/strict';
import rules from '../src/data/quiz.json' with { type: 'json' };
import { buildPlan, evalCond, checkScore, ROUTE, type Rules } from '../src/lib/quiz.ts';
import { readdirSync } from 'node:fs';

const R = rules as unknown as Rules;
const allCorrect = Object.fromEntries(R.questions.filter((q) => q.check).map((q) => [q.id, q.options.find((o) => o.correct)!.v]));
const lessonSlugs = new Set(readdirSync('src/content/lessons').map((f) => f.replace(/\.md$/, '')));

test('cada pregunta de comprobación tiene exactamente una respuesta correcta', () => {
  for (const q of R.questions.filter((q) => q.check)) assert.equal(q.options.filter((o) => o.correct).length, 1, q.id);
});

test('test vacío: plan general, sin contradicciones ni errores', () => {
  const p = buildPlan(R, {});
  assert.ok(p.unanswered.length > 5);
  assert.equal(p.contradictions.length, 0);
  assert.equal(p.score, 0);
  assert.deepEqual(p.route.slice(0, 10), ROUTE);
  assert.equal(p.weeks.length, 4);
});

test('respuestas contradictorias se detectan', () => {
  const p = buildPlan(R, { wish: 'growth', horizon: 'lt2', reaction: 'sellAll', lossImpact: 'severe', debt: 'yes', selfKnowledge: 'advanced' });
  const ids = p.contradictions.map((c) => c.id);
  for (const id of ['horizon-vs-wish', 'wish-vs-reaction', 'wish-vs-capacity', 'expensive-debt', 'overconfidence']) assert.ok(ids.includes(id), id);
});

test('perfil coherente sin contradicciones', () => {
  const p = buildPlan(R, { ...allCorrect, selfKnowledge: 'good', experience: ['funds'], goal: 'retirement', horizon: 'gt10', liquidity: 'no', cushion: 'gt6', debt: 'no', lossImpact: 'uncomfortable', reaction: 'plan', wish: 'balanced', time: '1to3', style: ['numbers'] });
  assert.equal(p.contradictions.length, 0);
  assert.equal(p.score, p.total);
  assert.equal(p.starting.label, 'Tienes una base sólida');
  assert.equal(p.unanswered.length, 0);
});

test('múltiple: experiencia con derivados y fallo de apalancamiento', () => {
  const p = buildPlan(R, { experience: ['stocks', 'derivatives'], c3: 'a' });
  assert.ok(p.contradictions.some((c) => c.id === 'derivatives-without-understanding'));
  assert.ok(p.reinforce.includes('apalancamiento-margen-liquidacion'));
});

test('todas las lecciones citadas por las reglas existen', () => {
  const cited = [...R.contradictions.flatMap((c) => c.lessons), ...Object.values(R.goalLessons).flat(), ...R.questions.map((q) => q.concept).filter(Boolean), ...ROUTE] as string[];
  for (const s of cited) assert.ok(lessonSlugs.has(s), `falta la lección ${s}`);
});

test('el plan nunca contiene términos de recomendación de producto', () => {
  const p = buildPlan(R, { goal: 'fast', wish: 'quick', experience: ['derivatives'] });
  const text = JSON.stringify(p).toLowerCase();
  for (const w of ['compra ', 'invierte el', '% de tus ahorros', 'te recomendamos el', 'isin']) assert.ok(!text.includes(w), w);
});

test('evalCond', () => {
  assert.equal(evalCond({ q: 'x', in: ['a'] }, { x: ['b', 'a'] }, 0), true);
  assert.equal(evalCond({ not: { q: 'x', in: ['a'] } }, {}, 0), true);
  assert.equal(evalCond({ score: 'gte', value: 2 }, {}, 2), true);
  assert.equal(checkScore(R, allCorrect).score, 4);
});
