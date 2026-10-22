/** Herramientas de la formación Claude (páginas en src/pages/es/claude/herramientas/). Todas funcionan en el navegador. */
export const CLAUDE_TOOLS: Record<string, { title: string; blurb: string }> = {
  'evaluador-de-peticiones': { title: 'Evaluador de peticiones', blurb: 'Escribe un prompt y mira qué piezas tiene y cuáles le faltan, con una nota del 0 al 10.' },
  'constructor-de-peticiones': { title: 'Constructor de peticiones', blurb: 'Rellena las piezas (contexto, tarea, público, formato…) y obtén una petición completa para copiar.' },
  plantillas: { title: 'Plantillas y «Mi kit de Claude»', blurb: 'Peticiones listas para adaptar a tu caso y un kit donde guardar las tuyas.' },
  anonimizador: { title: 'Quita datos personales', blurb: 'Sustituye DNI, IBAN, teléfonos, correos y tarjetas por etiquetas antes de pegar un texto en una IA.' },
};
export const toolHref = (id: string) => `/es/claude/herramientas/${id}/`;
