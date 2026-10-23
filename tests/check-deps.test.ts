/** Comprobación de licencias y origen de las dependencias (scripts/check-deps.mjs). */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { licenseOk, checkLock } from '../scripts/check-deps.mjs';

test('licencias: permisivas sí, copyleft fuerte o desconocida no', () => {
  for (const l of ['MIT', 'ISC', 'Apache-2.0', 'BSD-3-Clause', '(MIT OR GPL-3.0)', 'MIT AND Apache-2.0', 'OFL-1.1']) assert.ok(licenseOk(l), l);
  for (const l of ['GPL-3.0', 'AGPL-3.0-only', 'MIT AND GPL-2.0', 'UNLICENSED', 'SEE LICENSE IN LICENSE', '', undefined]) assert.ok(!licenseOk(l as string), String(l));
});

test('origen: solo el registro oficial de npm y con integridad', () => {
  const lock = { packages: {
    '': { name: 'proyecto' },
    'node_modules/bueno': { resolved: 'https://registry.npmjs.org/bueno/-/bueno-1.0.0.tgz', integrity: 'sha512-x', license: 'MIT' },
    'node_modules/git': { resolved: 'git+https://github.com/x/y.git', license: 'MIT' },
    'node_modules/raro': { resolved: 'https://registry.npmjs.org/raro/-/raro-1.0.0.tgz', integrity: 'sha512-x', license: 'GPL-3.0' },
  } };
  const { problems, count } = checkLock(lock, '/nonexistent');
  assert.equal(count, 3);
  assert.ok(problems.some((p: string) => p.startsWith('git: no viene del registro')));
  assert.ok(problems.some((p: string) => p.startsWith('git: sin huella')));
  assert.ok(problems.some((p: string) => p.startsWith('raro: licencia')));
  assert.ok(!problems.some((p: string) => p.startsWith('bueno')));
});
