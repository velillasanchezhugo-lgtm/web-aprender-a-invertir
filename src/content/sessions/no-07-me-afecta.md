---
title: ¿Esta noticia me afecta?
description: El filtro de tres preguntas para decidir en un minuto si una noticia cambia tu plan de inversión. Spoiler, casi nunca.
level: basico
track: noticias
order: 407
skills: [filtro-noticias, plan-inversion]
goals: [miedo, jubilacion, entender]
prereqs: [no-06-titulares-de-panico-y-euforia]
hook: "Cada mañana te llegan diez titulares que parecen urgentes. ¿Cuántos deberían cambiar lo que haces con tu dinero?"
takeaway: "Tres preguntas: ¿cambia mi objetivo o mi horizonte?, ¿cambia el motivo por el que tengo este producto?, ¿es nuevo y fiable? Si las tres dicen que no, es ruido."
scenario:
  kind: noticia
  label: Titulares de una mañana
  title: "Cinco titulares para Lucía, que invierte 200 € al mes para su jubilación"
  body: "Lucía tiene 35 años, un colchón de seis meses de gastos y aporta 200 € al mes a un fondo indexado global de bajo coste pensando en dentro de 30 años. Hoy lee: (A) «El BCE baja los tipos un cuarto de punto». (B) «Una gestora prevé que la bolsa caiga un 30 % el año que viene». (C) «Su fondo indexado anuncia que sus gastos corrientes pasarán del 0,2 % al 0,9 %». (D) «La empresa en la que trabaja Lucía anuncia un ERE en su departamento». (E) «El Nasdaq marca un récord por la euforia de la inteligencia artificial»."
  note: Noticias ficticias con fines educativos.
questions:
  - type: estimate
    id: no07-q1
    q: "Aplica el filtro de tres preguntas a los cinco titulares. ¿Cuántos deberían llevar a Lucía a revisar algo de su plan?"
    answer: 2
    tolerance: 0
    min: 0
    max: 5
    step: 1
    unit: "titulares"
    explain: "Dos: C (cambia el motivo por el que tiene el fondo, que era su bajo coste) y D (puede cambiar su situación: le toca revisar el colchón y quizá pausar aportaciones, no vender a la carrera). A, B y E son ruido para un plan a 30 años."
  - type: choice
    id: no07-q2
    q: "¿Qué hace razonablemente Lucía con el titular C?"
    options: ["Nada: es una noticia más", "Comprueba el cambio en la comunicación oficial del fondo y compara alternativas parecidas más baratas; si cambia, en fondos puede hacerlo con un traspaso", "Vende todo hoy y espera a que baje la bolsa", "Duplica su aportación para compensar"]
    answer: 1
    explain: "Pasa el filtro porque cambia el motivo de tener ese producto. Pero primero verifica en la fuente (no en el titular) y compara. En España, el traspaso entre fondos no tributa en ese momento; entre ETF sí."
  - type: truefalse
    id: no07-q3
    q: "El titular B (la gestora que prevé un −30 %) es nuevo y fiable, así que Lucía debería reducir su exposición a bolsa."
    answer: false
    explain: "Es una previsión, no un hecho, y hay previsiones de caída casi cada semana. No cambia su objetivo ni su horizonte, ni el motivo de tener un fondo global. Su plan ya contaba con caídas: por eso tiene colchón y 30 años por delante."
action:
  title: Filtra tres noticias de hoy
  steps:
    - "Elige tres noticias económicas reales de hoy."
    - "Para cada una, responde sí o no a: ¿cambia mi objetivo o mi horizonte?, ¿cambia el motivo por el que tengo este producto?, ¿es nuevo y fiable (fuente oficial, hecho y no previsión)?"
    - "Solo si alguna tiene un sí claro, apunta qué revisarías de tu plan y en qué fecha. Las demás, archívalas."
  check: He aplicado el filtro de tres preguntas a tres noticias de hoy
deeper: objetivos-horizonte-liquidez
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: España
sources: [cnmv-cip-oir, aeat-traspasos-2025, barber-odean-2000]
---

## La idea

Tu plan ya cuenta con que habrá caídas, subidas de tipos y titulares alarmantes. Una noticia solo debería cambiarlo si pasa este **filtro de tres preguntas**:

1. **¿Cambia mi objetivo o mi horizonte?** Un despido, una herencia, comprar casa antes de lo previsto. Esto es tu vida, no el mercado.
2. **¿Cambia el motivo por el que tengo este producto?** Si lo elegiste por barato y diversificado, ¿sigue siéndolo?
3. **¿Es nuevo y fiable?** Un hecho comunicado por la fuente oficial, no una previsión ni un rumor.

Si las tres respuestas son **no**, es ruido. Y la mayoría de días todo es ruido.

Tocar la cartera por las noticias tiene coste: en el estudio de Barber y Odean, los inversores que más compraban y vendían obtuvieron menos rentabilidad que los que operaban poco.

## Con números

Los titulares de Lucía, filtrados:

| Titular | ¿Objetivo u horizonte? | ¿Motivo del producto? | ¿Nuevo y fiable? | Decisión |
|---|:---:|:---:|:---:|---|
| A. El BCE baja tipos | No | No | Sí | Ruido para su fondo |
| B. Previsión de −30 % | No | No | No | Ruido |
| C. Gastos del fondo al 0,9 % | No | **Sí** | Sí (verificar) | Revisar y comparar |
| D. ERE en su empresa | **Sí** | No | Sí | Revisar colchón y aportación |
| E. Récord del Nasdaq | No | No | Sí | Ruido |

Dos de cinco piden revisar algo, y ninguna pide vender por miedo. Pasar del 0,2 % al 0,9 % sobre 20.000 € son **140 € más al año**.

## Error frecuente

Confundir «importante para la economía» con «importante para mi plan». Una bajada de tipos es una gran noticia, pero no cambia por qué tienes un fondo global a 30 años.
