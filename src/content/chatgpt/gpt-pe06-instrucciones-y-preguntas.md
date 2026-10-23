---
title: Que pregunte, que critique y que no tengas que repetirte
description: "Pide a ChatGPT que te pregunte antes de responder y que critique en vez de darte la razón, y guarda tus preferencias en las instrucciones personalizadas."
level: basico
track: gpt-pedir
order: 106
skills: [gpt-iterar, gpt-instrucciones]
terms: [instrucciones-personalizadas, adulacion, personalidad-de-chatgpt]
hook: "Le cuentas a ChatGPT que quieres dejar la carrera para hacer un ciclo de cocina y te responde que es una decisión valiente y emocionante. ¿Te está ayudando a decidir o solo a sentirte bien?"
takeaway: "Pide «hazme preguntas antes de responder» y «dame los argumentos en contra». Y lo que repites en cada chat (quién eres, cómo quieres las respuestas) escríbelo una vez en las instrucciones personalizadas."
scenario:
  kind: operacion
  label: Caso práctico
  title: La decisión de Leire
  body: "Leire está en 2.º de Derecho en Bilbao y quiere pasarse a un ciclo de FP de cocina. ChatGPT la anima. Ella cambia la petición: «Antes de opinar, hazme las preguntas que necesites. Después, dame los tres argumentos más fuertes en contra». Las preguntas sobre prácticas, horarios y salidas le aclaran más que los ánimos. Luego escribe en sus instrucciones personalizadas que prefiere respuestas directas y que le lleve la contraria cuando haga falta."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-pe06-q1
    q: "Iván quiere que ChatGPT le ayude a planificar un viaje de 10 días por Portugal, pero no sabe qué datos darle. ¿Qué hace?"
    options: ["Pide «planifícame un viaje por Portugal» y ya irá corrigiendo", "Pide «antes de proponer nada, hazme hasta seis preguntas sobre el viaje, de una en una»", "Espera a tenerlo todo decidido antes de abrir ChatGPT"]
    answer: 1
    explain: "Si no sabes qué contexto dar, deja que te lo pregunte: saldrán presupuesto, ritmo y transporte. Pedirlo directamente tienta, pero ChatGPT rellenará los huecos con un viaje de folleto."
  - type: truefalse
    id: gpt-pe06-q2
    q: "Si escribes en tus instrucciones personalizadas «no te equivoques nunca», ChatGPT dejará de cometer errores."
    answer: false
    explain: "Las instrucciones cambian cómo responde (tono, formato, qué tener en cuenta), no lo que sabe. Puede seguir inventando datos con seguridad. Sí ayuda pedirle que marque lo que no tiene claro; lo importante, compruébalo."
  - type: choice
    id: gpt-pe06-q3
    q: "Elena repite en casi todos sus chats «soy profesora de secundaria, respuestas cortas y sin emojis». ¿Qué le conviene?"
    options: ["Seguir escribiéndolo en cada chat", "Ponerlo en las instrucciones personalizadas, sin datos personales que no hagan falta", "Poner su nombre completo, el instituto y su teléfono para que la conozca mejor"]
    answer: 1
    explain: "Lo que vale para casi todo va en las instrucciones personalizadas y te ahorra repetirlo. Dar más datos tienta para «personalizar», pero su nombre, el centro o el teléfono no mejoran las respuestas y son información que no hace falta compartir."
tips:
  - "Pide que separe lo que sabe seguro de lo que supone: verás qué comprobar."
  - "Si un día las instrucciones te estorban (por ejemplo, quieres un texto largo), díselo en ese chat: suele seguir lo que le pides en la conversación. También puedes desactivarlas en la personalización."
  - "Su crítica es un punto de vista más, no un veredicto. Para decisiones grandes, habla también con personas que conozcan el tema."
action:
  title: Escribe tus instrucciones personalizadas
  steps:
    - "Abre la personalización en la configuración de ChatGPT y busca el campo de instrucciones personalizadas."
    - "Escribe tres o cuatro líneas: a qué te dedicas, cómo quieres las respuestas y que te avise cuando no esté seguro o vea un fallo en tu idea."
    - "Pruébalo en un chat nuevo y copia el texto en «Mi kit de ChatGPT»."
  check: He escrito mis instrucciones personalizadas y las he probado en un chat nuevo
practice:
  task: "Usas ChatGPT para tu trabajo de técnico de mantenimiento y para organizar tu casa. Escribe tus instrucciones personalizadas: cómo quieres que responda, que pregunte si le falta información y que te lleve la contraria."
  require: [contexto, preguntas, tono]
  extra:
    - label: "Pedir que critique"
      any: ["en contra", "contras", "critica", "llevame la contraria", "lleves la contraria", "no me des la razon", "fallos", "riesgos", "pegas"]
      hint: "Pide expresamente que te diga lo que falla: «No me des la razón por darla: dime los fallos»."
  sample: "Soy técnico de mantenimiento en una fábrica de Burgos y uso ChatGPT para el trabajo y para organizar mi casa. Respóndeme en español de España, con tono directo y sencillo, frases cortas y sin emojis. Si te falta información para hacerlo bien, pregúntame antes de responder. No me des la razón por darla: si ves fallos o riesgos en lo que propongo, dímelos. Si no estás seguro de un dato, avísame."
deeper: null
tool: evaluador-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-model-spec]
---

## La idea

Tres hábitos cambian la conversación:

**1. «Hazme preguntas antes de responder».** Si no sabes qué contar, deja que ChatGPT te lo pregunte. Pon un límite («hasta cinco preguntas, de una en una») para no eternizarlo.

**2. «Critica en vez de darme la razón».** Los asistentes de IA tienden a ser complacientes y a seguirte la corriente, sobre todo si preguntas «¿verdad que es buena idea?». Esa tendencia se llama **adulación**. OpenAI dice en sus normas para el modelo que quiere evitarla, pero ayuda pedirlo: «dame los argumentos más fuertes en contra», «¿qué estoy pasando por alto?».

**3. Instrucciones personalizadas para no repetirte.** Son un ajuste de ChatGPT, dentro de la **personalización** de la configuración, donde escribes una vez qué quieres que sepa de ti y cómo quieres que responda. ChatGPT las tiene en cuenta en tus conversaciones sin que lo repitas. Están en el plan gratis y en los de pago. Ahí mismo puedes elegir una **personalidad**, un estilo base (más directo, más cercano, más breve…), que cambia cómo suena, no lo que sabe.

Qué poner: tu situación general, el tono, la longitud y estos dos hábitos. Qué no poner: datos que no hacen falta (DNI, dirección, salud, cuentas). OpenAI puede usar lo que escribes ahí para mejorar sus modelos salvo que lo desactives en los **controles de datos**.

## En la práctica

Úsalo al principio de una petición importante:

> Prueba: «Estoy pensando en apuntarme a un curso de inglés intensivo de tres meses por las tardes, mientras trabajo a jornada completa. Antes de opinar, hazme hasta cinco preguntas, de una en una. Después dime los tres motivos más probables por los que podría salirme mal y qué haría para evitarlos. Si algo es una suposición, márcalo.»

Contesta a sus preguntas y, si su crítica te parece injusta, discútela: «¿Por qué crees que eso es un riesgo en mi caso?».

## Error frecuente

Preguntar «¿te parece buena idea?» y tomarse el «sí» como una opinión contrastada. Una respuesta amable no es un análisis.
