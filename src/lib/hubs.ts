/**
 * Las formaciones vistas como academia: su pantalla de inicio, su menú de cabecera y a qué formación pertenece
 * cada página. Inversión conserva sus rutas de siempre (/es/niveles/, /es/sesion/…) y su inicio está en /es/inversion/.
 */
export type HubId = 'inversion' | 'emprendimiento' | 'claude' | 'chatgpt';
export interface NavLink { href: string; label: string }
export interface Hub { id: HubId; title: string; href: string; cls: string; text: string; nav: NavLink[]; cta: NavLink }

export const HUBS: Hub[] = [
  {
    id: 'inversion', title: 'Inversión', href: '/es/inversion/', cls: 'p-inv', text: 'Ordena tu dinero e invierte por tu cuenta, desde cero.',
    nav: [{ href: '/es/mi-plan/', label: 'Mi plan' }, { href: '/es/modulos/', label: 'Módulos' }, { href: '/es/herramientas/', label: 'Herramientas' }, { href: '/es/brokers/', label: 'Brókeres' }, { href: '/es/glosario/', label: 'Glosario' }],
    cta: { href: '/es/empezar/', label: 'Empieza gratis' },
  },
  {
    id: 'emprendimiento', title: 'Emprendimiento', href: '/es/emprendimiento/', cls: 'p-em', text: 'Monta tu negocio: trámites, impuestos, cuotas y clientes.',
    nav: [{ href: '/es/emprendimiento/nivel-1/', label: 'Formación' }, { href: '/es/emprendimiento/glosario/', label: 'Glosario' }, { href: '/es/emprendimiento/examen/', label: 'Examen' }],
    cta: { href: '/es/emprendimiento/nivel-1/', label: 'Empieza gratis' },
  },
  {
    id: 'claude', title: 'Claude', href: '/es/claude/', cls: 'p-cla', text: 'Aprende a usar la inteligencia artificial de Claude, sin programar.',
    nav: [{ href: '/es/claude/nivel-1/', label: 'Formación' }, { href: '/es/claude/herramientas/', label: 'Herramientas' }, { href: '/es/claude/glosario/', label: 'Glosario' }, { href: '/es/claude/examen/', label: 'Examen' }],
    cta: { href: '/es/claude/nivel-1/', label: 'Empieza gratis' },
  },
  {
    id: 'chatgpt', title: 'ChatGPT', href: '/es/chatgpt/', cls: 'p-gpt', text: 'Aprende a usar ChatGPT desde cero: pedir bien, sus funciones y más.',
    nav: [{ href: '/es/chatgpt/nivel-1/', label: 'Formación' }, { href: '/es/chatgpt/herramientas/', label: 'Herramientas' }, { href: '/es/chatgpt/glosario/', label: 'Glosario' }, { href: '/es/chatgpt/examen/', label: 'Examen' }],
    cta: { href: '/es/chatgpt/nivel-1/', label: 'Empieza gratis' },
  },
];
export const hubById = Object.fromEntries(HUBS.map((h) => [h.id, h])) as Record<HubId, Hub>;

/** Páginas de Inversión que no cuelgan de /es/inversion/ (rutas anteriores a la academia general). */
const INVERSION_PATHS = ['inversion', 'niveles', 'nivel-1', 'nivel-2', 'nivel-3', 'modulos', 'sesion', 'herramientas', 'brokers', 'glosario', 'estrategias', 'inversores', 'lecciones', 'biblioteca', 'temas', 'mi-plan', 'repaso', 'tutor', 'empezar', 'camino-cero', 'examen', 'test', 'progreso', 'plan-en-una-pagina', 'insignia', 'empieza-desde-cero', 'clases'];

/** Formación a la que pertenece una ruta, o null si es una página general de la academia (portada, cuenta, legales…). */
export function hubOf(path: string): HubId | null {
  const seg = path.split('/')[2] ?? '';
  const other = HUBS.find((h) => h.id !== 'inversion' && h.id === seg);
  if (other) return other.id;
  return INVERSION_PATHS.includes(seg) ? 'inversion' : null;
}
