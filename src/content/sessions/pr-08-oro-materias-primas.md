---
title: "Oro y materias primas: qué compras cuando no hay beneficios"
description: "El oro no genera flujos: lingotes, ETC y fondos de futuros, sus costes ocultos (custodia, diferencial, roll) y qué papel pueden tener en una cartera."
level: basico
track: productos
order: 208
skills: [materias-primas, diversificacion]
goals: [entender, miedo]
prereqs: [pr-05-etf-por-dentro]
hook: "En las noticias, el oro «marca máximos» y alguien te dice que es lo único seguro. ¿Qué tienes cuando tienes oro?"
takeaway: "El oro no paga nada: solo ganas si otro paga más por él. Puede diversificar, pero es volátil y cada forma de tenerlo tiene su coste."
scenario:
  kind: producto
  label: "Tres formas de ejemplo"
  title: "10.000 € en oro y materias primas"
  body: "Lingote en una tienda de metales: te lo venden un 2 % por encima del precio del oro y te lo recompran un 2 % por debajo; guardarlo en una caja de seguridad cuesta 150 € al año. ETC de oro físico: cotiza en bolsa, está respaldado por lingotes custodiados por un banco y cobra un 0,15 % anual. Fondo cotizado de petróleo: no tiene barriles, sino futuros. Este mes el contrato que vence cotiza a 80 $ y el siguiente, a 82 $."
  note: "Ejemplo ficticio con fines educativos. Las cifras son supuestos, no precios reales."
questions:
  - type: choice
    id: pr08-q1
    q: "Compras el lingote por 10.000 € y lo vendes un año después, con el precio del oro igual. ¿Cuánto has perdido, aproximadamente?"
    options: ["Nada, el oro no ha bajado", "Unos 150 €, solo la caja de seguridad", "Unos 550 €: unos 400 € entre el sobreprecio al comprar y el descuento al vender, más 150 € de custodia"]
    answer: 2
    explain: "Pagas un 2 % por encima y te recompran un 2 % por debajo: unos 400 € de diferencial en total, más 150 € de custodia. El oro tendría que subir más de un 5 % solo para empatar."
  - type: estimate
    id: pr08-q2
    q: "El fondo de petróleo vende el contrato que vence a 80 $ y compra el siguiente a 82 $. Si los precios no cambian, ¿qué parte de su valor pierde con ese cambio (el «roll»)?"
    answer: 2.5
    tolerance: 0.3
    min: 0
    max: 10
    step: 0.1
    unit: "%"
    explain: "2 / 80 = 2,5 %. Con el mismo dinero compra menos barriles. Si el siguiente contrato es más caro mes tras mes, el fondo pierde aunque el precio del petróleo al contado no se mueva. Por eso un fondo de futuros puede separarse mucho de la materia prima."
  - type: truefalse
    id: pr08-q3
    q: "El oro, como una acción o un bono, genera una renta (beneficio, dividendo o cupón) que explica su rentabilidad a largo plazo."
    answer: false
    explain: "El oro no produce nada: un lingote dentro de 20 años seguirá siendo el mismo lingote. Su rentabilidad depende solo de lo que otros estén dispuestos a pagar. Eso no lo hace inútil, pero sí distinto de una empresa."
action:
  title: "Mira qué hay detrás de un producto de oro"
  steps:
    - "Busca un ETC de oro o un fondo de materias primas y abre su KID."
    - "Anota si tiene oro físico custodiado o futuros, y quién es el emisor."
    - "Anota sus costes anuales y su indicador de riesgo (del 1 al 7)."
  check: "Sé qué tengo de verdad cuando compro un producto de oro"
deeper: asignacion-y-rebalanceo
tool: diversificacion-rebalanceo
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: General. Fiscalidad, España.
sources: [cnmv-guia-etf, priips-kid, aeat-ahorro-2025, cnmv-inversor]
---

## La idea

Una empresa gana dinero; un bono paga intereses. **El oro no genera flujos.** Solo ganas si al vender alguien te paga más de lo que pagaste.

Tres formas de tenerlo:

| | Qué tienes | Costes típicos | Riesgo extra |
|---|---|---|---|
| **Oro físico** | El lingote o la moneda | Diferencial al comprar y vender, custodia, seguro | Robo, falsificaciones, vendedores no fiables |
| **ETC de oro** | Un valor de deuda respaldado por oro custodiado | Gasto anual | El emisor (mitigado por el respaldo) |
| **Fondos de futuros** (petróleo, gas, cereales…) | Contratos a plazo, no la materia prima | Gasto anual y coste de renovar contratos (roll) | Separarse mucho del precio al contado |

Su papel en una cartera: a veces sube cuando caen las acciones, pero no siempre, y puede pasar **muchos años sin subir**. Es volátil. Si lo usas, que sea una parte pequeña y decidida de antemano, nunca por una noticia.

En España, al vender con ganancias tributas en la base del ahorro. Un ETC no es un fondo: no admite traspasos sin tributar.

## Con números

10.000 € durante un año, si el precio del oro no cambia:

| | Coste aproximado |
|---|---:|
| Lingote (2 % + 2 % de diferencial y 150 € de custodia) | ≈ 550 € |
| ETC de oro (0,15 % + comisión del bróker) | ≈ 15 € + bróker |

El mismo oro puede costarte más de 30 veces más según cómo lo compres.
