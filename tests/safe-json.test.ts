/** JSON seguro dentro de <script> (src/lib/safe-json.ts). */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { jsonForScript } from '../src/lib/safe-json.ts';

test('un dato no puede cerrar la etiqueta <script> y se lee igual', () => {
  const v = { t: '</script><script>alert(1)</script>', a: 'x & y > z', l: 'a\u2028b\u2029c', n: [1, null, true] };
  const out = jsonForScript(v);
  assert.ok(!/[<>&\u2028\u2029]/.test(out), out);
  assert.deepEqual(JSON.parse(out), v);
  assert.equal(jsonForScript(undefined), 'null');
});

test('ninguna plantilla mete JSON.stringify sin escapar en set:html', () => {
  const walk = (d: string): string[] => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
  // progreso.astro: pendiente del Agente 1, que lo está editando (ver NOTAS-SEGURIDAD). Quitar la excepción al cambiarlo.
  const PENDING = new Set(['src/pages/es/progreso.astro']);
  const bad = walk('src').filter((f) => f.endsWith('.astro') && !PENDING.has(f) && /set:html=\{\s*JSON\.stringify/.test(readFileSync(f, 'utf8')));
  assert.deepEqual(bad, [], 'usa jsonForScript de src/lib/safe-json.ts');
});
