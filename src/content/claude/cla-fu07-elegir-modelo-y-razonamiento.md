---
title: Elegir modelo y «pensar más»
description: Qué familias de modelos tiene Claude, qué son el razonamiento y el nivel de esfuerzo, y cuándo compensa ir rápido o pedir que piense más.
level: basico
track: cla-funciones
order: 207
skills: [cla-modelos-modos]
terms: [razonamiento-extendido, modelo-de-lenguaje]
hook: "Junto al botón de enviar ves un nombre de modelo y unas opciones de esfuerzo. ¿Lo cambias o lo dejas como está? ¿Para qué sirve pedirle que piense más?"
takeaway: Para el día a día, el modelo y el esfuerzo que vienen por defecto bastan. Sube el esfuerzo o elige un modelo más capaz solo para tareas difíciles, y bájalo para tareas sencillas y repetitivas.
scenario:
  kind: producto
  label: Caso práctico
  title: El horario de Aitana
  body: "Aitana tiene que cuadrar los turnos de seis personas en una tienda con muchas condiciones: nadie trabaja más de cinco días seguidos, dos personas no pueden coincidir y los sábados hacen falta tres. Con el esfuerzo bajo, la respuesta incumple una regla. Sube el nivel de esfuerzo, vuelve a pedirlo y el horario sale bien. Aun así, lo revisa persona por persona."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-fu07-q1
    q: "Samuel quiere que Claude le corrija las faltas de ortografía de veinte frases cortas. ¿Qué elige?"
    options: ["El modelo más potente con el esfuerzo máximo", "Un modelo rápido o un esfuerzo bajo", "Da igual: todos gastan lo mismo"]
    answer: 1
    explain: "Es una tarea sencilla: ir rápido basta y gasta menos de tu límite. El modelo más potente tienta porque «será mejor», pero tarda más y consume más uso sin mejorar nada aquí."
  - type: truefalse
    id: cla-fu07-q2
    q: "Subir el nivel de esfuerzo hace que Claude ya no se equivoque."
    answer: false
    explain: "Pensar más mejora las tareas difíciles, pero Claude puede seguir equivocándose. Tienta confiar más porque «lo ha pensado», pero hay que revisar igual el resultado."
  - type: choice
    id: cla-fu07-q3
    q: "¿En cuál de estas tareas compensa más que Claude piense más?"
    options: ["Saludar a un cliente por correo", "Comparar tres ofertas de hipoteca con condiciones distintas y explicarte las diferencias", "Traducir «buenos días» al francés"]
    answer: 1
    explain: "Comparar varias condiciones a la vez es un problema de muchos pasos: ahí el razonamiento ayuda. Recuerda que Claude te explica las diferencias, pero la decisión y la confirmación con el banco son tuyas."
tips:
  - "Si una respuesta sale floja en algo difícil, prueba primero a dar más contexto; si no basta, sube el esfuerzo."
  - "Los nombres y números de los modelos cambian cada pocos meses: fíjate en la familia, no en la versión."
  - "Si te quedas sin uso a menudo, baja el esfuerzo para las tareas rutinarias."
action:
  title: Compara dos niveles de esfuerzo
  steps:
    - "Escribe una petición con varias condiciones (un menú semanal para cuatro personas, sin gluten y por menos de 80 €)."
    - "Pídela con el esfuerzo por defecto y luego con uno más alto."
    - "Compara: ¿cumplen todas las condiciones?, ¿cuál tardó más? Anota en «Mi kit de Claude» cuándo te compensa subirlo."
  check: He comparado la misma petición con dos niveles de esfuerzo
practice:
  task: "Organizas la excursión de fin de curso de tu grupo con muchas condiciones: horario, presupuesto y accesibilidad. Escribe la petición para que Claude piense con calma y compruebe que cumple todo."
  require: [contexto, formato, limites]
  extra:
    - label: "Pedir que piense con calma"
      any: ["piensa", "paso a paso", "con calma", "razona"]
      hint: "Pide que piense con calma o paso a paso: es una tarea con muchas condiciones."
    - label: "Pedir que compruebe las condiciones"
      any: ["comprueba", "verifica", "revisa que", "se cumplen"]
      hint: "Pide que compruebe al final, una por una, que se cumplen todas las condiciones."
  sample: "Soy tutora de un grupo de 25 alumnos de 4.º de ESO y organizo la excursión de fin de curso a Toledo desde Madrid. Condiciones: salir después de las 8:30, volver antes de las 19:00, máximo 30 € por alumno y que todo sea accesible, porque un alumno va en silla de ruedas. Piensa con calma y dame un plan por horas en una tabla. No incluyas actividades sin precio aproximado. Al final, comprueba una por una que se cumplen todas las condiciones y dime cuál es la más dudosa."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda, claude-docs]
---

## La idea

Claude no es un único **modelo de lenguaje**: es una familia de modelos. Hoy hay cuatro familias, de más capaz a más rápida:

- **Fable**: la más potente, para problemas muy exigentes. Es la más lenta.
- **Opus**: muy capaz, para trabajo largo y complejo.
- **Sonnet**: el equilibrio entre rapidez e inteligencia.
- **Haiku**: la más rápida, para tareas sencillas.

Cada familia tiene versiones con número que se renuevan a menudo, y Anthropic retira las antiguas. Por eso no merece la pena aprenderse los números. Qué modelos puedes elegir **depende de tu plan**.

Además del modelo, hay dos ajustes:

- **Nivel de esfuerzo.** Cuánto se esfuerza Claude en cada respuesta: de bajo a máximo. Más esfuerzo es más calidad en lo difícil, pero tarda más y **gasta tu límite de uso antes**.
- **Razonamiento extendido** («pensar»). Claude razona paso a paso antes de contestar y te deja ver ese razonamiento en una sección desplegable. En los modelos más nuevos viene siempre activado.

**Cuándo compensa cada cosa:**

- **Rápido** (esfuerzo bajo o modelo rápido): corregir, resumir algo corto, traducir, reformular.
- **Por defecto**: la mayoría de tareas del día a día.
- **Pensar más** (esfuerzo alto o modelo más capaz): problemas con muchas condiciones, comparaciones, planes con varios pasos, textos largos y delicados.

## En la práctica

1. Busca el selector de modelo junto al botón de enviar. Ahí suelen estar también el esfuerzo y el razonamiento.
2. Empieza siempre con lo que viene por defecto.
3. Si la respuesta falla en algo difícil, **añade contexto** y, si no basta, sube el esfuerzo. Puedes cambiarlo en mitad del chat.

> Prueba: «Tengo que organizar los turnos de seis personas en una tienda de lunes a sábado. Reglas: nadie trabaja más de cinco días, los sábados hacen falta tres personas y Luis y Marta no pueden coincidir. Piensa con calma, dame una tabla y comprueba al final que se cumplen todas las reglas».

## Error frecuente

Ponerlo todo al máximo «por si acaso». Gastas tu uso más deprisa y esperas más para tareas que no lo necesitan.
