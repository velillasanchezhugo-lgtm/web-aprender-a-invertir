import { test } from 'node:test';
import assert from 'node:assert/strict';
import { search } from '../src/scripts/search.ts';
const docs = [
  { t: 'Inflación e interés compuesto', d: 'Dos fuerzas', u: '/a', k: 'Lección', b: 'la inflación reduce el poder de compra' },
  { t: 'Traspaso de fondos', d: 'Mover dinero entre fondos sin tributar', u: '/b', k: 'Glosario', b: '' },
  { t: 'Apalancamiento', d: 'Multiplica pérdidas', u: '/c', k: 'Lección', b: 'margen y liquidación' },
];
test('ignora acentos y mayúsculas', () => { assert.equal(search(docs, 'INFLACION')[0].doc.u, '/a'); });
test('plural/singular aproximado', () => { assert.equal(search(docs, 'traspasos')[0].doc.u, '/b'); });
test('coincidencias en el cuerpo', () => { assert.equal(search(docs, 'liquidación')[0].doc.u, '/c'); });
test('consulta vacía o de palabras vacías', () => { assert.equal(search(docs, 'de la').length, 0); assert.equal(search(docs, '').length, 0); });
test('sin resultados', () => { assert.equal(search(docs, 'zzzz').length, 0); });
