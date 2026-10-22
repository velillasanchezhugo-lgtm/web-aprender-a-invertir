---
title: Sesgos y límites
description: Por qué Claude puede repetir estereotipos o darte la razón, qué no sabe de tu situación y cómo pedirle otros puntos de vista para decidir mejor.
level: basico
track: cla-seguro
order: 603
skills: [cla-limites, cla-pensar]
terms: [sesgo, inyeccion-de-instrucciones]
hook: "Le has contado a Claude tu idea de dejar el trabajo para abrir una cafetería y le parece estupenda. ¿Es buena señal o te está dando la razón?"
takeaway: Claude puede inclinarse hacia lo que ya piensas o hacia estereotipos, y no conoce tu vida. Pídele siempre la otra cara y aporta tú el contexto que le falta.
scenario:
  kind: producto
  label: Caso práctico
  title: La cafetería de Samuel
  body: "Samuel explica a Claude su plan con mucho entusiasmo y recibe ánimos y una lista de pasos. Luego abre un chat nuevo y le pide: «Haz de inversor escéptico y dime las tres razones por las que este plan podría fracasar». Aparecen el alquiler del local, la competencia de la zona y que no ha contado sus gastos de los primeros meses."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-se03-q1
    q: "Paula pregunta: «¿Verdad que mi currículum está genial?» y Claude responde que sí con pocas pegas. ¿Qué le conviene hacer?"
    options: ["Enviarlo: si Claude lo dice, está bien", "Pedirle que haga de seleccionador exigente y le dé los cinco puntos débiles", "Preguntar lo mismo otra vez hasta que diga algo distinto"]
    answer: 1
    explain: "La pregunta ya empujaba hacia el «sí». Cambiar el papel y pedir puntos débiles obliga a buscar la otra cara. Repetir la misma pregunta tienta, pero solo cambia la redacción, no el enfoque."
  - type: truefalse
    id: cla-se03-q2
    q: "Una página web que Claude lee puede llevar instrucciones escondidas para que haga algo que tú no le pediste."
    answer: true
    explain: "Es la inyección de instrucciones. Por eso conviene revisar lo que hace Claude cuando lee webs, correos o documentos de otros, sobre todo si puede actuar en tus herramientas."
  - type: choice
    id: cla-se03-q3
    q: "Pides a Claude un ejemplo de «un ingeniero y una enfermera» y en todos sale él ingeniero y ella enfermera. ¿Qué es esto?"
    options: ["Un sesgo: repite un estereotipo de los textos con los que aprendió", "Un error de ortografía", "Una regla de Anthropic"]
    answer: 0
    explain: "Los modelos aprenden de textos escritos por personas y pueden repetir sus estereotipos. No es una norma: si te importa, pídele ejemplos variados."
tips:
  - "Pregunta de forma neutra: «¿Qué ventajas e inconvenientes tiene…?» en lugar de «¿Verdad que…?»."
  - "Para decisiones importantes, abre un chat nuevo y pide la crítica ahí, sin tu entusiasmo previo."
  - "Si Claude lee una web o un documento ajeno y de pronto propone algo raro, para y revisa."
action:
  title: Pide la otra cara de una decisión
  steps:
    - "Piensa en una decisión que tengas pendiente (una compra, un cambio, un plan)."
    - "Pide a Claude los argumentos en contra y las preguntas que deberías hacerte."
    - "Apunta la mejor objeción y guarda la petición en «Mi kit de Claude»."
  check: He pedido a Claude los argumentos en contra de una decisión mía
practice:
  task: "El lunes presentas en tu empresa una propuesta de teletrabajo que a ti te encanta. Escribe la petición para que Claude te dé varias perspectivas y no solo te dé la razón."
  require: [contexto, formato]
  extra:
    - label: Pedir varias miradas
      any: [como lo verian, como lo veria, perspectiva, puntos de vista, punto de vista, haz de]
      hint: "Pide cómo lo verían otras personas: «Dime cómo lo vería la directora, un cliente…»."
    - label: Pedir que no te dé la razón
      any: [no me des la razon, en contra, objeciones, critica]
      hint: "Dilo claro: «No me des la razón: dame los argumentos en contra»."
  sample: "Trabajo en una consultora de 20 personas y el lunes presento a la dirección la propuesta de teletrabajar dos días por semana. A mí me encanta la idea, así que no me des la razón. Dime cómo lo verían cuatro personas distintas: la directora, un compañero recién llegado, una compañera con hijos pequeños y un cliente. Ponlo en una tabla con sus dos mejores argumentos a favor y en contra. Al final, dime qué información mía te falta para opinar mejor."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda, anthropic-constitucion]
---

## La idea

Claude aprendió de enormes cantidades de texto escrito por personas. Eso le da mucho conocimiento, pero también **sesgos**: tendencias a inclinarse hacia un lado sin darse cuenta.

Los dos que más vas a notar:

- **Darte la razón.** Si preguntas «¿verdad que es buena idea?», es más fácil que diga que sí. Anthropic intenta que Claude sea sincero aunque no guste, pero la forma de preguntar influye.
- **Estereotipos.** Puede repetir ideas hechas sobre profesiones, países, edades o sexos.

Y sus **límites**:

- **No conoce tu contexto**: tu sueldo, tu salud, tu barrio, tu jefe. Solo sabe lo que le cuentas.
- **No tiene un sentido común perfecto**: puede proponer algo lógico sobre el papel pero absurdo en la vida real.
- **Lo que lee puede engañarle.** Una web, un correo o un PDF pueden llevar órdenes escondidas para desviarlo (se llama **inyección de instrucciones**). Importa sobre todo cuando lee contenido ajeno o actúa en tus herramientas.

La solución no es dejar de usarlo, sino **pedirle otras perspectivas** y poner tú el criterio.

## En la práctica

Tres formas sencillas de equilibrar una respuesta:

1. **Pregunta neutra**: ventajas e inconvenientes, en lugar de «¿verdad que…?».
2. **Cambia el papel**: «haz de cliente exigente», «haz de abogado del diablo», «haz de inversor escéptico».
3. **Pide varias miradas**: cómo lo vería alguien joven y alguien mayor, alguien de ciudad y alguien de pueblo.

> Prueba: «Estoy pensando en [tu decisión]. No me des la razón. Dame los tres mejores argumentos en contra, las preguntas que debería hacerme y qué información mía te falta para opinar mejor.»

Cuando la decisión sea tuya, cuéntale lo que no sabe: tu presupuesto, tus plazos, tus prioridades. Y recuerda que la última palabra es tuya.

## Error frecuente

Tomar el entusiasmo de Claude como una validación. Que le parezca bien tu idea no significa que lo sea: pide siempre la crítica.
