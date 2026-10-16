---
title: Tipos de órdenes, liquidez y ejecución
description: Cómo se compra y se vende en bolsa, qué órdenes existen, qué cuesta el diferencial y por qué la liquidez cambia el precio que pagas.
level: intermedio
topic: mercados-y-ordenes
minutes: 8
learn:
  - Las diferencias entre orden a mercado, limitada y stop.
  - Qué es el diferencial y cómo calcular su coste.
  - Por qué la liquidez importa al comprar y, sobre todo, al vender.
prereqs: [productos-basicos, comisiones-y-fiscalidad]
mistake: Lanzar órdenes a mercado en valores poco negociados o en la apertura. En esos momentos el diferencial puede ser amplio y el precio de ejecución, bastante peor que el último que viste.
summary:
  - Una orden a mercado prioriza ejecutarse; una limitada, el precio.
  - El diferencial entre el mejor precio de compra y de venta es un coste implícito en cada operación.
  - En valores poco líquidos, una orden grande puede mover el precio en tu contra.
  - Las cotizaciones que ves pueden tener retraso; el precio de ejecución es el real del momento.
quiz:
  - q: "Una acción tiene precio de compra (oferta) 10,05 € y de venta (demanda) 9,95 €. Compras y vendes inmediatamente 1.000 acciones. ¿Cuánto pierdes por el diferencial, sin contar comisiones?"
    options: ["0 €", "100 €", "10 €"]
    answer: 1
    explain: "Compras a 10,05 y vendes a 9,95: pierdes 0,10 € por acción × 1.000 = 100 €, alrededor de un 1 % del importe."
  - q: "¿Qué orden garantiza que no pagarás más de un precio fijado?"
    options: ["A mercado", "Limitada", "Stop"]
    answer: 1
    explain: "La orden limitada fija el precio máximo de compra o mínimo de venta. A cambio, puede no ejecutarse."
next: apalancamiento-margen-liquidacion
related: [gestion-del-riesgo]
tools: [comparador-comisiones]
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-15
reviewed: 2026-10-15
status: revision-pendiente
jurisdiction: General (mercados europeos y estadounidenses)
sources: [myinvestor-broker, degiro-tarifas, cnmv-inversor]
---

## Explicación

### Tipos de órdenes

- **[A mercado](/es/glosario/#orden-de-mercado)**: se ejecuta al mejor precio disponible. Rápida, pero sin control del precio. Puede ejecutarse en varias partes, y cada parte puede tener un precio distinto.
- **[Limitada](/es/glosario/#orden-limitada)**: fijas un precio máximo de compra o mínimo de venta. Controlas el precio; quizá no se ejecute.
- **Stop (de pérdida limitada)**: se activa al alcanzarse un precio y se convierte en orden a mercado. No garantiza el precio de ejecución.
- **Stop limitada**: se activa en un precio y se convierte en limitada. Controla el precio, pero puede no ejecutarse en una caída rápida.

Cada orden tiene una **validez** (solo hoy, hasta una fecha…). Los precios deben respetar el **tamaño mínimo de variación** (*tick*) de cada mercado.

### El diferencial y la profundidad

En cada momento hay un **mejor precio de compra** (lo que piden los vendedores) y un **mejor precio de venta** (lo que ofrecen los compradores). La diferencia es el **[diferencial](/es/glosario/#diferencial)**. En acciones grandes y ETF muy negociados suele ser muy pequeño; en valores pequeños, bonos poco negociados o fuera de horario puede ser grande.

La **profundidad** es cuántas acciones hay disponibles a cada precio. Si quieres comprar más de las que hay al mejor precio, el resto se ejecuta a precios peores.

### Cotizaciones con retraso

Muchas aplicaciones muestran precios con retraso (por ejemplo, de 15 minutos). La orden se ejecuta al precio real del momento, no al que viste.

### Liquidez al vender

La **[liquidez](/es/glosario/#liquidez)** importa más cuando quieres salir: en una crisis, el diferencial se amplía y los compradores escasean. Es otro motivo para preferir activos líquidos y diversificados.

## Ejemplo numérico

Quieres comprar 3.000 € de un ETF:

- Precio de compra 50,10 €, precio de venta 50,00 €: diferencial de 0,10 € (**0,2 %**).
- Si compras y algún día vendes en condiciones parecidas, pagas el diferencial una vez completo: unos **6 €** sobre 3.000 €, además de las comisiones.

Ahora un valor pequeño con precio de compra 4,20 € y de venta 4,00 €: diferencial del **4,9 %**. Con 3.000 €, comprar y vender te cuesta unos **143 €** solo por el diferencial. Una orden limitada no lo elimina, pero evita sorpresas mayores si el libro de órdenes es poco profundo.
