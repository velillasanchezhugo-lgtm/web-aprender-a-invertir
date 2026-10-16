/** Genera api/_catalog.json (título, id y módulo de cada sesión) para que el tutor pueda enlazar sesiones reales. */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import yaml from 'js-yaml';
const dir = 'src/content/sessions';
const items = readdirSync(dir).filter((f) => f.endsWith('.md')).map((f) => {
  const fm = yaml.load(readFileSync(`${dir}/${f}`, 'utf8').split(/^---$/m)[1]);
  return { id: f.replace(/\.md$/, ''), title: fm.title, track: fm.track ?? 'camino-cero', order: fm.order };
}).sort((a, b) => a.order - b.order).map(({ id, title, track }) => ({ id, title, track }));
writeFileSync('api/_catalog.json', JSON.stringify(items, null, 1) + '\n');
console.log(`Catálogo del tutor: ${items.length} sesiones.`);
