---
title: Explicaciones a tu nivel
description: "Pide a ChatGPT explicaciones ajustadas a lo que ya sabes, con analogías, y comprueba que lo entiendes contándolo tú."
level: basico
track: gpt-aprender
order: 502
skills: [gpt-aprender]
terms: [tecnica-feynman, alucinacion]
hook: "Te llega una carta del banco: «revisión anual: euríbor más un diferencial». La lees dos veces y sigues igual. ¿Cómo consigues que te lo expliquen a ti, no a un economista?"
takeaway: "Una explicación sirve si parte de lo que ya sabes. Dile a ChatGPT tu punto de partida, pide un ejemplo cercano y cuéntaselo luego tú: lo que no sabes contar es lo que falta."
scenario:
  kind: operacion
  label: Caso práctico
  title: La nómina de Samira
  body: "Samira empieza en un almacén de Ourense y no entiende su primera nómina. Pide a ChatGPT que le explique el «líquido a percibir» y la retención como a alguien que nunca ha trabajado. Luego se lo explica ella y ChatGPT le corrige un punto: creía que la retención era dinero perdido para siempre."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-ap02-q1
    q: "Telmo pide que le expliquen qué es una factura proforma y la respuesta trae tres palabras que tampoco conoce. ¿Qué hace?"
    options: ["Abrir otro chat y hacer la misma pregunta", "Buscar cada palabra por separado en internet", "Seguir en esa conversación: «No sé qué es [PALABRA]. Explícamelo otra vez sin esas palabras y con un ejemplo de una tienda»"]
    answer: 2
    explain: "En la misma conversación, ChatGPT ve qué no ha funcionado y lo ajusta. Otro chat tienta porque parece empezar limpio, pero sin decir qué sabes saldrá algo parecido."
  - type: choice
    id: gpt-ap02-q2
    q: "Remedios no entiende qué es la «nube» de su móvil. ¿Qué petición le dará una explicación a su medida?"
    options: ["«Tengo 70 años y uso el móvil para WhatsApp y fotos. Explícame qué es la nube con un ejemplo cotidiano, en cinco frases»", "«Explícame qué es la nube»", "«Dame la definición técnica de computación en la nube»"]
    answer: 0
    explain: "Al decir qué sabe y para qué usa el móvil, ChatGPT elige ejemplos que ella entiende. La pregunta corta tienta por rápida, pero ChatGPT tiene que adivinar su nivel y suele quedarse alto."
  - type: choice
    id: gpt-ap02-q3
    q: "ChatGPT termina su explicación con «¿Lo has entendido?». ¿Qué respuesta te ayuda más a aprender?"
    options: ["«Sí, gracias»", "«Creo que sí. Te lo cuento con mis palabras y me dices qué falla: …»", "«Hazme un resumen más largo»"]
    answer: 1
    explain: "Contarlo tú saca a la luz los huecos; un «sí» no demuestra nada. Decir que sí tienta porque la explicación parecía clara, pero entenderla al leer no es lo mismo que saber contarla."
tips:
  - "Pregunta cada palabra que no entiendas, aunque te parezca básica: no se cansa ni te juzga."
  - "Para salud, dinero o derecho, usa la explicación para entender y preparar preguntas; decidir, con un profesional."
action:
  title: Cuéntale lo que has entendido
  steps:
    - "Elige una palabra que oyes a menudo y no entiendes del todo (del trabajo, del banco, de las noticias)."
    - "Pide una explicación a tu nivel con un ejemplo de la vida diaria."
    - "Cuéntasela tú en tres o cuatro frases, pide que te corrija y guarda la petición en «Mi kit de ChatGPT»."
  check: He contado una idea con mis palabras y ChatGPT me ha corregido
practice:
  task: "Tu hipoteca va ligada al euríbor y no sabes qué es. Escribe la petición para que ChatGPT te lo explique a tu nivel, con una analogía, y luego te deje explicarlo a ti."
  require: [contexto, limites]
  extra:
    - label: "Pedir una analogía o un ejemplo cotidiano"
      any: ["analogia", "como si", "ejemplo de la vida", "ejemplo cotidiano", "comparacion", "comparalo", "vida diaria", "dia a dia", "algo que conozca", "algo cotidiano"]
      hint: "Pide una analogía: «Explícamelo con un ejemplo de la vida diaria»."
    - label: "Explicarlo tú después"
      any: ["te lo explico", "te lo explicare", "lo explico yo", "con mis palabras", "explicartelo", "explicarlo yo", "mi explicacion", "te lo cuento", "contartelo"]
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

Una explicación es **buena para ti** o no lo es. La misma idea se explica distinto a alguien de 14 años o a una enfermera. ChatGPT puede ajustarse, pero necesita saber **desde dónde partes**.

Tres cosas que funcionan:

- **Di qué sabes ya.** «Sé lo que es un préstamo, pero no qué es un interés variable.»
- **Pide una analogía**: comparar la idea nueva con algo que conoces, como la compra o el fútbol.
- **Pon un límite de tamaño**: «en cinco frases», «sin palabras técnicas».

Y lo más útil: **explícalo tú después**. Es la **técnica Feynman**: si puedes contarlo con palabras sencillas, lo has entendido; donde te atascas, está el hueco. ChatGPT puede hacer de oyente y decirte qué falla.

Un aviso: las analogías **simplifican**, y ChatGPT puede tener **alucinaciones** (respuestas que suenan seguras pero son falsas). Comprueba lo importante en tu libro, tu temario o una fuente oficial.

## En la práctica

> Prueba: «Explícame [IDEA] para alguien que [LO QUE SABES]. Hazlo en cinco frases, sin palabras técnicas, con una analogía de la vida diaria. Después te lo explico yo con mis palabras y me dices qué he entendido mal.»

Si no te convence, ajusta en la misma conversación: «Más sencillo todavía», «Otra analogía distinta» o «Esa parte ya la sé; explícame solo [LO QUE FALTA]».

## Error frecuente

Pedir «explícamelo fácil» sin decir qué sabes. ChatGPT adivina tu nivel y suele quedarse alto o bajo.
