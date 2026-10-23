# Formación ChatGPT

Cuarta formación de umotion Academy. Enseña el uso y las capacidades de ChatGPT, el asistente de IA de OpenAI, a personas que no programan. Tiene la misma estructura que la formación Claude (`docs/CLAUDE-FORMACION.md`) y sigue el sistema común de `docs/ESTANDAR-FORMACIONES.pdf`.

**umotion Academy no está afiliada a OpenAI.** El tono es informativo, nunca publicitario, y no se compara ChatGPT con otros asistentes.

- **Datos:** `src/data/chatgpt.json`. Contiene niveles, etapas, módulos, competencias (prefijos `gpt-`, `gpt2-` y `gpt3-`), capacidades, textos y el temario de los niveles 2 y 3.
- **Sesiones del Nivel 1:** `src/content/chatgpt/` (colección `chatgpt`).
- **Glosario:** `src/data/glossary-chatgpt/<módulo>.json`.
- **Rutas:** `/es/chatgpt/` y, debajo:
  - `nivel-1/`, `nivel-2/`, `nivel-3/`
  - `modulos/<id>/`, `sesion/<id>/`
  - `examen/`, `glosario/`, `herramientas/`
- **Progreso:** clave `academy-chatgpt`. «Mi kit de ChatGPT» se guarda en `chatgpt-kit`; las prácticas, en `prompt-practice` (compartida con Claude). Todo se sincroniza con la cuenta.

## Los tres niveles

| Nivel | Título | Contenido |
|---|---|---|
| 1 · gratis | Empezar con ChatGPT | 50 sesiones de 5 min en 9 módulos, cada una con un ejercicio práctico evaluado |
| 2 · Plan Avanzado | Sacarle todo el partido | 23 clases en 7 módulos: peticiones avanzadas, proyectos y plugins, investigar, crear contenidos, conectar y automatizar, tu oficio y equipos (solo temario) |
| 3 · Curso Profesional | Implantar o desarrollar con ChatGPT | Tronco común (modelos, riesgos y normativa), dos itinerarios —Implantación y Desarrollo con la API de OpenAI— y un proyecto final (solo temario) |

## Nivel 1: orden

### Etapa A. Camino Cero con ChatGPT (8 sesiones)

1. Qué es.
2. Dónde se usa y los planes.
3. La primera conversación.
4. Conversar y abrir ramas.
5. Cuándo fiarte.
6. Tus datos.
7. Archivos e imágenes.
8. «Mi kit de ChatGPT».

### Etapa B. Núcleo, por orden de importancia

| Módulo | Sesiones | Temas |
|---|---|---|
| Pedir bien | 6 | la petición completa, ejemplos, formato, papel y público, tareas por pasos, instrucciones personalizadas |
| Las funciones de ChatGPT | 9 | búsqueda, investigación en profundidad, bloques de escritura, proyectos, memoria, modelos y razonamiento, voz y cámara, imágenes, archivos y datos |
| GPTs y plugins | 4 | usar asistentes a medida con cuidado y montar el tuyo con proyectos o plugins, porque los GPTs se están retirando |
| ChatGPT en el trabajo | 6 | correos, revisar textos, resumir documentos, hojas de cálculo, reuniones, ideas y decisiones |
| Aprender con ChatGPT | 4 | modo estudio, explicaciones a tu nivel, preparar un examen, idiomas |
| Conectar y automatizar | 4 | apps y plugins, ChatGPT Work, navegar con IA, tareas programadas |
| Usarlo con cabeza | 6 | verificar, datos del trabajo, adulación, imágenes y autoría, normas de uso, ley de IA |

### Ampliación: Un paso más (3 sesiones)

Codex sin miedo, automatizar la semana y tu flujo semanal con ChatGPT.

## Práctica evaluada en la web

La práctica funciona igual que en Claude.

