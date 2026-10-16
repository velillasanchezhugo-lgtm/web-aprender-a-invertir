---
title: "Invertir o hacer trading: no es el mismo juego"
description: "De dónde sale la ganancia en cada caso, cuánto tiempo pide, qué cuesta y por qué el trading a corto plazo es un juego de suma cero antes de costes."
level: basico
track: trading
order: 501
skills: [tipos-trading, objetivo-horizonte]
goals: [entender, miedo]
prereqs: [01-invertir-no-es-apostar]
hook: "En redes ves a alguien que «vive del trading» desde el sofá. Tú llevas dos años con un fondo indexado que apenas miras. ¿Estáis haciendo lo mismo con distinta velocidad?"
takeaway: "Invirtiendo, ganas si las empresas crecen. Haciendo trading, ganas solo si aciertas más que otros que también intentan acertar, y después de pagar costes."
scenario:
  kind: operacion
  label: "Operación de ejemplo"
  title: "Un día cualquiera en un mercado de futuros ficticio"
  body: "En el contrato de futuros ficticio «Índice Ibérico» operan hoy 400 particulares. Al cierre, los que han acertado ganan en total 50.000 €. Los que han fallado pierden en total 50.000 €: en un futuro, lo que gana uno lo pierde su contraparte. Entre todos han pagado 8.000 € en comisiones y diferencial al bróker y al mercado."
  note: "Ejemplo ficticio con fines educativos."
questions:
  - type: estimate
    id: tr01-q1
    q: "En el caso, ¿cuál es el resultado conjunto de los 400 particulares después de costes?"
    answer: -8000
    tolerance: 0
    min: -20000
    max: 20000
    step: 1000
    unit: "€"
    explain: "+50.000 − 50.000 − 8.000 = −8.000 €. Antes de costes, el grupo empata; después de costes, el grupo pierde siempre. Para que uno gane de forma estable, otros tienen que perder más."
  - type: choice
    id: tr01-q2
    q: "Lucía compra cada mes un fondo indexado global para dentro de 20 años. ¿De dónde sale, sobre todo, su rentabilidad esperada?"
    options: ["De que las empresas del fondo generen beneficios y dividendos con los años", "De vender más caro que otros participantes la semana que viene", "De acertar el momento exacto de cada compra"]
    answer: 0
    explain: "A largo plazo, la rentabilidad de las acciones viene del crecimiento de los beneficios de las empresas. Todos los accionistas pueden ganar a la vez. En el trading a corto plazo, la ganancia de uno es, en gran parte, la pérdida de otro."
  - type: truefalse
    id: tr01-q3
    q: "Si haces trading con frecuencia, en España no pagas impuestos hasta que retiras el dinero del bróker."
    answer: false
    explain: "Cada venta con ganancia genera una ganancia patrimonial que va a la base del ahorro del IRPF de ese año (del 19 % al 30 % en 2025), aunque el dinero siga en la cuenta. Y si vendes con pérdidas y recompras lo mismo en dos meses, esa pérdida aún no se puede restar."
action:
  title: "¿Qué estás haciendo tú?"
  steps:
    - "Piensa en tu última compra o en la que tienes en mente. Escribe cuánto tiempo pensabas mantenerla."
    - "Escribe de dónde esperabas ganar: ¿de que el negocio crezca o de que el precio se mueva pronto?"
    - "Si la respuesta es «que el precio se mueva pronto», llámalo por su nombre: es trading, y lo veremos con números en las próximas sesiones."
  check: "Sé distinguir si una operación mía es inversión o trading"
deeper: ahorrar-invertir-especular
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: España
sources: [aeat-ahorro-2025, aeat-dos-meses-2025, barber-odean-2000]
---

## La idea

Invertir y hacer trading usan los mismos botones de «comprar» y «vender», pero son juegos distintos:

| | Invertir a largo plazo | Trading |
|---|---|---|
| Horizonte | Años o décadas | Minutos, días o semanas |
| De dónde sale la ganancia | **Crecimiento de las empresas** (beneficios, dividendos) | **Movimiento del precio**, frente a otros que también operan |
| Tiempo que exige | Poco: aportar y revisar | Mucho: pantallas, análisis, disciplina |
| Costes | Pocos y espaciados | Comisiones y diferencial **en cada operación** |
| Impuestos | Pagas al vender, años después | Cada venta con ganancia tributa ese año |

En el corto plazo, el precio apenas refleja el crecimiento del negocio. Lo que gana un operador lo pierde otro: es un **juego de suma cero antes de costes**, y de **suma negativa después de costes**. Para ganar de forma estable no basta con acertar: tienes que acertar **más que el resto**, incluidos profesionales con mejores datos y máquinas más rápidas.

## Con números

Dos personas con **10.000 €** durante un año, con una cartera que sube un 7 % en ese año (supuesto):

- **Lucía** compra una vez un fondo indexado con un coste anual del 0,2 %: unos **20 €** de gastos.
- **Pablo** hace 200 operaciones de 10.000 € con un coste de 5 € cada una (comisión y diferencial): **1.000 €** de gastos, un **10 %** de su dinero, antes de ganar o perder nada.

Pablo necesita superar a Lucía en más de 9 puntos solo para empatar. Barber y Odean (2000), con datos de más de 66.000 hogares, encontraron que los que más operaban obtenían un **11,4 %** anual frente al **17,9 %** del mercado.

## Error frecuente

Creer que el trading es «invertir más rápido». No es más rápido: es otro juego, con otras reglas y un rival distinto.
