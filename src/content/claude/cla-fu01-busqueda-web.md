---
title: Búsqueda web y citas
description: Cuándo busca Claude en internet, cómo pedírselo o activarlo y cómo revisar las fuentes que cita antes de fiarte de una respuesta.
level: basico
track: cla-funciones
order: 201
skills: [cla-busqueda, cla-verificar]
terms: [busqueda-web, fecha-de-corte, alucinacion]
hook: "Preguntas a Claude el horario de la oficina del SEPE de tu barrio y te da uno muy seguro. ¿Cómo sabes si lo ha mirado hoy o se lo está imaginando?"
takeaway: Para datos que cambian (horarios, normas, precios, noticias), pide a Claude que busque en la web y abre al menos una de las fuentes que cita antes de usar el dato.
scenario:
  kind: producto
  label: Caso práctico
  title: El plazo de la beca de Nerea
  body: "Nerea pregunta a Claude hasta cuándo puede pedir una beca universitaria. La primera respuesta da una fecha del curso anterior. Vuelve a preguntar con «busca en la web la convocatoria de este curso» y Claude le contesta con un enlace a la página oficial. Nerea abre el enlace y comprueba que el plazo coincide."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-fu01-q1
    q: "Marcos quiere saber si este año ha cambiado el plazo para presentar la declaración de la renta. ¿Qué hace?"
    options: ["Pregunta sin más: Claude lo sabe todo", "Pide a Claude que busque en la web y abre la fuente oficial que cite", "Pregunta dos veces y se queda con la respuesta que más se repita"]
    answer: 1
    explain: "Un plazo de este año es un dato que cambia: hace falta buscar y comprobar en la fuente (aquí, la Agencia Tributaria). Repetir la pregunta tienta, pero dos respuestas iguales pueden estar igual de desfasadas."
  - type: truefalse
    id: cla-fu01-q2
    q: "Si una respuesta de Claude lleva citas con enlaces, ya puedes dar el dato por bueno sin abrirlos."
    answer: false
    explain: "Las citas sirven para que compruebes. La página puede ser antigua, poco fiable o decir algo distinto de lo que resume Claude. Tienta confiar porque «tiene fuentes», pero hay que abrir al menos una."
  - type: choice
    id: cla-fu01-q3
    q: "¿Para cuál de estas peticiones compensa menos que Claude busque en internet?"
    options: ["Ideas de títulos para una redacción de clase", "El precio actual del abono de transporte de tu ciudad", "Las últimas noticias sobre una huelga de trenes"]
    answer: 0
    explain: "Inventar títulos no depende de datos recientes, así que buscar solo gasta tiempo y uso del plan. Los precios y las noticias sí cambian y necesitan una fuente actual."
tips:
  - "Si conoces la web oficial, nómbrala: «busca en la web del ayuntamiento» o pega el enlace para que la lea."
  - "Si la cita no dice lo que Claude afirma, díselo y pídele que lo corrija o que busque otra fuente."
action:
  title: Haz una búsqueda y revisa una cita
  steps:
    - "Pide a Claude un dato que cambie y te importe hoy (un horario, un plazo, un precio), añadiendo «busca en la web y cita las fuentes»."
    - "Abre el primer enlace que cite y busca la frase o el número en la página."
    - "Anota en «Mi kit de Claude» si la fuente era oficial y si coincidía."
  check: He pedido a Claude una búsqueda y he comprobado una de sus fuentes
practice:
  task: "Vas a pedir una partida de nacimiento en el registro civil y no sabes si han cambiado el horario ni los papeles. Escribe la petición para que Claude lo busque en la web y puedas comprobarlo."
  require: [verificar, limites]
  extra:
    - label: "Pedir que busque en la web"
      any: ["busca", "buscar", "en la web", "internet"]
      hint: "Di «busca en la web» para que no conteste de memoria."
    - label: "Pedir la fecha de cada fuente"
      any: ["fecha", "actualiz", "reciente"]
      hint: "Pide la fecha de cada página: un horario de hace dos años no te sirve."
  sample: "Busca en la web el horario de atención y los documentos que hacen falta para pedir una partida de nacimiento en el Registro Civil de Valencia. Usa solo fuentes oficiales, como la web del Ministerio de Justicia o del ayuntamiento. Cita el enlace de cada dato y dime la fecha de cada página. Si dos fuentes no coinciden o no encuentras algo, dime si hay dudas en lugar de suponerlo."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda]
---

## La idea

Claude aprende de textos hasta una **fecha de corte**: lo que pasó después no lo sabe de memoria. Para eso existe la **búsqueda web**: Claude consulta páginas de internet en el momento y responde con lo que encuentra.

Lo importante:

- **Cuándo la usa.** Busca cuando la pregunta pide información actual: noticias, plazos, horarios, precios, normas recientes. También puede leer una página si le pegas el enlace.
- **Citas.** Cada respuesta que usa la búsqueda lleva **citas**: enlaces a las páginas de donde saca cada dato. Están para que compruebes, no para decorar.
- **Puede fallar igual.** Puede citar una página antigua, un blog poco fiable o resumir mal. La búsqueda reduce las invenciones (las llamadas **alucinaciones**), pero no las elimina.
- **Disponibilidad.** Está en los planes gratis y de pago. En los planes de empresa, la tiene que activar primero quien administra la cuenta.

Según tu versión de la aplicación, verás un interruptor de «Búsqueda web» en el menú de herramientas del chat (el botón «+») o no verás ninguno: en la experiencia nueva, Claude decide solo cuándo buscar. En los dos casos, puedes pedírselo por escrito.

## En la práctica

1. Si tu chat tiene el interruptor, actívalo. Si no, basta con decirlo en la petición.
2. Pide **fuentes oficiales** cuando el tema lo merezca (BOE, Agencia Tributaria, tu ayuntamiento).
3. Abre **al menos una cita** y busca el dato en la página. Mira la fecha.
4. Si no coincide, díselo a Claude.

> Prueba: «Busca en la web cuándo empieza este año el plazo para presentar la declaración de la renta en España. Usa solo fuentes oficiales, dime la fecha de cada página que cites y avísame si encuentras datos que no coinciden».

Para un trámite importante, la última palabra la tiene siempre la web oficial, no el resumen.

## Error frecuente

Ver que la respuesta tiene enlaces y no abrir ninguno. Una cita sin revisar vale lo mismo que una respuesta sin citas.
