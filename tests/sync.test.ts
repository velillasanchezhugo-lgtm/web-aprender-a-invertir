import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mergeAcademy, mergeProgress, mergeSnapshot, unionEarliest, mergeDeck, mergeModel } from '../src/lib/sync.ts';
import { madridParts, isSendHour, reminderFor, daysBetween, validSubscription } from '../api/_reminder-core.js';
import { dailyReminderIcs } from '../src/lib/academy.ts';

test('unir lo completado conserva todo y la fecha más antigua', () => {
  assert.deepEqual(unionEarliest({ a: '2026-10-02', b: '2026-10-05' }, { a: '2026-10-01', c: '2026-10-03' }), { a: '2026-10-01', b: '2026-10-05', c: '2026-10-03' });
});

test('repaso y modelo: gana lo más practicado', () => {
  const d = mergeDeck({ q: { box: 1, due: '2026-10-05', seen: 1, wrong: 0 } }, { q: { box: 3, due: '2026-10-20', seen: 4, wrong: 1 }, r: { box: 0, due: '2026-10-02', seen: 1, wrong: 1 } });
  assert.equal(d.q.seen, 4); assert.ok(d.r);
  const m = mergeModel({ a: { p: 0.9, n: 5, ok: 5, last: '2026-10-10' } }, { a: { p: 0.4, n: 2, ok: 1, last: '2026-10-12' } });
  assert.equal(m.a.p, 0.9);
});

test('academia: nada se pierde al iniciar sesión en otro dispositivo', () => {
  const local = { completed: { s1: '2026-10-10' }, activity: ['2026-10-10'], exams: { cero: { correct: 10, total: 14, passed: false } }, notes: { s1: 'mi nota' }, plan: { goal: 'objetivo', createdAt: '2026-10-10T10:00:00Z' }, profile: null, deck: {}, model: {}, actions: {} };
  const remote = { completed: { s2: '2026-10-01' }, activity: ['2026-10-01', '2026-10-10'], exams: { cero: { correct: 12, total: 14, passed: true } }, notes: { s1: '', s2: 'otra' }, plan: { goal: 'jubilacion', createdAt: '2026-10-12T10:00:00Z' }, profile: { goal: 'jubilacion', experience: 'algo', interests: [], createdAt: '2026-10-12' }, deck: {}, model: {}, actions: { s2: '2026-10-01' } };
  const m = mergeAcademy(local, remote) as any;
  assert.deepEqual(Object.keys(m.completed).sort(), ['s1', 's2']);
  assert.deepEqual(m.activity, ['2026-10-01', '2026-10-10']);
  assert.equal(m.exams.cero.correct, 12); assert.equal(m.exams.cero.passed, true);
  assert.equal(m.notes.s1, 'mi nota'); assert.equal(m.notes.s2, 'otra');
  assert.equal(m.plan.goal, 'jubilacion', 'el plan más reciente gana');
  assert.equal(m.profile.experience, 'algo');
  assert.deepEqual(m.actions, { s2: '2026-10-01' });
});

test('progreso y instantánea completa', () => {
  const p = mergeProgress({ completed: { l1: 'x' }, bookmarks: ['/a'], tools: { t: 2 }, reviews: {}, last: { at: '2026-10-02', path: '/a' } }, { completed: { l2: 'y' }, bookmarks: ['/b', '/a'], tools: { t: 5 }, reviews: {}, last: { at: '2026-10-01', path: '/b' } }) as any;
  assert.deepEqual(Object.keys(p.completed).sort(), ['l1', 'l2']);
  assert.deepEqual(p.bookmarks.sort(), ['/a', '/b']);
  assert.equal(p.tools.t, 5); assert.equal(p.last.path, '/a');
  const s = mergeSnapshot({ checklist: { a: 1 } }, { checklist: { b: 1 }, practice: { x: 1 } });
  assert.deepEqual(s.checklist, { a: 1 }); assert.deepEqual(s.practice, { x: 1 }); assert.equal(s.academy, undefined);
});

test('hora de España con horario de verano e invierno', () => {
  assert.deepEqual(madridParts(new Date('2026-07-15T14:00:00Z')), { day: '2026-07-15', hour: 16 });
  assert.deepEqual(madridParts(new Date('2026-12-15T15:00:00Z')), { day: '2026-12-15', hour: 16 });
  assert.equal(isSendHour(new Date('2026-07-15T14:30:00Z')), true);
  assert.equal(isSendHour(new Date('2026-07-15T15:10:00Z')), false, 'en verano, la ejecución de las 15 UTC no envía');
  assert.equal(isSendHour(new Date('2026-12-15T14:10:00Z')), false, 'en invierno, la de las 14 UTC no envía');
  assert.equal(madridParts(new Date('2026-12-31T23:30:00Z')).day, '2027-01-01');
});

test('qué recordatorio toca', () => {
  assert.equal(reminderFor({ last_active: '2026-10-19', streak: 3 }, '2026-10-19'), null, 'si ya estudió hoy, nada');
  assert.match(reminderFor({ last_active: '2026-10-18', streak: 6 }, '2026-10-19')!.title, /6 días/);
  assert.match(reminderFor({ last_active: '2026-10-18', streak: 1 }, '2026-10-19')!.title, /racha/);
  assert.match(reminderFor({ last_active: '2026-10-10', streak: 4 }, '2026-10-19')!.title, /menos/);
  assert.equal(reminderFor({ last_active: '2026-08-01', streak: 4 }, '2026-10-19'), null, 'más de 30 días: no molestar');
  assert.ok(reminderFor({ last_active: null, streak: 0 }, '2026-10-19'));
  assert.equal(daysBetween('2026-03-28', '2026-03-30'), 2);
});

