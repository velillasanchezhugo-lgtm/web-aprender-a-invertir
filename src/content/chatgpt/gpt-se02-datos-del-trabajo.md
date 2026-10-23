---
title: Los datos de tu trabajo
description: Qué cambia entre tu cuenta personal de ChatGPT y una de empresa en el uso de los datos, qué no pegar nunca y cómo anonimizar antes.
level: basico
track: gpt-seguro
order: 702
skills: [gpt-empresa-datos, gpt-privacidad]
terms: [datos-personales, anonimizar, rgpd, controles-de-datos]
hook: "Tienes 25 correos de personas interesadas en pisos, con sus nombres, teléfonos y lo que buscan. ChatGPT te los ordenaría en un minuto. ¿Los pegas en tu cuenta personal?"
takeaway: Los datos de tu empresa y de sus clientes no son tuyos. Usa la cuenta de empresa si la hay; si no, pregunta qué se permite y quita todo lo que identifique a alguien antes de pegarlo.
scenario:
  kind: empresa
  label: Caso práctico
  title: Los interesados de Daniel
  body: "Daniel trabaja en una inmobiliaria de barrio y quiere que ChatGPT clasifique los correos de interesados por zona y presupuesto. La agencia no tiene cuenta de empresa, pero su jefa le permite usar su cuenta personal con datos anonimizados. Daniel cambia nombres por «Interesado 1, 2, 3…», borra teléfonos y correos, y pega solo zona, presupuesto y lo que buscan."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-se02-q1
    q: "Rocío, administrativa de una clínica dental, quiere que ChatGPT redacte recordatorios de cita a partir de la lista de pacientes con su tratamiento. Solo tiene su cuenta personal y la clínica no ha dicho nada. ¿Qué hace primero?"
    options: ["Pega la lista en un chat temporal, que no queda en el historial", "Pregunta a la clínica qué se permite y, mientras, pide solo una plantilla sin datos de pacientes", "Desactiva en Controles de datos la mejora del modelo y pega la lista"]
    answer: 1
    explain: "Son datos de salud, de los más protegidos, y los controla la clínica. El chat temporal y el ajuste de entrenamiento tientan porque parecen proteger, pero los datos salen igualmente de la clínica sin su permiso. Una plantilla con [nombre] y [hora] no tiene ningún riesgo."
  - type: truefalse
    id: gpt-se02-q2
    q: "Si desactivas en tu cuenta personal la opción de que tus chats mejoren los modelos, ya puedes pegar datos de clientes."
    answer: false
    explain: "Ese ajuste decide si OpenAI entrena con tus chats, no si la empresa te permite sacar sus datos. Tienta pensar que soluciona el problema, pero el permiso lo da la empresa, con un contrato con el proveedor."
  - type: choice
    id: gpt-se02-q3
    q: "¿Qué dice OpenAI, en general, sobre los planes de empresa (como ChatGPT Business o Enterprise)?"
    options: ["Que no guardan nunca las conversaciones", "Que por defecto no usa sus datos para entrenar sus modelos y la organización administra la cuenta", "Que funcionan igual que la cuenta gratuita"]
    answer: 1
    explain: "En los planes de empresa, OpenAI dice que no entrena con los datos por defecto y hay contrato y administración propios. Que no se guarde nada tienta, pero es falso: las conversaciones se guardan según la configuración de la empresa."
tips:
  - "Usa una cuenta para cada cosa: la de empresa para el trabajo y la tuya para lo personal."
  - "Nunca, en ninguna cuenta: contraseñas, claves de acceso, números de tarjeta ni datos bancarios completos."
  - "Si dudas si algo identifica a alguien, quítalo: casi nunca hace falta para que ChatGPT te ayude."
