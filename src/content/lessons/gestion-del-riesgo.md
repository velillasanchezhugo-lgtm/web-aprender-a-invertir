---
title: Gestión del riesgo en una cartera
description: Gestionar el riesgo no es evitarlo, sino decidir cuánto asumir, dónde y con qué límites. Herramientas sencillas y sus limitaciones.
level: intermedio
topic: riesgo
minutes: 9
learn:
  - Cómo traducir tu capacidad de pérdida en límites concretos.
  - Qué es el tamaño de posición y por qué limita los errores.
  - Qué pueden y qué no pueden hacer las órdenes de pérdida limitada (stop).
prereqs: [riesgo-volatilidad-perdidas, diversificacion]
mistake: Creer que una orden stop garantiza vender a ese precio. En una caída brusca o con huecos de precio, la orden se ejecuta al siguiente precio disponible, que puede ser mucho peor.
summary:
  - Empieza por la pérdida máxima que podrías soportar en euros, no por la rentabilidad que deseas.
  - El reparto entre activos fija el riesgo global; el tamaño de cada posición limita el daño de cada error.
  - Las órdenes stop pueden reducir pérdidas en algunas situaciones, pero no garantizan precio y pueden hacerte vender en una caída pasajera.
  - Los riesgos menos visibles (liquidez, contraparte, concentración, divisa) también cuentan.
quiz:
  - q: "Tienes 30.000 € invertidos y decides que ninguna empresa individual pese más de un 5 %. Si una de ellas quiebra, ¿cuál es la pérdida máxima por ese motivo?"
    options: ["30.000 €", "Unos 1.500 €", "Nada, porque hay diversificación"]
    answer: 1
    explain: "5 % de 30.000 € = 1.500 €. El límite de tamaño convierte un desastre en un mal año."
  - q: "Pones una orden stop de venta a 45 € en una acción que cotiza a 50 €. Tras unos malos resultados, abre a 38 €. ¿A qué precio aproximado se venderá?"
    options: ["A 45 €", "Cerca de 38 €, el primer precio disponible", "No se vende"]
    answer: 1
    explain: "Una orden stop se convierte en orden a mercado al tocarse el precio. Si el precio salta por debajo, se ejecuta al disponible."
next: analisis-fundamental-valoracion
related: [asignacion-y-rebalanceo, ordenes-liquidez-ejecucion]
tools: [simulador-caidas, cartera-practica]
author: Redacción de Criterio (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-15
reviewed: 2026-10-15
status: revision-pendiente
jurisdiction: General
sources: [cnmv-inversor, myinvestor-broker]
---

## Explicación

### 1. Empieza por la pérdida que puedes soportar

Pregúntate: **¿cuántos euros podría ver desaparecer temporalmente sin cambiar mis planes ni vender en pánico?** Si la respuesta es 3.000 € y crees que la parte de acciones de tu cartera podría caer un 40 % en un mal año, esa parte no debería superar unos 7.500 €. Este cálculo es aproximado, pero obliga a pensar en euros, que es como se sienten las pérdidas.

### 2. Tamaño de posición

Si inviertes en valores individuales, limita cuánto pesa cada uno. Un límite del 5 % significa que un fallo total de una empresa te cuesta, como mucho, un 5 % de la cartera. Los fondos diversificados hacen esto por ti.

### 3. Órdenes de pérdida limitada (stop)

Una **orden stop** se activa al alcanzarse un precio y se convierte normalmente en una orden a mercado. Ventajas: automatiza una salida. Limitaciones:

- **No garantiza el precio**: si hay un hueco (por ejemplo, tras una noticia fuera de horario), se ejecuta peor.
- Puede **venderte en una caída pasajera** y dejarte fuera de la recuperación.
- No todas las entidades las ofrecen en todos los mercados; por ejemplo, MyInvestor indica que solo las permite en NYSE, Nasdaq y Xetra.

Para un inversor a largo plazo con una cartera diversificada, el riesgo se suele gestionar mejor con la asignación de activos que con órdenes stop.

### 4. Riesgos menos visibles

- **Liquidez**: ¿podrás vender cuando quieras sin rebajar mucho el precio?
- **Contraparte**: en derivados o productos estructurados, dependes de que la entidad emisora pague.
- **Concentración oculta**: varios fondos pueden tener las mismas empresas.
- **Divisa** e **inflación**, vistas en lecciones anteriores.

## Ejemplo numérico

Nuria tiene 40.000 €: 8.000 € de colchón y 32.000 € para invertir a largo plazo. Calcula que podría soportar ver caer su inversión 8.000 € sin cambiar planes.

- Si supone que, en un año muy malo, las acciones pueden caer un 45 % y la renta fija de alta calidad a corto plazo un 5 %, la caída de una cartera con un porcentaje *a* en acciones sería aproximadamente `a × 45 % + (1 − a) × 5 %` de 32.000 €.
- Para no superar 8.000 € (25 % de 32.000 €): `0,45a + 0,05(1 − a) ≤ 0,25` → `a ≤ 50 %`.

Con estos supuestos, una exposición a acciones por encima del 50 % superaría su límite en un año muy malo. Los supuestos son discutibles (las caídas pueden ser mayores), pero el método la obliga a pensar en lo que podría perder, no solo en lo que espera ganar.
