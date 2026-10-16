---
title: Gana más que nunca y la acción cae
description: Por qué el precio de una acción depende de lo esperado, qué es «batir el consenso» y por qué las previsiones pesan más que el beneficio del trimestre.
level: basico
track: noticias
order: 404
skills: [resultados-expectativas, cuenta-resultados]
goals: [entender, miedo]
prereqs: [no-01-hecho-dato-opinion]
hook: "Una empresa anuncia el mayor beneficio de su historia y su acción cae un 7 % ese mismo día. ¿El mercado se ha vuelto loco?"
takeaway: "La bolsa no premia lo bueno o lo malo, sino lo mejor o peor de lo esperado. Y lo que más pesa es lo que la empresa espera del futuro."
scenario:
  kind: noticia
  label: Noticia de ejemplo
  title: "Cerámicas Levante logra un beneficio récord, pero se desploma un 7 % en bolsa"
  body: "Cerámicas Levante S.A. ganó 410 millones de euros en el ejercicio, un 12 % más que el año anterior y la cifra más alta de su historia. Sus ventas, 2.400 millones, superaron los 2.350 millones que esperaban los analistas. Sin embargo, el beneficio quedó por debajo del consenso, que lo situaba en 430 millones. Además, la empresa rebajó su previsión de crecimiento de ventas para el año próximo del 6 % al 2 %. Ese mismo día, Logística Meseta S.A. perdió 40 millones, frente a los 90 millones de pérdidas esperados, y su acción subió un 5 %."
  note: Noticia ficticia con fines educativos.
questions:
  - type: estimate
    id: no04-q1
    q: "Cerámicas Levante ganó 410 millones y el consenso esperaba 430. ¿En qué porcentaje quedó por debajo de lo esperado?"
    answer: 4.7
    tolerance: 0.5
    min: 0
    max: 20
    step: 0.1
    unit: "%"
    explain: "410 / 430 − 1 = −4,65 %. Ganó un 12 % más que el año pasado, pero el precio ya descontaba 430. La comparación que mueve el precio es contra lo esperado, no contra el año anterior."
  - type: choice
    id: no04-q2
    q: "Según la noticia, ¿qué explica mejor la caída del 7 %?"
    options: ["Que el beneficio es un récord", "Sobre todo, la rebaja de previsiones: el 6 % de crecimiento esperado pasa al 2 %", "Que las ventas superaron lo esperado", "Que Logística Meseta subió ese día"]
    answer: 1
    explain: "El precio de una acción refleja los beneficios que se esperan para muchos años. Un año algo por debajo de lo esperado pesa poco; recortar el crecimiento futuro del 6 % al 2 % cambia la valoración de todos los años siguientes."
  - type: truefalse
    id: no04-q3
    q: "Que Logística Meseta suba un 5 % tras perder 40 millones demuestra que es una buena inversión."
    answer: false
    explain: "Sube porque perdió menos de lo esperado (40 frente a 90 millones). Sigue perdiendo dinero. Una sorpresa positiva de un día no dice si el negocio es bueno ni si el precio es razonable."
action:
  title: Busca el consenso de una empresa
  steps:
    - "Elige una empresa cotizada que conozcas y busca la noticia de sus últimos resultados."
    - "Localiza tres cifras: lo que ganó, lo que esperaba el consenso y si cambió sus previsiones (guidance)."
    - "Compara la reacción de la acción ese día con esas tres cifras. ¿Cuál la explica mejor?"
  check: Sé por qué una acción puede caer con buenos resultados
deeper: estados-financieros
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: General
sources: [cnmv-cip-oir]
---

## La idea

**El precio de hoy ya incluye lo que el mercado espera.** Por eso una noticia solo mueve el precio en la parte que **sorprende**.

Tres palabras de las noticias de resultados:

- **Consenso**: la media de lo que esperaban los analistas. «Bate el consenso» = mejor de lo esperado.
- **Previsiones** (*guidance*): lo que la propia empresa dice que espera para los próximos trimestres. Suele pesar más que el dato pasado.
- **Récord**: comparación con el pasado. Al precio le importa poco.

Por eso pasa:

| Resultado | Frente a lo esperado | Reacción típica |
|---|---|---|
| Beneficio récord | Algo peor + previsiones a la baja | Cae |
| Pérdidas | Menores de lo temido | Sube |

Los resultados de las cotizadas españolas se comunican a la **CNMV** como información privilegiada («sobre resultados») o en sus informes periódicos. Esa es la fuente original.

## Con números

| | Cerámicas Levante |
|---|---:|
| Beneficio | 410 M€ (+12 % anual, récord) |
| Consenso | 430 M€ → **−4,7 %** |
| Ventas | 2.400 M€ frente a 2.350 M€ esperados (+2,1 %) |
| Crecimiento previsto el año próximo | del 6 % al **2 %** |
| Acción | −7 % |

## Error frecuente

Comprar «porque ha presentado buenos resultados». Si todo el mundo los esperaba, ya estaban en el precio.
