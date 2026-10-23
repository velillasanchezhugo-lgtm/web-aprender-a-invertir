---
title: Explicaciones a tu nivel
description: "Pide a ChatGPT explicaciones ajustadas a lo que ya sabes, con analogías, y comprueba que lo entiendes explicándolo tú con tus palabras."
level: basico
track: gpt-aprender
order: 502
skills: [gpt-aprender]
terms: [tecnica-feynman, alucinacion]
hook: "Te llega una carta del banco que habla del «euríbor más un diferencial» y la explicación que encuentras en internet usa otras tres palabras que tampoco entiendes. ¿Cómo consigues una hecha para ti?"
takeaway: "Dile a ChatGPT qué sabes ya y pide un ejemplo de tu vida diaria. Luego explícaselo tú: donde te atascas está lo que aún no entiendes."
scenario:
  kind: operacion
  label: Caso práctico
  title: La nómina de Samira
  body: "Samira acaba de empezar a trabajar en un almacén de Zaragoza y no entiende su primera nómina. Le pide a ChatGPT que le explique qué es el «líquido a percibir» y la retención como a alguien que nunca ha tenido un trabajo, con un ejemplo de la vida diaria. Después se lo explica ella con sus palabras y ChatGPT le corrige un punto: pensaba que la retención era un dinero que perdía para siempre."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-ap02-q1
    q: "Andrés lee la explicación de ChatGPT sobre qué es una factura proforma y cree que la entiende. ¿Qué es lo mejor para comprobarlo?"
    options: ["Leerla otra vez más despacio", "Explicársela a ChatGPT con sus palabras y pedirle que le diga qué ha entendido mal", "Pedir una explicación más larga"]
    answer: 1
    explain: "Explicarlo tú obliga a ordenar las ideas, y los huecos salen enseguida. Releer tienta porque es cómodo y da sensación de dominio, pero no demuestra que puedas usarlo."
  - type: choice
    id: gpt-ap02-q2
    q: "Pilar no entiende qué es la «nube» de su móvil. ¿Qué petición le dará una explicación a su medida?"
    options: ["«Explícame qué es la nube»", "«Tengo 70 años y uso el móvil para WhatsApp y fotos. Explícame qué es la nube con un ejemplo de la vida diaria, sin palabras técnicas, en cinco frases»", "«Dame la definición técnica de computación en la nube»"]
    answer: 1
    explain: "Al decir qué sabe y para qué usa el móvil, ChatGPT elige ejemplos y palabras que ella entiende. La pregunta corta tienta por rápida, pero ChatGPT tiene que adivinar su nivel y suele quedarse alto."
  - type: truefalse
    id: gpt-ap02-q3
    q: "Una analogía de ChatGPT siempre es exacta, así que puedes usarla para responder en un examen."
    answer: false
    explain: "Una analogía ayuda a entender, pero simplifica y nunca encaja del todo. Además, ChatGPT puede equivocarse. Úsala para hacerte la idea y luego aprende la definición de tu libro o tu temario."
tips:
  - "Si la explicación sigue siendo difícil, pide «más sencillo todavía» o «como si tuviera 12 años». Si es demasiado básica, di qué parte ya sabes."
  - "Pide dos analogías distintas: si las dos apuntan a lo mismo, entenderás mejor qué es lo importante."
  - "Para temas de salud, dinero o derecho, usa la explicación para entender y preparar preguntas, no para decidir: eso, con un profesional."
action:
  title: Explícaselo tú a ChatGPT
  steps:
    - "Elige una palabra o idea que oyes a menudo y no entiendes del todo (de tu trabajo, del banco, de las noticias)."
    - "Pide una explicación a tu nivel con un ejemplo de la vida diaria."
    - "Explícasela tú en tres o cuatro frases y pide que te corrija."
    - "Guarda la petición en «Mi kit de ChatGPT» si te ha servido."
  check: He explicado una idea con mis palabras y ChatGPT me ha corregido
practice:
  task: "Quieres entender qué es el euríbor porque tu hipoteca va ligada a él. Escribe la petición para que ChatGPT te lo explique a tu nivel, con una analogía, y luego te pida que lo expliques tú."
  require: [contexto, limites]
  extra:
    - label: "Pedir una analogía o un ejemplo cotidiano"
      any: ["analogia", "como si", "ejemplo de la vida", "ejemplo cotidiano", "comparacion", "comparalo", "vida diaria", "dia a dia"]
      hint: "Pide una analogía: «Explícamelo con un ejemplo de la vida diaria»."
    - label: "Explicarlo tú después"
      any: ["te lo explico", "te lo explicare", "lo explico yo", "con mis palabras", "explicartelo", "explicarlo yo", "mi explicacion"]
      hint: "Añade: «Después te lo explico yo con mis palabras y me dices qué he entendido mal»."
  sample: "Tengo una hipoteca variable y el banco dice que va ligada al euríbor, pero no sé qué es. No tengo estudios de economía. Explícamelo en cinco frases, sin palabras técnicas y con una analogía de la vida diaria. No me digas si me conviene cambiar de hipoteca: solo quiero entenderlo. Después te lo explico yo con mis palabras y me dices qué he entendido mal."
deeper: null
tool: evaluador-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-model-spec]
---

## La idea

Una explicación no es buena o mala en sí: **es buena para ti** o no. La misma idea se explica distinto a alguien de 14 años, a un jubilado o a una enfermera. ChatGPT puede ajustarse, pero necesita saber **desde dónde partes**.

Tres cosas que funcionan:

- **Di qué sabes ya** y qué no. «Sé lo que es un préstamo, pero no qué es un interés variable.»
- **Pide una analogía**: comparar la idea nueva con algo que conoces. «Explícamelo con algo de la cocina, del fútbol o de la compra.»
- **Pon un límite de tamaño**: «en cinco frases», «sin palabras técnicas». Una explicación corta que entiendes vale más que una larga que no.

Y lo más útil: **explícalo tú después**. Es la **técnica Feynman**: si puedes contarlo con palabras sencillas, lo has entendido; donde te atascas, ahí está el hueco. ChatGPT puede hacer de oyente y decirte qué has entendido mal.

Un aviso: las analogías **simplifican**, y ChatGPT puede cometer **alucinaciones** (respuestas que suenan seguras pero son falsas). Úsalas para entender y luego comprueba lo importante en tu libro, tu temario o una fuente oficial.

## En la práctica

> Prueba: «Explícame [IDEA] para alguien que [LO QUE SABES]. Hazlo en cinco frases, sin palabras técnicas, con una analogía de la vida diaria. Después te lo explico yo con mis palabras y me dices qué he entendido mal y qué me falta.»

Si no te convence, ajusta en la misma conversación:

- «Más sencillo todavía.»
- «Otra analogía distinta.»
- «Esa parte ya la sé; explícame solo [LO QUE FALTA].»

## Error frecuente

Pedir «explícamelo fácil» sin decir qué sabes. ChatGPT tiene que adivinar tu nivel y suele quedarse demasiado alto o demasiado bajo.
