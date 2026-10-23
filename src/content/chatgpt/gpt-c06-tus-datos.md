---
title: Tus datos con ChatGPT
description: "Qué no escribir nunca en ChatGPT, el ajuste que decide si tus chats sirven para entrenar, los chats temporales y cómo borrar o exportar tus datos."
level: cero
track: gpt-cero
order: 6
skills: [gpt-privacidad]
terms: [controles-de-datos, chat-temporal, datos-personales, openai]
hook: "Vas a pegar en ChatGPT tu contrato de alquiler entero, con tu DNI y tu cuenta bancaria, para que te explique una cláusula. ¿Sabes adónde va ese texto?"
takeaway: "Lo que escribes en ChatGPT sale de tu dispositivo y se guarda en tu cuenta. No compartas contraseñas, datos bancarios ni datos de otras personas; revisa hoy en los controles de datos si tus chats ayudan a entrenar, y usa el chat temporal para lo que no quieras en tu historial."
scenario:
  kind: operacion
  label: Caso práctico
  title: El contrato de Raúl
  body: "Raúl no entiende una cláusula de su contrato de alquiler sobre la fianza. Iba a pegar el contrato entero, con su DNI, el de su casera, la dirección y el IBAN. Al final copia solo la cláusula, cambia los nombres por «inquilino» y «propietaria», y le pide a ChatGPT que se la explique."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-c06-q1
    q: "Raúl quiere entender una cláusula de su contrato de alquiler. ¿Qué hace?"
    options: ["Pegar el contrato completo en un chat temporal, que luego se borra", "Copiar solo la cláusula, sin nombres, DNI, dirección ni IBAN", "Pegarlo entero: es su propio contrato y nadie más lo ve"]
    answer: 1
    explain: "Para explicar una cláusula basta con la cláusula. El chat temporal tienta porque no queda en el historial, pero el texto sale igualmente de tu dispositivo y OpenAI puede conservarlo hasta 30 días. Además, el contrato tiene datos de su casera, que no son suyos."
  - type: truefalse
    id: gpt-c06-q2
    q: "Si desactivas «Mejorar el modelo para todos», ChatGPT deja de guardar tus conversaciones en el historial."
    answer: false
    explain: "Son cosas distintas. Ese ajuste decide si tus chats nuevos pueden usarse para entrenar modelos; tus conversaciones siguen en el historial hasta que las borres. Tienta pensar que es un «modo privado» total, pero no lo es."
  - type: choice
    id: gpt-c06-q3
    q: "Begoña quiere conservar sus chats antes de borrar la cuenta. ¿Qué hace primero?"
    options: ["Borrar los chats y luego pedir una copia", "Exportar sus datos desde los controles de datos y esperar el correo con la descarga", "Archivar los chats: así se guardan fuera de la cuenta"]
    answer: 1
    explain: "La exportación te manda una copia de tus chats y datos de la cuenta. Hay que hacerlo antes de borrar: lo borrado ya no se puede exportar. Archivar tienta, pero solo esconde el chat de la lista; sigue en tu cuenta y se pierde con ella."
tips:
  - "Si compartes un chat con un enlace, cualquiera que tenga ese enlace puede leerlo. Revisa qué contiene antes de mandarlo."
  - "Para un caso real, cambia nombres por «persona A» o «cliente 1» y quita DNI, direcciones y cuentas: la respuesta sale igual de útil."
action:
  title: Revisa tus controles de datos
  steps:
    - "Entra en la Configuración de ChatGPT y busca la sección de controles de datos."
    - "Mira el ajuste «Mejorar el modelo para todos» (o como se llame ahora) y decide si lo quieres activado o no."
    - "Localiza dónde se abre un chat temporal y dónde se exportan los datos, aunque hoy no los uses."
    - "Apunta en «Mi kit de ChatGPT» qué has decidido y la fecha."
  check: He revisado mis controles de datos y he decidido qué quiero
practice:
  task: "Quieres que ChatGPT te explique los conceptos de tu nómina de este mes. Escribe la petición sin tu nombre, DNI, número de la Seguridad Social, empresa ni IBAN: pon huecos como [EMPRESA] donde hagan falta."
  require: [contexto, limites]
  extra:
    - label: Huecos en lugar de datos reales
      any: ["[", persona a, trabajador a]
      hint: "Cambia cada dato personal por un hueco entre corchetes, como [NOMBRE] o [EMPRESA]."
  sample: "Trabajo a jornada completa y no entiendo algunos conceptos de mi nómina. Te copio solo las líneas de devengos y deducciones, sin mi nombre, DNI, número de la Seguridad Social ni cuenta: donde salían, he puesto [NOMBRE], [EMPRESA] y [IBAN]. Explícame cada concepto en una frase sencilla y dime cuáles conviene preguntar a la gestoría. No inventes importes."
deeper: null
tool: anonimizador
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-privacidad, openai-privacidad-portal]
---

## La idea

Lo que escribes en ChatGPT viaja a los servidores de **OpenAI** y se guarda en tu cuenta. Regla de oro: **no escribas nada que no te importaría que se guardara fuera de tu casa**.

**Nunca compartas:**

- **Contraseñas** ni códigos de verificación.
- **Datos bancarios**: tarjeta, PIN, claves de la banca en línea.
- **Datos personales de otras personas** (DNI, dirección, salud) sin su permiso. Son **datos personales**: cualquier dato que permita saber quién es alguien.
- **Información confidencial del trabajo** si tu empresa no lo ha autorizado.

**Los controles de datos.** En la Configuración hay una sección de **controles de datos**. Ahí está el ajuste **«Mejorar el modelo para todos»**: decide si tus chats pueden usarse para entrenar los modelos. En las cuentas personales viene activado; puedes quitarlo cuando quieras y vale para toda tu cuenta. Tus chats siguen en el historial.

**El chat temporal.** Es una conversación que **no queda en tu historial**, no crea recuerdos en la memoria y no se usa para entrenar. Aun así, según OpenAI, se conserva **hasta 30 días** por seguridad antes de borrarse.

**Borrar y exportar.** Puedes **borrar** un chat o todos; según el centro de ayuda, se eliminan de sus sistemas en unos 30 días, salvo obligaciones legales o de seguridad. **Archivar** no es borrar: solo lo quita de la lista. Y puedes **exportar** una copia de tus datos desde los controles de datos: te llega por correo. Para otras solicitudes, OpenAI tiene un portal de privacidad (privacy.openai.com).

## En la práctica

Antes de pegar algo, pregúntate: **¿hay aquí datos de alguien o algo que no debería salir de casa o de la oficina?** Si es así, quítalo o cámbialo por un hueco.

> Prueba: «Te copio una cláusula de mi contrato de alquiler en la que he cambiado los nombres por "inquilino" y "propietaria". Explícame en palabras sencillas qué pasa con la fianza al final del contrato y qué debería preguntar antes de firmar la salida».

## Error frecuente

Creer que el chat temporal permite compartirlo todo. Lo que no debes escribir, no lo escribas en ningún modo.