action:
  title: Pregunta la norma y revisa tu ajuste
  steps:
    - "Pregunta a tu responsable si hay norma sobre IA y si la empresa tiene cuenta de ChatGPT."
    - "En tu cuenta personal, entra en Configuración, busca Controles de datos y decide si quieres que tus chats ayuden a mejorar los modelos."
    - "Escribe en «Mi kit de ChatGPT» tu regla: «Datos de clientes y de la empresa, solo con permiso y anonimizados»."
  check: He preguntado la norma de mi empresa, he revisado mis controles de datos y he escrito mi regla
practice:
  task: "Das clases en una academia de repaso y tienes tus notas sobre cada alumno. Escribe la petición para que ChatGPT te ayude con los informes para las familias, sin datos que identifiquen a nadie."
  require: [contexto, formato, limites]
  extra:
    - label: Decir que los datos van anonimizados
      any: [anonimiz, he quitado, sin nombres, he cambiado, alumno 1, alumno a, alumna 1, alumna a]
      hint: "Cambia los nombres por «Alumno 1» o «Alumno A», quita lo que delate a alguien y dilo en la petición."
  sample: "Soy profesor de Matemáticas en una academia de repaso y la dirección me permite usar IA con datos anonimizados. Te paso mis notas del trimestre de seis alumnos: he quitado nombres, colegios y cualquier detalle personal, y cada uno aparece como «Alumno 1», «Alumno 2»… Prepara un borrador de informe para la familia de cada uno, de unas cinco líneas, con un punto fuerte, algo que mejorar y una recomendación para casa. Tono cercano. No inventes notas ni datos que no estén en mis apuntes."
deeper: null
tool: anonimizador
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-privacidad, openai-planes, aepd]
---

## La idea

Lo que pegas en ChatGPT sale de tu ordenador y llega a los servidores de OpenAI. Con lo tuyo decides tú. Con lo del trabajo, **no**: los datos de la empresa y de sus clientes los controla la empresa.

En la UE manda el **RGPD**, la ley europea de protección de datos: para dar datos de clientes a un servicio externo, la empresa necesita un motivo legal y un contrato con ese proveedor. Tu buena intención no basta.

**Cuenta personal y planes de empresa**, en general (OpenAI lo explica en su centro de ayuda y en su página de privacidad para empresas; cambia, compruébalo):

- **Personal** (gratis y de pago): por defecto, tus chats pueden usarse para mejorar los modelos. Lo puedes desactivar en los **controles de datos**, dentro de Configuración.
- **De empresa** (**ChatGPT Business**, antes llamado Team, y **Enterprise**; también hay Edu para centros educativos): OpenAI dice que **no entrena con esos datos por defecto**. La organización administra las cuentas y tiene su propio contrato.

Qué **no** pegar en una cuenta personal sin permiso:

- Datos de clientes, pacientes, alumnos o empleados (los de **salud**, los que más).
- Contratos, ofertas, cifras internas, planes no públicos.
- Contraseñas y datos bancarios: estos, nunca y en ninguna cuenta.

## En la práctica

1. **Pregunta** si tu empresa tiene norma sobre IA y cuenta de empresa. Si la hay, usa esa.
2. Si te dejan usar la tuya, **anonimiza**: quita nombres, DNI, teléfonos, correos, direcciones, matrículas y números de pedido.
3. Cambia lo real por etiquetas: «Cliente A», «Empresa X», «[importe]». La herramienta «Anonimizador» de esta web te ayuda a detectarlos.
4. Deja solo lo que ChatGPT necesita para la tarea.

> Prueba: «Te paso unos correos de interesados ya anonimizados: cada uno es "Interesado 1, 2, 3…". Clasifícalos en una tabla por zona, presupuesto y tipo de piso. Si ves algún dato que identifique a alguien, avísame y no lo repitas.»

Si tienes dudas, la AEPD (la agencia española de protección de datos) tiene guías gratuitas.

## Error frecuente

Creer que el chat temporal o desactivar el entrenamiento te da permiso para pegar datos de clientes. Esos ajustes protegen tu privacidad, pero no sustituyen el permiso de la empresa.
