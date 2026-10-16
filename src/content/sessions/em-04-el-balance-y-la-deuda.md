---
title: El balance y la deuda peligrosa
description: "Qué tiene la empresa, qué debe y qué es de los accionistas. Y dos ratios sencillos para saber si su deuda es manejable o un riesgo."
level: basico
track: empresas
order: 304
skills: [balance-deuda]
goals: [entender, miedo]
prereqs: [em-02-la-cuenta-de-resultados]
hook: "Dos cadenas de restauración ganan dinero. Una puede pasar una crisis sin problemas; la otra podría tener que vender tiendas para pagar al banco. ¿Cómo lo distingues?"
takeaway: "Deuda neta / EBITDA y EBIT / intereses te dicen en un minuto si la deuda es cómoda. Luego mira cuándo vence y si su tipo es variable."
scenario:
  kind: empresa
  label: Empresas de ejemplo
  title: Café Brío S.A. frente a Bocados Rápidos S.A.
  body: "Café Brío, 31/12/2025: activo total 150 M€ (incluye 10 M€ de caja). Pasivo 90 M€: 40 M€ de deuda bancaria (vence en 2028, la mitad a tipo variable), 30 M€ de proveedores y 20 M€ de otros pasivos. EBITDA 30 M€, EBIT 18 M€, intereses 2 M€. Bocados Rápidos (otra cadena): deuda neta 100 M€, EBITDA 20 M€, EBIT 8 M€, intereses 6 M€; toda su deuda es a tipo variable y el 70 % vence en 2027."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: estimate
    id: em04-q1
    q: "¿Cuál es el patrimonio neto de Café Brío, en millones de euros?"
    answer: 60
    tolerance: 0
    min: 0
    max: 200
    step: 5
    unit: "M€"
    explain: "Activo = pasivo + patrimonio neto. 150 − 90 = 60 M€: lo que pertenece a los accionistas según la contabilidad."
  - type: choice
    id: em04-q2
    q: "¿Cuál es la deuda neta / EBITDA de cada empresa?"
    options: ["Café Brío 1,3 veces; Bocados 5 veces", "Café Brío 1 vez; Bocados 5 veces", "Café Brío 3 veces; Bocados 0,2 veces", "Las dos, 1 vez"]
    answer: 1
    explain: "Café Brío: deuda neta = 40 − 10 de caja = 30; 30 / 30 = 1 vez. Bocados: 100 / 20 = 5 veces. Restar la caja es lo que convierte la deuda en deuda neta."
  - type: choice
    id: em04-q3
    q: "Si los tipos de interés suben, ¿qué empresa sufre más y por qué?"
    options: ["Café Brío, porque tiene más tiendas", "Bocados Rápidos: cubre sus intereses solo 1,3 veces (8/6), toda su deuda es variable y casi toda vence pronto", "Ninguna, la deuda no depende de los tipos", "Las dos igual"]
    answer: 1
    explain: "Café Brío cubre sus intereses 9 veces (18/2). Bocados va justa ya hoy: si el tipo sube o el banco renueva en 2027 en peores condiciones, los intereses pueden comerse todo su beneficio operativo."
action:
  title: Mide la deuda de una empresa real
  steps:
    - "En el balance de la empresa que estás siguiendo, suma la deuda financiera (deudas con entidades de crédito, bonos u obligaciones, a corto y largo plazo) y resta el efectivo."
    - "Divide esa deuda neta entre el EBITDA (muchas empresas lo publican; si no, resultado de explotación + amortizaciones)."
    - "Busca en la memoria o en el informe de gestión la tabla de vencimientos de la deuda y anota cuánto vence en los próximos dos años."
  check: Sé si la deuda de una empresa real es cómoda o preocupante
deeper: estados-financieros
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: General
sources: [graham-intelligent, cnmv-ifa]
---

## La idea

El **balance** es una foto en un día concreto:

- **Activo**: lo que la empresa tiene (locales, máquinas, existencias, caja).
- **Pasivo**: lo que debe (bancos, bonos, proveedores).
- **Patrimonio neto** = activo − pasivo. Lo que sería de los accionistas.

Deber dinero no es malo; deber **más de lo que el negocio puede pagar** sí. Dos ratios rápidos:

1. **Deuda neta / EBITDA** (deuda financiera − caja, entre EBITDA): cuántos años de resultado haría falta para pagarla. Por debajo de 2 suele ser cómodo; por encima de 4 merece atención (depende del sector).
2. **Cobertura de intereses** (EBIT / intereses): cuántas veces paga sus intereses con lo que gana. Por debajo de 3, poco margen de error.

Y dos preguntas: **¿cuándo vence?** (refinanciar en mal momento es caro) y **¿a qué tipo?** (si es variable, una subida de tipos encarece la deuda).

## Con números

| | Café Brío | Bocados Rápidos |
|---|---:|---:|
| Deuda neta | 40 − 10 = 30 M€ | 100 M€ |
| Deuda neta / EBITDA | 30/30 = **1 vez** | 100/20 = **5 veces** |
| EBIT / intereses | 18/2 = **9 veces** | 8/6 = **1,3 veces** |
| Vencimientos | 2028 | 70 % en 2027 |
| Tipo | 50 % variable | 100 % variable |

Mismo sector, riesgo muy distinto.

## Error frecuente

Olvidar los alquileres. En las cuentas consolidadas con normas internacionales (NIIF 16), los alquileres largos aparecen como «pasivos por arrendamiento»; comprueba si la deuda que te dan los incluye o no.
