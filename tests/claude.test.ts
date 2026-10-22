import { test } from 'node:test';
import assert from 'node:assert/strict';
import { anonymize, idLetterOk, luhnOk, ibanOk } from '../src/lib/claude/anonymize.ts';
import { checkPrompt, buildPrompt } from '../src/lib/claude/prompt-check.ts';

test('letra de control de DNI y NIE', () => {
  assert.equal(idLetterOk('12345678Z'), true);
  assert.equal(idLetterOk('12345678A'), false);
  assert.equal(idLetterOk('X1234567L'), true);
  assert.equal(idLetterOk('Y1234567X'), true);
});

test('Luhn e IBAN', () => {
  assert.equal(luhnOk('4111 1111 1111 1111'), true);
  assert.equal(luhnOk('4111 1111 1111 1112'), false);
  assert.equal(ibanOk('ES91 2100 0418 4502 0005 1332'), true);
  assert.equal(ibanOk('ES91 2100 0418 4502 0005 1333'), false);
});

test('anonimiza datos personales y repite la misma etiqueta para el mismo dato', () => {
  const r = anonymize('Soy Ana, DNI 12345678Z, correo ana.lopez@mail.com, móvil 612 345 678. Repito: 12345678-Z. Cuenta ES91 2100 0418 4502 0005 1332.');
  assert.match(r.text, /\[DNI 1\].*\[DNI 1\]/);
  assert.match(r.text, /\[CORREO ELECTRÓNICO 1\]/);
  assert.match(r.text, /\[TELÉFONO 1\]/);
  assert.match(r.text, /\[IBAN 1\]/);
  assert.ok(!r.text.includes('612 345 678'));
  assert.equal(r.found.find((f) => f.type === 'dni')?.count, 1);
});

test('no toca números que no son datos personales', () => {
  const t = 'El pedido 12345678 cuesta 1.250 € y llega el 12/03/2026. Factura 2026-0045.';
  const r = anonymize(t);
  assert.equal(r.text, t);
  assert.equal(r.total, 0);
});

test('una petición vaga puntúa bajo y una completa alto', () => {
  const vaga = checkPrompt('Escribe un correo');
  assert.ok(vaga.score <= 3, `vaga: ${vaga.score}`);
  const buena = checkPrompt('Soy dueña de una peluquería en Valencia. Escribe un mensaje para mis clientas avisando de que cerramos del 1 al 15 de agosto. Tono cercano, máximo 60 palabras, sin emojis. Por ejemplo: «¡Hola! Este verano…». Dime si falta algún dato.');
  assert.ok(buena.score >= 9, `buena: ${buena.score}`);
  assert.equal(buena.items.find((i) => i.id === 'tarea')?.ok, true);
});

test('las piezas exigidas por el ejercicio pesan y generan consejos', () => {
  const r = checkPrompt('Resume este informe de ventas para mi jefa en cinco puntos.', { require: ['tono'], extra: [{ label: 'Pedir las cifras clave', any: ['cifras', 'datos clave'] }] });
  assert.ok(r.tips.some((t) => /tono/i.test(t)));
  assert.ok(r.tips.some((t) => /cifras/i.test(t)));
  assert.ok(r.score < 8);
});

test('avisa de datos personales en la petición', () => {
  const r = checkPrompt('Redacta una reclamación a mi banco con mi IBAN ES91 2100 0418 4502 0005 1332 en tono formal y en un párrafo.');
  assert.equal(r.pii[0]?.label, 'IBAN');
  assert.match(r.tips[0], /datos personales/);
});

test('el constructor monta una petición en orden', () => {
  const p = buildPrompt({ contexto: 'Tengo una frutería', tarea: 'Escribe un cartel de ofertas', publico: 'mis clientes del barrio', formato: '3 líneas', preguntar: true });
  assert.equal(p.split('\n')[0], 'Tengo una frutería.');
  assert.match(p, /Es para mis clientes del barrio\./);
  assert.match(p, /hazme las preguntas/);
  assert.ok(checkPrompt(p).score >= 7);
});
