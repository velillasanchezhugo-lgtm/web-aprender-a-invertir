---
title: Cómo gana dinero una empresa
description: "Las cuatro preguntas que explican cualquier negocio: quién paga, qué compra, cuánto cuesta dárselo y si vuelve a pagar."
level: basico
track: empresas
order: 301
skills: [modelo-negocio, acciones]
goals: [entender]
prereqs: [09-los-cuatro-productos]
hook: "Tomas café casi cada mañana en la misma cadena. Si comprases una acción suya, ¿sabrías explicar en dos frases de dónde sale su dinero?"
takeaway: Si no puedes contar en dos frases quién paga, por qué y si volverá, todavía no entiendes el negocio.
scenario:
  kind: empresa
  label: Empresa de ejemplo
  title: Café Brío S.A., cadena de cafeterías
  body: "400 cafeterías en España. Ventas de 2025: 200 millones de euros. Unos 50 millones de tickets al año, con un ticket medio de 4 €. El café, la leche, la comida y los envases le cuestan 64 millones; el personal, 70; los alquileres y otros gastos, 36. El 60 % de las compras se hacen con su app de fidelización, y la mayoría de esos clientes repite varias veces por semana."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: em01-q1
    q: "En Café Brío, ¿qué dato responde mejor a la pregunta «¿se repite?»?"
    options: ["Que tiene 400 cafeterías", "Que el 60 % de las compras se hacen con la app y esos clientes vuelven varias veces por semana", "Que las ventas son 200 millones", "Que el café le cuesta poco"]
    answer: 1
    explain: "Las tiendas y las ventas dicen el tamaño, no la repetición. La recurrencia se ve en clientes que vuelven sin que haya que convencerlos otra vez: eso hace los ingresos más previsibles."
  - type: estimate
    id: em01-q2
    q: "Con 400 cafeterías, 50 millones de tickets al año y un ticket medio de 4 €, ¿cuánto vende de media cada cafetería al año (en miles de euros)?"
    answer: 500
    tolerance: 25
    min: 0
    max: 2000
    step: 25
    unit: "mil €"
    explain: "50 millones × 4 € = 200 millones; entre 400 tiendas = 500.000 € por tienda, unos 1.370 € al día. Bajar al nivel de una tienda te ayuda a ver si las cifras tienen sentido."
  - type: truefalse
    id: em01-q3
    q: "Si conoces bien los productos de una empresa porque eres cliente, ya sabes lo suficiente para invertir en ella."
    answer: false
    explain: "Ser cliente es un buen punto de partida (lo defendía Peter Lynch), pero falta saber cuánto le cuesta servirte, si gana dinero con ello, cuánto debe y qué precio pagas por la acción."
action:
  title: Explica un negocio en dos frases
  steps:
    - "Elige una empresa cotizada cuyo producto uses (una cadena, una app, una eléctrica)."
    - "Responde por escrito: ¿quién paga?, ¿qué compra?, ¿cuánto le cuesta a la empresa dárselo?, ¿vuelve a pagar?"
    - "Resume tus respuestas en dos frases. Si alguna pregunta no la sabes, apúntala: es lo primero que buscarás en sus cuentas."
  check: Sé explicar en dos frases cómo gana dinero una empresa que conozco
deeper: analisis-fundamental-valoracion
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: General
sources: [lynch-one-up, graham-intelligent, cnmv-guia-bolsa]
---

## La idea

Una [acción](/es/glosario/#accion) es un trozo de un negocio. Antes de mirar el precio, entiende el negocio con **cuatro preguntas**:

1. **¿Quién paga?** El cliente final, otra empresa, el Estado…
2. **¿Qué compra?** El producto o servicio, y por qué lo elige a él y no a otro.
3. **¿Cuánto le cuesta a la empresa dárselo?** Materias primas, personal, locales, tecnología.
4. **¿Se repite?** ¿El cliente vuelve solo (café diario, suscripción) o hay que venderle de nuevo cada vez (una cocina, un coche)?

Los ingresos que **se repiten** son más previsibles. No es bueno ni malo por sí solo, pero cambia mucho el riesgo.

## Con números

Café Brío, en un año:

| Pregunta | Respuesta |
|---|---|
| ¿Quién paga? | Personas que compran café y desayuno |
| ¿Qué compra? | Café rápido cerca de casa o del trabajo, a 4 € de media |
| ¿Cuánto le cuesta? | 64 M€ de producto + 70 M€ de personal + 36 M€ de alquileres y otros = 170 M€ |
| ¿Se repite? | Sí: el 60 % de las compras viene de clientes de la app que vuelven cada semana |

De los 200 M€ que vende, le quedan **30 M€** antes de amortizaciones, intereses e impuestos. Lo verás paso a paso en la siguiente sesión.

## Error frecuente

Confundir «me gusta el producto» con «es un buen negocio». Un producto excelente puede venderse con pérdidas.
