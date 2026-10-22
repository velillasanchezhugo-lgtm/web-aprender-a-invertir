---
title: Automatiza tu semana
description: "Cómo detectar tus tareas repetidas y convertirlas en una plantilla, un proyecto, una habilidad o una tarea programada, según lo que necesite cada una."
level: basico
track: cla-avanzado
order: 703
skills: [cla-agentes, cla-plantillas, cla-proyectos]
terms: [tarea-programada, plantilla-de-prompt, proyecto-de-claude, habilidad-de-claude]
hook: "Cada lunes repites lo mismo con Claude: le explicas tu trabajo, pegas los datos y le pides el mismo resumen. ¿Cuál de sus herramientas te ahorra cada paso?"
takeaway: "Lo que repites tiene un sitio en Claude: la petición, en una plantilla; el contexto, en un proyecto; la forma de hacerlo, en una habilidad; y el «cuándo», en una tarea programada. Empieza por lo más simple."
scenario:
  kind: producto
  label: Caso práctico
  title: Los lunes de Jorge
  body: "Jorge es jefe de obra en Albacete. Cada lunes pedía a Claude un resumen de pendientes a partir de su correo y su calendario. Primero guardó la petición como plantilla. Después creó una tarea programada que se la prepara cada lunes a las 8:00. Revisa el resumen con el café antes de llamar al equipo."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-av03-q1
    q: "Cada vez que escribes sobre tu tesis tienes que volver a subir el índice y explicar el tema. ¿Qué te ahorra más trabajo?"
    options: ["Una tarea programada", "Un proyecto con el índice y unas instrucciones sobre la tesis", "Escribir la explicación más corta cada vez"]
    answer: 1
    explain: "Lo que repites es el contexto, y eso va en un proyecto: archivos e instrucciones que Claude tiene a mano en cada chat de ese tema. La tarea programada tienta por automática, pero sirve para el «cuándo», no para el contexto."
  - type: choice
    id: cla-av03-q2
    q: "Ana quiere que Claude le prepare cada viernes un resumen de noticias de su sector. Tiene un plan de pago. ¿Qué usa?"
    options: ["Una tarea programada semanal, revisando el resultado cada viernes", "Una habilidad, que se ejecuta sola cada semana", "Nada: Claude no puede hacer cosas sin que se lo pidas"]
    answer: 0
    explain: "Una tarea programada repite el encargo con la frecuencia que elijas. Una habilidad enseña cómo hacer algo, pero no decide cuándo. Y sí: en los planes de pago, Claude puede ejecutar tareas a horas fijas."
  - type: truefalse
    id: cla-av03-q3
    q: "Es buena idea que tu primera tarea programada responda sola a los correos de clientes cada mañana."
    answer: false
    explain: "Las tareas programadas trabajan sin que nadie las vigile en ese momento. El centro de ayuda aconseja empezar por tareas sencillas, sin datos sensibles ni acciones con consecuencias, como resúmenes que tú revisas."
tips:
  - "Antes de automatizar, haz la tarea a mano con Claude tres veces y ajusta la petición."
  - "Pausa o borra las tareas programadas que ya no uses."
action:
  title: Encuentra tu tarea repetida
  steps:
    - "Repasa tus chats de la última semana y apunta qué petición has hecho más de una vez."
    - "Decide qué la resuelve: plantilla, proyecto, habilidad o tarea programada."
    - "Crea la más simple de las cuatro y guárdala en «Mi kit de Claude»."
  check: He convertido una tarea repetida en una plantilla, un proyecto, una habilidad o una tarea programada
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda, claude-planes]
---

## La idea

Automatizar empieza por **detectar lo que repites**. Mira tu semana: ¿qué le pides a Claude una y otra vez? Según qué se repita, hay un sitio para cada cosa:

- **La misma petición** → una **plantilla**: un texto guardado con huecos para rellenar. Es lo más simple y sirve en cualquier plan.
- **El mismo contexto** (tu trabajo, tus documentos) → un **proyecto**: agrupa chats, archivos e instrucciones de un tema.
- **La misma forma de hacerlo** (un formato, unos pasos) → una **habilidad**, que Claude usa sola cuando encaja.
- **El mismo momento** (cada lunes, cada mañana) → una **tarea programada**: un encargo que Claude repite solo con la frecuencia que elijas (cada hora, cada día, en días laborables o cada semana).

Sobre las tareas programadas:

- Están en los **planes de pago**.
- Se ejecutan en la nube aunque tu ordenador esté apagado; las que usan archivos de tu ordenador necesitan la app de escritorio abierta.
- Pueden usar tus conectores y habilidades.
- Puedes **pausarlas, editarlas o borrarlas**.

Como nadie las vigila mientras trabajan, empieza por tareas **que preparen** (resúmenes, informes, búsquedas) y **revisa cada resultado**. Nada de enviar, pagar o borrar por su cuenta al principio.

## En la práctica

1. Haz la tarea a mano y mejora la petición hasta que salga bien.
2. Guárdala como plantilla.
3. Si se repite en fechas fijas, pide a Claude que la programe. Te propondrá nombre, frecuencia e instrucciones para que las revises.

> Prueba: «Quiero que cada lunes a las 8:00 revises mi calendario de la semana y los correos sin contestar de los últimos 7 días, y me prepares una lista de prioridades. No envíes ni cambies nada. Antes de programarlo, enséñame cómo quedaría la tarea.»

## Error frecuente

Automatizar una tarea que aún no sale bien a mano. Solo conseguirás el mismo error, cada semana.
