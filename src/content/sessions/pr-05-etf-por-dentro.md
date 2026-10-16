---
title: "ETF por dentro: lo que dice (y esconde) su nombre"
description: "Réplica física o sintética, acumulación o distribución, domicilio, TER, diferencial y error de seguimiento. Y por qué los ETF apalancados no son para mantener."
level: basico
track: productos
order: 205
skills: [fondos-etf, diversificacion]
goals: [entender, jubilacion, ordenar]
prereqs: [pr-04-fondos-activos-e-indexados]
hook: "Buscas un ETF y aparecen nombres como «Índice Mundial UCITS ETF (Acc)» o «Tecnología 2x Diario». ¿Qué te dice cada palabra?"
takeaway: "Un ETF se elige por su índice, su coste total y su estructura, no por su nombre llamativo. Y en España, venderlo con ganancias siempre tributa."
scenario:
  kind: producto
  label: "Fichas de ejemplo"
  title: "Dos ETF que cotizan en la misma bolsa"
  body: "ETF Índice Mundial UCITS (Acc): domicilio en Irlanda, réplica física, acumula dividendos, TER 0,20 %, error de seguimiento anual 0,10 %, diferencial habitual entre compra y venta 0,05 %. ETF Tecnología 2x Diario: réplica sintética con permutas financieras (swaps), busca el doble de la variación diaria de un índice tecnológico, TER 0,95 %."
  note: "Ejemplo ficticio con fines educativos."
questions:
  - type: estimate
    id: pr05-q1
    q: "El índice tecnológico sube un 10 % un día y baja un 10 % al siguiente: acaba un 1 % abajo. ¿Cuánto ha variado el ETF Tecnología 2x Diario en esos dos días?"
    answer: -4
    tolerance: 0.5
    min: -20
    max: 10
    step: 0.5
    unit: "%"
    explain: "Día 1: +20 % (de 100 a 120). Día 2: −20 % (de 120 a 96). Resultado: −4 %, no −2 %. El efecto de reajustarse cada día hace que, con altibajos, el ETF apalancado pierda más de lo esperado. La guía de la CNMV sobre ETF lo explica así: replican la evolución diaria, no la de todo el periodo, y entrañan más riesgo."
  - type: truefalse
    id: pr05-q2
    q: "Si eres residente en España, puedes pasar tu dinero del ETF Índice Mundial a un fondo indexado sin tributar, mediante un traspaso."
    answer: false
    explain: "El régimen de traspasos sin tributar no se aplica a los ETF para personas físicas residentes. Al vender con ganancias, tributas en la base del ahorro, aunque reinviertas al día siguiente."
  - type: choice
    id: pr05-q3
    q: "¿Qué diferencia fiscal práctica hay en España entre un ETF de acumulación (Acc) y uno de distribución?"
    options: ["Ninguna", "El de distribución te paga dividendos que tributan cada año; el de acumulación los reinvierte y solo tributas al vender", "El de acumulación no tributa nunca"]
    answer: 1
    explain: "Con acumulación, los dividendos se quedan dentro y siguen creciendo hasta que vendas. Con distribución, cada pago va a tu cuenta y tributa ese año en la base del ahorro. Elige según si necesitas esas rentas o no."
action:
  title: "Lee el nombre y la ficha de un ETF"
  steps:
    - "Busca un ETF que tengas o que te interese y anota su domicilio (Irlanda, Luxemburgo…) y si es UCITS."
    - "Mira si es de réplica física o sintética, y si es Acc (acumulación) o Dist (distribución)."
    - "Anota su TER y, en la ficha del emisor, el error de seguimiento si lo publica."
  check: "Sé leer la estructura y el coste de un ETF"
deeper: comisiones-y-fiscalidad
tool: comparador-comisiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: España y UE
sources: [cnmv-guia-etf, aeat-traspasos-2025, priips-kid, aeat-ahorro-2025]
---

## La idea

Un **[ETF](/es/glosario/#etf)** es un fondo que cotiza en bolsa. Su ficha te dice:

- **Réplica física**: compra las acciones del índice (todas o una muestra). **Sintética**: obtiene la rentabilidad mediante derivados con una contraparte, lo que añade riesgo de contraparte.
- **Acc / Dist**: acumula o reparte los dividendos.
- **Domicilio y UCITS**: la mayoría de los que se venden a minoristas en Europa están en Irlanda o Luxemburgo y cumplen la directiva UCITS (reglas de diversificación y custodia).
- **[TER](/es/glosario/#ter)**: gastos anuales.
- **[Diferencial](/es/glosario/#diferencial)**: lo que pierdes entre el precio de compra y el de venta.
- **Error de seguimiento**: cuánto se separa del índice.

Cuidado con dos familias:

- **Temáticos**: un sector de moda (robótica, hidrógeno…). Poca diversificación y, a menudo, comprados tarde.
- **Apalancados e inversos**: multiplican o invierten la variación **diaria**. A más de un día, el resultado no es el que esperas.

## Con números

Compras 5.000 € del ETF Índice Mundial:

| Coste | Cálculo | Importe |
|---|---|---:|
| Diferencial (pagas la mitad al comprar) | 5.000 × 0,05 % / 2 | 1,25 € |
| TER del primer año | 5.000 × 0,20 % | 10 € |
| Comisión del bróker | Según tarifa | Mírala en el comparador |

El ETF 2x cobra 0,95 % al año: 47,50 € por los mismos 5.000 €, además del efecto del reajuste diario.
