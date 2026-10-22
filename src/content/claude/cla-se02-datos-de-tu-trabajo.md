---
title: Los datos de tu trabajo
description: Qué información de tu empresa y de tus clientes no debes pegar en una cuenta personal, qué preguntar en tu empresa y cómo anonimizar antes de usar Claude.
level: basico
track: cla-seguro
order: 602
skills: [cla-empresa-datos, cla-privacidad]
terms: [datos-personales, anonimizar, rgpd]
hook: "Tienes que resumir 40 reclamaciones de clientes para mañana. Copiarlas en tu cuenta de Claude te ahorraría dos horas. ¿Puedes hacerlo?"
takeaway: Los datos de tu empresa y de sus clientes no son tuyos. Antes de usarlos con Claude, pregunta qué permite tu empresa, usa la cuenta que te dé y, si no hay, quita todo lo que identifique a alguien.
scenario:
  kind: empresa
  label: Caso práctico
  title: Las reclamaciones de Javier
  body: "Javier, de atención al cliente de una tienda online, quiere que Claude agrupe las quejas del mes. Pregunta a su responsable: no hay plan de empresa, pero se permite con datos anonimizados. Javier quita nombres, correos y números de pedido antes de pegarlas."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-se02-q1
    q: "Nuria, de una gestoría, quiere que Claude revise la declaración de la renta de un cliente con su nombre y su DNI. Solo tiene su cuenta personal y la gestoría no ha dicho nada sobre IA. ¿Qué hace primero?"
    options: ["Sube el documento: es para ayudar al cliente", "Pregunta a la gestoría qué está permitido y, mientras, no sube datos del cliente", "Lo sube en un chat de incógnito y así no hay problema"]
    answer: 1
    explain: "Los datos del cliente los controla la gestoría, no Nuria, y son datos protegidos. El chat de incógnito tienta porque no queda en tu historial, pero los datos salen igual de la empresa sin su permiso."
  - type: truefalse
    id: cla-se02-q2
    q: "Para anonimizar un documento basta con cambiar el nombre de la persona."
    answer: false
    explain: "Un DNI, una dirección, un cargo único o una fecha concreta pueden delatar a alguien. Hay que quitar o cambiar todo lo que permita saber de quién se habla."
  - type: choice
    id: cla-se02-q3
    q: "¿Cuál es, en general, la diferencia entre un plan personal y uno de empresa de Claude en el uso de tus conversaciones?"
    options: ["Ninguna: todas se tratan igual", "En los de empresa, la organización controla los datos y, según Anthropic, no se usan para entrenar sus modelos por defecto", "En los personales nunca se guarda nada"]
    answer: 1
    explain: "En los planes de empresa manda la organización, con un contrato propio. En los personales, tú decides en Ajustes si tus chats ayudan a mejorar los modelos. Que no se guarde nada es falso en ambos casos."
tips:
  - "Si tu empresa tiene una cuenta de Claude, usa esa para el trabajo y tu cuenta personal para lo tuyo."
  - "Lo más delicado nunca va: contraseñas, datos de salud, nóminas, cuentas bancarias, contratos confidenciales."
action:
  title: Pregunta la norma de tu empresa
  steps:
    - "Busca si tu empresa tiene una política sobre IA (en la intranet o preguntando a tu responsable)."
    - "Si no la tiene, escribe en «Mi kit de Claude» tu regla: «Datos de clientes y de la empresa, solo anonimizados»."
    - "En tu cuenta personal, revisa en Ajustes la opción de privacidad que decide si tus chats ayudan a mejorar los modelos."
  check: He comprobado qué permite mi empresa y he escrito mi regla sobre datos del trabajo
practice:
  task: "Trabajas en recursos humanos y tienes las respuestas de la encuesta interna de tu oficina, con nombres y departamentos. Escribe la petición para que Claude las agrupe, sin datos que identifiquen a nadie."
  require: [contexto, formato, limites]
  extra:
    - label: Decir que los datos van anonimizados
      any: [anonimiz, he quitado, sin nombres, he cambiado, empleado 1, persona 1, persona a, empleado a]
      hint: "Quita nombres y detalles que delaten a alguien, ponlos como «Empleado 1» y dilo en la petición."
  sample: "Trabajo en recursos humanos en una empresa de 30 personas y mi responsable me ha confirmado que puedo usar IA con datos anonimizados. Te paso las respuestas de la encuesta interna de satisfacción: he quitado nombres, departamentos y cualquier detalle que delate a alguien, y cada persona aparece como «Empleado 1», «Empleado 2»… Agrúpalas por tema en una tabla con el número de respuestas de cada uno y propón tres mejoras. No intentes adivinar quién ha escrito cada respuesta, no repitas ningún dato personal y, si ves alguno, avísame."
deeper: null
tool: anonimizador
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-privacidad, aepd, claude-planes]
---

## La idea

Lo que pegas en un chat sale de tu ordenador y llega al servicio de Claude. Con tus cosas decides tú. Con las del trabajo, **no**: la información de la empresa y de sus clientes la controla la empresa.

**Qué no subir a una cuenta personal** sin permiso:

- Datos de clientes, pacientes, alumnos o empleados.
- Contratos, ofertas, cifras internas, planes que no son públicos.
- Contraseñas, claves y datos bancarios (estos, nunca, en ninguna cuenta).

En España y en la UE manda el **RGPD**, la ley europea que protege los datos personales: para pasar datos de clientes a un servicio externo, la empresa necesita un motivo legal y un contrato con ese proveedor. Tú solo no puedes darlo.

**Planes personales y de empresa**, en general (compruébalo en privacy.claude.com y support.claude.com, porque cambia):

- **Personales** (gratis y de pago): tú decides en Ajustes si tus conversaciones se usan para mejorar los modelos de Anthropic.
- **De empresa** (Team, Enterprise): la organización controla los datos y tiene su propio contrato. Anthropic dice que no usa ese contenido para entrenar sus modelos por defecto.

## En la práctica

1. **Pregunta** si tu empresa tiene normas sobre IA y una cuenta de empresa. Si la hay, usa esa.
2. Si no la hay, **anonimiza** antes de pegar: quita nombres, DNI, teléfonos, correos, direcciones, números de pedido y cualquier detalle que delate a alguien.
3. Cambia los datos reales por etiquetas: «Cliente A», «Empresa X», «[importe]».

> Prueba: «Te paso unas quejas de clientes ya anonimizadas. Agrúpalas por tema, dime cuántas hay de cada uno y propón una respuesta tipo para el tema más repetido. Si ves algún dato que identifique a alguien, avísame y no lo repitas.»

Si tienes dudas, la Agencia Española de Protección de Datos (AEPD) tiene guías sencillas.

## Error frecuente

Pensar que, como el objetivo es bueno («es para ayudar al cliente»), se puede subir lo que sea. El permiso no depende de tu intención, sino de lo que permita la empresa.
