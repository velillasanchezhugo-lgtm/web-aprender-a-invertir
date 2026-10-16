---
title: Opciones, futuros y CFD
description: Qué son los derivados más comunes, en qué se diferencian de tener el activo, qué riesgos asume cada parte y qué restricciones aplica la CNMV a su venta a minoristas.
level: avanzado
topic: derivados-y-apalancamiento
minutes: 12
learn:
  - En qué se diferencian un derivado y un activo real.
  - Cómo funcionan una opción, un futuro y un CFD, con números.
  - Quién asume qué riesgo en cada contrato, y qué protección tiene el minorista en España.
prereqs: [apalancamiento-margen-liquidacion]
mistake: Vender opciones porque «casi siempre» se cobra la prima. El vendedor gana poco con frecuencia y puede perder mucho de vez en cuando; en una opción de compra vendida sin cobertura, la pérdida teórica no tiene límite.
summary:
  - Un derivado es un contrato cuyo valor depende de otro activo; no te hace propietario de ese activo.
  - Comprar una opción limita la pérdida a la prima pagada; venderla puede generar pérdidas muy superiores a la prima cobrada.
  - Los futuros obligan a ambas partes y se liquidan diariamente con garantías.
  - Un CFD es un contrato con la entidad, normalmente apalancado; su publicidad a minoristas está prohibida en España desde 2023 y su venta está sujeta a límites estrictos.
quiz:
  - q: "Compras una opción de compra (call) con precio de ejercicio 100 € pagando una prima de 5 €. Al vencimiento el subyacente vale 95 €. ¿Cuál es tu resultado por acción?"
    options: ["−5 €", "0 €", "−10 €"]
    answer: 0
    explain: "La opción vence sin valor porque no compensa comprar a 100 algo que vale 95. Pierdes la prima: 5 € por acción."
  - q: "¿Qué tienes cuando compras un CFD sobre una acción?"
    options: ["La acción, con derecho a voto", "Un contrato con la entidad que te paga o te cobra la diferencia de precio", "Una participación en un fondo"]
    answer: 1
    explain: "No eres accionista. Tu posición depende del contrato y de la solvencia de la entidad, no de un valor depositado a tu nombre."
next: analisis-tecnico-y-limites
related: [apalancamiento-margen-liquidacion]
tools: [apalancamiento]
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-15
reviewed: 2026-10-15
status: revision-pendiente
jurisdiction: España (CNMV). Las condiciones de cada entidad y mercado varían.
sources: [cnmv-cfd-2019, cnmv-cfd-2023, cnmv-cfd-faq, priips-kid]
---

## Explicación

Un **derivado** es un contrato cuyo valor depende del precio de otro activo (el subyacente). A diferencia de un **[activo real](/es/glosario/#activo-real)**, como una acción depositada a tu nombre, un derivado te expone al precio sin hacerte propietario, y casi siempre implica una contraparte y fechas o condiciones.

### Opciones

Una **[opción](/es/glosario/#opcion)** de compra (*call*) da el **derecho** a comprar el subyacente a un precio fijado (precio de ejercicio) hasta o en una fecha. Una de venta (*put*) da el derecho a vender. Quien compra paga una **prima**. Quien vende la cobra y asume la **obligación**.

- Comprador: pérdida máxima = prima; ganancia potencial grande (en una *call*).
- Vendedor: ganancia máxima = prima; pérdida potencial grande (ilimitada en una *call* vendida sin tener el subyacente).

Su precio depende del subyacente, del tiempo hasta el vencimiento, de la volatilidad esperada y de los tipos de interés. Las opciones pierden valor con el paso del tiempo si todo lo demás se mantiene.

### Futuros

Un **[futuro](/es/glosario/#futuro)** es un contrato estandarizado, negociado en un mercado organizado, para comprar o vender el subyacente a un precio fijado en una fecha. Ambas partes están obligadas. Se exige una garantía y las ganancias y pérdidas se **liquidan cada día**. Si la garantía cae, te piden más; si no la aportas, te cierran la posición. Las pérdidas pueden superar la garantía inicial.

### CFD

Un **[CFD](/es/glosario/#cfd)** es un contrato con la entidad por el que se intercambia la diferencia entre el precio de apertura y el de cierre del subyacente. No se negocia normalmente en un mercado organizado: la entidad suele ser tu contraparte y fija los precios. Incluye apalancamiento y costes de financiación diarios.

En España, para minoristas:

- Garantías mínimas y apalancamiento máximo por tipo de subyacente, cierre al 50 % de la garantía, protección frente a saldo negativo y advertencia obligatoria con el porcentaje de cuentas que pierden dinero (Resolución CNMV de 2019).
- Desde agosto de 2023, **prohibida la publicidad** de CFD dirigida a minoristas en España, incluidas ofertas de cursos gratuitos y cuentas de demostración promovidos por las entidades o sus colaboradores (Resolución CNMV de 2023). La contratación a iniciativa propia del cliente sigue siendo posible.

Esta plataforma no enlaza a proveedores de CFD ni recibe pagos de ellos.

## Ejemplo numérico

**Comprar una *call*.** Precio de ejercicio 100 €, prima 5 €, contrato sobre 100 acciones (500 € de prima):

| Precio al vencimiento | Valor de la opción | Resultado del comprador | Resultado del vendedor sin cobertura |
|---:|---:|---:|---:|
| 90 € | 0 € | −500 € (−100 %) | +500 € |
| 100 € | 0 € | −500 € | +500 € |
| 105 € | 500 € | 0 € | 0 € |
| 120 € | 2.000 € | +1.500 € (+300 %) | −1.500 € |
| 150 € | 5.000 € | +4.500 € | −4.500 € |

El comprador pierde toda la prima en muchos escenarios; el vendedor gana poco a menudo y puede perder mucho.

**Futuro sobre un índice.** Supuesto: cada punto vale 10 €, compras a 10.000 puntos (exposición de 100.000 €) con una garantía de 8.000 €. Si el índice cae un 5 % hasta 9.500 puntos, pierdes 5.000 € (−62,5 % de la garantía) y te pedirán reponer garantías. Si cae de golpe un 10 % (hueco de apertura), pierdes 10.000 €: **2.000 € más** de lo que habías depositado.
