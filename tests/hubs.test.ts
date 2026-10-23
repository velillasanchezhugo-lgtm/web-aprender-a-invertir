import { test } from 'node:test';
import assert from 'node:assert/strict';
import { hubOf, HUBS } from '../src/lib/hubs.ts';

test('cada ruta pertenece a su formación o a la academia', () => {
  assert.equal(hubOf('/es/'), null);
  assert.equal(hubOf('/es/cuenta/'), null);
  assert.equal(hubOf('/es/privacidad/'), null);
  assert.equal(hubOf('/es/inversion/'), 'inversion');
  assert.equal(hubOf('/es/sesion/01-invertir-no-es-apostar/'), 'inversion');
  assert.equal(hubOf('/es/brokers/degiro/'), 'inversion');
  assert.equal(hubOf('/es/claude/herramientas/'), 'claude');
  assert.equal(hubOf('/es/chatgpt/sesion/gpt-c01-que-es-chatgpt/'), 'chatgpt');
  assert.equal(hubOf('/es/emprendimiento/'), 'emprendimiento');
});

test('cada formación tiene inicio, menú y botón propios', () => {
  for (const h of HUBS) {
    assert.equal(hubOf(h.href), h.id);
    assert.ok(h.nav.length >= 3);
    for (const n of h.nav) assert.equal(hubOf(n.href), h.id, n.href);
  }
});
