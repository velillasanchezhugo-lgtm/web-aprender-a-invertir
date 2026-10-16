---
title: La cuenta de resultados, en cascada
description: "De las ventas al beneficio neto en cuatro escalones: qué se resta en cada uno y cómo calcular cuánto ha crecido la empresa."
level: basico
track: empresas
order: 302
skills: [cuenta-resultados]
goals: [entender]
prereqs: [em-01-como-gana-dinero]
hook: "Un titular dice «Café Brío gana 12 millones». ¿Es mucho o poco? ¿Y de dónde salen, si vende 200?"
takeaway: "Lee la cuenta de resultados de arriba abajo: ventas, beneficio bruto, beneficio operativo (EBIT) y beneficio neto. Y compárala siempre con el año anterior."
scenario:
  kind: empresa
  label: Empresa de ejemplo
  title: Café Brío S.A., cuenta de resultados de 2025
  body: "Ventas: 200 M€ (2024: 184 M€). Coste de ventas (café, leche, comida, envases): 64 M€. Personal: 70 M€. Alquileres y otros gastos: 36 M€. Amortizaciones: 12 M€. Intereses de la deuda: 2 M€. Impuesto sobre beneficios: 4 M€. Beneficio neto de 2024: 10 M€."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: estimate
    id: em02-q1
    q: "¿Cuál es el beneficio operativo (EBIT) de Café Brío en 2025, en millones de euros?"
    answer: 18
    tolerance: 0
    min: 0
    max: 100
    step: 1
    unit: "M€"
    explain: "200 − 64 = 136 de beneficio bruto. 136 − 70 − 36 = 30 (EBITDA). 30 − 12 de amortizaciones = 18 M€ de EBIT. Los intereses y los impuestos se restan después."
  - type: estimate
    id: em02-q2
    q: "¿Cuánto han crecido las ventas de Café Brío respecto a 2024?"
    answer: 8.7
    tolerance: 0.5
    min: 0
    max: 30
    step: 0.1
    unit: "%"
    explain: "(200 − 184) / 184 = 0,087, es decir, un 8,7 %. Calcula siempre sobre la cifra del año anterior, no sobre la nueva (16/200 daría un 8 %, que es incorrecto)."
  - type: choice
    id: em02-q3
    q: "El beneficio neto pasa de 10 a 12 M€ (+20 %) mientras las ventas suben un 8,7 %. ¿Qué es lo más razonable concluir?"
    options: ["Que la empresa crecerá un 20 % cada año", "Que ha ganado más por cada euro vendido este año; conviene ver por qué y si se repetirá", "Que el dato está mal, porque deben crecer igual", "Nada: el beneficio neto no importa"]
    answer: 1
    explain: "Si el beneficio crece más que las ventas, los márgenes han mejorado (precios, costes, menos intereses…). La pregunta útil es si es duradero o puntual: lo verás con los márgenes."
action:
  title: Encuentra la cascada en unas cuentas reales
  steps:
    - "Busca el último informe anual o semestral de una cotizada que conozcas (en su web, sección «Inversores» o «Accionistas»)."
    - "Localiza la cuenta de resultados consolidada y anota cuatro cifras: ventas (o «importe neto de la cifra de negocios»), resultado de explotación, resultado antes de impuestos y resultado del ejercicio."
    - "Calcula cuánto han crecido las ventas respecto al año anterior."
  check: He encontrado las cuatro cifras clave de una cuenta de resultados real
deeper: estados-financieros
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: General
sources: [cnmv-ifa, graham-dodd]
---

## La idea

La cuenta de resultados es una **cascada**: arriba entra todo lo que vende la empresa y en cada escalón se resta un tipo de gasto.

1. **Ventas** (en las cuentas españolas, «importe neto de la cifra de negocios»).
2. **Beneficio bruto** = ventas − lo que cuesta directamente lo vendido.
3. **Beneficio operativo o EBIT** («resultado de explotación») = beneficio bruto − gastos del día a día (personal, alquileres, amortizaciones). Mide **el negocio en sí**.
4. **Beneficio neto** = EBIT − intereses − impuestos. Es lo que queda para los accionistas.

Un paso intermedio muy citado es el **EBITDA**: el EBIT antes de restar amortizaciones. Es útil, pero ignora que las máquinas y los locales se gastan y hay que reponerlos.

## Con números

Café Brío, 2025 (millones de euros):

| Escalón | Cálculo | Resultado |
|---|---|---:|
| Ventas | | 200 |
| Beneficio bruto | 200 − 64 | 136 |
| EBITDA | 136 − 70 − 36 | 30 |
| EBIT | 30 − 12 | 18 |
| Beneficio antes de impuestos | 18 − 2 | 16 |
| Beneficio neto | 16 − 4 | **12** |

Crecimiento interanual: ventas **+8,7 %** (de 184 a 200); beneficio neto **+20 %** (de 10 a 12).
