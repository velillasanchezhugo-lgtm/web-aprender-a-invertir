---
title: "Mercado, limitada y stop: cómo das la orden"
description: "Qué hace cada tipo de orden, cuándo conviene cada una y por qué un stop no es un seguro."
level: basico
track: trading
order: 503
skills: [ordenes-mercado]
terms: [orden-de-mercado, orden-limitada, orden-stop]
goals: [entender, miedo]
prereqs: [tr-01-invertir-o-hacer-trading]
hook: "Pones un stop para vender si tu acción baja de cierto precio. Una mañana abre mucho más abajo tras malas noticias. ¿A qué precio vendes?"
takeaway: "La orden limitada protege el precio; la de mercado, la rapidez. Un stop vende cuando toca tu precio, pero si el precio salta, vende a lo que haya: no es un seguro."
scenario:
  kind: operacion
  label: "Caso de ejemplo"
  title: "Marta quiere comprar acciones de Hostelería Levante"
  body: "Marta quiere comprar acciones de una empresa ficticia, Hostelería Levante. En la pantalla ve dos precios: uno al que puede comprar ya y otro, algo más bajo, al que podría vender. Su bróker le ofrece orden a mercado, limitada y stop. No sabe cuál elegir."
  note: "Empresa y datos ficticios con fines educativos."
questions:
  - type: choice
    id: tr03-q1
    q: "Marta quiere controlar cuánto paga como máximo, aunque tarde más en comprar. ¿Qué orden usa?"
    options: ["A mercado", "Limitada", "Stop", "Da igual cuál"]
    answer: 1
    explain: "En la limitada fijas el precio máximo. Si nadie te vende a ese precio o mejor, la orden espera. Controlas el precio, no el momento."
  - type: choice
    id: tr03-q2
    q: "¿Qué riesgo tiene una orden a mercado en una acción que se negocia poco?"
    options: ["Ninguno: siempre compras al precio que ves", "Que se ejecute a un precio peor del que veías, porque compra a lo que haya disponible", "Que no se ejecute nunca", "Que te cobren la comisión dos veces"]
    answer: 1
    explain: "La orden a mercado compra ya, al precio que haya. Si hay pocas acciones a la venta, puede ir subiendo de precio hasta completarse."
  - type: choice
    id: tr03-q3
    q: "Tienes un stop para vender si la acción baja hasta cierto precio. Una mañana, tras una mala noticia, abre muy por debajo. ¿Qué pasa?"
    options: ["Vendes justo a tu precio de stop", "Vendes al precio que haya, que puede ser bastante peor: un stop no es un seguro", "La orden se anula sola", "El bróker te compensa la diferencia"]
    answer: 1
    explain: "Un stop normal se convierte en orden a mercado al activarse. Si el precio salta, vende al que haya. Un stop limitado no vende por debajo de tu límite, pero puede dejarte dentro mientras sigue cayendo."
tips:
  - "Usa órdenes limitadas cuando quieras controlar el precio."
  - "Evita las órdenes a mercado en acciones que se negocian poco o justo en la apertura."
  - "No trates el stop como un seguro: es una instrucción automática."
  - "Lee la ayuda de tu bróker sobre órdenes antes de usar dinero real."
action:
  title: "Mira qué órdenes te deja usar tu bróker"
  steps:
    - "Abre la pantalla de compra de tu bróker, sin enviar nada, o su página de ayuda sobre órdenes."
    - "Apunta qué tipos ofrece: mercado, limitada, stop, stop limitada."
    - "Comprueba si los stops los gestiona el propio bróker: la CNMV recuerda que en el mercado español no son órdenes de la bolsa, sino de la entidad."
  check: "Sé qué tipos de órdenes tengo y cuál usaría para no pagar de más"
deeper: ordenes-liquidez-ejecucion
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: España (mercado bursátil español) y General
sources: [cnmv-guia-ordenes, cnmv-inversor]
---

## La idea

Una orden es la instrucción que das a tu bróker. Las más comunes:

| Orden | Qué hace | Ventaja | Riesgo |
|---|---|---|---|
| **[A mercado](/es/glosario/#orden-de-mercado)** | Compra o vende ya, al mejor precio disponible | Se ejecuta casi seguro | Puedes pagar más de lo que pensabas |
| **[Limitada](/es/glosario/#orden-limitada)** | Compra o vende solo a tu precio o mejor | Controlas el precio | Puede no ejecutarse |
| **Stop** | Cuando el precio toca tu nivel, lanza una orden a mercado | Corta pérdidas sin estar mirando | Si el precio salta, vende peor |
| **Stop limitada** | Cuando toca tu nivel, lanza una orden limitada | No vende por debajo de tu límite | En una caída rápida puede no vender |

## En la práctica

- El **[diferencial](/es/glosario/#diferencial)** es la distancia entre el precio al que puedes comprar y el precio al que puedes vender. Lo pagas en cada operación, aunque no aparezca en la factura.
- Al abrir y al cerrar la bolsa española hay una **subasta**: se juntan las órdenes y se cruzan a un único precio. Una orden a mercado en ese momento puede ejecutarse lejos del precio de ayer.
- Para comprar un fondo indexado o un ETF a largo plazo, una orden limitada cerca del precio actual suele ser suficiente.

## Error frecuente

Creer que el stop es un seguro. En un salto de precio se ejecuta al que haya.
