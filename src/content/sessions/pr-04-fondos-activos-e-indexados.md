---
title: "Fondos activos e indexados: quién gestiona y cuánto cobra"
description: "Cómo funciona un fondo por dentro (gestora, depositaria, valor liquidativo), activa frente a indexada, qué dicen los SPIVA y qué comisiones mirar."
level: basico
track: productos
order: 204
skills: [fondos-etf, costes-comisiones]
goals: [jubilacion, entender, ordenar]
prereqs: [10-el-uno-por-ciento]
hook: "En tu banco te ofrecen un fondo «gestionado por expertos» que cobra un 1,5 %. En una app, uno indexado al 0,2 %. ¿Qué compras exactamente con esa diferencia?"
takeaway: "En un fondo, la rentabilidad del mercado no la controlas; la comisión, sí. Compara siempre la misma clase y los gastos corrientes del KID."
scenario:
  kind: producto
  label: "Fichas de ejemplo"
  title: "Fondo Bolsa Global Selección frente a Fondo Índice Mundial"
  body: "Bolsa Global Selección (gestión activa): comisión de gestión 1,5 % y de depósito 0,1 %; gastos corrientes en el KID: 1,6 %. Tiene una clase A para minoristas y una clase I, desde 500.000 €, con gestión al 0,6 %. Fondo Índice Mundial (indexado): replica un índice global de acciones; gastos corrientes 0,2 %. Ninguno cobra suscripción ni reembolso."
  note: "Ejemplo ficticio con fines educativos."
questions:
  - type: estimate
    id: pr04-q1
    q: "Inviertes 20.000 € durante 20 años y ambos fondos obtienen un 6 % anual antes de costes. Con el indexado (0,2 %) acabas con unos 61.765 €; con el activo (1,6 %), con unos 47.319 €. ¿Cuántos euros te cuesta la diferencia de comisiones?"
    answer: 14446
    tolerance: 500
    min: 0
    max: 30000
    step: 100
    unit: "€"
    explain: "61.765 − 47.319 = 14.446 €, más de dos tercios de lo que invertiste. El fondo activo tendría que batir al mercado un 1,4 % cada año, después de su sueldo, solo para empatar."
  - type: choice
    id: pr04-q2
    q: "¿Qué suelen encontrar los informes SPIVA sobre los fondos de gestión activa a 10 o más años?"
    options: ["Que la mayoría bate a su índice de referencia", "Que la mayoría no consigue batir a su índice de referencia después de costes", "Que activos e indexados empatan siempre"]
    answer: 1
    explain: "En casi todas las categorías y regiones, la mayoría de fondos activos queda por detrás de su índice a largo plazo. Algunos lo baten, pero es difícil saber de antemano cuáles."
  - type: truefalse
    id: pr04-q3
    q: "La clase A y la clase I de Bolsa Global Selección invierten en las mismas acciones, pero la A te dejará menos rentabilidad cada año."
    answer: true
    explain: "Las clases de un mismo fondo comparten cartera y solo se diferencian en comisiones y condiciones de acceso. Comprueba siempre qué clase te ofrecen."
action:
  title: "Desmonta las comisiones de un fondo"
  steps:
    - "Abre el KID o el folleto de un fondo que tengas o que te ofrezcan."
    - "Anota la comisión de gestión, la de depósito, las de suscripción y reembolso, y los gastos corrientes."
    - "Mira si tiene otras clases y si es de gestión activa o replica un índice."
  check: "Sé cuánto me cobra un fondo al año y por qué concepto"
deeper: gestion-indexada-y-activa
tool: interes-compuesto
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: España
sources: [cnmv-guia-fondos, boe-rd-iic, spiva, priips-kid]
---

## La idea

Un fondo junta el dinero de muchos partícipes. Dentro hay tres piezas:

- **Gestora**: decide qué comprar y calcula el valor del fondo.
- **Depositaria**: custodia los activos y vigila a la gestora. Tu dinero no está en el balance de la gestora.
- **[Valor liquidativo](/es/glosario/#valor-liquidativo)**: patrimonio del fondo dividido entre participaciones. Se calcula una vez al día, ya descontadas las comisiones.

Dos formas de gestionar:

- **Activa**: el gestor elige valores para intentar batir al mercado.
- **[Indexada](/es/glosario/#fondo-indexado)**: copia un índice, sin intentar batirlo. Suele ser mucho más barata.

Comisiones que puede cobrar un fondo en España, con sus máximos legales generales:

| Comisión | Sobre qué | Máximo |
|---|---|---:|
| Gestión | Patrimonio, cada año | 2,25 % |
| Depósito | Patrimonio, cada año | 0,2 % |
| Suscripción y reembolso | Lo que entras o sacas | 5 % |

Los **gastos corrientes** del KID suman las anuales: es la cifra que debes comparar.

## Con números

20.000 € durante 20 años, con un 6 % anual antes de costes:

| Gastos corrientes | Valor final |
|---:|---:|
| 0,2 % | 61.765 € |
| 1,6 % | 47.319 € |

El primer año, la diferencia son solo 280 € (320 € frente a 40 €). Pero ese dinero deja de crecer cada año durante 20 años.
