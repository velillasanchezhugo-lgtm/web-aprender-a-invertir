---
title: Tus plantillas
description: Guarda tus mejores peticiones con huecos para reutilizarlas y escribe en los ajustes de Claude tus instrucciones para que no tengas que repetirlas.
level: basico
track: cla-pedir
order: 107
skills: [cla-plantillas]
terms: [plantilla-de-prompt, instrucciones-personales, proyecto-de-claude]
hook: "Cada lunes escribes a Claude casi la misma petición para preparar el menú de la semana y cada vez se te olvida algún detalle. ¿Hay una forma de no repetirte?"
takeaway: "Guarda lo que repites en dos sitios: tus plantillas con huecos, para tareas concretas, y las «Instrucciones para Claude», para lo que quieres en todas tus conversaciones."
scenario:
  kind: operacion
  label: Caso práctico
  title: El menú semanal de Fermín
  body: "Fermín pide cada semana un menú para su familia. Siempre tiene que recordar que su hija es celíaca, que cenan pronto y que el presupuesto es de unos 80 €. Guarda una plantilla con huecos y escribe en sus instrucciones de Claude que prefiere respuestas cortas. Ahora tarda un minuto."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-pe07-q1
    q: "Sonia quiere que Claude le responda siempre de tú, en español de España y sin introducciones largas. ¿Dónde lo pone?"
    options: ["Al principio de cada conversación", "En las «Instrucciones para Claude» de los ajustes, que se aplican a todas sus conversaciones", "En una plantilla que pega solo los lunes"]
    answer: 1
    explain: "Es una preferencia general, así que va en los ajustes de la cuenta. Repetirla en cada chat tienta porque funciona, pero se olvida. Las plantillas son mejores para tareas concretas que se repiten."
  - type: truefalse
    id: cla-pe07-q2
    q: "Lo que escribes en las «Instrucciones para Claude» de tu cuenta se tiene en cuenta en todas tus conversaciones, así que conviene no poner datos sensibles."
    answer: true
    explain: "Se aplican a todo. Pon cómo quieres que te responda y datos generales útiles (tu profesión, tu nivel), pero no tu DNI, cuentas ni datos de salud."
  - type: choice
    id: cla-pe07-q3
    q: "Iratxe prepara cada mes un informe para su comunidad de vecinos y necesita siempre el mismo contexto y los mismos documentos. ¿Qué le encaja mejor?"
    options: ["Ponerlo todo en sus instrucciones generales de la cuenta", "Un proyecto de Claude con sus propias instrucciones y los documentos de la comunidad", "Volver a explicarlo cada mes"]
    answer: 1
    explain: "Las instrucciones generales afectarían también a sus otros chats, que no tienen nada que ver. Un proyecto agrupa sus conversaciones con instrucciones y archivos que solo valen ahí."
tips:
  - "Marca los huecos siempre igual, por ejemplo entre corchetes: [TEMA], [PÚBLICO], [LONGITUD]."
  - "Cuando una respuesta te encante, pide: «Escríbeme la petición que debería usar la próxima vez para obtener esto a la primera»."
action:
  title: Crea tu primera plantilla
  steps:
    - "Elige la petición que más repites y sustituye lo que cambia por huecos entre corchetes."
    - "Guárdala en tu nota «Mi kit de Claude»."
    - "Abre los ajustes de Claude, busca las instrucciones para Claude y escribe dos o tres preferencias generales."
  check: He guardado una plantilla y he escrito mis instrucciones en los ajustes
practice:
  task: "Cada viernes preparas el cuadrante de turnos de tu tienda para la semana siguiente. Escribe una plantilla de petición con huecos entre corchetes para lo que cambia cada semana."
  require: [contexto, formato]
  extra:
    - label: "Huecos entre corchetes"
      any: ["["]
      hint: "Marca lo que cambia con huecos entre corchetes: [FECHA], [AUSENCIAS]…"
  sample: "Llevo una tienda de ropa con cinco dependientas. Prepara el cuadrante de turnos de la semana del [FECHA]. Abrimos de 10:00 a 21:00, de lunes a sábado. Estas personas tienen vacaciones o libran: [AUSENCIAS]. Nadie debe pasar de [HORAS] horas a la semana ni cerrar dos días seguidos. Formato: una tabla con los días en columnas y, debajo, un mensaje corto y cercano para el grupo del equipo."
deeper: null
tool: plantillas
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda, claude-planes]
---

## La idea

Si repites casi la misma petición cada semana, pierdes tiempo y olvidas detalles. Hay dos formas de guardarla:

**1. Plantillas.** Una **plantilla de prompt** es una petición que ya te funcionó, con huecos para lo que cambia:

> «Prepara el menú de la semana del [FECHA] para 4 personas. Una es celíaca. Cenamos antes de las 20:00. Presupuesto: unos 80 €. Aprovecha estos ingredientes que me sobran: [INGREDIENTES]. Formato: tabla por días y lista de la compra por secciones.»

Guárdalas a mano: en una nota del móvil o en «Mi kit de Claude». Sirven para tareas concretas.

**2. Instrucciones para toda tu cuenta.** En los ajustes de Claude hay un apartado llamado **«Instrucciones para Claude»**. Lo que escribas ahí se tiene en cuenta en **todas** tus conversaciones. Es el sitio para preferencias generales: cómo quieres que te hable, en qué trabajas, qué formato prefieres, qué evitar.

**Y un punto intermedio: los proyectos.** Un proyecto agrupa varias conversaciones con sus propias instrucciones y archivos, que solo valen dentro de él. Según el centro de ayuda, también están en el plan gratuito, con un número limitado.

Los nombres de estos ajustes cambian de vez en cuando. Si no los encuentras, búscalos en el centro de ayuda de Claude.

## En la práctica

Para escribir tus instrucciones generales, empieza con pocas líneas:

> Prueba: «Lee lo que te cuento sobre mí y redáctame unas instrucciones de menos de 100 palabras para pegar en los ajustes de Claude: vivo en Sevilla, trabajo en administración, prefiero respuestas cortas, de tú, en español de España, con listas cuando haya pasos, y que me avises cuando no estés seguro de un dato.»

Ajústalas, pégalas en los ajustes y comprueba el cambio en un chat nuevo.

## Error frecuente

Meter en las instrucciones generales algo que solo vale para una tarea. Acabará apareciendo en conversaciones que no tienen nada que ver: eso va en una plantilla o en un proyecto.
