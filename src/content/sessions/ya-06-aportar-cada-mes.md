---
title: Aportar cada mes, en automático
description: "Por qué una aportación mensual fija funciona, cómo compra más participaciones cuando el precio baja y qué dice la evidencia frente a invertir todo de golpe."
level: basico
track: invertir-ya
order: 106
skills: [aportaciones-periodicas, psicologia-sesgos, interes-compuesto]
goals: [jubilacion, objetivo, miedo]
prereqs: [ya-05-tu-primera-compra]
hook: "Ya hiciste tu primera compra. ¿Y el mes que viene? Si depende de que te acuerdes o de que «sea buen momento», probablemente no ocurra."
takeaway: Misma cantidad, mismo día, en automático. Cuando el precio baja, tu aportación compra más.
scenario:
  kind: operacion
  label: Caso de ejemplo
  title: "Javier lo deja en piloto automático"
  body: "Javier cobra la nómina el día 28. Ha programado en su banco una transferencia periódica de 150 € el día 1 a su cuenta de inversión, y allí un plan de aportación mensual a su fondo indexado global el día 3. No tiene que decidir nada cada mes. Solo revisa su plan una vez al año."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: estimate
    id: ya06-q1
    q: "Aportas 120 € al mes. El precio de la participación es 12 €, luego 10 € y luego 8 €. ¿Cuántas participaciones tienes al cabo de los tres meses?"
    answer: 37
    tolerance: 0
    min: 0
    max: 60
    step: 1
    unit: "participaciones"
    explain: "120 / 12 = 10; 120 / 10 = 12; 120 / 8 = 15. Total: 37. Tu coste medio es 360 / 37 ≈ 9,73 €, por debajo del precio medio de esos meses (10 €): el mes barato compraste más."
  - type: choice
    id: ya06-q2
    q: "Recibes 12.000 € de golpe. Según el estudio de Vanguard de 2012 con datos históricos, ¿qué ocurrió con más frecuencia?"
    options: ["Repartir la entrada en 12 meses fue mejor casi siempre", "Invertir de golpe superó a repartir unas dos de cada tres veces, aunque repartir reduce el arrepentimiento si llega una caída", "Siempre dio exactamente lo mismo"]
    answer: 1
    explain: "Como la bolsa ha subido más veces de las que ha bajado, el dinero que entra antes suele crecer más. Pero si invertirlo todo y ver caer un 25 % te haría abandonar, repartir con un calendario fijo es el plan que sí cumplirás."
  - type: truefalse
    id: ya06-q3
    q: "Aportar cada mes elimina el riesgo de las caídas."
    answer: false
    explain: "Solo reparte el momento de compra. Lo que ya tienes invertido sube y baja con el mercado. Lo que sí consigue es que sigas invirtiendo sin pensar en el momento."
action:
  title: Automatiza tu aportación
  steps:
    - "Mira el día en que cobras y elige uno o dos días después para aportar."
    - "Programa en tu banco una transferencia periódica por el importe de tu plan."
    - "Si tu entidad lo permite, activa un plan de aportación periódica al fondo o ETF de tu cartera."
  check: Mi aportación mensual ocurre sola, sin que tenga que decidirla
deeper: aportaciones-periodicas-vs-inicial
tool: interes-compuesto
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: General
sources: [vanguard-lumpsum-2012]
---

## La idea

Si inviertes de tu sueldo, aportar cada mes no es una estrategia rebuscada: es **lo natural**. Y funciona por tres motivos:

- **Lo automatizas** una vez y no dependes de tu fuerza de voluntad.
- **No intentas acertar el momento**, que casi nadie consigue de forma repetida.
- **Con la misma cantidad compras más participaciones cuando el precio baja** y menos cuando sube.

La duda solo aparece si ya tienes una suma grande. Ahí, invertir de golpe ha ganado más a menudo; repartirla en pocos meses con un calendario fijo es una opción razonable si te ayuda a no abandonar.

## Con números

100 € al mes durante cinco meses con precios que suben y bajan:

| Mes | Precio | Participaciones |
|---:|---:|---:|
| 1 | 10 € | 10 |
| 2 | 8 € | 12,5 |
| 3 | 5 € | 20 |
| 4 | 8 € | 12,5 |
| 5 | 10 € | 10 |
| **Total** | | **65** |

Has puesto 500 € y el precio ha vuelto al de partida. Pero tus 65 participaciones valen **650 €**: el mes de 5 € compraste el doble.

Y el tiempo hace el resto: 150 € al mes durante 30 años son **54.000 €** aportados. Con un 5 % anual **supuesto**, serían unos **122.800 €**. No es una previsión: es lo que hace el interés compuesto si la rentabilidad acompaña.
