---
title: ¿Fondo indexado o ETF?
description: "Las diferencias que importan en España: traspasos sin tributar, comisiones de compra, mínimos, acumulación o distribución y dónde se compra cada uno."
level: basico
track: invertir-ya
order: 104
skills: [fondos-etf, fiscalidad-espana, costes-comisiones]
goals: [jubilacion, objetivo, ordenar]
prereqs: [ya-03-una-cartera-indexada]
hook: "Un fondo indexado y un ETF pueden seguir el mismo índice con el mismo coste anual. Entonces, ¿da igual cuál compres? En España, no del todo."
takeaway: "Mismo índice, distinto envoltorio. El fondo se puede traspasar sin tributar; el ETF, no. Y en cada compra de ETF, mira la comisión."
scenario:
  kind: producto
  label: Fichas de ejemplo
  title: "Mismo índice mundial, dos envoltorios"
  body: "Fondo indexado X: sigue un índice mundial de acciones, gastos corrientes del 0,20 %, acumulación, sin comisión de suscripción ni de reembolso, se compra en una plataforma de fondos al valor liquidativo del día. ETF Y: sigue el mismo índice, gastos corrientes del 0,20 %, acumulación, cotiza en bolsa a unos 30 € por participación y el bróker cobra 2 € por cada compra. Ana quiere aportar 150 € al mes durante muchos años."
  note: Ejemplo ficticio con fines educativos. No son productos reales.
questions:
  - type: estimate
    id: ya04-q1
    q: "Si Ana compra el ETF Y cada mes, ¿qué porcentaje de cada aportación de 150 € se va en la comisión de 2 €?"
    answer: 1.3
    tolerance: 0.1
    min: 0
    max: 5
    step: 0.1
    unit: "%"
    explain: "2 / 150 = 1,33 %. Son 24 € al año, más que los gastos anuales del fondo sobre una cartera de 10.000 €. Con aportaciones pequeñas, la comisión por compra pesa mucho; con importes grandes o poco frecuentes, casi nada."
  - type: choice
    id: ya04-q2
    q: "Tras unos años, Ana gana 5.000 € y quiere pasarse a otro producto más barato. ¿Qué ocurre según el envoltorio?"
    options: ["Da igual: en los dos casos tributa al cambiar", "Con el fondo puede traspasar sin tributar ahora; con el ETF tiene que vender y tributar por la ganancia", "Con el ETF puede traspasar; con el fondo no"]
    answer: 1
    explain: "El régimen de traspasos de la Ley del IRPF se aplica a los fondos, no a los ETF. Vender el ETF supondría unos 950 € de impuesto (5.000 € × 19 %, primer tramo de 2025), dinero que deja de estar invertido."
  - type: truefalse
    id: ya04-q3
    q: "En un fondo o ETF de distribución, los dividendos que te paga tributan en la declaración del año en que los cobras, aunque los vuelvas a invertir."
    answer: true
    explain: "Con distribución tributas cada año por lo que cobras. Con acumulación, el fondo reinvierte por dentro y solo tributas cuando vendes. Si no necesitas la renta, la acumulación suele ser más sencilla."
action:
  title: Elige tu envoltorio
  steps:
    - "Mira cuánto aportarás cada mes según tu plan."
    - "Busca en las tarifas de una entidad autorizada cuánto cobra por comprar un ETF y si cobra algo por fondos indexados."
    - "Calcula la comisión como porcentaje de tu aportación y anota en tu plan: fondo, ETF, acumulación o distribución."
  check: Sé si me encaja más un fondo indexado o un ETF, y por qué
deeper: comisiones-y-fiscalidad
tool: comparador-comisiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: "España, territorio común. Escala del ahorro del ejercicio 2025."
sources: [aeat-traspasos-2025, aeat-ahorro-2025, cnmv-etf-guia-rapida, cnmv-guia-fondos]
---

## La idea

Un **fondo indexado** y un **ETF** pueden llevar exactamente las mismas empresas. Cambia el envoltorio:

| | Fondo indexado | ETF |
|---|---|---|
| Cambiar a otro sin tributar (**traspaso**) | Sí | No: vendes y tributas |
| Precio de compra | Valor liquidativo del día (o del siguiente) | Precio de bolsa en tiempo real |
| Comisión por compra | A menudo ninguna; mira el folleto | La del bróker, más el diferencial |
| Mínimo | Según el fondo y su clase | El precio de una participación (salvo fracciones) |
| Dónde | Banco, plataforma de fondos o bróker que los ofrezca | Bróker con acceso a bolsa |

Además, cada uno puede ser de **acumulación** (reinvierte los dividendos por dentro) o de **distribución** (te los paga y tributan ese año).

Para un principiante en España que aporta cada mes, el fondo indexado suele ser más cómodo por los **traspasos**. El ETF puede salir más barato si compras poco a menudo y tu bróker cobra poco.

## Con números

Ana tiene una ganancia de **5.000 €** y quiere cambiar de producto:

| | Fondo (traspaso) | ETF (venta y compra) |
|---|---:|---:|
| Impuesto ahora | 0 € | 950 € |
| Sigue invertido | 5.000 € de ganancia | 4.050 € de ganancia |

El traspaso **no elimina** el impuesto: lo aplaza hasta que reembolses de verdad. Pero mientras tanto, esos 950 € siguen trabajando para ti.

## Error frecuente

Comparar solo los gastos corrientes. Suma también la comisión de compra, el diferencial y el cambio de divisa si cotiza en otra moneda.
