---
title: Claude en el móvil, con voz y cámara
description: Cómo usar Claude en el móvil hablando o con fotos, para qué sirve en la calle y qué no conviene fotografiar ni contar en voz alta.
level: basico
track: cla-funciones
order: 208
skills: [cla-modelos-modos, cla-acceso, cla-privacidad]
terms: [modo-voz, alucinacion]
hook: "Estás en una farmacia en Oporto, el prospecto está en portugués y no sabes si el jarabe lleva lo que no puedes tomar. Tienes el móvil en la mano. ¿Cómo te ayuda Claude y dónde está el límite?"
takeaway: En el móvil puedes hablar con Claude, dictarle y mandarle fotos para que te traduzca o te explique algo. Fotografía solo lo necesario, tapa los datos personales y, en temas de salud o dinero, confirma con un profesional.
scenario:
  kind: producto
  label: Caso práctico
  title: La factura de Manuel
  body: "A Manuel le llega una factura de la luz más alta de lo normal. Saca una foto con la app de Claude, tapando antes su nombre, su dirección y el código del contrato, y pregunta qué concepto ha subido. Claude le señala el consumo y le explica el término de potencia. Manuel lo comprueba en el área de cliente de su compañía antes de reclamar."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-fu08-q1
    q: "Laia quiere que Claude le explique una carta del banco. ¿Qué foto manda?"
    options: ["La carta entera, con su IBAN y su DNI a la vista", "La carta con el IBAN, el DNI y la dirección tapados", "Una foto de su tarjeta para que Claude lo compruebe todo"]
    answer: 1
    explain: "Para entender la carta, a Claude le basta el texto; los datos que te identifican sobran. Mandarla entera tienta por rapidez, pero esos datos quedan en tu historial. Una tarjeta no se fotografía nunca."
  - type: truefalse
    id: cla-fu08-q2
    q: "El modo voz y el dictado son lo mismo: en los dos Claude te contesta hablando."
    answer: false
    explain: "Con el dictado solo conviertes tu voz en texto escrito. En el modo voz mantienes una conversación hablada y Claude también te responde con voz."
  - type: choice
    id: cla-fu08-q3
    q: "En un viaje, Claude te traduce el prospecto de un medicamento a partir de una foto. ¿Qué haces con la traducción?"
    options: ["Tomas la dosis que dice la traducción", "La usas para entender lo general y confirmas la dosis y las alergias con el farmacéutico", "Pides a Claude que te recete otro medicamento"]
    answer: 1
    explain: "Una traducción puede tener errores, y en salud un error cuesta caro. Claude te ayuda a entender, pero la dosis la confirma un profesional. Fiarse tienta porque la traducción suena segura."
tips:
  - "Antes de una foto, recorta o tapa nombres, direcciones, números de cuenta y caras de otras personas."
  - "En la calle, el dictado es más discreto que el modo voz: no todo el mundo tiene que oír tu pregunta."
  - "Si usas la voz en otro idioma que no sea el inglés, revisa la transcripción: esa parte aún está en pruebas."
action:
  title: Prueba la voz y una foto
  steps:
    - "Instala o abre la app de Claude en el móvil."
    - "Haz una pregunta por voz o dictándola (por ejemplo, una receta con lo que hay en tu nevera)."
    - "Fotografía algo sin datos personales, como un cartel o una etiqueta, y pide que te lo explique o lo traduzca."
    - "Apunta en «Mi kit de Claude» qué datos no fotografiarás nunca."
  check: He usado Claude en el móvil con la voz y con una foto sin datos personales
practice:
  task: "Te llega una multa de aparcamiento de otra ciudad y vas a mandar a Claude una foto desde el móvil. Escribe el mensaje que acompaña la foto: qué datos has tapado y qué quieres saber."
  require: [limites, verificar]
  extra:
    - label: "Decir qué datos has tapado"
      any: ["tapado", "tape", "he quitado", "recortado", "oculto", "borrado"]
      hint: "Antes de la foto, tapa nombre, dirección y matrícula, y dilo en el mensaje."
  sample: "Te mando la foto de una multa de aparcamiento que me ha llegado del Ayuntamiento de Santander. He tapado mi nombre, mi dirección y la matrícula. Explícame en lenguaje sencillo qué dice: de qué me acusan, cuánto pago si lo hago pronto y hasta qué fecha puedo recurrir. Dime si alguna parte no se lee bien, en lugar de adivinarla. Solo explícame las opciones: la decisión de recurrir la tomo yo."
deeper: null
tool: anonimizador
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda, aepd-guias]
---

## La idea

La app de Claude para el móvil (iPhone y Android) hace lo mismo que la web y añade tres formas de pedir cosas:

- **Modo voz.** Hablas con Claude y te responde con voz, como en una llamada. Está en todos los planes, gratis y de pago, y funciona mejor en el móvil. La conversación se guarda **como texto** en tu historial. El español funciona, pero los idiomas distintos del inglés están aún **en pruebas**.
- **Dictado.** Dices tu mensaje y se convierte en texto escrito, que puedes revisar antes de enviarlo. Claude contesta por escrito.
- **Fotos.** Desde el botón de añadir puedes sacar una foto con la cámara o elegir una de tu galería.

**Usos en la calle:**

- Traducir un cartel, una carta de restaurante o unas instrucciones.
- Entender una factura, una multa o una carta oficial.
- Preparar en voz alta lo que vas a decir en una entrevista o una llamada difícil.

**Con cuidado.** Lo que fotografías queda en tu historial. Evita o tapa:

- DNI, tarjetas, números de cuenta y contraseñas.
- Recetas médicas e informes con tu nombre.
- Caras de otras personas o documentos ajenos.

Claude puede **leer mal** una foto borrosa o inventarse un dato que no ve bien (una **alucinación**). En salud, dinero y trámites, confírmalo con la fuente o con un profesional.

## En la práctica

1. Abre la app y elige: icono de voz para conversar, micrófono para dictar, botón de añadir para la cámara.
2. Saca la foto **recta, con buena luz y solo de lo necesario**.
3. Di qué quieres: traducir, explicar, resumir.

> Prueba (con una foto de un cartel o de una carta de restaurante): «Tradúceme esto al español. Si hay alguna palabra que no se lee bien, dímelo en lugar de adivinarla, y explícame en una frase cualquier plato o término que no sea común en España».

## Error frecuente

Mandar la foto de un documento entero con todos tus datos para preguntar una sola cosa. Recorta antes de enviar.
