---
title: El modo estudio
description: "Qué hace el modo estudio de ChatGPT, cómo se activa y cómo lograr que te enseñe con preguntas sin él."
level: basico
track: gpt-aprender
order: 501
skills: [gpt-aprender]
terms: [modo-estudio, metodo-socratico, memoria-de-chatgpt]
hook: "ChatGPT te explica las ecuaciones de segundo grado, lo lees, asientes… y al cerrar el chat no sabrías resolver una. ¿Qué cambiarías?"
takeaway: "El modo estudio hace que ChatGPT te guíe con preguntas y pistas en vez de darte la respuesta. Si no lo ves, pídelo con palabras."
scenario:
  kind: operacion
  label: Caso práctico
  title: Las fracciones de Mateo
  body: "Mateo, de 15 años, suspende Matemáticas por las fracciones. Su madre, Rosario, activa con él el modo estudio. ChatGPT le plantea un ejercicio pequeño y, cuando Mateo falla, le da una pista en vez de la solución. Al final le pone tres parecidos para ver si ya los hace solo."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-ap01-q1
    q: "Valeria repasa Biología y quiere que ChatGPT le haga pensar, no que le resuma. No encuentra el modo estudio. ¿Qué hace?"
    options: ["Pagar un plan para tenerlo", "Pedirlo con palabras: «No me des la respuesta; hazme preguntas de una en una y dame pistas»", "Pedir un resumen y leerlo varias veces"]
    answer: 1
    explain: "Lo útil del modo estudio es el comportamiento, y eso se pide con palabras. Pagar tienta porque parece la solución, pero está en todos los planes y, además, no es imprescindible."
  - type: truefalse
    id: gpt-ap01-q2
    q: "Una vez activado, el modo estudio se queda puesto para siempre en todas tus conversaciones."
    answer: false
    explain: "Se elige en cada conversación y se quita cuando quieras. Tienta pensar que es un ajuste general, como el idioma, pero funciona chat a chat."
  - type: choice
    id: gpt-ap01-q3
    q: "Estás en modo estudio con un problema de física que ya has resuelto. Solo quieres el resultado para comparar. ¿Qué haces?"
    options: ["Decirlo claro: «Ya lo he resuelto; dame solo el resultado»", "Contestar a sus preguntas aunque no las necesites", "Borrar la conversación y empezar de cero"]
    answer: 0
    explain: "El modo estudio guía, pero escucha lo que pides. Si el trabajo ya es tuyo, comparar es aprender. Seguir contestando por no «romper» el modo tienta, pero te hace perder tiempo."
tips:
  - "Empieza diciendo tu curso, el tema exacto y para qué lo estudias: así ajusta las preguntas desde el principio."
  - "Si no quieres que ChatGPT recuerde lo que estudias, revisa la memoria en Configuración."
action:
  title: Prueba el modo estudio cinco minutos
  steps:
    - "Abre una conversación nueva y busca el modo estudio en el menú de herramientas o en el «+» (en inglés, «Study and learn»)."
    - "Si no lo encuentras, pega la petición de esta sesión y responde a sus preguntas cinco minutos sobre un tema que te cueste."
    - "Guarda la petición que mejor te funcione en tu nota «Mi kit de ChatGPT»."
  check: He estudiado un tema con ChatGPT respondiendo a sus preguntas
practice:
  task: "Tienes examen de Economía de 1.º de Bachillerato y no entiendes la inflación. Escribe la petición para que ChatGPT te enseñe con preguntas y pistas."
  require: [contexto]
  extra:
    - label: "Que no te dé la respuesta"
      any: ["no me des", "sin darme", "no me digas la solucion", "no me resuelvas", "sin decirme", "no quiero que me des", "no quiero la respuesta", "no me la des", "no me lo digas", "no me lo cuentes", "no me la expliques hecha", "explicacion hecha", "sin que me la", "sin que me lo", "me la cuentes hecha"]
      hint: "Dilo claro: «No me des la respuesta»."
    - label: "Preguntas y pistas"
      any: ["hazme preguntas", "preguntame", "de una en una", "pista", "pistas", "guiame", "preguntandome", "hazme pensar", "haciendome pensar", "pregunta a pregunta"]
      hint: "Pide que te guíe: «Hazme preguntas de una en una y dame una pista si me atasco»."
  sample: "Estoy en 1.º de Bachillerato y el jueves tengo examen de Economía. No entiendo qué es la inflación ni por qué todo sube de precio a la vez. No me des la explicación hecha: hazme preguntas de una en una, espera a que conteste y, si fallo, dame una pista. Al final, ponme tres preguntas de examen sin ayuda y corrígemelas."
deeper: null
tool: plantillas
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-noticias, openai-planes]
---

## La idea

Leer una buena explicación da **sensación de entender**, pero se aprende pensando: intentas, fallas y corriges.

Para eso existe el **modo estudio** (en inglés, «Study and learn»). Cuando lo activas, ChatGPT:

- te pregunta tu nivel y tu objetivo;
- explica por partes;
- usa **preguntas y pistas**, al estilo del **método socrático** (enseñar preguntando para que llegues tú a la respuesta);
- te pone pruebas para ver si lo has entendido.

Según el centro de ayuda de OpenAI:

- **Está en todos los planes**, en la web y en el móvil.
- **Se elige en cada conversación**, desde el menú de herramientas o el «+» de la caja de texto.
- Si tienes activada la **memoria de ChatGPT** (lo que recuerda de ti entre chats), puede usarla para adaptarse a ti.

Lo más importante: **no lo necesitas**. Es un atajo cómodo, pero consigues lo mismo con palabras. Y ChatGPT se equivoca, sobre todo con cálculos: si algo no te cuadra, compruébalo con el libro o tu profesor.

## En la práctica

Activa el modo estudio o, si no lo ves, pega esto. Responde tú antes de pedir más ayuda.

> Prueba: «Quiero aprender [TEMA] para [EXAMEN, TRABAJO O CURIOSIDAD]. Mi nivel es [CURSO O LO QUE SÉ]. No me des la respuesta: hazme preguntas de una en una, espera a que conteste y dame una pista si me atasco. Cuando creas que lo entiendo, ponme tres ejercicios sin ayuda y corrígemelos.»

Si un día solo quieres el dato, dilo: «Hoy solo necesito la respuesta, sin preguntas».

## Error frecuente

Contestar «no sé» a todo hasta que suelta la solución. Si te atascas, pide una pista más concreta.
