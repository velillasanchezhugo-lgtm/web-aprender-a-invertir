---
title: Resumir documentos largos
description: "Cómo pedir a ChatGPT un resumen hecho para ti y para lo que vas a hacer, con la página de cada dato, y qué hacer con los PDF escaneados."
level: basico
track: gpt-trabajo
order: 403
skills: [gpt-analizar, gpt-archivos-datos, gpt-verificar]
terms: [resumen-ejecutivo, cita-literal, alucinacion]
hook: "Te llega un PDF de 40 páginas con «novedades importantes». Lo que te afecta cabe en media página, pero no sabes cuál."
takeaway: "Dile a ChatGPT quién eres y qué vas a hacer con el resumen, y pide dónde lo dice cada dato. Así el resumen es tuyo y lo compruebas en un minuto."
scenario:
  kind: operacion
  label: Caso práctico
  title: La instrucción de Yolanda
  body: "Yolanda coordina el primer ciclo de un colegio. La Consejería publica una instrucción de 40 páginas. Pide: «Soy coordinadora de 1.º y 2.º de Primaria; dime solo lo que cambia para mi ciclo, con la página de cada punto». Comprueba las tres páginas que más le importan y una no coincide: ChatGPT había mezclado dos apartados."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-tr03-q1
    q: "Gonzalo es jefe de sala en un restaurante de una cadena. Le llega un manual de 60 páginas sobre alérgenos y solo tiene diez minutos. ¿Qué pide?"
    options: ["«Resume este manual.»", "«Soy jefe de sala. Dime qué tiene que hacer el personal de sala al tomar nota y servir, en 8 puntos como máximo, con la página de cada uno.»", "«Dime si el manual es importante.»"]
    answer: 1
    explain: "La segunda dice quién lo lee, para qué y en qué formato, y pide páginas. «Resume este manual» tienta por rápida, pero mezclará cocina, almacén y sala."
  - type: truefalse
    id: gpt-tr03-q2
    q: "Si el resumen de ChatGPT no menciona una cláusula, es que el documento no la tiene."
    answer: false
    explain: "Un resumen deja cosas fuera, y ChatGPT puede saltarse algo o no leer un escaneo. Si te preocupa un tema, pregunta por él y comprueba la página."
  - type: choice
    id: gpt-tr03-q3
    q: "Fátima pide el resumen de las bases de una ayuda para su negocio. ChatGPT dice que el plazo acaba el 30 de septiembre, «página 7». Va a organizar su semana con esa fecha. ¿Qué hace?"
    options: ["Se fía: ha dado hasta la página", "Abre el PDF por la página 7 y comprueba la fecha", "Pregunta a ChatGPT «¿seguro?» y se queda con lo que diga"]
    answer: 1
    explain: "La página sirve justo para comprobar en un minuto el dato del que depende todo. Preguntar «¿seguro?» tienta por cómodo, pero ChatGPT puede repetir el error o cambiar de respuesta solo por tu duda."
tips:
  - "Termina con: «¿Hay alguna parte que no hayas podido leer bien?»."
  - "Si vuelves a menudo a un documento, guárdalo en un proyecto de ChatGPT en vez de subirlo cada vez."
action:
  title: Resume un PDF para lo que tienes que hacer
  steps:
    - "Elige un documento largo pendiente, sin datos personales de otros."
    - "Súbelo y di quién eres y qué vas a hacer con él. Pide la página de cada punto."
    - "Abre el PDF y comprueba los dos datos que más te importen."
  check: He pedido un resumen con páginas y he comprobado dos datos en el documento
practice:
  task: "Te han enviado el nuevo convenio colectivo de tu sector, de 50 páginas. Escribe la petición para que ChatGPT te diga qué cambia para ti."
  require: [contexto, formato, verificar]
  extra:
    - label: Pedir la página de cada dato
      any: [pagina, cita, citando, apartado, articulo]
      hint: "Pide la página o el artículo de cada dato para poder comprobarlo."
  sample: "Trabajo como dependienta a jornada completa en una tienda de ropa. Te adjunto el nuevo convenio colectivo de comercio de mi provincia. Dime qué cambia para mí en salario, horas y vacaciones, en una tabla con el cambio, el artículo y la página. Si no lo encuentras, dime que no lo sabes en lugar de suponerlo."
deeper: null
tool: evaluador-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda]
---

## La idea

Puedes subir a ChatGPT un PDF o un Word, o pegar un texto, y pedir un resumen, en los planes gratis y de pago. Pero «resúmelo» da un resumen para nadie. Antes de pedirlo, contesta tres preguntas:

- **¿Quién eres?** Dependienta, coordinadora, presidente de la AMPA: cambia qué importa.
- **¿Qué vas a hacer con él?** Decidir algo, cumplir unos plazos o contárselo a otros. Para contarlo, pide un **resumen ejecutivo**: unas líneas con lo esencial al principio.
- **¿Cómo lo vas a comprobar?** Pide la página, el artículo o una **cita literal** (la frase copiada tal cual) de cada dato.

Lo último es clave: ChatGPT puede **alucinar**, es decir, afirmar con seguridad algo que el documento no dice, o mezclar apartados.

Ojo con los **PDF escaneados o con tablas en imagen**. Según el centro de ayuda de OpenAI, en la mayoría de planes ChatGPT lee solo el texto de los PDF y descarta las imágenes. Si un dato está en una foto o un escaneo, puede no verlo.

Dos límites más: lo que vas a **firmar o pagar** lo lees tú entero, y no subas documentos con datos personales de otros (nóminas, expedientes) sin permiso.

## En la práctica

1. Sube el documento y responde a las tres preguntas en tu petición.
2. Pide un formato corto: 5 puntos, una tabla, un párrafo.
3. Pregunta por lo que temes: plazos, requisitos, excepciones.
4. Comprueba en el documento lo que vayas a usar.

> Prueba: «Te adjunto las bases de una beca de mi universidad. Soy estudiante de 2.º de Enfermería. Dime en una lista: requisitos, documentos, plazo y cómo se elige a quién se la dan, con la página de cada punto. Si algo no aparece, dímelo.»

## Error frecuente

Pedir «resúmelo» y no preguntar por lo que te preocupa.
