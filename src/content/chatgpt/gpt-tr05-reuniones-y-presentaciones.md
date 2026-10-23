---
title: Reuniones y presentaciones
description: "Cómo preparar con ChatGPT una reunión o una presentación, ensayar en voz alta las preguntas difíciles y sacar un acta sin acuerdos inventados."
level: basico
track: gpt-trabajo
order: 405
skills: [gpt-pensar, gpt-escribir, gpt-privacidad]
terms: [orden-del-dia, acta-de-reunion, modo-de-voz, datos-personales]
hook: "Mañana presentas una propuesta en diez minutos. La última vez te quedaste en blanco con la primera pregunta."
takeaway: "Antes, ChatGPT te ayuda a ordenar los temas y a ensayar las preguntas incómodas, también hablando. Después, convierte tus notas en un acta que revisas antes de enviarla."
scenario:
  kind: operacion
  label: Caso práctico
  title: La reunión de Dolores
  body: "Dolores coordina la enfermería de un centro de salud y tiene 30 minutos para explicar el nuevo sistema de citas. Pide un orden del día y ensaya con el modo de voz las dudas más probables. Después pega sus notas, sin datos de pacientes, y pide el acta. Entre los acuerdos aparece «se amplía el horario de tarde», algo que se habló pero nadie aprobó. Lo pasa a «temas abiertos»."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-tr05-q1
    q: "Iker es encargado de una tienda de muebles y tiene que presentar a su jefa los resultados de las rebajas en cinco minutos. ¿Qué petición le ayuda más?"
    options: ["«Hazme una presentación sobre las rebajas.»", "«Escribe un discurso largo para impresionar a mi jefa.»", "«Tengo 5 minutos para contar a mi jefa las rebajas: ventas +12 %, más devoluciones y falta de sofás. Propón 4 diapositivas con título y tres frases, y las 3 preguntas que probablemente me hará.»"]
    answer: 2
    explain: "La tercera da tiempo, público, datos y formato, y prepara las preguntas. La primera tienta por sencilla, pero ChatGPT tendría que inventarse los resultados."
  - type: truefalse
    id: gpt-tr05-q2
    q: "Si usas ChatGPT para grabar o transcribir una reunión solo para ti, no hace falta avisar a los demás."
    answer: false
    explain: "Grabar a otras personas exige avisarles y tener su permiso; el centro de ayuda de OpenAI también lo pide. Que sea «solo para ti» no cambia que tratas sus datos."
  - type: choice
    id: gpt-tr05-q3
    q: "En el acta que ha hecho ChatGPT pone «Ana enviará el presupuesto el viernes». En tus notas no hay fecha. ¿Qué haces?"
    options: ["La dejo: el viernes parece razonable", "La cambio por «sin fecha» y pregunto a Ana antes de enviar el acta", "Borro esa tarea para no liarla"]
    answer: 1
    explain: "ChatGPT a veces rellena huecos con algo que suena bien. Dejar la fecha tienta porque parece lógica, pero Ana recibirá un plazo que no aceptó. Borrar la tarea pierde un acuerdo real."
tips:
  - "Ensaya en voz alta con el modo de voz: notarás dónde te trabas."
  - "Pide el acta en dos bloques, «acuerdos» y «temas abiertos», para que lo hablado no pase por decidido."
action:
  title: Del cuaderno al acta
  steps:
    - "Busca las notas de tu última reunión y cambia los nombres por iniciales o cargos."
    - "Pégalas en ChatGPT y pide acuerdos, temas abiertos y una tabla de tareas con responsable y fecha, sin inventar nada."
    - "Comprueba cada tarea con tus notas y guarda la petición en «Mi kit de ChatGPT»."
  check: He convertido unas notas en un acta con tareas y la he revisado antes de enviarla
practice:
  task: "Sales de la reunión semanal de tu tienda de deportes con notas desordenadas. Escribe la petición para que ChatGPT saque el acta y las tareas sin inventar nada."
  require: [formato, limites]
  extra:
    - label: Pedir responsable y fecha de cada tarea
      any: [responsable, quien, encargado, fecha, plazo, para cuando]
      hint: "Pide una tabla con tarea, responsable y fecha límite."
  sample: "Tengo una tienda de deportes y estas son mis notas de la reunión semanal [pego las notas]. Hazme un acta corta con dos apartados, acuerdos y temas abiertos, y una tabla con tarea, responsable y fecha límite. No inventes nada que no esté en las notas: si falta un responsable o una fecha, escribe «sin asignar»."
deeper: null
tool: constructor-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, aepd-guias]
---

## La idea

ChatGPT te ayuda en tres momentos:

1. **Preparar.** Le cuentas el objetivo, quién va a estar y cuánto dura, y te propone un **orden del día**: la lista de temas, en orden y con tiempos. Para una presentación, te sugiere qué poner en cada diapositiva.
2. **Ensayar.** Le pides que haga de la persona más difícil de la sala. Con el **modo de voz**, que permite hablar con ChatGPT como en una llamada, ensayas tal como lo dirás.
3. **Cerrar.** Pegas tus notas y te devuelve un **acta**: el resumen escrito de lo que se decidió, con tareas, responsable y fecha.

Dos cuidados:

- **Revisa el acta antes de enviarla.** ChatGPT a veces rellena huecos: una fecha, un responsable, un acuerdo que nadie cerró. Lo que no está en tus notas, fuera.
- **Cuidado con lo que pegas.** Salud, sanciones o clientes: quítalo o generalízalo. Son **datos personales** de otros.

En algunos planes de pago, la app de escritorio de ChatGPT puede **grabar una reunión y resumirla**. Mira en el centro de ayuda si está en tu plan, pide permiso a todos antes de grabar y revisa la transcripción: también se equivoca.

## En la práctica

1. **Prepara:** objetivo, asistentes, duración y lo que te preocupa.
2. **Ensaya:** pide las preguntas una a una, responde tú y pide opinión sobre cada respuesta.
3. **Cierra:** notas, acta con acuerdos y temas abiertos, y la regla de no inventar.

> Prueba: «El martes tengo 15 minutos con el comité de mi empresa para proponer que el almacén cierre a las 18:00 los viernes. Haz de la persona más escéptica del comité. Hazme tus preguntas una a una, espera mi respuesta y, al final, dime qué respuesta me ha salido peor y cómo la mejorarías.»

## Error frecuente

Enviar el acta tal como sale, con fechas o acuerdos que nadie aprobó.
