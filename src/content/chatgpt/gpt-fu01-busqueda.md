---
title: Búsqueda en la web con fuentes
description: Cuándo busca ChatGPT en internet, cómo pedírselo y cómo revisar las fuentes que cita antes de usar un dato que cambia.
level: basico
track: gpt-funciones
order: 201
skills: [gpt-busqueda, gpt-verificar]
terms: [busqueda-en-chatgpt, fecha-de-corte, alucinacion]
hook: "Preguntas a ChatGPT qué día abre el plazo de matrícula de la escuela de idiomas y te da una fecha con total seguridad. ¿La ha mirado hoy o es la del año pasado?"
takeaway: Para datos que cambian (plazos, horarios, normas, noticias), pide que busque en la web y abre al menos una fuente antes de usar el dato.
scenario:
  kind: producto
  label: Caso práctico
  title: El abono de transporte de Hugo
  body: "Hugo pregunta a ChatGPT si el abono joven de su ciudad sigue con descuento este año. La respuesta no lleva enlaces y suena antigua. Repite la pregunta con «busca en la web, solo en fuentes oficiales». Ahora le salen dos enlaces: uno al consorcio de transportes y otro a un blog de hace dos años. Abre el oficial y comprueba el dato allí."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-fu01-q1
    q: "Nerea quiere saber si este año ha cambiado el plazo para pedir la beca del Ministerio. ¿Qué hace primero?"
    options: ["Pregunta sin más: ChatGPT lo sabe todo", "Pide que busque en la web y abre la fuente oficial que cite", "Pregunta tres veces y se queda con la respuesta que más se repita"]
    answer: 1
    explain: "Un plazo de este año cambia y hace falta una fuente actual y oficial. Repetir la pregunta tienta, pero tres respuestas iguales pueden estar igual de desfasadas."
  - type: truefalse
    id: gpt-fu01-q2
    q: "Si la respuesta lleva enlaces a fuentes, puedes dar el dato por bueno sin abrirlos."
    answer: false
    explain: "Las citas están para comprobar. La página puede ser antigua, poco fiable o no decir lo que resume ChatGPT. Tienta fiarse porque «tiene fuentes», pero hay que abrir al menos una."
  - type: choice
    id: gpt-fu01-q3
    q: "¿En cuál de estas peticiones aporta menos que ChatGPT busque en internet?"
    options: ["Ideas para el nombre de un grupo de senderismo", "El horario de verano de la biblioteca de tu barrio", "Las últimas noticias sobre una huelga de autobuses"]
    answer: 0
    explain: "Inventar nombres no depende de datos recientes. Los horarios y las noticias sí cambian y necesitan una fuente actual."
tips:
  - "Si conoces la web oficial, nómbrala o pega el enlace: «busca en la web del ayuntamiento»."
  - "Si una fuente no dice lo que ChatGPT afirma, díselo y pídele que lo corrija o busque otra."
action:
  title: Haz una búsqueda y revisa una fuente
  steps:
    - "Pide a ChatGPT un dato que cambie y te importe hoy (un horario, un plazo), con «busca en la web y cita las fuentes»."
    - "Abre el primer enlace y busca el dato en la página. Mira su fecha."
    - "Apunta en «Mi kit de ChatGPT» la frase que mejor te ha funcionado para pedir fuentes."
  check: He pedido una búsqueda a ChatGPT y he comprobado una de sus fuentes
practice:
  task: "Quieres apuntar a tu hijo a los cursos de natación de verano de las piscinas municipales y no sabes si han cambiado los plazos. Escribe la petición para que ChatGPT lo busque y puedas comprobarlo."
  require: [verificar, limites]
  extra:
    - label: "Pedir que busque en la web"
      any: ["busca", "buscar", "en la web", "internet"]
      hint: "Di «busca en la web» para que no conteste de memoria."
    - label: "Pedir la fecha de cada fuente"
      any: ["fecha", "actualiz", "reciente"]
      hint: "Pide la fecha de cada página: un plazo de hace dos años no te sirve."
  sample: "Busca en la web el plazo de inscripción y los requisitos de los cursos de natación de verano para niños en las piscinas municipales de Zaragoza. Usa solo fuentes oficiales, como la web del ayuntamiento. Pon el enlace junto a cada dato y dime la fecha de cada página. Si no encuentras algo o dos fuentes no coinciden, avísame en lugar de suponerlo."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda]
---

## La idea

ChatGPT aprende de textos hasta una **fecha de corte**: de lo que pasó después no sabe nada de memoria. Para eso tiene la **búsqueda en la web**: consulta páginas de internet en el momento y responde con lo que encuentra.

Lo que conviene saber:

- **Está en todos los planes**, gratis y de pago. En los planes de empresa, quien administra la cuenta puede desactivarla.
- **Muchas veces busca solo**, cuando la pregunta pide información actual: noticias, plazos, horarios, normas. Pero no siempre: si no lo pides, puede contestar de memoria.
- **Enseña sus fuentes.** Las respuestas que usan la búsqueda llevan enlaces junto a los datos y, a menudo, un botón de «Fuentes» con la lista completa.
- **Puede fallar igual.** Puede citar una página antigua, un blog poco fiable o resumir mal. La búsqueda reduce las invenciones (las llamadas **alucinaciones**), pero no las elimina.

## En la práctica

1. **Pídelo por escrito**: «busca en la web». También puedes activarlo en el menú de herramientas del chat (el botón «+») o escribiendo «/» al principio del mensaje.
2. **Pide fuentes oficiales** cuando el tema lo merezca: BOE, Agencia Tributaria, tu ayuntamiento.
3. **Abre al menos un enlace** y busca el dato en la página. Mira la fecha.
4. **Si no coincide, díselo** y pide que lo corrija.

> Prueba: «Busca en la web el horario de verano de las bibliotecas municipales de mi ciudad, Valladolid. Usa solo la web del ayuntamiento, pon el enlace de cada dato y avísame si la página no dice de qué año es».

Para un trámite importante, la última palabra la tiene la web oficial, no el resumen.

## Error frecuente

Ver que la respuesta tiene enlaces y no abrir ninguno. Una fuente sin revisar vale lo mismo que ninguna.
