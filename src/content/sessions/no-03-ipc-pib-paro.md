---
title: IPC, PIB y paro sin liarte
description: General o subyacente, interanual o mensual, dato adelantado o definitivo, EPA o paro registrado. Qué mide cada cifra y qué cambia para ti.
level: basico
track: noticias
order: 403
skills: [macro-indicadores, inflacion-real]
goals: [entender, jubilacion]
prereqs: [no-01-hecho-dato-opinion]
hook: "Un titular dice que los precios bajaron en septiembre y otro que la inflación subió. ¿Puede ser verdad los dos a la vez?"
takeaway: "Mira siempre qué se compara con qué: el mes anterior o el mismo mes del año pasado. Y recuerda que el dato que te importa es tu rentabilidad menos la inflación."
scenario:
  kind: noticia
  label: Noticia de ejemplo
  title: "La inflación sube al 2,9 % en septiembre aunque los precios bajan un 0,2 % en el mes"
  body: "Según el dato definitivo del INE, el IPC general subió un 2,9 % interanual en septiembre, desde el 2,7 % de agosto. En el mes, los precios bajaron un 0,2 %. La inflación subyacente, sin alimentos no elaborados ni energía, se mantuvo en el 2,4 %. El dato coincide con el indicador adelantado publicado a final de mes. Por otra parte, el PIB creció un 0,6 % en el segundo trimestre y la tasa de paro de la EPA se situó en el 10,5 %."
  note: Noticia ficticia con fines educativos.
questions:
  - type: estimate
    id: no03-q1
    q: "En la noticia, el índice de precios estaba en 112,0 en septiembre del año pasado, en 115,4 en agosto y en 115,2 en septiembre de este año. ¿Cuál es la tasa interanual de septiembre?"
    answer: 2.9
    tolerance: 0.2
    min: 0
    max: 6
    step: 0.1
    unit: "%"
    explain: "Interanual = 115,2 / 112,0 − 1 = 2,86 % ≈ 2,9 %. La mensual compara con agosto: 115,2 / 115,4 − 1 = −0,17 % ≈ −0,2 %. Las dos son ciertas a la vez: hace un año los precios bajaron más en septiembre (efecto base)."
  - type: choice
    id: no03-q2
    q: "¿Qué cifra de la noticia te dice mejor si la inflación de fondo se está calmando?"
    options: ["La tasa mensual (−0,2 %)", "La subyacente (2,4 %), que quita los precios más volátiles", "El PIB (0,6 %)", "La tasa de paro (10,5 %)"]
    answer: 1
    explain: "La subyacente excluye alimentos no elaborados y energía, que saltan mucho de un mes a otro. Por eso el BCE y los analistas la miran para ver la tendencia. Una sola tasa mensual dice poco: tiene mucha estacionalidad (rebajas, verano)."
  - type: truefalse
    id: no03-q3
    q: "Si el paro registrado del SEPE baja, la tasa de paro de la EPA bajará en la misma cantidad."
    answer: false
    explain: "Miden cosas distintas. El paro registrado cuenta demandantes inscritos en las oficinas de empleo (dato mensual, administrativo). La EPA es una encuesta trimestral del INE con criterios internacionales: cuenta a quien busca empleo activamente, esté inscrito o no."
action:
  title: Lee el último IPC en la fuente
  steps:
    - "Entra en la página de últimos datos del IPC del INE."
    - "Anota la tasa anual general, la mensual y la subyacente."
    - "Réstale la inflación anual a lo que te paga tu cuenta o depósito: ese es tu rendimiento real (antes de impuestos)."
  check: Sé leer un dato de IPC y calcular si mi dinero gana o pierde poder de compra
deeper: inflacion-e-interes-compuesto
tool: inflacion
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: España
sources: [ine-ipc-ultimos, ine-ipc-adelantado, ine-cntr, ine-epa, ine-paro-epa-registrado]
---

## La idea

Tres datos copan los titulares. Lo útil es saber **qué compara cada uno**:

- **IPC (INE)**. La **tasa interanual** compara con el mismo mes del año anterior; es la «inflación» de los titulares. La **mensual** compara con el mes anterior. La **subyacente** quita alimentos no elaborados y energía: muestra la tendencia.
- **Dato adelantado**: el INE publica un indicador adelantado del IPC al final del mes y el **definitivo** a mediados del siguiente. A veces cambia una décima.
- **PIB trimestral (INE)**: cuánto crece la economía respecto al trimestre anterior. Un 0,6 % trimestral es un ritmo de algo más del 2,4 % al año.
- **Paro**: la **EPA** (encuesta trimestral del INE) y el **paro registrado** (inscritos en los servicios de empleo, mensual) no coinciden. No son una errata: miden cosas distintas.

¿Qué cambia para ti? Casi siempre, nada en tu cartera. Sí cambia **cuánto necesitas que rinda tu dinero** para no perder poder de compra.

## Con números

Índices de la noticia:

| Mes | Índice | Compara con | Tasa |
|---|---:|---|---:|
| Sept. año pasado | 112,0 | | |
| Agosto | 115,4 | | |
| Septiembre | 115,2 | Agosto | −0,2 % (mensual) |
| Septiembre | 115,2 | Sept. año pasado | +2,9 % (interanual) |

Si tu cuenta paga un 2 % y la inflación es del 2,9 %, tu rendimiento real es de **−0,9 %**: pierdes poder de compra aunque veas intereses.

## Error frecuente

Comparar una tasa mensual con una anual. «Los precios bajan» y «la inflación sube» pueden ser los dos ciertos.
