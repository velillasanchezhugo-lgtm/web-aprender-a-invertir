import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { lessons, glossaryList, glossaryOf, TOOLS, TOPICS, sessions } from '../../lib/content';
import { FORMATION_IDS, formation, formationSessions } from '../../lib/formations';
import brokers from '../../data/brokers.json';
/** Índice de búsqueda estático. Se genera en cada compilación a partir del contenido publicado. */
const strip = (md: string) => md.replace(/<[^>]+>/g, ' ').replace(/[#*_`>|\[\]()-]/g, ' ').replace(/\s+/g, ' ').trim();
export const GET: APIRoute = async () => {
  const docs: { t: string; d: string; u: string; k: string; b: string }[] = [];
  for (const x of await sessions()) docs.push({ t: x.data.title, d: x.data.description, u: `/es/sesion/${x.id}/`, k: 'Sesión de 5 min', b: strip(x.body ?? '').slice(0, 3000) + ' ' + x.data.takeaway });
  for (const f of FORMATION_IDS) {
    const F = formation(f);
    for (const x of await formationSessions(f)) docs.push({ t: x.data.title, d: x.data.description, u: `${F.session}${x.id}/`, k: `${F.title} · sesión`, b: strip(x.body ?? '').slice(0, 3000) + ' ' + x.data.takeaway });
    for (const g of glossaryOf(f)) docs.push({ t: g.term, d: g.def, u: `${F.base}glosario/#${g.id}`, k: `Glosario · ${F.title}`, b: '' });
  }
  for (const l of await lessons()) docs.push({ t: l.data.title, d: l.data.description, u: `/es/lecciones/${l.id}/`, k: 'Lección', b: strip(l.body ?? '').slice(0, 4000) + ' ' + l.data.summary.join(' ') });
  for (const s of await getCollection('strategies')) docs.push({ t: s.data.title, d: s.data.description, u: `/es/estrategias/${s.id}/`, k: 'Estrategia', b: strip(s.body ?? '').slice(0, 4000) });
  for (const s of await getCollection('investors')) docs.push({ t: s.data.title, d: s.data.description, u: `/es/inversores/${s.id}/`, k: 'Historia', b: strip(s.body ?? '').slice(0, 3000) });
  for (const g of glossaryList) docs.push({ t: g.term, d: g.def, u: `/es/glosario/#${g.id}`, k: 'Glosario', b: '' });
  for (const [id, t] of Object.entries(TOOLS)) docs.push({ t: t.title, d: t.blurb, u: `/es/herramientas/${id}/`, k: 'Herramienta', b: '' });
  for (const b of brokers.brokers) docs.push({ t: `${b.name} (bróker)`, d: b.entity.value, u: `/es/brokers/${b.id}/`, k: 'Bróker', b: `${b.regulator.value} ${b.products.value}` });
  for (const [id, t] of Object.entries(TOPICS)) docs.push({ t: t.label, d: t.blurb, u: `/es/temas/${id}/`, k: 'Tema', b: '' });
  return new Response(JSON.stringify(docs), { headers: { 'Content-Type': 'application/json' } });
};
