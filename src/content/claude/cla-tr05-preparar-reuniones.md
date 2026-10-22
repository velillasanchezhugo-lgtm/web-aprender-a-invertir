---
title: Preparar reuniones y sacar el acta
description: Cómo usar Claude antes y después de una reunión, entrevista o negociación, del orden del día y las preguntas al acta y las tareas a partir de tus notas.
level: basico
track: cla-trabajo
order: 305
skills: [cla-pensar, cla-escribir]
terms: [orden-del-dia, acta-de-reunion]
hook: "Sales de una reunión de una hora con tres páginas de notas desordenadas. Nadie sabe qué tiene que hacer cada uno."
takeaway: Antes de una reunión, Claude te ayuda a ordenar objetivos, preguntas y objeciones. Después, convierte tus notas en un acta y una lista de tareas que tú revisas antes de enviarla.
scenario:
  kind: empresa
  label: Caso práctico
  title: La negociación de Raúl
  body: "Raúl tiene un taller de carpintería y va a negociar el precio de la madera. Cuenta a Claude lo que paga, lo que quiere y su límite, y le pide las objeciones probables del proveedor y cómo responderlas. Ensaya. Al salir, dicta sus notas y pide un correo con los acuerdos."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-tr05-q1
    q: "Lucía tiene mañana una entrevista de trabajo para administrativa en una gestoría. ¿Qué petición le ayuda más?"
    options: ["«Dame preguntas típicas de entrevistas.»", "«Tengo una entrevista para administrativa en una gestoría pequeña. Mi experiencia es [resumen, sin datos personales]. Hazme las 8 preguntas más probables, de una en una, y después de cada respuesta dime cómo mejorarla.»", "«Escríbeme las respuestas perfectas para memorizarlas.»"]
    answer: 1
    explain: "La segunda da contexto y convierte a Claude en un entrenador: practica y recibe comentarios. Las preguntas genéricas tientan porque son rápidas, pero no se ajustan al puesto, y unas respuestas memorizadas suenan falsas."
  - type: truefalse
    id: cla-tr05-q2
    q: "Si Claude saca las tareas de tus notas, puedes enviarlas a los asistentes sin leerlas."
    answer: false
    explain: "Puede asignar una tarea a quien no es, inventar un plazo que nadie dijo o dejar fuera un acuerdo que anotaste a medias. Revísala antes de enviarla: el acta es tuya."
  - type: choice
    id: cla-tr05-q3
    q: "Vas a pasar a Claude tus notas de una reunión de equipo en la que se habló de la baja médica de una compañera. ¿Qué haces?"
    options: ["Las paso tal cual, para que el acta quede completa", "Quito esa parte: no es necesaria para las tareas y es un dato de salud", "Cambio solo su nombre por sus iniciales"]
    answer: 1
    explain: "Los datos de salud tienen una protección especial y no hacen falta para el acta de tareas. Poner las iniciales tienta, pero en un equipo pequeño se sabe enseguida de quién hablas."
tips:
  - "Pide a Claude que sea la otra parte: «Hazte pasar por el proveedor y ponme pegas»."
  - "En un acta, exige tres columnas: tarea, responsable y fecha. Lo que no tenga las tres, no es una tarea."
action:
  title: Convierte tus notas en tareas
  steps:
    - "Busca las notas de tu última reunión o clase (o escribe cinco líneas de una conversación reciente). Quita datos de salud y datos personales."
    - "Pégalas con la primera petición de ejemplo."
    - "Corrige lo que no sea exacto y guarda la petición en «Mi kit de Claude»."
  check: He convertido unas notas en una lista de tareas revisada con Claude
practice:
  task: "Eres maestra de 3.º de primaria y mañana tienes la primera reunión del curso con las familias, de 45 minutos. Escribe la petición para que Claude te ayude a prepararla."
  require: [contexto, formato]
  extra:
    - label: Pedir el tiempo de cada punto
      any: [minutos, tiempos, tiempo de cada, duracion]
      hint: "Di cuánto dura la reunión y pide los minutos de cada tema."
    - label: Prepararte para las preguntas difíciles
      any: [preguntas dificiles, preguntas que me haran, objeciones, pegas, ensayar]
      hint: "Pide las preguntas o pegas más probables, con una respuesta breve para cada una."
  sample: "Soy maestra de 3.º de primaria y mañana tengo la primera reunión del curso con las familias, de 45 minutos. Quiero que salgan sabiendo cómo funcionan los deberes, las salidas y la comunicación con el colegio. Prepárame un orden del día en una lista, con los minutos de cada tema. Después dame las 5 preguntas difíciles que más probablemente me harán, con una respuesta breve y amable para cada una. No incluyas nombres de alumnos."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda, aepd-guias]
---

## La idea

Una reunión sale bien o mal sobre todo **antes** (si sabes a qué vas) y **después** (si cada uno sabe qué hacer). En los dos momentos Claude ahorra mucho tiempo.

**Antes:**

- **Orden del día**: la lista de temas, en orden y con su tiempo. Le das el objetivo y la duración y te propone una estructura.
- **Preguntas** para una entrevista, una visita a un cliente o una tutoría con familias.
- **Negociación**: le cuentas lo que quieres conseguir y tu límite, y le pides las objeciones probables y cómo responder. Puede **hacer de la otra parte** para que ensayes.
- **Guion de una presentación**: qué contar y en cuánto tiempo.

**Después:**

- **Acta**: quién estuvo, qué se decidió y **quién hace qué y para cuándo**. Le pegas tus notas, aunque estén desordenadas, o las dictas.
- **Correo de seguimiento** con los acuerdos.

Dos cuidados. Claude **solo sabe lo que tú le das**: si tus notas tienen huecos, puede rellenarlos con suposiciones, así que **revisa el acta** antes de enviarla. Y no le pases lo que no hace falta: datos de salud, conflictos personales o información confidencial de clientes.

## En la práctica

1. Cuenta el **tipo de reunión, el objetivo y la duración**.
2. Pide el formato que vas a usar: orden del día con tiempos, preguntas, tabla de tareas.
3. Para ensayar, pide que te pregunte **de una en una** y te corrija.

> Prueba: «Estas son mis notas de la reunión de hoy con mi equipo de cuatro personas [pega las notas]. Hazme un acta breve: decisiones tomadas y una tabla con tarea, responsable y fecha límite. Si en las notas falta el responsable o la fecha de alguna tarea, márcala como «pendiente de asignar» en vez de inventarla.»

> Prueba: «La semana que viene presento mi proyecto de huerto escolar al claustro, en 10 minutos. Propón un guion con tiempos y dame las 5 preguntas difíciles que más probablemente me harán, con una respuesta breve para cada una.»

## Error frecuente

Enviar el acta tal como la devuelve Claude, con un plazo o un responsable que nadie acordó.
