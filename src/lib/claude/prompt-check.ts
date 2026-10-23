/**
 * Evaluador de peticiones (prompts) en español, sin IA y sin red: revisa si una petición tiene las piezas
 * que se enseñan en la formación Claude (tarea, contexto, público, formato, tono, ejemplos, límites y
 * verificación) y si incluye datos personales. Es orientativo: mira señales en el texto, no entiende
 * el significado. La opinión con IA (api/prompt-coach.js) es opcional y va aparte.
 */
import { anonymize } from './anonymize.ts';

export type CriterionId = 'tarea' | 'contexto' | 'publico' | 'formato' | 'tono' | 'ejemplos' | 'limites' | 'verificar' | 'preguntas';

export interface Criterion { id: CriterionId; label: string; hint: string; weight: number; re: RegExp[] }

const w = (s: string) => new RegExp(s, 'i');

/** Piezas de una buena petición, en el orden en que se enseñan (sesiones cla-c03 y cla-pe01 a cla-pe06). */
export const CRITERIA: Criterion[] = [
  { id: 'tarea', label: 'Una tarea clara', weight: 3, hint: 'Empieza por lo que quieres que haga: «Escribe…», «Resume…», «Prepara…».',
    re: [w('\\b(escribe|redacta|resume|res[uú]meme|explica|expl[ií]came|crea|haz|hazme|prepara|prep[aá]rame|analiza|traduce|tradúceme|revisa|corrige|dame|dime|prop[oó]n|prop[oó]nme|ayúdame a|ay[uú]dame con|genera|compara|lista|organiza|sugiere|planifica|calcula|clasifica|extrae|reescribe|mejora|convierte|adapta|elabora|diseña|ordena|identifica|evalúa|valora|busca|mira|contesta|responde|agrupa|recomienda|resume|piensa|ayuda|ayudas|ens[eé]ñame|p[aá]same|gu[ií]ame|res[uú]melo|tr[aá]eme|acorta|quita|cambia|pon|simplifica|ajusta|investiga|saca|olvida|recuerda|apunta|av[ií]same)\\b'),
      // Encargos con otras palabras: «quiero que…», «necesito un…», «¿me ayudas a…?», «¿puedes…?».
      w('\\b(quiero que|quisiera que|necesito (que|un|una|unos|unas)|me gustar[ií]a que|me (ayudas|haces|preparas|escribes|explicas|dices|pasas|redactas|resumes) |puedes|podr[ií]as)'),
      // Verbos con pronombre pegado: «compáralas», «resúmelo», «explícamelo»…
      w('\\b(compár|resúm|explíc|revís|corríg|tradúc|escríb|redáct|prepár|analíz|organíz|ordén|cré|clasifíc|reescríb|mejór|conviért|adápt|elabór|diséñ|identifíc|calcúl|planifíc|sugiér|propón|genér|enséñ|díg|dí|dá|ház|ayúd|búsc|léel|lée|déj|pón|cámbi|quít|acórt|pás|mánd)[a-záéíóúñ]*(me|te|lo|la|los|las|le|les|nos)\\b')] },
  { id: 'contexto', label: 'Contexto', weight: 2, hint: 'Cuenta quién eres o la situación: «Soy profesora de primaria…», «Tengo una tienda…».',
    re: [w('\\b(soy|trabajo (en|como|de)|tengo|tenemos|estoy|estamos|(mi|mis|nuestr[oa]s?) (empresa|negocio|tienda|bar|restaurante|academia|clínica|consulta|jefe|jefa|cliente|clientes|clase|alumnos|equipo|club|asociaci[oó]n|hijo|hija|hijos|hijas|madre|padre|pareja|marido|mujer|familia|casa|piso|comunidad|barrio|pueblo|trabajo|oficina|empresa|compa[nñ]er[oa]|abuel[oa])|nuestra|nuestro|la situaci[oó]n|el contexto|se trata de|llevo|acabo de|he recibido|me han|vivo|estudio|me dedico|me estoy planteando|estoy pensando|organizo)\\b'),
      // Otras formas naturales de situarse: «Hago 1.º de Bachillerato», «No sé nada de finanzas», «Mi banco me dice…».
      w('\\b(eres (el|la|un|una|mi|nuestr[oa])|me presento|nos mudamos|me mudo|nos vamos a vivir|act[uú]a como|somos|hago|curso|estudio|vivo|me dedico|no s[eé] (nada|mucho|casi nada)|nunca he|me cuesta|acabo de empezar|mi (banco|m[eé]dic[oa]|casero|casera|seguro|hipoteca|n[oó]mina|coche|contrato|profesor|profesora|tutor|tutora))\\b')] },
  { id: 'publico', label: 'Para quién o para qué', weight: 2, hint: 'Di quién lo va a leer o para qué lo quieres: «para mis clientes», «para presentarlo el lunes».',
    re: [w('\\bpara (un|una|mi|mis|su|sus|tu|tus|nuestr[oa]s?|el|la|los|las|ella|ellas|[eé]l|ellos|que|presentar|enviar|mandar|usar|publicar|leer|compartir|entender|preparar|explicar|alguien|personas|ni[nñ]os|clientes|alumnos|familias|vecinos|mi jefe)\\b'), w('\\b(dirigid[oa]s? a|lo va a leer|lo leer[aá]n?|lector|destinatario|p[uú]blico|audiencia)\\b')] },
  { id: 'formato', label: 'Formato', weight: 2, hint: 'Pide la forma: «en una tabla», «en 5 puntos», «menos de 150 palabras», «en un correo».',
    re: [w('\\b(tabla|lista|vi[nñ]etas|puntos|p[aá]rrafos?|palabras|l[ií]neas|frases|esquema|columnas|apartados|t[ií]tulos|formato|resumen de|m[aá]ximo|como m[aá]ximo|en un correo|en un mensaje|en un whatsapp|paso a paso|una p[aá]gina|diapositivas|en \\d+|breve|corto|corta|cortito|cortita|un whatsapp|un mensaje|un correo|un email|una carta|un cartel|la mitad)\\b')] },
  { id: 'tono', label: 'Tono', weight: 1, hint: 'Indica el tono: «cercano», «formal», «directo pero amable», «sencillo».',
    re: [w('\\b(tono|formal|informal|cercano|cercana|amable|educado|educada|directo|directa|profesional|sencillo|sencilla|claro|clara|firme|neutral|divertido|serio|respetuoso|t[eé]cnico|coloquial|cordial|claras|claros|cercanos|cercanas|amables|sencillos|sencillas|de usted|tut[eé]ame|sin emojis)\\b'), /\bde tú(?![a-záéíóúñ])/i] },
  { id: 'ejemplos', label: 'Un ejemplo', weight: 1, hint: 'Si tienes uno, muestra cómo lo quieres: «Por ejemplo: …», «Algo parecido a esto: …».',
    re: [w('\\b(por ejemplo|ejemplo|como este|como esta|parecido a|al estilo de|algo as[ií]|as[ií]:)'), /[«"“][^»"”]{12,}[»"”]/] },
  { id: 'limites', label: 'Límites', weight: 1, hint: 'Di lo que no quieres: «sin tecnicismos», «no inventes datos», «evita…».',
    re: [w('\\b(sin |(no|ni) ((me|te|le|lo|la|los|las|les|nos|se) ){0,2}(uses|incluyas|inventes|pongas|menciones|des|digas|hagas|escribas|a[nñ]adas|cambies|repitas|env[ií]es|borres|toques|compres|pagues|reserves|rellenes|apuntes|firmes|publiques|muevas|quites|reescribas|resuelvas|desarrolles|prometas|alargues|metas)|no quiero (que|nada)|no hace falta que|evita|solo |s[oó]lamente|nada de|que no|nunca)'),
      // Límites en primera persona: «No te daré…», «No incluiré…».
      w('\\bno ((me|te|le|lo|la|los|las|les|nos|os|se) ){0,2}[a-zñ]+(ar|er|ir)[eé](?![a-záéíóúñ])')] },
  { id: 'verificar', label: 'Pedir fuentes o avisos', weight: 1, hint: 'Pide que diga si duda o de dónde saca los datos: «cita la fuente», «dime si no estás seguro».',
    re: [w('\\b(fuentes?|cita|citas|referencias|enlaces?|no (lo )?sabes|no est[aá]s segur[oa]|no lo tienes claro|no lo encuentras|no (lo )?encuentras|no lo tengas claro|dime si|ind[ií]came si|av[ií]same si|marca lo que|qu[eé] (dudas|datos) |de d[oó]nde (lo )?sacas|de qu[eé] (cl[aá]usula|p[aá]gina|apartado|documento|parte) sale|indicando (la|el) (cl[aá]usula|p[aá]gina|apartado))')] },
  { id: 'preguntas', label: 'Que te pregunte antes', weight: 1, hint: 'Para tareas grandes: «Antes de empezar, hazme las preguntas que necesites».',
    re: [w('\\b(preg[uú]ntame|hazme (hasta |las |unas |algunas |\\w+ )?(\\w+ )?preguntas|antes de (empezar|responder|escribir|opinar|contestar|seguir)|si te falta|si necesitas m[aá]s)')] },
];
export const CRITERION = Object.fromEntries(CRITERIA.map((c) => [c.id, c])) as Record<CriterionId, Criterion>;

export interface ExtraCheck { label: string; any: string[]; hint?: string }
export interface CheckOptions { require?: CriterionId[]; extra?: ExtraCheck[] }
export interface CheckItem { id: string; label: string; ok: boolean; hint: string; required: boolean }
export interface CheckResult { score: number; level: 'empezar' | 'mejorable' | 'buena' | 'muy-buena'; words: number; items: CheckItem[]; tips: string[]; pii: { label: string; count: number }[] }

const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
const countWords = (s: string) => (s.trim().match(/\S+/g) ?? []).length;

/**
 * Puntúa de 0 a 10. Las piezas exigidas por el ejercicio (`require`) y las comprobaciones propias (`extra`)
 * pesan el doble; sin `require`, se valoran todas las piezas generales.
 */
export function checkPrompt(prompt: string, opts: CheckOptions = {}): CheckResult {
  const text = prompt.trim();
  const words = countWords(text);
  const required = new Set(opts.require ?? []);
  const items: CheckItem[] = CRITERIA.map((c) => ({ id: c.id, label: c.label, hint: c.hint, required: required.has(c.id), ok: c.re.some((r) => r.test(text)) }));
  const nt = norm(text);
  const extra: CheckItem[] = (opts.extra ?? []).map((e, i) => ({ id: `extra-${i}`, label: e.label, hint: e.hint ?? `Incluye: ${e.label.toLowerCase()}.`, required: true, ok: e.any.some((k) => nt.includes(norm(k))) }));
  const all = [...items, ...extra];
  const weightOf = (it: CheckItem) => (it.id.startsWith('extra-') ? 2 : (CRITERION[it.id as CriterionId].weight * (it.required ? 2 : 1)));
  const considered = required.size || extra.length ? all.filter((it) => it.required || it.id === 'tarea' || it.ok) : all;
  const max = considered.reduce((a, it) => a + weightOf(it), 0) || 1;
  const got = considered.filter((it) => it.ok).reduce((a, it) => a + weightOf(it), 0);
  let score = Math.round((got / max) * 10);
  // Una petición de pocas palabras casi nunca da a Claude lo que necesita.
  if (words < 8) score = Math.min(score, 3);
  else if (words < 15) score = Math.min(score, 6);
  if (!text) score = 0;
  const pii = anonymize(text).found.map((f) => ({ label: f.label, count: f.count }));
  const tips = [
    ...(pii.length ? [`Tu petición incluye datos personales (${pii.map((p) => p.label.toLowerCase()).join(', ')}). Quítalos o cámbialos por [DATO] antes de enviarla.`] : []),
    ...all.filter((it) => !it.ok && it.required).map((it) => it.hint),
    ...(words < 15 && text ? ['Es muy corta: añade una o dos frases de contexto.'] : []),
    ...all.filter((it) => !it.ok && !it.required && it.id !== 'preguntas').slice(0, 2).map((it) => it.hint),
  ].slice(0, 4);
  const level = score >= 9 ? 'muy-buena' : score >= 7 ? 'buena' : score >= 4 ? 'mejorable' : 'empezar';
  return { score, level, words, items: all, tips, pii };
}

export const LEVEL_LABEL: Record<CheckResult['level'], string> = {
  empezar: 'Para empezar',
  mejorable: 'Mejorable',
  buena: 'Buena petición',
  'muy-buena': 'Muy buena petición',
};

/** Monta una petición completa a partir de sus piezas (constructor de peticiones). */
export function buildPrompt(p: { rol?: string; contexto?: string; tarea: string; publico?: string; formato?: string; tono?: string; ejemplo?: string; limites?: string; preguntar?: boolean; fuentes?: boolean }): string {
  const line = (s?: string) => (s && s.trim() ? s.trim().replace(/\s+$/, '') : '');
  const end = (s: string) => (/[.!?:»"]$/.test(s) ? s : `${s}.`);
  const parts = [
    line(p.rol) && end(`Actúa como ${line(p.rol).replace(/^act[uú]a como\s*/i, '')}`),
    line(p.contexto) && end(line(p.contexto)),
    line(p.tarea) && end(line(p.tarea)),
    line(p.publico) && end(`Es para ${line(p.publico).replace(/^(es )?para\s*/i, '')}`),
    line(p.formato) && end(`Formato: ${line(p.formato)}`),
    line(p.tono) && end(`Tono: ${line(p.tono)}`),
    line(p.ejemplo) && `Un ejemplo de lo que busco: «${line(p.ejemplo)}».`,
    line(p.limites) && end(`Ten en cuenta: ${line(p.limites)}`),
    p.fuentes ? 'Si das datos, dime de dónde salen y avísame si no estás seguro de algo.' : '',
    p.preguntar ? 'Antes de empezar, hazme las preguntas que necesites para hacerlo bien.' : '',
  ].filter(Boolean);
  return parts.join('\n');
}
