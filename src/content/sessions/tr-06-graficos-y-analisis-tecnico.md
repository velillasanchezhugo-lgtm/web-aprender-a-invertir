---
title: "Gráficos y análisis técnico: lo que dicen y lo que no"
description: "Velas, soportes, resistencias, medias móviles y volumen, explicados sin jerga, y por qué por sí solos no predicen el precio."
level: basico
track: trading
order: 506
skills: [analisis-tecnico-limites, psicologia-sesgos]
terms: [analisis-tecnico, backtest, cotizacion]
goals: [entender, miedo]
prereqs: [tr-02-estilos-de-trading]
hook: "Un curso te enseña una regla con gráficos que «ganó muchísimo en los últimos cinco años». ¿Qué preguntas antes de creértelo?"
takeaway: "Un gráfico resume lo que ya pasó. Un resultado pasado espectacular no demuestra nada si se probaron muchas reglas, si faltan los costes o si no se ha comprobado con datos nuevos."
scenario:
  kind: operacion
  label: "Anuncio de ejemplo"
  title: "La regla «Cruce Dorado» de un curso online"
  body: "Un curso vende una regla basada en medias móviles para comprar y vender una acción ficticia. Su gráfico de resultados de los últimos años es espectacular. En la letra pequeña: probaron cientos de reglas parecidas y enseñan la que mejor salió, los resultados no incluyen comisiones y la regla compra y vende muchísimas veces al año."
  note: "Ejemplo ficticio con fines educativos."
questions:
  - type: choice
    id: tr06-q1
    q: "¿Qué es lo más sospechoso del resultado del curso?"
    options: ["Que use medias móviles", "Que probaran cientos de reglas y enseñen solo la que mejor salió en el pasado", "Que el gráfico abarque varios años", "Que el curso sea online"]
    answer: 1
    explain: "Si pruebas muchas reglas, alguna brillará en el pasado por pura suerte. Es el sobreajuste: encaja con lo que ya pasó, pero no sirve para lo que viene."
  - type: choice
    id: tr06-q2
    q: "La regla opera muchísimas veces al año y el resultado no incluye costes. ¿Qué pasa al añadirlos?"
    options: ["Nada, los costes son mínimos", "El resultado baja mucho, porque cada operación paga comisión y diferencial", "El resultado mejora", "Solo cambian los impuestos"]
    answer: 1
    explain: "Un coste pequeño repetido muchas veces se convierte en uno grande. Una regla que opera mucho necesita una ventaja enorme para cubrirlo."
  - type: truefalse
    id: tr06-q3
    q: "Si el precio ha rebotado tres veces en el mismo nivel, ese soporte garantiza que volverá a rebotar."
    answer: false
    explain: "Un soporte solo describe dónde hubo compradores antes. Puede romperse con una mala noticia. Además, tendemos a recordar los rebotes y olvidar las rupturas."
tips:
  - "Usa los gráficos para entender lo que ha pasado, no como bola de cristal."
  - "Desconfía de resultados pasados espectaculares sin costes ni pruebas con datos nuevos."
  - "Pregunta siempre cuántas reglas se probaron antes de enseñar la ganadora."
  - "Si quieres aprender a leerlos, practica con dinero ficticio."
action:
  title: "Mira un gráfico con otros ojos"
  steps:
    - "Abre el gráfico de un índice amplio en cualquier web financiera gratuita y ponlo en velas diarias."
    - "Señala una vela verde y una roja y localiza su apertura, cierre, máximo y mínimo."
    - "Añade una media móvil de 200 sesiones y fíjate en cuántas veces la cruzó el precio y luego se dio la vuelta."
  check: "Sé leer una vela y sé por qué un gráfico no predice solo"
deeper: analisis-tecnico-y-limites
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: General
sources: [barber-taiwan-2014, chague-daytrade-2019, cnmv-finfluencers-infografia]
---

## La idea

El **análisis técnico** intenta adivinar el precio mirando gráficos. Sus herramientas básicas:

- **Velas**: cada una resume un periodo (un día, una hora) con cuatro precios: apertura, cierre, máximo y mínimo. Verde si cerró por encima de donde abrió; roja si cerró por debajo.
- **Soportes y resistencias**: niveles donde antes el precio dejó de caer o de subir.
- **Medias móviles**: el precio medio de los últimos días. Suaviza los saltos, pero siempre va por detrás del precio.
- **Volumen**: cuántas acciones se compraron y vendieron. Un movimiento con poco volumen dice poco.

## En la práctica

Los gráficos sirven para **ver lo que ha pasado** y para planificar dónde cortar una pérdida. No predicen solos, por tres motivos:

1. **Ves lo que quieres ver**: encuentras las figuras que confirman lo que ya creías.
2. **Sobreajuste**: con suficientes pruebas, cualquier regla parece funcionar en el pasado.
3. **Costes**: una regla que opera mucho necesita ganar mucho para cubrirlos.

Los estudios con operadores reales, en Taiwán y en Brasil, encuentran que solo una minoría muy pequeña gana de forma estable.

## Error frecuente

Comprar un curso porque su gráfico de resultados pasados es precioso. El pasado elegido a dedo siempre sale bonito.
