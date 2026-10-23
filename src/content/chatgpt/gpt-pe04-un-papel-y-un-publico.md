---
title: Un papel y un público
description: "Darle a ChatGPT un papel («haz de entrevistador») y un público («para personas mayores»): por qué cambia la respuesta y dónde están sus límites."
level: basico
track: gpt-pedir
order: 104
skills: [gpt-peticion]
terms: [prompt, contexto-de-la-peticion]
hook: "Tienes que explicar a un grupo de jubilados cómo detectar un SMS falso del banco y lo que te prepara ChatGPT habla de «phishing», «URL» y «autenticación». ¿Qué le faltaba saber?"
takeaway: "El papel le dice a ChatGPT desde dónde mirar; el público, a quién hablar. Juntos cambian el vocabulario, los ejemplos y el nivel. Pero un papel no le da títulos ni conocimientos nuevos: un «médico» de ChatGPT no es tu médico."
scenario:
  kind: operacion
  label: Caso práctico
  title: La charla de Marcos
  body: "Marcos es voluntario en un centro cívico de Valladolid y va a dar una charla de 20 minutos sobre timos por SMS. Su primera petición le da un texto técnico. La segunda dice: «Haz de formador con experiencia en grupos de personas mayores. El público tiene más de 70 años y usa poco el móvil. Explícalo con ejemplos de mensajes que podrían recibir y sin palabras en inglés». Ahora el guion se entiende."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-pe04-q1
    q: "Lucía tiene la semana que viene su primera entrevista de trabajo como administrativa y quiere practicar. ¿Qué petición le ayuda más?"
    options: ["«Dame las preguntas típicas de una entrevista»", "«Haz de responsable de selección de una gestoría. Hazme las preguntas de una en una, espera mi respuesta y al final dime qué mejorar»", "«Actúa como el mejor experto en entrevistas del mundo»"]
    answer: 1
    explain: "Un papel concreto y un modo de trabajar (una pregunta cada vez y valoración final) convierten a ChatGPT en un entrenador. La lista de preguntas tienta, pero no practicas. «El mejor experto del mundo» suena potente y no añade nada útil."
  - type: truefalse
    id: gpt-pe04-q2
    q: "Si le dices «actúa como mi abogado», puedes fiarte de su respuesta igual que de un abogado colegiado."
    answer: false
    explain: "El papel cambia el estilo y el enfoque, no lo que sabe ni su responsabilidad. Puede equivocarse con una ley o un plazo. Úsalo para entender tu caso y preparar preguntas; la decisión, con un profesional."
  - type: choice
    id: gpt-pe04-q3
    q: "Mohamed debe explicar a su equipo de reparto un cambio en las rutas. Ya tiene el texto. ¿Qué público le indica a ChatGPT para revisarlo?"
    options: ["Ninguno: que lo revise «en general»", "«Repartidores que lo leerán en el móvil antes de salir, algunos con el español como segundo idioma»", "«Un público exigente»"]
    answer: 1
    explain: "Un público concreto dice cómo y dónde se lee, y qué dificultades tiene. Con eso ChatGPT acorta frases y quita palabras raras. «Exigente» o «en general» tientan porque no hay que pensar, pero no le dan nada con qué trabajar."
tips:
  - "Un papel con oficio y situación («profesora de FP que corrige memorias») funciona mejor que un adjetivo («experto», «genial»)."
  - "Para practicar conversaciones (entrevistas, reclamaciones, una charla difícil), pide que haga el papel de la otra persona y que te dé su opinión al final."
action:
  title: Practica una conversación
  steps:
    - "Piensa en una conversación que tengas pendiente: una entrevista, una reclamación, pedir un cambio de turno."
    - "Pide a ChatGPT que haga de la otra persona y que te pregunte de una en una."
    - "Al final, pide tres cosas que mejorar y guarda la petición en «Mi kit de ChatGPT»."
  check: He practicado una conversación con ChatGPT haciendo de la otra persona
practice:
  task: "La semana que viene quieres pedir a tu jefa un cambio de turno para cuidar de tu padre. Escribe la petición para que ChatGPT haga de tu jefa y ensayes la conversación."
  require: [contexto, limites]
  extra:
    - label: "Darle un papel"
      any: ["haz de", "actua como", "hazte pasar", "ponte en el papel", "como si fueras", "haz el papel", "interpreta"]
      hint: "Dile qué papel debe hacer: «Haz de mi jefa, que es…»."
    - label: "Pedir una valoración al final"
      any: ["al final", "cuando terminemos", "despues dime", "que mejorar", "valoracion", "como lo he hecho"]
      hint: "Pide que, al terminar, te diga qué has hecho bien y qué mejorar."
  sample: "Trabajo de dependienta en un supermercado de Jaén y la semana que viene quiero pedir a mi jefa pasar al turno de mañana para cuidar de mi padre por las tardes. Haz de mi jefa: es seria, justa y le preocupa cubrir los turnos. Hazme preguntas y pon pegas realistas, de una en una, y espera mi respuesta. No seas ni demasiado blanda ni demasiado dura. Al final, dime tres cosas que he hecho bien y tres que mejorar."
deeper: null
tool: constructor-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-academy, openai-uso]
---

## La idea

Dos frases cambian mucho una respuesta:

- **El papel**: desde dónde mira ChatGPT. «Haz de profesor de autoescuela», «revisa esto como lo haría un cliente enfadado». Cambia qué destaca, qué critica y cómo lo dice.
- **El público**: a quién va dirigido. «Para niños de 8 años», «para vecinos que no saben de obras», «para mi jefa, que tiene dos minutos». Cambia el vocabulario, los ejemplos y la longitud.

Dos usos muy prácticos:

1. **Ensayar.** ChatGPT hace de la otra persona (un entrevistador, un cliente, tu casero) y tú practicas. Pídele que vaya de una pregunta en una y que te valore al final.
2. **Revisar con otros ojos.** «Lee mi propuesta como el vecino más escéptico de la junta y dime qué objetaría».

**Los límites:** el papel no le da conocimientos nuevos, ni título, ni responsabilidad. Si le pides «actúa como médico» o «como asesor fiscal», sigue siendo un asistente que puede equivocarse. Para salud, derecho o dinero, úsalo para entender tu caso y preparar preguntas; la decisión, con un profesional. Además, un papel no cambia sus normas de uso: no sirve para que haga lo que no haría de otra forma.

## En la práctica

Pon el papel al principio y el público justo después de la tarea:

> Prueba: «Haz de profesora de primaria con experiencia en explicar ciencia. Explica por qué llueve para mi hija de 7 años. Usa un ejemplo de cosas de casa, como el vapor de la ducha, y frases cortas. Máximo 100 palabras.»

Si te sale demasiado infantil o demasiado técnico, ajusta solo el público: «Tiene 10 años y le gustan los experimentos».

## Error frecuente

Dar papeles inflados («el mejor experto del mundo») en vez de concretos. No mejoran la respuesta y pueden darte una falsa sensación de seguridad.
