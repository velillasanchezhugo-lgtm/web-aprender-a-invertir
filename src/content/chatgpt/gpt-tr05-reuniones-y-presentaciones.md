---
title: Reuniones y presentaciones
description: "Cómo preparar con ChatGPT una reunión o una presentación, ensayar en voz alta las preguntas difíciles y convertir tus notas en un acta sin acuerdos inventados."
level: basico
track: gpt-trabajo
order: 405
skills: [gpt-pensar, gpt-escribir, gpt-privacidad]
terms: [orden-del-dia, acta-de-reunion, modo-de-voz, datos-personales]
hook: "Mañana presentas una propuesta en diez minutos. La última vez te quedaste en blanco con la primera pregunta."
takeaway: "Antes, ChatGPT te ayuda a ordenar los temas y a ensayar las preguntas incómodas, también hablando. Después, convierte tus notas en un acta que revisas línea a línea antes de enviarla."
scenario:
  kind: operacion
  label: Caso práctico
  title: La reunión de Dolores
  body: "Dolores coordina la enfermería de un centro de salud y tiene 30 minutos para explicar al equipo el nuevo sistema de citas. Pide un orden del día con tiempos y ensaya con el modo de voz las cinco dudas que más le van a plantear. Después pega sus notas, sin nombres de pacientes, y pide el acta. Entre los acuerdos aparece «se amplía el horario de tarde», algo que se habló pero nadie aprobó. Lo pasa a «temas abiertos» antes de enviarla."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-tr05-q1
    q: "Iker es encargado de una tienda de muebles y tiene que presentar a su jefa los resultados de las rebajas en cinco minutos. ¿Qué petición le ayuda más?"
    options: ["«Hazme una presentación sobre las rebajas.»", "«Tengo 5 minutos para contar a mi jefa cómo fueron las rebajas: ventas +12 %, más devoluciones y falta de sofás. Propón 4 diapositivas con un título y tres frases cada una, y las 3 preguntas que probablemente me hará.»", "«Escribe un discurso largo para impresionar a mi jefa.»"]
    answer: 1
    explain: "La segunda da el tiempo, el público, los datos y el formato, y prepara las preguntas. La primera tienta por sencilla, pero ChatGPT tendría que inventarse los resultados. Un discurso largo no cabe en cinco minutos."
  - type: truefalse
    id: gpt-tr05-q2
    q: "Si usas ChatGPT para grabar o transcribir una reunión solo para ti, no hace falta avisar a los demás."
    answer: false
    explain: "Grabar la voz de otras personas exige avisarles y tener su permiso, y el propio centro de ayuda de OpenAI lo pide. Que sea «solo para ti» no cambia que estás tratando sus datos."
  - type: choice
    id: gpt-tr05-q3
    q: "En el acta que ha hecho ChatGPT pone «Ana enviará el presupuesto el viernes». En tus notas no hay fecha. ¿Qué haces?"
    options: ["La dejo: el viernes parece razonable", "La cambio por «sin fecha» y pregunto a Ana antes de enviar el acta", "Borro esa tarea para no liarla"]
    answer: 1
    explain: "ChatGPT tiende a completar huecos con algo que suena bien. Dejar la fecha tienta porque parece lógica, pero Ana recibirá un plazo que no aceptó. Borrar la tarea pierde un acuerdo real."
tips:
  - "Ensaya de pie y en voz alta: con el modo de voz notas enseguida dónde te trabas, algo que escribiendo no ves."
  - "Pide el acta en dos bloques, «acuerdos» y «temas abiertos». Así lo que solo se habló no se cuela como decidido."
action:
  title: Del cuaderno al acta
  steps:
    - "Busca las notas de tu última reunión, clase o junta. Cambia los nombres de personas ajenas por iniciales o cargos."
    - "Pégalas en ChatGPT y pide acuerdos, temas abiertos y una tabla de tareas con responsable y fecha, sin inventar nada."
    - "Comprueba cada tarea con tus notas y guarda la petición en «Mi kit de ChatGPT»."
  check: He convertido unas notas en un acta con tareas y la he revisado antes de enviarla
practice:
  task: "Acabas de salir de la reunión semanal de tu tienda de deportes con tus notas desordenadas. Escribe la petición para que ChatGPT saque el acta con las tareas, sin inventar nada."
  require: [formato, limites]
  extra:
    - label: Pedir responsable y fecha de cada tarea
      any: [responsable, quien, encargado, fecha, plazo, para cuando]
      hint: "Pide una tabla con tarea, responsable y fecha límite."
  sample: "Tengo una tienda de deportes y estas son mis notas de la reunión semanal con mi equipo de cinco personas [pego las notas]. Hazme un acta corta para enviarla por correo con dos apartados: acuerdos y temas abiertos. Después, una tabla con tarea, responsable y fecha límite. No inventes nada que no esté en las notas: si falta un responsable o una fecha, escribe «sin asignar»."
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
2. **Ensayar.** Le pides que haga de la persona más difícil de la sala y te pregunte. Con el **modo de voz**, que permite hablar con ChatGPT en voz alta como en una llamada, ensayas tal como lo dirás.
3. **Cerrar.** Pegas tus notas y te devuelve un **acta**: el resumen escrito de lo que se decidió, con tareas, responsable y fecha.

Dos cuidados:

- **Revisa el acta antes de enviarla.** ChatGPT a veces rellena huecos: una fecha, un responsable, un acuerdo que nadie cerró. Lo que no está en tus notas, fuera.
- **Cuidado con lo que pegas.** Si se habló de la salud de alguien, de una sanción o de clientes, quítalo o generalízalo. Son **datos personales** de otros.

En algunos planes de pago, la app de escritorio de ChatGPT puede **grabar una reunión y resumirla**. Mira en el centro de ayuda si está en tu plan, pide permiso a todos antes de grabar y revisa la transcripción: también se equivoca.

## En la práctica

1. **Prepara:** objetivo, asistentes, duración y lo que te preocupa.
2. **Ensaya:** pide las preguntas una a una, responde tú y pide opinión sobre cada respuesta.
3. **Cierra:** notas, acta con acuerdos y temas abiertos, y la regla de no inventar.

> Prueba: «El martes tengo 15 minutos con el comité de mi empresa para proponer que el almacén cierre a las 18:00 los viernes. Haz de la persona más escéptica del comité. Hazme tus preguntas una a una, espera mi respuesta y, al final, dime qué respuesta me ha salido peor y cómo la mejorarías.»

## Error frecuente

Enviar el acta tal como sale, con fechas o acuerdos que nadie aprobó.
