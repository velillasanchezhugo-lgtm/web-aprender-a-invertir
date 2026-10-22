---
title: Tareas largas y agentes
description: "Qué es un agente de IA, qué tareas de varios pasos puede hacer hoy Claude en sus apps y cómo encargarlas y supervisarlas sin perder el control."
level: basico
track: cla-avanzado
order: 701
skills: [cla-agentes]
terms: [agente-de-ia, investigacion-a-fondo]
hook: "Le pides a Claude un informe con datos de diez archivos y tres webs. ¿Le vas dando instrucciones paso a paso o le das el objetivo y vuelves luego?"
takeaway: Un agente recibe un objetivo y encadena pasos con herramientas por su cuenta. Encárgale el resultado con límites claros, elige cuánto aprueba sin preguntarte y revisa lo que entrega.
scenario:
  kind: producto
  label: Caso práctico
  title: El informe de Carmen
  body: "Carmen trabaja en una ONG de Sevilla. Encarga a Claude un informe de actividades del año a partir de una carpeta con memorias trimestrales y hojas de asistencia. Le pide que no toque los originales y que deje el informe en una carpeta nueva. Mientras, prepara una reunión. Al volver, revisa las cifras: una actividad estaba contada dos veces."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-av01-q1
    q: "Vas a encargar a Claude una tarea larga que envía correos en tu nombre a 30 proveedores. ¿Qué modo de aprobación eliges?"
    options: ["Saltarse todas las aprobaciones, para que acabe antes", "Aprobación manual de cada acción, o al menos de cada envío", "Da igual: si el encargo está bien escrito, no puede fallar"]
    answer: 1
    explain: "Los mensajes que salen en tu nombre son difíciles de deshacer. El centro de ayuda recomienda la aprobación manual para lo delicado. Saltarse las aprobaciones tienta por rápido, pero entonces nada revisa lo que hace."
  - type: choice
    id: cla-av01-q2
    q: "¿Cuál de estos encargos está mejor pensado para un agente?"
    options: ["«Ordena mis cosas»", "«Con los PDF de la carpeta Presupuestos, haz una tabla comparativa por precio y plazo en un archivo nuevo. No borres ni muevas nada y dime qué datos faltan»", "«Haz lo que creas mejor con mis archivos»"]
    answer: 1
    explain: "Dice qué materiales usar, qué entregar, dónde y qué no tocar. Los encargos vagos tientan por cortos, pero un agente con libertad y sin límites puede hacer muchos pasos en la dirección equivocada."
  - type: truefalse
    id: cla-av01-q3
    q: "Si un agente trabaja solo durante media hora, ya no hace falta revisar el resultado."
    answer: false
    explain: "Cuantos más pasos encadena, más fácil es que un error pequeño se arrastre. La revisión final es tu parte del trabajo."
tips:
  - "Pídele que te enseñe su plan antes de empezar y corrígelo si no te convence."
  - "Puedes intervenir a mitad de tarea para reconducirla: no hace falta esperar al final."
action:
  title: Encarga tu primera tarea larga
  steps:
    - "Elige una tarea de 3-5 pasos que harías en una tarde (por ejemplo, resumir varios documentos en uno)."
    - "Escribe el encargo con: materiales, resultado, lugar donde dejarlo y qué no debe tocar."
    - "Pídele el plan primero y luego déjale trabajar."
    - "Revisa el resultado y apunta en «Mi kit de Claude» qué cambiarías en el encargo."
  check: He encargado una tarea de varios pasos y he revisado el resultado
practice:
  task: "Tienes una carpeta con las actas de dos años de tu asociación de vecinos. Escribe el encargo para que Claude saque los acuerdos pendientes: materiales, resultado, dónde dejarlo, qué no tocar y su plan primero."
  require: [formato, limites]
  extra:
    - label: Pedir el plan antes de empezar
      any: [plan]
      hint: "Pide que te enseñe su plan antes de empezar: «Antes de empezar, enséñame tu plan»."
    - label: Decir dónde dejar el resultado
      any: [archivo nuevo, documento nuevo, carpeta nueva, hoja nueva, guárdalo en, déjalo en]
      hint: "Di dónde quieres el resultado: «en un documento nuevo dentro de la carpeta…»."
  sample: "Lee las actas de la carpeta Juntas 2024-2025 de la asociación de vecinos y prepara una tabla con los acuerdos que siguen pendientes: acuerdo, fecha del acta, responsable y qué falta. Guárdala en un documento nuevo dentro de esa carpeta. No modifiques, muevas ni borres las actas originales. Antes de empezar, enséñame tu plan y dime si hay actas que no puedas leer."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda, claude-planes]
---

## La idea

En un chat normal, tú preguntas y Claude contesta. Un **agente de IA** va más allá: recibe un **objetivo**, lo divide en pasos y los ejecuta **por su cuenta** usando herramientas (leer archivos, buscar en la web, abrir páginas, crear documentos) hasta terminar.

Qué tareas largas puede hacer hoy Claude:

- **Investigación a fondo:** en los planes de pago, busca en muchas fuentes y te entrega un informe con citas.
- **Trabajo con tus archivos y apps:** en los planes de pago, Claude puede encargarse de tareas de varios pasos (antes se llamaba Cowork y se está integrando en la app normal): describes el resultado, te vas y vuelves al trabajo hecho. Puede crear hojas de cálculo, documentos y presentaciones, usar tus conectores y las carpetas que le conectes.

La clave es **cuánto le dejas hacer sin preguntarte**. Hay tres modos de aprobación:

- **Manual:** te pide permiso en cada acción.
- **Automático:** revisa él mismo cada acción y para las que parecen arriesgadas. No es una garantía.
- **Sin aprobaciones:** nada revisa lo que hace. Solo para tareas que controlas por completo.

Para dinero, mensajes en tu nombre o archivos importantes, el centro de ayuda recomienda **estar encima** o volver al modo manual. Y siempre te pide permiso antes de borrar archivos para siempre.

## En la práctica

1. Describe el **resultado**, no los pasos.
2. Indica **materiales**, **dónde** dejar el resultado y **qué no tocar**.
3. Pide el **plan** antes de empezar.
4. Si ves algo raro (archivos o webs que no mencionaste), **para la tarea**.

> Prueba: «Lee los documentos de la carpeta Reuniones de septiembre y crea un resumen en un archivo nuevo con decisiones, responsables y fechas. No modifiques los originales. Antes de empezar, enséñame tu plan.»

## Error frecuente

Dar un encargo vago y elegir que no pida aprobaciones para no tener que mirar. Así el agente trabaja rápido… en la dirección equivocada.
