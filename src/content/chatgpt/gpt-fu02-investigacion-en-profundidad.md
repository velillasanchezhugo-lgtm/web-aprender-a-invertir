---
title: Investigación en profundidad
description: Qué hace la investigación en profundidad (deep research) de ChatGPT, qué preguntas le van bien y cómo leer su informe con espíritu crítico.
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
    q: "Mónica sale de casa en diez minutos y quiere saber a qué hora cierra hoy su oficina de Correos. ¿Usa la investigación en profundidad?"
    options: ["Sí: así tendrá un informe completo", "No: para un dato suelto basta una búsqueda normal", "Sí, y se salta el plan para que vaya más rápido"]
    answer: 1
    explain: "La investigación tarda y gasta un uso limitado de tu plan. Tienta por ser «más completa», pero para un horario basta una búsqueda y abrir la web oficial."
  - type: truefalse
    id: gpt-fu02-q2
    q: "Puedes pedir que la investigación dé prioridad a unas webs concretas, como las de organismos oficiales, o que se limite a ellas."
    answer: true
    explain: "Puedes elegir webs y nombrarlas en el encargo. Tienta pensar que busca donde quiere, pero decirle qué fuentes prefieres mejora mucho el informe."
  - type: choice
    id: gpt-fu02-q3
    q: "Antes de empezar, ChatGPT te enseña el plan de investigación y no incluye lo que más te importa. ¿Qué haces?"
    options: ["Lo dejas correr y ya preguntarás después", "Cancelas y haces diez búsquedas sueltas", "Cambias el plan antes de que empiece"]
    answer: 2
    explain: "Corregir el plan al principio es lo que más mejora el informe. Dejarlo correr tienta para no perder tiempo, pero puede tardar un buen rato en algo que no te sirve."
tips:
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

- **Primero, un plan.** ChatGPT propone qué va a investigar (a veces con preguntas) y puedes cambiarlo. Mientras trabaja, puedes seguir su avance y corregir el rumbo.
- **Puedes elegir webs**: limitarla a unas concretas o darles prioridad.
- **Tarda** bastante más que una respuesta normal, a menudo varios minutos. Te avisa al terminar.
- **El informe** trae las fuentes citadas y se puede descargar, por ejemplo en PDF, Word o Markdown.
- **Disponibilidad.** En el plan gratis, **limitada**; en los de pago, con más usos. Mira la página de planes.

**Cuándo sí:** preguntas con muchas piezas (comparar opciones, reunir requisitos). **Cuándo no:** un dato suelto, que es cosa de la búsqueda normal.

## En la práctica

1. Ábrela desde el menú de herramientas del chat (el botón «+») o escribiendo «/».
2. Escribe un encargo completo: tu situación, qué quieres saber, el alcance (lugar, fechas), las fuentes que prefieres y cómo quieres el informe.
3. Revisa el plan antes de que empiece.
4. Al leer el informe, **comprueba las citas de lo que vayas a usar** y busca lo que mezcla: otra región, otra fecha, una opinión presentada como dato.

> Prueba: «Quiero estudiar un ciclo de FP de grado superior en Andalucía relacionado con la informática. Investiga qué ciclos hay, qué salidas tienen y qué institutos públicos de Sevilla los ofrecen. Usa fuentes oficiales. Dame una tabla comparativa y dime qué datos no has podido confirmar».

## Error frecuente

Lanzar una pregunta de una línea: el informe sale largo, pero genérico.
