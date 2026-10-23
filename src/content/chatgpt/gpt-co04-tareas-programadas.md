---
title: Tareas programadas
description: "Cómo dejar a ChatGPT recordatorios, resúmenes y avisos que se repiten solos, dónde se gestionan y por qué hay que revisar lo que te entregan."
level: basico
track: gpt-conectar
order: 604
skills: [gpt-automatizar]
terms: [tareas-programadas-chatgpt, apps-en-chatgpt]
hook: "Cada lunes buscas las mismas noticias de tu sector y cada mes se te olvida revisar las ayudas al alquiler. ¿Y si ChatGPT lo hiciera solo y te avisara?"
takeaway: "Una tarea programada es una petición que ChatGPT hace sola en el momento que eliges, una vez o cada cierto tiempo. Escríbela tan completa como un encargo normal, empieza por una y revisa lo que te entrega."
scenario:
  kind: producto
  label: Caso práctico
  title: Las noticias de Carmen
  body: "Carmen tiene una tienda de bicicletas en Logroño. Programa una tarea para cada lunes a primera hora: tres noticias de la semana sobre ayudas a la movilidad en La Rioja, con enlace. La segunda semana, una noticia era de 2024; añade a la tarea «solo de los últimos siete días» y desde entonces llega bien."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-co04-q1
    q: "Hugo quiere que ChatGPT le avise si abren la convocatoria de becas de su comunidad, pero no quiere recibir un mensaje cada día. ¿Qué tarea crea?"
    options: ["Una tarea diaria que le resuma todas las noticias de becas", "Una tarea que vigile la convocatoria y le avise solo cuando haya un cambio importante", "Ninguna: las tareas solo sirven para recordatorios"]
    answer: 1
    explain: "Además de recordatorios y resúmenes, puedes pedirle que compruebe algo y te avise solo si hay novedades. El resumen diario tienta porque parece más completo, pero llena tu bandeja de mensajes sin interés."
  - type: choice
    id: gpt-co04-q2
    q: "Patricia crea una tarea dentro de un proyecto en el que tiene subidos sus apuntes en PDF. ¿Qué pasará?"
    options: ["La tarea usará los PDF del proyecto sin problema", "La tarea no podrá leer los archivos del proyecto: tendrá que contarle en la petición lo que necesita", "La tarea borrará el proyecto al terminar"]
    answer: 1
    explain: "El centro de ayuda avisa de que una tarea creada en un proyecto con archivos no puede acceder a esos archivos. Es fácil suponer que lo ve todo porque está en el mismo sitio, pero no es así."
  - type: truefalse
    id: gpt-co04-q3
    q: "Como la tarea se repite sola, basta con revisar su resultado la primera vez."
    answer: false
    explain: "Cada resultado es una respuesta nueva y puede traer errores nuevos: una fecha antigua, una fuente dudosa, un dato inventado. Tienta fiarse porque «ya funcionó», pero conviene echar un vistazo cada vez."
tips:
  - "Ponle a cada tarea un límite de tiempo en la búsqueda («de los últimos siete días») para que no te traiga noticias viejas."
  - "Si una tarea usa una app, como tu correo, recuerda que se ejecutará cuando tú no estés mirando: dale solo permiso para leer."
  - "En el plan gratis las tareas se repiten con menos frecuencia y a horas aproximadas; consulta los detalles de tu plan en la página de planes."
action:
  title: Programa tu primera tarea
  steps:
    - "Elige algo que repites cada semana: un repaso de noticias, un recordatorio o una lista de pendientes."
    - "Pídeselo a ChatGPT diciendo qué quieres, cuándo y cómo, o créala desde la página de tareas programadas de la barra lateral."
    - "Cuando llegue el primer resultado, revísalo y ajusta la petición."
    - "Guarda la petición final en «Mi kit de ChatGPT»."
  check: He programado una tarea y he revisado su primer resultado
practice:
  task: "Eres administrativo en una gestoría y cada lunes repasas las novedades fiscales de la semana. Escribe la petición de una tarea programada que te lo prepare."
  require: [contexto, formato, verificar]
  extra:
    - label: Decir cuándo se repite
      any: ["cada lunes", "cada semana", "todos los lunes", "cada dia", "cada mes", "semanal", "todas las semanas", "cada viernes", "a las"]
      hint: "Di cuándo: «Cada lunes a las 8:00»."
  sample: "Trabajo en una gestoría de Valencia. Cada lunes a las 8:00, busca las novedades fiscales de los últimos siete días para autónomos y pequeñas empresas en España: cambios de plazos, modelos de la Agencia Tributaria y ayudas nuevas. Dámelas en una lista de cinco puntos como máximo, con el enlace a la fuente oficial de cada una. Si no hay novedades, dilo en una línea y no rellenes con noticias antiguas."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-planes]
---

## La idea

Una **tarea programada** es una petición que ChatGPT hace **sola**, en el momento que eliges, y te avisa del resultado. Sirve para tres cosas:

- **Recordatorios:** «El día 1 de cada mes, recuérdame mandar la lectura del contador de agua».
- **Resúmenes que se repiten:** «Cada viernes, las noticias de la semana sobre el alquiler en Madrid».
- **Vigilancias:** «Comprueba si sale la convocatoria y avísame solo si hay novedades».

Se crean de dos formas: **pidiéndolo en el chat** («cada lunes a las 8:00, …») o desde la **página de tareas programadas** de la barra lateral (en inglés, «Scheduled»), en la web, el móvil y el escritorio. Desde esa página las **pausas, editas o borras**.

Están en el plan gratis y en los de pago. En el gratis, con menos frecuencia y a horas aproximadas; los planes de pago permiten más tareas activas y, con ChatGPT Work, tareas que se lanzan cuando pasa algo en una app (por ejemplo, un correo nuevo).

Dos cosas que conviene saber:

- Una tarea puede usar **tus apps conectadas**, como el correo, si están disponibles en tu cuenta. Trabajará **sin que estés delante**: dale solo lo que necesita.
- Si la creas **dentro de un proyecto con archivos**, no podrá leer esos archivos.

Lo más importante: **el resultado se revisa siempre.** Cada vez es una respuesta nueva y puede traer una fecha vieja o un dato equivocado.

## En la práctica

Escribe la tarea como un buen encargo: **qué** quieres, **cuándo** se repite, **cómo** lo quieres y **de dónde** deben salir los datos.

> Prueba: «Cada domingo a las 19:00, proponme cinco cenas sencillas para la semana, para dos personas, de menos de 30 minutos y con verduras de temporada. Dámelas en una lista con la compra agrupada por secciones del supermercado. Dime qué verduras son de temporada este mes.»

Después del primer resultado, **afina**: añade un límite de fechas, quita lo que sobra o cambia la hora. Si un resultado trae datos importantes (fechas, plazos, importes), compruébalos en la fuente. Y borra las tareas que ya no lees.

## Error frecuente

Programar muchas tareas de golpe y dejar de leerlas. Empieza por una que de verdad uses y añade otra solo cuando esa funcione.
