---
title: Rebalancear sin complicarte
description: "Una regla simple para volver a tu reparto: una vez al año o si te desvías más de 5 puntos. Y cómo hacerlo con aportaciones, sin vender ni tributar."
level: basico
track: invertir-ya
order: 107
skills: [rebalanceo, asignacion-activos]
goals: [jubilacion, ordenar, miedo]
prereqs: [ya-06-aportar-cada-mes]
hook: "Tu plan decía 70 % en acciones. Tras un buen año, ya son el 76 %. Nadie te avisó, pero tu cartera es ahora más arriesgada de lo que elegiste."
takeaway: "Revisa una vez al año o si te desvías más de 5 puntos. Primero corrige con aportaciones; vender, solo si hace falta."
scenario:
  kind: operacion
  label: Caso de ejemplo
  title: "La revisión de enero de Elena"
  body: "Plan de Elena: 70 % acciones globales y 30 % renta fija euro, revisión cada enero y regla de 5 puntos. Este enero tiene 8.400 € en el fondo de acciones y 2.700 € en el de renta fija: 11.100 € en total. Aporta 300 € al mes. Sus dos productos son fondos indexados, que puede traspasar entre sí."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: ya07-q1
    q: "En julio, la cartera de Elena está en 73 % acciones y 27 % renta fija. No es su fecha de revisión. ¿Qué dice su regla?"
    options: ["Rebalancear ya: cualquier desvío es un riesgo", "Nada: se ha desviado 3 puntos, menos de los 5 de su regla", "Vender todas las acciones, porque han subido mucho"]
    answer: 1
    explain: "La regla sirve justo para no tocar la cartera por cada movimiento. Con 3 puntos de desvío, sigue aportando como siempre y revisa en enero."
  - type: estimate
    id: ya07-q2
    q: "Otra cartera con objetivo 60/40 tiene 7.200 € en acciones y 4.000 € en renta fija (64 % / 36 %). ¿Cuánto debe aportar solo a renta fija para volver al 60/40 sin vender nada?"
    answer: 800
    tolerance: 50
    min: 0
    max: 3000
    step: 50
    unit: "€"
    explain: "Para que 7.200 € sean el 60 %, la renta fija debe ser 7.200 × 40 / 60 = 4.800 €. Faltan 4.800 − 4.000 = 800 €. Si aportas 200 € al mes, bastan cuatro meses dirigiendo todo a renta fija."
  - type: truefalse
    id: ya07-q3
    q: "Rebalancear vendiendo parte de un ETF con ganancias no tiene coste fiscal, porque el dinero se queda invertido."
    answer: false
    explain: "Vender un ETF con ganancias tributa, aunque reinviertas al momento: los ETF no tienen régimen de traspasos. Por eso primero se rebalancea con aportaciones, y con fondos se puede usar un traspaso."
action:
  title: Añade tu regla de rebalanceo al plan
  steps:
    - "Escribe en tu plan: «Reviso cada [mes] y rebalanceo si me desvío más de 5 puntos»."
    - "Calcula tu reparto actual: valor de cada pieza dividido entre el total."
    - "Si te has desviado, calcula cuánto aportar a la pieza que se ha quedado corta para volver al objetivo."
  check: Tengo una regla de rebalanceo y sé calcular cuánto aportar a cada pieza
deeper: asignacion-y-rebalanceo
tool: diversificacion-rebalanceo
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: "General (fiscalidad: España)"
sources: [aeat-traspasos-2025, cnmv-etf-guia-rapida]
---

## La idea

Lo que más sube **gana peso** sin que lo decidas. Tras unos años buenos, una cartera 70/30 puede ser 80/20 y la próxima caída te pillará con más riesgo del que elegiste.

**Rebalancear** es devolver la cartera a su reparto. Una regla sencilla:

- **Cuándo**: una vez al año, en una fecha fija, **o** si una pieza se desvía **más de 5 puntos**.
- **Cómo**, por orden de preferencia:
  1. **Con aportaciones**: dirige el dinero nuevo a la pieza que se ha quedado corta. No vendes nada ni tributas.
  2. **Con un traspaso** entre fondos: tampoco tributa ahora.
  3. **Vendiendo** (ETF o acciones): tributa por la ganancia de lo que vendas.

El objetivo no es ganar más, sino **mantener el riesgo que elegiste**.

## Con números

La cartera de Elena en enero: **8.400 €** en acciones de **11.100 €** son un **75,7 %**. Se ha desviado 5,7 puntos: toca actuar.

| Opción | Qué hace | Resultado |
|---|---|---|
| Aportaciones | 900 € a renta fija (tres meses de 300 €) | 8.400 / 12.000 = 70 % |
| Traspaso | 630 € del fondo de acciones al de renta fija | 7.770 / 11.100 = 70 % |

La renta fija necesaria con aportaciones sale de 8.400 × 30 / 70 = 3.600 €; tiene 2.700 €, así que faltan 900 €.

## Error frecuente

Rebalancear cada mes o cada vez que el mercado se mueve. Cuanto más tocas, más costes, más impuestos y más tentaciones de improvisar.
