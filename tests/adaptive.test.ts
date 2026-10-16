import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { guessRate, updateMastery, observe, prior, recommend, personalRoute, domainSummary, strengthsAndGaps, nextDiagnostic, learnerBrief, exposeSession, MASTERED, type CatalogItem, type Profile, type SkillDef, type Model } from '../src/lib/adaptive.ts';

const map = JSON.parse(readFileSync('src/data/skills.json', 'utf8')) as { domains: { id: string; label: string; desc: string }[]; skills: SkillDef[] };
const defs = Object.fromEntries(map.skills.map((s) => [s.id, s]));
const T = '2026-10-16';

const cat: CatalogItem[] = [
  { id: 'c1', track: 'camino-cero', order: 1, level: 'cero', goals: ['entender'], prereqs: [], skills: ['objetivo-horizonte'] },
  { id: 'c2', track: 'camino-cero', order: 2, level: 'cero', goals: ['ordenar'], prereqs: ['c1'], skills: ['presupuesto-ahorro'] },
  { id: 'y1', track: 'invertir-ya', order: 101, level: 'basico', goals: ['jubilacion'], prereqs: ['c2'], skills: ['plan-inversion'] },
  { id: 'n1', track: 'noticias', order: 401, level: 'basico', goals: ['entender'], prereqs: ['c1'], skills: ['hecho-opinion'] },
  { id: 'e1', track: 'empresas', order: 301, level: 'basico', goals: ['entender'], prereqs: [], skills: ['modelo-negocio'] },
];

test('el mapa de competencias es coherente', () => {
  const domains = new Set(map.domains.map((d) => d.id));
  const ids = new Set<string>();
  for (const s of map.skills) {
    assert.ok(domains.has(s.domain), `dominio desconocido en ${s.id}`);
    assert.ok(!ids.has(s.id), `competencia repetida ${s.id}`);
    ids.add(s.id);
  }
});

test('azar según el tipo de pregunta', () => {
  assert.equal(guessRate('truefalse'), 0.5);
  assert.equal(guessRate('estimate'), 0.1);
  assert.ok(Math.abs(guessRate('choice', 3) - 1 / 3) < 1e-9);
  assert.equal(guessRate('choice', 10), 0.2);
});

test('BKT: acertar sube, fallar baja, y una estimación acertada cuenta más que un verdadero/falso', () => {
  const up = updateMastery(undefined, true, 0.33, T, 0.1);
  const down = updateMastery(undefined, false, 0.33, T, 0.1);
  assert.ok(up.p > 0.1 && down.p < up.p);
  assert.equal(up.n, 1); assert.equal(up.ok, 1); assert.equal(down.ok, 0);
  const est = updateMastery(undefined, true, 0.1, T, 0.3, 0);
  const tf = updateMastery(undefined, true, 0.5, T, 0.3, 0);
  assert.ok(est.p > tf.p);
  // Muchos aciertos seguidos llevan al dominio; muchos fallos, lejos de él.
  let m = undefined; for (let i = 0; i < 4; i++) m = updateMastery(m, true, 0.33, T, 0.1);
  assert.ok(m!.p >= MASTERED);
  let w = undefined; for (let i = 0; i < 3; i++) w = updateMastery(w, false, 0.33, T, 0.5);
  assert.ok(w!.p < 0.3);
});

test('la experiencia declarada cambia el punto de partida', () => {
  assert.ok(prior(defs['colchon-emergencia'], { experience: 'invierto' }) > prior(defs['colchon-emergencia'], { experience: 'nada' }));
  assert.ok(prior(defs['colchon-emergencia'], { experience: 'algo' }) > prior(defs['valoracion-basica'], { experience: 'algo' }));
});

test('observe actualiza todas las competencias de la pregunta', () => {
  const m = observe({}, ['acciones', 'renta-fija', 'acciones'], true, 0.33, T, { defs });
  assert.deepEqual(Object.keys(m).sort(), ['acciones', 'renta-fija']);
  assert.equal(m.acciones.n, 1);
});

test('recomendador: respeta prerrequisitos y empieza por la base si se empieza de cero', () => {
  const p: Profile = { goal: 'entender', experience: 'nada', interests: [] };
  const r = recommend(cat, {}, p, {}, { defs });
  assert.equal(r[0].id, 'c1');
  assert.ok(!r.some((x) => x.id === 'y1' || x.id === 'n1'), 'sin c1/c2 no se ofrecen sesiones que dependen de ellas');
  assert.ok(r[0].reasons.length > 0);
});

