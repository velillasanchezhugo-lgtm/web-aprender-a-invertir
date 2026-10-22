---
title: Tu flujo semanal con Claude
description: "Cierre del Nivel 1: diseña tu semana con Claude (qué haces tú, qué hace Claude y qué revisas), actualiza «Mi kit de Claude» y mira qué aprender después."
level: basico
track: cla-avanzado
order: 704
skills: [cla-agentes, cla-plantillas, cla-verificar]
terms: [agente-de-ia, tarea-programada, conector]
hook: "Ya sabes pedir bien, conectar tus apps y encargar tareas largas. Pero ¿qué parte de tu semana le das a Claude, y cuál no le darías nunca?"
takeaway: "Un buen flujo reparte papeles: Claude prepara, busca y redacta; tú decides, apruebas y revisas. Escríbelo en «Mi kit de Claude» y revísalo cada mes."
scenario:
  kind: producto
  label: Caso práctico
  title: La semana de Lorena
  body: "Lorena es fisioterapeuta autónoma en Pamplona. Su flujo: el lunes, Claude le resume la agenda y los correos; ella decide prioridades. El miércoles, Claude redacta la publicación de su web y ella la corrige. El viernes, Claude ordena los gastos de la semana en una tabla y ella la compara con el banco. Los datos de salud de sus pacientes nunca entran en el chat."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-av04-q1
    q: "Diseñas tu flujo semanal. ¿Qué reparto es más sensato?"
    options: ["Claude redacta los presupuestos y los envía solo a los clientes", "Claude prepara el borrador del presupuesto; tú compruebas precios y condiciones y lo envías", "Tú lo haces todo y Claude solo corrige faltas, por si acaso"]
    answer: 1
    explain: "Claude ahorra el trabajo de preparar; tú pones el criterio en lo que tiene consecuencias. Dejar que envíe solo tienta por rápido, pero un precio mal puesto lo pagas tú. No usarlo para nada también es desaprovecharlo."
  - type: choice
    id: cla-av04-q2
    q: "Tu flujo incluye un resumen automático cada lunes. Tras un mes, notas que nunca lo lees. ¿Qué haces?"
    options: ["Dejarlo: no molesta", "Cambiarlo para que sea útil o pausarlo", "Añadir otro resumen el miércoles"]
    answer: 1
    explain: "Un flujo se revisa: lo que no usas ocupa sitio y, si tiene acceso a tus datos, es un riesgo sin beneficio. Dejarlo tienta porque no cuesta nada, pero acumular automatismos olvidados es justo lo que hay que evitar."
  - type: truefalse
    id: cla-av04-q3
    q: "En «Mi kit de Claude» conviene apuntar también lo que nunca le darás a Claude, como datos de salud de terceros o contraseñas."
    answer: true
    explain: "Tus reglas de «nunca» son tan útiles como tus mejores peticiones: te evitan decidir con prisas."
tips:
  - "Revisa tu flujo una vez al mes: quita lo que no usas y añade lo que repites."
  - "Si una tarea sale mal dos veces, vuelve a hacerla a mano con Claude y ajusta la petición."
action:
  title: Escribe tu flujo y cierra tu kit
  steps:
    - "Copia la petición de ejemplo en Claude, completa el final con tu semana real (sin datos de otras personas) y envíala."
    - "Copia la tabla resultante en «Mi kit de Claude», junto a tus mejores peticiones."
    - "Añade tus reglas: qué conectores usas, qué nunca compartes y qué revisas siempre."
    - "Pon una fecha en tu calendario para revisarlo dentro de un mes."
  check: He escrito mi flujo semanal con Claude y he actualizado mi kit
practice:
  task: "Llevas las redes, los correos y los cobros de la academia de baile familiar. Escribe la petición para que Claude te ayude a repartir la semana: qué prepara él, qué haces tú y qué revisas."
  require: [contexto, formato, limites]
  extra:
    - label: Pedir qué revisar siempre
      any: [revisar, reviso, revisa, comprobar, compruebo]
      hint: "Pide una columna con lo que tienes que revisar siempre antes de usarlo."
  sample: "Llevo las redes sociales, los correos y los cobros de la academia de baile de mi familia. Cada semana publico tres veces, contesto unos 20 correos de familias y apunto los pagos en una hoja. Haz una tabla con cuatro columnas: tarea, qué puede preparar Claude, qué decido yo y qué tengo que revisar siempre. Marca las tareas en las que no conviene usarte y por qué. Te lo cuento sin datos de alumnos."
deeper: null
tool: plantillas
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda, anthropic-academy]
---

## La idea

Has llegado al final del Nivel 1. Ahora toca juntar las piezas en **tu flujo**: una forma de trabajar con Claude que repites cada semana. Para cada tarea, responde tres preguntas:

- **¿Qué hace Claude?** Preparar, buscar, resumir, redactar borradores, ordenar datos.
- **¿Qué haces tú?** Decidir, aprobar envíos y cambios, hablar con las personas.
- **¿Qué revisas?** Fechas, cifras, nombres, citas y todo lo que salga con tu nombre.

Y una cuarta lista, igual de importante: **lo que nunca le das**. Por ejemplo, contraseñas, datos de salud o bancarios de otras personas, o decisiones que deben tomar un médico, un abogado o un asesor.

Elige **pocas tareas**: dos o tres que repitas y en las que un error sea fácil de detectar. Usa la herramienta más simple que funcione: una plantilla antes que una habilidad, una petición a mano antes que una tarea programada.

Tu flujo va a **cambiar**: Claude añade funciones a menudo y tus tareas también cambian. Revísalo cada mes.

**¿Qué aprender después?** El **Nivel 2** profundiza en peticiones avanzadas, investigación y análisis, crear herramientas sin programar, conectar y automatizar, Claude en tu oficio y Claude en equipo. También hay cursos gratuitos en Anthropic Academy.

## En la práctica

1. Apunta las tareas que repites cada semana.
2. Para cada una, decide qué hace Claude, qué haces tú y qué revisas.
3. Guárdalo en «Mi kit de Claude» con tus mejores peticiones y tus reglas.

> Prueba: «Te voy a contar mi semana de trabajo. Ayúdame a hacer una tabla con cuatro columnas: tarea, qué puede preparar Claude, qué decido o hago yo, y qué tengo que revisar siempre. Señala las tareas en las que no conviene usarte y por qué. Mi semana es: …»

## Error frecuente

Intentar meter a Claude en todo desde el primer día. Empieza por dos tareas, consolídalas y crece desde ahí.
