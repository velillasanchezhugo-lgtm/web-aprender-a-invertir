# Personalización y tutor con IA

umotion Academy personaliza el aprendizaje en dos capas:

1. **Motor adaptativo** (siempre activo, gratuito, en el navegador). Decide qué estudia cada persona y en qué orden.
2. **Tutor conversacional con Claude** (opcional, desactivado por defecto). Responde dudas, explica de otra forma lo que se ha fallado y ayuda a analizar noticias.

## 1. Motor adaptativo (`src/lib/adaptive.ts`)

| Pieza | Qué hace |
|---|---|
| Mapa de competencias | 48 competencias en 9 áreas (`src/data/skills.json`), derivadas del análisis de cursos (`docs/ANALISIS-CURSOS.md`). Cada sesión declara las que enseña; cada pregunta puede declarar las que mide. |
| Modelo del alumno | Probabilidad de que la persona domine cada competencia. Se actualiza con cada respuesta (sesiones, repaso, exámenes) mediante trazado bayesiano del conocimiento (BKT): tiene en cuenta el acierto por azar (50 % en verdadero/falso, 1/n en opción múltiple, 10 % en estimaciones) y el despiste (10 %). |
| Perfil | Objetivo, experiencia (empiezo de cero / sé algo / ya invierto) e intereses (módulos). La experiencia fija el punto de partida antes de responder nada. |
| Diagnóstico adaptativo | Hasta 10 preguntas. Cada una se elige del área menos explorada y, dentro de ella, de la competencia con más incertidumbre. «No lo sé» cuenta como fallo, sin penalizar más. |
| Recomendador | Puntúa cada sesión disponible: lo que falta por dominar (peso mayor), interés, objetivo, prioridad pedagógica (primero la base, después Invertir ya) y continuidad del módulo. Los prerrequisitos se dan por cumplidos si ya se dominan sus competencias. Lo dominado pasa al final como repaso. Siempre devuelve los **motivos**. |
| Refuerzo | Si una competencia se falla varias veces después de estudiarla, se propone repetir la sesión que la enseña. |
| Ruta personal | Aplica el recomendador de forma repetida para obtener el orden completo; se reparte en el calendario elegido y se recalcula en «Mi plan» con cada respuesta. |

Todo se guarda en `localStorage` (`uacademy:academy`: `profile`, `model`, `diagnostic`). No se usan datos financieros personales. Las pruebas están en `tests/adaptive.test.ts`.

## 2. Tutor (`/es/tutor/`)

### Modo guiado (por defecto, sin conexión)

- **Pregunta una duda**: busca en sesiones, lecturas y glosario y devuelve lo más relevante.
- **Analiza una noticia**: separa frases con datos de opiniones y previsiones, señala palabras alarmistas, enlaza la sesión que explica el tema y aplica el filtro «¿Me afecta?» (`src/lib/news.ts`, con pruebas).

### Modo IA (opcional)

La página llama a la función `api/tutor.js` (Vercel), que llama a la API de Claude con el SDK oficial `@anthropic-ai/sdk`.

**Activar** (en la configuración del proyecto en Vercel):

| Variable | Valor |
|---|---|
| `PUBLIC_AI_TUTOR` | `true` (muestra el modo IA en la web; requiere volver a compilar) |
| `AI_TUTOR_ENABLED` | `true` (activa la función del servidor) |
| `ANTHROPIC_API_KEY` | Clave de la API de Anthropic (nunca en el repositorio) |
| `AI_TUTOR_MODEL` | Opcional. Por defecto `claude-opus-5-5` |
| `AI_TUTOR_MAX_PER_HOUR` | Opcional. Preguntas por IP y hora en cada instancia (por defecto 30) |

Si la función no está activa o falla, la página pasa sola al modo guiado.

**Qué se envía**: el texto de la persona, el historial reciente de la conversación (hasta 8 turnos), la pregunta de la sesión si viene de un fallo y un resumen de su nivel calculado en el navegador («Domina: …; le cuesta: …»). No se envían nombre, correo ni datos financieros, y no se guardan las conversaciones.

**Límites del tutor** (en el prompt de sistema, `api/_tutor-core.js`): educación general y nunca asesoramiento personalizado; no recomienda productos concretos ni predice precios; trata el contexto que llega del navegador como datos, no como instrucciones; remite a la AEAT o la CNMV para cifras legales; señala fraudes; enlaza solo sesiones reales del catálogo (`api/_catalog.json`, que se genera en cada compilación).

**Configuración de la llamada**: esfuerzo bajo (`effort: low`, respuestas de chat cortas), prompt de sistema cacheado (`cache_control`) y respaldo automático del servidor si el modelo rechaza una petición (`fallbacks: "default"`).

**Coste**: depende del modelo y del uso. Con el modelo por defecto (`claude-opus-5-5`: 4 $ por millón de tokens de entrada y 20 $ por millón de salida, con la parte cacheada del prompt mucho más barata), una respuesta típica (unos 3.000 tokens de entrada, la mayoría cacheados, y 300 de salida) cuesta del orden de un céntimo. Para un sitio gratuito con publicidad conviene medir el uso real y valorar un modelo más barato con `AI_TUTOR_MODEL` (por ejemplo `claude-haiku-5-5`), fijar un límite de gasto en la consola de Anthropic y un límite de peticiones en el borde (Vercel Firewall o similar), porque el límite por IP de la función es solo orientativo.

### Antes de activarlo en producción

- Revisión jurídica: encaje con la normativa de servicios de inversión (información general, no recomendación), política de privacidad (encargado del tratamiento, transferencias internacionales) y aviso visible en la página (ya incluido).
- Pruebas con preguntas reales, incluidas peticiones de recomendaciones concretas, para comprobar que el tutor mantiene los límites.

## 3. Corrector de peticiones (`/api/prompt-coach`)

Lo usan las formaciones Claude y ChatGPT: en el paso «Practica» de las sesiones y en `/es/claude/herramientas/evaluador-de-peticiones/`, el alumno escribe un prompt. Siempre se evalúa primero en el navegador con `src/lib/claude/prompt-check.ts` (sin red). Si `AI_TUTOR_ENABLED=true` y hay `ANTHROPIC_API_KEY`, aparece además el botón «Opinión con IA», que envía la petición, la tarea y los criterios a `api/prompt-coach.js`. La respuesta es estructurada (nota, lo que está bien, qué mejorar y una versión mejorada). Límite por IP: `AI_COACH_MAX_PER_HOUR` (20 por defecto). Lógica pura y pruebas: `api/_prompt-coach-core.js` y `tests/prompt-coach.test.ts`.
