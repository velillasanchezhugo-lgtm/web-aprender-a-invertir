---
title: Cuándo fiarte (y cuándo no)
description: Por qué Claude puede inventarse datos con seguridad, qué es la fecha de corte, cuándo usar la búsqueda web y en qué temas hay que ir a un profesional.
level: cero
track: cla-cero
order: 5
skills: [cla-limites, cla-verificar]
terms: [alucinacion, fecha-de-corte]
hook: "Claude te da una cifra, el nombre de una ley y hasta un enlace. Todo suena perfecto. ¿Cómo sabes si es verdad?"
takeaway: Claude puede inventarse datos, citas y fuentes con total seguridad, y no sabe lo que pasó después de su fecha de corte. Comprueba en la fuente original todo lo que vayas a usar, y en salud, derecho o dinero, consulta a un profesional.
scenario:
  kind: noticia
  label: Caso práctico
  title: El trabajo de clase de Pablo
  body: "Pablo pide a Claude datos sobre una ayuda pública para jóvenes. Recibe una cuantía, un plazo y un artículo de una ley. En la web oficial ve que la cuantía es de una convocatoria antigua y que el artículo no dice eso."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-c05-q1
    q: "Pablo tiene que entregar mañana su trabajo con los datos de la ayuda que le dio Claude. ¿Qué hace primero?"
    options: ["Entregarlo: la respuesta incluía el número del artículo, así que es fiable", "Pedirle a Claude que confirme que los datos son correctos", "Buscar la ayuda en la web oficial del organismo y comprobar cuantía, plazo y artículo"]
    answer: 2
    explain: "Solo la fuente original confirma el dato. Preguntarle a Claude si está seguro tienta, pero puede volver a contestar con la misma seguridad, porque genera texto plausible, no comprueba hechos."
  - type: truefalse
    id: cla-c05-q2
    q: "Si Claude te da un enlace o el título de un estudio, esa fuente existe y dice lo que él resume."
    answer: false
    explain: "Las alucinaciones pueden incluir fuentes, títulos y enlaces que no existen, o que existen pero no dicen eso. Tienta fiarse porque una fuente «da seriedad», pero hay que abrirla y leerla."
  - type: choice
    id: cla-c05-q3
    q: "Elena tiene un dolor en el pecho que no se le pasa desde esta mañana. ¿Qué papel tiene Claude?"
    options: ["Ninguno ahora: debe llamar al 112 o ir a urgencias", "Pedirle un diagnóstico para decidir si va al médico", "Preguntarle qué pastilla tomar mientras espera"]
    answer: 0
    explain: "Ante un posible problema de salud urgente, la decisión es de un profesional, y ya. Claude puede servir después para entender un informe o preparar preguntas para el médico. Pedirle un diagnóstico tienta por rapidez, pero puede equivocarse y retrasar algo grave."
tips:
  - "Para trámites, impuestos o ayudas, la única fuente válida es la web del organismo (por ejemplo, la sede de la Agencia Tributaria o la de tu comunidad)."
  - "Pide que separe lo seguro de lo dudoso: «Marca lo que no puedas confirmar». No sustituye a comprobar, pero te dice por dónde empezar."
action:
  title: Caza una fuente
  steps:
    - "Pide a Claude que busque en la web un dato reciente que te interese (por ejemplo, el plazo de un trámite) y que te diga de dónde lo saca."
    - "Abre el enlace que te da y comprueba si dice exactamente lo mismo."
    - "Apunta en tu nota de «Mi kit de Claude» la regla: «Lo que voy a usar, lo compruebo en la fuente»."
  check: He comprobado en la fuente original un dato que me dio Claude
practice:
  task: "Tienes que renovar el título de familia numerosa y no sabes qué papeles piden en tu comunidad. Escribe la petición para que Claude lo busque en la web y te dé la fuente oficial."
  require: [verificar]
  extra:
    - label: Pedir que busque en la web
      any: [busca, buscar, búsqueda, internet, en la web]
      hint: "Para datos que cambian, pide que lo busque en la web: «Busca en la web…»."
  sample: "Busca en la web qué documentos hacen falta para renovar el título de familia numerosa en la Comunidad de Madrid. Dame una lista corta con cada documento y el enlace a la página oficial de donde lo sacas. Si no estás seguro de algo o puede estar desactualizado, dímelo y no lo rellenes."
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

Claude escribe con la misma seguridad cuando acierta que cuando se equivoca. Hay dos motivos principales de error.

**1. Las alucinaciones.** Una **alucinación** es cuando la IA se inventa algo y lo dice como si fuera cierto: una cifra, una fecha, una cita, el artículo de una ley o incluso una fuente con su enlace. Pasa porque Claude genera el texto que **parece** correcto, no consulta una lista de verdades.

**2. La fecha de corte.** Claude aprendió de textos que llegan hasta una fecha: su **fecha de corte del conocimiento**. Lo que pasó después no lo sabe. Puede darte como actual un precio, una norma o una ayuda que ya cambió.

**Qué hacer:**

- Para datos **recientes** (precios, plazos, noticias, normas), usa la **búsqueda web**: Claude consulta internet y te da enlaces. Está en el plan gratuito y de pago.
- **Pide fuentes y ábrelas.** Una fuente que no has abierto no cuenta.
- **Comprueba en la fuente original** todo lo que vayas a usar: entregar, firmar, pagar o enviar.

**Salud, derecho y dinero: siempre un profesional.** Claude puede ayudarte a **entender** un informe médico, un contrato o una factura, y a preparar preguntas. Pero la decisión, en estos temas, se toma con un médico, un abogado o un asesor. Las propias condiciones de uso advierten de que las respuestas pueden contener errores.

## En la práctica

Según tu versión de la aplicación, la búsqueda web es un interruptor del menú «+» del chat o no tiene interruptor y Claude busca solo cuando hace falta. En los dos casos, lo más seguro es pedirlo por escrito («busca en la web…») y pedir las fuentes.

> Prueba: «Busca en la web el plazo para presentar la declaración de la renta este año en España. Dame solo la respuesta corta y el enlace a la página oficial de la Agencia Tributaria de donde lo sacas».

## Error frecuente

Preguntarle a Claude «¿estás seguro?» y quedarse tranquilo con su «sí». La comprobación se hace fuera de la conversación.
