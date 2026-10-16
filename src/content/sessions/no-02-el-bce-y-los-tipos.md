---
title: El BCE sube (o baja) los tipos
description: Qué es el tipo de la facilidad de depósito, por qué lo mueve el BCE y cómo llega a tu hipoteca, tu cuenta, tus bonos y la bolsa.
level: basico
track: noticias
order: 402
skills: [tipos-interes-bce, renta-fija]
goals: [entender, jubilacion]
prereqs: [no-01-hecho-dato-opinion]
hook: "«El BCE sube los tipos un cuarto de punto». ¿Te va a subir la hipoteca mañana? ¿Y tu fondo de bonos?"
takeaway: "El BCE mueve el precio del dinero para llevar la inflación al 2 %. Te llega por la hipoteca, la cuenta, los bonos y la bolsa, pero con retraso y casi nunca de golpe."
scenario:
  kind: noticia
  label: Noticia de ejemplo
  title: "El BCE sube los tipos un cuarto de punto y deja la facilidad de depósito en el 2,75 %"
  body: "El Consejo de Gobierno del Banco Central Europeo elevó ayer sus tipos de interés en 0,25 puntos: la facilidad de depósito pasa del 2,50 % al 2,75 %. La inflación de la zona euro está en el 3,2 %, por encima del objetivo del 2 % a medio plazo. El Euríbor a 12 meses, que ya había subido en las semanas previas, cerró en el 2,70 %. La bolsa europea cayó un 0,8 % y los bonos a 10 años bajaron de precio. Un analista de banca de inversión cree que habrá otra subida en diciembre."
  note: Noticia ficticia con fines educativos.
questions:
  - type: estimate
    id: no02-q1
    q: "Ana debe 150.000 € de hipoteca a 20 años, a Euríbor + 0,80. En su próxima revisión el Euríbor pasa del 2,20 % al 2,70 % de la noticia. ¿Cuánto sube su cuota mensual, aproximadamente?"
    answer: 38
    tolerance: 4
    min: 0
    max: 150
    step: 1
    unit: "€/mes"
    explain: "Al 3,00 % la cuota es de 831,90 €; al 3,50 %, de 869,94 €: unos 38 € más al mes (unos 456 € al año). Y solo cuando le toque revisar (cada 6 o 12 meses), no al día siguiente de la noticia."
  - type: choice
    id: no02-q2
    q: "Tienes un bono a 10 años con cupón del 2,5 %, comprado a la par. Tras la noticia, los bonos nuevos de ese plazo pagan un 3 %. ¿Qué le pasa al precio del tuyo?"
    options: ["Sube, porque los tipos son más altos", "Baja, alrededor de un 4 %, porque ahora paga menos que los nuevos", "No cambia: el cupón es fijo", "Pierdes el 0,5 % del cupón"]
    answer: 1
    explain: "Su precio teórico pasa de 100 % a 95,7 % (−4,3 %). Si lo mantienes hasta el vencimiento y el emisor paga, cobras lo pactado; el riesgo está en venderlo antes. Un bono a 2 años apenas caería un 1 %."
  - type: truefalse
    id: no02-q3
    q: "Si el BCE sube los tipos, tu depósito a 12 meses ya contratado al 2 % empieza a pagar más."
    answer: false
    explain: "Un depósito a plazo fija su tipo al contratarlo. La subida mejora los depósitos y cuentas NUEVOS (si el banco la traslada, que no es automático). Por eso la noticia no te obliga a hacer nada con lo ya contratado."
action:
  title: Localiza tus tipos
  steps:
    - "Si tienes hipoteca variable: busca en tu contrato el diferencial (Euríbor + X) y la fecha de la próxima revisión."
    - "Mira cuánto te paga hoy tu cuenta o tu depósito y hasta cuándo está fijado."
    - "Si tienes un fondo de renta fija, busca en su ficha la duración: te dice cuánto cae aproximadamente por cada punto que suban los tipos."
  check: Sé por dónde me afecta una subida o bajada de tipos del BCE
deeper: renta-fija-duracion-credito
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: España y UE
sources: [bce-tipos-oficiales, bce-estrategia, bce-decisiones, bde-tipos-referencia]
---

## La idea

El **BCE** fija el precio del dinero en la zona euro. Su tipo principal es el de la **facilidad de depósito**: lo que cobran los bancos por dejarle dinero de un día para otro. Con efectos del 16 de septiembre de 2026 está en el **2,50 %**, según el propio BCE.

¿Por qué lo mueve? Su objetivo es una **inflación del 2 % a medio plazo**:

- Inflación alta → **sube** tipos: el crédito se encarece, se gasta menos, los precios se moderan.
- Inflación baja o economía débil → **baja** tipos.

Cómo te llega:

| Dónde | Si suben los tipos |
|---|---|
| Euríbor e hipoteca variable | Sube la cuota, en la próxima revisión |
| Cuentas y depósitos nuevos | Pueden pagar más (si el banco lo traslada) |
| Bonos que ya tienes | Bajan de precio; más cuanto más largos |
| Bolsa | Suele valorar peor: los beneficios futuros «valen» menos hoy |

El **Euríbor** no es el tipo del BCE: lo anticipa. Por eso a menudo ya se ha movido antes de la reunión.

## Con números

La hipoteca de Ana (150.000 €, 20 años, Euríbor + 0,80):

| Euríbor | Tipo total | Cuota mensual |
|---:|---:|---:|
| 2,20 % | 3,00 % | 831,90 € |
| 2,70 % | 3,50 % | 869,94 € |

Unos **38 € más al mes**. Relevante para su presupuesto; ninguna razón para vender su fondo indexado.

## Error frecuente

Creer que una subida de tipos «hunde» tu cartera. En la noticia, la bolsa cayó un 0,8 % ese día: ruido, salvo que necesites el dinero ya.
