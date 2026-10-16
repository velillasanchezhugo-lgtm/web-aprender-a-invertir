---
title: "Gráficos y análisis técnico: lo que dicen y lo que no"
description: "Velas, soportes, resistencias, medias móviles y volumen, explicados sin jerga, y por qué por sí solos no predicen el precio."
level: basico
track: trading
order: 506
skills: [analisis-tecnico-limites, psicologia-sesgos]
goals: [entender, miedo]
prereqs: [tr-02-estilos-de-trading]
hook: "Un curso te enseña una regla con medias móviles que «ganó un 38 % al año en los últimos cinco años». ¿Qué preguntas antes de creértelo?"
takeaway: "Un gráfico resume lo que ya pasó. Un backtest bonito no demuestra nada si se probaron muchas reglas, si faltan costes o si no se ha comprobado con datos nuevos."
scenario:
  kind: operacion
  label: "Backtest de ejemplo"
  title: "La regla «Cruce Dorado 13/47» de un curso online"
  body: "Un curso vende una regla para la acción ficticia Conservas Atlántico: comprar cuando la media móvil de 13 sesiones cruza hacia arriba la de 47 y vender al cruce contrario. Su backtest de 2020 a 2024 muestra un 38 % anual. En letra pequeña: se probaron 200 combinaciones de medias y se eligió la mejor; no incluye comisiones ni diferencial; la regla hizo 120 operaciones al año."
  note: "Ejemplo ficticio con fines educativos."
questions:
  - type: estimate
    id: tr06-q1
    q: "Si ninguna de las 200 combinaciones tuviera capacidad real de predecir, ¿cuántas parecerían «funcionar» por puro azar con un criterio estadístico habitual del 5 %?"
    answer: 10
    tolerance: 1
    min: 0
    max: 100
    step: 1
    unit: "reglas"
    explain: "200 × 5 % = 10. Si pruebas muchas reglas y te quedas con la mejor, casi seguro encuentras alguna que brilla en el pasado por suerte. Es el sobreajuste."
  - type: choice
    id: tr06-q2
    q: "La regla hace 120 operaciones al año y cada una cuesta, sumando comisiones y diferencial, un 0,15 % del capital. ¿Cuánto restan los costes al año?"
    options: ["Un 18 % del capital, casi la mitad del 38 % anunciado", "Un 0,15 %, porque se cobra una sola vez", "Nada, porque el backtest ya los tiene en cuenta"]
    answer: 0
    explain: "120 × 0,15 % = 18 % al año. Y eso sin contar impuestos ni deslizamiento. El 38 % se queda, como mucho, en un 20 %, antes de descontar la parte que es suerte."
  - type: truefalse
    id: tr06-q3
    q: "Si el precio ha rebotado tres veces en 12 €, ese soporte garantiza que volverá a rebotar."
    answer: false
    explain: "Un soporte solo describe dónde hubo compradores antes. Puede romperse con una mala noticia. Además, tendemos a recordar los rebotes y olvidar las rupturas: es el sesgo de confirmación."
action:
  title: "Mira un gráfico con otros ojos"
  steps:
    - "Abre el gráfico de un índice amplio en cualquier web financiera gratuita y ponlo en velas diarias."
    - "Señala una vela verde y una roja e identifica su apertura, cierre, máximo y mínimo."
    - "Añade una media móvil de 200 sesiones y pregúntate: ¿cuántas veces la cruzó el precio y luego se dio la vuelta?"
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

Las herramientas básicas del análisis técnico:

- **Velas**: cada una resume un periodo (un día, una hora) con cuatro precios: apertura, cierre, máximo y mínimo. Verde si cerró por encima de la apertura; roja si cerró por debajo.
- **Soportes y resistencias**: niveles donde antes el precio dejó de caer o de subir.
- **Medias móviles**: el precio medio de las últimas N sesiones. Suaviza el ruido, pero siempre va **por detrás** del precio.
- **Volumen**: cuántas acciones se negociaron. Un movimiento con poco volumen dice poco.

Son útiles para **describir** lo que pasó y para planificar dónde poner un stop. No predicen solas, por tres motivos:

1. **Sesgo de confirmación**: ves las figuras que confirman lo que ya creías.
2. **Sobreajuste**: ajustar una regla al pasado hasta que encaje.
3. **Costes**: una regla que opera mucho necesita una ventaja enorme para cubrirlos.

## Con números

Una vela diaria ficticia: apertura **12,40 €**, máximo **12,55 €**, mínimo **11,95 €**, cierre **12,10 €**. Es **roja**: cerró 0,30 € por debajo de la apertura, tras moverse 0,60 € en el día.

Y el backtest del caso, con números honestos:

| Concepto | Al año |
|---|---:|
| Resultado anunciado (sin costes) | +38 % |
| Costes: 120 operaciones × 0,15 % | −18 % |
| Antes de impuestos y deslizamiento | +20 % |
| Parte que puede ser suerte (1 de 200 reglas) | Desconocida |

Los estudios con operadores reales (Taiwán, Brasil) encuentran que solo una pequeña minoría gana de forma estable después de costes. Y la CNMV recuerda el sesgo de confirmación: tiendes a seguir a quien dice lo que ya piensas.
