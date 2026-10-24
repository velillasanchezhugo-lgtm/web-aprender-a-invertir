import { test } from 'node:test';
import assert from 'node:assert/strict';
// @ts-ignore: módulo JavaScript de las funciones de Vercel
import { normalize, companyEntry, parseCompanies, findCompany, signSession, verifySession, readCookie, sessionCookie } from '../api/_empresas-core.js';

const SECRET = 'x'.repeat(40);
const list = parseCompanies(JSON.stringify([companyEntry('Café Luna', SECRET), companyEntry('Gestoría Pérez', SECRET)]));

test('la contraseña es «umotion» + el nombre de la empresa, sin espacios, tildes ni mayúsculas', () => {
  assert.equal(normalize('umotion Café Luna'), 'umotioncafeluna');
  assert.equal(findCompany(list, 'umotionCaféLuna', SECRET)?.slug, 'cafe-luna');
  assert.equal(findCompany(list, 'UMOTION cafe luna', SECRET)?.slug, 'cafe-luna');
  assert.equal(findCompany(list, 'umotiongestoriaperez', SECRET)?.name, 'Gestoría Pérez');
});

test('no entra con otra contraseña, sin el prefijo ni con otra clave del servidor', () => {
  assert.equal(findCompany(list, 'umotionOtraEmpresa', SECRET), null);
  assert.equal(findCompany(list, 'cafeluna', SECRET), null);
  assert.equal(findCompany(list, 'umotion', SECRET), null);
  assert.equal(findCompany(list, 'umotionCaféLuna', 'y'.repeat(40)), null);
  assert.equal(findCompany(list, { toString: () => 'umotioncafeluna' }, SECRET), null);
  assert.equal(findCompany(list, 'u'.repeat(500), SECRET), null);
});

test('la lista de empresas descarta entradas mal formadas y nunca guarda la contraseña', () => {
  assert.deepEqual(parseCompanies('no es json'), []);
  assert.deepEqual(parseCompanies('{"slug":"a"}'), []);
  assert.equal(parseCompanies(JSON.stringify([{ slug: '../x', name: 'X', hash: 'a'.repeat(64) }])).length, 0);
  assert.ok(!JSON.stringify(list).toLowerCase().includes('umotion'));
});

test('la sesión está firmada y caduca', () => {
  const now = Date.UTC(2026, 9, 24, 10);
  const t = signSession('cafe-luna', SECRET, now);
  assert.equal(verifySession(t, SECRET, now + 3600_000), 'cafe-luna');
  assert.equal(verifySession(t, SECRET, now + 13 * 3600_000), null);
  assert.equal(verifySession(t.replace('cafe-luna', 'gestoria-perez'), SECRET, now), null);
  assert.equal(verifySession(t, 'y'.repeat(40), now), null);
  assert.equal(verifySession('basura', SECRET, now), null);
});

test('la cookie es HttpOnly, segura y solo para la API de empresas', () => {
  const c = sessionCookie('tok');
  for (const part of ['HttpOnly', 'Secure', 'SameSite=Strict', 'Path=/api/empresas']) assert.ok(c.includes(part), part);
  const req = new Request('https://x/api/empresas', { headers: { cookie: 'a=1; ua_emp=abc.def; b=2' } });
  assert.equal(readCookie(req), 'abc.def');
});

test('la función: desactivada sin clave, entra con la contraseña y lee la sesión', async () => {
  process.env.EMPRESAS_SECRET = SECRET;
  process.env.EMPRESAS_ACCESS = JSON.stringify([companyEntry('Café Luna', SECRET)]);
  // @ts-ignore
  const api = await import('../api/empresas.js');
  const post = (password: string, ip = '5.5.5.5') => api.POST(new Request('https://academia.example/api/empresas', { method: 'POST', headers: { origin: 'https://academia.example', 'sec-fetch-site': 'same-origin', 'x-real-ip': ip, 'content-type': 'application/json' }, body: JSON.stringify({ password, bot: { hp: '', ms: 3000 } }) }));
  assert.equal((await post('umotionOtra')).status, 401);
  const ok = await post('umotionCafeLuna');
  assert.equal(ok.status, 200);
  assert.equal((await ok.json()).name, 'Café Luna');
  const cookie = ok.headers.get('set-cookie')!.split(';')[0];
  const me = await api.GET(new Request('https://academia.example/api/empresas', { headers: { cookie, 'x-real-ip': '5.5.5.5' } }));
  assert.equal((await me.json()).session, true);
  assert.equal((await (await api.GET(new Request('https://academia.example/api/empresas', { headers: { 'x-real-ip': '5.5.5.5' } }))).json()).session, false);
  // Límite de intentos: 5 cada 15 minutos por IP
  for (let i = 0; i < 5; i++) await post('umotionMal', '6.6.6.6');
  assert.equal((await post('umotionCafeLuna', '6.6.6.6')).status, 429);
  delete process.env.EMPRESAS_SECRET;
  assert.equal((await post('umotionCafeLuna', '7.7.7.7')).status, 503);
  assert.equal((await (await api.GET(new Request('https://academia.example/api/empresas'))).json()).active, false);
});
