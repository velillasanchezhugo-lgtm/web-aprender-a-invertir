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
  title: El plan de Darío
  body: "Darío prepara oposiciones a celador. Pega en ChatGPT la lista de temas de la convocatoria y pide un plan de cuatro semanas con una hora al día. Cada tarde pide tarjetas de repaso del tema del día, sacadas de sus apuntes. En la segunda semana nota que los primeros temas ya no los repasa y pide rehacer el plan con un test de repaso cada domingo."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-ap03-q1
    q: "Ainhoa tiene tres tardes antes del examen de Geografía de 3.º de la ESO. ¿Qué uso de ChatGPT le hará recordar más?"
    options: ["Pedir un resumen del tema y releerlo tres veces", "Pedir un esquema con colores para tenerlo más claro", "Pedir que le pregunte sin mirar los apuntes y, al día siguiente, repetir lo que falló"]
    answer: 2
    explain: "Obligarse a recordar es recuperación activa, y volver a lo fallado fija justo lo débil. Releer tienta porque da sensación de dominio, pero no comprueba si sabrías contestarlo."
  - type: choice
    id: gpt-ap03-q2
    q: "Gloria pide un plan de estudio y ChatGPT le reparte doce temas en cuatro semanas. Su convocatoria tiene catorce. ¿Qué hace?"
    options: ["Seguir el plan: si ChatGPT ha puesto doce, serán los importantes", "Pegar la lista oficial de temas y pedir que rehaga el plan con todos", "Añadir los dos que faltan al final, si le da tiempo"]
    answer: 1
    explain: "Sin la lista oficial, ChatGPT adivina qué entra. Fiarse tienta porque el plan parece completo y bien ordenado, pero la convocatoria es la que manda."
  - type: choice
    id: gpt-ap03-q3
    q: "Diego tiene que entregar un trabajo de su ciclo de FP y no sabe si puede usar ChatGPT. ¿Qué hace primero?"
    options: ["Mirar las normas o preguntar al profesor, y si lo usa, decir para qué", "Usarlo sin decir nada", "Pedirle el trabajo entero y cambiar algunas palabras"]
    answer: 0
    explain: "Cada centro pone sus normas. Callar tienta porque parece que no pasa nada, pero entregar como tuyo algo que no has hecho puede ser plagio y costarte el suspenso."
tips:
  - "Pide por qué es buena cada respuesta, no solo cuál: también se aprende de los aciertos."
  - "Si usas ChatGPT en un trabajo, apunta para qué (entender, revisar, practicar): te será fácil declararlo."
action:
  title: Cinco preguntas de tus apuntes
  steps:
    - "Pega o sube unos apuntes tuyos de clase, de un curso o del trabajo."
    - "Pide cinco preguntas sacadas solo de ese texto, de una en una, y contesta sin mirar."
    - "Pide la explicación de cada fallo y apunta el día en que repetirás lo fallado."
  check: He contestado cinco preguntas de mis apuntes y sé qué repetir
practice:
  task: "Te examinas del título de patrón de embarcaciones de recreo (PER) dentro de seis semanas y tienes la lista oficial de temas. Escribe la petición para que ChatGPT te haga un plan de estudio con repasos."
  require: [contexto, formato]
  extra:
    - label: "Decir cuánto tiempo tienes"
      any: ["semanas", "semana", "dias", "hora al dia", "horas", "minutos", "cada dia", "fecha", "el examen es"]
      hint: "Di cuándo es el examen y cuánto tiempo tienes: «dentro de seis semanas, una hora al día»."
    - label: "Pedir repasos"
      any: ["repaso", "repasos", "repasar", "repetir", "lo que falle", "fallos", "test"]
      hint: "Pide huecos para repasar: «un test cada domingo con lo de la semana»."
  sample: "Me examino del PER (patrón de embarcaciones de recreo) dentro de seis semanas y tengo una hora al día entre semana. Te pego la lista oficial de temas del examen. Hazme un plan semanal en una tabla con el tema de cada día, usando solo esa lista. Deja el domingo para repasar con un test de 10 preguntas de lo visto en la semana y marca qué temas son los más largos. No añadas temas que no estén en la lista."
deeper: null
tool: plantillas
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-23
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
3. **Sin trampas.** Entender y practicar, bien. Entregar como tuyo un trabajo hecho por la IA puede ser **plagio** (presentar como propio lo que no lo es). Mira las **normas de tu centro** y **declara** cómo lo has usado.

## En la práctica

1. Sube o pega tus apuntes (si vas a volver a menudo, en un proyecto por asignatura).
2. Pide tarjetas o preguntas basadas solo en ese texto y responde sin mirar.
3. Repite lo fallado dos o tres días después.

> Prueba: «Con mis apuntes del tema [N], que te pego abajo, hazme 15 tarjetas de repaso en una tabla: pregunta corta en una columna y respuesta de una línea en otra. Usa solo lo que pone en el texto. Después pregúntame cinco al azar, sin enseñarme la respuesta, y dime cuáles debo repetir el [DÍA].»

Para el plan: «Mi examen es el [FECHA] y entran estos temas: [LISTA]. Tengo una hora al día. Propón un plan semanal con repasos.»

## Error frecuente

Pedir el plan sin pegar la lista oficial de temas. ChatGPT rellena con lo que suele entrar en exámenes parecidos, y puede dejarse justo lo que te van a preguntar.
