---
title: "Apalancamiento y CFD: un 3 % que se lleva el 60 %"
description: "Cómo funcionan el margen y el apalancamiento, cuándo te cierran la posición, qué te protege por ley y cuántos minoristas pierden con CFD."
level: basico
track: trading
order: 504
skills: [apalancamiento-cfd, productos-complejos]
goals: [miedo, entender]
prereqs: [tr-03-tipos-de-ordenes]
hook: "Con 1.000 € puedes «controlar» 20.000 € en un índice. Suena a multiplicar tus ganancias. ¿Qué multiplica también?"
takeaway: "El apalancamiento multiplica igual las pérdidas que las ganancias. Con 1:20, una caída del 5 % se lleva todo tu margen, y la mayoría de minoristas que opera con CFD pierde dinero."
scenario:
  kind: operacion
  label: "Operación de ejemplo"
  title: "Javier abre un CFD sobre un índice con 1.000 €"
  body: "Javier deposita 1.000 € de margen (garantía) en una cuenta de CFD y abre una posición compradora sobre un índice bursátil ficticio con apalancamiento 1:20. Su exposición es de 20.000 €. Esa misma tarde el índice cae un 3 %. Su cuenta solo tiene esos 1.000 €."
  note: "Ejemplo ficticio con fines educativos. No incluye costes de financiación ni diferencial."
questions:
  - type: estimate
    id: tr04-q1
    q: "¿Qué porcentaje de su dinero pierde Javier con esa caída del 3 %?"
    answer: 60
    tolerance: 0
    min: 0
    max: 100
    step: 1
    unit: "%"
    explain: "20.000 € × 3 % = 600 €, un 60 % de sus 1.000 €. Con apalancamiento L, tu resultado es L veces el movimiento: 20 × 3 % = 60 %. En la práctica, la entidad le habría cerrado antes, al perder la mitad del margen (una caída del 2,5 %)."
  - type: choice
    id: tr04-q2
    q: "Según las advertencias que la normativa europea exige para los CFD, ¿qué parte de las cuentas minoristas pierde dinero?"
    options: ["Entre un 74 % y un 89 %", "Alrededor de la mitad", "Menos de un 20 %, si se usan stops"]
    answer: 0
    explain: "Es el rango de los análisis de los supervisores europeos que recogió ESMA en 2018. Hoy cada entidad debe mostrar su propio porcentaje: el de sus clientes minoristas que perdieron dinero en los últimos 12 meses."
  - type: truefalse
    id: tr04-q3
    q: "Con un CFD contratado como minorista con una entidad sujeta a la normativa de la UE, no puedes acabar debiendo dinero a la entidad por esos CFD."
    answer: true
    explain: "La protección frente a saldo negativo limita tu pérdida a los fondos de tu cuenta de CFD. Ojo: no se aplica igual a futuros, cuentas de margen, clientes profesionales o entidades de fuera de la UE."
action:
  title: "Prueba el apalancamiento sin arriesgar"
  steps:
    - "Abre el simulador de apalancamiento de la academia."
    - "Pon 1.000 € de garantía, apalancamiento 20 y un movimiento de −3 %. Mira el resultado y si se cerraría la posición."
    - "Repite con apalancamiento 5 y 30, y anota con qué caída perderías la mitad de tu dinero en cada caso."
  check: "He comprobado en simulación cuánto amplifica el apalancamiento una caída"
deeper: apalancamiento-margen-liquidacion
tool: apalancamiento
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: España y UE (medidas de ESMA de 2018 y resoluciones de la CNMV de 2019 y 2023)
sources: [esma-cfd-2018, esma-cfd-notice-2018, cnmv-cfd-2019, cnmv-cfd-2023, cnmv-cfd-faq]
---

## La idea

Un **[CFD](/es/glosario/#cfd)** es un contrato con la entidad que te paga o te cobra la diferencia de precio de otro activo. No compras el activo. Pones un **[margen](/es/glosario/#margen)** (una garantía) y la entidad te deja una exposición mayor: eso es el **[apalancamiento](/es/glosario/#apalancamiento)**.

Lo que manda la normativa para minoristas (ESMA en 2018; en España, CNMV desde 2019):

- **Apalancamiento máximo**: 1:30 en divisas principales, 1:20 en índices principales y oro, 1:10 en otras materias primas e índices, **1:5 en acciones** y 1:2 en criptoactivos.
- **Cierre automático** cuando tu cuenta cae por debajo del **50 % del margen inicial**.
- **[Protección frente a saldo negativo](/es/glosario/#proteccion-saldo-negativo)**: no puedes perder más de lo que hay en la cuenta de CFD.
- **Advertencia obligatoria** con el porcentaje de cuentas minoristas de esa entidad que pierden dinero.

Y desde el **3 de agosto de 2023**, la CNMV **prohíbe la publicidad de CFD** dirigida a minoristas en España, incluidos cursos gratuitos y cuentas demo usados para captar clientes. Si te llega un anuncio de CFD, ya es una señal de alarma.

## Con números

**1.000 €** de margen y una caída del **3 %**, antes de costes:

| Apalancamiento | Exposición | Pérdida | Sobre tu dinero | Caída que activa el cierre al 50 % |
|---:|---:|---:|---:|---:|
| 1:5 (acciones) | 5.000 € | 150 € | −15 % | 10 % |
| 1:20 (índices) | 20.000 € | 600 € | −60 % | 2,5 % |
| 1:30 (divisas) | 30.000 € | 900 € | −90 % | 1,7 % |

A esto se suma la **financiación diaria** si mantienes la posición abierta. ESMA recogió en 2018 que entre el **74 % y el 89 %** de las cuentas minoristas perdían dinero, con pérdidas medias por cliente de **1.600 € a 29.000 €** según el país.
