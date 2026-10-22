/**
 * Genera el «Estándar de formaciones» (docs/estandar-formaciones.html y docs/ESTANDAR-FORMACIONES.pdf)
 * a partir de los datos reales de la web: temario, sesiones y precios. Uso:
 *   node scripts/estandar-formaciones.mjs
 * Los textos del estándar viven aquí; los números salen de src/data y src/content.
 */
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const cur = JSON.parse(readFileSync(root + 'src/data/curriculum.json', 'utf8'));
const site = readFileSync(root + 'src/config/site.ts', 'utf8');
const pick = (re) => (site.match(re) || [])[1];
const P = {
  monthly: pick(/monthly: '([^']+)'/), annual: pick(/annual: '([^']+)'/), trial: pick(/trialDays: (\d+)/),
  course: pick(/course: '([^']+)'/), cert: pick(/certification: '([^']+)'/),
};
const counts = {};
for (const f of readdirSync(root + 'src/content/sessions')) {
  const t = (readFileSync(root + 'src/content/sessions/' + f, 'utf8').match(/^track: (\S+)/m) || [])[1];
  if (t) counts[t] = (counts[t] || 0) + 1;
}
const TR = {
  'camino-cero': ['Camino Cero', 'Lo básico antes de poner un euro'],
  productos: ['Productos de inversión', 'Qué es cada producto y para quién encaja'],
  formas: ['Formas de invertir', 'Por tu cuenta, gestionada o automatizada'],
  'invertir-ya': ['Invertir ya', 'Cómo empezar, paso a paso'],
  'trade-republic': ['Empieza con Trade Republic', 'Abrir la cuenta, usar la app y comparar'],
  mantener: ['Mantener el rumbo', 'Revisar, aguantar, cuándo vender y declarar'],
  empresas: ['Conocer empresas', 'Cómo ver si una empresa va bien'],
  noticias: ['Entender noticias', 'Qué te afecta y qué no'],
  trading: ['Tipos de trading', 'Entenderlo sin jugarte el dinero'],
};
const [t1, t2, t3] = cur.tiers;
const n2mods = [...cur.n2.modules].sort((a, b) => cur.n2.order.indexOf(a.code) - cur.n2.order.indexOf(b.code));
const n3mods = cur.n3.modules;
const h = (m) => Math.round(m / 6) / 10;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const today = new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });

