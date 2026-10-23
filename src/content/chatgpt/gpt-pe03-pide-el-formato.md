---
title: Pide el formato
description: "Cómo pedir a ChatGPT el formato exacto (tabla, lista, longitud, idioma o registro) y dejarlo listo para donde lo vas a pegar."
level: basico
track: gpt-pedir
order: 103
skills: [gpt-ejemplos-formato]
terms: [registro-linguistico, hoja-de-calculo]
hook: "Copias la respuesta de ChatGPT en el grupo de WhatsApp de la comunidad y aparece llena de asteriscos y almohadillas. ¿Cómo lo evitas desde el principio?"
takeaway: "Di cómo lo quieres y dónde lo vas a usar: tabla o lista, cuántas palabras, en qué idioma y con qué trato. «Es para pegarlo en WhatsApp» o «en una hoja de cálculo» cambia mucho el resultado."
scenario:
  kind: operacion
  label: Caso práctico
  title: Los seguros de Irene
  body: "Irene pide a ChatGPT que compare tres presupuestos de seguro de hogar y recibe párrafos que no dejan ver las diferencias. Repite: una tabla con una fila por seguro y columnas para precio, franquicia y cobertura de agua, para imprimirla y decidir con su madre. Ahora lo ve de un vistazo."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-pe03-q1
    q: "Inés tiene que pegar su motivación en el formulario online de una beca. El campo admite como máximo 1.000 caracteres y no acepta negritas. ¿Qué hace?"
    options: ["Pide «un texto corto» y lo pega sin mirar", "Pide unas 150 palabras en texto sencillo, comprueba la longitud y, si se pasa, pide recortar", "Pide el texto más completo posible para impresionar"]
    answer: 1
    explain: "Destino y longitud acercan mucho el resultado, pero ChatGPT no cuenta como un procesador de textos: con un límite estricto, compruébalo tú. «Corto» tienta por rápido, pero no dice cuánto y el formulario puede cortar el final."
  - type: truefalse
    id: gpt-pe03-q2
    q: "Si ChatGPT ordena en una tabla los datos de tus documentos, puedes dar por hecho que ha copiado bien todas las cifras."
    answer: false
    explain: "Puede cambiar una cifra o ponerla en otra fila. Tienta fiarse porque se ve ordenado. Si vas a decidir con ella, compara los números importantes con el original."
  - type: choice
    id: gpt-pe03-q3
    q: "Ane pide a ChatGPT un correo para la secretaría de su facultad solicitando la revisión de un examen. Le sale tuteando y con un «¡Hola!». ¿Qué le pide?"
    options: ["Nada: lo importante es el contenido", "Registro formal, tratando de usted, con saludo y despedida de correo oficial", "Que lo haga «más serio» y con palabras más técnicas"]
    answer: 1
    explain: "El registro es el grado de formalidad, y en un trámite cuenta. Decirlo así cambia el trato, el saludo y la despedida. «Más serio» tienta, pero puede llenarlo de palabras rebuscadas sin cambiar lo que importa."
tips:
  - "Si casi nunca quieres títulos ni listas, puedes pedir menos en la personalización de ChatGPT (lo verás en la última sesión del módulo)."
  - "Para usar el texto fuera, pide «sin introducción ni despedida»: te ahorras borrar el «¡Claro! Aquí tienes…»."
action:
  title: Pide algo en tabla
  steps:
    - "Piensa en algo que estés comparando: tarifas, horarios, ofertas."
    - "Pide una tabla diciendo qué va en filas, qué en columnas y dónde la vas a pegar."
    - "Comprueba dos datos con el original y guarda la petición en «Mi kit de ChatGPT»."
  check: He pedido una tabla con filas, columnas y destino, y he comprobado dos datos
practice:
  task: "El lunes cortan el agua en tu edificio de 9:00 a 13:00. Escribe la petición para que ChatGPT redacte el aviso para el tablón del portal y una versión para el grupo de WhatsApp."
  require: [formato, tono]
  extra:
    - label: "Decir dónde se va a pegar"
      any: ["whatsapp", "tablon", "portal", "correo", "hoja de calculo", "pegar", "imprimir", "instagram", "word"]
      hint: "Di dónde vas a usar el texto: «es para imprimirlo en el tablón» o «lo voy a pegar en WhatsApp»."
  sample: "Soy el presidente de la comunidad de vecinos de mi edificio. El lunes cortan el agua de 9:00 a 13:00. Escribe dos versiones del aviso. La primera, para imprimir en el tablón del portal: un título en mayúsculas y tres frases como máximo. La segunda, para pegar en el grupo de WhatsApp: texto sencillo, sin negritas ni títulos, en menos de 40 palabras. Tono claro y amable, tratando de tú. Sin introducción ni despedida."
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

ChatGPT elige un formato por su cuenta, a menudo con títulos, negritas y listas. Muchas veces no encaja con **dónde vas a usar el texto**. Pide la forma tú:

- **Estructura.** Tabla (di qué va en filas y en columnas), lista numerada, pasos, párrafos.
- **Longitud.** «Menos de 80 palabras», «tres puntos». Es aproximada: si hay un límite estricto, compruébalo.
- **Idioma.** Puede escribir en castellano, catalán, gallego, euskera o inglés. Pídelo en el idioma final y, si no lo dominas y es importante, que lo revise alguien que sí.
- **Registro.** El **registro** es el grado de formalidad: tutear o tratar de usted, lenguaje de calle o de oficina.
- **Destino.** Lo más olvidado: «es para WhatsApp», «para imprimir», «para pegarlo en una **hoja de cálculo**» (un programa de tablas como Excel). Cambia el resultado más que cualquier adjetivo.

Ojo: una tabla ordenada no garantiza que **las cifras estén bien copiadas**. Si sirve para decidir, compáralas con los documentos.

## En la práctica

Pon el formato al final, en una frase que empiece por «Formato:»:

> Prueba: «Te pego abajo tres ofertas de tarifa de luz para mi piso. Compáralas en una tabla: una fila por oferta y columnas para precio del kWh, precio de la potencia, permanencia y si es fija o variable. Formato: solo la tabla, sin texto antes ni después, porque la voy a pegar en una hoja de cálculo. Si falta un dato en una oferta, pon "no consta". No inventes cifras.»

Si no encaja, corrige solo el formato: «Ahora en una lista para el móvil».

## Error frecuente

Pegar el texto sin mirarlo. Revisa que no queden asteriscos ni frases como «Aquí tienes tu aviso».
