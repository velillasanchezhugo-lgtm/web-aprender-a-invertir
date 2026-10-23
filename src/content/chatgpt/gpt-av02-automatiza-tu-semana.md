---
title: Automatiza tu semana
description: "Cómo detectar lo que repites con ChatGPT y llevarlo a instrucciones, un proyecto, una plantilla, una tarea programada o el agente, empezando por lo que solo prepara."
level: basico
track: gpt-avanzado
order: 802
skills: [gpt-automatizar, gpt-instrucciones, gpt-proyectos-memoria]
terms: [instrucciones-personalizadas, proyecto-de-chatgpt, plantilla-de-prompt, tareas-programadas-chatgpt, agente-de-chatgpt]
hook: "Cada viernes abres ChatGPT, le explicas otra vez quién eres, pegas las notas de la semana y le pides el mismo boletín. ¿Qué parte de eso podría quedar ya hecha?"
takeaway: "Cada cosa que repites tiene su sitio: cómo quieres que te responda, en instrucciones; el contexto de un tema, en un proyecto; una tarea concreta, en una plantilla; el «cuándo», en una tarea programada. Empieza por lo que solo prepara."
scenario:
  kind: producto
  label: Caso práctico
  title: El boletín de Inma
  body: "Inma es la secretaria del AMPA de un colegio de Zaragoza. Cada viernes escribía con ChatGPT el boletín para las familias. Primero creó un proyecto con el calendario escolar y unas instrucciones de estilo. Después programó una tarea para que cada jueves por la tarde le prepare un borrador. Ella lo revisa y lo envía."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-av02-q1
    q: "Iván es profesor de FP y en cada chat empieza igual: «Soy profesor, respóndeme corto y con ejemplos de taller». ¿Qué le ahorra más?"
    options: ["Una tarea programada que se lo recuerde cada mañana", "Ponerlo en sus instrucciones personalizadas", "Crear un proyecto nuevo para cada asignatura"]
    answer: 1
    explain: "Lo que repite es cómo quiere que le respondan siempre, y para eso están las instrucciones personalizadas: se aplican a todos sus chats. La tarea programada tienta por automática, pero sirve para el «cuándo», no para el estilo."
  - type: choice
    id: gpt-av02-q2
    q: "Nuria busca trabajo de administrativa y quiere ayuda cada mañana. ¿Qué encargo automatiza primero?"
    options: ["Que el agente envíe su currículum a todas las ofertas nuevas", "Una tarea programada que le prepare un resumen de ofertas publicadas en su zona, que ella revisa", "Ninguno: ChatGPT no puede hacer nada sin que se lo pidas"]
    answer: 1
    explain: "Un resumen solo prepara: si sale mal, no pasa nada. Enviar candidaturas sola tienta por cómodo, pero un error llega a una empresa con su nombre. Y sí: las tareas programadas repiten un encargo a la hora que elijas."
  - type: truefalse
    id: gpt-av02-q3
    q: "Si creas una tarea programada dentro de un proyecto con archivos, la tarea puede leer esos archivos."
    answer: false
    explain: "Según el centro de ayuda de OpenAI, una tarea creada en un proyecto no accede a sus archivos. Si la tarea los necesita, pon lo esencial en la propia petición."
tips:
  - "Antes de automatizar, haz la tarea a mano tres veces y ajusta la petición hasta que salga bien."
  - "Pausa o borra las tareas programadas que ya no lees."
action:
  title: Encuentra tu tarea repetida
  steps:
    - "Repasa tus chats de la última semana y apunta una petición que hayas hecho más de una vez."
    - "Decide dónde va: instrucciones, proyecto, plantilla o tarea programada."
    - "Crea la opción más sencilla y apunta en «Mi kit de ChatGPT» qué es y dónde está."
  check: He llevado una tarea repetida a instrucciones, un proyecto, una plantilla o una tarea programada
practice:
  task: "Cada viernes escribes el boletín del AMPA con las novedades de la semana. Escribe la petición para convertirlo en una tarea programada que solo prepare un borrador para que tú lo revises."
  require: [formato, limites]
  extra:
    - label: Decir cuándo se repite
      any: [cada, semanal, todos los, a las]
      hint: "Di la frecuencia y la hora: «cada jueves a las 18:00»."
    - label: Que solo prepare un borrador
      any: [borrador, solo prepara, no lo envíes, no envíes]
      hint: "Deja claro que solo prepara un borrador y que el envío lo haces tú."
  sample: "Cada jueves a las 18:00, prepárame un borrador del boletín del AMPA para las familias del colegio. Busca en el calendario escolar que te pego abajo las actividades y fechas de la semana siguiente y redáctalo en un tono cercano, con un titular y como máximo 5 puntos breves. Solo prepara el borrador: no lo envíes ni lo publiques. Si alguna fecha no está clara, márcala para que la revise."
deeper: null
tool: plantillas
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-planes]
---

## La idea

Si haces lo mismo con ChatGPT cada semana, una parte se puede **dejar hecha**. Primero, mira **qué repites** exactamente:

- **Cómo quieres que te responda** (quién eres, el tono, la longitud) → **instrucciones personalizadas**: se aplican a todos tus chats.
- **El contexto de un tema** (documentos, notas, reglas de ese asunto) → un **proyecto**: lo tienes a mano en cada chat de ese tema.
- **Una tarea concreta que haces igual** (corregir textos con tu estilo, preparar presupuestos) → una **plantilla**: la petición ya probada, guardada en tu kit con huecos para rellenar. Antes se usaban los GPTs propios, pero en las cuentas personales ya no se pueden crear nuevos.
- **El «cuándo»** (cada lunes, cada mañana) → una **tarea programada**: ChatGPT ejecuta el encargo solo a la hora que elijas y te avisa.
- **Varios pasos en webs o apps** → el **agente**, siempre supervisado.

Las tareas programadas y el agente dependen del plan: compruébalo en la página de planes.

La regla más importante: **empieza por tareas que solo preparan**. Un resumen, un borrador, una lista. Si salen mal, lo ves y no pasa nada. Lo que **envía, compra, publica o borra** déjalo para cuando confíes en el resultado, y siempre con tu aprobación.

Y usa **lo más sencillo que funcione**: una plantilla antes que un proyecto, una petición a mano antes que una tarea programada.

## En la práctica

1. Haz la tarea a mano hasta que la petición salga bien.
2. Decide qué parte repites: el estilo, el contexto, la tarea o el «cuándo».
3. Llévala al sitio que toca.
4. Revisa el resultado las primeras semanas.

Para una tarea programada, pídeselo en un chat o desde su apartado propio, y di la frecuencia y la hora.

> Prueba: «Cada lunes a las 8:00, busca las ayudas al alquiler para jóvenes con plazo abierto en [MI COMUNIDAD AUTÓNOMA] y resúmelas en una tabla con nombre, plazo y enlace a la web oficial. Solo prepáralo: no rellenes ni envíes nada. Si no encuentras novedades, dímelo en una línea.»

## Error frecuente

Automatizar una tarea que aún no te sale bien a mano. Lo único que consigues es repetir el error cada semana.