- **Paso «Practica»:** está en todas las sesiones (campo `practice`).
- **Evaluador local:** `src/lib/claude/prompt-check.ts`, el mismo para las dos formaciones. Es orientativo: mira señales en el texto, no el significado.
- **Opinión con IA (opcional):** `api/prompt-coach.js`.
- **Peticiones de ejemplo:** todas sacan 8 o más.
- **Frases naturales:** durante la revisión se amplió el evaluador para reconocer frases que antes daban mal. Algunos ejemplos:
  - «No te daré…», «no te los inventes», «No quiero nada sobre…»
  - «Eres el asistente de…», «Somos…», «Me presento a…», «Dudo entre…», «nos mudamos…»
  - «dirigida a», «para ella», «para mandar…»
  - «Acórtalo a la mitad»
  - «de tú», «respuestas claras»
  - «si no lo encuentras, dímelo», «de qué cláusula sale»

  Todas tienen prueba en `tests/claude.test.ts`.

## Herramientas (`/es/chatgpt/herramientas/`)

Son las mismas páginas comunes que en Claude (`src/pages/es/[f]/herramientas/`, textos en `src/lib/chatgpt/tools.ts`):

- evaluador de peticiones;
- constructor de peticiones;
- plantillas y «Mi kit de ChatGPT»;
- quitar datos personales.

## Cómo se hizo

1. **Escritura:** varios agentes en paralelo, uno por módulo.
2. **Revisión cruzada:** cada módulo lo revisó un agente distinto del que lo escribió. Se comprobó la exactitud del producto en las fuentes de OpenAI, que no copiara casos de la formación Claude, que no se repitieran nombres, la posición de la respuesta correcta, las prácticas y la longitud.
3. **Revisión final:** dos revisores del conjunto comprobaron la coherencia entre módulos.

Las notas del equipo, con los datos confirmados y sus fuentes, se resumen abajo.

## Estado del producto que recoge el contenido (octubre de 2026)

- **Bloques de escritura y de código:** sustituyen a canvas desde finales de mayo de 2026.
- **ChatGPT Work:** sustituye al agente de ChatGPT desde el 9 de julio de 2026. El formulario seguro y «tomar el control» son del navegador en la nube.
- **ChatGPT Atlas:** dejó de funcionar el 9 de agosto de 2026. Sus funciones pasaron al navegador de la app de escritorio y a una extensión para Chrome.
- **Apps:** se instalan desde el directorio de plugins.
- **GPTs:** su retirada se anunció el 11 de septiembre de 2026. Las cuentas personales ya no pueden crearlos.
- **Plan Business:** es el antiguo Team.
- **Tareas programadas:** están en el plan gratis desde el 25 de agosto de 2026.
- **Imágenes generadas:** llevan C2PA y una marca de agua invisible.
- **Edad mínima:** 13 años, o la edad de consentimiento del país. Por debajo de 18, con permiso de madre, padre o tutor.
- **Reglamento ómnibus de IA:** el Reglamento (UE) 2026/1744 está en vigor desde el 27 de julio de 2026.

## Estado y revisión

- **Borrador:** todo el contenido está elaborado con asistencia de IA (`status: revision-pendiente`) y necesita revisión humana antes de publicarse.
- **Fuentes:** el centro de ayuda de OpenAI devuelve un error 403 a las descargas automáticas. Muchas comprobaciones se hicieron a través de resultados de búsqueda que citan help.openai.com, learn.chatgpt.com y openai.com. Lo que no se pudo confirmar se redactó en general, remitiendo al centro de ayuda.
- **Sin cifras que caducan:** no hay precios ni límites de uso.
- **Revisión periódica:** antes de publicar, y luego cada trimestre. ChatGPT cambia muy a menudo. Hay que mirar sobre todo:
  - los planes y su disponibilidad en la UE;
  - Work y el navegador;
  - los plugins;
  - la retirada de los GPTs;
  - la memoria;
  - los anuncios en el plan gratis;
  - la grabación de reuniones;
  - la voz con cámara.
