---
title: "Lo que dicen los datos (y lo que venden los gurús)"
description: "Qué encontraron los estudios con operadores reales, cómo reconocer señales de pago, copy trading y cursos que prometen rentas, y cómo practicar sin arriesgar."
level: basico
track: trading
order: 507
skills: [evidencia-trading, detectar-fraude]
goals: [miedo, entender]
prereqs: [tr-04-apalancamiento-y-cfd]
hook: "Un perfil con 200.000 seguidores vende un canal de señales: «85 % de aciertos, copia mis operaciones y vive del trading en 90 días». ¿Qué dicen los datos de la gente real que lo intenta?"
takeaway: "Con datos de operadores reales, casi nadie gana de forma estable operando a corto plazo. Si alguien te vende la forma de hacerlo, pregúntate por qué cobra por enseñarlo en lugar de hacerlo."
scenario:
  kind: operacion
  label: "Anuncio de ejemplo"
  title: "Club Señales Pro: 49 € al mes"
  body: "«85 % de operaciones ganadoras.» «Copia automáticamente mis operaciones en tu cuenta.» «Curso gratis para dejar tu trabajo en 90 días.» «Plazas limitadas: solo hoy.» El anuncio muestra capturas de beneficios, pero no dice qué entidad ejecuta las operaciones ni si está autorizada por la CNMV, ni cuánto gana el autor por cada cliente que abre cuenta."
  note: "Ejemplo ficticio con fines educativos."
questions:
  - type: estimate
    id: tr07-q1
    q: "En el estudio de Barber y Odean, los hogares que más operaban obtuvieron un 11,4 % anual y el mercado un 17,9 %. ¿Cuántos puntos al año perdían frente al mercado?"
    answer: 6.5
    tolerance: 0.2
    min: 0
    max: 20
    step: 0.1
    unit: "puntos"
    explain: "17,9 − 11,4 = 6,5 puntos al año. Con 10.000 € durante 6 años, serían unos 19.112 € frente a unos 26.859 €: casi 7.750 € menos por operar demasiado."
  - type: choice
    id: tr07-q2
    q: "Del anuncio del caso, ¿qué es lo más preocupante?"
    options: ["Promete ingresos, mete prisa, no dice qué entidad autorizada ejecuta y no aclara cuánto cobra el autor por captar clientes", "Que cueste 49 € al mes", "Que use capturas de pantalla"]
    answer: 0
    explain: "Son las señales de alarma que destaca la CNMV: promesas de altos rendimientos, urgencia y falta de autorización. ESMA advierte además de que en el copy trading el operador copiado puede cobrar de la plataforma, con un conflicto de interés."
  - type: truefalse
    id: tr07-q3
    q: "Si ganas varios meses en una cuenta demo, has demostrado que ganarás con dinero real."
    answer: false
    explain: "En demo no hay miedo ni deslizamiento real, y unos meses no distinguen suerte de habilidad. Sirve para aprender la mecánica y equivocarte gratis, no como prueba. Por eso la CNMV prohíbe que las entidades de CFD usen cuentas demo como reclamo publicitario."
action:
  title: "Practica sin dinero real (y protégete)"
  steps:
    - "Abre el simulador de apalancamiento y prueba qué pasa con un movimiento del −2 % y apalancamiento 20."
    - "Si quieres practicar trading, hazlo durante tres meses solo en papel o en simulación, anotando cada operación con sus costes."
    - "Ante cualquier canal de señales o curso, busca en el registro de la CNMV si la persona o la entidad está autorizada."
  check: "Sé qué dicen los datos y practico solo en simulación"
deeper: investigar-broker-y-fraudes
tool: apalancamiento
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: España y UE
sources: [barber-odean-2000, chague-daytrade-2019, barber-taiwan-2014, esma-cfd-2018, esma-copy-trading-2023, cnmv-finfluencers-infografia, cnmv-finfluencers-guia, cnmv-cfd-2023, cnmv-entidades]
---

## La idea

Tres estudios con datos de operadores reales, no con encuestas:

| Estudio | Qué analizó | Qué encontró |
|---|---|---|
| **Barber y Odean (2000)** | 66.465 hogares de EE. UU., 1991-1996 | Los que más operaban: **11,4 %** anual; el mercado, **17,9 %** |
| **Chague y otros (2019)** | Todos los que empezaron a operar a diario con futuros en Brasil, 2013-2015 | De quienes insistieron más de 300 días, el **97 % perdió dinero**; menos del 1 % ganó más que el sueldo de un empleado de banca |
| **Barber y otros (2014)** | Operadores intradía de Taiwán, 1992-2006 | **Menos del 1 %** ganaba de forma predecible después de comisiones |

Y en CFD, los supervisores europeos encontraron que perdía dinero **entre el 74 % y el 89 %** de las cuentas minoristas.

Las trampas más comunes:

- **Señales de pago**: si alguien acertara de verdad, ganaría más operando que vendiendo suscripciones.
- **Copy trading**: copias a alguien que puede cobrar de la plataforma por atraer seguidores. Su historial puede ser corto o elegido a dedo.
- **Gurús y cursos que prometen rentas**: la CNMV recuerda que los seguidores y los «me gusta» no indican fiabilidad, y que pueden comprarse.

## Con números

Un canal anuncia **«85 % de aciertos»**. Si gana 50 € cuando acierta y pierde 400 € cuando falla, en 100 operaciones:

`85 × 50 − 15 × 400 = 4.250 − 6.000 = −1.750 €`

Un porcentaje de aciertos alto no dice nada sin saber **cuánto** se gana y se pierde en cada operación, y sin restar costes.
