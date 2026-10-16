---
title: Crea tu primer plan de inversión
description: "Cómo programar una aportación periódica a un ETF global y, para compras sueltas, cuándo usar una orden limitada o una orden de mercado."
level: basico
track: trade-republic
order: 266
skills: [aportaciones-periodicas, usar-app-broker, ejecutar-compra]
goals: [objetivo, jubilacion, ordenar]
prereqs: [app-04-compara-etf]
hook: "Cada mes te propones invertir algo y cada mes se te olvida, o esperas al «mejor momento». ¿Y si lo haces automático?"
takeaway: "Un plan automático, un producto global y una cantidad que puedas mantener. Lo difícil es no tocarlo."
scenario:
  kind: operacion
  label: Caso
  title: El plan de Nuria
  body: "Nuria ha elegido un ETF global de bajo coste. En su ficha pulsa la opción de plan de inversión, elige 100 € cada mes, el día después de cobrar la nómina, y que se pague con su saldo. Revisa el resumen y lo confirma. La app le deja el justificante en el buzón. Se pone un recordatorio para revisarlo una vez al año."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: ap06-q1
    q: "Has creado tu plan y la bolsa cae con fuerza a los tres meses. ¿Qué haces?"
    options: ["Cancelar el plan hasta que vuelva a subir", "Mantenerlo: con el mismo dinero compras más participaciones cuando están más baratas", "Venderlo todo y pasarte a otra cosa"]
    answer: 1
    explain: "El plan periódico funciona justo porque sigue comprando en las caídas. Pararlo por miedo es el error más habitual."
  - type: choice
    id: ap06-q2
    q: "Vas a hacer una compra suelta de un ETF y quieres controlar el precio máximo que pagas. ¿Qué orden usas?"
    options: ["Orden de mercado, siempre", "Orden limitada: fijas el precio máximo y solo se compra si se alcanza", "Da igual el tipo de orden"]
    answer: 1
    explain: "La orden de mercado compra al precio del momento, sea cual sea. La limitada te protege de pagar de más, pero puede no ejecutarse."
  - type: truefalse
    id: ap06-q3
    q: "En Trade Republic, los planes de inversión pagan la misma comisión de 1 € por compra que las órdenes sueltas."
    answer: false
    explain: "Según su propia web, la ejecución de los planes no tiene esa comisión. Las compras y ventas sueltas, sí."
tips:
  - "Elige una cantidad que puedas mantener también en los meses malos."
  - "Programa el plan justo después de cobrar, para que invertir sea lo primero."
  - "No pares el plan cuando la bolsa caiga."
  - "En compras sueltas de ETF o acciones, usa una orden limitada y evita los primeros y últimos minutos de la sesión."
action:
  title: Programa tu plan
  steps:
    - "Abre la ficha del ETF global que hayas elegido y busca la opción de plan de inversión."
    - "Elige la cantidad, cada cuánto (por ejemplo, cada mes) y la fecha, y revisa el resumen antes de confirmar."
    - "Guarda el justificante y apunta una fecha al año para revisarlo."
  check: Tengo un plan de inversión periódico en marcha
deeper: aportaciones-periodicas-vs-inicial
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: España
sources: [tr-ayuda-es-2026, tr-web-es-2026, tr-contract-es, cnmv-guia-ordenes]
---

## La idea

Un **plan de inversión** es una compra automática: eliges el producto, la cantidad y cada cuánto, y la app compra por ti. Así no dependes de acordarte ni de adivinar el mejor momento.

En Trade Republic:

- Puedes crearlo para **ETF, acciones o cripto**, desde 1 €. Para empezar, la opción prudente es un **ETF global de bajo coste**. Si prefieres un fondo indexado traspasable, comprueba en su ficha si admite aportaciones periódicas.
- Eliges la **frecuencia** (por ejemplo, cada semana, cada dos semanas o cada mes, según lo que ofrezca la app).
- La ejecución del plan **no tiene la comisión de 1 €** de las compras sueltas.
- Puedes **cambiarlo o cancelarlo** cuando quieras, sin coste.

## En la práctica

Para una **compra suelta**:

- **Orden de mercado:** compras ya, al precio del momento. Es simple, pero no controlas el precio.
- **Orden limitada:** pones el precio máximo que aceptas pagar. Solo se compra si se alcanza.
- Si compras **por importe** (fracciones), la app solo permite órdenes de mercado. Para usar una orden limitada, compra participaciones enteras.
- Compra en horario de bolsa y lejos de la apertura y el cierre, cuando la diferencia entre precio de compra y de venta suele ser menor.
