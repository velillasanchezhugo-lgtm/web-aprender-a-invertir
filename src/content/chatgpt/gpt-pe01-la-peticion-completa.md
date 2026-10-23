---
title: La petición completa
description: "Las cinco piezas de una buena petición a ChatGPT: contexto, tarea, detalles, formato y tono. Con una lista de comprobación y un antes y después."
level: basico
track: gpt-pedir
order: 101
skills: [gpt-peticion]
terms: [prompt, contexto-de-la-peticion]
hook: "Le pides a ChatGPT «escribe un correo a mi casero porque la caldera no funciona» y te devuelve un texto educadísimo que no dice desde cuándo, qué pasa ni qué quieres que haga. ¿Qué le faltaba?"
takeaway: ChatGPT solo sabe lo que le cuentas y rellena los huecos con lo más típico. Antes de enviar, repasa las cinco piezas (contexto, tarea, detalles, formato y tono) y añade las que falten.
scenario:
  kind: operacion
  label: Caso práctico
  title: La caldera de Nuria
  body: "Nuria escribe: «Escribe un correo a mi casero porque la caldera no funciona». Sale un texto largo y genérico. Lo repite con contexto: vive de alquiler en Gijón, la caldera falla desde el lunes, ya avisó por teléfono hace cinco días sin respuesta y quiere que mande un técnico esta semana. Pide un correo de menos de 120 palabras, firme pero educado. Esta vez lo puede enviar casi tal cual."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-pe01-q1
    q: "Alberto pide a ChatGPT «hazme una presentación sobre seguridad en el almacén» y sale algo de nivel universitario. Es para cinco compañeros nuevos y tiene 10 minutos. ¿Qué hace?"
    options: ["Pulsa para regenerar la respuesta hasta que salga mejor", "Añade quién la va a ver, cuánto debe durar y qué temas del almacén importan", "Escribe «hazla más sencilla, por favor»"]
    answer: 1
    explain: "Faltaban el público, el tiempo y los detalles de su almacén. Regenerar tienta porque es un clic, pero sin información nueva ChatGPT vuelve a adivinar. «Más sencilla» ayuda algo, pero no le dice para quién ni de qué hablar."
  - type: truefalse
    id: gpt-pe01-q2
    q: "Cuantas más palabras tenga una petición, mejor será siempre la respuesta."
    answer: false
    explain: "Importa que sea completa, no larga. Para «¿a cuántos grados se hornea un bizcocho?» basta la pregunta. Las cinco piezas cuentan cuando el resultado depende de tu situación: un correo, un plan, un texto para otra persona."
  - type: choice
    id: gpt-pe01-q3
    q: "¿Qué petición le da a ChatGPT más piezas útiles?"
    options: ["«Hazme un horario de estudio»", "«Hazme un buen horario de estudio para aprobar»", "«Estudio 2.º de Bachillerato y trabajo los sábados. Tengo exámenes de Historia y Química en tres semanas. Hazme un horario de lunes a viernes en una tabla, con descansos»"]
    answer: 2
    explain: "La tercera da contexto (curso, trabajo), detalles (asignaturas, plazo), tarea (horario) y formato (tabla con descansos). «Bueno» y «para aprobar» suenan a detalle, pero no dicen nada que ChatGPT pueda usar."
tips:
  - "Si no sabes qué contar, imagina que se lo encargas a alguien que no te conoce: ¿qué te preguntaría primero?"
  - "Cuenta tu situación, no tus datos: «vivo de alquiler en Gijón» basta; tu nombre completo, tu DNI o tu dirección no hacen falta."
  - "Si la respuesta no encaja, corrige en el mismo chat («más corto», «sin tecnicismos»): ChatGPT tiene en cuenta lo que ya habéis hablado en esa conversación."
action:
  title: Rehaz una petición tuya
  steps:
    - "Busca en tu historial de ChatGPT una petición que te dio un resultado flojo."
    - "Reescríbela repasando las cinco piezas y envíala en un chat nuevo."
    - "Compara las dos respuestas. Si la nueva es mejor, guarda la petición en tu nota «Mi kit de ChatGPT»."
  check: He rehecho una petición con las cinco piezas y he comparado el resultado
practice:
  task: "Eres tesorero de una peña ciclista y la cuota anual sube el año que viene. Escribe una petición completa para que ChatGPT redacte el aviso a los socios."
  require: [contexto, publico, formato, tono]
  sample: "Soy el tesorero de una peña ciclista de Huesca con 80 socios. La cuota anual pasa de 30 € a 36 € desde enero porque ha subido el seguro de la federación. Redacta un aviso para enviar a los socios por correo: que explique la subida, desde cuándo se aplica y que el resto de servicios sigue igual. Formato: un párrafo corto y una línea final con el plazo de pago. Tono cercano y claro, sin pedir perdón."
deeper: null
tool: constructor-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-academy]
---

## La idea

Un **prompt** (en español, petición) es lo que le escribes a ChatGPT para pedirle algo. ChatGPT no ve tu casa, tu trabajo ni tu historial de problemas: solo ve tu mensaje. Si falta información, la rellena con lo más habitual. Por eso las peticiones cortas dan respuestas correctas, pero de manual.

Una petición completa tiene cinco piezas:

1. **Contexto**: la situación de fondo. Quién eres, para quién es y qué ha pasado.
2. **Tarea**: qué quieres exactamente, con un verbo claro: escribe, resume, compara, revisa.
3. **Detalles y restricciones**: lo que debe incluir o evitar. Plazos, cifras, lo que ya has intentado.
4. **Formato**: cómo quieres el resultado. Correo, lista, tabla, número de palabras.
5. **Tono**: cómo debe sonar. Cercano, formal, firme, divertido.

No siempre hacen falta las cinco. Para una duda de cultura general basta la pregunta. Pero cuando el resultado depende de tu caso, cada pieza que falta es **una vuelta más de corrección**.

**Lista rápida antes de enviar:**

- ¿Sabría una persona desconocida qué hacer con esto?
- ¿He dicho para quién es y para qué?
- ¿He dicho cómo lo quiero (formato y longitud)?

## En la práctica

**Antes:**

> «Escribe un correo a mi casero porque la caldera no funciona.»

**Después:**

> Prueba: «Vivo de alquiler en un piso de Gijón. La caldera no da agua caliente desde el lunes y avisé a mi casero por teléfono hace cinco días, sin respuesta. Escribe un correo para pedirle que envíe un técnico esta semana y que me confirme el día. Menos de 120 palabras, tono firme pero educado, sin amenazas. No inventes fechas que no te he dado.»

Lee siempre el resultado antes de usarlo: ChatGPT a veces añade detalles que no le has dicho, como una fecha o una cláusula del contrato. Si algo no es tuyo, quítalo.

La herramienta «Constructor de peticiones» de esta web te va pidiendo cada pieza para que no se te olvide ninguna.

## Error frecuente

Escribir «mejóralo» o «hazlo bien» sin decir qué falla. ChatGPT no sabe qué tienes en la cabeza: di qué no te gusta y qué esperabas.
