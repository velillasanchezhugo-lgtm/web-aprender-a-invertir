---
title: La IA en España y Europa
description: Lo que el Reglamento europeo de IA pide a quien usa IA o a una pequeña empresa, qué hay que avisar, desde cuándo y qué organismos vigilan en España.
level: basico
track: cla-seguro
order: 606
skills: [cla-etica-normas, cla-empresa-datos]
terms: [reglamento-de-ia, alfabetizacion-en-ia, deepfake, rgpd]
hook: "Tu tienda quiere usar IA para los textos de la web y un vídeo con una voz artificial. ¿Te afecta alguna ley?"
takeaway: Si tu organización usa IA, tiene que tomar medidas para que su gente sepa usarla. Y si publicas imágenes, audios o vídeos hechos con IA que parecen reales, tienes que decir que son artificiales.
scenario:
  kind: empresa
  label: Caso práctico
  title: La academia de Inés
  body: "Inés tiene una academia de idiomas con seis profesores que usan Claude. Organiza una sesión de una hora sobre qué hacer y qué no, y lo resume en una norma de una página: comprobar, no subir datos de alumnos y avisar del uso de IA."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-se06-q1
    q: "Óscar tiene una gestoría de cuatro personas y todos usan IA en el trabajo. ¿Qué le pide el Reglamento europeo de IA en primer lugar?"
    options: ["Nada: solo afecta a las empresas que fabrican IA", "Tomar medidas para que su equipo sepa usar la IA con criterio", "Pedir permiso a la AESIA antes de usar un asistente"]
    answer: 1
    explain: "La alfabetización en IA también afecta a quien la usa en su organización. Pensar que solo afecta a los fabricantes tienta, pero no es así. Y no hace falta pedir permiso para usar un asistente."
  - type: truefalse
    id: cla-se06-q2
    q: "Tu tienda publica en redes un anuncio hecho con IA en el que un famoso real parece recomendar tus productos. Tiene que avisar de que el vídeo es artificial."
    answer: true
    explain: "Es un deepfake publicado por una empresa, y el Reglamento exige avisar desde el 2 de agosto de 2026. Además, usar la imagen de un famoso sin su permiso vulnera sus derechos, avises o no."
  - type: choice
    id: cla-se06-q3
    q: "Un cliente se queja de que tu empresa pegó sus datos personales en una IA sin permiso. ¿Qué organismo vigila en España la protección de esos datos?"
    options: ["La AEPD (Agencia Española de Protección de Datos)", "La AESIA", "Anthropic"]
    answer: 0
    explain: "Los datos personales los vigila la AEPD, también con IA de por medio. La AESIA tienta por el nombre, pero se centra en supervisar la IA."
tips:
  - "Una norma interna de una página (qué se puede usar, qué datos no, cuándo avisar) cumple mejor que un manual que nadie lee."
  - "Las fechas y los detalles del Reglamento han cambiado ya una vez: consulta EUR-Lex o la web de la AESIA antes de decidir."
action:
  title: Escribe tus tres reglas de uso
  steps:
    - "Pide a Claude un borrador de norma de uso de IA de una página para tu equipo o para ti."
    - "Revisa que incluya: comprobar lo importante, no subir datos personales y avisar del contenido generado."
    - "Guarda la versión final en «Mi kit de Claude»."
  check: He escrito mis reglas de uso de IA y las he guardado en mi kit
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [reglamento-ia, aepd-guias]
---

## La idea

El **Reglamento europeo de IA** (Reglamento UE 2024/1689) pone normas a la inteligencia artificial según el riesgo de cada uso. Casi todo va dirigido a quien **fabrica** IA o la usa para cosas delicadas (contratar, conceder créditos). A un usuario o a una pequeña empresa le afectan sobre todo **dos cosas**:

**1. Alfabetización en IA.** Las organizaciones que usan IA deben tomar medidas para que su personal sepa usarla: qué hace, en qué falla, qué riesgos tiene. Se aplica desde el **2 de febrero de 2025**. Una reforma de julio de 2026 (Reglamento UE 2026/1744) suavizó la redacción: pide **tomar medidas**, no garantizar un nivel concreto a cada persona.

**2. Transparencia.** Desde el **2 de agosto de 2026**, para quien usa IA en su trabajo o su empresa (el uso puramente personal queda fuera de estas obligaciones):

- Si publicas un **deepfake** (imagen, audio o vídeo hecho con IA que parece real), tienes que avisar de que es artificial. Hay matices para obras claramente artísticas o de humor.
- Si publicas textos hechos con IA para informar al público de asuntos de interés general, también hay que avisar, salvo que una persona los revise y responda de ellos.
- Los chatbots deben dejar claro que hablas con una IA.

Las obligaciones de alto riesgo se retrasaron a **2027 y 2028**.

Y sigue mandando el **RGPD**, la ley europea de protección de datos personales.

## En la práctica

En España, dos organismos en una línea:

- **AEPD** (Agencia Española de Protección de Datos): vigila el uso de datos personales, también con IA, y tiene guías gratuitas.
- **AESIA** (Agencia Española de Supervisión de la Inteligencia Artificial): organismo público con sede en A Coruña, creado para supervisar la IA en España.

> Prueba: «Redacta una norma de uso de IA de una página para una empresa de 5 personas en España. Incluye: qué tareas se pueden hacer con IA, qué datos no se suben nunca, cómo se comprueba lo importante y cuándo avisamos de que un contenido está hecho con IA. Lenguaje sencillo, sin tecnicismos.»

## Error frecuente

Pensar que el Reglamento solo afecta a las grandes tecnológicas. Si usas IA en tu empresa, también va contigo.
