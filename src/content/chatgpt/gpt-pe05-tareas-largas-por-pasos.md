---
title: Tareas largas, por pasos
description: "Cómo dividir un encargo grande en ChatGPT: primero el esquema, luego cada parte, revisando sobre la marcha, y cuándo abrir un chat nuevo con un resumen."
level: basico
track: gpt-pedir
order: 105
skills: [gpt-iterar]
terms: [ventana-de-contexto, proyecto-de-chatgpt]
hook: "Le pides a ChatGPT «hazme la guía completa para los nuevos empleados de mi hotel» y te devuelve diez páginas correctas y vacías, que no se parecen a tu hotel. ¿Por dónde había que empezar?"
takeaway: "En las tareas grandes, primero el esquema; luego, una parte cada vez, revisando antes de seguir. Si la conversación se hace muy larga, pide un resumen de lo decidido y sigue en un chat nuevo."
scenario:
  kind: empresa
  label: Caso práctico
  title: La guía de bienvenida de Jorge
  body: "Jorge lleva un hotel rural de 12 habitaciones en la Sierra de Gata y quiere una guía para el personal de temporada. En vez de pedirla entera, pide primero solo el índice. Lo corrige: quita un apartado y añade «qué hacer si se va la luz». Luego pide los apartados de dos en dos, dándole sus normas reales. En una tarde tiene una guía que sí es de su hotel."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-pe05-q1
    q: "Sonia tiene que preparar el plan de formación anual de su departamento, unas 15 páginas. ¿Cuál es el mejor primer paso con ChatGPT?"
    options: ["Pedirle el plan completo de una vez para ganar tiempo", "Contarle el contexto y pedirle solo un índice de apartados para revisarlo", "Pedirle primero la conclusión"]
    answer: 1
    explain: "Corregir un índice cuesta un minuto; corregir 15 páginas, una tarde. Pedirlo todo de golpe tienta porque parece más rápido, pero sale genérico y luego hay que deshacer mucho."
  - type: truefalse
    id: gpt-pe05-q2
    q: "En una conversación muy larga, ChatGPT puede perder de vista detalles del principio; por eso a veces conviene abrir un chat nuevo con un resumen."
    answer: true
    explain: "ChatGPT trabaja con una ventana de contexto limitada, su memoria de trabajo en cada chat. Si notas que olvida decisiones o repite errores, pide un resumen de lo acordado y pégalo en un chat nuevo."
  - type: choice
    id: gpt-pe05-q3
    q: "Has pedido el apartado 3 de tu documento y no te convence. ¿Qué haces?"
    options: ["Le dices qué falla en ese apartado y le pides que lo rehaga, sin tocar los demás", "Empiezas otra vez todo el documento", "Lo dejas así y pasas al 4"]
    answer: 0
    explain: "Trabajar por partes permite arreglar solo lo que falla. Empezar de cero tienta cuando algo sale mal, pero pierdes lo que ya estaba bien. Y dejarlo pasar arrastra el error a los apartados siguientes."
tips:
  - "Cuando acabes todas las partes, pide un repaso de conjunto: «Lee el documento entero y dime si algo se repite o se contradice»."
  - "Si vuelves al mismo trabajo durante semanas, mira la sesión de proyectos de ChatGPT: guardan chats, archivos e instrucciones juntos."
action:
  title: Divide un encargo
  steps:
    - "Elige algo grande que tengas pendiente: un plan, un informe, la organización de un viaje."
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
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-academy]
---

## La idea

Cuando pides algo grande de una vez, ChatGPT tiene que adivinar demasiadas decisiones: qué apartados, qué orden, qué detalle. El resultado suele ser largo, correcto y genérico. Mejor en tres pasos:

1. **Esquema primero.** Pide solo el índice o la lista de partes. Corrígelo: quita, añade, reordena. Es el momento más barato para cambiar de idea.
2. **Una parte cada vez.** Desarrolla un apartado o dos, dale tus datos reales para esa parte y **revisa antes de seguir**. Si algo falla, corrige solo eso.
3. **Repaso final.** Con todo hecho, pide que lo lea entero y señale repeticiones o contradicciones.

**Cuándo abrir un chat nuevo.** ChatGPT trabaja con una **ventana de contexto**: la cantidad de texto que puede tener en cuenta a la vez en un chat. En conversaciones muy largas puede olvidar detalles del principio. Si ves que se le escapan decisiones, pídele un resumen de lo acordado y pégalo al empezar un chat nuevo.

## En la práctica

Para el resumen de traspaso, algo así:

> Prueba: «Vamos a seguir en otro chat. Resume en un máximo de 12 líneas lo que hemos decidido hasta ahora: el objetivo, el índice final, qué apartados están terminados y qué falta. Incluye las normas y datos que te he dado y que hay que respetar. Solo la lista, sin comentarios.»

Revisa el resumen antes de copiarlo: si falta algo importante, añádelo tú. Luego, en el chat nuevo, pega el resumen y escribe: «Seguimos con el apartado 5».

## Error frecuente

Aceptar la primera parte sin revisarla y seguir con las demás. Un error en el apartado 1 (un dato, un enfoque) se repite en todos los siguientes.
