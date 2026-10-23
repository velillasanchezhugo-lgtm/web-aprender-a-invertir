---
title: Preparar un examen sin trampas
description: "Saca tests, tarjetas y un plan de estudio de tus apuntes con ChatGPT, guíate por el temario oficial y respeta las normas de tu centro."
level: basico
track: gpt-aprender
order: 503
skills: [gpt-aprender, gpt-etica-normas]
terms: [recuperacion-activa, plagio]
hook: "Faltan cuatro semanas para tu examen de oposiciones a auxiliar administrativo y tienes un temario de 600 páginas. ¿Cómo te ayuda ChatGPT sin estudiar cosas que no entran ni meterte en líos?"
takeaway: "Pide que te pregunte a partir de tus apuntes, no de memoria, y repite lo que fallas. El temario oficial manda, y lo que entregas o respondes en un examen lo haces tú, según las normas de tu centro."
scenario:
  kind: operacion
  label: Caso práctico
  title: Las oposiciones de Íñigo
  body: "Íñigo prepara oposiciones a auxiliar administrativo. Sube a ChatGPT sus apuntes del tema de la Constitución y pide diez preguntas tipo test basadas solo en ese texto. Falla tres y pide que le explique los fallos. Con la fecha del examen, le pide un plan de repaso semanal. Al revisarlo con la convocatoria oficial ve que el plan incluía un tema que ya no entra."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-ap03-q1
    q: "Carmen estudia el examen teórico de la ESO de Geografía. ¿Qué petición le da preguntas más fiables?"
    options: ["«Hazme un test de Geografía de España»", "Subir sus apuntes y pedir: «Hazme diez preguntas tipo test usando solo este documento; si algo no aparece, no lo preguntes»", "«¿Qué preguntas van a caer en el examen?»"]
    answer: 1
    explain: "Con sus apuntes, las preguntas siguen lo que ella estudia y se reducen los errores. Sin documento, ChatGPT usa lo que sabe en general, que puede no coincidir con su temario. Y nadie puede saber qué caerá."
  - type: truefalse
    id: gpt-ap03-q2
    q: "Responder tests y tarjetas sin mirar suele fijar mejor lo aprendido que releer los apuntes varias veces."
    answer: true
    explain: "Es la recuperación activa: obligarte a recordar refuerza la memoria. Releer tienta porque da sensación de dominio, pero se olvida antes."
  - type: choice
    id: gpt-ap03-q3
    q: "Diego tiene que entregar un trabajo de su ciclo de FP y no sabe si puede usar ChatGPT. ¿Qué hace primero?"
    options: ["Usarlo y no decir nada: nadie lo va a notar", "Mirar las normas de la asignatura o preguntar al profesor, y si lo usa, decir para qué", "Pedirle el trabajo entero y cambiar algunas palabras"]
    answer: 1
    explain: "Cada centro y cada profesor pone sus normas: unos lo permiten para revisar, otros nada. Callar tienta porque parece que no pasa nada, pero entregar como tuyo algo que no has hecho puede considerarse plagio y costarte el suspenso."
tips:
  - "Crea un proyecto de ChatGPT por asignatura con tus apuntes: así no los subes en cada chat."
  - "Sube tus propios apuntes. Con materiales de academias o de otras personas, comprueba que puedes usarlos."
  - "Si usas ChatGPT en un trabajo, apunta para qué (entender, revisar, practicar) y decláralo como pida tu centro."
action:
  title: Hazte un test de tus apuntes
  steps:
    - "Elige unos apuntes tuyos (de clase, de un curso o del trabajo) y súbelos o pégalos en un chat."
    - "Pide cinco preguntas tipo test usando solo ese texto, de una en una, y responde sin mirar."
    - "Pide la explicación de cada fallo y apunta en tu calendario cuándo repetirás el test."
  check: He hecho un test con ChatGPT a partir de mis apuntes
practice:
  task: "Te examinas del curso de prevención de riesgos laborales y tienes los apuntes en PDF. Escribe la petición para que ChatGPT te haga tarjetas de repaso usando solo ese documento."
  require: [limites, formato]
  extra:
    - label: "Basarse en tu documento"
      any: ["documento", "apuntes", "pdf", "adjunto", "este texto", "temario"]
      hint: "Di de dónde deben salir: «usando solo lo que pone en el documento»."
    - label: "Pedir tarjetas o preguntas para repasar"
      any: ["tarjeta", "tarjetas", "test", "pregunta y respuesta", "preguntas tipo", "flashcard"]
      hint: "Di qué quieres: «tarjetas con una pregunta por delante y la respuesta por detrás»."
  sample: "Te adjunto el PDF con mis apuntes del curso de prevención de riesgos laborales que hago para mi trabajo en una obra. Hazme 15 tarjetas de repaso usando solo lo que pone en el documento: en una tabla, con una pregunta corta en una columna y la respuesta en otra, de una o dos líneas. No añadas nada que no esté en el texto. Al final, dime qué tres apartados son los más importantes para repasar."
deeper: null
tool: plantillas
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-uso]
---

## La idea

Releer los apuntes da sensación de saber. Lo que más fija es la **recuperación activa**: obligarte a recordar sin mirar, con preguntas. ChatGPT es muy bueno fabricando esas preguntas.

Lo que puedes pedirle a partir de **tus** apuntes:

- **Tests** de opción múltiple, de una en una y corregidos.
- **Tarjetas de repaso**: pregunta por un lado, respuesta por el otro.
- **Un plan de estudio** con la fecha del examen y los temas.
- **La explicación de tus fallos** y otro test solo con lo que fallaste.

Tres reglas para no llevarte sustos:

1. **Que parta de tu material.** Si no le das apuntes, ChatGPT pregunta lo que sabe en general, que puede no ser tu temario o estar desactualizado.
2. **El temario oficial manda.** La convocatoria, la guía de la asignatura o el programa del curso deciden qué entra. Compara con ellos el resumen o el plan de ChatGPT.
3. **Sin hacer trampas.** Usarlo para entender y practicar está bien. Entregar como tuyo un trabajo que ha hecho la IA puede ser **plagio** (presentar como propio lo que no lo es). Mira las **normas de tu centro**, que cambian de uno a otro, y **declara** cómo lo has usado si te lo piden.

## En la práctica

1. Sube o pega tus apuntes en un chat (mejor dentro de un proyecto por asignatura).
2. Pide preguntas basadas solo en ese texto.
3. Responde sin mirar y pide que te explique los fallos.
4. Repite dos o tres días después con lo que fallaste.

> Prueba: «Te paso mis apuntes del tema [N]. Hazme diez preguntas tipo test usando solo este texto, de una en una. Espera a que conteste, corrígeme y explica cada fallo en dos frases. Si algo no está en los apuntes, no lo preguntes.»

Para el plan: «Mi examen es el [FECHA] y entran estos temas: [LISTA]. Tengo una hora al día. Propón un plan semanal con repasos de lo que más falle.»

## Error frecuente

Estudiar el resumen de ChatGPT sin compararlo con el temario. Puede dejarse algo que entra o incluir algo que ya no.
