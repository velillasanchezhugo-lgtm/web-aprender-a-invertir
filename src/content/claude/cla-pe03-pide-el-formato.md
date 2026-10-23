---
title: Pide el formato
description: "Cómo pedirle a Claude el formato exacto: tabla, lista, longitud, idioma, registro o títulos, y cómo dejarlo listo para pegar en otro sitio."
level: basico
track: cla-pedir
order: 103
skills: [cla-ejemplos-formato]
terms: [prompt]
hook: "Claude te da una respuesta buena, pero en cinco párrafos largos, y tú la necesitabas en una tabla para pegarla en tu hoja de cálculo. ¿Cómo se evita?"
takeaway: Di siempre cómo quieres el resultado y dónde lo vas a usar. Longitud, estructura, idioma y registro son parte de la petición, no un detalle.
scenario:
  kind: operacion
  label: Caso práctico
  title: La comparativa de gimnasios de Tomás
  body: "Tomás quiere comparar tres gimnasios de su barrio. Pega la información de sus webs y pide «compáralos». Recibe un texto largo. Lo repite pidiendo una tabla con cuatro columnas (precio al mes, horario, permanencia, distancia) y una línea final con la diferencia principal. Lo lee en diez segundos."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-pe03-q1
    q: "Carla va a pegar el texto de Claude en un mensaje de WhatsApp para su comunidad de vecinos. ¿Qué debe pedirle?"
    options: ["«Hazlo bonito, con títulos y negritas»", "«Texto sencillo, sin títulos ni tablas, en tres párrafos cortos»", "Nada: ya lo arreglará al pegarlo"]
    answer: 1
    explain: "Las tablas y algunos formatos no se ven bien en todas las aplicaciones al copiar y pegar. Si dices dónde va el texto, Claude lo adapta. Dejarlo para después suele costar más tiempo."
  - type: truefalse
    id: cla-pe03-q2
    q: "Si pides «unas 150 palabras», Claude siempre clavará la cifra exacta."
    answer: false
    explain: "Respeta bien la idea de longitud, pero no cuenta palabras con precisión perfecta. Si el número exacto importa (un formulario con límite), compruébalo tú con un contador."
  - type: choice
    id: cla-pe03-q3
    q: "Mateo necesita en catalán un aviso para el colegio de su hija, en registro formal. ¿Qué es lo más eficaz?"
    options: ["Pedirlo en español y traducirlo después con otra herramienta", "Pedirlo directamente: «Escríbelo en catalán, registro formal, para las familias del colegio»", "Escribir la petición en catalán, porque si no, no funciona"]
    answer: 1
    explain: "Puedes pedir el idioma y el registro de la respuesta directamente, aunque escribas en español. Traducir después añade un paso y puede perder matices. Si el aviso es importante, que lo revise alguien que domine el idioma."
tips:
  - "Si quieres el resultado en un archivo (Word, Excel, PDF), pídelo: según tu plan y tus ajustes, Claude puede crear archivos para descargar."
  - "Cuando el formato funcione, pide «usa siempre este formato en esta conversación» para no repetirlo."
action:
  title: Pide algo en tabla
  steps:
    - "Piensa en algo que estés comparando: tarifas de móvil, pisos, cursos o recetas."
    - "Pide a Claude una tabla con las columnas que te importan y una línea final de resumen."
    - "Si la vas a pegar en otro sitio, di cuál y comprueba que se ve bien al pegarla."
  check: He pedido una respuesta en tabla y la he usado
practice:
  task: "Has apuntado precios y horarios de tres escuelas infantiles de tu barrio y quieres decidir con tu pareja. Escribe la petición con el formato exacto y dónde vas a usar el resultado."
  require: [formato]
  extra:
    - label: "Decir dónde lo vas a usar"
      any: ["pegar", "pegarlo", "lo copio", "whatsapp", "correo", "excel", "hoja de calculo", "diapositiva", "documento", "imprimir", "word", "movil"]
      hint: "Di dónde irá el resultado: «lo pego en una hoja de cálculo», «va en un WhatsApp»…"
  sample: "Estoy eligiendo escuela infantil para mi hija. Te pego abajo los precios y horarios de tres de mi barrio. Compara las tres en una tabla con columnas para cuota al mes, comedor, horario de entrada y salida, y plazas libres. Debajo, dos frases con la diferencia más importante. Sin introducción. Lo voy a pegar en una hoja de cálculo que comparto con mi pareja, así que no uses negritas ni emojis dentro de la tabla."
deeper: null
tool: constructor-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-docs, claude-ayuda]
---

## La idea

El mismo contenido sirve o no según **cómo te llega**. Una tabla se lee en segundos; cinco párrafos, no. Un texto con títulos queda bien en un documento, pero mal en un mensaje de móvil.

Lo que puedes pedir:

- **Estructura**: tabla (di las columnas), lista numerada, puntos, títulos y subtítulos, pregunta y respuesta.
- **Longitud**: «en tres frases», «menos de 100 palabras», «una página». Es orientativa: si el límite es estricto, compruébalo.
- **Idioma**: puedes escribir en español y pedir la respuesta en inglés, catalán, euskera, gallego u otro.
- **Registro**: formal, cercano, de tú o de usted, para un público experto o para cualquiera.
- **Orden**: «primero la conclusión y luego los motivos» es muy útil cuando lo va a leer alguien con prisa.

El truco más útil: **di dónde vas a usar el resultado**. «Es para pegar en un correo», «va en una diapositiva», «lo copio en Excel». Con eso Claude elige el formato por ti.

## En la práctica

Añade el formato al final de tu petición, como una línea aparte. Así es fácil de ver y de cambiar.

> Prueba: «Compara estas tres tarifas de móvil que te pego abajo. Formato: una tabla con columnas para precio al mes, gigas, permanencia y lo que pasa al acabar la promoción. Debajo, dos frases con la diferencia más importante. Sin introducción.»

Si te da la tabla pero luego la necesitas de otra forma, no hace falta repetirlo todo: «Ahora conviértelo en un texto para WhatsApp, sin tabla» o «Pásalo a formato que pueda pegar en una hoja de cálculo».

Ojo con los datos: una tabla ordenada parece más fiable, pero puede tener los mismos errores. Revisa las cifras con la fuente original antes de decidir.

## Error frecuente

No decir nada del formato y luego pasar diez minutos recortando y reorganizando el texto a mano. Una línea más en la petición lo evita.
