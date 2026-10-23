---
title: Conversar, no solo preguntar
description: Cómo mejorar una respuesta de Claude pidiendo cambios, editando tu mensaje o regenerando, y cuándo conviene empezar un chat nuevo.
level: cero
track: cla-cero
order: 4
skills: [cla-iterar]
terms: [ventana-de-contexto]
hook: "La respuesta de Claude está casi bien, pero es demasiado larga y el tono no te convence. ¿Empiezas de cero o hay algo mejor?"
takeaway: La primera respuesta es un borrador. Pide cambios concretos, edita tu mensaje si te expresaste mal y abre un chat nuevo cuando cambies de tema, porque Claude tiene en cuenta todo lo anterior de la conversación.
scenario:
  kind: operacion
  label: Caso práctico
  title: El anuncio de Ahmed
  body: "Ahmed vende su bicicleta. Claude le escribe un anuncio largo y formal. Ahmed pide «más corto, más cercano y con el precio al principio» y luego dos títulos para elegir. Para su carta de presentación de un trabajo, abre un chat nuevo."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-c04-q1
    q: "La respuesta de Claude está bien de contenido pero es el doble de larga de lo que quieres. ¿Qué haces?"
    options: ["Borrar el chat y volver a escribir la petición desde cero", "Aceptarlo así: la IA sabe mejor qué extensión conviene", "Responder en el mismo chat: «Déjalo en la mitad, quita la introducción y mantén los tres datos clave»"]
    answer: 2
    explain: "Pedir un cambio concreto en la misma conversación aprovecha lo que ya está bien. Empezar de cero tienta cuando algo no convence, pero pierdes el trabajo hecho y el contexto que ya le diste."
  - type: choice
    id: cla-c04-q2
    q: "Ahmed ha pasado media hora con el anuncio de la bici y ahora quiere ayuda con una carta de presentación para un trabajo. ¿Qué le conviene?"
    options: ["Seguir en el mismo chat para que Claude lo tenga todo junto", "Abrir un chat nuevo y darle el contexto de la carta", "Pedirle a Claude que «se olvide» de la bici"]
    answer: 1
    explain: "Claude tiene en cuenta todo lo que hay en la conversación. Mezclar temas puede colar ideas o tonos del anuncio en la carta. Seguir en el mismo chat tienta por comodidad, pero un chat nuevo por tema da respuestas más limpias."
  - type: truefalse
    id: cla-c04-q3
    q: "Si te das cuenta de que tu mensaje estaba mal planteado, puedes editarlo y Claude responde de nuevo a la versión corregida."
    answer: true
    explain: "Editar tu mensaje sustituye la petición y genera una respuesta nueva a partir de ella. Tienta añadir otro mensaje más debajo, pero entonces la respuesta equivocada sigue en la conversación y puede influir."
tips:
  - "Cuando dos versiones te gusten a medias, dile qué tomar de cada una: «el principio de la primera y el final de la segunda»."
  - "Si una conversación se ha hecho muy larga, pide un resumen de lo decidido y pégalo en un chat nuevo para seguir desde ahí."
action:
  title: Mejora una respuesta en tres pasos
  steps:
    - "Pide a Claude un texto corto que necesites, por ejemplo un mensaje para el grupo de vecinos."
    - "Pídele un cambio concreto: más corto, otro tono o en lista."
    - "Guarda en tu nota de «Mi kit de Claude» la frase de corrección que mejor te ha funcionado."
  check: He mejorado una respuesta pidiendo cambios en lugar de empezar de cero
practice:
  task: "Claude te ha escrito la felicitación de jubilación para una compañera, pero es larga y muy solemne. Escribe el mensaje de seguimiento: qué cambiar, cómo y qué mantener."
  require: [formato, tono]
  extra:
    - label: Decir qué mantener
      any: [mantén, manten, conserva, deja igual, dejalo igual, como esta, no cambies, no toques, quédate con, respeta]
      hint: "Di qué parte te gusta y quieres conservar: «Mantén la frase del café»."
  sample: "Está bien, pero es demasiado largo y solemne para una tarjeta. Déjalo en cuatro líneas con un tono cercano y un poco divertido: es para una compañera con la que he trabajado doce años. Mantén la frase sobre el café de las mañanas, que me encanta. Dame dos versiones para elegir."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda, claude-docs]
---

## La idea

Con Claude no se trata de hacer una pregunta perfecta. Se trata de **conversar**: la primera respuesta es un **borrador** y tú lo vas afinando.

Tienes cuatro formas de mejorar un resultado:

- **Pedir cambios concretos.** «Más corto», «más formal», «quita la última frase», «ponlo en una lista». Cuanto más concreto, mejor.
- **Pedir alternativas.** «Dame tres versiones del título» o «escríbelo de otra forma». Comparar te ayuda a saber qué quieres.
- **Editar tu mensaje.** Si te expresaste mal, corrige tu petición en lugar de añadir otra. Claude contesta de nuevo a la versión corregida.
- **Regenerar la respuesta.** Pides otra respuesta a la misma petición. Sirve cuando el planteamiento era bueno pero el resultado no te convence.

**Cuándo empezar un chat nuevo.** Claude tiene en cuenta **todo lo que hay en la conversación**: tus mensajes, sus respuestas y los archivos. Todo lo que Claude tiene a la vista en un chat cabe en su **ventana de contexto**, una especie de memoria de trabajo con límite. Es muy útil mientras hablas de lo mismo. Pero si cambias de tema, lo anterior puede colarse en la respuesta. Además, las conversaciones muy largas gastan antes tu límite de uso.

Regla sencilla: **un tema, un chat**.

## En la práctica

Las opciones para editar tu mensaje o regenerar la respuesta aparecen junto a cada mensaje, normalmente al pasar el ratón o al mantenerlo pulsado en el móvil. El botón para un chat nuevo está siempre visible en la pantalla principal.

Frases que funcionan: «Mantén el contenido, pero en la mitad de palabras», «Esto no es correcto: [por qué]. Corrígelo».

> Prueba: «El texto está bien, pero es demasiado largo y suena muy serio. Déjalo en cinco líneas, con un tono cercano, y dame dos versiones para elegir».

## Error frecuente

Tirar la conversación a la primera respuesta mediocre. Casi siempre basta un mensaje más diciendo qué cambiar.
