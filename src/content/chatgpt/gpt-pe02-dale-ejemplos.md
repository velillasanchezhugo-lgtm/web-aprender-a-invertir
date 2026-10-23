---
title: Dale ejemplos
description: "Cómo enseñarle a ChatGPT ejemplos de lo que quieres, y de lo que no, para que acierte con el estilo, la longitud y la estructura a la primera."
level: basico
track: gpt-pedir
order: 102
skills: [gpt-ejemplos-formato]
terms: [prompt, tono]
hook: "Le pides a ChatGPT mensajes para recordar las citas de tu consulta y te salen textos larguísimos, con emojis y signos de exclamación. Tú escribes justo lo contrario. ¿Cómo se lo explicas sin escribir una página?"
takeaway: Un ejemplo vale más que muchos adjetivos. Pega uno o dos textos como los que quieres, di qué tienen en común y, si ayuda, uno de lo que no quieres, marcado como tal.
scenario:
  kind: empresa
  label: Caso práctico
  title: Los recordatorios de Héctor
  body: "Héctor tiene una consulta de fisioterapia en Albacete. Pide a ChatGPT «mensajes amables para recordar las citas» y le salen textos de cinco líneas con emojis. Prueba otra vez: pega dos recordatorios que él mismo escribió, explica que son cortos, sin emojis y con un enlace para cambiar la cita, y añade uno de una cadena de clínicas que no le gusta. Los nuevos mensajes ya suenan a él."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-pe02-q1
    q: "Celia lleva una tienda online de cerámica y quiere que ChatGPT escriba las fichas de 20 productos nuevos con su estilo. ¿Qué le funciona mejor?"
    options: ["Pedirle «fichas originales y con gancho»", "Pegar dos fichas suyas que funcionan, decir qué tienen en común y pedirle las nuevas con la misma estructura", "Pegar las 60 fichas de la web sin explicar nada"]
    answer: 1
    explain: "Dos buenos ejemplos y una frase sobre qué los une le enseñan el estilo y la estructura. «Con gancho» tienta porque es rápido, pero cada uno entiende algo distinto. Pegarlo todo sin explicar mezcla fichas buenas y flojas."
  - type: truefalse
    id: gpt-pe02-q2
    q: "Si pegas un ejemplo, ChatGPT puede copiar también su contenido (los datos, el producto, las frases), no solo el estilo."
    answer: true
    explain: "Pasa a menudo. Por eso conviene decir qué debe imitar («la longitud y el tono») y qué no («no copies las frases ni los datos»). Y revisa que no se cuele un precio o un nombre del ejemplo."
  - type: choice
    id: gpt-pe02-q3
    q: "Héctor quiere pegar un recordatorio real que mandó a un paciente. ¿Qué hace antes?"
    options: ["Lo pega tal cual: es solo un ejemplo", "Cambia el nombre, el teléfono y cualquier dato de salud por [NOMBRE] o algo inventado", "Renuncia a usar ejemplos"]
    answer: 1
    explain: "Para enseñar un estilo no hacen falta datos reales. Pegarlo tal cual tienta por comodidad, pero los datos de salud de un paciente son especialmente delicados. Basta con cambiarlos por marcadores o datos inventados."
tips:
  - "Con dos o tres ejemplos suele bastar. Si son muy distintos entre sí, ChatGPT no sabrá cuál seguir."
  - "Marca bien dónde empieza y acaba cada ejemplo, con comillas o con «Ejemplo 1:» y «Ejemplo 2:»."
  - "Guarda en «Mi kit de ChatGPT» los ejemplos que mejor te funcionen: te sirven para muchas peticiones."
action:
  title: Prueba con dos ejemplos tuyos
  steps:
    - "Elige algo que escribes a menudo: un mensaje, una respuesta a clientes, una publicación."
    - "Pega dos textos tuyos, sin datos personales, y di qué tienen en común."
    - "Pide uno nuevo sobre otro tema y compáralo con lo que te sale sin ejemplos."
  check: He usado dos ejemplos míos en una petición y he comparado el resultado
practice:
  task: "Organizas las salidas de un club de senderismo y cada mes envías la convocatoria. Escribe la petición pegando un ejemplo tuyo y uno de lo que no quieres."
  require: [ejemplos, contexto, formato]
  extra:
    - label: "Marcar lo que no quieres"
      any: ["no quiero", "no me gusta", "lo que no", "no lo hagas asi", "evita", "no copies", "no imites", "mal ejemplo", "no se parezca"]
      hint: "Si pegas un texto que no te gusta, dilo claro: «Esto es lo que no quiero: …»."
  sample: "Organizo las salidas de un club de senderismo en Cuenca y cada mes mando la convocatoria por correo. Escribe la de noviembre: ruta de 12 km por la Hoz del Huécar, salida a las 9:00. Este es un ejemplo mío que funciona: «Domingo 5. Ruta del Ventano del Diablo, 10 km, nivel fácil. Quedamos a las 9:00 en la plaza. Trae agua y calzado de montaña». Esto es lo que no quiero: «¡¡Hola, aventureros!! ¡Preparaos para un día increíble!». Formato: máximo cinco frases, sin emojis. No copies los datos del ejemplo."
deeper: null
tool: evaluador-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-academy]
---

## La idea

Decir «hazlo cercano pero profesional» deja mucho a la interpretación. **Enseñar un ejemplo** no: ChatGPT ve la longitud, las palabras, la estructura y el tono, y los imita.

Hay tres formas de usar ejemplos:

- **Lo que quieres.** Uno o dos textos que te gustan, tuyos o que podrías haber escrito tú.
- **Lo que no quieres.** Un texto que no te gusta, **marcado claramente** como lo que hay que evitar. Si no lo marcas, ChatGPT puede tomarlo como modelo.
- **Qué tienen en común.** Una frase que explique la regla: «son cortos, empiezan por la fecha y acaban con lo que hay que traer». Así imita lo importante y no lo accidental.

Dos avisos:

- **Imita, pero también copia.** A veces repite frases o datos del ejemplo. Di qué debe imitar y qué no.
- **Nada de datos reales.** Para enseñar un estilo da igual que el ejemplo hable de «Laura» o de [NOMBRE]. Quita nombres, teléfonos y cualquier dato de salud o de dinero.

## En la práctica

Pon primero la tarea, luego los ejemplos y al final la regla:

> Prueba: «Respondo los mensajes de los clientes de mi taller de bicis en Murcia. Escribe una respuesta para alguien que pregunta si arreglamos frenos de disco. Ejemplo 1 de cómo respondo: "Sí, los arreglamos. Tráela cuando quieras de 10:00 a 14:00 y te la tenemos en dos días". Ejemplo 2: "Ahora mismo no tenemos esa pieza. Te aviso en cuanto llegue". Fíjate en que son dos frases, directas y sin emojis. No copies los datos de los ejemplos.»

Si el resultado se parece demasiado a un ejemplo, dilo: «Mantén el estilo, pero cambia las frases».

## Error frecuente

Pegar un texto que no te gusta sin decir que es lo que no quieres. ChatGPT no sabe tu intención: lo imitará igual que los buenos.
