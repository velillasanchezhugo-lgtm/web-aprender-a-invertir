import { test } from 'node:test';
import assert from 'node:assert/strict';
import { grade, closeness, addDays, diffDays, review, dueToday, mastered, streak, placement, examPassed, orderSessions, buildPlan, nextSession, earnedBadges, pickOfDay, planToIcs, type Question, type SessionMeta } from '../src/lib/academy.ts';

const choice: Question = { type: 'choice', id: 'a', q: '?', options: ['x', 'y'], answer: 1, explain: '' };
const tf: Question = { type: 'truefalse', id: 'b', q: '?', answer: false, explain: '' };
const est: Question = { type: 'estimate', id: 'c', q: '?', answer: 100, tolerance: 10, min: 0, max: 400, step: 5, unit: '%', explain: '' };

test('corrección de los tres tipos de pregunta', () => {
  assert.equal(grade(choice, 1), true); assert.equal(grade(choice, 0), false);
  assert.equal(grade(tf, false), true); assert.equal(grade(tf, true), false);
  assert.equal(grade(est, 108), true); assert.equal(grade(est, 111), false); assert.equal(grade(est, 90), true);
  assert.equal(closeness(est as any, 100), 1); assert.ok(closeness(est as any, 400) < 0.3);
});

test('fechas: cambio de mes, de año y bisiesto', () => {
  assert.equal(addDays('2026-01-31', 1), '2026-02-01');
  assert.equal(addDays('2026-12-31', 1), '2027-01-01');
  assert.equal(addDays('2028-02-28', 1), '2028-02-29');
  assert.equal(diffDays('2026-03-28', '2026-03-30'), 2); // cambio de hora en Europa
});

test('repaso espaciado: acierto aleja, fallo devuelve a mañana', () => {
  let d = review({}, 'q1', true, '2026-10-16');
  assert.equal(d.q1.box, 1); assert.equal(d.q1.due, '2026-10-19');
  d = review(d, 'q1', true, '2026-10-19'); assert.equal(d.q1.due, '2026-10-26');
  d = review(d, 'q1', false, '2026-10-26'); assert.equal(d.q1.box, 0); assert.equal(d.q1.due, '2026-10-27'); assert.equal(d.q1.wrong, 1);
  d = review(d, 'q2', false, '2026-10-26');
  assert.deepEqual(dueToday(d, '2026-10-27'), ['q1', 'q2']);
  assert.deepEqual(dueToday(d, '2026-10-26'), []);
  for (let i = 0; i < 10; i++) d = review(d, 'q3', true, '2026-10-26');
  assert.equal(d.q3.box, 4); assert.equal(mastered(d), 1);
});

test('rachas', () => {
  assert.deepEqual(streak([], '2026-10-16'), { current: 0, best: 0 });
  assert.deepEqual(streak(['2026-10-14', '2026-10-15', '2026-10-16'], '2026-10-16'), { current: 3, best: 3 });
  assert.deepEqual(streak(['2026-10-14', '2026-10-15'], '2026-10-16'), { current: 2, best: 2 }); // ayer mantiene la racha
  assert.deepEqual(streak(['2026-10-10', '2026-10-11', '2026-10-12', '2026-10-15'], '2026-10-17'), { current: 0, best: 3 });
  assert.deepEqual(streak(['2026-10-16', '2026-10-16'], '2026-10-16'), { current: 1, best: 1 });
});

test('prueba de nivel y examen', () => {
  const map = { s1: ['p1'], s2: ['p2', 'p3'], s3: [] };
  const r = placement({ p1: true, p2: true, p3: false, p4: false, p5: false, p6: false }, map);
  assert.equal(r.level, 'cero'); assert.deepEqual(r.known, ['s1']); assert.equal(r.score, 2);
  assert.equal(placement({ p1: true, p2: true, p3: true, p4: true, p5: true, p6: true }, map).level, 'basico');
  assert.equal(examPassed(8, 10), true); assert.equal(examPassed(7, 10), false); assert.equal(examPassed(0, 0), false);
});

const cat: SessionMeta[] = [
  { id: 'a', order: 1, level: 'cero', goals: [], prereqs: [], minutes: 5 },
  { id: 'b', order: 2, level: 'cero', goals: [], prereqs: ['a'], minutes: 5 },
  { id: 'c', order: 3, level: 'cero', goals: [], prereqs: ['a'], minutes: 5 },
  { id: 'd', order: 4, level: 'cero', goals: ['objetivo'], prereqs: ['a'], minutes: 5 },
  { id: 'e', order: 5, level: 'cero', goals: [], prereqs: ['d'], minutes: 5 },
];

test('el plan respeta prerrequisitos y adelanta lo que encaja con el objetivo', () => {
  assert.deepEqual(orderSessions(cat, 'entender'), ['a', 'b', 'c', 'd', 'e']);
  assert.deepEqual(orderSessions(cat, 'objetivo'), ['a', 'd', 'b', 'c', 'e']);
  assert.deepEqual(orderSessions(cat, 'entender', ['a']), ['b', 'c', 'd', 'e']);
  assert.throws(() => orderSessions([{ ...cat[0], prereqs: ['b'] }, cat[1]], 'entender'));
});

