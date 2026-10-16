---
title: Cuando cae (y caerá)
description: "Qué hacer cuando tu cartera baja: releer el plan, dejar de mirar a diario, seguir aportando y rebalancear si toca. Y lo que cuesta salir y volver tarde."
level: basico
track: invertir-ya
order: 108
skills: [psicologia-sesgos, caidas-recuperacion, plan-inversion]
goals: [miedo, jubilacion, objetivo]
prereqs: [ya-07-rebalancear]
hook: "Abres la app y tu cartera está un 17 % por debajo de hace tres meses. Todos los titulares hablan de crisis. ¿Qué haces hoy?"
takeaway: En una caída, tu trabajo es cumplir el plan que escribiste en calma. Seguir aportando y no vender es casi siempre todo lo que hace falta.
scenario:
  kind: noticia
  label: Noticia de ejemplo
  title: "Las bolsas mundiales encadenan su peor trimestre en años: −25 %"
  body: "Los índices mundiales de acciones caen un 25 % en tres meses. Los analistas no se ponen de acuerdo sobre si lo peor ha pasado. Clara tenía 20.000 €: 14.000 € en un fondo indexado global de acciones (70 %) y 6.000 € en renta fija euro (30 %). Aporta 300 € al mes y su plan dice: «Si cae un 30 %: no vendo, sigo aportando y releo esta página»."
  note: Ejemplo ficticio con fines educativos. Para simplificar, la renta fija no se mueve.
questions:
  - type: estimate
    id: ya08-q1
    q: "Si las acciones caen un 25 % y la renta fija no se mueve, ¿cuánto cae en total la cartera 70/30 de Clara?"
    answer: -17.5
    tolerance: 0.5
    min: -50
    max: 0
    step: 0.5
    unit: "%"
    explain: "70 % × −25 % = −17,5 %. Sus 20.000 € pasan a 16.500 €. La renta fija hace su trabajo: la caída de la cartera es bastante menor que la de la bolsa."
  - type: choice
    id: ya08-q2
    q: "¿Qué le toca hacer a Clara según su plan?"
    options: ["Vender las acciones y volver cuando las noticias mejoren", "Releer su plan, mantener la aportación de 300 € y comprobar si su reparto se ha desviado más de 5 puntos", "Pasar todo a renta fija hasta que la bolsa recupere"]
    answer: 1
    explain: "Su peso en acciones ha bajado al 63,6 %, más de 5 puntos por debajo del 70 %: su regla le dice que dirija aportaciones (o un traspaso) a acciones, no que venda."
  - type: truefalse
    id: ya08-q3
    q: "Los mejores días de la bolsa suelen llegar cuando todo está tranquilo, lejos de los peores, así que se puede salir en la caída y volver después sin perder mucho."
    answer: false
    explain: "Según J.P. Morgan Asset Management (2025), los mejores días suelen estar cerca de los peores, y perderse los 10 mejores de los últimos 20 años habría reducido la rentabilidad anualizada casi a la mitad. Quien sale en la caída suele perderse la recuperación."
action:
  title: Prepárate para la próxima caída
  steps:
    - "Relee la línea «si cae un 30 %» de tu plan y reescríbela si no te la crees."
    - "Prueba tu cartera en el simulador de caídas y mira la cifra en euros, no solo en porcentaje."
    - "Desactiva las notificaciones de precios de tu app y decide un día al mes para mirarla."
  check: Sé exactamente qué haré, y qué no haré, cuando mi cartera caiga
deeper: psicologia-y-sesgos
tool: simulador-caidas
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: General
sources: [jpm-retirement-2025, kahneman-tversky-1979, sp500-history]
---

## La idea

Las caídas no son un fallo del plan: **forman parte de él**. El S&P 500 cayó un 56,8 % entre 2007 y 2009 y se recuperó años después; quien vendió en el fondo convirtió una caída en una pérdida.

Cuatro cosas que hacer:

1. **Relee tu plan.** Lo escribiste en calma para este momento.
2. **No mires a diario.** Las pérdidas duelen más que las ganancias equivalentes, y mirar mucho multiplica las ganas de actuar.
3. **Sigue aportando.** Con el precio más bajo, tu aportación compra más participaciones.
4. **Rebalancea si toca**, con aportaciones o traspasos, según tu regla de 5 puntos.

Y una que no: **salir para volver «cuando pase»**. Los mejores días suelen llegar justo después de los peores, cuando aún da miedo.

## Con números

La cartera de Clara tras la caída:

| | Antes | Después |
|---|---:|---:|
| Acciones | 14.000 € | 10.500 € |
| Renta fija | 6.000 € | 6.000 € |
| **Total** | **20.000 €** | **16.500 €** (−17,5 %) |
| Peso en acciones | 70 % | 63,6 % |

Para volver al 70 % necesita que las acciones sean 11.550 €: **1.050 €** más, con aportaciones o un traspaso desde la renta fija.

Y sus 300 € al mes, con el precio un 25 % más bajo, compran un **33 % más** de participaciones que antes de la caída.
