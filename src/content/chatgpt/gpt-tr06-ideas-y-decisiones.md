---
title: Ideas y decisiones, con tu criterio
description: "Cómo usar ChatGPT para sacar ideas, ordenar pros y contras y poner a prueba una decisión, sabiendo que tiende a darte la razón y que decides tú."
level: basico
track: gpt-trabajo
order: 406
skills: [gpt-pensar, gpt-limites]
terms: [lluvia-de-ideas, abogado-del-diablo, matriz-de-decision, adulacion]
hook: "Llevas semanas dándole vueltas a una decisión de tu negocio. Se la cuentas a ChatGPT y te dice que tu idea es estupenda. ¿Te quedas más tranquilo o más preocupado?"
takeaway: "ChatGPT es muy bueno para abrir opciones y ordenar lo que piensas, y flojo como juez: tiende a darte la razón. Pídele que te lleve la contraria, fija tú los criterios y toma tú la decisión."
scenario:
  kind: empresa
  label: Caso práctico
  title: Los domingos de Gabriel
  body: "Gabriel tiene una panadería en un pueblo de Ávila y quiere vender más. Pide a ChatGPT 15 ideas y se queda con tres: abrir los domingos, repartir a domicilio y vender al bar del pueblo. Cuando le pregunta «¿abrir los domingos es buena idea?», ChatGPT le da la razón. Entonces le pide que haga de abogado del diablo, fija sus criterios (horas de trabajo, inversión y riesgo) y pide una tabla. Ve que abrir los domingos le quita el único día libre y empieza por el bar."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-tr06-q1
    q: "Clara, profesora de Secundaria, organiza el viaje de fin de curso y duda entre dos destinos. ¿Qué petición le ayuda más a decidir?"
    options: ["«¿Qué destino es mejor, Granada o Lisboa?»", "«Organizo un viaje de 4.º de ESO, 40 alumnos y 3 días. Mis criterios, por orden: seguridad, coste por alumno y valor educativo. Compara Granada y Lisboa en una tabla con esos criterios y dime qué datos debería comprobar con la agencia.»", "«Dame el destino más bonito de Europa para un viaje de estudios.»"]
    answer: 1
    explain: "La segunda da la situación y los criterios de Clara, pide un formato que compara y señala lo que hay que comprobar. La primera tienta por directa, pero ChatGPT elegirá con criterios que no son los suyos."
  - type: truefalse
    id: gpt-tr06-q2
    q: "Si ChatGPT está de acuerdo con tu idea, es una buena señal de que la idea es buena."
    answer: false
    explain: "ChatGPT tiende a la adulación: a darte la razón y a ver lo bueno de lo que propones. Su acuerdo dice poco. Pídele expresamente los puntos débiles y los motivos por los que podría salir mal."
  - type: choice
    id: gpt-tr06-q3
    q: "Tras ordenar con ChatGPT los pros y contras, la tabla dice que la opción B gana por poco, pero a ti algo no te convence. ¿Qué haces?"
    options: ["Elijo B: los números son objetivos", "Busco qué me inquieta, reviso si los criterios y su peso son los míos, y decido yo; si hay mucho dinero o un contrato en juego, consulto a un profesional", "Le pregunto a ChatGPT qué haría él"]
    answer: 1
    explain: "La tabla es tan buena como los criterios que pusiste, y tu inquietud suele señalar uno que falta. Elegir B tienta porque parece objetivo, pero los pesos los ha puesto alguien. Que ChatGPT elija por ti es delegar justo lo que te toca."
tips:
  - "Pide las ideas en dos rondas: primero muchas y sin filtrar; después, en otra petición, que las critique. Juntas salen ideas más tímidas."
  - "Pregunta «¿qué información me falta para decidir?». A menudo la respuesta es una llamada o un número que tienes que conseguir tú."
