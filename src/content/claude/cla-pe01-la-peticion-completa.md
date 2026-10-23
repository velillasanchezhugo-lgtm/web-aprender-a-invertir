---
title: La petición completa
description: "Las cinco piezas de una buena petición a Claude: contexto, tarea, detalles, formato y tono. Con una lista de comprobación y un antes y después."
level: basico
track: cla-pedir
order: 101
skills: [cla-peticion]
terms: [prompt, contexto-de-la-peticion]
hook: "Le pides a Claude «escribe un mensaje para pedir presupuesto a un fontanero» y te devuelve algo tan genérico que ningún fontanero sabría qué contestarte. ¿Qué le faltaba?"
takeaway: Claude solo sabe lo que le cuentas. Antes de enviar, repasa las cinco piezas (contexto, tarea, detalles, formato y tono) y añade las que falten.
scenario:
  kind: operacion
  label: Caso práctico
  title: El fontanero de Begoña
  body: "Begoña escribe: «Escribe un mensaje para pedir presupuesto a un fontanero». Claude le da un texto genérico y muy formal. Lo repite con contexto: el grifo de la cocina gotea y el calentador tiene diez años, quiere un precio aproximado con IVA y una visita esta semana por la tarde, y lo va a mandar por WhatsApp en menos de 60 palabras. Esta vez el mensaje se puede enviar casi tal cual."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-pe01-q1
    q: "Germán pide «hazme un resumen de este informe» y el resultado es demasiado largo y técnico para su jefa. ¿Qué cambia primero?"
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
  - "No pongas datos personales que no hagan falta para la tarea: nombres completos, DNI, números de cuenta."
action:
  title: Rehaz una petición tuya
  steps:
    - "Busca en tu historial de Claude una petición que te dio un resultado flojo."
    - "Reescríbela con la lista de las cinco piezas y envíala en un chat nuevo."
    - "Compara las dos respuestas. Si la nueva es mejor, copia la petición en tu nota «Mi kit de Claude»."
  check: He rehecho una petición con las cinco piezas y he comparado el resultado
practice:
  task: "Tienes un bar de tapas y en noviembre vas a cerrar los lunes. Escribe una petición completa para que Claude redacte el cartel de la puerta y una publicación para redes."
  require: [contexto, limites, formato, tono]
  sample: "Tengo un bar de tapas en Logroño y desde el 3 de noviembre cerraremos los lunes para que el equipo descanse. Escribe el texto de un cartel para la puerta y una publicación para Instagram que lo anuncien. Tienen que decir desde qué fecha cambia y que el resto de la semana abrimos como siempre. Formato: cartel de máximo 25 palabras y publicación de tres frases. Tono cercano y alegre, sin pedir perdón ni usar más de un emoji."
deeper: null
tool: constructor-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda, claude-docs, anthropic-academy]
---

## La idea

Un **prompt** (en español, petición) es lo que le escribes a Claude para pedirle algo. En el Camino Cero viste cuatro piezas; aquí las afinamos en cinco, separando los detalles y el tono. Claude no sabe quién eres ni para qué lo quieres: solo ve tu mensaje. Si falta información, la rellena con lo más típico. Por eso las peticiones cortas dan respuestas correctas pero genéricas.

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

> «Escribe un mensaje para pedir presupuesto a un fontanero.»

**Después:**

> Prueba: «Vivo en un tercero sin ascensor en Burgos. El grifo de la cocina gotea desde hace una semana y el calentador de agua tiene diez años. Escribe un mensaje de WhatsApp para pedir presupuesto a dos fontaneros: que me den un precio aproximado con IVA y me digan si pueden venir esta semana por la tarde. Tono educado y directo, menos de 60 palabras, sin dar todavía mi dirección.»

Si el resultado no encaja, no empieces de cero: dile qué cambiar («más corto», «más cercano»). Claude recuerda lo hablado en esa conversación.

Y léelo antes de enviarlo: Claude puede añadir algo que no le has dicho, como una hora o un precio orientativo.

## Error frecuente

Pedir «mejóralo» o «hazlo bien» sin decir qué falla. Claude no sabe qué tienes en la cabeza: di qué no te gusta y qué esperabas.
