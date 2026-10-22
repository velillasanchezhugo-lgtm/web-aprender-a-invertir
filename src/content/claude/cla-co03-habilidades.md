---
title: "Las habilidades: enséñale tu forma de hacer"
description: "Qué son las habilidades (Skills) de Claude, cuáles trae ya, cómo crear una propia conversando, sin programar, y qué revisar antes de activarla."
level: basico
track: cla-conectar
order: 503
skills: [cla-habilidades, cla-plantillas]
terms: [habilidad-de-claude]
hook: "Cada mes le explicas a Claude, otra vez, cómo quieres el informe de ventas: el formato, el tono, las columnas. ¿Y si lo aprendiera de una vez?"
takeaway: Una habilidad guarda una forma de trabajar (instrucciones, ejemplos y archivos) que Claude usa sola cuando la necesita. Puedes crearla hablando con Claude y conviene instalar solo las de fuentes de confianza.
scenario:
  kind: producto
  label: Caso práctico
  title: El acta de Rocío
  body: "Rocío es secretaria de una comunidad de vecinos en Cádiz. Cada reunión redacta un acta con la misma estructura. Le pide a Claude que la entreviste sobre cómo la hace, le sube dos actas antiguas y Claude crea una habilidad. En la siguiente reunión, solo pega sus notas y el acta sale con su formato."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-co03-q1
    q: "Pides a Claude una presentación de resultados y no usa la habilidad de presentaciones. ¿Qué es lo primero que revisas?"
    options: ["Que tengas activada la ejecución de código en los ajustes", "Que hayas escrito la palabra «Skill» en la petición", "Que tengas el plan más caro"]
    answer: 0
    explain: "Las habilidades necesitan la ejecución de código activada. No hace falta nombrarlas: Claude elige la que encaja. Tienta pensar que es cosa del plan, pero están en todos, también en el gratuito."
  - type: choice
    id: cla-co03-q2
    q: "Un compañero te pasa una habilidad que «lo automatiza todo». ¿Qué haces antes de activarla?"
    options: ["Activarla: si se la ha pasado alguien del trabajo, es segura", "Abrirla y revisar sus instrucciones y si incluye código o se conecta a sitios externos", "Activarla y borrarla si algo va mal"]
    answer: 1
    explain: "Una habilidad puede llevar instrucciones o código que hagan algo que no esperas, como enviar datos fuera. El centro de ayuda pide revisarla antes. Tienta fiarse por venir de un conocido, pero él también pudo bajarla de cualquier sitio."
  - type: truefalse
    id: cla-co03-q3
    q: "Para crear una habilidad propia hace falta saber programar."
    answer: false
    explain: "Puedes crearla conversando: describes tu proceso, respondes a las preguntas de Claude y él prepara el archivo de la habilidad. Después la guardas y la activas."
tips:
  - "Empieza por una tarea que repitas cada semana con el mismo formato: es la que más rinde."
  - "Sube uno o dos ejemplos buenos de cómo lo haces tú; valen más que muchas explicaciones."
  - "Si una habilidad hace algo mal, pídele a Claude que la actualice en vez de empezar de cero."
action:
  title: Crea tu primera habilidad
  steps:
    - "Comprueba en los ajustes que la ejecución de código está activada."
    - "Abre un chat nuevo y pega la petición de ejemplo, cambiando la tarea por una tuya."
    - "Responde a sus preguntas, guarda la habilidad y actívala en la sección de habilidades."
    - "Pruébala con un caso real y anota en «Mi kit de Claude» para qué sirve."
  check: He creado o activado una habilidad y la he probado
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda, anthropic-academy]
---

## La idea

Una **habilidad** (en inglés, *Skill*) es un paquete con **instrucciones, ejemplos y, a veces, pequeños programas** que enseña a Claude a hacer una tarea concreta. Claude la carga **solo cuando la petición la necesita**, así que puedes tener varias sin que estorben.

Hay dos tipos:

- **De Anthropic:** para crear hojas de cálculo de Excel, documentos de Word, presentaciones de PowerPoint y PDF. No las nombras: si pides «hazme una presentación», Claude usa la que toca.
- **Propias:** las que creas tú (o tu empresa) para tu forma de trabajar: tus actas, tus informes, el estilo de tu marca.

¿En qué se diferencian de un proyecto o de unas instrucciones? Un proyecto agrupa chats y archivos de un tema. Una habilidad es una **receta** que Claude puede usar en cualquier chat cuando encaja.

Lo que conviene saber:

- Están en **todos los planes**, también en el gratuito.
- Necesitan la **ejecución de código** activada en los ajustes.
- **No hace falta programar** para crear una: Claude te entrevista y la prepara.
- Instala solo las de **fuentes de confianza** y revisa las que te pasen.

## En la práctica

1. Abre un chat nuevo y di qué habilidad quieres.
2. Sube ejemplos de cómo lo haces tú (una plantilla, un documento bueno).
3. Responde a sus preguntas con detalle, como si se lo explicaras a alguien nuevo.
4. Claude prepara el archivo de la habilidad: guárdalo y actívalo en la sección de habilidades.
5. Pruébala y, si algo falla, pídele que la ajuste.

> Prueba: «Quiero crear una habilidad para redactar el resumen semanal que envío a mi equipo. Te adjunto dos resúmenes que me gustaron. Hazme las preguntas que necesites sobre el formato, el tono y lo que nunca debe faltar, y luego prepara la habilidad.»

## Error frecuente

Crear una habilidad enorme que «lo haga todo». Funciona mejor una por tarea, corta y con ejemplos.