action:
  title: Pon a prueba una decisión pendiente
  steps:
    - "Elige una decisión pequeña que tengas abierta (un proveedor, un horario, un curso)."
    - "Escribe a ChatGPT las opciones y tus criterios por orden, y pide una tabla."
    - "Pídele que haga de abogado del diablo con la opción que prefieres y anota el argumento que más te haga dudar."
  check: He puesto a prueba una decisión con ChatGPT y he decidido yo con mis criterios
practice:
  task: "Tienes una pequeña clínica de fisioterapia y dudas entre contratar a otra persona o alargar tu horario. Escribe la petición para que ChatGPT te ayude a pensarlo sin decidir por ti."
  require: [contexto, formato]
  extra:
    - label: Darle tus criterios
      any: [criterio, me importa, lo que mas, prioridad, por orden]
      hint: "Di qué te importa, por orden: «Mis criterios son: horas, coste y riesgo»."
    - label: Pedir que te lleve la contraria
      any: [contraria, abogado del diablo, critica, puntos debiles, riesgos, en que me equivoco, podria salir mal]
      hint: "Pide los puntos débiles: «Haz de abogado del diablo con la opción que prefiero»."
  sample: "Tengo una clínica de fisioterapia pequeña y la agenda va llena tres semanas. Dudo entre contratar a otro fisioterapeuta a media jornada o alargar yo el horario dos tardes. Mis criterios, por orden: mis horas de descanso, el coste y el riesgo de no llenar la agenda nueva. Compara las dos opciones en una tabla con esos criterios. Después haz de abogado del diablo con la que yo prefiero, contratar, y dime qué datos me faltan para decidir. No decidas por mí."
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

ChatGPT sirve para pensar en dos fases distintas:

1. **Abrir: la lluvia de ideas.** Es una forma de buscar muchas ideas rápido, sin juzgarlas todavía. ChatGPT no se cansa: te da 15 o 30 opciones, incluidas algunas en las que no habrías pensado. La mayoría no valdrán; con dos buenas basta.
2. **Cerrar: ordenar y poner a prueba.** Le das **tus criterios**, por orden, y te prepara una tabla de pros y contras o una **matriz de decisión**: una tabla que puntúa cada opción según esos criterios. Después le pides que haga de **abogado del diablo**, es decir, que defienda la postura contraria para encontrar los fallos.

Lo que más cuesta, y lo primero que debes saber: ChatGPT tiende a la **adulación**, a darte la razón y a ver bien lo que propones. OpenAI lo ha reconocido y trabaja para reducirlo, pero sigue pasando. Por eso **su acuerdo no prueba nada**: pide siempre la crítica de forma expresa.

Tres reglas:

- **Los criterios los pones tú.** Si no los das, usará unos genéricos que quizá no son los tuyos.
- **No sabe lo que solo tú sabes**: tu dinero, tu energía, tu familia, tu pueblo.
- **Decides tú.** Si hay mucho dinero, un contrato o tu salud en juego, contrasta con un profesional.

## En la práctica

1. **Abre:** pide muchas ideas variadas, sin filtrar.
2. **Elige** dos o tres y escribe tus criterios por orden.
3. **Compara** en una tabla y pide qué datos faltan.
4. **Ataca** tu favorita: «¿Por qué podría salir mal?».
5. **Decide** tú y anota por qué.

> Prueba: «Soy administrativa en una empresa de 25 personas y me han pedido ideas para que la gente use menos papel. Dame 20 ideas variadas, de las más fáciles a las más ambiciosas, sin juzgarlas todavía.»

> Prueba: «Estoy pensando en cambiar de turno de mañana a turno de tarde en mi trabajo de cajera. Hazme primero 5 preguntas sobre mi situación. Después, con mis respuestas, dame los pros y contras y los puntos débiles de la opción que yo prefiera.»

## Error frecuente

Preguntar «¿es buena idea?» y quedarse tranquilo con el «sí»: pregunta mejor «¿qué puede salir mal?».
