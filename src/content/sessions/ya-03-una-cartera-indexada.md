---
title: Una cartera de tres piezas
description: "Cómo montar una cartera global, diversificada y barata con uno a tres productos: acciones mundiales, renta fija euro de calidad y liquidez. Y cuánto cuesta en total."
level: basico
track: invertir-ya
order: 103
skills: [cartera-indexada, diversificacion, fondos-etf]
goals: [jubilacion, objetivo, entender]
prereqs: [ya-02-cuanto-en-bolsa]
hook: "Hay miles de fondos. ¿De verdad hace falta elegir entre todos? Para empezar bien, bastan tres piezas, y a veces una."
takeaway: Global, indexado y barato. Pocas piezas, muchas empresas dentro, y el coste total calculado.
scenario:
  kind: producto
  label: Fichas de ejemplo
  title: "Tres productos para una cartera 70/20/10"
  body: "Fondo A: indexado a un índice mundial de acciones, unas 3.000 empresas de más de 20 países; gastos corrientes del 0,20 %. Fondo B: gestión activa, 40 empresas españolas; gastos corrientes del 1,80 %. Fondo C: indexado a bonos de gobiernos de la zona euro con alta calificación; gastos corrientes del 0,15 %. Cuenta remunerada: sin comisiones. Reparto elegido en el plan: 70 % acciones, 20 % renta fija, 10 % liquidez."
  note: Ejemplo ficticio con fines educativos. No son productos reales.
questions:
  - type: choice
    id: ya03-q1
    q: "Para el 70 % en acciones, ¿qué ficha encaja con una cartera global y barata?"
    options: ["El fondo B, porque conoces las empresas españolas", "El fondo A: miles de empresas de muchos países y un coste nueve veces menor", "Mitad A y mitad B, para tener de todo"]
    answer: 1
    explain: "España es una parte muy pequeña de la bolsa mundial. El fondo B concentra el riesgo en un país y cobra 1,6 puntos más al año, algo que pocos fondos activos compensan a largo plazo según los informes SPIVA."
  - type: estimate
    id: ya03-q2
    q: "Coste total de la cartera: 70 % en el fondo A (0,20 %), 20 % en el C (0,15 %) y 10 % en la cuenta (0 %). ¿Cuál es el coste anual ponderado?"
    answer: 0.17
    tolerance: 0.02
    min: 0
    max: 1
    step: 0.01
    unit: "%"
    explain: "0,70 × 0,20 + 0,20 × 0,15 + 0,10 × 0 = 0,14 + 0,03 = 0,17 %. Sobre 10.000 €, unos 17 € al año. Multiplica cada coste por su peso y suma."
  - type: truefalse
    id: ya03-q3
    q: "Tener tres fondos indexados globales de acciones de gestoras distintas diversifica bastante más que tener uno."
    answer: false
    explain: "Si siguen índices mundiales parecidos, tienen casi las mismas empresas dentro. Sumas piezas, no diversificación. La diversificación la da lo que hay dentro de cada fondo."
action:
  title: Dibuja tu cartera
  steps:
    - "Escribe tus tres piezas como categorías: acciones globales, renta fija euro de calidad y liquidez, con el porcentaje de tu plan."
    - "Busca en un comparador público o en la web de tu entidad dos fondos o ETF indexados globales y anota su número de empresas y sus gastos corrientes (del KID)."
    - "Calcula el coste ponderado de tu cartera con la fórmula de esta sesión."
  check: Sé qué piezas tendrá mi cartera y cuánto cuesta en total
deeper: gestion-indexada-y-activa
tool: cartera-practica
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: General
sources: [spiva, fama-french-2010, priips-kid, markowitz-1952]
---

## La idea

Una cartera sencilla tiene **una pieza por cajón**:

1. **Acciones globales**: un fondo o ETF **indexado a un índice mundial**, con miles de empresas de muchos países y sectores.
2. **Renta fija euro de calidad**: bonos de gobiernos o empresas solventes en euros, sin riesgo de divisa.
3. **Liquidez**: cuenta remunerada, depósito o Letras.

Si tu plan es 100 % acciones, te basta **una sola pieza**.

¿Por qué **global**? Porque no sabes qué país o sector irá mejor, y con uno global tienes todos. ¿Por qué **indexado y barato**? Porque los informes **SPIVA** encuentran, año tras año, que la mayoría de fondos de gestión activa quedan por detrás de su índice a largo plazo, en buena parte por lo que cobran.

## Con números

Coste de una cartera de 10.000 € con el reparto 70/20/10:

| Pieza | Peso | Gastos | Aporta al coste |
|---|---:|---:|---:|
| Fondo A (global indexado) | 70 % | 0,20 % | 0,14 % |
| Fondo C (renta fija euro) | 20 % | 0,15 % | 0,03 % |
| Liquidez | 10 % | 0 % | 0 % |
| **Total** | | | **0,17 %** (17 € al año) |

Si cambias el fondo A por el B (1,80 %), el coste sube a **1,29 %**: 129 € al año sobre la misma cartera, y creciendo con ella.

## Error frecuente

Coleccionar fondos. Diez fondos que tienen las mismas empresas no reparten el riesgo: solo complican el seguimiento.
