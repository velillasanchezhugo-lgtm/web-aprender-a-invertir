---
title: Tus datos con ChatGPT
description: "Qué no escribir nunca en ChatGPT, el ajuste que decide si tus chats sirven para entrenar, los chats temporales y cómo borrar o exportar tus datos."
level: cero
track: gpt-cero
order: 6
skills: [gpt-privacidad]
terms: [controles-de-datos, chat-temporal, datos-personales, openai]
hook: "Vas a pegar en ChatGPT tu contrato de alquiler entero, con tu DNI y tu cuenta bancaria, para que te explique una cláusula. ¿Sabes adónde va ese texto?"
takeaway: "Lo que escribes sale de tu dispositivo y se guarda en tu cuenta. No compartas contraseñas, datos bancarios ni datos de otros; decide en los controles de datos si tus chats ayudan a entrenar, y usa el chat temporal para lo que no quieras en tu historial."
scenario:
  kind: operacion
  label: Caso práctico
  title: El contrato de Raúl
  body: "Raúl no entiende la cláusula de la fianza de su contrato de alquiler. Iba a pegarlo entero, con su DNI, el de su casera, la dirección y el IBAN. Al final copia solo la cláusula y cambia los nombres por «inquilino» y «propietaria»."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-c06-q1
    q: "Raúl quiere entender una cláusula de su contrato de alquiler. ¿Qué hace?"
    options: ["Pegar el contrato completo en un chat temporal, que luego se borra", "Copiar solo la cláusula, sin nombres, DNI, dirección ni IBAN", "Pegarlo entero: es su propio contrato y nadie más lo ve"]
    answer: 1
    explain: "Para explicar una cláusula basta con la cláusula. El chat temporal tienta porque no queda en el historial, pero el texto sale igual de tu dispositivo y OpenAI puede conservarlo hasta 30 días. Además, el contrato lleva datos de su casera, que no son suyos."
  - type: truefalse
    id: gpt-c06-q2
    q: "Aunque hayas quitado «Mejorar el modelo para todos», si valoras una respuesta con el pulgar, esa conversación puede usarse para entrenar."
    answer: true
    explain: "Según el centro de ayuda de OpenAI, al valorar puedes enviar la conversación entera. Tienta pensar que el ajuste lo cubre todo, pero esta es una excepción: en chats delicados, no valores."
  - type: choice
    id: gpt-c06-q3
    q: "Begoña quiere conservar sus chats antes de borrar la cuenta. ¿Qué hace primero?"
    options: ["Borrar los chats y luego pedir una copia", "Archivar los chats: así se guardan fuera de la cuenta", "Exportar sus datos desde los controles de datos y esperar el correo con la descarga"]
    answer: 2
    explain: "La exportación te manda una copia de tus chats, y hay que pedirla antes de borrar: lo borrado no se recupera. Archivar tienta, pero solo quita el chat de la lista y se pierde con la cuenta."
tips:
  - "Si compartes un chat con un enlace, cualquiera que tenga ese enlace puede leerlo. Revisa qué contiene antes de mandarlo."
  - "Si usas ChatGPT con una cuenta de tu empresa (Business o Enterprise), las reglas sobre qué datos puedes usar las pone la empresa: pregúntalas."
action:
  title: Revisa tus controles de datos
  steps:
    - "Entra en la Configuración de ChatGPT y busca la sección de controles de datos."
    - "Mira el ajuste «Mejorar el modelo para todos» y decide si lo quieres activado o no."
    - "Localiza dónde se abre un chat temporal y dónde se exportan los datos."
    - "Apunta en «Mi kit de ChatGPT» qué has decidido y la fecha."
  check: He revisado mis controles de datos y he decidido qué quiero
practice:
  task: "Te llega una carta de la comunidad de propietarios sobre una derrama, con tu nombre, tu piso y tu cuenta. Escribe la petición para entenderla con huecos como [VECINO] en lugar de tus datos."
  require: [contexto, limites]
  extra:
    - label: Huecos en lugar de datos reales
      any: ["[", persona a, vecino a]
      hint: "Cambia cada dato personal por un hueco entre corchetes, como [NOMBRE] o [PISO]."
  sample: "He recibido una carta de la administración de mi comunidad de propietarios sobre una derrama para arreglar la fachada. Te copio el texto sin mis datos: donde salían mi nombre, mi piso y mi cuenta he puesto [VECINO], [PISO] y [IBAN]. Explícame en cuatro puntos sencillos qué me piden, cuándo tengo que pagar y qué pasa si no estoy de acuerdo. No inventes importes ni plazos que no aparezcan."
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

Lo que escribes viaja a los servidores de **OpenAI** y se guarda en tu cuenta. Regla de oro: **no escribas nada que no quieras guardado fuera de casa**.

**Nunca compartas:**

- **Contraseñas** ni códigos de verificación.
- **Datos bancarios**: tarjeta, PIN, claves de la banca en línea.
- **Datos de otras personas** (DNI, dirección, salud) sin su permiso. Son **datos personales**: cualquier dato que permita saber quién es alguien.
- **Información confidencial del trabajo** sin autorización.

**Los controles de datos.** Es una sección de la Configuración. Ahí está **«Mejorar el modelo para todos»**: decide si tus chats nuevos pueden usarse para entrenar los modelos. En las cuentas personales viene activado; puedes quitarlo cuando quieras y tus chats siguen en el historial.

**El chat temporal** **no queda en tu historial**, no crea recuerdos en la memoria y no se usa para entrenar. Aun así, OpenAI puede conservarlo **hasta 30 días** por seguridad.

**Borrar y exportar.** Puedes **borrar** un chat o todos: según el centro de ayuda, se eliminan de sus sistemas en unos 30 días, salvo obligaciones legales o de seguridad, y no se pueden recuperar. **Archivar** no es borrar: solo lo quita de la lista. Y puedes **exportar** una copia desde los controles de datos: te llega un enlace por correo. Para otras solicitudes, está el portal de privacidad de OpenAI (privacy.openai.com).

## En la práctica

Antes de pegar algo, pregúntate: **¿hay aquí datos de alguien o algo que no debería salir de casa?** Si es así, quítalo o cámbialo por un hueco.

> Prueba: «Te copio una cláusula de mi contrato de alquiler en la que he cambiado los nombres por "inquilino" y "propietaria". Explícame en palabras sencillas qué pasa con la fianza al final del contrato».

## Error frecuente

Creer que el chat temporal permite compartirlo todo. Lo que no debes escribir, no lo escribas en ningún modo.
