/**
 * Analizador guiado de noticias (sin IA, funciona sin conexión). Puro, con pruebas en tests/news.test.ts.
 * Separa frases con datos de frases con opiniones o previsiones y detecta reclamos típicos.
 */
export interface NewsAnalysis {
  facts: string[];      // frases con cifras, fechas o hechos atribuidos
  opinions: string[];   // previsiones, valoraciones, condicionales
  alarms: string[];     // palabras de pánico o euforia
  topics: { id: string; label: string; session: string }[];
}

const OPINION = /\b(podr[íi]a[n]?|se espera|esperan?|prev[ée]n?|previsi[óo]n|estima[n]?|cree[n]?|considera[n]?|opina[n]?|seg[úu]n (los )?(analistas|expertos)|expertos?|analistas?|deber[íi]a[n]?|probablemente|posiblemente|apunta[n]? a|tendr[áa]|ser[áa]|subir[áa]|bajar[áa]|caer[áa]|habr[áa]|recomienda[n]?|objetivo de precio|potencial)\b/i;
const NUMBER = /\d/;
const ALARM = /\b(desplom\w*|hundimiento|hunde\w*|p[áa]nico|crac\w*|colapso|sangr[íi]a|catastr\w*|hist[óo]ric\w*|r[ée]cord\w*|disparan?|dispara\w*|euforia|imparable|burbuja|nunca visto|se dispara|vuela|ca[íi]da libre|lunes negro|martes negro)\b/gi;
const TOPICS: { re: RegExp; id: string; label: string; session: string }[] = [
  { re: /\b(BCE|banco central|tipos? de inter[ée]s|eur[íi]bor|Fed|Reserva Federal|pol[íi]tica monetaria)\b/i, id: 'tipos', label: 'Bancos centrales y tipos', session: 'no-02-el-bce-y-los-tipos' },
  { re: /\b(IPC|inflaci[óo]n|precios|PIB|paro|empleo|EPA|recesi[óo]n|crecimiento econ[óo]mico)\b/i, id: 'macro', label: 'Datos económicos', session: 'no-03-ipc-pib-paro' },
  { re: /\b(resultados|beneficio|ventas|ingresos|m[áa]rgen(es)?|consenso|previsiones|trimestre|semestre|guidance)\b/i, id: 'resultados', label: 'Resultados empresariales', session: 'no-04-buenos-resultados-y-cae' },
  { re: /\b(dividendo|ampliaci[óo]n de capital|recompra|split|contrasplit|OPA|fusi[óo]n|adquisici[óo]n)\b/i, id: 'corporativo', label: 'Noticias de empresa', session: 'no-05-noticias-de-empresa' },
  { re: /\b(Ibex|S&P|Nasdaq|Dow Jones|Euro Stoxx|bolsa|[íi]ndice|puntos)\b/i, id: 'mercado', label: 'Movimientos del mercado', session: 'no-06-titulares-de-panico-y-euforia' },
  { re: /\b(bitcoin|cripto\w*|token|NFT|stablecoin)\b/i, id: 'cripto', label: 'Criptoactivos', session: 'pr-09-cripto-y-productos-complejos' },
];

export function sentences(text: string): string[] {
  return text.replace(/\s+/g, ' ').split(/(?<=[.!?…])\s+(?=[A-ZÁÉÍÓÚÑ¿¡«"0-9])/).map((s) => s.trim()).filter((s) => s.length > 3);
}

export function analyzeNews(text: string): NewsAnalysis {
  const facts: string[] = [], opinions: string[] = [];
  for (const s of sentences(text)) {
    if (OPINION.test(s)) opinions.push(s);
    else if (NUMBER.test(s) || /\b(ha|han|anunci[óo]|aprob[óo]|public[óo]|registr[óo]|subi[óo]|baj[óo]|cay[óo]|cerr[óo])\b/i.test(s)) facts.push(s);
  }
  const alarms = [...new Set((text.match(ALARM) ?? []).map((w) => w.toLowerCase()))];
  const topics = TOPICS.filter((t) => t.re.test(text)).map(({ id, label, session }) => ({ id, label, session }));
  return { facts, opinions, alarms, topics };
}

/** El filtro «¿me afecta?»: tres preguntas. Basta un sí en las dos primeras para revisar el plan con calma. */
export interface FilterAnswers { changesGoal: boolean; changesReason: boolean; newAndReliable: boolean }
export function filterVerdict(a: FilterAnswers): { level: 'revisar' | 'informarse' | 'ruido'; text: string } {
  if (a.changesGoal || a.changesReason) return { level: 'revisar', text: 'Puede afectar a tu plan. Revísalo con calma (no hoy en caliente): relee tu objetivo, tu horizonte y por qué tienes cada producto, y decide si cambia algo.' };
  if (a.newAndReliable) return { level: 'informarse', text: 'Es información nueva y fiable, pero no cambia tu objetivo ni el motivo de tu inversión. Entiéndela y sigue con tu plan.' };
  return { level: 'ruido', text: 'Es ruido para tu plan a largo plazo. No hace falta hacer nada.' };
}
