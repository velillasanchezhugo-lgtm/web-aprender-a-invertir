---
title: La caja manda, no el beneficio
description: "Flujo de caja operativo, inversiones y flujo de caja libre: el dinero que de verdad entra. Y por qué ganar dinero sin generar caja es una alerta."
level: basico
track: empresas
order: 305
skills: [flujo-caja]
goals: [entender, miedo]
prereqs: [em-04-el-balance-y-la-deuda]
hook: "Una fábrica anuncia un beneficio récord y, meses después, pide un préstamo urgente para pagar nóminas. ¿Cómo es posible?"
takeaway: El beneficio es una opinión contable; la caja es un hecho. Fíjate en el flujo de caja libre y desconfía del beneficio que nunca se convierte en dinero.
scenario:
  kind: empresa
  label: Empresas de ejemplo
  title: Café Brío S.A. frente a Muebles Roble S.A.
  body: "Café Brío, 2025: beneficio neto 12 M€, amortizaciones 12 M€ y +2 M€ porque cobra al contado y paga a sus proveedores más tarde. Inversiones (capex): 14 M€, de ellos 6 M€ en renovar tiendas y 8 M€ en abrir nuevas. Muebles Roble (fabricante que vende a tiendas con pago aplazado), 2025: beneficio neto 15 M€, amortizaciones 10 M€, pero lo que le deben sus clientes sube 18 M€ y su almacén de muebles sin vender, 12 M€. Inversiones: 8 M€."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: estimate
    id: em05-q1
    q: "¿Cuál es el flujo de caja libre de Café Brío en 2025, en millones de euros?"
    answer: 12
    tolerance: 0
    min: -30
    max: 40
    step: 1
    unit: "M€"
    explain: "Flujo de caja operativo = 12 + 12 + 2 = 26 M€. Menos 14 de inversiones = 12 M€ de flujo de caja libre. Aquí beneficio y caja libre coinciden: buena señal."
  - type: estimate
    id: em05-q2
    q: "¿Cuál es el flujo de caja operativo de Muebles Roble, en millones de euros?"
    answer: -5
    tolerance: 0
    min: -30
    max: 40
    step: 1
    unit: "M€"
    explain: "15 + 10 − 18 − 12 = −5 M€. Gana 15 en la cuenta de resultados, pero ese dinero está en facturas sin cobrar y muebles en el almacén. Tras invertir 8, su caja libre es −13 M€."
  - type: choice
    id: em05-q3
    q: "Muebles Roble lleva tres años con beneficio y flujo de caja operativo negativo. ¿Qué haces primero?"
    options: ["Nada, el beneficio es lo que cuenta", "Mirar si los clientes pagan cada vez más tarde, si el almacén crece más que las ventas y si la deuda sube para cubrir el hueco", "Comprar más acciones porque el beneficio crece"]
    answer: 1
    explain: "Un beneficio que no se cobra puede ser clientes en apuros, ventas forzadas o criterios contables agresivos. Si el hueco se tapa con deuda, el riesgo aumenta cada año."
action:
  title: Compara beneficio y caja en una empresa real
  steps:
    - "Abre el estado de flujos de efectivo de la empresa que estás siguiendo (va junto al balance en el informe anual o semestral)."
    - "Anota el flujo de efectivo de las actividades de explotación y los pagos por inversiones en inmovilizado (capex)."
    - "Calcula el flujo de caja libre (explotación − capex) y compáralo con el beneficio neto de ese año y del anterior."
  check: He comparado el beneficio y el flujo de caja libre de una empresa real
deeper: estados-financieros
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: General
sources: [brk-letters, graham-dodd]
---

## La idea

El beneficio cuenta una venta **cuando se factura**, aunque no se haya cobrado. La caja cuenta **cuando entra el dinero**. Tres cifras del estado de flujos de efectivo:

1. **Flujo de caja operativo**: el dinero que genera el negocio. Parte del beneficio, suma las amortizaciones (son gasto, pero no salida de dinero) y ajusta lo que queda pendiente de cobrar, pagar o vender.
2. **Inversiones (capex)**: lo que gasta en locales, máquinas, tecnología. Una parte es **mantener** el negocio; otra, **crecer**.
3. **[Flujo de caja libre](/es/glosario/#flujo-de-caja-libre)** = operativo − capex. Lo que queda para pagar deuda, repartir dividendos o guardar.

**Alerta**: beneficio positivo con caja operativa negativa varios años seguidos. Suele esconder clientes que no pagan o existencias que no se venden.

## Con números

| 2025 (M€) | Café Brío | Muebles Roble |
|---|---:|---:|
| Beneficio neto | 12 | 15 |
| + Amortizaciones | 12 | 10 |
| ± Cobros, pagos y existencias | +2 | −18 − 12 = −30 |
| **Flujo de caja operativo** | **26** | **−5** |
| − Capex | 14 | 8 |
| **Flujo de caja libre** | **12** | **−13** |

Muebles Roble «gana» más que Café Brío y, sin embargo, necesita 13 M€ de fuera.
