---
title: Verificar según lo que te juegas
description: Cuánto comprobar lo que dice ChatGPT según el riesgo, qué mirar primero y cómo pedirle que marque lo dudoso.
level: basico
track: gpt-seguro
order: 701
skills: [gpt-verificar, gpt-limites]
terms: [alucinacion, busqueda-en-chatgpt, fecha-de-corte]
hook: "ChatGPT te da para tu informe una cifra de paro juvenil, con un enlace a una web oficial. Parece perfecto. ¿Lo copias en la presentación de mañana?"
takeaway: Reparte tu tiempo de revisión. Las ideas, con sentido común; las cifras, fechas, citas y enlaces que vas a usar, en la fuente original. En salud, derecho o dinero, la última palabra es de un profesional.
scenario:
  kind: empresa
  label: Caso práctico
  title: El informe de Noelia
  body: "Noelia prepara un informe sobre el empleo joven en su provincia. ChatGPT le da tres cifras con enlaces. El primero lleva a la web oficial, pero el dato es de hace dos años; el segundo no dice lo que ChatGPT afirma. Noelia actualiza las cifras con la fuente original y cita cada una."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-se01-q1
    q: "Matilde tiene media hora para revisar un informe de diez páginas que le ha preparado ChatGPT antes de enviarlo a su jefa. ¿Por dónde empieza?"
    options: ["Por las cifras, fechas y enlaces que cita", "Por la ortografía y el estilo", "Por leerlo entero de principio a fin con calma"]
    answer: 0
    explain: "Cifras, fechas y enlaces es donde más falla y donde un error más cuesta. Leerlo entero tienta porque parece lo más prudente, pero en media hora no llegas y lo importante se escapa."
  - type: truefalse
    id: gpt-se01-q2
    q: "Que ChatGPT diga que está seguro de un dato es una buena prueba de que es correcto."
    answer: false
    explain: "Escribe con la misma seguridad cuando acierta que cuando se equivoca, y puede reafirmarse en un error si le preguntas «¿seguro?». Tienta porque así juzgamos a las personas, pero la prueba es la fuente."
  - type: choice
    id: gpt-se01-q3
    q: "Preguntas a ChatGPT por las ayudas para comprar un coche eléctrico y te contesta sin buscar en la web. ¿Qué haces?"
    options: ["Fiarte: es un tema muy conocido", "Preguntarle si esas ayudas siguen vigentes", "Pedirle que busque en la web y abrir tú la fuente oficial"]
    answer: 2
    explain: "Lo que sabe de memoria llega hasta su fecha de corte, y las ayudas cambian a menudo. Preguntarle si siguen vigentes tienta por rápido, pero sin buscar solo puede repetir lo que ya sabía."
tips:
  - "Si dos respuestas se contradicen, no elijas la que te guste: busca la fuente original."
  - "Al citar un dato, pon su fuente original, no «según ChatGPT»."
action:
  title: Pide a ChatGPT que marque lo dudoso
  steps:
    - "En una respuesta reciente con datos que vayas a usar, escribe: «Marca qué datos podrían estar mal o anticuados y dime dónde comprobarlos»."
    - "Comprueba el dato más importante en su web oficial."
    - "Guarda la petición en «Mi kit de ChatGPT»."
  check: He pedido a ChatGPT que marque lo dudoso y he comprobado el dato más importante
practice:
  task: "Tu comunidad de vecinos quiere instalar placas solares y te toca contar en la junta qué ayudas hay. Escribe la petición para que ChatGPT te dé los datos de forma que puedas comprobarlos."
  require: [verificar, formato]
  extra:
    - label: Pedir que marque lo dudoso
      any: [dudoso, dudas, no estas seguro, no estes seguro, no tengas claro, anticuad, desactualiz, haya cambiado, marca, senala, avisa]
      hint: "Pide que marque los datos de los que no está seguro o que pueden haber cambiado."
    - label: Pedir la fecha o la fuente oficial
      any: [oficial, fecha, fuente original, actualizado]
      hint: "Pide la fuente oficial y la fecha de cada dato."
  sample: "Soy presidente de una comunidad de 20 vecinos en Palencia y en la junta del mes que viene vamos a hablar de instalar placas solares. Busca qué ayudas públicas hay ahora para comunidades en España y en Castilla y León. Dámelo en una tabla con el nombre de la ayuda, quién la da, el plazo, la fuente oficial con su enlace y la fecha del dato. Marca lo que pueda haber cambiado o de lo que no estés seguro y no inventes plazos: si no lo encuentras, dilo."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-23
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-model-spec]
---

## La idea

ChatGPT suena igual de seguro cuando acierta que cuando se equivoca. A veces se inventa un dato, una cita o una ley: es una **alucinación**. Y lo que sabe de memoria llega hasta una **fecha de corte**, así que puede darte algo que ya ha cambiado.

No se trata de desconfiar de todo, sino de **comprobar según lo que te juegas**:

- **Poco riesgo** (ideas, borradores, un menú): sentido común y adelante.
- **Riesgo medio** (un correo a un cliente, un informe): revisa **cifras, fechas, nombres y citas** antes de enviarlo.
- **Riesgo alto** (salud, dinero, impuestos, plazos legales, lo que publicas): ve a la **fuente original** y, si decides algo importante, consulta a un profesional.

Qué mirar primero:

1. **Cifras y fechas.** Es donde más falla y donde un error más cuesta.
2. **Citas y leyes.** Que el artículo o la frase existan y digan eso.
3. **Enlaces.** Cuando **busca en la web**, pone las fuentes junto a la respuesta. Ábrelas: a veces la página no dice eso o es antigua.

## En la práctica

1. Pide los datos **separados del texto**, en una tabla con la fuente y la fecha.
2. Pídele que **marque lo dudoso**: lo que podría estar mal o anticuado.
3. Para datos que cambian, que **busque en la web**, y abre tú los enlaces.
4. Compruébalo en la web oficial: BOE, Agencia Tributaria, tu ayuntamiento.

> Prueba: «Antes de usar tu respuesta en mi informe, sepárame en una lista los datos que se pueden comprobar (cifras, fechas, plazos, nombres de normas). En cada uno, dime si lo has sacado de una web en esta conversación o de lo que ya sabías, y qué organismo oficial lo publica. Marca los que puedan estar anticuados.»

Lo que viene «de lo que ya sabía» es lo primero que hay que comprobar.

## Error frecuente

Comprobar el dato preguntando a ChatGPT «¿seguro?». Puede repetir el error con más convicción o cambiarlo solo porque dudas. Comprueba en la fuente.