test('recomendador: el interés adelanta un módulo y se explica', () => {
  const p: Profile = { goal: 'entender', experience: 'invierto', interests: ['empresas'] };
  const r = recommend(cat, {}, p, { c1: 1 }, { defs });
  assert.equal(r[0].id, 'e1');
  assert.ok(r[0].reasons.some((x) => x.includes('Conocer empresas')));
});

test('recomendador: dominar las competencias de un prerrequisito lo da por cumplido', () => {
  const p: Profile = { goal: 'jubilacion', experience: 'nada', interests: [] };
  const model: Model = { 'presupuesto-ahorro': { p: 0.95, n: 3, ok: 3, last: T } };
  const r = recommend(cat, model, p, { c1: 1 }, { defs, limit: 10 });
  assert.ok(r.some((x) => x.id === 'y1'));
  const c2 = r.find((x) => x.id === 'c2')!;
  assert.ok(c2.reasons.some((x) => x.includes('dominas')));
  assert.ok(r.findIndex((x) => x.id === 'c2') > r.findIndex((x) => x.id === 'y1'), 'lo ya dominado pasa al final');
});

test('recomendador: propone refuerzo cuando se falla tras estudiar', () => {
  const p: Profile = { goal: 'entender', experience: 'nada', interests: [] };
  const model: Model = { 'objetivo-horizonte': { p: 0.2, n: 3, ok: 1, last: T } };
  const r = recommend(cat, model, p, { c1: 1 }, { defs, limit: 10 });
  const ref = r.find((x) => x.kind === 'refuerzo');
  assert.equal(ref?.id, 'c1');
  assert.match(ref!.reasons[0], /1 de 3/);
});

test('ruta personal: incluye todo una vez y respeta el orden de prerrequisitos', () => {
  const p: Profile = { goal: 'jubilacion', experience: 'nada', interests: ['noticias'] };
  const route = personalRoute(cat, {}, p, {}, { defs });
  assert.equal(route.length, cat.length);
  assert.equal(new Set(route).size, cat.length);
  for (const it of cat) for (const pre of it.prereqs) assert.ok(route.indexOf(pre) < route.indexOf(it.id), `${pre} antes de ${it.id}`);
});

test('exponer una sesión sube algo el dominio sin marcarlo como dominado', () => {
  const m = exposeSession({}, ['acciones'], T, defs, null);
  assert.ok(m.acciones.p > 0.1 && m.acciones.p < 0.5);
});

test('resumen por áreas, fortalezas y huecos', () => {
  const model: Model = { acciones: { p: 0.9, n: 3, ok: 3, last: T }, 'renta-fija': { p: 0.2, n: 2, ok: 0, last: T } };
  const ds = domainSummary(map.domains, map.skills, model, null);
  assert.equal(ds.length, map.domains.length);
  const prod = ds.find((d) => d.id === 'productos')!;
  assert.equal(prod.mastered, 1); assert.equal(prod.seen, 2);
  const sg = strengthsAndGaps(map.skills, model);
  assert.equal(sg.strong[0].id, 'acciones'); assert.equal(sg.weak[0].id, 'renta-fija');
});

test('diagnóstico adaptativo: reparte por áreas y para al máximo', () => {
  const bank = [
    { qid: 'a1', skills: ['acciones'], domain: 'productos' }, { qid: 'a2', skills: ['renta-fija'], domain: 'productos' },
    { qid: 'b1', skills: ['hecho-opinion'], domain: 'noticias' }, { qid: 'c1', skills: ['modelo-negocio'], domain: 'empresas' },
  ];
  const first = nextDiagnostic(bank, [], {}, 3)!;
  const second = nextDiagnostic(bank, [first], {}, 3)!;
  const third = nextDiagnostic(bank, [first, second], {}, 3)!;
  const doms = [first, second, third].map((q) => bank.find((b) => b.qid === q)!.domain);
  assert.equal(new Set(doms).size, 3, 'tres preguntas, tres áreas distintas');
  assert.equal(nextDiagnostic(bank, [first, second, third], {}, 3), null);
});

test('el resumen para el tutor no incluye datos personales y describe el nivel', () => {
  const p: Profile = { goal: 'jubilacion', experience: 'algo', interests: ['trading'] };
  const txt = learnerBrief(p, map.skills, { acciones: { p: 0.9, n: 3, ok: 3, last: T } }, 4, 'Construir patrimonio');
  assert.match(txt, /Construir patrimonio/); assert.match(txt, /Tipos de trading/); assert.match(txt, /Acciones/); assert.match(txt, /4/);
});
