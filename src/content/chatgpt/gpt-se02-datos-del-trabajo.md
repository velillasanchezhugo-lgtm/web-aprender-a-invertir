---
title: "Datos del trabajo: qué pegar y dónde"
description: Qué cambia entre tu cuenta personal de ChatGPT y una de empresa en el uso de los datos, qué no pegar nunca y cómo anonimizar antes.
level: basico
track: gpt-seguro
order: 702
skills: [gpt-empresa-datos, gpt-privacidad]
terms: [datos-personales, anonimizar, rgpd, controles-de-datos]
hook: "Pegar en ChatGPT las 25 solicitudes de presupuesto del mes te ahorraría la tarde. Llevan nombres, teléfonos y direcciones de clientes. ¿Da igual si lo haces en tu cuenta personal o en la de la empresa?"
takeaway: Lo que pegas del trabajo es de la empresa y de sus clientes. Con cuenta de empresa, sigue su norma; con la personal, solo con permiso y sin nada que identifique a nadie.
scenario:
  kind: empresa
  label: Caso práctico
  title: El sábado de Eloy
  body: "Eloy trabaja en una empresa de reformas que tiene ChatGPT Business. La norma interna es clara: datos de clientes, solo en la cuenta de empresa. Un sábado, desde el móvil, va a pegar las solicitudes de presupuesto en su cuenta personal para adelantar trabajo. Se acuerda de la norma, prepara solo la estructura de la tabla y el lunes hace el resto en la cuenta de empresa."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-se02-q1
    q: "Maribel, administrativa de una clínica dental, quiere que ChatGPT le ayude con los recordatorios de cita. La clínica no tiene cuenta de empresa ni norma sobre IA. ¿Qué pega?"
    options: ["La lista de pacientes con su tratamiento, para personalizar cada mensaje", "Nada de pacientes: pide una plantilla con huecos como [nombre] y [hora], y pregunta a la clínica", "La lista de pacientes, pero en un chat temporal"]
    answer: 1
    explain: "Son datos de salud, de los más protegidos, y los controla la clínica. El chat temporal tienta porque parece más privado, pero los datos salen igualmente de la clínica sin su permiso. Una plantilla con huecos no tiene riesgo."
  - type: truefalse
    id: gpt-se02-q2
    q: "Si desactivas en tu cuenta personal la opción de que tus chats mejoren los modelos, ya puedes pegar datos de clientes."
    answer: false
    explain: "Ese ajuste decide si OpenAI entrena con tus chats, no si la empresa te deja sacar sus datos. Tienta pensar que lo soluciona, pero el permiso lo da la empresa, con un contrato con el proveedor."
  - type: choice
    id: gpt-se02-q3
    q: "Tu empresa tiene ChatGPT Business y en el móvil usas también tu cuenta personal. ¿Dónde pegas el borrador de un contrato con un cliente?"
    options: ["En la de empresa, siguiendo la norma interna", "En la personal, que es la que tienes a mano", "En cualquiera de las dos: es el mismo ChatGPT"]
    answer: 0
    explain: "En los planes de empresa OpenAI no entrena con los datos por defecto y hay administración y contrato propios. La personal tienta porque está a mano, pero el contrato saldría de la empresa sin ese marco."
tips:
  - "Si usas las dos cuentas en el mismo móvil, mira cuál tienes abierta antes de pegar nada."
  - "Nunca, en ninguna cuenta: contraseñas, claves de acceso, números de tarjeta ni datos bancarios completos."
action:
  title: Pregunta la norma y revisa tu ajuste
  steps:
    - "Pregunta a tu responsable si hay norma sobre IA y si la empresa tiene cuenta de ChatGPT."
    - "En tu cuenta personal, abre los controles de datos en Configuración y decide si tus chats ayudan a mejorar los modelos."
    - "Escribe en «Mi kit de ChatGPT» tu regla: «Datos de clientes y de la empresa, solo con permiso y anonimizados»."
  check: He preguntado la norma de mi empresa, he revisado mis controles de datos y he escrito mi regla
practice:
  task: "Trabajas en una inmobiliaria y te han llegado por correo seis consultas de posibles compradores. Escribe la petición para que ChatGPT te ayude a responderlas, sin datos que identifiquen a nadie."
  require: [contexto, formato, limites]
  extra:
    - label: Decir que los datos van anonimizados
      any: [anonimiz, he quitado, he borrado, sin nombres, he cambiado, comprador 1, cliente 1, cliente a, datos ya quitados]
      hint: "Cambia los nombres por «[COMPRADOR 1]» o «Cliente A», quita teléfonos, correos y direcciones, y dilo en la petición."
  sample: "Trabajo en una inmobiliaria y la dirección me deja usar ChatGPT sin datos personales. Te pego seis consultas de posibles compradores: he cambiado los nombres por [COMPRADOR 1], [COMPRADOR 2]… y he borrado teléfonos, correos y la dirección exacta de cada piso. Redacta una respuesta para cada una, de cuatro o cinco líneas, con tono amable y profesional, que proponga una visita. No inventes precios ni características que no estén en el texto: si falta un dato, déjalo entre corchetes."
deeper: null
tool: anonimizador
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-23
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-privacidad, aepd]
---

## La idea

Lo que pegas en ChatGPT llega a los servidores de OpenAI. Con lo tuyo decides tú. Con lo del trabajo, **no**: los datos de la empresa y de sus clientes los controla la empresa.

En la UE manda el **RGPD**, la ley europea de protección de datos: para dar datos de clientes a un servicio externo, la empresa necesita un motivo legal y un contrato con ese proveedor. Tu buena intención no basta.

**Cuenta personal y planes de empresa**, en general (OpenAI lo explica en su centro de ayuda; puede cambiar):

- **Personal** (gratis y de pago): por defecto, tus chats pueden usarse para mejorar los modelos. Se desactiva en los **controles de datos**, dentro de Configuración, y vale para los chats nuevos.
- **De empresa** (**ChatGPT Business**, antes llamado Team, **Enterprise** y **Edu** para centros educativos): OpenAI dice que **no entrena con esos datos por defecto**. La organización administra las cuentas y tiene su propio contrato.

Qué **no** pegar en una cuenta personal sin permiso:

- Datos de clientes, pacientes, alumnos o empleados (los de **salud**, los que más).
- Contratos, ofertas, cifras internas, planes no públicos.
- Contraseñas y datos bancarios: estos, nunca y en ninguna cuenta.

## En la práctica

1. **Pregunta** si tu empresa tiene norma sobre IA y cuenta de empresa. Si la hay, usa esa.
2. Si te dejan usar la tuya, **anonimiza**: quita nombres, DNI, teléfonos, correos, direcciones, matrículas y números de pedido.
3. Cambia lo real por etiquetas: «Cliente A», «[importe]». La herramienta «Anonimizador» de esta web te ayuda a detectarlos.
4. Deja solo lo que ChatGPT necesita: si dudas si algo identifica a alguien, quítalo.

> Prueba: «Te paso 25 solicitudes de presupuesto ya anonimizadas: cada una es "Cliente 1, 2, 3…" y he quitado teléfonos y direcciones. Ordénalas en una tabla por tipo de obra, barrio y urgencia, y dime cuáles necesitan una visita antes de dar precio.»

Si tienes dudas, la AEPD (la agencia española de protección de datos) tiene guías gratuitas.

## Error frecuente

Creer que el chat temporal o desactivar el entrenamiento te da permiso para pegar datos de clientes. Protegen tu privacidad, pero no sustituyen el permiso de la empresa.