test('reparto por días y minutos', () => {
  // 2026-10-16 es viernes (5). Lunes, miércoles y viernes.
  const p = buildPlan(cat, { goal: 'entender', minutesPerDay: 5, days: [1, 3, 5], start: '2026-10-16' });
  assert.deepEqual(p.map((x) => x.date), ['2026-10-16', '2026-10-19', '2026-10-21', '2026-10-23', '2026-10-26']);
  assert.ok(p.every((x) => x.sessions.length === 1 && x.review));
  const q = buildPlan(cat, { goal: 'entender', minutesPerDay: 10, days: [0, 1, 2, 3, 4, 5, 6], start: '2026-10-16' });
  assert.equal(q.length, 3); assert.deepEqual(q[2].sessions, ['e']);
  assert.throws(() => buildPlan(cat, { goal: 'entender', minutesPerDay: 5, days: [], start: '2026-10-16' }));
  assert.equal(nextSession(['a', 'b'], { a: 'x' }), 'b'); assert.equal(nextSession(['a'], { a: 1 }), null);
});

test('logros solo por comprender y constancia', () => {
  assert.deepEqual(earnedBadges({ completed: [], zeroIds: ['a'], streakBest: 0, examsPassed: [], masteredCards: 0, actionsDone: 0 }), []);
  const all = earnedBadges({ completed: ['a'], zeroIds: ['a'], streakBest: 7, examsPassed: ['cero'], masteredCards: 10, actionsDone: 5 });
  assert.equal(all.length, 7);
});

test('contenido del día estable y calendario', () => {
  assert.equal(pickOfDay(['x', 'y', 'z'], '2026-10-16'), pickOfDay(['x', 'y', 'z'], '2026-10-16'));
  const ics = planToIcs([{ date: '2026-10-16', sessions: ['a'], review: true }], '23:58', { a: 'Sesión A' }, 'https://x');
  assert.ok(ics.includes('DTSTART:20261016T235800')); assert.ok(ics.includes('DTEND:20261016T235900')); assert.ok(ics.includes('Sesión A'));
});

test('lo que ya sabes va al final del plan como repaso', async () => {
  const { planOrder, buildPlan } = await import('../src/lib/academy.ts');
  assert.deepEqual(planOrder(cat, 'entender', ['a']), ['b', 'c', 'd', 'e', 'a']);
  const p = buildPlan(cat, { goal: 'entender', minutesPerDay: 15, days: [0, 1, 2, 3, 4, 5, 6], start: '2026-10-16', skip: ['a'] });
  assert.deepEqual(p.flatMap((x) => x.sessions), ['b', 'c', 'd', 'e', 'a']);
});

test('examen del Nivel 1: 30 preguntas, al menos 2 por capacidad, sin repetir y reproducible', async () => {
  const { buildN1Exam, examWait } = await import('../src/lib/academy.ts');
  const caps = Array.from({ length: 12 }, (_, i) => ({ id: `c${i + 1}`, text: '', skills: [`k${i + 1}`] }));
  const bank = Array.from({ length: 120 }, (_, i) => ({ qid: `q${i}`, skills: [`k${(i % 12) + 1}`], session: `s${Math.floor(i / 3)}` }));
  const a = buildN1Exam(bank, caps, 42);
  assert.equal(a.qids.length, 30);
  assert.equal(new Set(a.qids).size, 30);
  for (const c of caps) assert.ok(a.qids.filter((q) => a.capOf[q] === c.id).length >= 2, `capacidad ${c.id}`);
  assert.deepEqual(buildN1Exam(bank, caps, 42).qids, a.qids, 'misma semilla, mismo examen');
  assert.notDeepEqual(buildN1Exam(bank, caps, 7).qids, a.qids);
  const now = new Date('2026-10-21T12:00:00Z');
  assert.ok(examWait({ at: '2026-10-21T10:00:00Z', passed: false }, now) > 20 * 3600 * 1000);
  assert.equal(examWait({ at: '2026-10-20T10:00:00Z', passed: false }, now), 0);
  assert.equal(examWait({ at: '2026-10-21T10:00:00Z', passed: true }, now), 0);
});

test('insignias del Nivel 1', () => {
  const base = { completed: [], zeroIds: ['a'], streakBest: 0, masteredCards: 0, actionsDone: 0 };
  assert.ok(earnedBadges({ ...base, examsPassed: ['n1'] } as any).includes('fundamentos'));
  assert.ok(!earnedBadges({ ...base, examsPassed: ['n1'] } as any).includes('nivel-1'));
  assert.ok(earnedBadges({ ...base, examsPassed: ['n1'], finalExercise: true, onePagePlan: true } as any).includes('nivel-1'));
});
