/**
 * Comprobación de dependencias (punto 7 de docs/SEGURIDAD.md: «ningún plugin pirata»).
 * - Origen: cada paquete de package-lock.json viene del registro oficial de npm y lleva huella de integridad.
 * - Licencias: todas las dependencias instaladas tienen una licencia de la lista permitida.
 * Uso: npm run check:deps   (falla con código 1 si algo no cumple)
 */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

/** Licencias permisivas (o de fuentes tipográficas) compatibles con una web comercial cerrada. */
export const ALLOWED = new Set([
  'MIT', 'MIT-0', 'ISC', 'BSD-2-Clause', 'BSD-3-Clause', '0BSD', 'Apache-2.0', 'BlueOak-1.0.0',
  'CC0-1.0', 'CC-BY-4.0', 'CC-BY-3.0', 'Unlicense', 'OFL-1.1', 'Python-2.0', 'Zlib', 'WTFPL', 'MPL-2.0',
]);
/** Paquetes revisados a mano con una licencia fuera de la lista. Cada excepción lleva su motivo. */
export const REVIEWED = [
  { match: /^@img\/sharp-(libvips-|wasm32|win32-)/, reason: 'libvips (LGPL-3.0) enlazada de forma dinámica por sharp; solo se usa al compilar y no se distribuye con la web.' },
  { match: /^zod-to-ts$/, reason: 'Licencia MIT en su archivo LICENSE; el package.json no la declara.' },
];
const reviewed = (name) => REVIEWED.some((r) => r.match.test(name));

const REGISTRY = 'https://registry.npmjs.org/';

/** ¿Se acepta una expresión SPDX? «A OR B» basta con una; «A AND B» exige todas. */
export function licenseOk(expr) {
  if (!expr || typeof expr !== 'string') return false;
  const e = expr.replace(/[()]/g, ' ').trim();
  if (/\bOR\b/.test(e)) return e.split(/\bOR\b/).some((p) => licenseOk(p.trim()));
  if (/\bAND\b/.test(e)) return e.split(/\bAND\b/).every((p) => licenseOk(p.trim()));
  return ALLOWED.has(e.replace(/\+$/, ''));
}

const licenseOf = (pkg) => {
  if (typeof pkg.license === 'string') return pkg.license;
  if (pkg.license?.type) return pkg.license.type;
  if (Array.isArray(pkg.licenses)) return pkg.licenses.map((l) => l.type ?? l).join(' OR ');
  return '';
};

/** Revisa el lockfile y devuelve los problemas encontrados. */
export function checkLock(lock, root = '.') {
  const problems = [];
  let n = 0;
  for (const [path, info] of Object.entries(lock.packages ?? {})) {
    if (!path) continue; // el propio proyecto
    if (info.link) continue;
    n++;
    const name = info.name ?? path.split('node_modules/').pop();
    if (!info.resolved?.startsWith(REGISTRY)) problems.push(`${name}: no viene del registro oficial de npm (${info.resolved ?? 'sin origen'})`);
    if (!/^sha512-/.test(info.integrity ?? '')) problems.push(`${name}: sin huella de integridad sha512`);
    const file = join(root, path, 'package.json');
    const lic = info.license ?? (existsSync(file) ? licenseOf(JSON.parse(readFileSync(file, 'utf8'))) : '');
    if (!licenseOk(lic) && !reviewed(name)) problems.push(`${name}: licencia «${lic || 'desconocida'}» fuera de la lista permitida`);
  }
  return { problems, count: n };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const lock = JSON.parse(readFileSync('package-lock.json', 'utf8'));
  const { problems, count } = checkLock(lock);
  if (problems.length) { problems.forEach((p) => console.error('ERROR: ' + p)); process.exit(1); }
  console.log(`Dependencias revisadas: ${count}. Todas del registro oficial de npm, con integridad y licencia permitida.`);
}
