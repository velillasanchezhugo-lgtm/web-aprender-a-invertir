---
title: Tu primera compra, paso a paso
description: "De abrir la cuenta a guardar el justificante: entidad autorizada, test de conveniencia, ISIN, KID, tipo de orden y qué revisar antes de pulsar «confirmar»."
level: basico
track: invertir-ya
order: 105
skills: [ejecutar-compra, ordenes-mercado, comprobar-broker]
goals: [objetivo, miedo, ordenar]
prereqs: [ya-04-fondo-o-etf]
hook: "Tienes el plan, el reparto y sabes qué buscas. Llega la pantalla de compra con diez campos y un botón verde. ¿Qué miras antes de pulsarlo?"
takeaway: "Entidad comprobada, ISIN correcto, KID leído, orden limitada en horario de mercado. Y guarda el justificante."
scenario:
  kind: operacion
  label: Pantalla de ejemplo
  title: "Orden de compra pendiente de confirmar"
  body: "Producto: ETF Global Ficticio, acumulación, en euros; el ISIN coincide con el del KID. Mercado: abre a las 9:00. Hora actual: 8:40. Último precio: 25,40 €. Mejor precio de compra: 25,90 €. Mejor precio de venta: 24,90 €. Tipo de orden: a mercado. Cantidad: 40 participaciones. Importe estimado: 1.036 €. Comisión: 2 €."
  note: Ejemplo ficticio con fines educativos. Precios y producto inventados.
questions:
  - type: choice
    id: ya05-q1
    q: "Mirando la pantalla, ¿qué cambiarías antes de confirmar?"
    options: ["Nada: una orden a mercado siempre da el mejor precio", "Esperar al horario de mercado y usar una orden limitada a un precio cercano al último cruzado", "Comprar el doble, ya que la comisión es fija"]
    answer: 1
    explain: "Antes de la apertura el diferencial es amplio: a mercado pagarías hasta 25,90 €. Con una orden limitada en horario normal fijas el precio máximo y evitas sorpresas."
  - type: estimate
    id: ya05-q2
    q: "¿Qué tamaño tiene el diferencial de la pantalla, en porcentaje del último precio? (25,90 − 24,90) / 25,40"
    answer: 3.9
    tolerance: 0.2
    min: 0
    max: 10
    step: 0.1
    unit: "%"
    explain: "1 / 25,40 ≈ 3,9 %. En un ETF grande en pleno horario de mercado el diferencial suele ser una fracción de eso. Si lo ves tan abierto, espera."
  - type: truefalse
    id: ya05-q3
    q: "Al comprar un fondo indexado (no cotizado) sabes el precio exacto de la participación en el momento de dar la orden."
    answer: false
    explain: "Los fondos se compran al valor liquidativo del día de la solicitud o del siguiente, según el folleto y su hora de corte, y se publica después. Por eso en un fondo no eliges precio: indicas el importe."
action:
  title: Prepara tu primera compra
  steps:
    - "Comprueba en el registro de la CNMV (o del supervisor de su país) la entidad donde vas a abrir la cuenta."
    - "Busca el KID del producto que encaja con tu plan y anota su ISIN, sus costes y su indicador de riesgo."
    - "Escribe la orden que darás: importe, tipo de orden (limitada si es un ETF) y el horario en que la lanzarás."
  check: Tengo preparada mi primera compra y sé qué revisar antes de confirmar
deeper: ordenes-liquidez-ejecucion
tool: comparador-comisiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: España y UE
sources: [cnmv-entidades, cnmv-mifid-infografia, priips-kid, cnmv-etf-guia-rapida, cnmv-guia-fondos]
---

## La idea

Ocho pasos, en este orden:

1. **Elige una entidad autorizada** y compruébala en el registro oficial.
2. **Abre la cuenta**: DNI, datos fiscales y, a veces, una videollamada.
3. **Responde el test de conveniencia (MiFID)** con sinceridad: sirve para que la entidad te avise si un producto no encaja con tus conocimientos.
4. **Transfiere el dinero** desde tu banco a la cuenta de la entidad.
5. **Busca el producto por su ISIN**, no por el nombre: hay muchos parecidos.
6. **Lee el KID**: costes, riesgo y qué índice sigue.
7. **Da la orden**:
   - **ETF**: orden **limitada**, en **horario de mercado** y lejos de la apertura y el cierre, cuando el diferencial suele ser menor.
   - **Fondo**: indicas el **importe**; se aplica un valor liquidativo que aún no conoces.
8. **Revisa la pantalla, confirma y guarda el justificante** de la operación.

## Con números

La orden de la pantalla, comprando 40 participaciones:

| Cómo compras | Precio | Pagas de más frente al último precio |
|---|---:|---:|
| A mercado, antes de la apertura | 25,90 € | 20,00 € |
| Limitada a 25,42 €, en horario normal | 25,42 € como máximo | 0,80 € como máximo |

Son unos **19 € de diferencia** en una compra de unos 1.000 €: lo mismo que unos diez años de gastos de una cartera indexada al 0,17 % de ese tamaño, perdido en un clic.

## Error frecuente

Comprar por el nombre comercial que salió primero en el buscador. Dos productos con nombres casi iguales pueden tener costes, divisa o reparto de dividendos distintos: el ISIN los distingue.
