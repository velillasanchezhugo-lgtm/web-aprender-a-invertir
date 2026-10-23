---
title: Compartir, mantener y migrar
description: "Cómo compartir un GPT o un proyecto con el menor alcance, qué no subir como archivo, cómo tenerlo al día y qué hacer antes de que retiren los GPTs."
level: basico
track: gpt-gpts
order: 304
skills: [gpt-crear-gpts, gpt-empresa-datos]
terms: [gpt-personalizado, proyecto-de-chatgpt, plugin-de-chatgpt, datos-personales]
hook: "Tu asistente de la oficina funciona bien y un compañero te pide el enlace para pasárselo a un cliente. Dentro están las tarifas internas. ¿Se lo das?"
takeaway: "Comparte con el menor alcance que sirva, no subas como archivo nada que no puedas enseñar a quien lo use y revísalo cuando cambien tus documentos. Si usas o tienes GPTs, guarda hoy sus instrucciones: OpenAI los retirará."
scenario:
  kind: empresa
  label: Caso práctico
  title: El GPT de presupuestos de Candela
  body: "Candela trabaja en una empresa de reformas de Granada con plan de empresa. Hizo un GPT para preparar presupuestos y lo compartió con su equipo. Un comercial quiere pasárselo a clientes, pero dentro está la hoja de márgenes. Candela lo deja solo para el equipo, cambia la hoja por la tarifa pública, copia las instrucciones en un documento y apunta la fecha de retirada que le avisa ChatGPT."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-gp04-q1
    q: "Candela quiere que un cliente use su asistente, pero dentro está la hoja de márgenes internos. ¿Qué hace?"
    options: ["Le pasa el enlace: el cliente no verá los archivos", "Hace una versión aparte solo con información pública y comparte esa", "Añade a las instrucciones «no enseñes la hoja de márgenes» y lo comparte"]
    answer: 1
    explain: "Lo que hay en los archivos puede acabar en las respuestas a quien lo use. La instrucción «no lo enseñes» tienta por cómoda, pero no es una barrera segura. Lo seguro es que no esté dentro."
  - type: choice
    id: gpt-gp04-q2
    q: "¿Qué forma de compartir es la más prudente para un asistente que solo usa tu departamento?"
    options: ["Publicarlo para cualquiera en el catálogo", "Compartirlo con cualquiera que tenga el enlace", "Compartirlo solo con tu espacio de trabajo o con las personas concretas"]
    answer: 2
    explain: "Elige el menor alcance que sirva. El enlace tienta por rápido, pero se reenvía sin control y llega a quien no debe."
  - type: truefalse
    id: gpt-gp04-q3
    q: "Al migrar un GPT a plugin, todo pasa tal cual, incluidos los ajustes de compartir y las frases de inicio."
    answer: false
    explain: "Según el centro de ayuda de OpenAI, pasan las instrucciones, los archivos y las apps conectadas, pero no los ajustes de compartir, las frases de inicio, el modelo elegido ni las acciones propias. El plugin empieza siendo privado, así que hay que volver a compartirlo y probarlo."
tips:
  - "Pon en las instrucciones o en la descripción la fecha de la última revisión: así quien lo usa sabe si está al día."
  - "Cuando cambies un archivo, borra el viejo: dos tarifas distintas dan respuestas mezcladas."
action:
  title: Revisa con quién compartes y guarda tus instrucciones
  steps:
    - "Abre tus GPTs o tus proyectos compartidos y mira con quién están compartidos y qué archivos llevan."
    - "Quita los archivos con datos personales o internos y reduce el alcance si es mayor del necesario."
    - "Copia las instrucciones de cada GPT que uses o tengas en «Mi kit de ChatGPT» antes de su retirada."
    - "Si no tienes ninguno, apunta en tu kit qué nunca subirías como archivo."
  check: He revisado con quién comparto, he guardado mis instrucciones o he escrito mi lista de lo que no subo
practice:
  task: "Mantienes el proyecto que usa tu equipo de una óptica para responder dudas de clientes y han cambiado los precios. Escribe la petición a ChatGPT para revisar las instrucciones y preparar la nota de cambios."
  require: [contexto, formato, limites, verificar]
  extra:
    - label: Pedir que no salgan datos internos o personales
      any: ["datos personales", "datos internos", "confidencial", "no incluyas", "sin nombres", "que no salga"]
      hint: "Di qué información no debe aparecer en las respuestas del asistente."
  sample: "Trabajo en una óptica de Córdoba y mantengo el proyecto de ChatGPT que usa mi equipo para responder dudas de clientes. Han cambiado los precios de las revisiones y he subido la tarifa nueva. Revisa las instrucciones que te pego y dime, en una lista, qué frases hay que cambiar. Después escribe una nota de cambios de cinco líneas para el equipo. No incluyas datos personales de clientes ni márgenes internos. Avísame si ves algo contradictorio entre la tarifa y las instrucciones."
deeper: null
tool: evaluador-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-23
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-privacidad, aepd]
---

## La idea

**Compartir.** Un GPT se puede dejar en varios niveles, de menos a más alcance: solo tú (o personas invitadas), tu espacio de trabajo en los planes de empresa, cualquiera con el enlace o la tienda de GPTs. En una cuenta personal, lo más parecido es **compartir un proyecto** con las personas concretas que invites.

**Regla:** el menor alcance que sirva. Un enlace es cómodo, pero se reenvía sin control. El administrador de una empresa puede limitar estas opciones.

**Qué no subir como archivo:** lo que hay en los archivos **puede acabar en las respuestas** a quien lo use, aunque las instrucciones digan «no lo enseñes». Así que nunca:

- Datos personales de clientes, alumnos o empleados.
- Márgenes, contratos, contraseñas o documentos internos.
- Nada que no le darías en mano a cualquiera que lo use.

**Mantenerlo.** Con una tarifa vieja da respuestas viejas. Revisa los archivos cuando cambien y prueba de nuevo tras cada cambio.

**La retirada.** OpenAI retirará los GPTs y ofrece **migrarlos a plugins**. Solo puede migrar un GPT su creador o el administrador. Pasan las instrucciones, los archivos y las apps conectadas; **no** pasan los ajustes de compartir, las frases de inicio ni las acciones propias, y el plugin empieza privado. Las fechas dependen del plan: mira el aviso en ChatGPT y el centro de ayuda.

## En la práctica

1. Revisa con quién compartes y redúcelo si sobra alcance.
2. Repasa los archivos: fuera los que tienen datos personales o internos.
3. Apunta cuándo toca revisarlo (por ejemplo, cada trimestre).
4. Guarda una copia de las instrucciones fuera de ChatGPT. Si usas un GPT de otra persona, pregúntale si habrá un plugin que lo sustituya.

> Prueba: «Te pego las instrucciones de un GPT que uso cada semana. Revísalas y dime en una lista qué frases son confusas, qué falta para cuando no sepa un dato y qué podría hacer que muestre información interna. Después adáptalas para usarlas como instrucciones de un proyecto».

## Error frecuente

Compartir con enlace «solo para el equipo». Un enlace no sabe quién es del equipo.
