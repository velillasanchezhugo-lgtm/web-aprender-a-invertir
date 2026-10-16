---
title: Hecho, dato u opinión
description: Cómo leer una noticia económica separando lo que ha pasado, lo que se ha medido y lo que alguien cree que pasará, y por qué importa quién lo dice.
level: basico
track: noticias
order: 401
skills: [hecho-opinion, psicologia-sesgos]
goals: [entender, miedo]
prereqs: [01-invertir-no-es-apostar]
hook: "Lees: «Los expertos advierten de que la bolsa podría caer un 20 %». ¿Ha pasado algo o solo alguien ha dicho algo?"
takeaway: "Antes de reaccionar, pregúntate: ¿esto ha pasado, se ha medido o alguien lo cree? Y ¿quién lo dice y qué gana?"
scenario:
  kind: noticia
  label: Noticia de ejemplo
  title: "Viajes Brisa se hunde un 9 % y los analistas temen lo peor para el turismo"
  body: "Las acciones de Viajes Brisa S.A. cayeron ayer un 9 % en bolsa, hasta 14,20 €. La empresa comunicó que sus reservas del verano bajaron un 3 % respecto al año anterior. «El turismo podría entrar en una crisis profunda», afirma un estratega de Gestora Faro, que recomienda vender la acción. Según varios expertos consultados, se espera que el sector sufra en los próximos meses. Gestora Faro tiene posiciones que ganan si el precio baja."
  note: Noticia ficticia con fines educativos.
questions:
  - type: choice
    id: no01-q1
    q: "En la noticia de Viajes Brisa, ¿cuál de estas frases es un DATO comprobable?"
    options: ["«El turismo podría entrar en una crisis profunda»", "Las reservas del verano bajaron un 3 % respecto al año anterior", "Se espera que el sector sufra en los próximos meses", "Los analistas temen lo peor"]
    answer: 1
    explain: "Es una cifra medida y publicada por la empresa: puedes ir a su comunicación oficial y comprobarla. «Podría», «se espera» y «temen» anuncian opiniones o previsiones, no hechos."
  - type: truefalse
    id: no01-q2
    q: "Como la previsión del estratega es de un profesional, tiene el mismo valor que el dato de reservas."
    answer: false
    explain: "Un dato describe el pasado; una previsión es una opinión sobre el futuro, aunque la haga un experto. Además, en la noticia su gestora gana si el precio baja: conflicto de interés. Las previsiones de mercado aciertan poco de forma sistemática."
  - type: estimate
    id: no01-q3
    q: "Cuenta en la noticia las frases de opinión o previsión (no hechos ni datos). Hay cinco frases. ¿Cuántas lo son?"
    answer: 2
    tolerance: 0
    min: 0
    max: 5
    step: 1
    unit: "frases"
    explain: "Son dos: la cita del estratega («podría entrar en una crisis») y «se espera que el sector sufra». La caída del 9 %, las reservas −3 % y las posiciones de la gestora son hechos o datos. Ojo: el titular («temen lo peor») también es opinión, aunque no esté en el texto."
action:
  title: Subraya una noticia de hoy
  steps:
    - "Abre una noticia económica de hoy en cualquier medio."
    - "Marca cada frase como H (hecho), D (dato con cifra y fuente) u O (opinión o previsión). Busca «podría», «se espera», «según expertos», «teme»."
    - "Anota quién habla en las opiniones y si gana algo (vende un producto, tiene posiciones, busca clics)."
  check: Sé separar en una noticia los hechos y datos de las opiniones
deeper: psicologia-y-sesgos
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: General
sources: [cnmv-cip-oir, kahneman-tversky-1979]
---

## La idea

Una noticia económica mezcla tres cosas. Sepáralas antes de sacar conclusiones:

- **Hecho**: algo que ya ha pasado. «La acción cayó un 9 %».
- **Dato**: una cifra medida, con fuente. «Las reservas bajaron un 3 %, según la empresa».
- **Opinión o previsión**: lo que alguien cree. «Podría», «se espera», «los expertos temen», «apunta a».

Y dos preguntas sobre quien opina:

1. **¿Quién habla?** Un organismo oficial, la propia empresa, un analista, un tertuliano.
2. **¿Qué gana?** Vender un producto, defender una posición, conseguir clics. No invalida lo que dice, pero lo pesa.

La fuente más fiable de una noticia de empresa es su comunicación oficial a la **CNMV** (información privilegiada u otra información relevante). Los titulares suelen ir más lejos que el dato.

## Con números

La misma noticia, ordenada:

| Frase | Tipo |
|---|---|
| La acción cayó un 9 %, hasta 14,20 € | Hecho |
| Reservas del verano: −3 % | Dato (fuente: la empresa) |
| «Podría entrar en una crisis profunda» | Opinión |
| «Se espera que el sector sufra» | Previsión sin autor |

Un −3 % en reservas es un dato modesto. El titular lo convierte en «temen lo peor».

## Error frecuente

Leer solo el titular. El titular resume la opinión más llamativa, no el dato.
