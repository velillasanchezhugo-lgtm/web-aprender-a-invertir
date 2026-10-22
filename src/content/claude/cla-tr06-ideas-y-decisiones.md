---
title: Ideas y decisiones, con tu criterio
description: Cómo usar Claude para una lluvia de ideas, ver pros y contras, hacer de abogado del diablo y comparar opciones con criterios, sin que decida por ti.
level: basico
track: cla-trabajo
order: 306
skills: [cla-pensar, cla-iterar]
terms: [lluvia-de-ideas, abogado-del-diablo, matriz-de-decision]
hook: "Le preguntas a Claude si debes aceptar la oferta de trabajo en otra ciudad y te contesta con un «depende». ¿Te ha servido de algo?"
takeaway: Claude es muy útil para abrir opciones, encontrar fallos y ordenar lo que te importa. Lo que no puede es saber por ti qué pesa más en tu vida o tu negocio. Esa parte, y la decisión, son tuyas.
scenario:
  kind: empresa
  label: Caso práctico
  title: El segundo local de Amaia
  body: "Amaia tiene una cafetería y quiere crecer. Pide a Claude 15 ideas, se queda con tres y le pide que haga de abogado del diablo con cada una. Después fija sus criterios (inversión, horas de trabajo, riesgo) y pide una tabla. La tabla no decide, pero le muestra que lo que más le preocupa son sus horas."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-tr06-q1
    q: "Daniel duda entre dos academias de inglés para su hija. ¿Qué petición le ayuda a decidir mejor?"
    options: ["«¿Qué academia es mejor?»", "«Compara estas dos academias [datos] según precio, horario, distancia y grupo reducido. Para mí lo más importante es el horario. Hazme una tabla y dime qué información me falta para decidir.»", "«Elige tú y yo apunto a mi hija.»"]
    answer: 1
    explain: "La segunda da los datos y los criterios de Daniel, y pide lo que falta. «¿Qué academia es mejor?» tienta por sencilla, pero Claude no sabe qué le importa a Daniel y responderá con generalidades."
  - type: truefalse
    id: cla-tr06-q2
    q: "Si le pides a Claude que critique tu idea, encontrará todos sus fallos."
    answer: false
    explain: "Encontrará muchos fallos típicos, pero no conoce tu mercado, tu barrio ni tu situación como tú. Úsalo como un primer filtro y contrasta lo importante con personas que conozcan el tema."
  - type: choice
    id: cla-tr06-q3
    q: "Claude te ha ayudado a ordenar los pros y contras de dejar tu empleo para hacerte autónomo. ¿Qué es lo sensato después?"
    options: ["Seguir lo que diga la tabla, que es objetiva", "Usarla para pensar y hablar con un asesor y con alguien que ya sea autónomo antes de decidir", "Pedirle que me prometa que me irá bien"]
    answer: 1
    explain: "La tabla ordena tu razonamiento, pero los pesos los has puesto tú y puede haber datos que falten (impuestos, cuotas, clientes). En decisiones con mucho dinero en juego, contrasta con profesionales. Claude no puede prometerte un resultado."
tips:
  - "Pide cantidad primero («dame 20 ideas, aunque sean raras») y criba después."
  - "Si Claude siempre te da la razón, pídele expresamente que defienda la opción contraria."
action:
  title: Pon a prueba una decisión pendiente
  steps:
    - "Piensa en una decisión pequeña que tengas pendiente (un curso, un proveedor, un cambio en tu trabajo)."
    - "Usa la primera petición de ejemplo con tus opciones y tus criterios, sin datos personales de nadie."
    - "Apunta qué información te falta y qué vas a decidir tú."
  check: He usado Claude para ordenar una decisión y he decidido yo
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda, anthropic-constitucion]
---

## La idea

Para pensar, Claude funciona como un compañero rápido y paciente. Sirve en cuatro momentos:

- **Lluvia de ideas**: sacar muchas opciones sin juzgarlas todavía. Pide cantidad y variedad; luego eliges tú.
- **Pros y contras**: ordenar lo bueno y lo malo de cada opción, incluidos los costes que no se ven a primera vista.
- **Abogado del diablo**: pedirle que busque a propósito los fallos de tu plan. Es de lo más útil, porque tendemos a enamorarnos de nuestras ideas.
- **Decidir con criterios**: una **matriz de decisión**, es decir, una tabla con las opciones en filas y lo que te importa en columnas.

Lo que Claude **no** puede hacer:

- **Saber qué pesa más para ti.** Si no le das tus criterios, responderá con generalidades («depende»).
- **Conocer tu realidad** como tú: tu barrio, tus clientes, tu familia.
- **Garantizarte un resultado.** Nadie puede.

Por eso la regla es sencilla: **la decisión sigue siendo tuya**. Úsalo para pensar mejor, no para dejar de pensar. En decisiones con dinero, salud o asuntos legales importantes, contrasta con un profesional.

## En la práctica

1. Explica la situación, **tus opciones y tus limitaciones** (dinero, tiempo).
2. Pide que critique **cada** opción, no solo la que te gusta.
3. Dale **tus criterios**, cuál pesa más, y pide una tabla.
4. Pregúntale **qué información te falta**.

> Prueba: «Tengo una academia de repaso con 40 alumnos y quiero llegar a 60 el próximo curso con un presupuesto de 1.000 €. Dame 15 ideas variadas, de las más baratas a las más caras. Luego haz de abogado del diablo con las tres que te parezcan más prometedoras: qué puede salir mal y cómo lo sabría pronto.»

> Prueba: «Dudo entre tres programas de facturación para mi negocio de fontanería. Mis criterios, por orden: facilidad de uso, que cumpla la normativa de facturación en España y precio. Hazme una tabla comparativa, dime qué debería comprobar yo en cada web y no elijas por mí.»

## Error frecuente

Preguntar «¿qué hago?» sin dar criterios y tomar la respuesta como un veredicto.
