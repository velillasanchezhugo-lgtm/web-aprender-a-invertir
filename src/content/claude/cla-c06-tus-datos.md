---
title: Tus datos con Claude
description: Qué no deberías escribir nunca en Claude, el ajuste que decide si tus chats sirven para mejorar los modelos, los chats incógnito y cómo borrar o exportar.
level: cero
track: cla-cero
order: 6
skills: [cla-privacidad]
terms: [chat-incognito, anthropic]
hook: "Vas a pegar en Claude el informe de un cliente para que te lo resuma. ¿Sabes adónde va ese texto y quién puede verlo después?"
takeaway: Lo que escribes en Claude se guarda en tu cuenta y puede conservarse un tiempo aunque lo borres. No compartas contraseñas, datos bancarios ni datos de otras personas, y revisa hoy tu ajuste de privacidad.
scenario:
  kind: empresa
  label: Caso práctico
  title: Las nóminas de Sergio
  body: "Sergio trabaja en recursos humanos. Quiere que Claude revise una hoja con sueldos, DNI y bajas médicas de la plantilla. Antes de pegarla, decide quitar nombres y DNI y preguntar a su empresa qué herramienta de IA está autorizada."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-c06-q1
    q: "Sergio quiere ayuda con una hoja que tiene nombres, DNI, sueldos y bajas médicas de sus compañeros. ¿Qué hace primero?"
    options: ["Pegarla en un chat incógnito: así no queda nada", "Quitar los datos personales y preguntar a su empresa qué herramienta puede usar", "Pegarla tal cual: es su cuenta personal y nadie más la ve"]
    answer: 1
    explain: "Son datos de terceros, y algunos de salud, que la ley protege especialmente; además, es información de la empresa. El incógnito tienta porque «no se guarda», pero no se guarda en tu historial: el texto sí sale de tu ordenador y se conserva un tiempo. El problema es compartirlo, no el historial."
  - type: truefalse
    id: cla-c06-q2
    q: "Si desactivas el ajuste que permite usar tus chats para mejorar los modelos, Claude deja de guardar tus conversaciones."
    answer: false
    explain: "Son cosas distintas. Ese ajuste decide si tus chats pueden usarse para entrenar modelos; tus conversaciones siguen en tu historial hasta que las borres. Tienta pensar que es un «modo privado» total, pero no lo es."
  - type: choice
    id: cla-c06-q3
    q: "¿Cuál de estas cosas es razonable escribir en Claude?"
    options: ["La contraseña de tu banco para que te diga si es segura", "La foto de tu tarjeta para que te ayude con una compra", "Un texto tuyo para mejorar la redacción, sin nombres ni datos de otras personas"]
    answer: 2
    explain: "Un texto tuyo sin datos sensibles es el uso ideal. Comprobar una contraseña tienta porque parece útil, pero una contraseña no se escribe en ningún sitio que no sea donde se usa."
tips:
  - "Para pedir ayuda con un caso real, cambia nombres por «persona A» o «cliente 1» y quita DNI, direcciones y cuentas: el resultado sale igual de bueno."
action:
  title: Revisa tus ajustes de privacidad
  steps:
    - "Entra en Ajustes, en la sección de privacidad de Claude."
    - "Busca el ajuste sobre si tus chats pueden usarse para mejorar los modelos y decide si lo quieres activado o no."
    - "Borra alguna conversación antigua que ya no necesites."
    - "Apunta en tu nota de «Mi kit de Claude» qué has decidido y la fecha."
  check: He revisado mi ajuste de privacidad y he decidido qué quiero
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-privacidad, anthropic-privacidad, aepd-guias]
---

## La idea

Lo que escribes en Claude viaja a los servidores de **Anthropic** y se guarda en tu historial. Regla de oro: **no escribas nada que no te importaría que se guardara fuera de tu ordenador**.

**Nunca compartas:**

- **Contraseñas** ni códigos de verificación.
- **Datos bancarios**: número de tarjeta, PIN, claves de la banca en línea.
- **Datos de salud** o personales **de otras personas** (DNI, dirección, teléfono) sin su permiso.
- **Información confidencial del trabajo** si tu empresa no lo ha autorizado.

**El ajuste de entrenamiento.** En la sección de privacidad de los ajustes hay una opción que decide si tus chats pueden usarse para **mejorar los modelos** de Claude. Puedes cambiarla cuando quieras. Si lo permites, Anthropic conserva esos datos más tiempo. Si valoras una respuesta con el pulgar, esa conversación se puede guardar y usar para mejorar el servicio. Cómo funciona exactamente cambia de vez en cuando: compruébalo hoy en **privacy.claude.com**.

**El chat incógnito.** Es una conversación temporal que **no queda en tu historial** ni en la memoria de Claude, y que no se usa para entrenar. Está en todos los planes. Aun así, se conserva un tiempo limitado por seguridad.

**Borrar y exportar.** Puedes **borrar** cualquier conversación de tu historial. Y puedes **exportar** tus datos (una copia de tus chats) desde los ajustes de privacidad en la web o el escritorio; te llega un enlace por correo.

## En la práctica

Antes de pegar algo, pregúntate: **¿hay aquí datos de alguien o algo que no debería salir de casa o de la oficina?** Si es así, quítalo o cámbialo por algo genérico.

> Prueba: «Te pego un correo de un cliente en el que he cambiado su nombre por "Cliente A" y he quitado sus datos. Ayúdame a contestarle con amabilidad, explicando que el pedido llegará con una semana de retraso».

## Error frecuente

Creer que el chat incógnito permite compartirlo todo. Lo que no debes escribir, no lo escribas en ningún modo.
