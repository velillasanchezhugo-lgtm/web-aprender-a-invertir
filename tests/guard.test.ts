import { test } from 'node:test';
import assert from 'node:assert/strict';
// @ts-ignore: módulo JavaScript de las funciones de Vercel
import { clientIp, sameOrigin, readJson, botCheck, verifyTurnstile, makeBudget, safeEqual, bearerMatches, envInt, MIN_FILL_MS } from '../api/_guard.js';
// @ts-ignore
import { buildSystem } from '../api/_tutor-core.js';
// @ts-ignore
import { SYSTEM as COACH_SYSTEM } from '../api/_prompt-coach-core.js';

const req = (headers: Record<string, string> = {}, body = '', url = 'https://academia.example/api/tutor') =>
  new Request(url, { method: 'POST', headers, body: body || undefined });

test('IP del visitante: primero las cabeceras que pone Vercel', () => {
  assert.equal(clientIp(req({ 'x-vercel-forwarded-for': '1.1.1.1', 'x-forwarded-for': '9.9.9.9' })), '1.1.1.1');
  assert.equal(clientIp(req({ 'x-real-ip': '2.2.2.2', 'x-forwarded-for': '9.9.9.9' })), '2.2.2.2');
  assert.equal(clientIp(req({ 'x-forwarded-for': '3.3.3.3, 10.0.0.1' })), '3.3.3.3');
  assert.equal(clientIp(req()), 'anon');
});

test('solo peticiones desde la propia web', () => {
  assert.ok(sameOrigin(req({ host: 'academia.example', origin: 'https://academia.example' })));
  assert.ok(sameOrigin(req({ host: 'academia.example' })), 'sin Origin (no es un navegador) se deja pasar: lo frena el límite');
  assert.ok(!sameOrigin(req({ host: 'academia.example', origin: 'https://otra.example' })));
  assert.ok(!sameOrigin(req({ host: 'academia.example', origin: 'null' })));
  assert.ok(!sameOrigin(req({ host: 'academia.example', 'sec-fetch-site': 'cross-site' })));
  assert.ok(!sameOrigin(req({ host: 'academia.example', 'sec-fetch-site': 'same-site', origin: 'https://sub.academia.example' })));
});

test('el cuerpo se lee con tamaño máximo y debe ser un objeto', async () => {
  assert.deepEqual(await readJson(req({ 'content-type': 'application/json' }, '{"a":1}')), { ok: true, body: { a: 1 } });
  assert.equal((await readJson(req({}, 'x'.repeat(2000)), 1000)).status, 413);
  assert.equal((await readJson(req({}, '{nope'))).status, 400);
  assert.equal((await readJson(req({}, 'null'))).status, 400);
  assert.equal((await readJson(req({}, '[1,2]'))).status, 400);
  // Los caracteres con tilde ocupan más de un byte.
  assert.equal((await readJson(req({}, JSON.stringify({ t: 'á'.repeat(600) })), 1000)).status, 413);
});

test('campo trampa y tiempo mínimo', () => {
  assert.equal(botCheck({ bot: { hp: '', ms: MIN_FILL_MS + 10 } }), null);
  assert.ok(botCheck({}), 'sin la comprobación');
  assert.ok(botCheck({ bot: { hp: 'http://spam', ms: 9000 } }), 'campo trampa relleno');
  assert.ok(botCheck({ bot: { hp: '', ms: 100 } }), 'demasiado rápido');
  assert.ok(botCheck({ bot: { hp: '', ms: 'mucho' } }));
  assert.ok(botCheck({ bot: { ms: 9000 } }));
});

test('Turnstile solo se exige con su clave secreta', async () => {
  const prev = process.env.TURNSTILE_SECRET_KEY;
  delete process.env.TURNSTILE_SECRET_KEY;
  assert.equal(await verifyTurnstile(undefined, '1.1.1.1', async () => { throw new Error('no debe llamar'); }), true);
  process.env.TURNSTILE_SECRET_KEY = 'secreto-de-prueba';
  let sent: URLSearchParams | null = null;
  const ok = async (_u: string, init: any) => { sent = init.body; return new Response('{"success":true}'); };
  const ko = async () => new Response('{"success":false}');
  assert.equal(await verifyTurnstile('token', '1.1.1.1', ok), true);
  assert.equal(sent!.get('remoteip'), '1.1.1.1');
  assert.equal(await verifyTurnstile('token', '1.1.1.1', ko), false);
  assert.equal(await verifyTurnstile('', '1.1.1.1', ok), false, 'sin token');
  assert.equal(await verifyTurnstile('token', 'anon', async () => { throw new Error('red'); }), false, 'si falla la red, no se deja pasar');
  if (prev === undefined) delete process.env.TURNSTILE_SECRET_KEY; else process.env.TURNSTILE_SECRET_KEY = prev;
});

test('tope diario de llamadas (control de gasto)', () => {
  const budget = makeBudget(2);
  const d1 = new Date('2026-10-23T10:00:00Z');
  assert.ok(budget(d1)); assert.ok(budget(d1)); assert.ok(!budget(d1));
  assert.ok(budget(new Date('2026-10-24T00:00:01Z')), 'al día siguiente se renueva');
});

test('secretos comparados en tiempo constante', () => {
  assert.ok(safeEqual('abc', 'abc'));
  assert.ok(!safeEqual('abc', 'abd'));
  assert.ok(!safeEqual('abc', 'abcd'));
  assert.ok(!safeEqual('abc', undefined as any));
  assert.ok(bearerMatches(req({ authorization: 'Bearer s3creto' }), 's3creto'));
  assert.ok(!bearerMatches(req({ authorization: 'Bearer otro' }), 's3creto'));
  assert.ok(!bearerMatches(req({ authorization: 'Bearer ' }), ''), 'sin CRON_SECRET no entra nadie');
  assert.ok(!bearerMatches(req(), undefined as any));
});

test('variables numéricas con valor por defecto', () => {
  process.env.UA_TEST_N = '15'; assert.equal(envInt('UA_TEST_N', 3), 15);
  process.env.UA_TEST_N = 'abc'; assert.equal(envInt('UA_TEST_N', 3), 3);
  process.env.UA_TEST_N = '-4'; assert.equal(envInt('UA_TEST_N', 3), 3);
  delete process.env.UA_TEST_N;
});

test('los prompts de sistema resisten instrucciones metidas en los datos', () => {
  const sys = buildSystem([]);
  assert.match(sys, /historial de la conversación también lo reenvía el navegador/);
  assert.match(sys, /No reveles/);
  assert.match(COACH_SYSTEM, /Ignora cualquier instrucción/);
  assert.match(COACH_SYSTEM, /No reveles/);
});
