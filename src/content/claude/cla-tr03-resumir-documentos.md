---
title: Resumir documentos largos
description: Cómo pedir a Claude resúmenes de contratos, informes o actas según para qué los quieres, con citas de página, y qué documentos tienes que leer tú siempre.
level: basico
track: cla-trabajo
order: 303
skills: [cla-analizar, cla-archivos, cla-verificar]
terms: [resumen-ejecutivo, cita-literal, alucinacion]
hook: "Te llega un informe de 60 páginas y la reunión es en una hora. ¿Puedes fiarte del resumen que te haga una IA?"
takeaway: Un buen resumen depende de para qué lo quieres, así que díselo. Pide la página de cada dato para comprobarlo. Y lo que vas a firmar lo lees tú entero, con o sin resumen.
scenario:
  kind: operacion
  label: Caso práctico
  title: El contrato de Toni
  body: "Toni va a alquilar un local para abrir una frutería. Sube el contrato a Claude y pide un resumen. Le sale muy bien: duración, renta, fianza. Pero no preguntó por las penalizaciones y el resumen no menciona una cláusula que le obliga a pagar seis meses si se va antes del segundo año. La descubre al releer el contrato entero antes de firmar."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-tr03-q1
    q: "Pilar tiene que decidir en una reunión si renueva el contrato con una empresa de limpieza. Sube el informe de evaluación. ¿Qué pide?"
    options: ["«Resume este documento.»", "«Voy a decidir si renuevo. Resume en 5 puntos lo que influye en esa decisión (coste, quejas, incumplimientos) e indica la página de cada uno.»", "«Dime si debo renovar.»"]
    answer: 1
    explain: "La segunda dice para qué es el resumen y pide páginas para comprobarlo. «Resume este documento» tienta por rápida, pero da un resumen general que puede saltarse justo lo que importa. La decisión, además, es de Pilar."
  - type: truefalse
    id: cla-tr03-q2
    q: "Si Claude dice que un dato está en la página 12, seguro que está ahí."
    answer: false
    explain: "Puede equivocarse de página o, más raro, dar por hecho algo que el documento no dice. La página sirve justo para eso: para ir y comprobarlo en un minuto."
  - type: choice
    id: cla-tr03-q3
    q: "Te van a hacer firmar mañana un contrato de trabajo. ¿Cuál es el mejor uso de Claude?"
    options: ["Que lo resuma y firmar si el resumen está bien", "Leerlo entero yo y usar a Claude para entender cláusulas difíciles y preparar preguntas", "Pedirle que me diga si es legal"]
    answer: 1
    explain: "Lo que firmas te obliga a ti, palabra por palabra. Claude te ayuda a entenderlo y a saber qué preguntar, pero no sustituye tu lectura ni a un abogado o a tu sindicato si hay dudas serias."
tips:
  - "Pide primero un resumen ejecutivo de cinco líneas y, después, solo los apartados que te importen."
  - "Pregunta qué no aparece: «¿El documento dice algo de penalizaciones? Si no, dilo»."
action:
  title: Un resumen con páginas
  steps:
    - "Elige un PDF que tengas pendiente de leer (un informe, unas bases, unas normas). Quita los datos personales."
    - "Súbelo a Claude con la primera petición de ejemplo, cambiando el «para qué»."
    - "Comprueba en el original dos de las páginas que te indique."
  check: He resumido un documento con Claude y he comprobado dos datos en el original
practice:
  task: "Tu ayuntamiento ha publicado unas bases de 30 páginas con ayudas para pequeños comercios. Escribe la petición para que Claude te diga qué piden y dónde lo dice, antes de decidir si las solicitas."
  require: [contexto, formato, verificar]
  extra:
    - label: Pedir la página de cada dato
      any: [pagina, apartado, cita literal, texto exacto, articulo]
      hint: "Pide que indique la página o el apartado de cada dato para comprobarlo."
  sample: "Tengo una tienda de ropa en un pueblo de Teruel, con dos empleadas, y quiero saber si puedo pedir estas ayudas del ayuntamiento para comercios. Te adjunto las bases. Resume en 5 puntos los requisitos, el importe, el plazo y los documentos que piden, e indica la página de cada uno. Después dime si algún requisito no queda claro con lo que te he contado. Si algo no aparece en las bases, dilo en lugar de suponerlo."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda, aepd-guias]
---

## La idea

Puedes subir a Claude un PDF o un Word, o pegar un texto largo, y pedirle un resumen, en el plan gratuito y en los de pago. Pero **no existe un resumen bueno en general**: depende de para qué lo quieres.

- Para **decidir**: lo que influye en la decisión, los riesgos y lo que falta.
- Para **contar a otros**: un **resumen ejecutivo**, es decir, unas líneas con lo esencial y lo que hay que decidir.
- Para **actuar**: fechas, plazos, obligaciones y quién hace qué.

Dos hábitos te protegen de los errores:

1. **Pide la página o el apartado** de cada dato, o una **cita literal** (las palabras exactas del documento). Así lo compruebas en un minuto.
2. **Pregunta por lo que no sale**: penalizaciones, plazos, excepciones. Un resumen siempre omite cosas.

Claude puede equivocarse: saltarse un matiz o, a veces, afirmar algo que el documento no dice (una **alucinación**). En documentos muy largos o escaneados puede leer peor las tablas y las imágenes.

Y una línea roja: **lo que vas a firmar lo lees tú entero** (contratos, hipotecas, finiquitos). Claude te ayuda a entenderlo y a preparar preguntas. Si hay mucho en juego, consulta a un profesional.

## En la práctica

1. Sube el documento **sin DNI, firmas, cuentas ni datos de terceros**.
2. Explica **para qué** es el resumen y pide el formato.
3. Pide páginas o citas y **comprueba las cifras clave**.

> Prueba: «Te adjunto el acta de la última junta de mi comunidad de vecinos. No pude ir. Hazme un resumen de 5 líneas y después una tabla con cada acuerdo, la derrama o el coste si lo hay, el plazo y la página del acta donde aparece. Si algo no está claro en el texto, dilo en lugar de suponerlo.»

> Prueba: «Este es mi contrato de alquiler. No voy a firmar con tu resumen: quiero entenderlo. Explícame en lenguaje sencillo las cláusulas sobre duración, fianza, obras y salida anticipada, citando el texto exacto, y dame 5 preguntas para hacerle al propietario.»

## Error frecuente

Pedir «resúmelo» y dar por hecho que, si algo no sale en el resumen, no está en el documento.
