---
title: "Planes de pensiones: la rebaja de hoy y la factura de mañana"
description: "Cuánto puedes reducir en la renta, cuándo puedes sacar el dinero (incluida la regla de los 10 años) y cómo tributa el rescate. Para decidir si te encaja."
level: basico
track: productos
order: 206
skills: [planes-pensiones, fiscalidad-espana]
goals: [jubilacion, objetivo]
prereqs: [11-impuestos-lo-justo]
hook: "Cada diciembre oyes «aporta a tu plan y desgrava». ¿Te ahorras impuestos de verdad o solo los aplazas?"
takeaway: "Un plan de pensiones no elimina impuestos: los aplaza. Compensa sobre todo si hoy tu tipo marginal es alto y al jubilarte será más bajo."
scenario:
  kind: producto
  label: "Caso de ejemplo"
  title: "Lucía, 42 años, y su plan de pensiones individual"
  body: "Lucía gana 40.000 € brutos al año y su tipo marginal en el IRPF es del 30 % (depende de tu comunidad autónoma). Aporta 1.500 € al año a un plan individual que invierte en acciones globales, con unos gastos totales del 0,8 %. Su empresa no tiene plan de empleo. Prevé que, ya jubilada, su tipo marginal será del 24 %."
  note: "Ejemplo ficticio con fines educativos. Los tipos marginales son supuestos."
questions:
  - type: estimate
    id: pr06-q1
    q: "Lucía aporta 1.500 € en el año y su tipo marginal es del 30 %. ¿Cuánto paga de menos en la declaración de la renta de ese año?"
    answer: 450
    tolerance: 0
    min: 0
    max: 1500
    step: 10
    unit: "€"
    explain: "1.500 € × 30 % = 450 €. La aportación reduce la base imponible general, así que el ahorro es tu tipo marginal. No es un regalo: pagarás impuestos cuando rescates."
  - type: choice
    id: pr06-q2
    q: "Lucía se jubila y rescata el plan. ¿Cómo tributa ese dinero?"
    options: ["Solo la ganancia, en la base del ahorro, como un fondo", "Todo lo que cobra (aportaciones y rentabilidad) como rendimiento del trabajo, en la base general", "No tributa porque ya tributó al aportar"]
    answer: 1
    explain: "Lo que cobras de un plan de pensiones es rendimiento del trabajo: se suma a tu pensión pública y tributa a tu tipo marginal. Si lo sacas todo en un año, puedes saltar a un tramo más alto; repartir el rescate en varios años suele pagar menos."
  - type: truefalse
    id: pr06-q3
    q: "Desde 2025, en un plan individual puedes sacar el dinero correspondiente a aportaciones con al menos 10 años de antigüedad, sin estar jubilado."
    answer: true
    explain: "La ley lo permite desde el 1 de enero de 2025 (en 2025, para lo aportado hasta 2015). El resto solo se puede rescatar por jubilación, incapacidad, dependencia o fallecimiento, o en casos excepcionales como enfermedad grave o desempleo de larga duración."
action:
  title: "Haz tu número del plan"
  steps:
    - "Busca en tu última declaración (o en el simulador de la AEAT) tu base liquidable general y tu tipo marginal aproximado."
    - "Multiplica lo que aportarías al año por ese tipo: es lo que te ahorrarías hoy."
    - "Si tienes plan, mira en tu extracto los gastos totales (gestión y depósito) y desde qué año tienes aportaciones."
  check: "Sé cuánto me ahorra hoy un plan y cómo pagaré al rescatarlo"
deeper: objetivos-horizonte-liquidez
tool: interes-compuesto
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: España, territorio común. Límites del ejercicio 2025.
sources: [boe-irpf, aeat-pensiones-2025, boe-planes-pensiones, aeat-ahorro-2025]
---

## La idea

Tres cosas que tienes que saber:

1. **Reducción hoy.** Lo que aportas se resta de tu base imponible general. Límite: el menor entre **1.500 € al año** y el **30 %** de tus rendimientos netos del trabajo y actividades. Con un plan de empleo de tu empresa, el límite sube hasta **8.500 € más**, si viene de contribuciones de la empresa o de tus aportaciones a ese mismo plan dentro de una escala.
2. **Iliquidez.** Solo puedes sacarlo al jubilarte, por incapacidad, dependencia o fallecimiento, en casos excepcionales (enfermedad grave, desempleo de larga duración) o si las aportaciones tienen **más de 10 años**.
3. **Factura al rescatar.** Todo lo que cobras tributa como **rendimiento del trabajo**, en la base general.

Encaja mejor si tu tipo marginal hoy es alto, esperas uno más bajo al jubilarte y no vas a necesitar ese dinero. Si ganas poco o tienes deudas caras, suele haber prioridades antes.

## Con números

Una aportación de 1.500 € frente a invertir lo que te quedaría tras impuestos en un fondo. Suponemos que ambos crecen un 5 % anual ya descontados sus gastos, durante 25 años:

| | Plan de pensiones | Fondo de inversión |
|---|---:|---:|
| Lo que inviertes de tu sueldo | 1.500 € (450 € los pone la rebaja fiscal) | 1.050 € (lo que queda tras el 30 %) |
| Valor a los 25 años | 5.080 € | 3.556 € |
| Impuestos al sacarlo | 24 % sobre todo: 1.219 € | 19 % sobre la ganancia: 476 € |
| **Te queda** | **3.860 €** | **3.080 €** |

Si al jubilarte tu tipo fuera también del 30 %, te quedarían 3.556 €: la ventaja se reduce. Y si el plan cobra mucho más que un fondo barato, puede desaparecer.
