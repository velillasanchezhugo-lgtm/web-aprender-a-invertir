---
title: Resumir documentos largos
description: "Cómo pedir a ChatGPT un resumen pensado para lo que vas a hacer, con la página de cada dato, y qué documentos tienes que leer enteros de todos modos."
level: basico
track: gpt-trabajo
order: 403
skills: [gpt-analizar, gpt-archivos-datos, gpt-verificar]
terms: [resumen-ejecutivo, cita-literal, alucinacion]
hook: "Te llega un PDF de 40 páginas y el lunes tienes que saber qué te afecta. Pides un resumen y te sale uno correcto… que no contesta a tu pregunta."
takeaway: "Un buen resumen depende de para qué lo quieres: dilo, y pide la página de cada dato para comprobarlo. Lo que firmas, pagas o te compromete lo lees entero."
scenario:
  kind: operacion
  label: Caso práctico
  title: La instrucción de Elena
  body: "Elena coordina el primer ciclo de un colegio público. La Consejería publica una instrucción de 40 páginas para el inicio de curso. Pide a ChatGPT «resúmela» y le sale un texto general. Repite: «Soy coordinadora de 1.º y 2.º de Primaria; dime solo lo que cambia para mi ciclo, con la página de cada punto». Comprueba en el PDF las tres páginas que más le importan y una cita no coincide del todo: ChatGPT había mezclado dos apartados."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-tr03-q1
    q: "Samuel es jefe de sala en un restaurante de una cadena. Le llega un manual de 60 páginas sobre alérgenos y solo tiene diez minutos. ¿Qué pide?"
    options: ["«Resume este manual.»", "«Soy jefe de sala. Dime qué tiene que hacer el personal de sala al tomar nota y servir, en una lista de 8 puntos como máximo, con la página de cada uno.»", "«Dime si el manual es importante.»"]
    answer: 1
    explain: "La segunda dice quién lo lee, para qué y en qué formato, y pide páginas para comprobar. «Resume este manual» tienta por rápida, pero mezcla cocina, almacén y sala, y Samuel tendría que buscar lo suyo."
  - type: truefalse
    id: gpt-tr03-q2
    q: "Si el resumen de ChatGPT no menciona una cláusula, es que el documento no la tiene."
    answer: false
    explain: "Un resumen deja cosas fuera por definición, y ChatGPT puede saltarse algo o leer mal un PDF escaneado. Si te preocupa un tema, pregúntale por él directamente y comprueba la página."
  - type: choice
    id: gpt-tr03-q3
    q: "Carmen tiene tres documentos esta semana. ¿Cuál debe leer entero aunque tenga un buen resumen?"
    options: ["Un informe del sector que circula por la oficina", "La póliza del seguro de su negocio, que firma el viernes", "El boletín mensual de su asociación de comerciantes"]
    answer: 1
    explain: "Lo que firmas te obliga: exclusiones, plazos y penalizaciones están en la letra pequeña. El resumen ayuda a entenderla y a saber qué preguntar, pero no sustituye leerla. Para los otros dos, un resumen suele bastar."
tips:
  - "Pregunta también lo que no aparece: «¿Hay algo sobre penalizaciones, plazos o renovación automática? Si no lo hay, dímelo»."
  - "Si el documento es tuyo y es largo, guárdalo en un proyecto de ChatGPT y haz las preguntas allí, en vez de subirlo en cada conversación."
action:
  title: Un resumen con páginas
  steps:
    - "Elige un documento largo que tengas pendiente (una circular, unas bases, un manual) sin datos personales de otros."
    - "Súbelo y pide un resumen para lo que vas a hacer, con la página de cada punto."
    - "Abre el PDF y comprueba dos de esas páginas."
  check: He pedido un resumen con páginas y he comprobado dos en el documento
practice:
  task: "Tu empresa ha enviado el nuevo convenio colectivo de tu sector, de 50 páginas. Escribe la petición para que ChatGPT te diga qué cambia para ti, con la página de cada dato."
  require: [contexto, formato, verificar]
  extra:
    - label: Pedir la página de cada dato
      any: [pagina, cita, citando, apartado, articulo]
      hint: "Pide la página o el artículo de cada dato para poder comprobarlo."
  sample: "Trabajo como dependienta a jornada completa en una tienda de ropa. Te adjunto el nuevo convenio colectivo de comercio de mi provincia. Quiero saber qué cambia para mí respecto al anterior en salario, horas, vacaciones y permisos. Dámelo en una tabla con el cambio, el artículo y la página. Si algo no está claro o no lo encuentras, dime que no lo sabes en lugar de suponerlo."
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

ChatGPT lee en segundos un PDF, un Word o un texto pegado y te lo resume. La subida de archivos está en los planes gratuito y de pago, con límites que cambian según el plan.

Pero «resúmelo» da un resumen para nadie. **El resumen útil depende de para qué lo quieres**:

- **Decidir**: un **resumen ejecutivo**, es decir, unas pocas líneas con lo esencial y la recomendación, primero.
- **Actuar**: solo lo que tienes que hacer tú, con plazos.
- **Entender**: lo que significa en lenguaje sencillo.

Pide además **dónde lo dice**: la página, el artículo o una **cita literal** (la frase copiada tal cual). ChatGPT puede **alucinar**, es decir, inventarse algo que suena bien, o mezclar dos apartados. Con la página, comprobarlo te lleva un minuto.

Ten en cuenta dos límites:

1. **Lo que firmas, pagas o te compromete lo lees entero**: contratos, pólizas, condiciones. El resumen te prepara para leerlo y saber qué preguntar, no lo sustituye.
2. **Los PDF escaneados o con tablas en imagen.** Según el centro de ayuda de OpenAI, en la mayoría de planes ChatGPT se queda con el texto del PDF y no con sus imágenes. Si un dato importante está en una foto o un escaneo, puede no verlo. Pregúntale qué ha podido leer.

Y no subas documentos con datos personales de otros (nóminas, expedientes) sin permiso.

## En la práctica

1. Sube el documento y di **quién eres y para qué lo necesitas**.
2. Pide un formato corto: 5 puntos, una tabla, un párrafo.
3. Pide página o cita de cada dato.
4. **Pregunta por lo que temes**: plazos, penalizaciones, excepciones.
5. Comprueba en el documento lo que vayas a usar.

> Prueba: «Te adjunto las bases de una beca de mi universidad. Soy estudiante de 2.º de Enfermería. Dime en una lista: requisitos, documentos, plazo y cómo se elige a quién se la dan, con la página de cada punto. Si algo no aparece, dímelo.»

> Prueba: «Este es el informe anual de mi asociación de vecinos. Hazme un resumen de 5 líneas para leerlo en voz alta en la asamblea, en lenguaje sencillo.»

## Error frecuente

Fiarse de que el resumen «lo cubre todo» y no preguntar por lo que más te preocupa: lo que no pides, a menudo no sale.