test('suscripción push válida', () => {
  const keys = { p256dh: 'BNcRdreALRFXTkOOUHK1EtK2wtaz5Ry4YfYCA_0QTpQtUbVlUls0VJXg7A8u-Ts1XbjhazAkj7I99e8QcYP7DkM', auth: 'tBHItJI5svbpez7KI4CCXg' };
  assert.ok(validSubscription({ endpoint: 'https://fcm.googleapis.com/fcm/send/abc', keys }));
  assert.ok(validSubscription({ endpoint: 'https://updates.push.services.mozilla.com/wpush/v2/abc', keys }));
  assert.ok(validSubscription({ endpoint: 'https://web.push.apple.com/QF0abc', keys }));
  assert.ok(validSubscription({ endpoint: 'https://wns2-par02p.notify.windows.com/w/?token=abc', keys }));
  assert.ok(!validSubscription({ endpoint: 'http://fcm.googleapis.com/x', keys }), 'sin https');
  assert.ok(!validSubscription({ endpoint: 'https://x' }));
  // Solo servicios push conocidos: evita que el servidor haga peticiones a cualquier dirección (SSRF).
  assert.ok(!validSubscription({ endpoint: 'https://169.254.169.254/latest', keys }));
  assert.ok(!validSubscription({ endpoint: 'https://fcm.googleapis.com.evil.example/x', keys }));
  assert.ok(!validSubscription({ endpoint: 'https://evil.example/?fcm.googleapis.com', keys }));
  assert.ok(!validSubscription({ endpoint: 'https://fcm.googleapis.com:8443/x', keys }), 'sin puertos raros');
  assert.ok(!validSubscription({ endpoint: 'https://fcm.googleapis.com/x', keys: { p256dh: '<script>', auth: keys.auth } }));
  assert.ok(!validSubscription({ endpoint: 'https://fcm.googleapis.com/x', keys: { p256dh: keys.p256dh, auth: 'x'.repeat(200) } }));
});

test('recordatorio diario para el calendario a las 16:00 de Madrid', () => {
  const ics = dailyReminderIcs('2026-10-19', 'https://ejemplo.es/es/mi-plan/');
  assert.match(ics, /RRULE:FREQ=DAILY/);
  assert.match(ics, /DTSTART;TZID=Europe\/Madrid:20261019T160000/);
  assert.match(ics, /BEGIN:VTIMEZONE/);
  assert.match(ics, /BEGIN:VALARM/);
});

test('envío diario: avisa a quien no ha estudiado, salta a quien sí y limpia suscripciones caducadas', async () => {
  const { runReminders } = await import('../api/_reminder-core.js');
  const rows = [
    { endpoint: 'https://a', last_active: '2026-10-18', streak: 4 },
    { endpoint: 'https://b', last_active: '2026-10-19', streak: 2 },
    { endpoint: 'https://c', last_active: '2026-10-15', streak: 1 },
    { endpoint: 'https://d', last_active: '2026-10-18', streak: 1 },
  ];
  const sent: string[] = [], marked: string[] = [], removed: string[] = [];
  const r = await runReminders({
    today: '2026-10-19', pageSize: 2,
    page: async (after: string, size: number) => rows.filter((x) => x.endpoint > after).slice(0, size),
    send: async (s: any, msg: any) => { if (s.endpoint === 'https://d') throw Object.assign(new Error('gone'), { statusCode: 410 }); sent.push(`${s.endpoint}:${msg.title}`); },
    markSent: async (e: string) => { marked.push(e); },
    remove: async (e: string) => { removed.push(e); },
  });
  assert.deepEqual(r, { sent: 2, removed: 1, skipped: 1 });
  assert.match(sent[0], /https:\/\/a:.*4 días/);
  assert.deepEqual(marked.sort(), ['https://a', 'https://c']);
  assert.deepEqual(removed, ['https://d']);
});

test('la mezcla descarta datos mal formados o peligrosos que lleguen de la nube', () => {
  const remote = JSON.parse(`{
    "academy": {
      "completed": { "__proto__": "x", "s1": "2026-10-01T10:00:00.000Z", "s2": { "malo": true } },
      "deck": { "q1": null, "q2": { "box": 1, "due": "2026-10-20", "seen": 2, "wrong": 0 }, "q3": "texto" },
      "model": { "k1": { "p": 7, "n": 1 }, "k2": { "p": 0.5, "n": 3, "ok": 2, "last": "2026-10-01" }, "__proto__": { "p": 0.1, "n": 1 } },
      "activity": ["2026-10-01", "<img src=x>", 5],
      "notes": { "s1": { "no": "texto" }, "s2": "Mi nota" }
    },
    "progress": { "bookmarks": ["/es/glosario/", "javascript:alert(1)", "//evil.example/", 3], "tools": { "a": 2, "b": "x" } }
  }`);
  const out = mergeSnapshot({}, remote) as any;
  assert.equal(Object.getPrototypeOf(out.academy.completed), Object.prototype, 'no cambia el prototipo');
  assert.deepEqual(Object.keys(out.academy.completed), ['s1']);
  assert.deepEqual(Object.keys(out.academy.deck), ['q2']);
  assert.deepEqual(Object.keys(out.academy.model), ['k2']);
  assert.deepEqual(out.academy.activity, ['2026-10-01']);
  assert.deepEqual(out.academy.notes, { s2: 'Mi nota' });
  assert.deepEqual(out.progress.bookmarks, ['/es/glosario/']);
  assert.deepEqual(out.progress.tools, { a: 2 });
  assert.equal(({} as any).p, undefined, 'sin contaminación global');
});
