---
title: Ideas y decisiones, con tu criterio
description: "Cómo usar ChatGPT para sacar ideas y poner a prueba una decisión, preguntando de forma que no se limite a darte la razón."
level: basico
track: gpt-trabajo
order: 406
skills: [gpt-pensar, gpt-limites]
terms: [lluvia-de-ideas, abogado-del-diablo, matriz-de-decision, adulacion]
hook: "Le cuentas a ChatGPT la decisión que llevas semanas pensando y te dice que tu idea es estupenda. ¿Te quedas más tranquilo o más preocupado?"
takeaway: "ChatGPT abre opciones muy bien, pero tiende a darte la razón. Pregunta de forma neutra, pídele que te lleve la contraria y pon tú los criterios. La decisión es tuya."
scenario:
  kind: empresa
  label: Caso práctico
  title: Los domingos de Gabriel
  body: "Gabriel tiene una panadería en un pueblo de Ávila y pregunta: «¿Verdad que abrir los domingos es buena idea?». La respuesta es entusiasta. En un chat nuevo pide «convénceme de que no abra los domingos» y salen cosas que no había pensado, como perder su único día libre. Con una tabla de pros y contras, decide probarlo solo en verano."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-tr06-q1
    q: "Clara, profesora de Secundaria, organiza el viaje de fin de curso y duda entre dos destinos. ¿Qué petición le ayuda más a decidir?"
    options: ["«¿Verdad que Granada es mejor que Lisboa?»", "«Organizo un viaje de 4.º de ESO, 40 alumnos y 3 días. Mis criterios, por orden: seguridad, coste y valor educativo. Compara Granada y Lisboa en una tabla y dime qué debo comprobar con la agencia.»", "«Dame el destino más bonito de Europa para un viaje de estudios.»"]
    answer: 1
    explain: "La segunda da la situación y los criterios de Clara y pide una comparación. La primera tienta porque es como hablamos, pero lleva la respuesta dentro: es fácil que ChatGPT le dé la razón."
  - type: truefalse
    id: gpt-tr06-q2
    q: "Si ChatGPT está de acuerdo con tu idea, es una buena señal de que la idea es buena."
    answer: false
    explain: "ChatGPT tiende a la adulación: a darte la razón. Su acuerdo dice poco. Pídele expresamente los puntos débiles."
  - type: choice
    id: gpt-tr06-q3
    q: "Tras ordenar con ChatGPT los pros y contras, la tabla dice que la opción B gana por poco, pero a ti algo no te convence. ¿Qué haces?"
    options: ["Elijo B: los números son objetivos", "Busco qué me inquieta, reviso si los criterios son los míos y decido yo; si hay mucho en juego, consulto a un profesional", "Le pregunto a ChatGPT qué haría él"]
    answer: 1
    explain: "La tabla es tan buena como sus criterios, y tu inquietud suele señalar uno que falta. Elegir B tienta porque parece objetivo, pero los pesos los ha puesto alguien. Que ChatGPT elija es delegar lo que te toca."
tips:
  - "Para la crítica, abre un chat nuevo: en la misma conversación ya sabe qué opción prefieres."
  - "Pregunta «¿qué información me falta para decidir?»."
action:
  title: Hazle la pregunta al revés
  steps:
    - "Elige una decisión pequeña que tengas abierta."
    - "En un chat, pide una tabla con las opciones y tus criterios por orden."
    - "En un chat nuevo, pide «convénceme de no hacer» lo que prefieres y anota el argumento que más te haga dudar."
  check: He puesto a prueba una decisión con ChatGPT y he decidido yo con mis criterios
practice:
  task: "Tienes una clínica de fisioterapia y dudas entre contratar a alguien o alargar tu horario. Escribe la petición para que ChatGPT te ayude a pensarlo sin decidir por ti."
  require: [contexto, formato]
  extra:
    - label: Darle tus criterios
      any: [criterio, me importa, lo que mas, prioridad, por orden, lo mas importante]
      hint: "Di qué te importa, por orden: «Mis criterios son: horas, coste y riesgo»."
    - label: Pedir que te lleve la contraria
      any: [contraria, abogado del diablo, critica, puntos debiles, riesgos, en que me equivoco, salir mal, convenceme de que no, pegas, en contra]
      hint: "Pide los puntos débiles: «Haz de abogado del diablo con la opción que prefiero»."
  sample: "Tengo una clínica de fisioterapia pequeña con la agenda llena tres semanas. Dudo entre contratar a otro fisioterapeuta a media jornada o alargar yo el horario dos tardes. Mis criterios, por orden: mi descanso, el coste y el riesgo de no llenar la agenda. Compara las dos opciones en una tabla. Después haz de abogado del diablo con la que prefiero, contratar. No decidas por mí."
deeper: null
tool: constructor-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-noticias, openai-model-spec]
---

## La idea

ChatGPT sirve para pensar en dos fases:

1. **Abrir: la lluvia de ideas**, es decir, sacar muchas ideas rápido sin juzgarlas. La mayoría no valdrán; con dos buenas basta.
2. **Cerrar: poner a prueba.** Le das **tus criterios** por orden y te prepara una **matriz de decisión**, una tabla que puntúa cada opción según esos criterios. Después le pides que haga de **abogado del diablo**: que defienda la postura contraria para encontrar los fallos.

Lo más importante: ChatGPT tiende a la **adulación**, a darte la razón. OpenAI lo ha reconocido y trabaja para reducirlo, pero sigue pasando, sobre todo según cómo preguntes:

- «¿Verdad que X es buena idea?» ya lleva la respuesta dentro.
- «¿Qué opciones tengo y qué tiene cada una en contra?» es neutra.
- «Convénceme de no hacer X» saca lo que no quieres oír.

Además, **no sabe lo que solo tú sabes**: tu dinero, tu energía, tu familia. Los criterios los pones tú y **decides tú**. Si hay mucho en juego, contrasta con un profesional.

## En la práctica

1. **Abre:** «Dame 20 ideas para gastar menos papel en la oficina, sin juzgarlas».
2. **Compara** dos o tres con tus criterios en una tabla.
3. **Ataca** tu favorita en un chat nuevo.
4. **Decide** tú y anota por qué.

> Prueba: «Dudo entre seguir en el turno de mañana o pasar al de tarde en mi trabajo de cajera. Antes de opinar, hazme 5 preguntas sobre mi situación. Después dame los argumentos en contra de la opción que yo prefiera.»

## Error frecuente

Preguntar «¿es buena idea?» y quedarse tranquilo con el «sí».
