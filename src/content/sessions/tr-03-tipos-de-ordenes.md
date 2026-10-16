---
title: "Mercado, limitada y stop: cómo das la orden"
description: "Qué hace cada tipo de orden, cuánto cuesta el diferencial, por qué un stop no garantiza el precio y qué pasa en las subastas de apertura y cierre."
level: basico
track: trading
order: 503
skills: [ordenes-mercado]
goals: [entender, miedo]
prereqs: [tr-01-invertir-o-hacer-trading]
hook: "Pones un stop a 9,50 € para no perder más de 500 €. Al día siguiente la acción abre a 8,90 € tras unos malos resultados. ¿Cuánto has perdido?"
takeaway: "La orden limitada protege el precio; la de mercado, la ejecución. Un stop se convierte en orden de mercado: limita el riesgo en mercado tranquilo, no en un hueco."
scenario:
  kind: operacion
  label: "Libro de órdenes de ejemplo"
  title: "Hostelería Levante S.A., a media sesión"
  body: "Mejores precios de compra (lo que ofrecen los compradores): 10,00 € para 500 acciones, 9,98 € para 800 y 9,95 € para 1.000. Mejores precios de venta (lo que piden los vendedores): 10,04 € para 300 acciones, 10,06 € para 400 y 10,10 € para 1.000. Quieres comprar 600 acciones."
  note: "Empresa y datos ficticios con fines educativos."
questions:
  - type: estimate
    id: tr03-q1
    q: "Lanzas una orden a mercado para comprar 600 acciones. ¿Cuánto pagas en total, sin comisiones?"
    answer: 6030
    tolerance: 0
    min: 5800
    max: 6200
    step: 10
    unit: "€"
    explain: "Se ejecutan 300 a 10,04 € (3.012 €) y las otras 300 a 10,06 € (3.018 €): 6.030 €, un precio medio de 10,05 €. La orden a mercado «barre» el libro hasta completarse."
  - type: choice
    id: tr03-q2
    q: "Con el mismo libro, ¿qué pasa si lanzas una orden limitada de compra de 600 acciones a 10,04 €?"
    options: ["Compras 300 a 10,04 € y las otras 300 quedan esperando en el libro a ese precio", "Compras las 600 a 10,04 € al instante", "La orden se rechaza porque no hay suficientes acciones"]
    answer: 0
    explain: "La limitada nunca paga más de tu precio. Se ejecuta lo que hay a 10,04 € o mejor, y el resto espera. Controlas el precio, no la ejecución."
  - type: choice
    id: tr03-q3
    q: "Tienes un stop limitado de venta: se activa a 9,50 € con límite 9,40 €. La acción abre directamente a 8,90 €. ¿Qué ocurre?"
    options: ["La orden se activa pero no se ejecuta, porque nadie compra a 9,40 € o más: sigues con las acciones", "Vendes a 9,50 €", "Vendes a 8,90 €"]
    answer: 0
    explain: "El stop limitado evita vender en el hueco, pero puede dejarte dentro mientras sigue cayendo. Un stop normal (que pasa a ser de mercado) sí vendería, cerca de 8,90 €."
action:
  title: "Mira qué órdenes te deja usar tu bróker"
  steps:
    - "Abre la pantalla de compra de tu bróker (sin enviar nada) o su página de ayuda sobre órdenes."
    - "Anota qué tipos ofrece: mercado, limitada, stop, stop limitada, y qué validez puedes poner."
    - "Busca si los stops los gestiona el propio bróker: la CNMV recuerda que no son órdenes del mercado español, sino de la entidad."
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

Cuatro órdenes que debes conocer:

- **[A mercado](/es/glosario/#orden-de-mercado)**: compra o vende ya, al mejor precio disponible. Si no hay bastantes acciones a ese precio, sigue con los siguientes.
- **[Limitada](/es/glosario/#orden-limitada)**: fijas un precio máximo de compra o mínimo de venta. Puede no ejecutarse.
- **Stop (stop loss)**: cuando el precio toca tu nivel, se convierte en **orden a mercado**. Si el precio salta (un **hueco**), se ejecuta peor de lo previsto: es el **deslizamiento**.
- **Stop limitada**: al tocar tu nivel, se convierte en **limitada**. Controla el precio, pero en una caída rápida puede no venderse nada.

El **[diferencial](/es/glosario/#diferencial)** entre el mejor precio de venta y el de compra es un coste en cada operación. En el caso, 10,04 − 10,00 = 0,04 €, un **0,4 %**.

En la bolsa española hay **subasta de apertura** (8:30 a 9:00) y **de cierre** (17:30 a 17:35). Durante la subasta se acumulan órdenes y se cruzan todas a un único precio al final. Una orden a mercado en la apertura puede ejecutarse lejos del cierre de ayer.

## Con números

Compras 1.000 acciones a 10 € y pones un stop a 9,50 €, pensando en perder como mucho **500 €**.

| Qué pasa | Venta | Pérdida |
|---|---:|---:|
| Baja poco a poco y toca 9,50 € | ≈ 9,50 € | ≈ 500 € |
| Abre a 8,90 € tras malos resultados (stop normal) | ≈ 8,90 € | ≈ 1.100 € |
| Abre a 8,90 € (stop limitado a 9,40 €) | No se vende | Sigues expuesto |

## Error frecuente

Creer que el stop es un seguro. Es una instrucción automática, y en un hueco se ejecuta al precio que haya.
