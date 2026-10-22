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
    re: [w('\\b(escribe|redacta|resume|res[uú]meme|explica|expl[ií]came|crea|haz|hazme|prepara|prep[aá]rame|analiza|traduce|tradúceme|revisa|corrige|dame|dime|prop[oó]n|prop[oó]nme|ayúdame a|ay[uú]dame con|genera|compara|lista|organiza|sugiere|planifica|calcula|clasifica|extrae|reescribe|mejora|convierte|adapta|elabora|diseña|ordena|identifica|evalúa|valora)\\b'),
      // Verbos con pronombre pegado: «compáralas», «resúmelo», «explícamelo»…
      w('\\b(compár|resúm|explíc|revís|corríg|tradúc|escríb|redáct|prepár|analíz|organíz|ordén|cré|clasifíc|reescríb|mejór|conviért|adápt|elabór|diséñ|identifíc|calcúl|planifíc|sugiér|propón|genér|enséñ|díg|dí|dá|ház|ayúd|búsc|léel|lée)[a-záéíóúñ]*(me|te|lo|la|los|las|le|les|nos)\\b')] },
  { id: 'contexto', label: 'Contexto', weight: 2, hint: 'Cuenta quién eres o la situación: «Soy profesora de primaria…», «Tengo una tienda…».',
    re: [w('\\b(soy|trabajo (en|como|de)|tengo|tenemos|estoy|estamos|mi (empresa|negocio|tienda|jefe|cliente|clase|equipo|hijo|hija)|nuestra|nuestro|la situaci[oó]n|el contexto|se trata de|llevo|acabo de|he recibido|me han)\\b')] },
  { id: 'publico', label: 'Para quién o para qué', weight: 2, hint: 'Di quién lo va a leer o para qué lo quieres: «para mis clientes», «para presentarlo el lunes».',
    re: [w('\\bpara (un|una|mi|mis|el|la|los|las|que|presentar|enviar|usar|publicar|leer|compartir|entender|preparar|explicar|alguien|personas|ni[nñ]os|clientes|alumnos|familias|vecinos|mi jefe)\\b'), w('\\b(dirigido a|lo va a leer|lo leer[aá]n?|lector|destinatario|p[uú]blico|audiencia)\\b')] },
  { id: 'formato', label: 'Formato', weight: 2, hint: 'Pide la forma: «en una tabla», «en 5 puntos», «menos de 150 palabras», «en un correo».',
    re: [w('\\b(tabla|lista|vi[nñ]etas|puntos|p[aá]rrafos?|palabras|l[ií]neas|frases|esquema|columnas|apartados|t[ií]tulos|formato|resumen de|m[aá]ximo|como m[aá]ximo|en un correo|en un mensaje|en un whatsapp|paso a paso|una p[aá]gina|diapositivas|en \\d+)\\b')] },
  { id: 'tono', label: 'Tono', weight: 1, hint: 'Indica el tono: «cercano», «formal», «directo pero amable», «sencillo».',
    re: [w('\\b(tono|formal|informal|cercano|cercana|amable|educado|educada|directo|directa|profesional|sencillo|sencilla|claro|clara|firme|neutral|divertido|serio|respetuoso|t[eé]cnico|coloquial|cordial)\\b')] },
  { id: 'ejemplos', label: 'Un ejemplo', weight: 1, hint: 'Si tienes uno, muestra cómo lo quieres: «Por ejemplo: …», «Algo parecido a esto: …».',
    re: [w('\\b(por ejemplo|ejemplo|como este|como esta|parecido a|al estilo de|algo as[ií]|as[ií]:)'), /[«"“][^»"”]{12,}[»"”]/] },
  { id: 'limites', label: 'Límites', weight: 1, hint: 'Di lo que no quieres: «sin tecnicismos», «no inventes datos», «evita…».',
    re: [w('\\b(sin |no (me )?(uses|incluyas|inventes|pongas|menciones|des|digas|hagas|escribas|a[nñ]adas|cambies|repitas|env[ií]es|borres|toques)|evita|solo |s[oó]lamente|nada de|que no)')] },
  { id: 'verificar', label: 'Pedir fuentes o avisos', weight: 1, hint: 'Pide que diga si duda o de dónde saca los datos: «cita la fuente», «dime si no estás seguro».',
    re: [w('\\b(fuentes?|cita|citas|referencias|enlaces|si no (lo )?sabes|si no est[aá]s seguro|dime si|ind[ií]came si|marca lo que|qu[eé] (dudas|datos) )')] },
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
