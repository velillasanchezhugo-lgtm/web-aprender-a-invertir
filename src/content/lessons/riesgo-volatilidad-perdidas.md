---
title: Riesgo, volatilidad y pérdidas permanentes
description: Que una inversión baje no es lo mismo que perder dinero para siempre. Aprende a distinguir fluctuación, caída prolongada y pérdida permanente.
level: inicial
topic: riesgo
route: { id: desde-cero, order: 5 }
minutes: 9
learn:
  - Qué es la volatilidad y por qué no es el único riesgo.
  - Cuánto hay que subir para recuperar una caída.
  - Qué situaciones convierten una caída en una pérdida permanente.
prereqs: [inflacion-e-interes-compuesto]
mistake: Pensar que «a largo plazo la bolsa siempre se recupera». Los índices amplios se han recuperado de muchas crisis, pero algunos tardaron décadas, las empresas individuales pueden desaparecer y quien vende en el mínimo convierte la caída en definitiva.
summary:
  - La volatilidad mide cuánto oscila un precio; es incómoda, pero no siempre implica pérdida final.
  - Una caída del 50 % exige una subida del 100 % solo para volver al punto de partida.
  - La pérdida se vuelve permanente por quiebra, fraude, venta forzada o un horizonte que se acaba antes de la recuperación.
  - Tu riesgo real depende también de tu situación: el mismo producto es más arriesgado para quien puede necesitar el dinero pronto.
quiz:
  - q: "Una cartera cae un 40 %. ¿Qué subida necesita para recuperar su valor inicial?"
    options: ["40 %", "Alrededor del 67 %", "100 %"]
    answer: 1
    explain: "Subida necesaria = caída / (1 − caída) = 0,40 / 0,60 ≈ 66,7 %."
  - q: "¿Cuál de estas situaciones convierte con más claridad una caída en pérdida permanente?"
    options: ["Mantener un fondo diversificado durante una caída temporal", "Tener que vender en el mínimo porque necesitas el dinero", "Ver el precio bajar en la aplicación"]
    answer: 1
    explain: "Vender obligado por falta de colchón fija la pérdida. Por eso el fondo de emergencia y el horizonte son parte de la gestión del riesgo."
next: diversificacion
related: [psicologia-y-sesgos, gestion-del-riesgo]
tools: [simulador-caidas]
author: Redacción de Criterio (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-15
reviewed: 2026-10-15
status: revision-pendiente
jurisdiction: General
sources: [sp500-history, nikkei-history, brk-2025]
---

## Explicación

Cuando hablamos de riesgo solemos mezclar tres cosas distintas:

1. **[Volatilidad](/es/glosario/#volatilidad)**: cuánto se mueve el precio arriba y abajo. Una acción que oscila un 3 % al día es más volátil que un bono a corto plazo.
2. **[Caída máxima](/es/glosario/#caida-maxima)** (*drawdown*): cuánto llega a caer desde un máximo, y cuánto tarda en recuperarlo.
3. **[Pérdida permanente](/es/glosario/#perdida-permanente)**: dinero que no vuelve. Ocurre si el emisor quiebra, si hay fraude, si vendes en el peor momento o si tu plazo se acaba antes de que el precio se recupere.

### Las caídas son asimétricas

Perder un porcentaje exige ganar un porcentaje mayor para volver al inicio:

| Caída | Subida necesaria para recuperar |
|---:|---:|
| −10 % | +11,1 % |
| −20 % | +25,0 % |
| −30 % | +42,9 % |
| −50 % | +100,0 % |
| −80 % | +400,0 % |

La fórmula es sencilla: `subida necesaria = caída / (1 − caída)`.

### Ejemplos documentados (no seleccionados por ser favorables)

- **S&P 500, índice de precios en dólares, sin dividendos ni inflación:** cerró en 1.565,15 puntos el 9 de octubre de 2007 y en 676,53 el 9 de marzo de 2009, una caída del **56,8 %**. Volvió a superar el máximo de cierre en marzo de 2013, unos cinco años y medio después del pico. Con dividendos reinvertidos la recuperación fue algo más rápida.
- **Nikkei 225, índice de precios en yenes, sin dividendos:** cerró en 38.915,87 puntos el 29 de diciembre de 1989 y no superó ese nivel hasta el 22 de febrero de 2024, **más de 34 años después**. Con dividendos el periodo es más corto, pero sigue siendo de décadas.
- **Incluso inversores célebres sufren caídas profundas:** según la tabla publicada por Berkshire Hathaway, el precio de su acción cayó un **48,7 % en 1974** y un **19,9 % en 1999**, año en que el S&P 500 con dividendos subió un 21 %.

Estos episodios no predicen el futuro. Muestran que una recuperación puede tardar mucho y que el «largo plazo» puede ser más largo que tu plan.

### Tu riesgo depende de ti

El mismo fondo es más arriesgado para quien puede necesitar el dinero en un año que para quien no lo tocará en veinte. Por eso hablamos de:

- **Capacidad** para asumir pérdidas: qué puedes perder sin cambiar tu vida.
- **Tolerancia** emocional: qué caída puedes ver sin vender por miedo.
- **Comprensión**: si sabes qué tienes y por qué baja.

## Ejemplo numérico

Elena invierte 10.000 €. En una crisis, su cartera cae un 35 % hasta 6.500 €.

- Para volver a 10.000 € necesita una subida del 53,8 % (0,35 / 0,65).
- Si a partir de ahí su cartera subiera un 6 % anual constante (supuesto, no previsión), tardaría `ln(1/0,65) / ln(1,06)` ≈ **7,4 años** en recuperar el punto de partida.
- Si en el peor momento necesita 5.000 € para un imprevisto y no tiene colchón, vende el 77 % de su cartera en el mínimo. Esa pérdida ya no se recuperará aunque el mercado suba después.

Prueba distintas caídas y supuestos en el [simulador de caídas y recuperación](/es/herramientas/simulador-caidas/).
