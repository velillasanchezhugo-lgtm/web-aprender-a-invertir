---
title: Márgenes, cuánto se queda de cada euro
description: "Margen bruto, operativo y neto: cómo calcularlos, por qué hay que compararlos con el sector y qué cuentan cuando son altos y estables."
level: basico
track: empresas
order: 303
skills: [cuenta-resultados, ventaja-competitiva]
goals: [entender]
prereqs: [em-02-la-cuenta-de-resultados]
hook: "Café Brío gana 12 millones y una empresa de software gana 15. Parecen parecidas. ¿Lo son?"
takeaway: El margen dice cuántos céntimos se quedan de cada euro vendido. Compáralo con empresas del mismo sector y mira si aguanta varios años.
scenario:
  kind: empresa
  label: Empresas de ejemplo
  title: Café Brío S.A. frente a Nubia Software S.A.
  body: "Café Brío (cafeterías), 2025: ventas 200 M€, beneficio bruto 136 M€, EBIT 18 M€, beneficio neto 12 M€. Su margen operativo fue del 8,5 % en 2023 y del 8,8 % en 2024. Nubia Software (programa de gestión para clínicas, por suscripción anual): ventas 80 M€, beneficio bruto 64 M€, EBIT 20 M€, beneficio neto 15 M€. El margen operativo medio de las cadenas de restauración comparables es del 7 %."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: estimate
    id: em03-q1
    q: "¿Cuál es el margen operativo (EBIT / ventas) de Nubia Software?"
    answer: 25
    tolerance: 1
    min: 0
    max: 60
    step: 1
    unit: "%"
    explain: "20 / 80 = 0,25: un 25 %. Café Brío se queda 9 céntimos de cada euro (18/200); Nubia, 25. Con menos ventas, Nubia gana más."
  - type: choice
    id: em03-q2
    q: "¿Es «malo» el margen operativo del 9 % de Café Brío porque el de Nubia es del 25 %?"
    options: ["Sí: cuanto más margen, mejor empresa, sea del sector que sea", "No necesariamente: hay que compararlo con su sector (7 %) y con su propia historia (8,5 %, 8,8 %, 9 %)", "Sí, porque el software siempre es mejor inversión"]
    answer: 1
    explain: "Cada sector tiene márgenes típicos: una cafetería paga personal y locales; un software casi no tiene coste por cliente extra. Café Brío está por encima de su sector y mejora poco a poco, lo que sugiere que hace algo bien."
  - type: truefalse
    id: em03-q3
    q: "Unos márgenes altos y estables durante muchos años pueden indicar que la empresa tiene algo que sus competidores no logran copiar."
    answer: true
    explain: "Si un negocio muy rentable fuese fácil de copiar, llegarían competidores y bajarían los precios. Que el margen aguante es una pista de ventaja competitiva (lo verás en la sesión 6), no una prueba."
action:
  title: Calcula los márgenes de una empresa real
  steps:
    - "Con las cifras que anotaste en la sesión anterior, calcula margen operativo (resultado de explotación / ventas) y margen neto (resultado del ejercicio / ventas)."
    - "Busca las mismas cifras del año anterior en el mismo informe (siempre trae la columna comparativa) y mira si el margen sube, baja o se mantiene."
    - "Haz lo mismo con un competidor directo y compara."
  check: He calculado y comparado los márgenes de una empresa real
deeper: estados-financieros
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: General
sources: [lynch-one-up, brk-letters]
---

## La idea

Un **margen** es un escalón de la cascada dividido entre las ventas:

- **Margen bruto** = beneficio bruto / ventas. Cuánto cobras por encima de lo que te cuesta el producto.
- **Margen operativo** = EBIT / ventas. Cuánto deja el negocio tras pagar su funcionamiento.
- **Margen neto** = beneficio neto / ventas. Lo que queda para el accionista.

Tres reglas para leerlos:

1. **Compara dentro del sector.** Un supermercado con un 4 % puede ser excelente; un software con un 4 %, flojo.
2. **Mira la tendencia.** Varios años estables o al alza dicen más que un año brillante.
3. **Pregunta por qué.** Un margen alto que se mantiene suele tener una causa: marca, clientes atados, escala…

## Con números

| 2025 | Café Brío | Nubia Software |
|---|---:|---:|
| Margen bruto | 136/200 = **68 %** | 64/80 = **80 %** |
| Margen operativo | 18/200 = **9 %** | 20/80 = **25 %** |
| Margen neto | 12/200 = **6 %** | 15/80 = **18,8 %** |

Café Brío: margen operativo de 8,5 %, 8,8 % y 9 % en tres años, por encima del 7 % de su sector. **Estable y algo mejor que la media.**

## Error frecuente

Comparar márgenes de sectores distintos y concluir que uno «es mejor». El margen se compara con iguales.
