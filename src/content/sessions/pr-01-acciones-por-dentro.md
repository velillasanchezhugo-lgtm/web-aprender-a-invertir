---
title: "Acciones por dentro: qué compras de verdad"
description: "Propiedad, dividendos y revalorización: de dónde sale lo que ganas con una acción, cómo puedes perderlo todo y qué es la dilución."
level: basico
track: productos
order: 201
skills: [acciones, riesgo-volatilidad]
goals: [entender, objetivo]
prereqs: [09-los-cuatro-productos]
hook: "Una empresa que conoces anuncia que emitirá millones de acciones nuevas. Tú no haces nada. ¿Ha cambiado lo que tienes?"
takeaway: "Una acción es un trozo de los beneficios futuros de una empresa. Si los beneficios no llegan, el precio tampoco aguanta."
scenario:
  kind: producto
  label: "Ficha de ejemplo"
  title: "Panaderías Norte S.A. (acción)"
  body: "Cotiza a 20 €. Tiene 10 millones de acciones, así que la bolsa la valora en 200 millones. El año pasado ganó 16 millones (1,60 € por acción) y repartió la mitad como dividendo: 0,80 € por acción. Ahora anuncia una ampliación de capital: 2,5 millones de acciones nuevas a 16 € para abrir 40 obradores. Tú tienes 10.000 acciones."
  note: "Ejemplo ficticio con fines educativos."
questions:
  - type: estimate
    id: pr01-q1
    q: "Tienes 10.000 de los 10 millones de acciones de Panaderías Norte (un 0,10 %). Si no acudes a la ampliación de 2,5 millones de acciones nuevas, ¿qué porcentaje de la empresa tendrás después?"
    answer: 0.08
    tolerance: 0
    min: 0
    max: 0.2
    step: 0.01
    unit: "%"
    explain: "10.000 / 12.500.000 = 0,08 %. Eso es la dilución: tu trozo se hace más pequeño. Para no diluirte puedes ejercer tu derecho de preferencia (comprar acciones nuevas en proporción a las que tienes) o vender ese derecho si cotiza, aunque en sociedades cotizadas la junta puede excluirlo."
  - type: choice
    id: pr01-q2
    q: "A largo plazo, ¿de dónde sale sobre todo la rentabilidad de tener acciones de Panaderías Norte?"
    options: ["De que otros inversores quieran pagar más, pase lo que pase con el negocio", "De los beneficios que genera la empresa: los que reparte como dividendo y los que reinvierte para crecer", "Del dividendo, que la empresa está obligada a pagar cada año"]
    answer: 1
    explain: "El precio puede moverse mucho por expectativas, pero a largo plazo sigue a los beneficios. El dividendo no es obligatorio: la empresa puede recortarlo o suprimirlo si gana menos."
  - type: truefalse
    id: pr01-q3
    q: "Si Panaderías Norte quiebra, los accionistas cobran antes que los bancos que le prestaron dinero."
    answer: false
    explain: "Los accionistas son los últimos de la fila: primero se paga a acreedores (bancos, bonistas, proveedores, Hacienda). Por eso una acción puede llegar a valer 0 y por eso no conviene concentrar tu dinero en pocas empresas."
action:
  title: "Mira una empresa como propietario"
  steps:
    - "Elige una empresa cotizada que conozcas y busca en su web de relación con inversores (o en la CNMV) cuántas acciones tiene y su beneficio del último año."
    - "Divide el beneficio entre el número de acciones: es su beneficio por acción."
    - "Comprueba si ha hecho ampliaciones de capital en los últimos años: si el número de acciones crece mucho, cada acción representa menos."
  check: "Sé qué parte de los beneficios de una empresa corresponde a cada acción"
deeper: productos-basicos
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: España
sources: [boe-lsc, cnmv-inversor, aeat-ahorro-2025, boe-rirpf]
---

## La idea

Comprar una **[acción](/es/glosario/#accion)** es comprar un trozo de una empresa. La ley te da, como mínimo, derecho a una parte de los beneficios que reparta, a votar en la junta, a información y a suscribir acciones nuevas antes que otros (derecho de preferencia).

Ganas por dos vías:

- **Dividendos**: la parte del beneficio que la empresa reparte. No están garantizados.
- **Revalorización**: si la empresa gana más con los años, cada acción tiende a valer más.

Y puedes perder por dos:

- **Caídas de precio**: aunque el negocio vaya bien, la bolsa puede bajar un 30 % en meses ([volatilidad](/es/glosario/#volatilidad)).
- **Quiebra**: el accionista cobra el último. La acción puede valer **0**.

Ojo con la **dilución**: si la empresa emite acciones nuevas, tu porcentaje baja, aunque tengas las mismas acciones.

## Con números

Panaderías Norte gana 16 millones. Con 10 millones de acciones, son **1,60 € por acción**. Tras la ampliación, con 12,5 millones:

| | Antes | Después (mismo beneficio) |
|---|---:|---:|
| Acciones | 10.000.000 | 12.500.000 |
| Beneficio por acción | 1,60 € | 1,28 € |
| Tu parte (10.000 acciones) | 0,10 % | 0,08 % |

Si los 40 millones nuevos generan beneficios, el beneficio por acción puede recuperarse. Si no, has perdido un 20 % de beneficio por acción.

El dividendo de 0,80 € a 20 € es un **4 %** bruto. En España tributa en la base del ahorro y te retienen un 19 % al cobrarlo.

## Error frecuente

Elegir una acción solo porque «paga buen dividendo». Un dividendo alto puede ser la señal de que el mercado espera que se recorte.
