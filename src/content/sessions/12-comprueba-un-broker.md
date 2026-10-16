---
title: Comprueba un bróker en 3 minutos
description: Las tres comprobaciones que separan una entidad seria de un riesgo, y qué te protege (y qué no) si la entidad quiebra.
level: cero
track: camino-cero
order: 12
skills: [comprobar-broker]
goals: [miedo, ordenar, objetivo]
prereqs: [09-los-cuatro-productos]
hook: "Una app de inversión tiene buenas valoraciones y anuncios por todas partes. ¿Es suficiente para confiar?"
takeaway: Entidad, supervisor y registro. Y recuerda que las garantías cubren el fallo de la entidad, nunca las caídas del mercado.
questions:
  - type: choice
    id: s12-q1
    q: "Tus acciones caen un 30 % por una crisis. ¿Te cubre el Fondo de Garantía de Depósitos o el FOGAIN?"
    options: ["Sí, hasta 100.000 €", "No: cubren la no devolución si la entidad falla, no las pérdidas de mercado", "Solo si las acciones son españolas"]
    answer: 1
    explain: "El propio FGD lo indica: no cubre las pérdidas de valor de los títulos, solo su no devolución."
  - type: truefalse
    id: s12-q2
    q: "Si una entidad no aparece en las advertencias de la CNMV, está autorizada."
    answer: false
    explain: "Hay que comprobarla en los registros oficiales de entidades autorizadas. No figurar en las advertencias no prueba nada."
action:
  title: Comprueba una entidad
  steps:
    - "Elige una app o bróker que conozcas y busca en su aviso legal el nombre completo de la entidad y su país."
    - "Búscala en el registro de entidades autorizadas de la CNMV (y en el supervisor de su país si es extranjera)."
    - "Comprueba que el nombre y el dominio web coinciden."
  check: He comprobado una entidad en un registro oficial
deeper: investigar-broker-y-fraudes
tool: comparador-comisiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: España y UE
sources: [cnmv-entidades, fgd-valores, cnmv-fogain, degiro-seguridad]
---

## La idea

Tres comprobaciones:

1. **¿Quién es?** El nombre comercial no basta: busca la denominación social completa en el aviso legal.
2. **¿Quién la supervisa?** CNMV, Banco de España o el supervisor de su país si es de otro Estado de la UE.
3. **¿Está en el registro?** Compruébalo en el registro oficial, no en la web de la propia entidad.

Y qué te protege si la entidad quiebra:

| Sistema | Cubre | Límite |
|---|---|---|
| FGD (depósitos) | Tu dinero en bancos españoles adheridos | 100.000 € por titular y entidad |
| FGD (valores) | Valores no devueltos por bancos adheridos | 100.000 €, aparte |
| FOGAIN | Clientes de empresas de inversión españolas | 100.000 € |
| Otros países de la UE | Según el país | Mínimo europeo: 20.000 € |

## Con números

Carmen tiene 50.000 € en ETF en un bróker alemán. El sistema alemán de indemnización cubre el **90 % hasta 20.000 €** por valores no devueltos. En un bróker español adherido al FOGAIN, el límite sería **100.000 €**.

Ninguno de los dos le devolvería nada si los ETF caen un 20 %: eso es riesgo de mercado.
