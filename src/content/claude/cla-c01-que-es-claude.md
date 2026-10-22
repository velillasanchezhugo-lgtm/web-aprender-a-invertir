---
title: Qué es Claude
description: Qué es un asistente de IA como Claude, qué hace bien, qué no sabe hacer y por qué no funciona como un buscador.
level: cero
track: cla-cero
order: 1
skills: [cla-que-es]
terms: [inteligencia-artificial, ia-generativa, modelo-de-lenguaje, anthropic]
hook: "Todo el mundo habla de «preguntarle a la IA». Si mañana la abres por primera vez, ¿sabrías para qué sirve de verdad y para qué no?"
takeaway: Claude es un asistente que escribe respuestas a partir de lo que aprendió de muchísimos textos. Es muy bueno con el lenguaje, pero no es una persona ni un buscador, y puede equivocarse con total seguridad.
scenario:
  kind: producto
  label: Caso práctico
  title: El primer día de Rosa con Claude
  body: "Rosa trabaja en una gestoría y su hija le ha instalado Claude. Le pide «el horario de la farmacia de mi calle» y la respuesta no le sirve. Luego le pide que le ayude a redactar un correo para pedir unos días de vacaciones y le sale un borrador que solo tiene que retocar. Ha descubierto la diferencia entre un asistente de escritura y un buscador."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-c01-q1
    q: "Rosa quiere tres cosas para hoy. ¿Para cuál tiene más sentido usar Claude?"
    options: ["Saber si su autobús va con retraso ahora mismo", "Convertir sus notas desordenadas de una reunión en un resumen claro", "Comprobar el saldo de su cuenta del banco"]
    answer: 1
    explain: "Ordenar y resumir un texto que tú le das es justo lo que mejor hace un modelo de lenguaje. El autobús tienta porque «la IA lo sabe todo», pero es información en tiempo real: la da la aplicación del transporte. Y el saldo solo lo ves en tu banco."
  - type: truefalse
    id: cla-c01-q2
    q: "Si Claude responde con mucha seguridad y buena redacción, el dato es correcto."
    answer: false
    explain: "Claude siempre escribe con fluidez, acierte o no. La seguridad del tono no indica nada sobre la exactitud. Tienta pensar que sí porque una persona que habla así suele saber del tema; una IA, no necesariamente."
  - type: choice
    id: cla-c01-q3
    q: "¿Qué describe mejor cómo genera Claude una respuesta?"
    options: ["Busca la respuesta exacta en una base de datos de verdades", "Escribe el texto que mejor encaja con tu petición, según lo que aprendió de muchísimos textos", "Una persona de Anthropic lee tu mensaje y contesta"]
    answer: 1
    explain: "Un modelo de lenguaje genera texto a partir de patrones aprendidos. Por eso redacta tan bien y por eso puede fallar. La base de datos tienta porque así funcionan otros programas, pero un modelo de lenguaje no consulta verdades: compone respuestas."
tips:
  - "Úsalo primero para algo que puedas comprobar tú mismo, como reescribir un texto tuyo: así ves cómo trabaja sin arriesgar nada."
  - "Hay otros asistentes de IA; lo que aprendas aquí sobre cómo pedir y cómo comprobar te sirve también con ellos."
action:
  title: Pon a prueba lo que hace bien
  steps:
    - "Abre Claude en claude.ai o en su aplicación (si aún no tienes cuenta, lo verás en la sesión siguiente)."
    - "Pega un texto tuyo corto: un correo, una nota o un mensaje largo de WhatsApp."
    - "Pídele que lo resuma en tres frases y que te explique una palabra difícil."
  check: He probado Claude con un texto mío y he visto qué hace bien
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda, anthropic-noticias]
---

## La idea

Claude es un **asistente de inteligencia artificial** creado por la empresa **Anthropic**. La inteligencia artificial son programas que hacen tareas que antes pedían a una persona, como entender o escribir un texto.

Por dentro, Claude funciona con un **modelo de lenguaje**: un programa que aprendió de muchísimos textos y que genera respuestas escribiendo, paso a paso, lo que mejor encaja con tu petición. Es **IA generativa**: crea contenido nuevo, no copia una respuesta guardada.

**Lo que hace bien:**

- Escribir y corregir: correos, cartas, resúmenes, textos para el trabajo.
- Explicar con otras palabras algo que no entiendes.
- Analizar documentos e imágenes que le subes.
- Ordenar ideas, preparar listas y planes.
- Ayudar a programar, aunque aquí no lo necesitarás.

**Lo que no es:**

- **No es una persona.** No tiene opiniones propias ni te conoce, salvo lo que le cuentes.
- **No es un buscador.** No consulta internet por defecto. Lo reciente no lo sabe, salvo que use la **búsqueda web**, una función que existe también en el plan gratuito.
- **No es infalible.** Puede equivocarse con total seguridad. Escribe igual de bien cuando acierta que cuando falla.

Piensa en Claude como un **ayudante muy rápido con el lenguaje**, al que siempre conviene revisar.

## En la práctica

Cuando dudes de si usar Claude, hazte una pregunta: **¿le doy yo el material o le pido un dato del mundo?**

1. **Le das tú el material** (un texto, un documento, tus notas): suele ir muy bien.
2. **Le pides algo general y estable** (qué es una hipoteca, cómo se escribe una carta formal): suele ir bien, pero revisa.
3. **Le pides algo reciente o muy concreto** (horarios, precios, la última norma): mejor con búsqueda web y comprobando la fuente, o directamente en la web oficial.

> Prueba: «Te pego un correo que he escrito para pedir unos días de vacaciones. Hazlo más claro y educado, sin cambiar las fechas ni alargarlo: [pega aquí tu correo]».

Fíjate en que le das el texto y le dices qué no debe cambiar. Eso es lo que mejor funciona.

## Error frecuente

Usarlo como Google para datos del día (horarios, precios, resultados) y fiarse de la respuesta. Para eso está la web oficial o, como mínimo, la búsqueda web con la fuente comprobada.
