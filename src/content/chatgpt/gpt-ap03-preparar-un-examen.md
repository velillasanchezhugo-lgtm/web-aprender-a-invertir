---
title: Preparar un examen sin trampas
description: "Saca tests, tarjetas y un plan de estudio de tus apuntes con ChatGPT, sin salirte del temario oficial ni de las normas de tu centro."
level: basico
track: gpt-aprender
order: 503
skills: [gpt-aprender, gpt-etica-normas]
terms: [recuperacion-activa, plagio]
hook: "Faltan cuatro semanas para tus oposiciones y el temario tiene 600 páginas. ¿Cómo te ayuda ChatGPT sin estudiar lo que no entra ni meterte en líos?"
takeaway: "Pide que te pregunte a partir de tus apuntes y repite lo que fallas. El temario oficial manda, y lo que entregas lo haces tú, según las normas de tu centro."
scenario:
  kind: operacion
  label: Caso práctico
  title: Las oposiciones de Íñigo
  body: "Íñigo prepara oposiciones a auxiliar administrativo. Sube sus apuntes de la Constitución y pide diez preguntas tipo test basadas solo en ese texto. Falla tres y pide que se los explique. Luego pide un plan de repaso y, al compararlo con la convocatoria oficial, ve que incluye un tema que ya no entra."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-ap03-q1
    q: "Ainhoa estudia Geografía de 3.º de la ESO. ¿Qué petición le da preguntas más fiables?"
    options: ["«Hazme un test de Geografía de España»", "Subir sus apuntes y pedir: «Hazme diez preguntas tipo test usando solo este documento»", "«¿Qué preguntas van a caer en el examen?»"]
    answer: 1
    explain: "Con sus apuntes, las preguntas siguen lo que ella estudia. Sin documento, ChatGPT usa lo que sabe en general, que puede no coincidir con su temario. Y nadie puede saber qué caerá."
  - type: choice
    id: gpt-ap03-q2
    q: "Gloria ha hecho un test de diez preguntas con ChatGPT y ha fallado tres. ¿Qué le conviene más?"
    options: ["Pedir otro test de todo el tema", "Pedir que le explique los fallos y, en dos o tres días, un test solo con eso", "Releer el tema entero esa tarde"]
    answer: 1
    explain: "Volver a lo fallado tras unos días obliga a recordar justo lo débil: es recuperación activa. Releer tienta porque da sensación de dominio, pero no comprueba nada."
  - type: choice
    id: gpt-ap03-q3
    q: "Diego tiene que entregar un trabajo de su ciclo de FP y no sabe si puede usar ChatGPT. ¿Qué hace primero?"
    options: ["Usarlo sin decir nada", "Mirar las normas o preguntar al profesor, y si lo usa, decir para qué", "Pedirle el trabajo entero y cambiar algunas palabras"]
    answer: 1
    explain: "Cada centro pone sus normas. Callar tienta porque parece que no pasa nada, pero entregar como tuyo algo que no has hecho puede ser plagio y costarte el suspenso."
tips:
  - "Pide por qué es buena cada respuesta, no solo cuál: también se aprende de los aciertos."
  - "Si usas ChatGPT en un trabajo, apunta para qué (entender, revisar, practicar): te será fácil declararlo."
action:
  title: Cinco preguntas de tus apuntes
  steps:
    - "Pega o sube unos apuntes tuyos de clase, de un curso o del trabajo."
    - "Pide cinco preguntas tipo test sacadas solo de ese texto, de una en una, y contesta sin mirar."
    - "Pide la explicación de cada fallo y apunta el día en que repetirás lo fallado."
  check: He contestado cinco preguntas de mis apuntes y sé qué repetir
practice:
  task: "Tienes en PDF los apuntes del curso de prevención de riesgos laborales. Escribe la petición para que ChatGPT te haga tarjetas de repaso usando solo ese documento."
  require: [limites, formato]
  extra:
    - label: "Basarse en tu documento"
      any: ["documento", "apuntes", "pdf", "adjunto", "este texto", "temario", "el archivo", "lo que te paso"]
      hint: "Di de dónde deben salir: «usando solo lo que pone en el documento»."
    - label: "Pedir tarjetas o preguntas para repasar"
      any: ["tarjeta", "tarjetas", "test", "pregunta y respuesta", "preguntas tipo", "flashcard", "fichas"]
      hint: "Di qué quieres: «tarjetas con una pregunta y su respuesta»."
  sample: "Te adjunto el PDF de mis apuntes del curso de prevención de riesgos laborales que hago para trabajar en una obra. Hazme 15 tarjetas de repaso usando solo lo que pone en el documento: en una tabla, con una pregunta corta en una columna y la respuesta en otra, de una o dos líneas. No añadas nada que no esté en el texto. Al final, dime qué tres apartados son los más importantes para repasar."
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

Releer da sensación de saber, pero lo que más fija es la **recuperación activa**: obligarte a recordar sin mirar. ChatGPT fabrica muy bien esas preguntas.

A partir de **tus** apuntes puede hacerte **tests** corregidos, **tarjetas de repaso** (pregunta por un lado, respuesta por el otro), **un plan de estudio** hasta la fecha del examen y **otro test solo con lo que fallaste**.

Tres reglas para no llevarte sustos:

1. **Que parta de tu material.** Sin apuntes, pregunta lo que sabe en general, que puede no ser tu temario o estar desactualizado.
2. **El temario oficial manda.** La convocatoria o la guía de la asignatura deciden qué entra. Compara con ellas el plan de ChatGPT.
3. **Sin trampas.** Usarlo para entender y practicar está bien. Entregar como tuyo un trabajo hecho por la IA puede ser **plagio** (presentar como propio lo que no lo es). Mira las **normas de tu centro** y **declara** cómo lo has usado.

## En la práctica

1. Sube o pega tus apuntes (si vas a volver a menudo, en un proyecto por asignatura).
2. Pide preguntas basadas solo en ese texto y responde sin mirar.
3. Pide que te explique los fallos y repite lo fallado dos o tres días después.

> Prueba: «Te paso mis apuntes del tema [N]. Hazme diez preguntas tipo test usando solo este texto, de una en una. Espera a que conteste, corrígeme y explica cada fallo en dos frases. Si algo no está en los apuntes, no lo preguntes.»

Para el plan: «Mi examen es el [FECHA] y entran estos temas: [LISTA]. Tengo una hora al día. Propón un plan semanal con repasos de lo que más falle.»

## Error frecuente

Estudiar el resumen de ChatGPT sin compararlo con el temario: puede dejarse algo que entra o incluir algo que ya no.
