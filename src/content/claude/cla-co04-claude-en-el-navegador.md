---
title: Claude en el navegador
description: "Qué hace la extensión Claude en Chrome en las webs, qué riesgos tiene (instrucciones ocultas, compras, formularios) y cómo supervisarla y limitar sus permisos."
level: basico
track: cla-conectar
order: 504
skills: [cla-habilidades, cla-privacidad]
terms: [claude-en-chrome, inyeccion-de-instrucciones]
hook: "Claude puede abrir webs, hacer clic y rellenar formularios por ti. ¿Qué pasa si una página le dice, en letra invisible, que haga otra cosa?"
takeaway: Claude en Chrome actúa en webs por ti, pero una página puede esconder instrucciones para engañarlo. Úsalo en sitios de confianza, aprueba las acciones delicadas y páralo si hace algo raro.
scenario:
  kind: producto
  label: Caso práctico
  title: Las ofertas de Nuria
  body: "Nuria, de Murcia, pide a Claude en Chrome que compare tres webs de alquiler de furgonetas para una mudanza y le ponga en una tabla precio y condiciones. Claude lo hace en unos minutos. Cuando le pregunta si reserva, Nuria responde que no: la reserva la hace ella, después de leer las condiciones."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-co04-q1
    q: "Mientras Claude revisa una web, de repente empieza a abrir una página que no le has pedido y a hablar de otro tema. ¿Qué haces?"
    options: ["Esperar: seguramente sea parte de la tarea", "Parar la tarea de inmediato y revisar qué ha hecho", "Darle permiso para todo, así acaba antes"]
    answer: 1
    explain: "Es una señal típica de que una web le ha colado instrucciones ocultas. El centro de ayuda dice que pares la tarea en cuanto pase. Tienta esperar, pero si el engaño sigue, puede actuar con tus sesiones abiertas."
  - type: choice
    id: cla-co04-q2
    q: "Iván quiere probar Claude en Chrome por primera vez. ¿Qué preparación es más segura?"
    options: ["Usarlo en su perfil de siempre, con el banco y el correo abiertos", "Crear un perfil de Chrome aparte, sin sesiones del banco ni de la administración, y empezar con tareas sencillas", "Activar que lo apruebe todo solo para no tener que mirar"]
    answer: 1
    explain: "Un perfil separado limita lo que Claude puede tocar si algo sale mal. Es lo que recomienda el centro de ayuda. La aprobación automática tienta por cómoda, pero al empezar conviene ver cada paso."
  - type: truefalse
    id: cla-co04-q3
    q: "Si Claude hace una compra por ti en una web, la responsabilidad de esa compra sigue siendo tuya."
    answer: true
    explain: "El centro de ayuda deja claro que eres responsable de las compras y operaciones que hace en tu nombre. Por eso los pagos, mejor hazlos tú."
tips:
  - "Pídele que investigue y te prepare la tabla; el último clic (pagar, enviar, firmar) dalo tú."
  - "En webs nuevas o con comentarios de desconocidos, usa la aprobación manual de cada acción."
  - "Ciérralo en páginas con datos que no quieras que guarde: lo que ve queda en el historial del chat."
action:
  title: Revisa tus permisos de navegador
  steps:
    - "Si tienes un plan de pago y quieres probarlo, instala la extensión en un perfil de Chrome aparte."
    - "Revisa en sus ajustes en qué sitios le has dado permiso y quita los que no necesites."
    - "Pídele una tarea de solo lectura, como comparar dos webs, y mira cada paso."
    - "Si no lo usas, apunta en «Mi kit de Claude» tus reglas para el día que lo hagas."
  check: Sé cómo limitar y parar a Claude en el navegador
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda, claude-planes]
---

## La idea

**Claude en Chrome** es una extensión para el navegador Chrome que deja a Claude **leer la pestaña que tienes abierta, navegar, hacer clic y escribir** en webs por ti: comparar ofertas, rellenar un formulario largo, recopilar datos de varias páginas. Está en **fase beta** y solo en los **planes de pago**.

Para leer las webs, Claude hace **capturas** de la pestaña: todo lo que se ve en pantalla pasa a la conversación.

El riesgo principal tiene nombre: **inyección de instrucciones**, es decir, texto escondido en una web, un correo o un documento que intenta que Claude haga algo que tú no has pedido. Anthropic tiene defensas que bloquean muchos intentos, pero reconoce que **el riesgo no es cero**. Y Claude actúa con **tus sesiones abiertas**: si estás dentro de tu correo, puede llegar a él.

Lo que te protege:

- **Permisos por sitio:** decides en qué webs puede actuar.
- **Modo de aprobación:** puede pedirte permiso en cada acción (aprobación manual) o revisarse solo y parar en lo delicado.
- **Confirmaciones** antes de acciones de riesgo, como descargar archivos o introducir datos sensibles. En webs financieras pide permiso; las de contenido para adultos o piratería están bloqueadas.
- **Tú, mirando.** Las compras que haga son responsabilidad tuya.

## En la práctica

1. Usa un **perfil de Chrome aparte**, sin el banco, la salud ni la administración.
2. Empieza por tareas de **solo lectura** en webs que conozcas.
3. Pide un resultado concreto y que **no compre ni envíe** nada.
4. Revisa cada paso que propone.

> Prueba: «Compara las condiciones de envío y devolución de estas tres tiendas y ponlas en una tabla. Solo lee: no añadas nada al carrito ni rellenes formularios.»

Si se desvía, **para la tarea**.

## Error frecuente

Dejarle hacer pagos o trámites con datos personales «porque ya lo ha hecho bien otras veces». Lo delicado, hazlo tú.
