---
title: Tareas programadas
description: "Cómo dejar a ChatGPT recordatorios, resúmenes y avisos que se repiten solos, dónde se gestionan y por qué hay que revisar lo que te entregan."
level: basico
track: gpt-conectar
order: 604
skills: [gpt-automatizar]
terms: [tareas-programadas-chatgpt, apps-en-chatgpt]
hook: "Cada lunes buscas las mismas noticias de tu sector y cada mes se te olvida mirar las ayudas al alquiler. ¿Y si ChatGPT lo hiciera solo y te avisara?"
takeaway: "Una tarea programada es una petición que ChatGPT hace sola cuando eliges, una vez o cada cierto tiempo. Escríbela como un buen encargo, dale solo los permisos que necesita y revisa cada resultado."
scenario:
  kind: producto
  label: Caso práctico
  title: Las novedades de Rocío
  body: "Rocío tiene una autoescuela en Cáceres. Programa una tarea para cada lunes a primera hora: tres novedades de la semana sobre el examen de conducir, con enlace a la fuente. La segunda semana, una noticia era de hace dos años; añade «solo de los últimos siete días» y desde entonces llega bien."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-co04-q1
    q: "Iván quiere que ChatGPT le avise si abren la convocatoria de becas de su comunidad, pero no quiere un mensaje cada día. ¿Qué tarea crea?"
    options: ["Una tarea diaria que le resuma todas las noticias de becas", "Una tarea que vigile la convocatoria y le avise solo cuando haya un cambio importante", "Ninguna: las tareas solo sirven para recordatorios"]
    answer: 1
    explain: "Puedes pedirle que compruebe algo y te avise solo si hay novedades. El resumen diario tienta porque parece más completo, pero llena tu bandeja de mensajes sin interés."
  - type: choice
    id: gpt-co04-q2
    q: "Patricia tiene una academia y quiere una tarea que cada viernes revise su correo conectado y conteste a las familias que preguntan por plazas. ¿Qué le encarga?"
    options: ["Que conteste ella sola a todos, para ahorrar tiempo", "Que le prepare una lista de correos pendientes con un borrador de respuesta para cada uno, que Patricia revisa y envía", "Nada: una tarea no puede usar el correo"]
    answer: 1
    explain: "La tarea se ejecuta cuando Patricia no está delante, así que lo sensato es que solo prepare. Contestar sola tienta por cómodo, pero un error llegaría a una familia con su nombre y nadie lo vería a tiempo."
  - type: truefalse
    id: gpt-co04-q3
    q: "Como la tarea se repite sola, basta con revisar su resultado la primera vez."
    answer: false
    explain: "Cada resultado es una respuesta nueva y puede traer errores nuevos: una fecha antigua o un dato inventado. Tienta fiarse porque «ya funcionó», pero conviene echar un vistazo cada vez."
tips:
  - "Ponle a cada búsqueda un límite de fechas («de los últimos siete días») para que no te traiga noticias viejas."
  - "Si la tarea necesita los archivos de un proyecto, copia lo esencial en la propia petición: no puede leerlos."
action:
  title: Programa tu primera tarea
  steps:
    - "Elige algo que repites cada semana: un repaso de noticias, un recordatorio o una lista de pendientes."
    - "Pídeselo en el chat diciendo qué, cuándo y cómo, o créala en la página de tareas programadas."
    - "Revisa el primer resultado, ajusta la petición y guárdala en «Mi kit de ChatGPT»."
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
reviewed: 2026-10-23
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-planes]
---

## La idea

Una **tarea programada** es una petición que ChatGPT hace **sola**, en el momento que eliges, y te avisa del resultado. Sirve para:

- **Recordatorios:** «El día 1 de cada mes, recuérdame mandar la lectura del contador de agua».
- **Resúmenes que se repiten:** «Cada viernes, las noticias de la semana sobre el alquiler en Madrid».
- **Vigilancias:** «Comprueba si sale la convocatoria y avísame solo si hay novedades».

Se crean **pidiéndolo en el chat** («cada lunes a las 8:00, …») o desde la **página de tareas programadas** de la barra lateral (en inglés, «Scheduled»). Ahí las **pausas, editas o borras**.

Están en el plan gratis y en los de pago; en el gratis, con menos frecuencia y a horas aproximadas. Algunos planes de pago permiten también tareas que se lanzan cuando pasa algo en una app, como un correo nuevo. Detalles, en la página de planes.

Dos avisos:

- Una tarea puede usar **tus apps conectadas**, como el correo, y trabajará **sin que estés delante**. Dale solo lo que necesita y que **prepare**, no que envíe.
- Si la creas **dentro de un proyecto con archivos**, no podrá leer esos archivos.

Y lo más importante: **cada resultado se revisa.** Es una respuesta nueva y puede traer una fecha vieja o un dato equivocado.

## En la práctica

Escribe la tarea como un buen encargo: **qué** quieres, **cuándo** se repite, **cómo** lo quieres y **de dónde** deben salir los datos.

> Prueba: «Cada domingo a las 19:00, proponme cinco cenas sencillas para la semana, para dos personas, de menos de 30 minutos y con verduras de temporada. Dámelas en una lista con la compra agrupada por secciones del supermercado. Dime qué verduras son de temporada este mes.»

Tras el primer resultado, **afina**: añade un límite de fechas, quita lo que sobra o cambia la hora. Los datos importantes (plazos, importes), compruébalos en la fuente.

## Error frecuente

Programar muchas tareas de golpe y dejar de leerlas. Empieza por una que de verdad uses y añade otra solo cuando esa funcione.
