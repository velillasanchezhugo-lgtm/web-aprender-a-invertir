---
title: Practicar para un examen
description: "Usa tus apuntes para que Claude te prepare tests, tarjetas, resúmenes y un plan de estudio, y compruébalo todo con el temario oficial."
level: basico
track: cla-aprender
order: 403
skills: [cla-aprender, cla-archivos]
terms: [recuperacion-activa, proyecto-de-claude]
hook: "Quedan tres semanas para el examen del carné de conducir y tienes un manual enorme. ¿Cómo te ayuda Claude sin que acabes estudiando cosas que no entran?"
takeaway: Sube tus apuntes y pide que te pregunte a partir de ellos, no de memoria. Practicar recordando enseña más que releer, y el temario oficial manda siempre.
scenario:
  kind: operacion
  label: Caso práctico
  title: El teórico de Yeray
  body: "Yeray se examina del teórico del carné de conducir. Sube a Claude sus apuntes del tema de señales y prioridad y le pide un test de diez preguntas basado solo en ese texto. Falla tres. Pide que le explique esos fallos y, dos días después, otro test solo con lo que falló. Al repasar con el material oficial de la DGT ve que una explicación de Claude daba un límite de velocidad que ya no está vigente."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-ap03-q1
    q: "Sofía estudia Historia para la Selectividad. ¿Qué petición le da preguntas más fiables?"
    options: ["«Hazme un test de Historia de España»", "Subir sus apuntes del tema y pedir: «Hazme un test de 10 preguntas usando solo este documento. Si algo no está, no lo preguntes»", "«Dime qué va a caer en el examen»"]
    answer: 1
    explain: "Basarse en sus apuntes hace que las preguntas sigan lo que ella estudia y reduce los errores. Sin documento, Claude usa lo que sabe en general, que puede no coincidir con su temario. Nadie puede saber qué caerá."
  - type: truefalse
    id: cla-ap03-q2
    q: "Responder a tests y tarjetas suele fijar mejor lo aprendido que releer los apuntes varias veces."
    answer: true
    explain: "Es la recuperación activa: obligarte a recordar sin mirar refuerza la memoria. Releer da sensación de dominio, pero se olvida antes."
  - type: choice
    id: cla-ap03-q3
    q: "Claude te ha hecho un resumen del tema 5 de tus oposiciones. ¿Qué haces antes de estudiarlo?"
    options: ["Compararlo con el temario oficial y tus apuntes para ver si falta algo o hay errores", "Estudiarlo tal cual, porque lo ha hecho a partir de tus apuntes", "Borrar los apuntes, ya no hacen falta"]
    answer: 0
    explain: "Un resumen puede dejarse algo importante o malinterpretar un detalle. Tienta fiarse porque parte de tus apuntes, pero el temario oficial es la referencia del examen."
tips:
  - "Crea un proyecto por asignatura con tus apuntes: así no tienes que subirlos en cada chat."
  - "Sube tus propios apuntes. Con materiales de academias o de otras personas, comprueba que puedes usarlos."
action:
  title: Hazte un test de tus apuntes
  steps:
    - "Elige unos apuntes tuyos (de clase, de un curso o del trabajo) y súbelos a un chat."
    - "Pide un test de cinco preguntas usando solo ese documento y respóndelo sin mirar."
    - "Pide la explicación de los fallos y apunta cuándo repetirás el test."
  check: He hecho un test con Claude a partir de mis apuntes
practice:
  task: "Vas a examinarte del curso de manipulador de alimentos y tienes los apuntes en PDF. Escribe la petición para que Claude te haga un test usando solo ese documento."
  require: [limites, formato]
  extra:
    - label: "Basarse en tu documento"
      any: ["documento", "apuntes", "pdf", "adjunto", "este texto", "temario"]
      hint: "Di de dónde deben salir las preguntas: «usando solo lo que pone en el documento»."
    - label: "De una en una y con corrección"
      any: ["de una en una", "una a una", "espera a que responda", "cada fallo", "mis fallos", "mis errores", "corrige"]
      hint: "Pide que pregunte de una en una y te explique cada fallo."
  sample: "Te adjunto el PDF de apuntes del curso de manipulador de alimentos que hago para trabajar en un comedor escolar. Hazme un test de 10 preguntas de opción múltiple, de una en una, usando solo lo que pone en el documento. Si algo no aparece, no lo preguntes. Espera a que responda antes de pasar a la siguiente y explícame cada fallo en dos frases. Al final, dime qué tres puntos debo repasar."
deeper: null
tool: plantillas
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda]
---

## La idea

Claude es un buen compañero de estudio si lo usas para **practicar**, no solo para leer resúmenes:

- **Tests**: preguntas de opción múltiple o de respuesta corta. Pide la corrección con explicación.
- **Tarjetas**: una pregunta por un lado y la respuesta por otro, para repasar en ratos sueltos.
- **Resúmenes y esquemas**: útiles para tener una visión general, no para sustituir el estudio.
- **Plan de estudio**: repartir los temas en las semanas que quedan, con repasos.

La clave es la **recuperación activa**: intentar recordar sin mirar. Un test o unas tarjetas te obligan a sacar la información de la memoria, y eso fija mucho más que releer.

**Usa tus apuntes como base.** Puedes adjuntar archivos al chat, como PDF o documentos. Si pides que las preguntas salgan **solo de ese documento**, se ajustan a lo que estudias y hay menos riesgo de errores. Si vas a usarlos muchas veces, un **proyecto de Claude** guarda los archivos y las instrucciones de una asignatura.

**El temario oficial manda.** Claude puede equivocarse, mezclar normas antiguas o dejarse algo. Compara siempre con el temario de tu examen, tu profesor o la convocatoria.

## En la práctica

Adjunta tus apuntes y escribe:

> Prueba: «Con este documento, hazme un test de 10 preguntas de opción múltiple, de una en una. Usa solo lo que pone aquí. Espera a que responda antes de pasar a la siguiente y explícame cada fallo. Al final, dime qué tres puntos debo repasar.»

Para el plan:

> «Mi examen es el [FECHA]. Tengo estos [N] temas y puedo estudiar una hora al día entre semana. Hazme un plan por semanas en una tabla, con repasos de los temas que más me cuesten.»

## Error frecuente

Estudiar solo los resúmenes de Claude. Si un detalle está mal o falta, lo aprenderás mal: el resumen te orienta, tus apuntes y el temario son la referencia.
