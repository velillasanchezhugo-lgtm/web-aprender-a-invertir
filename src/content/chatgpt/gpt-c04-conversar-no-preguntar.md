---
title: Conversar, no solo preguntar
description: "Cómo mejorar una respuesta de ChatGPT: pedir cambios concretos, editar tu mensaje, generar otra versión, abrir una rama y empezar un chat nuevo al cambiar de tema."
level: cero
track: gpt-cero
order: 4
skills: [gpt-iterar]
terms: [prompt, chatgpt]
hook: "La primera respuesta casi te sirve, pero no del todo. ¿Empiezas de cero, te conformas o hay algo mejor?"
takeaway: "La primera respuesta es un borrador. Di qué cambiar y qué mantener, edita tu mensaje si te expresaste mal, genera otra versión si quieres comparar y abre un chat nuevo cuando cambies de tema."
scenario:
  kind: operacion
  label: Caso práctico
  title: El brindis de Felipe
  body: "Felipe tiene que decir unas palabras en la boda de su hermana. ChatGPT le da un brindis correcto, pero de tres minutos y con frases de tarjeta. En dos mensajes le pide que lo deje en un minuto, que quite las frases hechas y que mantenga la anécdota del viaje a Asturias que él le contó. La tercera versión ya suena a él."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-c04-q1
    q: "El brindis de Felipe es largo y suena a tarjeta, pero le gusta la anécdota del viaje. ¿Cuál es el mejor siguiente mensaje?"
    options: ["«Hazlo mejor»", "«Déjalo en un minuto, quita las frases hechas y mantén la anécdota del viaje a Asturias»", "Abrir un chat nuevo y pegar la misma petición del principio"]
    answer: 1
    explain: "Un cambio concreto, más lo que hay que conservar, da justo lo que buscas. Empezar de cero tienta por «limpiar», pero pierdes lo que ya funcionaba y repites la misma petición, que dará algo parecido."
  - type: choice
    id: gpt-c04-q2
    q: "Felipe ya tiene su brindis. Ahora quiere preguntar qué ropa es adecuada para una boda de tarde. ¿Qué hace?"
    options: ["Abrir un chat nuevo: es otro tema", "Seguir en el mismo chat para que lo tenga todo junto", "Borrar el chat del brindis antes de preguntar"]
    answer: 0
    explain: "Un chat por tema mantiene las respuestas centradas y te deja encontrar cada cosa luego. Seguir en el mismo tienta por comodidad, pero mezcla instrucciones (lo de «un minuto» o «sin frases hechas» puede colarse donde no toca). Borrar no hace falta."
  - type: truefalse
    id: gpt-c04-q3
    q: "Si editas un mensaje tuyo de antes, ChatGPT responde de nuevo desde ese punto y lo que venía después queda en la versión anterior."
    answer: true
    explain: "Editar crea una versión nueva de la conversación desde ese mensaje; la antigua sigue disponible con las flechas que aparecen junto a él. Tienta pensar que edita «por encima» y conserva todo lo de después, pero no es así."
tips:
  - "Si una respuesta es casi buena, señala la parte exacta: «el segundo párrafo», «la frase del final». Cuanto más preciso, menos vueltas."
  - "Cuando generes otra versión, compara las dos y quédate con lo mejor de cada una: puedes pedirle que las combine."
action:
  title: Mejora una respuesta en dos vueltas
  steps:
    - "Pide algo real (un mensaje, un plan, una explicación) y lee la primera respuesta."
    - "Responde con dos cambios concretos y una cosa que quieras mantener."
    - "Si al leerla ves que te expresaste mal al principio, edita tu primer mensaje en lugar de añadir otro."
    - "Apunta en «Mi kit de ChatGPT» la frase de corrección que mejor te haya funcionado."
  check: He mejorado una respuesta pidiendo cambios concretos
practice:
  task: "ChatGPT te ha preparado el discurso de bienvenida para la fiesta de tu asociación de vecinos, pero es largo y muy formal. Escribe el mensaje de seguimiento: qué cambiar, cómo y qué mantener."
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

La primera respuesta de ChatGPT es **un borrador**, no la última palabra. Lo útil es **conversar**: él recuerda lo que habéis hablado en ese chat y puedes corregirle como a un compañero.

Tienes cuatro formas de mejorar un resultado:

1. **Pedir cambios concretos.** Mejor «más corto, sin frases hechas, mantén la anécdota» que «hazlo mejor». Di **qué cambiar** y **qué conservar**.
2. **Editar tu mensaje.** Si te explicaste mal, corrige tu mensaje en vez de añadir otro. ChatGPT contesta de nuevo desde ahí y la versión anterior se guarda: puedes ir y volver con unas flechas junto al mensaje.
3. **Generar otra respuesta.** Pide una versión distinta de la misma respuesta para comparar. Sirve para ideas o textos, no para arreglar una petición a la que le falta contexto.
4. **Abrir una rama.** En la web, desde las opciones de un mensaje, puedes llevar la conversación hasta ese punto a un **chat nuevo** y probar otro camino sin tocar el original.

**Un chat por tema.** Cada conversación tiene un límite de lo que puede tener en cuenta a la vez, la **ventana de contexto**. En chats muy largos o que mezclan temas, las instrucciones del principio pierden fuerza o se cuelan donde no deben. Cambias de tema, **chat nuevo**.

## En la práctica

Tras la primera respuesta, contesta con una o dos frases que digan qué cambiar y qué mantener. Si tras tres vueltas no mejora, empieza un chat nuevo con una petición más completa, añadiendo lo que has aprendido.

> Prueba: «Me gusta la estructura, pero es demasiado largo. Déjalo en la mitad, cambia el tono a más cercano y mantén la última frase tal cual».

Las opciones para editar, generar otra respuesta o abrir una rama aparecen al pasar el ratón o mantener pulsado un mensaje. Su sitio exacto cambia con las versiones de la aplicación.

## Error frecuente

Abandonar tras la primera respuesta floja o repetir la misma petición esperando otro resultado. Di qué falla.
