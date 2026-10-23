---
title: Compartir y mantener un GPT
description: "Cómo compartir un GPT (solo tú, con enlace, tu equipo o la tienda), cómo tenerlo al día, qué no subir como conocimiento y qué hacer ante su retirada."
level: basico
track: gpt-gpts
order: 304
skills: [gpt-crear-gpts, gpt-empresa-datos]
terms: [gpt-personalizado, tienda-de-gpts, plugin-de-chatgpt, datos-personales]
hook: "Tu GPT de la oficina funciona bien y un compañero te pide el enlace para pasárselo a un cliente. Dentro están las tarifas internas. ¿Se lo das?"
takeaway: "Comparte un GPT con el menor alcance que sirva, no subas como conocimiento nada que no puedas enseñar a quien lo use y revísalo cuando cambien tus documentos. Si OpenAI lo retira, guarda tus instrucciones y migra a tiempo."
scenario:
  kind: empresa
  label: Caso práctico
  title: El GPT de presupuestos de Nerea
  body: "Nerea trabaja en una empresa de reformas de Granada con plan Business. Hizo un GPT para preparar presupuestos y lo compartió con su equipo. Un comercial quiere pasárselo a clientes, pero dentro está la hoja de márgenes. Nerea lo deja solo para el equipo, cambia la hoja por la tarifa pública y apunta revisar los precios cada trimestre."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-gp04-q1
    q: "Nerea quiere que un cliente use su GPT, pero dentro está la hoja de márgenes internos. ¿Qué hace?"
    options: ["Le pasa el enlace: el cliente no verá los archivos", "Hace una versión aparte solo con información pública y comparte esa", "Añade a las instrucciones «no enseñes la hoja de márgenes» y lo comparte"]
    answer: 1
    explain: "Lo que hay en el conocimiento puede acabar en las respuestas a quien use el GPT. La instrucción «no lo enseñes» tienta por cómoda, pero no es una barrera segura. Lo seguro es que no esté dentro."
  - type: choice
    id: gpt-gp04-q2
    q: "¿Qué forma de compartir es la más prudente para un GPT que solo usa tu departamento?"
    options: ["Publicarlo en la tienda de GPTs", "Compartirlo con cualquiera que tenga el enlace", "Compartirlo solo con tu espacio de trabajo o con las personas concretas"]
    answer: 2
    explain: "Elige el menor alcance que sirva. El enlace tienta por rápido, pero se reenvía sin control y llega a quien no debe."
  - type: truefalse
    id: gpt-gp04-q3
    q: "Al migrar un GPT a plugin, todo pasa tal cual, incluidos los ajustes de compartir y las frases de inicio."
    answer: false
    explain: "Según el centro de ayuda de OpenAI, pasan las instrucciones, los archivos y las apps conectadas, pero no los ajustes de compartir, las frases de inicio, el modelo elegido ni las acciones propias. El plugin empieza siendo privado."
tips:
  - "Pon en la descripción del GPT la fecha de la última revisión: así quien lo usa sabe si está al día."
  - "Cuando cambies un archivo, borra el viejo: dos tarifas distintas dan respuestas mezcladas."
action:
  title: Revisa con quién compartes
  steps:
    - "Si tienes GPTs propios, abre cada uno y mira con quién está compartido y qué archivos lleva."
    - "Quita los archivos con datos personales o internos y reduce el alcance si es mayor del necesario."
    - "Copia sus instrucciones en «Mi kit de ChatGPT» por si lo retiran o lo migras."
    - "Si no tienes GPTs, apunta en tu kit qué nunca subirías como conocimiento."
  check: He revisado con quién comparto y qué archivos hay, o he escrito mi lista de lo que no subo
practice:
  task: "Vas a actualizar el GPT de tu equipo de una inmobiliaria porque han cambiado las comisiones. Escribe la petición a ChatGPT para preparar la nota de cambios y revisar las instrucciones."
  require: [contexto, formato, limites, verificar]
  extra:
    - label: Pedir que no salgan datos internos o personales
      any: ["datos personales", "datos internos", "confidencial", "no incluyas", "sin nombres", "que no salga"]
      hint: "Di qué información no debe aparecer en las respuestas del GPT."
  sample: "Trabajo en una inmobiliaria de Málaga y mantengo el GPT que usa mi equipo para responder dudas de propietarios. Han cambiado las comisiones y he subido la tarifa nueva. Revisa las instrucciones que te pego y dime, en una lista, qué frases hay que cambiar. Después escribe una nota de cambios de cinco líneas para el equipo. No incluyas datos personales de clientes ni márgenes internos. Avísame si ves algo contradictorio entre la tarifa y las instrucciones."
deeper: null
tool: evaluador-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-privacidad, aepd]
---

## La idea

**Compartir.** Un GPT se puede dejar en varios niveles, de menos a más alcance:

- **Solo tú** (o personas invitadas, en espacios de trabajo).
- **Tu espacio de trabajo**, en los planes de empresa y educación.
- **Cualquiera con el enlace.** Cómodo, pero el enlace se reenvía sin control.
- **La tienda de GPTs.** Público para todos; las cuentas personales ya no pueden publicar GPTs nuevos.

El administrador del espacio de trabajo puede limitar estas opciones. **Regla:** el menor alcance que sirva.

**Qué no subir como conocimiento:** lo que hay en los archivos **puede acabar en las respuestas** a quien use el GPT, aunque las instrucciones digan «no lo enseñes». Así que nunca:

- Datos personales de clientes, alumnos o empleados.
- Márgenes, contratos, contraseñas o documentos internos.
- Nada que no le darías en mano a cualquier usuario del GPT.

**Mantenerlo.** Un GPT con una tarifa vieja da respuestas viejas. Revisa los archivos cuando cambien y prueba de nuevo tras cada cambio.

**La retirada.** OpenAI prevé retirar los GPTs y ofrece **migrarlos a plugins**. Pasan las instrucciones, los archivos y las apps conectadas; **no** pasan los ajustes de compartir, las frases de inicio ni las acciones propias, y el plugin empieza privado. Las fechas dependen del plan: compruébalas en el centro de ayuda.

## En la práctica

1. Revisa con quién compartes cada GPT y redúcelo si sobra alcance.
2. Repasa sus archivos: fuera los que tienen datos personales o internos.
3. Apunta cuándo toca revisarlo (por ejemplo, cada trimestre).
4. Guarda una copia de las instrucciones fuera del GPT.

> Prueba: «Te pego las instrucciones de un GPT de mi equipo. Revísalas y dime en una lista qué frases son confusas, qué falta para cuando no sepa un dato y qué podría hacer que muestre información interna. No las reescribas todavía».

## Error frecuente

Compartir con enlace «solo para el equipo». Un enlace no sabe quién es del equipo.
