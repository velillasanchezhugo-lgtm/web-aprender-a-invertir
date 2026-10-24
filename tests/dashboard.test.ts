import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formationStats, overview, nudge, dayOf, type Catalog } from '../src/lib/dashboard.ts';

const cat: Catalog = {
  id: 'claude', title: 'Claude', href: '/es/claude/', cls: 'p-cla',
  tracks: { a: 'Camino Cero', b: 'Pedir bien' },
  sessions: [
    { id: 's1', track: 'a', title: 'Uno', href: '/1/' }, { id: 's2', track: 'a', title: 'Dos', href: '/2/' },
    { id: 's3', track: 'b', title: 'Tres', href: '/3/' }, { id: 's4', track: 'b', title: 'Cuatro', href: '/4/' },
  ],
};
const today = '2026-10-24';

test('progreso, siguiente sesión y módulo más avanzado', () => {
  const f = formationStats(cat, { completed: { s1: '2026-10-20T10:00:00', s2: '2026-10-22T18:00:00', otra: '2026-10-22' }, activity: ['2026-10-23', '2026-10-24'], deck: { q1: { box: 3, due: today, seen: 3, wrong: 0 } } }, today);
  assert.equal(f.done, 2);
  assert.equal(f.pct, 50);
  assert.equal(f.next?.id, 's3');
  assert.equal(f.strongest, 'Camino Cero');
  assert.equal(f.mastered, 1);
  assert.deepEqual(f.streak, { current: 2, best: 2 });
  // 2 sesiones en 28 días: faltan 2 → 28 días a ese ritmo
  assert.equal(f.etaDays, 28);
});

test('sin actividad no hay ritmo ni racha', () => {
  const f = formationStats(cat, { completed: {}, activity: [], deck: {} }, today);
  assert.equal(f.pct, 0);
  assert.equal(f.etaDays, null);
  assert.equal(f.next?.id, 's1');
  assert.match(nudge(overview([cat], {}, today), f), /primera sesión/);
});

test('la cuadrícula de actividad empieza en lunes y termina la semana de hoy', () => {
  const o = overview([cat], { claude: { completed: { s1: '2026-10-24T09:00:00', s2: '2026-10-24T09:30:00' }, activity: ['2026-10-24'], deck: {} } }, today, 4);
  assert.equal(o.heat.length, 28);
  assert.equal(new Date(o.heat[0].day + 'T12:00').getDay(), 1);
  assert.equal(o.heat.find((h) => h.day === today)?.n, 2);
  assert.equal(o.heat.at(-1)?.n, -1); // domingo 25: aún no ha llegado
  assert.equal(o.week.at(-1)?.n, 2);
  assert.equal(o.bestTime, 'mañana');
  assert.equal(o.sessionsDone, 2);
});

test('la racha global junta los días de todas las formaciones', () => {
  const o = overview([cat, { ...cat, id: 'chatgpt' }], { claude: { completed: {}, activity: ['2026-10-22', '2026-10-24'], deck: {} }, chatgpt: { completed: {}, activity: ['2026-10-23'], deck: {} } }, today);
  assert.deepEqual(o.streak, { current: 3, best: 3 });
  assert.equal(o.daysStudied, 3);
});

test('fechas guardadas como día o como marca ISO', () => {
  assert.equal(dayOf('2026-10-24'), '2026-10-24');
  assert.equal(dayOf('no es fecha'), null);
});
