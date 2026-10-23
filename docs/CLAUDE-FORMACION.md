# Formación Claude

Tercera formación de umotion Academy: uso y capacidades de Claude, el asistente de IA de Anthropic, para personas que no programan. Sigue el sistema común de `docs/ESTANDAR-FORMACIONES.pdf`. **umotion Academy no está afiliada a Anthropic**: el tono es informativo, nunca publicitario. La formación ChatGPT (`docs/CHATGPT-FORMACION.md`) tiene la misma estructura.

- Datos: `src/data/claude.json` (niveles, etapas, módulos, competencias, capacidades, textos y temario de los niveles 2 y 3).
- Sesiones del Nivel 1: `src/content/claude/` (colección `claude`). Glosario: `src/data/glossary-claude/<módulo>.json`.
- Rutas: `/es/claude/` y, debajo, `nivel-1/`, `nivel-2/`, `nivel-3/`, `modulos/<id>/`, `sesion/<id>/`, `examen/`, `glosario/` y `herramientas/`.
- Progreso: clave `academy-claude`. «Mi kit de Claude» se guarda en `claude-kit`; las prácticas, en `prompt-practice`. Las tres se sincronizan con la cuenta.

## Los tres niveles

| Nivel | Título | Contenido |
|---|---|---|
| 1 · gratis | Empezar con Claude | 50 sesiones de 5 min en 8 módulos, cada una con un ejercicio práctico evaluado |
| 2 · Plan Avanzado | Sacarle todo el partido | 23 clases: peticiones avanzadas, investigación, crear sin programar, automatizar, oficios y equipos (solo temario) |
| 3 · Curso Profesional | Implantar o desarrollar con Claude | Tronco común (modelos, riesgos, normativa, evaluación), dos itinerarios: Implantación y Desarrollo (API, herramientas, MCP, agentes, Claude Code), y un proyecto final (solo temario) |

## Nivel 1: orden

- **Etapa A. Camino Cero con Claude (8 sesiones):**
  - qué es;
  - dónde se usa;
  - la primera conversación;
  - cómo conversar;
  - cuándo fiarte;
  - tus datos;
  - archivos e imágenes;
  - «Mi kit de Claude».
- **Etapa B. Núcleo**, por orden de importancia:
  1. Pedir bien (7)
  2. Las funciones de Claude (8)
  3. Claude en el trabajo (7)
  4. Aprender con Claude (5)
  5. Conectar tus herramientas (5)
  6. Usarlo con cabeza (6)
- **Ampliación:** Un paso más (4): tareas largas y agentes, Claude Code sin miedo, automatizar la semana y tu flujo con Claude.

## Práctica evaluada en la web

Cada sesión tiene un paso «Practica» (campo `practice`): una situación real y la instrucción de escribir la petición que se le haría a Claude.

- **Evaluador local** (`src/lib/claude/prompt-check.ts`), sin red. Detecta en el texto las piezas de una buena petición:
  - tarea, contexto, para quién, formato, tono, ejemplos, límites, pedir fuentes y que pregunte antes.
  - Las piezas que exige el ejercicio pesan el doble.
  - Da una nota de 0 a 10 y consejos, y avisa si hay datos personales.
  - Es orientativo: mira señales en el texto, no el significado.
- **Opinión de Claude** (opcional): `api/prompt-coach.js`, con la misma activación que el tutor (`AI_TUTOR_ENABLED`, `ANTHROPIC_API_KEY`). Devuelve una respuesta estructurada con la nota, lo que está bien, qué mejorar y una versión mejorada.
- **Petición de ejemplo:** cada práctica trae una (`sample`), y todas sacan un 8 o más en el evaluador.

## Herramientas (`/es/claude/herramientas/`)

- **Evaluador de peticiones:** el mismo de las prácticas, libre.
- **Constructor de peticiones:** rellenas las piezas y monta la petición con su nota.
- **Plantillas y «Mi kit de Claude»:** 17 plantillas con huecos (`src/data/claude-plantillas.json`) y un kit personal.
- **Quitar datos personales:** cambia por etiquetas DNI y NIE (comprobando la letra), IBAN, tarjetas (con el algoritmo de Luhn), teléfonos y correos. Funciona sin conexión.

Pruebas: `tests/claude.test.ts`, `tests/prompt-coach.test.ts` y `tests/e2e/claude.mjs`.

## Estado y revisión

- **Borrador:** todo el contenido está elaborado con asistencia de IA (`status: revision-pendiente`).
- **Fuentes:** los datos del producto se comprobaron en octubre de 2026 en el centro de ayuda oficial (support.claude.com), claude.com y anthropic.com, y se citan como fuentes en cada sesión.
- **Sin cifras que caducan:** no hay precios ni límites de uso. Las funciones se describen por lo que hacen, sin rutas de menú exactas.
- **Revisión periódica:** antes de publicar, y luego cada trimestre, hay que revisar los nombres y la disponibilidad por plan de las funciones (memoria, estilos y habilidades, investigación, Claude en Chrome, tareas programadas, Claude Code), porque cambian a menudo.

## Siguientes pasos propuestos

1. Revisión humana del Nivel 1.
2. Activar la opinión con IA (necesita la clave de la API en Vercel) y medir su coste.
3. Muestras gratuitas de los niveles 2 y 3.
4. Hecho: formación ChatGPT con las mismas páginas, evaluador y herramientas.
