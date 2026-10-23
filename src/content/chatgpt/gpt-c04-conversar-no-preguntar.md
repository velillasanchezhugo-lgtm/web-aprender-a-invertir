---
title: Mejorar la respuesta conversando
description: "Cómo mejorar una respuesta de ChatGPT: pedir cambios concretos, editar tu mensaje, generar otra versión, abrir una rama y empezar un chat nuevo al cambiar de tema."
level: cero
track: gpt-cero
order: 4
skills: [gpt-iterar]
terms: [prompt, ventana-de-contexto]
hook: "La primera respuesta casi te sirve, pero no del todo. ¿Empiezas de cero, te conformas o hay algo mejor?"
takeaway: "Trata la primera respuesta como un borrador: di qué cambiar y qué mantener, corrige tu mensaje si te explicaste mal, prueba otro camino en una rama y empieza un chat nuevo al cambiar de tema."
scenario:
  kind: operacion
  label: Caso práctico
  title: El brindis de Felipe
  body: "Felipe hablará en la boda de su hermana. ChatGPT le da un brindis correcto, pero de tres minutos y con frases de tarjeta. Le pide dejarlo en un minuto, sin frases hechas y con la anécdota del viaje a Asturias que él le contó. La tercera versión ya suena a él."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-c04-q1
    q: "El brindis de Felipe es largo y suena a tarjeta, pero le gusta la anécdota del viaje. ¿Cuál es el mejor siguiente mensaje?"
    options: ["«Hazlo mejor»", "«Déjalo en un minuto, quita las frases hechas y mantén la anécdota del viaje a Asturias»", "Abrir un chat nuevo y pegar la misma petición del principio"]
    answer: 1
    explain: "Un cambio concreto, más lo que hay que conservar, da justo lo que buscas. Empezar de cero tienta por «limpiar», pero pierdes lo que ya funcionaba y repites una petición que dará algo parecido."
  - type: choice
    id: gpt-c04-q2
    q: "Felipe se da cuenta de que en su primer mensaje escribió que era la boda de su prima, no de su hermana. ¿Qué hace?"
    options: ["Edita ese primer mensaje con el dato bueno para que ChatGPT responda de nuevo desde ahí", "Pulsa para generar otra respuesta hasta que lo adivine", "Lo deja así: total, es un brindis"]
    answer: 0
    explain: "Si el error está en tu mensaje, lo corriges en tu mensaje. Generar otra respuesta tienta porque es un clic, pero ChatGPT sigue leyendo «prima» y volverá a equivocarse."
  - type: truefalse
    id: gpt-c04-q3
    q: "Felipe quiere probar un brindis en tono de humor sin perder el que ya tiene. Si abre una rama desde un mensaje, la conversación original se queda como estaba."
    answer: true
    explain: "La rama copia la conversación hasta ese punto en un chat nuevo; lo que hagas allí no toca el original. Tienta pensar que hay que empezar de cero o arriesgar el bueno, pero la rama sirve justo para probar sin miedo."
tips:
  - "Señala la parte exacta que falla: «el segundo párrafo», «la frase del final». Cuanto más preciso, menos vueltas."
  - "Si la rama te sale mejor, sigue en ella: el chat original queda ahí por si quieres volver."
action:
  title: Mejora una respuesta en dos vueltas
  steps:
    - "Pide algo real (un mensaje, un plan, una explicación) y lee la primera respuesta."
    - "Responde con dos cambios concretos y una cosa que quieras mantener."
    - "Si ves que te expresaste mal al principio, edita tu primer mensaje en lugar de añadir otro."
    - "Apunta en «Mi kit de ChatGPT» la frase de corrección que mejor te haya funcionado."
  check: He mejorado una respuesta pidiendo cambios concretos
practice:
  task: "ChatGPT te ha preparado el discurso de bienvenida para la fiesta de tu asociación de vecinos, pero es largo y muy formal. Escribe tu respuesta para mejorarlo sin perder lo que te gusta."
  require: [formato, tono]
  extra:
    - label: Decir qué mantener
      any: [mantén, manten, conserva, deja igual, no cambies, no toques, quédate con, respeta]
      hint: "Di qué parte te gusta y quieres conservar: «Mantén el agradecimiento a los voluntarios»."
  sample: "Está bien encaminado, pero es demasiado largo y formal para una fiesta de barrio. Déjalo en un máximo de 150 palabras, con un tono cercano y alegre, y quita las frases hechas como «es un honor». Mantén el agradecimiento a los voluntarios que montaron las mesas y no cambies la mención a los vecinos mayores. Termina con una frase corta para empezar la comida."
deeper: null
tool: evaluador-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-academy]
---

## La idea

La primera respuesta de ChatGPT es **un borrador**. Lo útil es **conversar**: recuerda lo que habéis hablado en ese chat y puedes corregirle como a un compañero.

Tienes cuatro formas de mejorar un resultado:

1. **Pedir cambios concretos.** Mejor «más corto, sin frases hechas, mantén la anécdota» que «hazlo mejor». Di **qué cambiar** y **qué conservar**.
2. **Editar tu mensaje.** Si te explicaste mal, corrige tu mensaje en vez de añadir otro. ChatGPT contesta de nuevo desde ese punto y lo que venía después deja de verse. Si quieres conservarlo seguro, abre una rama.
3. **Generar otra respuesta.** Pide otra versión de la misma respuesta para comparar. Sirve para ideas o textos, no para arreglar una petición a la que le falta contexto.
4. **Abrir una rama.** Desde las opciones de un mensaje, en la web y en las aplicaciones, puedes llevar la conversación hasta ese punto a un **chat nuevo** y probar otro camino sin tocar el original.

**Un chat por tema.** Cada conversación tiene un límite de lo que ChatGPT puede tener en cuenta a la vez: la **ventana de contexto**. En chats muy largos o que mezclan temas, las instrucciones del principio pierden fuerza o se cuelan donde no deben. Si cambias de tema, **chat nuevo**.

## En la práctica

Contesta con una o dos frases: qué cambiar y qué mantener. Si tras tres vueltas no mejora, abre un chat nuevo con una petición más completa.

> Prueba: «Quédate con este brindis tal cual. Dame solo dos finales distintos para elegir: uno emotivo y otro con humor, de dos frases cada uno».

Editar, generar otra respuesta y abrir una rama aparecen al pasar el ratón por un mensaje o al mantenerlo pulsado. Su sitio exacto cambia con las versiones de la aplicación.

## Error frecuente

Abandonar tras una respuesta floja o repetir la misma petición esperando otro resultado. Di qué falla.
