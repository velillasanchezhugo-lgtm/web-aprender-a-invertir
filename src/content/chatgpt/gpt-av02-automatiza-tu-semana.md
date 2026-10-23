---
title: Lo que repites, en su sitio
description: "Cómo detectar lo que repites con ChatGPT y llevarlo a instrucciones, un proyecto, una plantilla, una tarea programada o ChatGPT Work, empezando por lo que solo prepara."
level: basico
track: gpt-avanzado
order: 802
skills: [gpt-automatizar, gpt-instrucciones, gpt-proyectos-memoria]
terms: [instrucciones-personalizadas, proyecto-de-chatgpt, plantilla-de-prompt, tareas-programadas-chatgpt, agente-de-chatgpt]
hook: "Es jueves por la noche, mañana toca enviar el aviso semanal a las familias y vuelves a empezar de cero: buscar las fechas, recordarle a ChatGPT el tono, corregir lo de siempre. ¿Y si el borrador te estuviera esperando?"
takeaway: "Antes de automatizar, mira qué repites: si es cómo quieres que te responda, un tema con sus documentos, una petición o una hora fija, cada cosa tiene su herramienta. Y empieza por encargos que solo preparan y revisas tú."
scenario:
  kind: producto
  label: Caso práctico
  title: El aviso de los scouts de Inma
  body: "Inma coordina un grupo scout de Ponferrada y cada viernes envía a las familias el aviso de la semana. Lo hizo a mano con ChatGPT tres semanas, hasta tener una petición que salía bien. Después la convirtió en una tarea programada para los jueves, con el calendario pegado en la propia petición. Ella revisa el borrador, corrige alguna hora y lo envía."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-av02-q1
    q: "Fausto es profesor de FP y en cada chat empieza igual: «Soy profesor, respóndeme corto y con ejemplos de taller». ¿Qué le ahorra más?"
    options: ["Una tarea programada que se lo recuerde cada mañana", "Crear un proyecto nuevo para cada asignatura", "Ponerlo en sus instrucciones personalizadas"]
    answer: 2
    explain: "Lo que repite es cómo quiere que le respondan siempre, y para eso están las instrucciones personalizadas: se aplican a todos sus chats. La tarea programada tienta por automática, pero sirve para el «cuándo», no para el estilo."
  - type: choice
    id: gpt-av02-q2
    q: "Edurne busca trabajo de administrativa y quiere ayuda cada mañana. ¿Qué encargo automatiza primero?"
    options: ["Una tarea programada que le prepare un resumen de ofertas publicadas en su zona, que ella revisa", "Que ChatGPT Work envíe su currículum a todas las ofertas nuevas", "Ninguno: ChatGPT no puede hacer nada sin que se lo pidas"]
    answer: 0
    explain: "Un resumen solo prepara: si sale mal, no pasa nada. Enviar candidaturas sola tienta por cómodo, pero un error llega a una empresa con su nombre. Y sí: las tareas programadas repiten un encargo a la hora que elijas."
  - type: truefalse
    id: gpt-av02-q3
    q: "Para que ChatGPT recuerde las normas y documentos de un solo tema, como tu reforma de casa, lo mejor es ponerlos en tus instrucciones personalizadas."
    answer: false
    explain: "Las instrucciones personalizadas se aplican a todos tus chats, así que mezclarías la reforma con todo lo demás. Tienta porque es lo más rápido, pero lo de un solo tema va en un proyecto, con sus archivos y sus instrucciones."
tips:
  - "Empieza con una frecuencia baja, por ejemplo semanal, y súbela solo si de verdad lees el resultado."
action:
  title: Dale su sitio a una petición repetida
  steps:
    - "Busca en tu historial una petición que hayas escrito más de una vez esta semana."
    - "Pregúntate qué repites: el estilo, el contexto, la petición o el «cuándo»."
    - "Guárdala en el sitio que toca, con la opción más sencilla, y apunta en «Mi kit de ChatGPT» qué has creado y dónde."
  check: He llevado una petición repetida a instrucciones, un proyecto, una plantilla o una tarea programada
practice:
  task: "Cada viernes envías a las familias del grupo scout el aviso de la semana. Escribe la petición para convertirlo en una tarea programada que solo prepare un borrador para que tú lo revises."
  require: [formato, limites]
  extra:
    - label: Decir cuándo se repite
      any: [cada, semanal, todos los, a las]
      hint: "Di la frecuencia y el momento: «cada jueves por la tarde»."
    - label: Que solo prepare un borrador
      any: [borrador, solo prepara, no lo envíes, no envíes]
      hint: "Deja claro que solo prepara un borrador y que el envío lo haces tú."
  sample: "Cada jueves por la tarde, prepárame un borrador del aviso semanal para las familias de mi grupo scout. Toma del calendario de actividades que te pego abajo las salidas y reuniones de la semana siguiente y redáctalo en un tono cercano, con un titular y como máximo 5 puntos breves con día, hora y lugar. Solo prepara el borrador: no lo envíes ni lo publiques. Si alguna fecha no está clara, márcala para que la revise."
deeper: null
tool: plantillas
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-23
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-planes]
---

## La idea

Si haces lo mismo con ChatGPT cada semana, una parte se puede **dejar hecha**. Primero, mira **qué repites** exactamente:

- **Cómo quieres que te responda** (quién eres, el tono, la longitud) → **instrucciones personalizadas**: se aplican a todos tus chats.
- **El contexto de un tema** (documentos, notas, reglas de ese asunto) → un **proyecto**: lo tienes a mano en cada chat de ese tema.
- **Una tarea concreta que haces igual** (corregir textos con tu estilo, preparar presupuestos) → una **plantilla**: la petición ya probada, guardada en tu kit con huecos para rellenar. Antes se usaban los GPTs propios, pero en las cuentas personales ya no se pueden crear nuevos.
- **El «cuándo»** (cada lunes, cada mañana) → una **tarea programada**: ChatGPT ejecuta el encargo solo, con la frecuencia que elijas, y te avisa.
- **Varios pasos en webs o apps** → **ChatGPT Work**, que sustituye al antiguo agente, siempre supervisado.

Las tareas programadas están en todos los planes, también el gratis, con menos opciones de frecuencia y hora en los más básicos.

La regla más importante: **empieza por tareas que solo preparan**. Un resumen, un borrador, una lista. Si salen mal, lo ves y no pasa nada. Lo que **envía, compra, publica o borra** déjalo para cuando confíes en el resultado, y siempre con tu aprobación.

## En la práctica

1. Haz la tarea a mano hasta que la petición salga bien.
2. Decide qué parte repites: el estilo, el contexto, la tarea o el «cuándo».
3. Llévala al sitio que toca.
4. Revisa el resultado las primeras semanas.

Para una tarea programada, pídeselo en un chat o desde su apartado propio de la barra lateral, y di la frecuencia y el momento. Escribe en la petición todo lo que necesita: no verá los archivos de tus proyectos.

> Prueba: «El día 1 de cada mes, prepárame la lista de los recibos que me cobran ese mes a partir de esta tabla: [PEGA TUS RECIBOS, SIN NÚMEROS DE CUENTA]. Ordénalos por fecha, con el importe aproximado, y marca los que suelen cambiar de precio para que los mire en el banco. Solo prepáralo: no entres en ninguna web ni pagues nada.»

## Error frecuente

Automatizar una tarea que aún no te sale bien a mano. Lo único que consigues es repetir el error cada semana.
