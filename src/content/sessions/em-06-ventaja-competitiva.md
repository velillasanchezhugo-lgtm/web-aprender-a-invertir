---
title: Qué protege a un buen negocio
description: "Marca, costes de cambio, efecto red, escala y licencias: las cinco ventajas competitivas y cómo se notan en los márgenes y en la rentabilidad sobre el capital."
level: basico
track: empresas
order: 306
skills: [ventaja-competitiva, modelo-negocio]
goals: [entender]
prereqs: [em-03-margenes]
hook: "Si un negocio gana mucho dinero, ¿por qué no aparece alguien que lo copie y le quite los clientes?"
takeaway: Una ventaja competitiva es lo que impide que te copien. Se nota en las cifras como márgenes y rentabilidad sobre el capital altos que se mantienen años.
scenario:
  kind: empresa
  label: Empresas de ejemplo
  title: Café Brío S.A. frente a Nubia Software S.A.
  body: "Café Brío: marca conocida, app con la que el 60 % de clientes acumula puntos, y compra café en grandes cantidades a mejor precio que una cafetería de barrio. Beneficio neto 12 M€, patrimonio neto 60 M€, EBIT 18 M€, capital invertido (patrimonio + deuda neta) 90 M€. Nubia Software: 4.000 clínicas guardan en su programa los historiales de sus pacientes; cambiar de proveedor exige migrar datos y formar a todo el personal. Retiene al 95 % de clientes cada año. Beneficio neto 15 M€, patrimonio neto 50 M€, EBIT 20 M€, capital invertido 30 M€ (no tiene deuda y sí 20 M€ de caja). Impuestos: 25 %."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: em06-q1
    q: "¿Cuál es la principal ventaja competitiva de Nubia Software?"
    options: ["Efecto red: cada cliente nuevo hace el producto mejor para los demás", "Costes de cambio: irse a otro proveedor es caro, lento y arriesgado para la clínica", "Patentes", "Escala de compras"]
    answer: 1
    explain: "Migrar historiales y reformar al personal cuesta tiempo y dinero, así que la clínica se queda aunque el precio suba un poco. El 95 % de retención es la huella de esa ventaja en las cifras."
  - type: estimate
    id: em06-q2
    q: "¿Cuál es la rentabilidad sobre el capital invertido (ROIC) de Café Brío? Calcula EBIT × (1 − 25 %) / capital invertido."
    answer: 15
    tolerance: 1
    min: 0
    max: 60
    step: 1
    unit: "%"
    explain: "18 × 0,75 = 13,5 M€; 13,5 / 90 = 15 %. Nubia: 20 × 0,75 / 30 = 50 %. Por cada 100 € metidos en el negocio, Nubia genera muchísimo más: así se ve una ventaja fuerte."
  - type: truefalse
    id: em06-q3
    q: "Un ROE alto siempre indica una gran ventaja competitiva."
    answer: false
    explain: "El ROE (beneficio / patrimonio) sube también con mucha deuda, porque reduce el patrimonio que pones tú. Por eso conviene mirar a la vez el ROIC, que incluye la deuda, y el nivel de endeudamiento."
action:
  title: Busca la ventaja de una empresa real
  steps:
    - "Para la empresa que estás siguiendo, escribe cuál de las cinco ventajas tiene (o ninguna) y por qué un competidor no podría copiarla mañana."
    - "Comprueba si se nota en las cifras: margen operativo de los últimos 3-5 años frente a un competidor."
    - "Calcula su ROE (beneficio neto / patrimonio neto) del último año."
  check: He identificado la ventaja competitiva de una empresa y he buscado su huella en las cifras
deeper: analisis-fundamental-valoracion
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: General
sources: [brk-letters, munger-almanack]
---

## La idea

Warren Buffett habla de un **foso** alrededor del castillo: lo que impide que la competencia se lleve los beneficios. Hay cinco tipos habituales:

- **Marca**: pagas más o vuelves por confianza o costumbre.
- **Costes de cambio**: irse a otro proveedor cuesta dinero, tiempo o riesgo.
- **Efecto red**: el servicio vale más cuantos más lo usan (un mercado de compraventa, un medio de pago).
- **Escala**: ser grande abarata cada unidad y el pequeño no puede igualar el precio.
- **Patentes y licencias**: la ley limita quién puede competir.

**Cómo se nota en las cifras**: márgenes altos y estables, y alta **rentabilidad sobre el capital**:

- **ROE** = beneficio neto / patrimonio neto. Cuánto gana por cada euro de los accionistas.
- **ROIC** = beneficio operativo después de impuestos / capital invertido (patrimonio + deuda neta). Cuánto gana por cada euro metido en el negocio, venga de donde venga.

## Con números

| | Café Brío | Nubia Software |
|---|---:|---:|
| Ventaja | Marca, app, escala de compras | Costes de cambio |
| Margen operativo | 9 % | 25 % |
| ROE | 12/60 = **20 %** | 15/50 = **30 %** |
| ROIC | 13,5/90 = **15 %** | 15/30 = **50 %** |

Las dos tienen ventaja; la de Nubia deja más huella. Que sea mejor **negocio** no dice aún si es mejor **inversión**: eso depende del precio (siguiente sesión).
