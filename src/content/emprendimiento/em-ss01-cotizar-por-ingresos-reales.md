---
title: Cotizar por ingresos reales
description: Desde 2023 la cuota de autónomo depende de lo que ganas. Cómo se calcula tu tramo, cómo eliges la base y cuándo puedes cambiarla.
level: basico
track: em-cotizacion
order: 401
skills: [em-cotizacion]
terms: [base-de-cotizacion, rendimiento-neto, reta, cotizacion, regularizacion-de-cuotas]
hook: "Te das de alta como autónomo y la Seguridad Social te pregunta cuánto vas a ganar este año. Aún no lo sabes. ¿Qué pones?"
takeaway: Tu cuota depende de tus rendimientos netos previstos. Eliges una base dentro de tu tramo, la ajustas durante el año si tus ingresos cambian y al final se regulariza con lo que de verdad ganaste.
scenario:
  kind: empresa
  label: Caso práctico
  title: Marta y su estudio de diseño
  body: "Marta se da de alta como diseñadora gráfica. Calcula que facturará unos 30.000 € al año y tendrá unos 6.000 € de gastos. En la solicitud de alta tiene que indicar sus rendimientos previstos y elegir una base. En mayo consigue un cliente grande y sus ingresos suben."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: em-ss01-q1
    q: "Marta preveía ganar poco, pero en mayo firma un cliente grande y sus rendimientos van a subir mucho. ¿Qué hace?"
    options: ["Nada: la cuota se fija al darse de alta para todo el año", "Pide un cambio de base para ajustarla a sus nuevos rendimientos previstos", "Se da de baja y vuelve a darse de alta"]
    answer: 1
    explain: "Ajustar la base evita una reclamación grande en la regularización. Dejarlo tienta porque ahora paga menos, pero la diferencia llegará de golpe."
  - type: truefalse
    id: em-ss01-q2
    q: "Para saber en qué tramo estás se usan los ingresos que facturas, sin restar los gastos."
    answer: false
    explain: "Se usan los rendimientos netos: ingresos menos gastos deducibles, con una deducción extra por gastos genéricos. Confundirlo con la facturación lleva a elegir un tramo demasiado alto."
  - type: choice
    id: em-ss01-q3
    q: "¿Qué pasa si eliges la base mínima de tu tramo todo el tiempo?"
    options: ["Pagas menos cada mes, pero tus prestaciones (baja, jubilación) también serán más bajas", "Nada: las prestaciones son iguales para todos los autónomos", "La Seguridad Social te sube la base automáticamente cada mes"]
    answer: 0
    explain: "Las prestaciones se calculan sobre la base por la que cotizas. Mucha gente cree que todos cobran lo mismo, y no es así: cotizar poco ahorra hoy y reduce la protección mañana."
tips:
  - "Si no sabes cuánto ganarás, haz una previsión prudente y revísala cada dos meses con tus números reales."
  - "Guarda tu previsión por escrito: te servirá para comprobar la regularización cuando llegue."
action:
  title: Encuentra tu tramo
  steps:
    - "Estima tus ingresos anuales y réstales los gastos del negocio."
    - "Divide el resultado entre 12 para obtener tu rendimiento neto mensual aproximado."
    - "Busca en la tabla vigente de seg-social.es en qué tramo cae y apunta su cuota mínima en «Mi proyecto en una página»."
  check: He calculado mi rendimiento neto mensual aproximado y sé en qué tramo estoy
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [seg-social-autonomos, rdl-cotizacion-autonomos, lgss]
---

## La idea

Desde 2023 (Real Decreto-ley 13/2022), la cuota de autónomo depende de **lo que ganas**.

Funciona en tres pasos:

1. **Calculas tus rendimientos netos previstos**: ingresos menos gastos deducibles del negocio. A eso se le resta una **deducción por gastos genéricos del 7 %** (un 3 % si eres autónomo societario, es decir, si cotizas como autónomo por tu propia sociedad).
2. **Buscas tu tramo.** La tabla tiene 15 tramos según el rendimiento neto mensual: unos pocos en una tabla reducida (para quien gana poco) y el resto en la general. Cada tramo tiene una **base de cotización** mínima y una máxima.
3. **Eliges tu base** dentro de ese tramo. La cuota es esa base por el tipo de cotización (alrededor del 31 %).

En 2026 la cuota mínima va, aproximadamente, de **unos 200 € al mes** en el tramo más bajo a **unos 600 €** en el más alto. Las cifras exactas cambian cada año: consulta siempre la tabla vigente en seg-social.es.

Ojo: **la base que eliges decide lo que cobrarás** de baja o al jubilarte.

## En la práctica

- Indicas tus rendimientos previstos y eliges base en la **solicitud de alta en el RETA** (el régimen de autónomos), en **Import@ss**, el portal de la Seguridad Social. Necesitas certificado digital o Cl@ve.
- Puedes **cambiar la base hasta seis veces al año**. El cambio surte efecto el día 1 del mes siguiente a cada bimestre: 1 de marzo, 1 de mayo, 1 de julio, 1 de septiembre, 1 de noviembre y 1 de enero.
- Lo que pagas durante el año es **provisional**: cuando Hacienda conozca tus rendimientos reales, la Seguridad Social te devolverá o reclamará la diferencia. 
- Ojo: ese 7 % no es la deducción por gastos de difícil justificación del IRPF. Son reglas distintas.

## Error frecuente

Poner unos rendimientos previstos muy bajos «para pagar menos» y no revisarlos. Al año siguiente llega la regularización con una factura de cientos o miles de euros.
