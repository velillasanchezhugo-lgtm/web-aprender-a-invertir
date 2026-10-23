---
title: Investigación en profundidad
description: Qué hace la investigación en profundidad (deep research) de ChatGPT, qué preguntas le van bien, cuánto tarda y cómo leer su informe con espíritu crítico.
level: basico
track: gpt-funciones
order: 202
skills: [gpt-busqueda, gpt-verificar]
terms: [investigacion-en-profundidad, busqueda-en-chatgpt, alucinacion]
hook: "Quieres comparar en serio tres ciclos de FP para tu hija: salidas, prácticas y centros cercanos. Una búsqueda rápida te da cuatro líneas. ¿Hay forma de que ChatGPT lo trabaje a fondo?"
takeaway: La investigación en profundidad es para preguntas grandes que merecen un informe con muchas fuentes. Dale un buen encargo, deja que trabaje y revisa las citas de lo que vayas a usar.
scenario:
  kind: producto
  label: Caso práctico
  title: El informe de Rocío
  body: "Rocío quiere abrir una peluquería canina en su pueblo de Toledo. Lanza una investigación en profundidad sobre licencias, requisitos sanitarios y competencia en la comarca. ChatGPT le propone un plan, ella añade «solo normativa de Castilla-La Mancha» y se va a comer. Al volver tiene un informe con índice y fuentes. Abre las tres citas sobre la licencia y ve que una era de otra comunidad."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-fu02-q1
    q: "¿Para cuál de estas preguntas compensa una investigación en profundidad?"
    options: ["¿A qué hora cierra hoy la farmacia de mi calle?", "Comparar ayudas, requisitos y plazos para rehabilitar un edificio en mi comunidad autónoma", "Traducir un correo al inglés"]
    answer: 1
    explain: "Es una pregunta con muchas piezas y fuentes. Para un dato suelto basta una búsqueda normal: lanzar una investigación tienta por ser «más completa», pero tarda mucho y gasta un uso limitado de tu plan."
  - type: truefalse
    id: gpt-fu02-q2
    q: "Como el informe trae muchas fuentes, no hace falta revisar ninguna."
    answer: false
    explain: "Muchas citas no garantizan que estén bien leídas: puede mezclar regiones, fechas o fuentes flojas. Revisa al menos las de los datos que vayas a usar."
  - type: choice
    id: gpt-fu02-q3
    q: "Antes de empezar, ChatGPT te enseña el plan de investigación y no incluye lo que más te importa. ¿Qué haces?"
    options: ["Lo dejas correr y ya preguntarás después", "Cambias el plan antes de que empiece", "Cancelas y haces diez búsquedas sueltas"]
    answer: 1
    explain: "Corregir el plan al principio es lo que más mejora el informe. Dejarlo correr tienta para no perder tiempo, pero puede tardar un buen rato en algo que no te sirve."
tips:
  - "Mientras trabaja puedes hacer otras cosas: ChatGPT avisa cuando el informe está listo."
  - "Si el tema es de salud, dinero o leyes, el informe te prepara para hablar con un profesional, no lo sustituye."
action:
  title: Prepara el encargo de una investigación
  steps:
    - "Elige una pregunta grande que tengas pendiente (una compra cara, un trámite, una decisión de estudios)."
    - "Escribe el encargo con tu situación, el alcance, las fuentes que prefieres y el formato del informe."
    - "Lánzalo, corrige el plan si hace falta y, al terminar, comprueba tres citas."
    - "Guarda el encargo en «Mi kit de ChatGPT» como plantilla."
  check: He preparado y lanzado una investigación en profundidad
practice:
  task: "Tu madre quiere poner placas solares en su casa de Murcia y te pide que te informes de ayudas y trámites. Escribe el encargo para una investigación en profundidad."
  require: [contexto, formato, verificar, limites]
  extra:
    - label: "Decir qué fuentes priorizar"
      any: ["oficial", "boe", "prioriza", "fuentes como"]
      hint: "Di qué fuentes prefieres: «prioriza el BOE, el boletín autonómico y el ayuntamiento»."
  sample: "Mi madre tiene una casa en Murcia y quiere instalar placas solares para su consumo. Investiga qué ayudas, deducciones fiscales y trámites hay hoy en la Región de Murcia y en su ayuntamiento. Prioriza fuentes oficiales: BOE, BORM, ayuntamiento y Agencia Tributaria. Entrégame un informe con un resumen de diez líneas, una tabla de ayudas con requisitos y plazos, y los trámites en orden. Cita la fuente de cada dato y dime cuáles no has podido confirmar. No incluyas ofertas de empresas."
deeper: null
tool: constructor-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-planes]
---

## La idea

La **investigación en profundidad** (en inglés, *deep research*) es un modo en el que ChatGPT no contesta enseguida: **busca y lee muchas fuentes durante un rato** y te entrega un **informe largo con citas**.

Cómo funciona:

- **Primero, un plan.** ChatGPT propone qué va a investigar y puedes cambiarlo. Durante el trabajo también puedes corregir el rumbo.
- **Tarda.** Según OpenAI, entre unos minutos y media hora. Te avisa al terminar.
- **El informe** trae índice, la lista de fuentes usadas y el registro de lo que ha hecho. Puedes descargarlo, por ejemplo en PDF o Word.
- **Disponibilidad.** Está en el plan gratis de forma **limitada** y con más usos en los de pago. El número cambia: míralo en la página de planes.

**Cuándo sí:** preguntas con muchas piezas (comparar opciones, reunir requisitos, ver qué se sabe de un tema). **Cuándo no:** un dato suelto, que es cosa de la búsqueda normal.

## En la práctica

1. Ábrela desde el menú de herramientas del chat (el botón «+») o escribiendo «/».
2. Escribe un encargo completo: tu situación, qué quieres saber, el alcance (lugar, fechas), las fuentes que prefieres y cómo quieres el informe.
3. Revisa el plan antes de que empiece.
4. Al leer el informe, **comprueba las citas de lo que vayas a usar** y busca lo que mezcla: otra región, otra fecha, una opinión presentada como dato.

> Prueba: «Quiero estudiar un ciclo de FP de grado superior en Andalucía relacionado con la informática. Investiga qué ciclos hay, qué salidas tienen y qué institutos públicos de Sevilla los ofrecen. Usa fuentes oficiales. Dame una tabla comparativa y dime qué datos no has podido confirmar».

## Error frecuente

Lanzar una pregunta de una línea. Sin alcance ni fuentes, el informe sale largo, pero genérico.
