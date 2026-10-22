---
title: La petición completa
description: "Las cinco piezas de una buena petición a Claude: contexto, tarea, detalles, formato y tono. Con una lista de comprobación y un antes y después."
level: basico
track: cla-pedir
order: 101
skills: [cla-peticion]
terms: [prompt, contexto-de-la-peticion]
hook: "Le pides a Claude «escríbeme un correo para mi casero» y te devuelve algo correcto pero que no sirve. ¿Qué le faltaba?"
takeaway: Claude solo sabe lo que le cuentas. Antes de enviar, repasa las cinco piezas (contexto, tarea, detalles, formato y tono) y añade las que falten.
scenario:
  kind: operacion
  label: Caso práctico
  title: El correo de Nerea al casero
  body: "Nerea escribe: «Escríbeme un correo para mi casero». Claude le da un texto genérico y muy formal. Lo repite con contexto: lleva tres semanas con la caldera estropeada, ya llamó dos veces, quiere una fecha de reparación esta semana y prefiere un tono firme pero educado, en menos de 120 palabras. Esta vez el correo se puede enviar casi tal cual."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-pe01-q1
    q: "Iván pide «hazme un resumen de este informe» y el resultado es demasiado largo y técnico para su jefa. ¿Qué cambia primero?"
    options: ["Repite la misma petición hasta que salga bien", "Añade para quién es, para qué lo quiere y qué longitud necesita", "Pide que lo resuma «mejor»"]
    answer: 1
    explain: "Faltaban el público, el uso y el formato. «Mejor» no le dice a Claude nada nuevo; repetir lo mismo suele dar algo parecido. Tienta porque parece más rápido, pero un minuto de contexto ahorra varias vueltas."
  - type: truefalse
    id: cla-pe01-q2
    q: "Una buena petición tiene que ser siempre larga."
    answer: false
    explain: "Tiene que ser completa, no larga. Para una duda sencilla basta una frase. Las piezas importan cuando la tarea depende de tu situación: un correo, un plan, un texto para otra persona."
  - type: choice
    id: cla-pe01-q3
    q: "¿Cuál de estas peticiones tiene más piezas útiles?"
    options: ["«Dame ideas para una cena»", "«Dame ideas para una cena rica y sana»", "«Somos 6 adultos, uno es vegetariano, tengo 1 hora y unos 40 €. Dame 3 menús en una lista, con lo que hay que comprar»"]
    answer: 2
    explain: "La tercera da contexto (6 personas, un vegetariano), restricciones (tiempo, dinero), tarea (3 menús) y formato (lista con compra). «Rica y sana» suena a detalle, pero no dice nada concreto."
tips:
  - "Si no sabes qué contexto dar, imagina que se lo encargas a una persona que no te conoce: ¿qué te preguntaría?"
  - "Escribe como hablas. No hacen falta palabras mágicas ni fórmulas especiales."
  - "No pongas datos personales que no hagan falta para la tarea: nombres completos, DNI, números de cuenta."
action:
  title: Rehaz una petición tuya
  steps:
    - "Busca en tu historial de Claude una petición que te dio un resultado flojo."
    - "Reescríbela con la lista de las cinco piezas y envíala en un chat nuevo."
    - "Compara las dos respuestas. Si la nueva es mejor, copia la petición en tu nota «Mi kit de Claude»."
  check: He rehecho una petición con las cinco piezas y he comparado el resultado
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda, claude-docs, anthropic-academy]
---

## La idea

Un **prompt** es lo que le escribes a Claude para pedirle algo. Claude no sabe quién eres, para qué lo quieres ni qué has intentado ya: solo ve tu mensaje. Si falta información, la rellena con lo más típico. Por eso las respuestas a peticiones cortas suelen ser correctas pero genéricas.

Una petición completa tiene cinco piezas:

1. **Contexto**: la situación de fondo. Quién eres, para quién es y qué ha pasado.
2. **Tarea**: qué quieres exactamente. Un verbo claro: escribe, resume, compara, revisa.
3. **Detalles y restricciones**: lo que debe incluir o evitar. Plazos, presupuesto, datos concretos.
4. **Formato**: cómo quieres el resultado. Lista, tabla, correo, número de palabras.
5. **Tono**: cómo debe sonar. Cercano, formal, firme, divertido.

No todas las peticiones necesitan las cinco. Para «¿cuántos gramos son una taza de harina?» basta la pregunta. Pero cuando el resultado depende de tu situación, cada pieza que falta es una vuelta más de corrección.

**Lista rápida antes de enviar:**

- ¿Sabría una persona desconocida qué hacer con esto?
- ¿He dicho para quién es y para qué?
- ¿He dicho cómo lo quiero (formato y longitud)?

## En la práctica

Mira la diferencia. **Antes:**

> «Escríbeme un correo para mi casero.»

**Después:**

> Prueba: «Vivo de alquiler en Zaragoza. La caldera lleva tres semanas estropeada y he avisado dos veces por teléfono sin respuesta. Escribe un correo a mi casero pidiendo una fecha de reparación esta semana. Que recuerde los avisos anteriores. Tono firme pero educado, menos de 120 palabras, sin amenazas.»

Si el resultado no encaja, no empieces de cero: dile qué cambiar («más corto», «quita la segunda frase», «más cercano»). Claude recuerda lo que habéis hablado en esa conversación.

Recuerda que Claude puede equivocarse. Si el correo menciona plazos legales o derechos como inquilino, compruébalos en una fuente oficial antes de enviarlo.

## Error frecuente

Pedir «mejóralo» o «hazlo bien» sin decir qué falla. Claude no sabe qué tienes en la cabeza: di qué no te gusta y qué esperabas.
