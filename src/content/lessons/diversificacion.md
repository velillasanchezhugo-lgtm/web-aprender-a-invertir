---
title: Diversificación
description: Repartir el dinero entre activos que no dependen de lo mismo reduce el riesgo de que un solo error te hunda. Qué consigue y qué no.
level: inicial
topic: carteras
route: { id: desde-cero, order: 6 }
minutes: 7
learn:
  - Por qué no conviene depender de una sola empresa, sector o país.
  - Qué papel juega la correlación entre activos.
  - Qué riesgo elimina la diversificación y cuál no.
prereqs: [riesgo-volatilidad-perdidas]
mistake: Creer que tener cinco fondos es estar diversificado. Si los cinco invierten en las mismas grandes empresas tecnológicas, el riesgo es casi el mismo que con uno.
summary:
  - Diversificar reduce el riesgo específico de cada empresa o emisor.
  - Cuanto menos se parezcan los movimientos de los activos (menor correlación), más ayuda.
  - No elimina el riesgo de mercado: en una crisis general casi todo cae a la vez.
  - Comprueba qué hay dentro de cada fondo, no solo cuántos tienes.
quiz:
  - q: "¿Qué tipo de riesgo reduce más la diversificación entre muchas empresas?"
    options: ["El riesgo de que caiga todo el mercado", "El riesgo de que una empresa concreta quiebre o vaya mal", "El riesgo de inflación"]
    answer: 1
    explain: "Con muchas empresas, el problema de una pesa poco en el total. El riesgo de mercado, que afecta a todas, permanece."
  - q: "Tienes tres fondos distintos que replican el mismo índice mundial. ¿Estás más diversificado que con uno?"
    options: ["Sí, el triple", "Prácticamente no: contienen las mismas empresas", "Sí, porque son de gestoras diferentes"]
    answer: 1
    explain: "La diversificación depende de lo que contienen, no del número de productos. Puede tener sentido por otros motivos, pero no reduce el riesgo."
next: productos-basicos
related: [asignacion-y-rebalanceo, diversificacion-internacional-divisas]
tools: [diversificacion-rebalanceo]
author: Redacción de Criterio (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-15
reviewed: 2026-10-15
status: revision-pendiente
jurisdiction: General
sources: [markowitz-1952, cnmv-inversor]
---

## Explicación

Si todo tu dinero está en una empresa, su suerte es tu suerte. Si quiebra, pierdes todo. **[Diversificar](/es/glosario/#diversificacion)** es repartir entre muchos activos para que el fallo de uno pese poco.

La idea se formalizó en la teoría moderna de carteras (Markowitz, 1952): el riesgo de una cartera no es la media de los riesgos de sus partes, porque las partes no se mueven igual. La clave es la **[correlación](/es/glosario/#correlacion)**, que mide cuánto se mueven juntos dos activos, de −1 (opuestos) a +1 (idénticos).

Hay dos tipos de riesgo:

- **Riesgo específico**: el de cada empresa o emisor (un mal producto, un fraude, una quiebra). La diversificación lo reduce mucho.
- **Riesgo sistemático o de mercado**: el que afecta a todos (una recesión, una crisis financiera). La diversificación entre acciones no lo elimina, y en las crisis las correlaciones tienden a subir justo cuando más falta hace.

Se puede diversificar por número de empresas, sectores, países, divisas y tipos de activo (acciones, bonos, liquidez). Cada capa ayuda de forma distinta.

## Ejemplo numérico

Modelo simplificado: acciones que oscilan cada una con una volatilidad anual del 30 %, todas con la misma correlación entre sí. La volatilidad de una cartera repartida a partes iguales es `σ × √(1/n + (1 − 1/n) × ρ)`:

| Número de acciones | Correlación 0,3 | Correlación 0 (teórica) |
|---:|---:|---:|
| 1 | 30,0 % | 30,0 % |
| 5 | 19,9 % | 13,4 % |
| 10 | 18,3 % | 9,5 % |
| 20 | 17,4 % | 6,7 % |
| 100 | 16,6 % | 3,0 % |

Dos lecciones:

1. Las primeras acciones añadidas reducen mucho el riesgo; a partir de unas decenas, cada una aporta poco.
2. Con correlación 0,3, el riesgo **nunca baja de unos 16,4 %**, por muchas acciones que añadas: ese es el riesgo de mercado que queda. Para reducirlo hay que combinar activos de otra naturaleza, como renta fija de alta calidad o liquidez, y aceptar a cambio menor rentabilidad esperada.

El modelo es una simplificación (en la realidad cada activo tiene su volatilidad y sus correlaciones cambian), pero el patrón se mantiene. Experimenta con él en la [calculadora de diversificación y rebalanceo](/es/herramientas/diversificacion-rebalanceo/).
