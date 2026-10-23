---
title: Tareas largas, por pasos
description: "Cómo dividir un encargo grande en ChatGPT: primero el esquema, luego cada parte, revisando sobre la marcha, y cuándo seguir en un chat nuevo."
level: basico
track: gpt-pedir
order: 105
skills: [gpt-iterar]
terms: [ventana-de-contexto-chatgpt, proyecto-de-chatgpt]
hook: "Pides a ChatGPT «la guía completa para los nuevos empleados de mi hotel» y te da diez páginas correctas y vacías, que no se parecen a tu hotel. ¿Por dónde había que empezar?"
takeaway: "En las tareas grandes, primero el esquema; luego, una parte cada vez, revisando antes de seguir. Si la conversación se hace muy larga, pide un resumen de lo decidido y sigue en un chat nuevo."
scenario:
  kind: empresa
  label: Caso práctico
  title: La guía de bienvenida de Jorge
  body: "Jorge lleva un hotel rural en la Sierra de Gata y quiere una guía para el personal de temporada. Primero pide solo el índice y lo corrige: quita un apartado y añade «qué hacer si se va la luz». Luego pide los apartados de dos en dos, con sus normas reales. En una tarde tiene una guía que sí es de su hotel."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-pe05-q1
    q: "Sonia tiene que preparar el plan de formación anual de su departamento, unas 15 páginas. ¿Cuál es el mejor primer paso con ChatGPT?"
    options: ["Pedirle el plan completo de una vez para ganar tiempo", "Contarle el contexto y pedirle solo un índice de apartados para revisarlo", "Pedirle primero la conclusión"]
    answer: 1
    explain: "Corregir un índice cuesta un minuto; corregir 15 páginas, una tarde. Pedirlo todo tienta porque parece más rápido, pero sale genérico y hay que deshacer mucho."
  - type: choice
    id: gpt-pe05-q2
    q: "Llevas toda la tarde en el mismo chat con la guía de tu hotel y ChatGPT vuelve a poner un horario de recepción que ya corregiste dos veces. ¿Qué haces?"
    options: ["Se lo repites en cada mensaje", "Pides un resumen de lo decidido, lo revisas y sigues en un chat nuevo pegándolo", "Borras el chat y empiezas sin nada"]
    answer: 1
    explain: "En chats muy largos se le escapan detalles del principio. Repetirlo tienta porque es lo inmediato, pero el chat sigue creciendo y el problema vuelve. Empezar sin nada te hace perder lo decidido; el resumen revisado lo lleva contigo."
  - type: truefalse
    id: gpt-pe05-q3
    q: "Si has revisado cada apartado por separado, ya no hace falta repasar el documento entero al final."
    answer: false
    explain: "Las partes hechas por separado pueden repetirse o contradecirse (un horario en un apartado y otro distinto en el siguiente). Tienta saltarse el repaso porque cada parte parecía bien, pero el conjunto es lo que va a leer otra persona."
tips:
  - "Para el repaso final, pide: «Lee el documento entero y dime si algo se repite o se contradice»."
  - "Si vuelves al mismo trabajo durante semanas, un proyecto de ChatGPT (una carpeta con chats, archivos e instrucciones) te ahorra pegar el resumen cada vez."
action:
  title: Divide un encargo
  steps:
    - "Elige algo grande pendiente: un plan, un informe, un viaje."
    - "Pide a ChatGPT solo el esquema, sin desarrollarlo, y corrígelo."
    - "Desarrolla la primera parte y revísala antes de seguir."
  check: He empezado una tarea larga pidiendo solo el esquema y lo he corregido
practice:
  task: "En dos meses te mudas de Zaragoza a Valencia con tus dos hijos. Escribe la primera petición: solo un esquema de lo que hay que hacer, por fases, sin desarrollar nada todavía."
  require: [contexto, formato, limites]
  extra:
    - label: "Pedir solo el esquema primero"
      any: ["solo el esquema", "primero el esquema", "solo un esquema", "indice", "no desarrolles", "sin desarrollar", "por fases", "luego iremos", "despues iremos"]
      hint: "Deja claro que de momento solo quieres el esquema: «No desarrolles nada todavía»."
  sample: "Me mudo de Zaragoza a Valencia dentro de dos meses con mi pareja y nuestros dos hijos, de 6 y 9 años, por un cambio de trabajo. Ya tenemos piso de alquiler allí. Hazme solo un esquema de lo que hay que hacer, por fases: antes de la mudanza, la semana de la mudanza y el primer mes. Formato: una lista por fase, con cinco puntos como máximo cada una y una línea por punto. No desarrolles nada todavía: luego iremos fase a fase."
deeper: null
tool: evaluador-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-23
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-academy]
---

## La idea

Si pides algo grande de una vez, ChatGPT tiene que adivinar demasiado: qué apartados, qué orden, qué detalle. Sale largo, correcto y genérico. Mejor en tres pasos:

1. **Esquema primero.** Pide solo el índice y corrígelo: quita, añade, reordena. Es el momento más barato para cambiar de idea.
2. **Una parte cada vez.** Uno o dos apartados, con tus datos reales, y **revisa antes de seguir**. Si algo falla, corrige solo eso.
3. **Repaso final.** Que lo lea entero y señale repeticiones o contradicciones.

**Cuándo abrir un chat nuevo.** ChatGPT trabaja con una **ventana de contexto**: el texto que puede tener en cuenta a la vez en un chat. En conversaciones muy largas se le escapan detalles del principio. Si pasa, pide un resumen de lo acordado y pégalo en un chat nuevo.

## En la práctica

Para el resumen de traspaso, algo así:

> Prueba: «Vamos a seguir en otro chat. Resume en un máximo de 12 líneas lo que hemos decidido hasta ahora: el objetivo, el índice final, qué apartados están terminados y qué falta. Incluye las normas y datos que te he dado y que hay que respetar. Solo la lista, sin comentarios.»

Revisa el resumen y añade lo que falte. En el chat nuevo, pégalo y escribe: «Seguimos con el apartado 5».

## Error frecuente

Aceptar la primera parte sin revisarla. Un error en el apartado 1 se arrastra a todos los siguientes.
