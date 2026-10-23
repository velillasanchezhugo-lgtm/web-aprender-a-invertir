---
title: Que pregunte, que critique y que no tengas que repetirte
description: "Pide a ChatGPT que te pregunte antes de responder y que critique en vez de darte la razón, y guarda tus preferencias en las instrucciones personalizadas."
level: basico
track: gpt-pedir
order: 106
skills: [gpt-iterar, gpt-instrucciones]
terms: [instrucciones-personalizadas, adulacion, personalidad-de-chatgpt]
hook: "Pides a ChatGPT un plan para volver a correr y te propone entrenar cinco días a la semana. Tú solo tienes dos tardes libres, pero no se lo habías dicho. ¿Cómo haces que pregunte lo que necesita?"
takeaway: "Pide «hazme preguntas antes de responder» y «dime los fallos». Y lo que repites en cada chat, escríbelo una vez en las instrucciones personalizadas."
scenario:
  kind: operacion
  label: Caso práctico
  title: El plan de Leire
  body: "Leire quiere volver a correr tras dos años parada. Antes del plan, pide: «Hazme hasta cinco preguntas». ChatGPT le pregunta por sus días libres y su objetivo, y el plan encaja. Como siempre pide lo mismo (respuestas cortas, que le diga si algo no cuadra), lo escribe una vez en sus instrucciones personalizadas."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-pe06-q1
    q: "Fabián pide ayuda para un viaje por Portugal y ChatGPT le hace seis preguntas. Solo sabe contestar dos: el resto aún no lo ha decidido. ¿Qué hace?"
    options: ["Se inventa las respuestas que no sabe para que ChatGPT pueda seguir", "Lo deja: si no sabe contestarlo todo, no merece la pena", "Contesta las dos que sabe y pide que, en lo demás, le dé opciones y marque lo que supone"]
    answer: 2
    explain: "Las preguntas sirven para afinar, no son un examen: lo que no sabes también es información. Inventar respuestas tienta para salir del paso, pero el plan se construirá sobre datos falsos."
  - type: choice
    id: gpt-pe06-q2
    q: "Octavio tiene en sus instrucciones personalizadas «respuestas cortas», pero hoy necesita un informe largo y detallado. ¿Qué hace?"
    options: ["Se lo dice en ese chat: «Hoy necesito una respuesta larga y detallada»", "Borra sus instrucciones y las escribe otra vez mañana", "Lo deja así: las instrucciones no se pueden saltar"]
    answer: 0
    explain: "Lo que pides en el chat suele mandar sobre la preferencia general. Borrarlas tienta porque parece lo seguro, pero es trabajo de más. Si un día no quieres ninguna, se pueden desactivar en la personalización."
  - type: choice
    id: gpt-pe06-q3
    q: "Elena repite en casi todos sus chats «soy profesora de secundaria, respuestas cortas y sin emojis». ¿Qué le conviene?"
    options: ["Seguir escribiéndolo en cada chat", "Ponerlo en las instrucciones personalizadas, sin datos que no hagan falta", "Añadir su nombre, su instituto y su teléfono para que la conozca mejor"]
    answer: 1
    explain: "Lo que vale para casi todo va en las instrucciones. Dar más datos tienta para «personalizar», pero su nombre o su teléfono no mejoran las respuestas."
tips:
  - "Si cambias de trabajo o de estudios, actualiza tus instrucciones."
  - "Las instrucciones cambian cómo responde, no lo que sabe: «no te equivoques nunca» no evita errores. Sí ayuda «avísame si no estás seguro»."
action:
  title: Escribe tus instrucciones personalizadas
  steps:
    - "Abre la personalización en la configuración y busca las instrucciones personalizadas."
    - "Escribe tres o cuatro líneas: a qué te dedicas, cómo quieres las respuestas y que te avise si duda o ve un fallo."
    - "Pruébalo en un chat nuevo y copia el texto en «Mi kit de ChatGPT»."
  check: He escrito mis instrucciones personalizadas y las he probado en un chat nuevo
practice:
  task: "Trabajas en una autoescuela y preparas oposiciones. Escribe tus instrucciones personalizadas: cómo quieres que responda, que pregunte si le falta información y que te lleve la contraria."
  require: [contexto, preguntas, tono]
  extra:
    - label: "Pedir que critique"
      any: ["en contra", "contras", "critica", "llevame la contraria", "lleves la contraria", "no me des la razon", "fallos", "riesgos", "pegas", "puntos debiles", "errores"]
      hint: "Pide expresamente que te diga lo que falla: «No me des la razón por darla: dime los fallos»."
  sample: "Trabajo de administrativa en una autoescuela de Lugo y por las tardes preparo oposiciones. Respóndeme en español de España, con tono directo y sencillo, frases cortas y sin emojis. Si te falta información para hacerlo bien, pregúntame antes de responder. No me des la razón por darla: si ves fallos en lo que propongo, dímelos. Si no estás seguro de un dato, avísame."
deeper: null
tool: evaluador-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-23
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-model-spec]
---

## La idea

Tres hábitos cambian la conversación:

**1. «Hazme preguntas antes de responder».** Si no sabes qué contar, deja que ChatGPT pregunte, con un límite («hasta cinco, de una en una»).

**2. «Dime los fallos».** Los asistentes de IA tienden a darte la razón, sobre todo si preguntas «¿verdad que es buena idea?»: es la **adulación**. OpenAI dice en sus normas para el modelo que quiere evitarla, pero ayuda pedirlo: «¿qué estoy pasando por alto?». Lo verás a fondo en «Usarlo con cabeza».

**3. Instrucciones personalizadas.** Un campo de la **personalización**, en la configuración, donde escribes una vez qué debe saber de ti y cómo quieres que responda. Se aplican a tus chats, también a los ya empezados, en el plan gratis y en los de pago. En un proyecto con instrucciones propias, mandan las del proyecto.

Ahí mismo eliges una **personalidad**, el estilo y tono base (más directo, más cercano, más eficiente…), y ajustas rasgos como la calidez o los emojis. Cambia cómo suena, no lo que sabe.

Pon tu situación general, el tono, la longitud y estos hábitos; no pongas DNI, dirección, salud ni cuentas. OpenAI puede usar lo que escribes ahí para mejorar sus modelos salvo que lo desactives en los **controles de datos**.

## En la práctica

En una petición importante:

> Prueba: «Te pego abajo mi plan para el mercadillo solidario de diciembre en el patio del colegio de mis hijos. No me digas si es buena idea: dime qué estoy pasando por alto y los dos riesgos que más podrían estropear el día, del más probable al menos. Si para valorarlo te falta un dato, pregúntamelo primero.»

Si su crítica te parece injusta, discútela: es un punto de vista, no un veredicto. Y un «sí, buena idea» no es un análisis.
