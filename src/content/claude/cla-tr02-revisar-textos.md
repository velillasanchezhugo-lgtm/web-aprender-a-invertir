---
title: Revisar tus textos sin perderlos
description: Cómo pedir a Claude que corrija ortografía, claridad y tono de un texto tuyo con los cambios marcados y explicados, y por qué no conviene aceptarlo todo.
level: basico
track: cla-trabajo
order: 302
skills: [cla-escribir, cla-ejemplos-formato]
terms: [control-de-cambios, tono]
hook: "Pides a Claude que corrija tu informe y te devuelve otro texto. Mejor escrito, sí, pero ya no sabes qué ha cambiado ni si dice lo mismo."
takeaway: Pide correcciones marcadas y explicadas, no un texto nuevo. Así ves cada cambio, aprendes de él y decides tú cuál aceptar.
scenario:
  kind: empresa
  label: Caso práctico
  title: El informe de Esteban
  body: "Esteban trabaja en el departamento de compras de una empresa de 40 personas. Pega su informe trimestral y pide «corrígelo». Claude lo reescribe entero y, sin querer, cambia «el proveedor podría subir precios» por «el proveedor subirá precios». Esteban casi lo envía así. Desde entonces pide una tabla con el texto original, la propuesta y el motivo, y acepta los cambios uno a uno."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-tr02-q1
    q: "Celia tiene que entregar mañana una memoria de prácticas y quiere que Claude la revise. ¿Qué petición le conviene?"
    options: ["«Mejora este texto.»", "«Corrige ortografía y frases confusas, sin cambiar el contenido. Dame una lista con cada cambio: original, propuesta y motivo.»", "«Reescríbelo para que parezca de un profesional.»"]
    answer: 1
    explain: "La segunda acota qué tocar y deja cada cambio a la vista, así Celia decide. «Mejora este texto» tienta porque es corta, pero da permiso para cambiarlo todo, incluido lo que querías decir."
  - type: truefalse
    id: cla-tr02-q2
    q: "Si Claude propone un cambio, es porque tu versión tenía un error."
    answer: false
    explain: "Muchas propuestas son cuestión de gusto, y a veces se equivoca o cambia el sentido. Pídele que separe los errores claros (faltas, concordancias) de las sugerencias de estilo."
  - type: choice
    id: cla-tr02-q3
    q: "Vas a pedir que revise un informe de tu trabajo con nombres de clientes y sus ventas. ¿Qué haces antes?"
    options: ["Lo pego tal cual: solo es para corregir la ortografía", "Cambio los nombres y las cifras sensibles por otros genéricos, y miro qué permite mi empresa", "Nada: Claude no lee el contenido cuando solo corrige"]
    answer: 1
    explain: "Para corregir la redacción no necesita los datos reales: «Cliente A» y «X €» sirven igual. Y si tu empresa tiene normas sobre herramientas de IA, cúmplelas. Claude sí lee todo lo que pegas, aunque solo le pidas corregir."
tips:
  - "Pide la revisión por capas: primero ortografía, luego claridad y al final tono. Es más fácil decidir."
  - "Pregunta por qué cuando no entiendas una corrección: así aprendes y no repites el error."
action:
  title: Revisa un texto tuyo con cambios marcados
  steps:
    - "Elige un texto corto que vayas a enviar o entregar (un párrafo o una página). Quita nombres y datos personales."
    - "Pega la primera petición de ejemplo de esta sesión con tu texto."
    - "Acepta o rechaza cada cambio de la tabla y monta tú la versión final."
  check: He revisado un texto mío con Claude decidiendo cada cambio
practice:
  task: "Eres enfermera y has escrito una hoja para pacientes sobre cómo prepararse para un análisis de sangre. Escribe la petición para que Claude la revise sin tocar las indicaciones."
  require: [publico, formato, limites]
  extra:
    - label: Pedir cada cambio con su motivo
      any: [motivo, explica cada, explicacion, por que, original, cambios marcados, marca cada]
      hint: "Pide los cambios a la vista: «Dame el texto original, la propuesta y el motivo de cada cambio»."
  sample: "Soy enfermera en un centro de salud y he escrito una hoja informativa sobre cómo prepararse para un análisis de sangre. Es para personas mayores, muchas con poca costumbre de leer. Revisa la ortografía y las frases confusas, pero no cambies las indicaciones (horas de ayuno, medicación, horario). Dame una tabla con tres columnas: texto original, propuesta y motivo. Separa los errores claros de las sugerencias de estilo. Texto: [pega aquí]"
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

Claude es un buen corrector: detecta faltas, frases liadas, repeticiones y tonos que pueden sentar mal. El problema es pedirle «corrígelo» a secas. Suele devolver **otro texto**, y en el camino puede cambiar matices: un «podría» que pasa a «hará», un dato que desaparece, una disculpa que no querías.

La solución es pedir correcciones **como haría un buen editor**, con algo parecido a un **control de cambios**: ver qué se quita, qué se añade y por qué.

Así ganas tres cosas:

- **Ves cada cambio** y decides si lo aceptas.
- **Aprendes**: la explicación te enseña la regla para la próxima vez.
- **Conservas tu voz**: aceptas lo que corrige errores y rechazas lo que solo cambia tu estilo.

Dile también **qué no debe tocar**: el contenido, las cifras, los términos técnicos de tu sector o tu forma de dirigirte al lector.

Recuerda que todo lo que pegas, Claude lo lee. Para corregir no necesita nombres reales ni datos de clientes: cámbialos por otros genéricos.

## En la práctica

1. Pega el texto y explica **para qué es** y **quién lo leerá**.
2. Di **qué revisar** (ortografía, claridad, tono) y **qué respetar**.
3. Pide el resultado en una **tabla o lista**, no reescrito.
4. Repasa cada fila. Si una propuesta no te convence, recházala o pide otra opción.

> Prueba: «Revisa este texto para la web de mi peluquería. Corrige faltas, frases confusas y repeticiones, pero no cambies el contenido ni los precios. Dame una tabla con tres columnas: texto original, propuesta y motivo. Separa los errores claros de las sugerencias de estilo. Texto: [pega aquí]»

> Prueba: «Soy maestra y este es el comunicado para las familias de mi clase. ¿Hay alguna frase que pueda sonar a reproche o que se entienda mal? Señálala, explica por qué y propón una alternativa más amable. No toques el resto.»

## Error frecuente

Copiar la versión corregida sin compararla con la tuya. Si no ves los cambios, no sabes si sigue diciendo lo que querías decir.
