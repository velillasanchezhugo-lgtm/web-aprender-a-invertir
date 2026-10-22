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
  body: "Rosa trabaja en una gestoría. Pide a Claude «el horario de la farmacia de mi calle» y la respuesta no le sirve. Luego le pide un correo para pedir vacaciones y obtiene un borrador que solo tiene que retocar."
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
    options: ["Escribe el texto que mejor encaja con tu petición, según lo que aprendió de muchísimos textos", "Busca la respuesta exacta en una base de datos de verdades", "Una persona de Anthropic lee tu mensaje y contesta"]
    answer: 0
    explain: "Un modelo de lenguaje genera texto a partir de patrones aprendidos. Por eso redacta tan bien y por eso puede fallar. La base de datos tienta porque así funcionan otros programas, pero un modelo de lenguaje no consulta verdades: compone respuestas."
tips:
  - "Úsalo primero para algo que puedas comprobar tú mismo, como reescribir un texto tuyo: así ves cómo trabaja sin arriesgar nada."
  - "Si no entiendes una respuesta, díselo tal cual: «No lo entiendo, explícamelo con un ejemplo de la vida diaria». Es lo normal, no molesta."
action:
  title: Pon a prueba lo que hace bien
  steps:
    - "Abre Claude en claude.ai o en su aplicación (si aún no tienes cuenta, lo verás en la sesión siguiente)."
    - "Pega un texto tuyo corto: un correo, una nota o un mensaje largo de WhatsApp."
    - "Pídele que lo resuma en tres frases y que te explique una palabra difícil."
  check: He probado Claude con un texto mío y he visto qué hace bien
practice:
  task: "Te llega un mensaje larguísimo del grupo de familias del colegio sobre la excursión. Escribe tu primera petición a Claude para que te lo resuma y no se te escape nada importante."
  require: [formato]
  extra: []
  sample: "Te pego un mensaje largo del grupo de familias del colegio sobre la excursión de mi hija. Resume lo importante en tres puntos cortos: qué día es, qué tiene que llevar y cuánto hay que pagar. Si algo no aparece en el mensaje, dímelo en vez de suponerlo. Mensaje: [pega aquí el mensaje]"
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
- Ordenar ideas y ayudar a programar.

**Lo que no es:**

- **No es una persona.** No te conoce, salvo por lo que le cuentes.
- **No es un buscador.** No consulta internet por defecto. Lo reciente no lo sabe, salvo que use la **búsqueda web**, una función que existe también en el plan gratuito.
- **No es infalible.** Puede equivocarse con total seguridad. Escribe igual de bien cuando acierta que cuando falla.

## En la práctica

Cuando dudes de si usar Claude, hazte una pregunta: **¿le doy yo el material o le pido un dato del mundo?**

1. **Le das tú el material** (un texto, un documento, tus notas): suele ir muy bien.
2. **Le pides algo general y estable** (qué es una hipoteca, cómo se escribe una carta formal): suele ir bien, pero revisa.
3. **Le pides algo reciente o muy concreto** (horarios, precios, la última norma): mejor con búsqueda web y comprobando la fuente, o directamente en la web oficial.

> Prueba: «Te pego un correo que he escrito para pedir unos días de vacaciones. Hazlo más claro y educado, sin cambiar las fechas ni alargarlo: [pega aquí tu correo]».

## Error frecuente

Usarlo como buscador para datos del día (horarios, precios) y fiarse. Para eso está la web oficial.
