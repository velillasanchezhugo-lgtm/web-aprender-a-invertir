---
title: Imágenes, autoría y deepfakes
description: De quién es lo que crea ChatGPT, qué pasa con obras y personas reales, por qué un deepfake puede meterte en un lío y cuándo decir que usaste IA.
level: basico
track: gpt-seguro
order: 704
skills: [gpt-etica-normas, gpt-imagenes]
terms: [derechos-de-autor, deepfake, generacion-de-imagenes, metadatos-c2pa, plagio]
hook: "Quieres un cartel para tu peluquería con un futbolista famoso luciendo tu corte estrella, hecho con ChatGPT. Queda genial. ¿Lo cuelgas en el escaparate y en Instagram?"
takeaway: Lo que publicas es responsabilidad tuya, aunque lo haya hecho la IA. Crea contenido original, no uses la cara ni la voz de personas reales sin su permiso, cita lo ajeno y di que usaste IA cuando lo pidan o pueda confundir.
scenario:
  kind: empresa
  label: Caso práctico
  title: El cartel de Fermín
  body: "Fermín tiene una peluquería y pide a ChatGPT un cartel con un futbolista famoso. ChatGPT le pone pegas. Fermín lo piensa: aunque saliera, usaría la imagen de alguien para anunciarse sin su permiso. Pide otra cosa: un cliente inventado, con su corte estrella y los colores de su local. Lo publica con la nota «Imagen creada con IA»."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-se04-q1
    q: "Para la fiesta de tu empresa, un compañero propone hacer con IA un vídeo en el que la directora «dice» cosas graciosas que nunca dijo. ¿Qué haces?"
    options: ["Adelante: es una broma interna", "Solo si la directora lo sabe y está de acuerdo, y dejando claro que es una recreación con IA", "Adelante, pero sin decir que es IA para que sea más gracioso"]
    answer: 1
    explain: "Usar la cara o la voz de alguien sin su permiso puede dañar su imagen y va contra las políticas de uso de OpenAI. «Es una broma» tienta, pero un vídeo así se reenvía y deja de ser interno en minutos."
  - type: truefalse
    id: gpt-se04-q2
    q: "Si ChatGPT reescribe con otras palabras un artículo de otra web, puedes publicarlo como tuyo."
    answer: false
    explain: "Una copia disfrazada sigue siendo una copia y puede ser plagio. Tienta porque el texto «es nuevo», pero las ideas, la estructura y los datos son de otro: cítalo o crea tu propio contenido."
  - type: choice
    id: gpt-se04-q3
    q: "Las condiciones de OpenAI te ceden los derechos sobre lo que genera ChatGPT. ¿Qué significa eso para ti?"
    options: ["Que es tuyo y nadie puede reclamarte nada", "Que OpenAI no te lo reclama, pero sigues respondiendo de lo que publicas y puede no estar protegido como obra tuya", "Que tienes que pagar a OpenAI si lo usas en tu negocio"]
    answer: 1
    explain: "La cesión solo dice que OpenAI no se queda esos derechos. Tienta pensar que te blinda, pero si la imagen se parece a una obra ajena, el problema es tuyo; y en España la ley protege lo que crean las personas."
tips:
  - "Las marcas de procedencia de las imágenes de ChatGPT no se ven a simple vista y no todas las redes las muestran: si importa, dilo tú en el texto."
  - "Para fotos de personas reales en tu negocio (clientes, empleados), pide permiso por escrito, igual que sin IA."
  - "Evita pedir «al estilo de» un personaje o una marca concretos: pide colores, épocas y técnicas."
action:
  title: Crea una imagen limpia y decláralo
  steps:
    - "Piensa en una imagen que te sirva (un cartel, una felicitación, la portada de un trabajo)."
    - "Pídesela a ChatGPT sin personas reales, marcas ni personajes conocidos: describe tú el estilo."
    - "Si la publicas, añade «Imagen creada con IA» y apunta esa regla en «Mi kit de ChatGPT»."
  check: He creado una imagen original con ChatGPT y he decidido cómo declarar que es de IA
practice:
  task: "Organizas la fiesta de tu barrio y quieres un cartel hecho con ChatGPT. Escribe la petición de la imagen sin personas reales, marcas ni personajes con derechos."
  require: [contexto, formato, limites]
  extra:
    - label: Evitar personas reales y obras ajenas
      any: [personas reales, persona real, famosos, logotipos, marcas, personajes, inventad, original]
      hint: "Di que no salgan personas reales, famosos, marcas ni personajes conocidos, y que todo sea inventado."
  sample: "Organizo la fiesta de mi barrio, en Valladolid, el 14 de junio, con comida popular y música. Crea un cartel vertical, tamaño A3, con colores alegres y estilo de ilustración plana. Que aparezcan vecinos de distintas edades, todos inventados: sin personas reales ni famosos, sin logotipos, marcas ni personajes conocidos. Deja un hueco arriba para el título «Fiesta del barrio» y abajo para la hora."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-condiciones-ue, openai-uso, openai-ayuda]
---

## La idea

Cuatro preguntas que conviene tener claras antes de publicar algo hecho con ChatGPT.

**1. ¿De quién es?** Las condiciones de OpenAI para Europa dicen que, en lo que permita la ley, lo que genera es tuyo y te ceden los derechos que pudieran tener. Eso sí: avisan de que otra persona puede recibir algo parecido. Además, en España los **derechos de autor** protegen lo que crean las **personas**: algo hecho casi entero por la IA puede no estar protegido. Cuanto más pones tú, más tuyo es. Y, en todo caso, **respondes tú** de lo que publicas.

**2. ¿Y lo de otros?** Un texto, una foto o un personaje ajenos tienen dueño. Pedir un resumen para entender algo está bien; publicar una copia reescrita o una imagen que imita una obra concreta puede vulnerar sus derechos o ser **plagio**.

**3. ¿Personas reales?** Lo más delicado. Usar la cara o la voz de alguien sin su permiso de forma que parezca real va contra las normas de OpenAI y puede dañarle. Un **deepfake** (imagen, audio o vídeo falso que parece real) puede acabar en un problema legal, aunque empezara como broma. Por eso ChatGPT a veces pone pegas o se niega.

**4. ¿Digo que es IA?** Sí cuando lo pidan las normas (tu empresa, tu centro de estudios, la web donde publicas) y cuando pueda confundir. Las imágenes de ChatGPT llevan **metadatos C2PA**, una etiqueta interna de procedencia, y una marca de agua invisible. Los metadatos se borran con facilidad (una captura basta); la marca aguanta más, pero tampoco es infalible. OpenAI tiene una página para comprobar si una imagen salió de sus herramientas.

## En la práctica

- **Imágenes**: describe el estilo (colores, época, técnica) en lugar de «al estilo de» un artista o personaje concretos, y usa personas inventadas.
- **Textos**: escribe tú el fondo y pide ayuda para pulirlo. Cita las fuentes de los datos.
- **Al publicar**: añade una nota sencilla, como «Imagen creada con IA» o «Texto revisado con ayuda de IA».

> Prueba: «Quiero una imagen para el folleto de mi academia de baile. No copies el estilo de ningún artista, película ni marca: propón tres estilos descritos con colores, técnica y época, con bailarines inventados, y dime cuál encaja mejor con alumnos de 30 a 50 años.»

## Error frecuente

Pensar que, si ChatGPT lo ha generado, no hay problema. La herramienta no responde por ti: si la imagen imita una obra ajena o a una persona real, el problema es de quien la publica.
