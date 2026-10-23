---
title: El modo estudio
description: "Qué hace el modo estudio de ChatGPT, cómo se activa y cómo conseguir que te enseñe con preguntas aunque no lo uses."
level: basico
track: gpt-aprender
order: 501
skills: [gpt-aprender]
terms: [modo-estudio, metodo-socratico, memoria-de-chatgpt]
hook: "Le pides a ChatGPT que te explique las ecuaciones de segundo grado, lo lees todo, asientes… y al cerrar el chat no sabrías resolver una sola. ¿Qué cambiarías?"
takeaway: "El modo estudio hace que ChatGPT te guíe con preguntas, pistas y pruebas en vez de darte la respuesta. Si no lo ves o no lo quieres usar, pídeselo con palabras: funciona igual de bien."
scenario:
  kind: operacion
  label: Caso práctico
  title: Las fracciones de Mateo
  body: "Mateo tiene 15 años y suspende Matemáticas por las fracciones. Su madre, Lucía, activa con él el modo estudio en una conversación nueva. ChatGPT le pregunta qué curso hace y qué parte le cuesta, le plantea un ejercicio pequeño y, cuando Mateo se equivoca, le da una pista en vez de la solución. Al final le pone tres ejercicios parecidos para comprobar que ya los hace solo."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-ap01-q1
    q: "Nerea abre ChatGPT para repasar Biología y quiere que le haga pensar en vez de darle resúmenes. No encuentra el modo estudio en su aplicación. ¿Qué hace?"
    options: ["Esperar a que aparezca o pagar un plan para tenerlo", "Pedirlo con palabras: «No me des la respuesta; hazme preguntas de una en una y dame pistas si me atasco»", "Pedirle un resumen y leerlo varias veces"]
    answer: 1
    explain: "El modo estudio es cómodo, pero lo que lo hace útil es el comportamiento: preguntas, pistas y comprobaciones, y eso se puede pedir con palabras. Pagar tienta porque parece la solución, pero OpenAI lo ofrece en todos los planes y, además, no es imprescindible."
  - type: truefalse
    id: gpt-ap01-q2
    q: "Una vez activado, el modo estudio se queda puesto para siempre en todas tus conversaciones."
    answer: false
    explain: "Se activa en la conversación en la que lo eliges y puedes quitarlo cuando quieras desde el mismo menú. Es fácil pensar que es un ajuste general como el idioma, pero funciona chat a chat."
  - type: choice
    id: gpt-ap01-q3
    q: "Estás en modo estudio con un problema de física y solo necesitas ya el resultado para comprobar el tuyo. ¿Qué haces?"
    options: ["Decírselo claro: «Ya lo he resuelto; dame solo el resultado para compararlo»", "Contestar a sus preguntas aunque no las necesites", "Borrar la conversación y empezar de cero"]
    answer: 0
    explain: "El modo estudio guía, pero escucha lo que le pides. Si ya has hecho el trabajo, pedir el resultado para comparar es aprender. Seguir respondiendo preguntas por obligación tienta por no «romper» el modo, pero te hace perder el tiempo."
tips:
  - "Empieza diciendo tu curso o nivel, el tema exacto y para qué lo estudias: el centro de ayuda de OpenAI recomienda dar justo esos datos."
  - "Si tienes la memoria activada, el modo estudio puede usarla para adaptarse a ti. Si no quieres que recuerde lo que estudias, revísala en Configuración."
action:
  title: Prueba el modo estudio cinco minutos
  steps:
    - "Abre una conversación nueva y busca el modo estudio en el menú de herramientas o en el «+» (en inglés se llama «Study and learn»)."
    - "Si no lo encuentras, pega la petición de esta sesión: hace lo mismo."
    - "Elige un tema que te cueste y responde a sus preguntas durante cinco minutos."
    - "Guarda la petición que mejor te funcione en tu nota «Mi kit de ChatGPT»."
  check: He estudiado un tema con ChatGPT respondiendo a sus preguntas
practice:
  task: "Preparas el examen de Economía de 1.º de Bachillerato y no entiendes la inflación. Escribe la petición para que ChatGPT te enseñe con preguntas y pistas, sin darte la respuesta."
  require: [contexto]
  extra:
    - label: "Que no te dé la respuesta"
      any: ["no me des", "sin darme", "no me digas la solucion", "no me resuelvas", "sin decirme", "sin resolver", "no me lo resuelvas", "no quiero que me des", "no quiero la respuesta", "no me la des", "no me lo expliques de golpe"]
      hint: "Dilo claro: «No me des la respuesta»."
    - label: "Preguntas y pistas"
      any: ["hazme preguntas", "preguntame", "de una en una", "una pregunta", "pista", "pistas", "guiame", "preguntandome"]
      hint: "Pide que te guíe: «Hazme preguntas de una en una y dame una pista si me atasco»."
  sample: "Estoy en 1.º de Bachillerato y tengo examen de Economía la semana que viene. No entiendo bien qué es la inflación ni por qué sube el precio de las cosas. Quiero aprenderlo, no memorizarlo. No me des la respuesta de golpe: hazme preguntas de una en una, espera a que conteste y dame una pista si me atasco. Empieza preguntándome qué sé ya. Al final, ponme tres preguntas de examen sin ayuda."
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

Leer una buena explicación da **sensación de entender**, pero se aprende pensando tú: intentas, fallas y corriges.

Para eso existe el **modo estudio** (en inglés, «Study and learn»). Según OpenAI, cuando lo activas ChatGPT:

- te pregunta tu nivel y qué quieres conseguir;
- explica por partes, sin soltarlo todo de golpe;
- usa **preguntas y pistas**, al estilo del **método socrático** (enseñar preguntando para que llegues tú a la respuesta);
- te pone preguntas y pruebas para ver si lo has entendido.

Lo que conviene saber:

- **Está en todos los planes**, gratis y de pago, en la web y en el móvil, según el centro de ayuda.
- **Se activa en cada conversación**, desde el menú de herramientas o el «+» de la caja de texto, y se quita igual.
- Si tienes activada la **memoria de ChatGPT** (lo que recuerda de ti entre chats), puede usarla para adaptarse a tu nivel.

Lo más importante: **no lo necesitas**. Es un atajo cómodo, pero consigues lo mismo pidiéndolo con palabras. Y recuerda que ChatGPT también se equivoca, sobre todo con cálculos: si algo no te cuadra, compruébalo con el libro o tu profesor.

## En la práctica

Abre una conversación nueva y activa el modo estudio o, si no lo ves, pega esta petición. Responde tú antes de pedir más ayuda.

> Prueba: «Quiero aprender [TEMA] para [EXAMEN, TRABAJO O CURIOSIDAD]. Mi nivel es [CURSO O LO QUE SÉ]. No me des la respuesta: hazme preguntas de una en una, espera a que conteste y dame una pista si me atasco. Cuando creas que lo entiendo, ponme tres ejercicios sin ayuda y corrígemelos.»

Si un día solo quieres el dato, dilo: «Hoy solo necesito la respuesta, sin preguntas».

## Error frecuente

Activar el modo estudio y contestar «no sé» a todo hasta que ChatGPT da la solución. Si te atascas, pide una pista más concreta, no la respuesta.
