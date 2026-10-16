---
title: Un informe de resultados en 5 minutos
description: "Dónde encontrar los resultados de una cotizada (su web y la CNMV) y qué mirar primero: ventas, márgenes, caja, deuda, previsiones y el «beneficio ajustado»."
level: basico
track: empresas
order: 308
skills: [informacion-empresas, resultados-expectativas, cuenta-resultados]
goals: [entender, ordenar]
prereqs: [em-07-caro-o-barato]
hook: "Café Brío presenta resultados y el titular de su nota de prensa dice «récord de EBITDA ajustado». ¿Es una buena noticia?"
takeaway: "Lee primero las cifras oficiales, luego las «ajustadas», y pregunta siempre qué se ha quitado y por qué."
scenario:
  kind: empresa
  label: Informe de ejemplo
  title: "Café Brío S.A., resultados del primer semestre de 2026"
  body: "Ventas: 106 M€ (1S 2025: 96 M€); ventas en tiendas comparables (abiertas más de un año): +3 %. EBITDA: 14 M€ (1S 2025: 14,4 M€). «EBITDA ajustado récord»: 17 M€, excluyendo 3 M€ de costes de apertura y reestructuración (es el tercer semestre seguido con ese ajuste). La empresa alarga la vida útil contable de sus cafeteras de 5 a 8 años, lo que reduce la amortización en 2 M€. Flujo de caja libre: 1 M€. Deuda neta: 38 M€ (diciembre de 2025: 30 M€). Mantiene su previsión de ventas para 2026 (215-220 M€) y rebaja la de margen EBITDA ajustado del 16-17 % al 15-16 %."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: estimate
    id: em08-q1
    q: "¿Cuál es el margen EBITDA del semestre con la cifra oficial (no ajustada)?"
    answer: 13.2
    tolerance: 0.5
    min: 0
    max: 30
    step: 0.1
    unit: "%"
    explain: "14 / 106 = 13,2 %. Un año antes fue 14,4 / 96 = 15 %. Con la cifra oficial, el margen baja; con la ajustada (17/106 = 16 %) parece que sube."
  - type: truefalse
    id: em08-q2
    q: "Si una empresa excluye los mismos «costes extraordinarios» semestre tras semestre, lo prudente es tratarlos como costes normales del negocio."
    answer: true
    explain: "Lo extraordinario no se repite cada seis meses. Las directrices de ESMA piden a las cotizadas definir y conciliar estas medidas alternativas con las cifras oficiales, justo para que puedas comprobar qué se ha quitado."
  - type: choice
    id: em08-q3
    q: "Con todo el informe, ¿qué lectura es más completa?"
    options: ["Récord de EBITDA ajustado: va mejor que nunca", "Vende más, sobre todo por tiendas nuevas; el margen oficial baja, la caja libre casi desaparece, la deuda sube, rebaja su previsión de margen y un cambio contable mejora el beneficio", "Va fatal porque ha subido la deuda", "No se puede decir nada sin el precio de la acción"]
    answer: 1
    explain: "En 5 minutos: ventas (+10,4 %, solo +3 % en tiendas comparables), margen (baja), caja (1 M€), deuda (+8 M€), previsiones (rebaja) y contabilidad (amortiza más despacio). No es un desastre, pero no es un récord."
action:
  title: Encuentra un informe de resultados real
  steps:
    - "Entra en la web de inversores de una cotizada española que conozcas y descarga su última presentación o nota de resultados."
    - "Busca el mismo informe en la CNMV: Consultas a registros oficiales → Entidades emisoras → Información financiera intermedia, por el nombre de la empresa."
    - "Anota las seis cosas del semáforo: ventas, margen, caja, deuda, previsiones y si destacan alguna cifra «ajustada»."
  check: He encontrado un informe de resultados en la CNMV y lo he revisado con el semáforo de seis puntos
deeper: estados-financieros
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: España y UE
sources: [cnmv-ifi, cnmv-ifa, lmv-informes-financieros, esma-apm]
---

## La idea

**Dónde están los resultados**:

- En la **web de relación con inversores** de la empresa: nota de prensa, presentación y, a veces, vídeo.
- En la **CNMV**, como información regulada: las cotizadas españolas publican un **informe financiero anual** auditado (como tarde, cuatro meses después del cierre) y uno **semestral** (como tarde, tres meses después del semestre), según la Ley del Mercado de Valores.

**Qué mirar en 5 minutos**, en este orden:

1. **Ventas**: ¿cuánto crecen? ¿por tiendas o clientes nuevos o porque los de siempre compran más?
2. **Márgenes**: con las cifras oficiales, frente al mismo periodo del año anterior.
3. **Caja**: flujo de caja libre.
4. **Deuda**: deuda neta, y si sube.
5. **Previsiones** (*guidance*): ¿las mantiene, sube o baja? Moverán la cotización más que el pasado.
6. **Letra pequeña**: cambios contables y cifras **«ajustadas»**. Son medidas alternativas de rendimiento: útiles, pero las elige la empresa.

## Con números

| Café Brío, 1S | 2025 | 2026 | |
|---|---:|---:|---|
| Ventas | 96 | 106 | +10,4 % |
| EBITDA oficial | 14,4 | 14 | margen 15 % → **13,2 %** |
| EBITDA «ajustado» | | 17 | margen 16 % |
| Flujo de caja libre | | 1 | |

La deuda neta pasa de 30 M€ en diciembre a 38 M€ en junio.

El titular habla de la fila que mejor queda. Tu trabajo es leer las demás.
