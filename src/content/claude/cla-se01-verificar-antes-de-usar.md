---
title: Verificar antes de usar
description: Un método sencillo para comprobar lo que te dice Claude según lo que te juegas, qué revisar primero y cuándo hace falta un profesional.
level: basico
track: cla-seguro
order: 601
skills: [cla-verificar, cla-limites]
terms: [alucinacion, fecha-de-corte]
hook: "Claude te ha preparado una reclamación para la tienda donde compraste un portátil que ya no funciona, con un artículo de la ley de consumidores y un plazo de garantía. Suena muy seguro. ¿La envías tal cual?"
takeaway: Cuanto más te juegas, más compruebas. Las cifras, las fechas, las citas y las leyes se verifican siempre en una fuente fiable antes de usarlas, y en salud, derecho o dinero decide un profesional.
scenario:
  kind: operacion
  label: Caso práctico
  title: La reclamación de Teresa
  body: "Teresa pide a Claude una reclamación para la tienda donde compró un portátil que dejó de funcionar a los 18 meses. El borrador es bueno, pero cita un artículo concreto de la ley de consumidores y un plazo de garantía. Teresa le pide que marque lo que no tiene claro, busca el artículo en el BOE y descubre que el número no coincide. Corrige esa línea y envía el resto."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-se01-q1
    q: "Claude te ha hecho tres cosas: ideas para el cumpleaños de tu hija, un resumen de un informe que vas a presentar al jefe y la dosis de un medicamento para tu padre. ¿Qué haces con la dosis?"
    options: ["La compruebo yo con otra IA", "Se la consulto al médico o al farmacéutico", "La uso si Claude dice que está seguro"]
    answer: 1
    explain: "En salud el error puede ser grave, así que decide un profesional. Preguntar a otra IA tienta porque es rápido, pero dos IA pueden equivocarse igual. Y la seguridad con la que suena una respuesta no dice nada de si es correcta."
  - type: truefalse
    id: cla-se01-q2
    q: "Si Claude da una fuente con enlace, el dato ya está comprobado."
    answer: false
    explain: "Abre el enlace y busca el dato. A veces la fuente existe pero no dice eso, o está desactualizada. Tienta fiarse porque el enlace da apariencia de rigor."
  - type: choice
    id: cla-se01-q3
    q: "¿Qué tienes que comprobar primero en un texto de Claude que vas a enviar a un cliente?"
    options: ["Las comas y el tono", "Las cifras, las fechas, los nombres y las citas", "Que no sea demasiado largo"]
    answer: 1
    explain: "Los datos concretos son donde más se equivoca y donde un error más te cuesta. El tono importa, pero un precio o una fecha mal puestos hacen más daño."
tips:
  - "Pide las cifras y las fuentes en una tabla aparte: así las revisas de un vistazo."
  - "Si el tema cambia a menudo (precios, normas, plazos), pídele que busque en la web o compruébalo tú en la página oficial."
action:
  title: Prueba la petición «señala lo dudoso»
  steps:
    - "Abre una respuesta reciente de Claude con datos que vayas a usar."
    - "Pídele: «Señala qué partes de tu respuesta podrían ser incorrectas y cómo las compruebo»."
    - "Comprueba en una fuente oficial el dato más importante."
    - "Guarda la petición en «Mi kit de Claude»."
  check: He pedido a Claude que señale lo dudoso y he comprobado el dato más importante
practice:
  task: "Vas a comprar un coche de segunda mano a un particular y quieres hacer tú el cambio de titular. Escribe la petición para que Claude te lo explique y te diga qué datos comprobar y dónde."
  require: [verificar, formato]
  extra:
    - label: Pedir que señale lo dudoso
      any: [seguridad, seguro, dudoso, dudas, podria ser incorrecto, puede haber cambiado]
      hint: "Pide que diga cuánta seguridad tiene en cada dato o qué puede haber cambiado."
    - label: Pedir dónde comprobarlo
      any: [oficial, fuente original, donde comprobar, donde puedo comprobar, comprobarlo]
      hint: "Pide en qué web oficial puedes comprobar cada dato."
  sample: "Voy a comprar un coche de segunda mano a un particular y quiero hacer yo el cambio de titular. Explícame los pasos, los documentos y los plazos en una lista numerada. Al final, haz una tabla con cada dato concreto (plazos, tasas, documentos), cita la fuente de cada uno, dime cuánta seguridad tienes y en qué web oficial puedo comprobarlo. Si algo puede haber cambiado este año, avísame en lugar de darlo por seguro."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda, anthropic-condiciones]
---

## La idea

Claude acierta mucho, pero puede **inventarse** datos con total seguridad (lo que se llama una alucinación). Además, su conocimiento llega hasta una fecha, así que lo más reciente puede no saberlo. Las propias condiciones de uso de Claude dicen que no te fíes de sus respuestas sin confirmarlas.

No hace falta comprobarlo todo igual. Usa una regla: **cuanto más te juegas, más compruebas.**

- **Riesgo bajo** (ideas, un primer borrador, una receta): basta con leerlo con atención.
- **Riesgo medio** (un informe para el trabajo, un correo a un cliente): comprueba cada dato concreto.
- **Riesgo alto** (salud, leyes, impuestos, dinero, contratos): compruébalo en la fuente oficial y **consulta a un profesional** antes de decidir.

Qué revisar, por orden:

1. **Cifras y fechas**: precios, plazos, porcentajes.
2. **Citas y nombres**: quién dijo qué, artículos de leyes, títulos de libros.
3. **Fuentes**: abre el enlace y mira si de verdad dice eso.
4. **Cálculos**: rehazlos con una calculadora o una hoja de cálculo.

Un truco que ayuda: **pídele que señale él mismo lo dudoso**. No es infalible, pero te dice por dónde empezar.

## En la práctica

Cuando la respuesta vaya a salir de tu pantalla (a un cliente, a tu jefe, a un trámite), haz una pasada de revisión con Claude y otra tuya.

> Prueba: «Revisa tu respuesta anterior. Haz una tabla con cada dato concreto (cifras, fechas, nombres, leyes), dime de dónde sale, cuánta seguridad tienes en cada uno y en qué web oficial puedo comprobarlo.»

Después:

- Busca el dato principal en la fuente original: el BOE, la web de la Agencia Tributaria, la de tu banco o la del organismo que toque.
- Si Claude usó la búsqueda web, abre al menos dos enlaces.
- Si es una decisión de salud, legal o de dinero, lleva lo que has preparado a un profesional. Te ahorrará tiempo en la consulta, pero no la sustituye.

## Error frecuente

Fiarse porque la respuesta suena segura y bien escrita. El tono no indica si es verdad: un dato inventado suena igual de convincente que uno real.
