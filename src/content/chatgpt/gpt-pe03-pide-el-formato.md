---
title: Pide el formato
description: "Cómo pedirle a ChatGPT el formato exacto (tabla, lista, longitud, idioma o registro) y dejarlo listo para el sitio donde lo vas a pegar."
level: basico
track: gpt-pedir
order: 103
skills: [gpt-ejemplos-formato]
terms: [registro-linguistico, hoja-de-calculo]
hook: "Copias la respuesta de ChatGPT en el grupo de WhatsApp de la comunidad y aparece llena de asteriscos, almohadillas y títulos. ¿Cómo lo evitas desde el principio?"
takeaway: "Di cómo lo quieres y dónde lo vas a usar: tabla o lista, cuántas palabras, en qué idioma y con qué trato. «Es para pegarlo en WhatsApp» o «en una hoja de cálculo» cambia mucho el resultado."
scenario:
  kind: operacion
  label: Caso práctico
  title: Los seguros de Irene
  body: "Irene tiene tres presupuestos de seguro de hogar y le pide a ChatGPT que los compare. Recibe varios párrafos que no le dejan ver las diferencias. Repite la petición: una tabla con una fila por seguro y columnas para precio anual, franquicia y qué cubre en caso de agua; sin texto antes ni después, porque la va a pegar en una hoja de cálculo. Ahora lo ve de un vistazo."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-pe03-q1
    q: "Paco va a pegar un aviso de ChatGPT en el grupo de WhatsApp de los padres del equipo de fútbol. ¿Qué le pide?"
    options: ["Un aviso «bien presentado», con títulos y negritas", "Texto sencillo, sin títulos ni negritas, en menos de 60 palabras, porque va a WhatsApp", "Que lo haga como quiera y ya lo arreglará él"]
    answer: 1
    explain: "Las negritas y los títulos de ChatGPT pueden pegarse como símbolos raros en un mensaje. Decir dónde va y cuánto debe ocupar lo evita. «Bien presentado» tienta, pero es justo lo que llena el mensaje de adornos."
  - type: truefalse
    id: gpt-pe03-q2
    q: "Si pides «unas 100 palabras», ChatGPT siempre acertará la cifra exacta."
    answer: false
    explain: "Se acerca, pero no cuenta como un procesador de textos. Si el límite es estricto (un formulario, un campo con máximo), comprueba la longitud tú y pide que lo recorte si se pasa."
  - type: choice
    id: gpt-pe03-q3
    q: "Ane necesita en euskera un aviso formal para el ayuntamiento de su pueblo. ¿Qué es lo más eficaz?"
    options: ["Pedirlo en castellano y traducirlo después con otra herramienta", "Pedirlo directamente en euskera, en registro formal, y que lo revise alguien que lo domine si es importante", "Pedirlo en euskera sin decir nada del registro"]
    answer: 1
    explain: "ChatGPT puede escribir en euskera, catalán o gallego, y conviene decirle el registro desde el principio. En un idioma que no dominas, una revisión humana evita errores. Traducirlo en dos pasos tienta, pero suma errores en vez de quitarlos."
tips:
  - "Si quieres una tabla, di qué va en filas y qué en columnas: «una fila por seguro, columnas para precio, franquicia y cobertura»."
  - "Para usar el texto fuera, pide «sin introducción ni despedida»: te ahorras borrar el «¡Claro! Aquí tienes…»."
  - "Revisa siempre las cifras de una tabla con el documento original: ordenar bien no significa copiar bien."
action:
  title: Pide algo en tabla
  steps:
    - "Piensa en algo que estés comparando: tarifas, horarios, ofertas, recetas."
    - "Pide a ChatGPT una tabla diciendo qué va en filas, qué en columnas y dónde la vas a pegar."
    - "Comprueba dos datos con el original y guarda la petición en «Mi kit de ChatGPT»."
  check: He pedido una tabla con filas, columnas y destino, y he comprobado dos datos
practice:
  task: "El lunes cortan el agua en tu edificio de 9:00 a 13:00. Escribe la petición para que ChatGPT redacte el aviso para el tablón del portal y una versión para el grupo de WhatsApp."
  require: [formato, tono]
  extra:
    - label: "Decir dónde se va a pegar"
      any: ["whatsapp", "tablon", "portal", "correo", "hoja de calculo", "pegar", "imprimir", "instagram", "word"]
      hint: "Di dónde vas a usar el texto: «es para imprimirlo en el tablón» o «lo voy a pegar en WhatsApp»."
  sample: "Soy el presidente de la comunidad de vecinos de mi edificio. El lunes cortan el agua de 9:00 a 13:00 por una avería en la tubería general. Escribe dos versiones del aviso. La primera, para imprimir en el tablón del portal: un título en mayúsculas y tres frases como máximo. La segunda, para pegar en el grupo de WhatsApp: texto sencillo, sin negritas ni títulos, en menos de 40 palabras. Tono claro y amable, tratando de tú. Sin introducción ni despedida."
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

ChatGPT elige un formato por su cuenta: a menudo títulos, negritas y listas. A veces acierta, pero muchas veces no encaja con **dónde vas a usar el texto**. Pide la forma tú:

- **Estructura.** Tabla (di qué va en filas y en columnas), lista numerada, pasos, párrafos.
- **Longitud.** «Menos de 80 palabras», «tres puntos», «una página». Es aproximada: si hay un límite estricto, compruébalo.
- **Idioma.** Puede escribir en castellano, catalán, gallego, euskera o inglés. Pídelo directamente en el idioma final.
- **Registro.** El **registro** es el grado de formalidad: tutear o tratar de usted, lenguaje de calle o de oficina. Di cuál quieres.
- **Destino.** Lo más olvidado. «Es para WhatsApp», «para imprimir», «para pegarlo en una **hoja de cálculo**» (un programa de tablas como Excel). Cambia el resultado más que cualquier adjetivo.

Una tabla bien ordenada da sensación de exactitud, pero ChatGPT puede **equivocarse al copiar una cifra**. Si la tabla sirve para decidir, compara los números importantes con los documentos.

## En la práctica

Pon el formato al final de la petición, en una frase propia que empiece por «Formato:»:

> Prueba: «Tengo tres ofertas de tarifa de luz para mi piso y te pego sus condiciones abajo. Compáralas en una tabla: una fila por oferta y columnas para precio del kWh, precio de la potencia, permanencia y si es tarifa fija o variable. Formato: solo la tabla, sin texto antes ni después, porque la voy a pegar en una hoja de cálculo. Si falta un dato en una oferta, pon "no consta". No inventes cifras.»

Si el resultado no encaja, corrige solo el formato: «Ahora en una lista para el móvil». No hace falta repetir el resto.

## Error frecuente

Pegar el texto donde va sin mirarlo. Revisa que no queden asteriscos, títulos ni frases como «Aquí tienes tu aviso».
