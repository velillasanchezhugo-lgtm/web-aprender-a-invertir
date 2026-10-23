---
title: Verificar según lo que te juegas
description: Cuánto comprobar lo que dice ChatGPT según el riesgo, qué mirar primero (cifras, citas, enlaces) y cómo pedirle que marque lo dudoso.
level: basico
track: gpt-seguro
order: 701
skills: [gpt-verificar, gpt-limites]
terms: [alucinacion, busqueda-en-chatgpt, fecha-de-corte]
hook: "ChatGPT te da para tu informe una cifra de paro juvenil, con un enlace a una web oficial. Parece perfecto. ¿Lo copias en la presentación de mañana?"
takeaway: No todo se comprueba igual. Las ideas se revisan por encima; las cifras, citas, fechas y enlaces que vas a usar o enviar se abren y se contrastan siempre, y en salud, derecho o dinero decide un profesional.
scenario:
  kind: empresa
  label: Caso práctico
  title: El informe de Carmen
  body: "Carmen prepara para su jefa un informe sobre el empleo joven en su provincia. ChatGPT le da tres cifras con enlaces. Abre el primero: lleva a la web oficial, pero el dato es de hace dos años. El segundo enlace no dice lo que ChatGPT afirma. Carmen pide que marque lo dudoso, actualiza las cifras con la fuente original y cita cada una."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-se01-q1
    q: "Vas a usar tres respuestas de ChatGPT esta semana: ideas para la cena de Navidad, un correo a un proveedor con un plazo de entrega y el plazo para recurrir una multa de tráfico. ¿Dónde pones más cuidado?"
    options: ["En las ideas de la cena, porque es lo que más se nota", "En el plazo de la multa: lo compruebo en la notificación o en la web oficial", "En las tres por igual, frase por frase"]
    answer: 1
    explain: "Un plazo legal mal puesto puede costarte dinero y no tiene arreglo. Revisarlo todo igual tienta porque parece lo más prudente, pero no es realista: el esfuerzo va donde está el riesgo."
  - type: truefalse
    id: gpt-se01-q2
    q: "Si ChatGPT ha buscado en la web y pone un enlace junto al dato, ya no hace falta abrirlo."
    answer: false
    explain: "El enlace puede llevar a una página que no dice eso, que es antigua o que trata otro caso. Tienta fiarse porque el enlace da apariencia de rigor, pero solo vale si lo abres y encuentras el dato."
  - type: choice
    id: gpt-se01-q3
    q: "ChatGPT te da un dato con mucha seguridad y sin fuente. ¿Qué es lo más útil que puedes hacer?"
    options: ["Preguntarle «¿estás seguro?» y fiarte si dice que sí", "Pedirle de dónde sale y comprobarlo en la fuente original", "Darlo por bueno si suena razonable"]
    answer: 1
    explain: "Lo que importa es la fuente, no el tono. Preguntar «¿estás seguro?» tienta por rápido, pero un modelo puede reafirmarse en un error o cambiar de opinión solo porque dudas tú."
tips:
  - "Pide las cifras en una tabla con su fuente y su fecha: así ves de un vistazo qué falta y qué está anticuado."
  - "Para un dato que cambia (plazos, ayudas, precios), ve directamente a la web oficial: BOE, sede de la Agencia Tributaria o de tu ayuntamiento."
  - "Si dos respuestas se contradicen, no elijas la que te guste más: busca la fuente original."
action:
  title: Pide a ChatGPT que marque lo dudoso
  steps:
    - "Abre una respuesta reciente de ChatGPT con algún dato que vayas a usar."
    - "Escríbele: «Marca qué datos de tu respuesta podrían estar mal o anticuados y dime dónde comprobarlos»."
    - "Abre el enlace o la web oficial del dato más importante y compruébalo."
    - "Guarda la petición en «Mi kit de ChatGPT»."
  check: He pedido a ChatGPT que marque lo dudoso y he comprobado el dato más importante
practice:
  task: "Tu comunidad de vecinos quiere instalar placas solares y te toca contar en la junta qué ayudas hay. Escribe la petición para que ChatGPT te dé los datos de forma que puedas comprobarlos."
  require: [verificar, formato]
  extra:
    - label: Pedir que marque lo dudoso
      any: [dudoso, dudas, no estas seguro, seguridad, anticuad, puede haber cambiado, marca]
      hint: "Pide que marque los datos de los que no está seguro o que pueden haber cambiado."
    - label: Pedir la fecha o la fuente oficial
      any: [oficial, fecha, fuente original, actualizado]
      hint: "Pide la fuente oficial y la fecha de cada dato."
  sample: "Soy presidente de una comunidad de 20 vecinos en Zaragoza y en la junta del mes que viene vamos a hablar de instalar placas solares. Busca qué ayudas públicas hay ahora para comunidades en España y en Aragón. Dámelo en una tabla con el nombre de la ayuda, quién la da, el plazo, la fuente oficial con su enlace y la fecha del dato. Marca lo que pueda haber cambiado o de lo que no estés seguro y no inventes plazos: si no lo encuentras, dilo."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-model-spec]
---

## La idea

ChatGPT escribe con la misma seguridad cuando acierta que cuando se equivoca. A veces se inventa un dato, una cita o una ley que suena real: es lo que se llama **alucinación**. Y lo que sabe de memoria llega hasta una **fecha de corte**, así que puede darte algo que ya ha cambiado. La propia pantalla de ChatGPT avisa de que puede cometer errores.

La clave no es desconfiar de todo, sino **comprobar según lo que te juegas**:

- **Poco riesgo** (ideas, borradores, un menú): léelo con sentido común y adelante.
- **Riesgo medio** (un correo a un cliente, un informe para tu jefa): revisa **cifras, fechas, nombres y citas** antes de enviarlo.
- **Riesgo alto** (salud, dinero, impuestos, plazos legales, algo que vas a publicar): compruébalo en la **fuente original** y, si es una decisión importante, consúltalo con un profesional.

Qué mirar primero, por orden:

1. **Cifras y fechas.** Es donde más falla y donde un error más cuesta.
2. **Citas y leyes.** Que el artículo o la frase existan y digan eso.
3. **Enlaces.** Cuando **busca en la web**, ChatGPT pone las fuentes junto a la respuesta. Ábrelas: a veces la página no dice lo que él resume o es antigua.

## En la práctica

1. Pide los datos **separados del texto**, en una tabla con la fuente y la fecha.
2. Pídele que **marque lo dudoso**: lo que podría estar mal o anticuado.
3. Para datos que cambian, pídele que **busque en la web** y abre tú los enlaces.
4. Compruébalo en la web oficial: BOE, Agencia Tributaria, Seguridad Social, tu ayuntamiento.

> Prueba: «Repasa tu respuesta anterior. Haz una tabla con cada dato concreto (cifras, fechas, plazos, nombres de leyes), dime de dónde sale, cuánta seguridad tienes en él y en qué web oficial puedo comprobarlo. Si alguno puede haber cambiado este año, márcalo.»

Que te diga que tiene «mucha seguridad» no basta: es una pista para saber por dónde empezar, no una prueba.

## Error frecuente

Comprobar el dato preguntando a ChatGPT «¿seguro?». Puede repetir el error con más convicción o cambiarlo solo porque dudas. Comprueba en la fuente, no en la misma conversación.
