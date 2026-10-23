---
title: Un papel y un público
description: "Dar a ChatGPT un papel («haz de entrevistador») y un público («para personas mayores»): por qué cambia la respuesta y cuáles son sus límites."
level: basico
track: gpt-pedir
order: 104
skills: [gpt-peticion]
terms: [prompt, contexto-de-la-peticion]
hook: "Vas a explicar a un grupo de jubilados cómo detectar un SMS falso del banco y ChatGPT te prepara un texto con «phishing», «URL» y «autenticación». ¿Qué le faltaba saber?"
takeaway: "El papel le dice a ChatGPT desde dónde mirar; el público, a quién hablar. Juntos cambian el vocabulario, los ejemplos y el nivel, pero no le dan conocimientos nuevos."
scenario:
  kind: operacion
  label: Caso práctico
  title: La charla de Marcos
  body: "Marcos, voluntario en un centro cívico de Valladolid, prepara una charla sobre timos por SMS. Su primera petición da un texto técnico. La segunda dice: «Haz de formador con experiencia en grupos de mayores. El público tiene más de 70 años y usa poco el móvil. Sin palabras en inglés». Ahora el guion se entiende."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-pe04-q1
    q: "Lucía tiene la semana que viene su primera entrevista como administrativa y quiere practicar. ¿Qué petición le ayuda más?"
    options: ["«Dame las preguntas típicas de una entrevista»", "«Haz de responsable de selección de una gestoría. Pregúntame de una en una y al final dime qué mejorar»", "«Actúa como el mejor experto en entrevistas del mundo»"]
    answer: 1
    explain: "Un papel concreto y un modo de trabajar (una pregunta cada vez y valoración final) lo convierten en un entrenador. La lista tienta, pero no practicas. «El mejor experto del mundo» suena potente y no añade nada."
  - type: choice
    id: gpt-pe04-q2
    q: "Rosa pide a ChatGPT que haga de asesor fiscal y le diga si puede deducirse en la renta las obras de su piso. ¿Cómo usa la respuesta?"
    options: ["La sigue tal cual: le ha dado el papel de experto", "La usa para entender su caso y preparar preguntas, y lo confirma con la Agencia Tributaria o una gestoría", "No la lee: un asistente no sabe nada de impuestos"]
    answer: 1
    explain: "El papel cambia el enfoque, no lo que sabe ni su responsabilidad: puede equivocarse con una norma o un plazo. Seguirla tal cual tienta porque suena a experto. Descartarla también es un error: ayuda a llegar con las preguntas claras."
  - type: choice
    id: gpt-pe04-q3
    q: "Mohamed ha escrito un aviso para su equipo de reparto sobre un cambio de rutas. ¿Qué público le indica a ChatGPT para revisarlo?"
    options: ["Ninguno: que lo revise «en general»", "«Repartidores que lo leerán en el móvil antes de salir, algunos con el español como segundo idioma»", "«Un público exigente»"]
    answer: 1
    explain: "Un público concreto dice dónde se lee y qué dificultades tiene: con eso acorta frases y quita palabras raras. «Exigente» o «en general» tientan porque no hay que pensar, pero no le dan nada con qué trabajar."
tips:
  - "Un papel con oficio y situación («profesora de FP que corrige memorias») funciona mejor que uno inflado («el mejor experto del mundo»): este no mejora nada y da falsa seguridad."
  - "Si cambias de público, cambia también el ejemplo: lo que sirve a un niño no sirve a tu jefa."
action:
  title: Practica una conversación
  steps:
    - "Piensa en una conversación pendiente: una reclamación, pedir una subida de sueldo."
    - "Pide a ChatGPT que haga de la otra persona, que pregunte de una en una y ponga pegas realistas."
    - "Al final, pide tres cosas que mejorar y guarda la petición en tu kit."
  check: He practicado una conversación con ChatGPT haciendo de la otra persona
practice:
  task: "Has escrito el folleto de tu asociación de vecinos sobre la recogida de muebles viejos. Escribe la petición para que ChatGPT lo revise con un papel concreto y pensando en quién lo leerá."
  require: [publico, contexto]
  extra:
    - label: "Darle un papel"
      any: ["haz de", "actua como", "hazte pasar", "ponte en el papel", "como si fueras", "haz el papel", "interpreta", "leelo como", "lee como", "revisalo como", "revisa como", "ponte en la piel"]
      hint: "Dile desde dónde debe mirar: «Haz de vecino mayor que…» o «Léelo como alguien que…»."
  sample: "Soy la secretaria de la asociación de vecinos de mi barrio. Te pego abajo el folleto sobre el nuevo horario de recogida de muebles viejos. Haz de vecino de 75 años que no usa internet. Es para buzonear en los portales: lo leerán personas mayores y familias con prisa. Dime qué frases no entenderías y propón una versión más clara, en una cara de folio y sin palabras técnicas."
deeper: null
tool: constructor-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-23
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-academy, openai-uso]
---

## La idea

Dos frases cambian mucho una respuesta:

- **El papel**: desde dónde mira ChatGPT. «Haz de profesor de autoescuela», «revisa esto como un cliente enfadado». Cambia qué destaca, qué critica y cómo lo dice.
- **El público**: a quién va dirigido. «Para niños de 8 años», «para mi jefa, que tiene dos minutos». Cambia el vocabulario, los ejemplos y la longitud.

Dos usos muy prácticos: **ensayar** (hace de entrevistador, de cliente o de tu casero, pregunta a pregunta, y te valora al final) y **revisar con otros ojos** («lee mi propuesta como el vecino más escéptico de la junta»).

**Los límites:** el papel no le da conocimientos, título ni responsabilidad. «Actúa como médico» sigue siendo un asistente que puede equivocarse: para salud, derecho o dinero, úsalo para preparar preguntas y decide con un profesional. Y un papel no cambia sus normas de uso.

## En la práctica

Pon el papel al principio y el público justo después de la tarea:

> Prueba: «Haz de profesora de primaria con experiencia en explicar ciencia. Explica por qué llueve para mi hija de 7 años. Usa un ejemplo de cosas de casa, como el vapor de la ducha, y frases cortas. Máximo 100 palabras.»

Si sale demasiado infantil o técnico, ajusta solo el público: «Tiene 10 años».
