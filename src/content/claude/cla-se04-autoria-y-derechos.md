---
title: Autoría y derechos
description: De quién es lo que escribe Claude, qué pasa al usar textos o imágenes de otros, cómo evitar el plagio y cuándo decir que has usado IA.
level: basico
track: cla-seguro
order: 604
skills: [cla-etica-normas, cla-escribir]
terms: [derechos-de-autor, plagio]
hook: "Claude te ha escrito un artículo estupendo para el blog de tu empresa. ¿Puedes firmarlo como tuyo? ¿Y si el profesor te pide un trabajo de clase?"
takeaway: Lo que publicas o entregas es responsabilidad tuya, lo haya escrito quien lo haya escrito. Respeta las obras de otros, cita lo que usas y di que usaste IA cuando las normas lo pidan o cuando el lector lo espere.
scenario:
  kind: producto
  label: Caso práctico
  title: El trabajo de Álex
  body: "Álex estudia un ciclo de FP y tiene que entregar un trabajo sobre energías renovables. Las normas del centro permiten usar IA para buscar ideas y corregir, pero piden indicarlo. Álex escribe el trabajo, pide a Claude que lo revise y añade al final una nota: «He usado un asistente de IA para revisar la redacción»."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-se04-q1
    q: "Irene entrega en clase un trabajo escrito casi entero por Claude. Las normas de la asignatura piden hacerlo tú y declarar el uso de IA. Ella no lo dice. ¿Qué ocurre?"
    options: ["Nada: el texto es nuevo, así que no es plagio", "Incumple las normas: presenta como propio un trabajo que no ha hecho", "Solo es un problema si el profesor usa un detector"]
    answer: 1
    explain: "Aunque el texto no copie a nadie, entregarlo como propio cuando las normas lo prohíben es una falta. Pensar en el detector tienta, pero la regla no depende de que te pillen."
  - type: truefalse
    id: cla-se04-q2
    q: "Puedes pegar en Claude el artículo de un periódico y publicar en tu web una versión reescrita sin citar la fuente."
    answer: false
    explain: "Una versión que sigue de cerca el original puede vulnerar sus derechos de autor, y no citarlo es presentar como tuyo el trabajo de otro. Cita la fuente o, mejor, escribe tu propio análisis."
  - type: choice
    id: cla-se04-q3
    q: "¿Quién responde de un error en un informe que has preparado con Claude y has enviado a tu jefe?"
    options: ["Anthropic", "Claude", "Tú"]
    answer: 2
    explain: "La herramienta no firma ni responde: tú eliges qué enviar. Por eso compensa revisar antes de entregar."
tips:
  - "Pide a Claude que te ayude con tus ideas y tu estructura, no que lo haga todo: así el trabajo sigue siendo tuyo."
  - "Si usas una imagen o un texto de otro, busca su licencia y cita al autor."
  - "Ten preparada una frase para declarar el uso de IA y guárdala en «Mi kit de Claude»."
action:
  title: Escribe tu frase de declaración
  steps:
    - "Piensa dónde usas Claude: trabajo, estudios o redes."
    - "Mira si tu empresa, tu centro o la web donde publicas tienen normas sobre IA."
    - "Escribe una frase corta para avisar, por ejemplo: «Texto revisado con ayuda de un asistente de IA»."
    - "Guárdala en «Mi kit de Claude»."
  check: He escrito mi frase para declarar el uso de IA y la he guardado
practice:
  task: "Has escrito un artículo para el blog de la inmobiliaria donde trabajas, con datos de un informe ajeno. Escribe la petición para que Claude te ayude a pulirlo sin que deje de ser tuyo."
  require: [contexto, limites]
  extra:
    - label: Pedir qué hay que citar
      any: [citar, cita, fuente, autor]
      hint: "Pregunta qué datos o ideas necesitan citar su fuente y cómo hacerlo."
    - label: Pedir la frase para declarar el uso de IA
      any: [declarar, aviso, uso de ia, he usado, asistente de ia]
      hint: "Pide una frase corta para declarar que has usado IA, si tu empresa o el lector lo esperan."
  sample: "Trabajo en una inmobiliaria de Málaga y he escrito un artículo para nuestro blog sobre cómo preparar un piso antes de venderlo. Uso dos datos de un informe del sector que no es nuestro. No lo reescribas entero: señala las frases poco claras y sugiere mejoras concretas, para que el texto siga siendo mío. Dime qué datos necesitan citar la fuente y cómo citarla. Al final, propón una frase corta para declarar que he usado un asistente de IA para revisar la redacción."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [anthropic-condiciones, claude-ayuda]
---

## La idea

Tres preguntas que conviene tener claras.

**1. ¿De quién es lo que genera Claude?**
Las condiciones de Anthropic dicen que te cede los derechos que pudiera tener sobre las respuestas. Pero en España la ley de propiedad intelectual protege las obras creadas por **personas**. Un texto hecho casi entero por una IA puede no tener derechos de autor que proteger. Cuanto más pones tú (ideas, estructura, cambios), más tuyo es. En cualquier caso, **la responsabilidad de lo que publicas es tuya**.

**2. ¿Puedo usar textos o imágenes de otros?**
Las obras ajenas tienen **derechos de autor**. Puedes pedir a Claude que te resuma un artículo para entenderlo, pero publicar ese contenido reescrito o una imagen ajena sin permiso puede vulnerarlos. Lo seguro: **citar** la fuente, usar contenido con licencia libre o crear el tuyo.

**3. ¿Es plagio?**
El **plagio** es presentar como propio lo que no lo es. Puede pasar de dos formas: si la IA reproduce un texto ajeno o si entregas como tuyo un trabajo hecho por la IA cuando las normas exigen hacerlo tú.

**¿Cuándo decir que usaste IA?**

- **En el trabajo**: según la política de tu empresa y siempre que el cliente lo espere.
- **En clase**: según las normas del centro o del profesor. Si no las hay, pregunta.
- **Al publicar**: muchas revistas, editoriales y webs lo piden. En algunos casos también lo exige la ley europea (lo verás en la sesión sobre la IA en España y Europa).

## En la práctica

Úsalo como ayudante, no como autor fantasma: tú pones el fondo y Claude te ayuda a pulirlo.

> Prueba: «Te paso el borrador que he escrito para mi blog. No lo reescribas entero: señálame las frases poco claras, sugiere mejoras concretas y dime si alguna idea necesita citar una fuente.»

Si vas a publicar algo con datos de otros, pídele: «Dime qué partes de este texto vienen de una fuente y cómo citarla».

## Error frecuente

Creer que, si Claude lo ha «reescrito con otras palabras», ya no es de nadie. Una copia disfrazada sigue siendo una copia: cita siempre de dónde sale.