const tag = (n) => `<span class="lv l${n}">N${n}</span>`;
const part = (code, title) => `<span class="part">${code}</span> ${title}`;
const table = (head, rows, cls = '') => `<table class="${cls}"><thead><tr>${head.map((x) => `<th>${x}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((x) => `<td>${x}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
const blocks = (list) => `<ol class="blocks">${list.map(([t, d]) => `<li><strong>${t}</strong>${d ? ` — ${d}` : ''}</li>`).join('')}</ol>`;

const html = `<!doctype html>
<html lang="es"><head><meta charset="utf-8">
<title>Estándar de formaciones · umotion Academy</title>
<style>
@font-face { font-family: 'Instrument Sans'; src: url('../node_modules/@fontsource-variable/instrument-sans/files/instrument-sans-latin-wght-normal.woff2') format('woff2'); font-weight: 400 700; }
@font-face { font-family: 'Instrument Sans'; src: url('../node_modules/@fontsource-variable/instrument-sans/files/instrument-sans-latin-ext-wght-normal.woff2') format('woff2'); font-weight: 400 700; unicode-range: U+0100-024F, U+20AC; }
@font-face { font-family: 'Geist Mono'; src: url('../node_modules/@fontsource/geist-mono/files/geist-mono-latin-400-normal.woff2') format('woff2'); font-weight: 400; }
@font-face { font-family: 'Geist Mono'; src: url('../node_modules/@fontsource/geist-mono/files/geist-mono-latin-500-normal.woff2') format('woff2'); font-weight: 500 700; }
:root { --ink:#080a14; --ink2:#2a3046; --ink3:#535d78; --rule:#dde2ec; --paper:#f4f6fa; --blue:#2b52f0; --cyan:#35c8ff; --l1:#0f9f8c; --l2:#2b52f0; --l3:#7b3fe4; }
@page { size: A4; margin: 18mm 16mm 18mm 16mm; }
* { box-sizing: border-box; }
body { font: 10pt/1.5 'Instrument Sans', system-ui, sans-serif; color: var(--ink2); margin: 0; }
h1, h2, h3, h4 { color: var(--ink); line-height: 1.2; margin: 0; }
h2 { font-size: 18pt; margin: 0 0 3mm; padding-top: 1mm; }
h2 .num { font: 500 10pt 'Geist Mono', monospace; color: var(--blue); display: block; letter-spacing: .08em; margin-bottom: 1mm; }
h3 { font-size: 12pt; margin: 5mm 0 2mm; }
h4 { font-size: 10.5pt; margin: 3mm 0 1.5mm; }
h2, h3, h4 { break-after: avoid; }
.lead-in { break-inside: avoid; }
p { margin: 0 0 2.5mm; }
.mono { font-family: 'Geist Mono', monospace; }
section { break-before: page; }
section.ref { break-before: page; }
.keep { break-inside: avoid; }
table { width: 100%; border-collapse: collapse; margin: 2mm 0 4mm; font-size: 9pt; break-inside: auto; }
th { text-align: left; font: 500 7.5pt 'Geist Mono', monospace; text-transform: uppercase; letter-spacing: .06em; color: var(--ink3); border-bottom: 1.5px solid var(--ink); padding: 1.6mm 2mm; }
td { border-bottom: 1px solid var(--rule); padding: 1.8mm 2mm; vertical-align: top; }
tr { break-inside: avoid; }
td:first-child { font-weight: 600; color: var(--ink); }
.cmp td:first-child { width: 22%; }
.lv { display: inline-block; font: 600 7.5pt 'Geist Mono', monospace; color: #fff; padding: .4mm 1.6mm; border-radius: 1.2mm; vertical-align: 1px; }
.l1 { background: var(--l1); } .l2 { background: var(--l2); } .l3 { background: var(--l3); }
.part { display: inline-block; font: 600 7.5pt 'Geist Mono', monospace; color: var(--blue); border: 1px solid var(--blue); padding: .3mm 1.4mm; border-radius: 1.2mm; vertical-align: 1px; }
.box { border: 1px solid var(--rule); border-radius: 3mm; padding: 4mm 5mm; margin: 3mm 0 4mm; background: var(--paper); break-inside: avoid; }
.box.rule { border-left: 4px solid var(--blue); }
.box.warn { border-left: 4px solid #d9822b; background: #fff7ee; }
.box h4 { margin-top: 0; }
.blocks { margin: 1mm 0 3mm; padding-left: 6mm; }
.blocks li { margin-bottom: 1mm; }
ul { margin: 1mm 0 3mm; padding-left: 5mm; } li { margin-bottom: .8mm; }
.cols { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 3mm; margin: 3mm 0; }
.col { border: 1px solid var(--rule); border-radius: 3mm; padding: 3mm 3.5mm; break-inside: avoid; border-top: 4px solid; }
.col.c1 { border-top-color: var(--l1); } .col.c2 { border-top-color: var(--l2); } .col.c3 { border-top-color: var(--l3); }
.col h4 { margin: 0 0 1mm; } .col p { font-size: 8.8pt; margin: 0 0 1.4mm; }
.small { font-size: 8.5pt; color: var(--ink3); }
s { color: var(--ink3); }
/* Portada */
.cover { height: 257mm; display: flex; flex-direction: column; justify-content: space-between; break-after: page; }
.cover .brand { display: flex; align-items: center; gap: 3mm; font: 600 11pt 'Instrument Sans'; color: var(--ink); }
.cover .brand img { width: 11mm; height: 11mm; border-radius: 2.5mm; }
.cover h1 { font-size: 38pt; letter-spacing: -.02em; line-height: 1.02; margin: 0 0 5mm; }
.cover h1 span { background: linear-gradient(100deg,#2b52f0,#2f8df5 55%,#35c8ff); -webkit-background-clip: text; background-clip: text; color: transparent; }
.cover .lead { font-size: 13pt; max-width: 150mm; color: var(--ink2); }
.cover .meta { font: 500 8.5pt 'Geist Mono', monospace; color: var(--ink3); letter-spacing: .05em; }
.tree { font: 9.5pt/1.75 'Geist Mono', monospace; background: var(--paper); border-radius: 3mm; padding: 4mm 5mm; border: 1px solid var(--rule); white-space: pre; break-inside: avoid; color: var(--ink); }
.toc { columns: 2; column-gap: 8mm; padding-left: 5mm; } .toc li { break-inside: avoid; }
.check li { list-style: none; position: relative; padding-left: 5mm; } .check li::before { content: ''; position: absolute; left: 0; top: 1.3mm; width: 2.6mm; height: 2.6mm; border: 1.2px solid var(--ink3); border-radius: .6mm; }
.check { padding-left: 1mm; }
.blank td:last-child { height: 9mm; } .blank td:first-child { width: 32%; }
</style></head><body>

<div class="cover">
  <div class="brand"><img src="../public/brand/icon-512.png" alt=""> umotion Academy</div>
  <div>
    <p class="meta">DOCUMENTO DE REFERENCIA · VERSIÓN 1.0 · ${today}</p>
    <h1>Estándar de<br><span>formaciones</span></h1>
    <p class="lead">El sistema común que siguen todas las formaciones de umotion Academy: tres niveles, las mismas partes en cada nivel, los mismos formatos, exámenes y modelo de precios. Así, cada formación nueva se monta en el mismo orden y el alumno siempre sabe dónde está.</p>
  </div>
  <div>
    <p class="small"><strong>Formación de referencia:</strong> Inversión (la única publicada hoy). Las cifras de este documento salen de los datos reales de la web. El detalle completo de Inversión está en <span class="mono">docs/CURRICULO.md</span>.</p>
    <p class="small"><strong>Cómo leerlo:</strong> ${tag(1)} ${tag(2)} ${tag(3)} marcan el nivel; ${part('A', '')} marca cada parte obligatoria de un nivel; los recuadros azules son reglas que no se cambian.</p>
  </div>
</div>

<h2 style="margin-top:0">Índice</h2>
<ol class="toc">
  <li>Qué es una formación</li><li>Principios comunes</li><li>Los tres niveles</li><li>Partes de cada nivel</li>
  <li>Formatos de pieza</li><li>Exámenes y reconocimientos</li><li>Precios y acceso</li><li>Cómo se ve en la web</li>
  <li>Identificadores y datos</li><li>Reglas editoriales y de publicación</li><li>Crear una formación nueva</li>
  <li>Formación de referencia: Inversión</li><li>Anexo: ficha en blanco</li>
</ol>

<h3>Resumen en una página</h3>
<div class="cols">
  <div class="col c1"><h4>${tag(1)} Nivel 1 · Base</h4><p><strong>Gratis</strong>, sin registro.</p><p>Sesiones de 5 min.</p><p>Objetivo: <em>hacerlo por tu cuenta</em>.</p><p>Cierre: examen N1 + práctica + plan.</p><p>Insignia gratuita.</p></div>
  <div class="col c2"><h4>${tag(2)} Nivel 2 · Avanzado</h4><p><strong>Suscripción</strong> (${esc(P.monthly)}).</p><p>Clases de 15–30 min.</p><p>Objetivo: <em>dominarlo tanto que podrías explicarlo</em>.</p><p>Cierre: examen N2 + proyecto.</p><p>Insignia N2.</p></div>
  <div class="col c3"><h4>${tag(3)} Nivel 3 · Profesional</h4><p><strong>Curso</strong> (${esc(P.course)}) + <strong>certificación aparte</strong> (${esc(P.cert)}).</p><p>Lecciones de 30–45 min.</p><p>Objetivo: <em>base de nivel profesional</em>.</p><p>Cierre: examen final + proyecto con revisión humana.</p><p>Certificado verificable.</p></div>
</div>
<div class="box warn"><h4>Hoy no se cobra</h4><p>Mientras los pagos no estén activos, los precios de los niveles 2 y 3 se muestran <s>tachados</s> en toda la web. Se activan cambiando un solo ajuste (<span class="mono">PRICING.paymentsEnabled</span>).</p></div>

<section>
<h2><span class="num">01</span>Qué es una formación</h2>
<p>Una <strong>formación</strong> es un área completa de aprendizaje (hoy, <em>Inversión</em>). Toda formación se divide siempre en <strong>tres niveles</strong>; cada nivel, en <strong>módulos</strong>; y cada módulo, en <strong>piezas</strong> con el formato propio del nivel. Las piezas trabajan <strong>competencias</strong> concretas, que el sistema mide con preguntas para personalizar el plan de cada alumno.</p>
<div class="tree">Formación                         p. ej. «Inversión»
├── Nivel 1 · Base (gratis)
│   ├── Parte A · Etapa de base      módulo de entrada obligatorio
│   ├── Parte B · Núcleo             módulos que cuentan para el examen
│   ├── Parte C · Ampliación         módulos opcionales «para saber más»
│   └── Parte D · Cierre             examen + práctica + plan + insignia
├── Nivel 2 · Avanzado (suscripción)
│   ├── Módulos (clases de 15–30 min) + muestras abiertas
│   ├── Clase del mes
│   └── Cierre: examen N2 + proyecto + insignia
└── Nivel 3 · Profesional (curso + certificación aparte)
    ├── Módulos (lecciones de 30–45 min) + clientes ficticios
    └── Cierre: examen final + proyecto revisado + certificado

Módulo  →  piezas (sesión / clase / lección)  →  competencias  →  preguntas</div>
<h3>Vocabulario común</h3>
${table(['Término', 'Significado'], [
  ['Formación', 'Área completa (Inversión, y en el futuro otras). Aparece en el panel «Formaciones» de la web.'],
  ['Nivel', '1, 2 o 3. Mismo nombre, promesa, formato y modelo de acceso en todas las formaciones.'],
  ['Módulo', 'Bloque temático de un nivel, con un código corto de 2 a 4 letras.'],
  ['Pieza', 'Unidad de estudio. Se llama <em>sesión</em> en N1, <em>clase</em> en N2 y <em>lección</em> en N3.'],
  ['Competencia', 'Algo concreto que el alumno sabe hacer. Cada pieza y cada pregunta apuntan a competencias.'],
  ['Cierre', 'Lo que hay que completar para terminar un nivel y obtener su reconocimiento.'],
  ['Muestra', 'Pieza de un nivel de pago abierta a todos, para que se vea qué hay detrás.'],
])}
</section>

<section>
<h2><span class="num">02</span>Principios comunes</h2>
<p>Se aplican a todas las formaciones y a todos los niveles.</p>
${blocks([
  ['Útil antes que completo', 'cada pieza termina en algo que el alumno hace o decide.'],
  ['Sin cálculos pesados', 'los números los calculan las herramientas de la web; el alumno aprende a interpretarlos.'],
  ['Subir de nivel es comprender más', 'nunca arriesgar más ni operar más.'],
  ['Educación general, nunca recomendación personalizada', 'nadie le dice a un alumno concreto qué comprar ni cuándo.'],
  ['España primero', 'normativa, fiscalidad y ejemplos para residentes en España, con fuentes oficiales.'],
  ['Fuentes primarias y fechas', 'cada dato que caduca lleva su fecha de consulta.'],
  ['Honestidad sobre la autoría', 'lo redactado con IA es borrador hasta que lo revisa una persona identificable.'],
  ['Ejemplos ficticios identificados', 'todo caso inventado lo dice; los históricos llevan fuente y fechas.'],
  ['Funciona sin registrarse', 'la cuenta es opcional: sirve para guardar el progreso en la nube y para lo verificable.'],
])}
<div class="box rule"><h4>Regla fija</h4><p>Ninguna formación nueva puede saltarse estos principios. Si un tema los choca (por ejemplo, exige fórmulas), se explica por su significado y su uso, o se deja para un nivel superior.</p></div>
</section>

<section>
<h2><span class="num">03</span>Los tres niveles</h2>
<p>Los tres niveles tienen el mismo papel en todas las formaciones. Cambia el tema, no la estructura.</p>
${table(['', `${tag(1)} Base`, `${tag(2)} Avanzado`, `${tag(3)} Profesional`], [
  ['Promesa tipo', 'Puedes hacerlo por tu cuenta, con criterio, y detectar lo que no te conviene.', 'Lo dominas tanto que podrías explicarlo con rigor a otra persona.', 'Base conceptual de nivel profesional, con certificado privado verificable.'],
  ['Para quién', 'Cualquiera, desde cero.', 'Quien ya practica y quiere entender a fondo.', 'Quien quiere nivel profesional o trabajar en el sector.'],
  ['Pieza', 'Sesión de 5 min', 'Clase de 15–30 min', 'Lección de 30–45 min'],
  ['Volumen orientativo', '60–80 sesiones (≈ 6 h)', '50–70 clases (≈ 20 h) + clase del mes', '45–60 lecciones + proyecto (≈ 40 h)'],
  ['Acceso', 'Gratis, sin registro, con anuncios', 'Suscripción mensual o anual, con prueba', 'Curso de pago único; certificación aparte'],
  ['Cierre', 'Examen N1 + práctica + plan personal', 'Examen N2 + proyecto «Tu primera clase»', 'Examen final + proyecto profesional con revisión humana'],
  ['Reconocimiento', 'Insignia gratuita', 'Insignia de Nivel 2', 'Certificado umotion verificable'],
  ['Requisito', 'Ninguno', 'Nivel 1 terminado o examen de acceso', 'Nivel 2 terminado o examen de acceso'],
], 'cmp')}
<div class="box rule"><h4>Regla de progresión</h4><p>Cada nivel tiene un examen de acceso opcional: con un 80 % o más se puede saltar el nivel anterior. Dentro de cada nivel, el diagnóstico adaptativo decide el orden personal del alumno.</p></div>
<div class="box warn"><h4>Aviso obligatorio del Nivel 3</h4><p>«Certificado privado emitido por umotion. No es una titulación oficial, no habilita para prestar asesoramiento ni sustituye las cualificaciones exigidas por el supervisor.» Debe aparecer en la página del Nivel 3, en el certificado y en su página de verificación. Palabras prohibidas: «oficial», «acreditación oficial», «equivalente a…», «habilita».</p></div>
</section>

<section>
<h2><span class="num">04</span>Partes de cada nivel</h2>
<h3>Ficha obligatoria de cada nivel</h3>
<p>Todo nivel, de cualquier formación, se define con estos siete campos (son los de <span class="mono">tiers</span> en <span class="mono">curriculum.json</span> y los que muestra su página de presentación):</p>
${table(['Campo', 'Qué contiene', 'Ejemplo (Inversión, N1)'], [
  ['Título', 'Nombre corto del nivel', esc(t1.title)],
  ['Promesa', '«Al terminar puedes…», verificable', esc(t1.promise)],
  ['Para quién', 'Una frase', esc(t1.forWho)],
  ['Formato', 'Tipo y duración de pieza', esc(t1.format)],
  ['Volumen', 'Número de piezas y horas', esc(t1.volume)],
  ['Cierre', 'Qué hay que completar', esc(t1.closing)],
  ['Reconocimiento', 'Insignia o certificado', esc(t1.recognition)],
])}
<h3>${tag(1)} Partes del Nivel 1</h3>
${table(['Parte', 'Qué es', 'Reglas'], [
  [part('A', 'Etapa de base'), 'El primer módulo: lo imprescindible antes de empezar (en Inversión, el Camino Cero).', 'Obligatoria. Tiene su propio examen corto. Es requisito del examen N1.'],
  [part('B', 'Núcleo'), 'Los módulos que te dejan hacerlo por tu cuenta.', 'Cuentan para el examen N1. Orden por defecto definido; el plan personal puede reordenar.'],
  [part('C', 'Ampliación'), '«Para saber más»: módulos opcionales.', 'No cuentan para el examen. Se recomiendan cuando el alumno ya tiene su plan.'],
  [part('D', 'Cierre'), 'Examen N1, práctica sin riesgo y «Mi plan en una página».', 'Con todo completado se obtiene la insignia gratuita.'],
  [part('E', 'Biblioteca'), 'Lecturas, guías y herramientas de apoyo.', 'Siempre gratis. Enlazadas desde las sesiones.'],
])}
<h3>${tag(2)} Partes del Nivel 2</h3>
${table(['Parte', 'Qué es', 'Reglas'], [
  [part('A', 'Módulos'), 'De 10 a 12 módulos de clases.', 'Uno de ellos, el primero, trata de cómo explicar el tema con responsabilidad.'],
  [part('B', 'Muestras abiertas'), 'De 1 a 3 clases gratuitas.', 'Se publican en la web estática; el resto se sirve desde el servidor.'],
  [part('C', 'Clase del mes'), 'Una clase nueva cada mes.', 'Da sentido a la suscripción.'],
  [part('D', 'Cierre'), 'Examen N2 y proyecto «Tu primera clase».', 'Insignia de Nivel 2.'],
])}
<h3>${tag(3)} Partes del Nivel 3</h3>
${table(['Parte', 'Qué es', 'Reglas'], [
  [part('A', 'Módulos'), 'De 10 a 12 módulos de lecciones, más un módulo de proyecto.', 'Rigor profesional, siempre conceptual.'],
  [part('B', 'Clientes ficticios'), 'Cuatro personas inventadas que aparecen en los expedientes y el proyecto.', 'Cada caso lleva el aviso de ejemplo ficticio.'],
  [part('C', 'Muestra abierta'), 'Al menos una lección gratuita.', 'Igual que en N2.'],
  [part('D', 'Cierre'), 'Examen final y proyecto profesional.', 'Revisión humana obligatoria. Certificado verificable.'],
])}
</section>

<section>
<h2><span class="num">05</span>Formatos de pieza</h2>
<p>Cada nivel tiene una plantilla fija. Todas las piezas de ese nivel, en cualquier formación, siguen los mismos bloques en el mismo orden.</p>
<div class="keep"><h3>${tag(1)} Sesión de 5 minutos</h3>
${blocks([
  ['Para empezar', 'una pregunta o situación para pensar unos segundos.'], ['Palabras clave', '2–4 términos del glosario, una frase cada uno (tarjetas).'],
  ['La idea', '80–150 palabras, con una tabla pequeña si ayuda.'], ['En la práctica', '3–4 viñetas accionables.'], ['Error frecuente', 'uno.'],
  ['Te recomendamos', '3–4 consejos generales, nunca productos concretos.'], ['Caso práctico', 'ficticio, con nombre y cifras redondas.'],
  ['Test', '3 preguntas, con explicación y enlace al tutor.'], ['Acción de hoy', 'una tarea de 2 minutos en la vida real.'], ['Fuentes y revisión', ''],
])}<p class="small">Límites: 450–650 palabras visibles, cero fórmulas. Opciones de respuesta siempre una debajo de otra.</p></div>
<div class="keep"><h3>${tag(2)} Clase de 15 a 30 minutos</h3>
${blocks([
  ['Para empezar', 'una pregunta real de un alumno.'], ['Objetivos', '3, «Al terminar sabrás…».'], ['Palabras clave', '4–8.'],
  ['Lección', '3–5 apartados de 150–300 palabras, con tablas y esquemas.'], ['Caso práctico ampliado', '250–400 palabras.'],
  ['Cómo explicarlo', 'la idea en 3 frases, una analogía, 3 dudas habituales, el error del principiante y la frontera entre explicar y recomendar.'],
  ['Test', '5–8 preguntas, al menos 2 sobre el caso.'], ['Explícalo tú', 'el alumno lo explica en 3–5 frases y el tutor le corrige con rúbrica.'],
  ['Para profundizar', '1–3 lecturas o fuentes oficiales.'], ['Fuentes y revisión', ''],
])}</div>
<div class="keep"><h3>${tag(3)} Lección de 30 a 45 minutos</h3>
${blocks([
  ['Objetivos de aprendizaje', '3–5, verificables.'], ['Contexto profesional', 'por qué importa en el trabajo real.'],
  ['Lección principal', '4–7 apartados; cada métrica: qué mide, cómo se lee, para qué sirve, qué no dice y un ejemplo ya calculado.'],
  ['Criterio profesional', 'cómo decide un buen profesional y qué conflictos de interés hay.'], ['Expediente', 'caso de un cliente ficticio o real documentado.'],
  ['Test', '8–12 preguntas de estilo examen.'], ['Ejercicio aplicado', 'tarea breve que alimenta el proyecto final.'], ['Resumen para repasar', '5–8 puntos.'],
  ['Fuentes y normativa', 'con fecha de consulta.'],
])}</div>
</section>

<section>
<h2><span class="num">06</span>Exámenes y reconocimientos</h2>
${table(['', `${tag(1)} Examen N1`, `${tag(2)} Examen N2`, `${tag(3)} Examen final N3`], [
  ['Requisito', 'Etapa de base terminada', 'Nivel 2 cursado', 'Nivel 3 cursado'],
  ['Preguntas', '30 aleatorias del núcleo, al menos 2 por capacidad', '50 aleatorias de un banco de 250 o más', '100 aleatorias de un banco de 600 o más'],
  ['Tiempo', 'Sin límite', '60 min', '150 min'],
  ['Aprobado', '80 %', '80 %', '70 % global y 50 % en cada módulo'],
  ['Intentos', 'Ilimitados, 24 h de espera tras suspender', '3 al mes', '3 incluidos'],
  ['Proyecto', 'Práctica sin riesgo + «Mi plan en una página»', '«Tu primera clase»: guion de 10 min (aprobado: 70/100)', 'Plan integral o informe de empresa, 2.500–4.000 palabras (aprobado: 70/100)'],
  ['Corrección', 'En el dispositivo; verificable solo con cuenta y corrección en el servidor', 'Tutor con rúbrica + revisión humana de muestra y dudosos', 'Tutor con rúbrica + revisión humana obligatoria'],
  ['Reconocimiento', 'Insignia gratuita', 'Insignia de Nivel 2', 'Certificado verificable (código único, Open Badges, LinkedIn)'],
], 'cmp')}
<div class="box rule"><h4>Reglas fijas</h4><ul>
  <li>Las capacidades del examen N1 se definen al diseñar el núcleo: unas 12, cada una ligada a sus competencias.</li>
  <li>Al terminar un examen, el alumno ve qué ha fallado y qué piezas repasar.</li>
  <li>Lo verificable (insignia verificable, certificado) solo se emite desde el servidor.</li>
  <li>El tutor nunca redacta el proyecto y se desactiva durante el examen final.</li>
  <li>El certificado muestra el nombre solo con consentimiento; si no, iniciales.</li>
</ul></div>
</section>

<section>
<h2><span class="num">07</span>Precios y acceso</h2>
<p>El modelo de acceso es igual en todas las formaciones. El importe puede cambiar por formación, pero no la forma.</p>
${table(['Nivel', 'Modelo', 'Inversión (hoy)', 'Qué incluye'], [
  [`${tag(1)} Base`, 'Gratis con anuncios', 'Gratis', 'Todo el nivel, sin registro.'],
  [`${tag(2)} Avanzado`, 'Suscripción mensual o anual, con días de prueba', `<s>${esc(P.monthly)} o ${esc(P.annual)}</s> · ${P.trial} días de prueba`, 'Clases, clase del mes, examen e insignia N2.'],
  [`${tag(3)} Profesional`, 'Curso de pago único', `<s>${esc(P.course)}</s>`, 'Lecciones, test y examen de práctica.'],
  [`${tag(3)} Certificación`, 'Pago aparte, cubre la revisión humana', `<s>${esc(P.cert)}</s>`, 'Examen final, proyecto revisado y certificado.'],
])}
<div class="box rule"><h4>Reglas fijas</h4><ul>
  <li>Los precios no se escriben dentro del contenido: se leen de una sola configuración (<span class="mono">PRICING</span>).</li>
  <li>Mientras no se cobre, se muestran tachados.</li>
  <li>Lo que una vez fue gratis sigue gratis.</li>
  <li>Los módulos de pago se ven en la web con título, descripción y candado.</li>
  <li>Antes de cobrar: titular legal, condiciones de venta, IVA, desistimiento de 14 días y control de acceso desde el servidor.</li>
</ul></div>
</section>

<section>
<h2><span class="num">08</span>Cómo se ve en la web</h2>
<h3>Panel «Formaciones»</h3>
<p>Botón de tres líneas arriba a la izquierda. Abre un panel desde la izquierda con la lista de formaciones. Al pulsar una formación se despliegan sus tres niveles; al pulsar un nivel se abre su <strong>página de presentación</strong>. Cada formación nueva se añade como una entrada más del panel, con la misma estructura.</p>
<div class="tree">☰ Formaciones
├── Inversión                     3 niveles
│   ├── 1  Invertir por tu cuenta      Gratis            → /es/nivel-1/
│   ├── 2  Avanzado                    <s>${esc(P.monthly)}</s>          → /es/nivel-2/
│   └── 3  Profesional                 <s>curso ${esc(P.course)} · cert. ${esc(P.cert)}</s> → /es/nivel-3/
├── Emprendimiento                3 niveles
│   ├── 1  Emprender desde cero        Gratis            → /es/emprendimiento/nivel-1/
│   ├── 2  Avanzado                    <s>${esc(P.monthly)}</s>          → /es/emprendimiento/nivel-2/
│   └── 3  Profesional                 <s>curso ${esc(P.course)} · cert. ${esc(P.cert)}</s> → /es/emprendimiento/nivel-3/
├── Claude                        3 niveles
│   ├── 1  Empezar con Claude          Gratis            → /es/claude/nivel-1/
│   ├── 2  Avanzado                    <s>${esc(P.monthly)}</s>          → /es/claude/nivel-2/
│   └── 3  Profesional                 <s>curso ${esc(P.course)} · cert. ${esc(P.cert)}</s> → /es/claude/nivel-3/
├── (nueva formación)             3 niveles
└── + Más formaciones             Próximamente</div>
<p>En la portada, debajo del párrafo de bienvenida, cada formación tiene un pósit (un cuadrado de color) que lleva a su página. Al añadir una formación se añade su pósit (<span class="mono">FORMATIONS</span> en <span class="mono">src/pages/es/index.astro</span>) y su entrada del panel (<span class="mono">FORMATIONS</span> en <span class="mono">src/components/Drawer.astro</span>).</p>
<h3>Página de presentación de un nivel</h3>
${blocks([
  ['Cabecera', 'nivel, precio (o «Gratis») y estado; título; subtítulo; promesa.'],
  ['Datos rápidos', 'número de piezas, horas, formato y reconocimiento.'],
  ['Botón principal', 'N1: «Empezar gratis». N2 y N3: «Avisadme cuando abra» mientras no se cobre.'],
  ['Organización', 'N1: partes A–D con sus módulos. N2 y N3: temario por módulos con candados y muestras.'],
  ['Al terminar sabrás', 'capacidades del nivel.'],
  ['Cómo se termina', 'cierre y reconocimiento, con enlaces.'],
])}
<h3>Piezas comunes a todas las formaciones</h3>
${table(['Pieza', 'Función'], [
  ['Diagnóstico («Empezar»)', 'Objetivos (varios a la vez), experiencia e intereses; propone un plan personal.'],
  ['Mi plan', 'Siguiente pieza recomendada con sus motivos, progreso por nivel y áreas.'],
  ['Repaso', 'Repaso espaciado con preguntas de los niveles a los que hay acceso.'],
  ['Tutor', 'Resuelve dudas sin recomendar productos; en N2 corrige «Explícalo tú».'],
  ['Glosario', 'Términos con definición corta y nivel; tarjetas en cada pieza.'],
  ['Cuenta opcional', 'Guarda el progreso en la nube y permite avisos diarios a las 16:00.'],
])}
</section>

<section>
<h2><span class="num">09</span>Identificadores y datos</h2>
${table(['Elemento', 'Convención', 'Ejemplo'], [
  ['Pieza de N1', '<span class="mono">&lt;mod&gt;-NN-slug</span>', '<span class="mono">ya-06-aportar-cada-mes</span>'],
  ['Clase de N2', '<span class="mono">n2-&lt;mod&gt;-NN-slug</span>', '<span class="mono">n2-rf-03-la-curva-de-tipos</span>'],
  ['Lección de N3', '<span class="mono">n3-&lt;mod&gt;-NN-slug</span>', '<span class="mono">n3-reg-02-mifid-ii-por-dentro</span>'],
  ['Pregunta', 'id de la pieza sin guiones ni slug + <span class="mono">-qN</span>', '<span class="mono">ya06-q1</span>'],
  ['Competencia', 'kebab-case en español, sin prefijo de nivel', '<span class="mono">curva-tipos</span>'],
  ['Módulo', 'código de 2 a 4 letras', '<span class="mono">rf</span>, <span class="mono">reg</span>'],
])}
<div class="box rule"><h4>Formaciones nuevas (aplicado en Emprendimiento)</h4><p>Cada formación nueva tiene un identificador corto que se antepone a sus rutas, módulos, piezas y competencias para que no choquen con Inversión. Emprendimiento: rutas <span class="mono">/es/emprendimiento/…</span>, módulos <span class="mono">em-…</span>, sesiones <span class="mono">em-im02-…</span>, preguntas <span class="mono">em-im02-q1</span>, competencias <span class="mono">em-…</span> (N2 <span class="mono">em2-…</span>, N3 <span class="mono">em3-…</span>). Su progreso se guarda aparte (<span class="mono">academy-emprendimiento</span>). Inversión conserva sus rutas actuales porque cambiarlas rompería enlaces y progreso guardado.</p></div>
<div class="box rule"><h4>Regla fija</h4><p>Los identificadores publicados no se renombran ni se borran: el progreso de los alumnos se guarda con ellos.</p></div>
<h3>Dónde vive cada cosa</h3>
${table(['Dato', 'Archivo'], [
  ['Ficha de niveles, temario N2/N3, capacidades N1', '<span class="mono">src/data/curriculum.json</span>'],
  ['Sesiones de N1', '<span class="mono">src/content/sessions/</span>'],
  ['Clases y lecciones (N2/N3)', '<span class="mono">src/content/clases/</span> (campo <span class="mono">tier</span>)'],
  ['Competencias (con nivel)', '<span class="mono">src/data/skills.json</span>'],
  ['Glosario (con nivel)', '<span class="mono">src/data/glossary.json</span>'],
  ['Precios', '<span class="mono">src/config/site.ts</span> → <span class="mono">PRICING</span>'],
  ['Panel de formaciones', '<span class="mono">src/components/Drawer.astro</span>'],
  ['Otras formaciones: niveles, módulos, competencias, textos y temario N2/N3', '<span class="mono">src/data/&lt;id&gt;.json</span> (registradas en <span class="mono">src/lib/formations.ts</span>)'],
  ['Otras formaciones: sesiones de N1 y glosario', '<span class="mono">src/content/&lt;id&gt;/</span> y <span class="mono">src/data/glossary-&lt;id&gt;/</span> (un archivo por módulo)'],
  ['Páginas comunes de formación', '<span class="mono">src/pages/es/[f]/</span>: portada, niveles, módulos, sesión, examen y glosario'],
  ['Herramientas propias de una formación', '<span class="mono">FORMATION_TOOLS</span> en <span class="mono">src/lib/formations.ts</span> (ejemplo: Claude)'],
  ['Reproductor de sesiones (común)', '<span class="mono">src/components/SessionPlayer.astro</span>'],
])}
</section>

<section>
<h2><span class="num">10</span>Reglas editoriales y de publicación</h2>
<h3>Estilo</h3>
<ul><li>Español de España, tuteo, frases cortas, una idea por párrafo.</li><li>Ningún término técnico sin explicarlo en una frase la primera vez.</li><li>Comillas «», coma decimal y <span class="mono">5 €</span> con espacio.</li><li>Sin fórmulas; cifras redondas calculadas por una herramienta con pruebas.</li></ul>
<h3>Frontera con el asesoramiento</h3>
${table(['Permitido', 'Prohibido'], [
  ['Explicar categorías de producto', '«Te recomendamos comprar X»'],
  ['Usar productos reales para enseñar a leer su documentación', 'Carteras concretas presentadas como «la mejor»'],
  ['Dar criterios generales («fíjate en el coste total»)', 'Adaptar una recomendación a los datos personales del alumno'],
  ['Casos de clientes ficticios en N3', 'Prometer rentabilidades o hacer predicciones'],
])}
<h3>Estados editoriales</h3>
<p><strong>Borrador</strong> → <strong>Pendiente de revisión humana</strong> → <strong>Revisado</strong> (con nombre del revisor real). El contenido de pago no se publica sin estar revisado por una persona con la cualificación adecuada.</p>
<h3>Revisión periódica</h3>
<ul><li>Tarifas y precios de terceros: cada tres meses o cuando cambien.</li><li>Fiscalidad: cada ejercicio fiscal.</li><li>Normativa: cuando cambie.</li><li>Resto: una vez al año.</li></ul>
<h3>Una pieza está terminada cuando…</h3>
<ul class="check">
  <li>sigue la plantilla de su nivel con todos los bloques y dura lo previsto;</li>
  <li>sus competencias existen en el catálogo y los términos nuevos están en el glosario con nivel;</li>
  <li>las preguntas siguen la convención, explican cada respuesta y enlazan al tutor;</li>
  <li>el caso está marcado como ficticio o histórico con fuente, y las fuentes tienen fecha;</li>
  <li>el estado editorial es correcto y el revisor solo figura si es real;</li>
  <li>no hay fórmulas, recomendaciones personalizadas ni promesas;</li>
  <li>se ha probado en móvil, en tema claro y oscuro.</li>
</ul>
</section>

<section>
<h2><span class="num">11</span>Crear una formación nueva</h2>
<p>Pasos en orden. Cada fase la aprueban los socios antes de empezar la siguiente.</p>
<h3>Fase 0 · Definir</h3>
<ul class="check">
  <li>Nombre, identificador corto y para quién es.</li>
  <li>Ficha de los tres niveles (los siete campos de la sección 4).</li>
  <li>Catálogo de competencias, con nivel 1, 2 o 3 y agrupadas en áreas.</li>
  <li>Capacidades del examen N1 (unas 12) y sus competencias.</li>
  <li>Fuentes oficiales del tema y quién revisará el contenido.</li>
</ul>
<h3>Fase 1 · Nivel 1 completo (gratis)</h3>
<ul class="check">
  <li>Parte A: etapa de base con su examen corto.</li>
  <li>Parte B: módulos del núcleo, con orden por defecto.</li>
  <li>Parte C: módulos de ampliación.</li>
  <li>Parte D: examen N1, práctica, plan en una página e insignia.</li>
  <li>Glosario, banco de preguntas y diagnóstico de entrada.</li>
  <li>Página de presentación del nivel y entrada en el panel «Formaciones».</li>
</ul>
<h3>Fase 2 · Esqueleto de los niveles 2 y 3</h3>
<ul class="check">
  <li>Temario completo de N2 y N3 con módulos, piezas y minutos (visible con candados).</li>
  <li>Muestras abiertas y botón «Avisadme cuando abra».</li>
  <li>Clientes ficticios del N3 y aviso del certificado.</li>
  <li>Precios en la configuración (tachados mientras no se cobre).</li>
</ul>
<h3>Fase 3 · Abrir los niveles de pago</h3>
<ul class="check">
  <li>Contenido revisado por una persona cualificada.</li>
  <li>Pagos, control de acceso desde el servidor y condiciones legales.</li>
  <li>Exámenes y proyectos corregidos en el servidor; certificado verificable.</li>
</ul>
</section>

<section>
<h2><span class="num">12</span>Formación de referencia: Inversión</h2>
<p>La primera formación publicada. Es el modelo que deben copiar las siguientes.</p>
<h3>${tag(1)} ${esc(t1.title)} · Gratis</h3>
<p>${esc(t1.promise)}</p>
${table(['Parte', 'Módulo', 'Qué se aprende', 'Sesiones'], [
  [part('A', 'Base'), TR['camino-cero'][0], TR['camino-cero'][1], counts['camino-cero']],
  ...['productos', 'formas', 'invertir-ya', 'trade-republic', 'mantener'].map((t, i) => [i === 0 ? part('B', 'Núcleo') : '', TR[t][0], TR[t][1], counts[t]]),
  ...['empresas', 'noticias', 'trading'].map((t, i) => [i === 0 ? part('C', 'Ampliación') : '', TR[t][0], TR[t][1], counts[t]]),
  [part('D', 'Cierre'), 'Examen N1 · práctica · plan en una página', esc(t1.recognition), '—'],
])}
<p class="small">Total: ${Object.values(counts).reduce((a, b) => a + b, 0)} sesiones.</p>
<div class="keep"><h4>Capacidades del examen N1</h4><ol class="blocks">${cur.n1Capacities.map((c) => `<li>${esc(c.text)}</li>`).join('')}</ol></div>

<section class="ref"><h3>${tag(2)} ${esc(t2.title)} · <s>${esc(P.monthly)} o ${esc(P.annual)}</s></h3>
<p>${esc(t2.promise)}</p>
${table(['Código', 'Módulo', 'Clases', 'Horas'], n2mods.map((m) => [`<span class="mono">${m.code}</span>`, esc(m.title), m.items.length, h(m.minutes)]))}
<p class="small">Total: ${n2mods.reduce((a, m) => a + m.items.length, 0)} clases, unas ${Math.round(n2mods.reduce((a, m) => a + m.minutes, 0) / 60)} h, más la clase del mes.</p></section>

<h3>${tag(3)} ${esc(t3.title)} · curso <s>${esc(P.course)}</s> · certificación <s>${esc(P.cert)}</s></h3>
<p>${esc(t3.promise)}</p>
${table(['Código', 'Módulo', 'Lecciones', 'Horas'], n3mods.map((m) => [`<span class="mono">${m.code}</span>`, esc(m.title), m.items.length || 'Proyecto', h(m.minutes)]))}
<h4>Clientes ficticios</h4>
${table(['Cliente', 'Situación', 'Temas'], cur.n3.clients.map((c) => [esc(c.name), esc(c.situation), esc(c.topics)]))}
</section>

<section>
<h2><span class="num">13</span>Anexo: ficha en blanco de una formación nueva</h2>
<p>Cópiala para cada formación nueva y complétala antes de escribir contenido.</p>
<h3>Datos de la formación</h3>
${table(['Campo', 'Respuesta'], [['Nombre'], ['Identificador corto'], ['Para quién'], ['Fuentes oficiales principales'], ['Revisor del contenido'], ['Áreas de competencias']].map((r) => [r[0], '']), 'blank')}
${[1, 2, 3].map((n) => `<div class="keep"><h3>${tag(n)} Nivel ${n}</h3>${table(['Campo', 'Respuesta'], ['Título', 'Promesa («Al terminar…»)', 'Para quién', 'Formato', 'Volumen', 'Cierre', 'Reconocimiento', n === 1 ? 'Módulos (partes A, B y C)' : 'Módulos', n === 1 ? 'Capacidades del examen' : n === 2 ? 'Precio (suscripción)' : 'Precio del curso / de la certificación'].map((x) => [x, '']), 'blank')}</div>`).join('')}
</section>
</body></html>`;

const htmlPath = root + 'docs/estandar-formaciones.html';
writeFileSync(htmlPath, html);
const require = createRequire(process.env.PLAYWRIGHT_ROOT || '/opt/node22/lib/node_modules/');
const { chromium } = require('playwright');
const b = await chromium.launch();
const p = await b.newPage();
await p.goto(pathToFileURL(htmlPath).href, { waitUntil: 'networkidle' });
await p.pdf({
  path: root + 'docs/ESTANDAR-FORMACIONES.pdf', format: 'A4', printBackground: true, preferCSSPageSize: true,
  displayHeaderFooter: true, headerTemplate: '<span></span>',
  footerTemplate: '<div style="width:100%;font:7pt Helvetica,Arial,sans-serif;color:#737d9a;padding:0 16mm;display:flex;justify-content:space-between"><span>umotion Academy · Estándar de formaciones v1.0</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>',
});
await b.close();
console.log('docs/ESTANDAR-FORMACIONES.pdf generado');
