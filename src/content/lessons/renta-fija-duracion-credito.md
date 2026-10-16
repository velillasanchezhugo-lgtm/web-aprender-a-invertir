---
title: Renta fija, duración y riesgo de crédito
description: Los bonos no son «dinero seguro». Cómo afectan los tipos de interés a su precio, qué mide la duración y por qué más rentabilidad suele significar más riesgo de impago.
level: intermedio
topic: renta-fija
minutes: 10
learn:
  - Qué es la rentabilidad a vencimiento de un bono.
  - Qué mide la duración y cómo usarla para estimar caídas de precio.
  - Cómo se refleja el riesgo de crédito en la rentabilidad.
prereqs: [productos-basicos]
mistake: Comparar fondos de renta fija solo por su rentabilidad del último año. Un fondo con más duración o con bonos de peor calidad puede haber rendido más en un periodo y caer mucho más en otro.
summary:
  - El precio de un bono se mueve en sentido contrario a los tipos de interés.
  - La duración modificada aproxima cuánto cae el precio por cada punto de subida de tipos.
  - El diferencial de crédito es la rentabilidad extra que se exige por el riesgo de que el emisor no pague.
  - Mantener un bono hasta su vencimiento evita la pérdida por tipos, pero no la de crédito ni la de inflación.
quiz:
  - q: "Un fondo de renta fija tiene una duración modificada de 6. Si los tipos de interés suben un punto, ¿cuánto cambiará aproximadamente su valor?"
    options: ["−1 %", "−6 %", "+6 %"]
    answer: 1
    explain: "Variación aproximada = −duración × cambio de tipos = −6 × 1 % = −6 %. Es una aproximación, mejor para cambios pequeños."
  - q: "Un bono corporativo ofrece un 9 % y un bono del Estado del mismo plazo un 3 %. ¿Qué indica, sobre todo, la diferencia?"
    options: ["Que el corporativo es un chollo", "Que el mercado exige una compensación por un riesgo de impago mayor", "Que el Estado paga mal"]
    answer: 1
    explain: "Un diferencial de 6 puntos refleja la percepción de riesgo. Más rentabilidad prometida no es más rentabilidad segura."
next: diversificacion-internacional-divisas
related: [productos-basicos, asignacion-y-rebalanceo]
tools: []
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-15
reviewed: 2026-10-15
status: revision-pendiente
jurisdiction: General
sources: [cnmv-inversor, priips-kid]
---

## Explicación

### Rentabilidad a vencimiento

Si compras un bono y lo mantienes hasta el final, y el emisor paga, tu rentabilidad anual será la **rentabilidad a vencimiento** (TIR) del momento de compra. Si lo vendes antes, el resultado depende del precio de mercado en ese momento.

### Tipos de interés y duración

Cuando los tipos suben, los bonos ya emitidos pagan menos que los nuevos y su precio baja. La **[duración](/es/glosario/#duracion)** mide esa sensibilidad:

- La **duración de Macaulay** es el plazo medio, ponderado por valor, en que recibes los pagos.
- La **duración modificada** aproxima la variación del precio: `variación % ≈ −duración modificada × cambio de tipos`.

Cuanto más largo el plazo y más bajo el cupón, mayor la duración y mayor la sensibilidad. Un fondo monetario tiene una duración muy baja; un fondo de bonos a 20 años, muy alta.

### Riesgo de crédito

El **[riesgo de crédito](/es/glosario/#credito)** es la posibilidad de que el emisor no pague. Se refleja en el **diferencial**: lo que el bono paga por encima de un bono considerado de referencia. Las agencias de calificación clasifican emisores (de mayor a menor calidad: grado de inversión y alto rendimiento), pero sus notas pueden cambiar y han fallado en el pasado.

### Inflación

Un bono que paga un 3 % durante diez años con una inflación media del 4 % pierde poder adquisitivo aunque pague todo. Existen bonos ligados a la inflación, con sus propias particularidades.

## Ejemplo numérico

Bono a 10 años, cupón anual del 3 %, comprado a la par (100 %):

- Duración de Macaulay: **8,79 años**; duración modificada: **8,53**.
- Si los tipos de ese plazo suben al **4 %**, el precio teórico pasa a **91,89 %** (−8,1 %). La aproximación por duración daba −8,5 %: cercana, algo exagerada, porque la relación precio-tipo es curva (convexidad).
- Si bajan al **2 %**, el precio pasa a **108,98 %** (+9,0 %).
- Un bono a **2 años** con el mismo cupón, ante la subida al 4 %, solo bajaría a **98,11 %**.

Si mantienes el bono a 10 años hasta su vencimiento y el emisor paga, recibirás los cupones y el 100 %: la caída de precio intermedia solo se convierte en pérdida si vendes. Un fondo de renta fija, en cambio, no tiene vencimiento: su valor se mueve con los tipos de forma continua.
