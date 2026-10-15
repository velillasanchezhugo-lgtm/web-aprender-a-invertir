# Modelo económico editable

> Todas las cifras de ejemplo son **supuestos ilustrativos**, no datos de mercado ni previsiones. Sustitúyelas por las reales de AdSense y Search Console en cuanto existan. Ninguna fila es una promesa de ingresos ni de beneficios.

Calculadora interactiva: abre [`modelo-economico.html`](modelo-economico.html) en el navegador (no necesita conexión).

## Definiciones

- **Visitas (sesiones)**: entradas al sitio; un usuario puede hacer varias.
- **Usuarios**: personas (navegadores) distintas en un periodo.
- **Páginas vistas**: páginas cargadas. Visitas × páginas por visita.
- **Impresiones publicitarias**: anuncios mostrados. Una página con dos bloques puede generar dos impresiones; una sin anuncios, ninguna.
- **RPM de página**: ingresos estimados por cada 1.000 páginas vistas, tal como lo informa AdSense.

## Fórmula

```
ingresos mensuales estimados = páginas vistas mensuales / 1.000 × RPM de página
páginas vistas = visitas × páginas por visita
páginas vistas monetizables = páginas vistas × % de páginas con anuncios × % de visitas con consentimiento o anuncios servidos
```

Esta web limita la publicidad a propósito (sin anuncios en la portada, el test, los ejercicios, el comparador, la búsqueda ni el progreso), así que el porcentaje de páginas con anuncios es inferior al 100 %.

## Escenarios ilustrativos

| Escenario | Visitas/mes | Páginas/visita | % páginas con anuncios | % consentimiento o anuncios servidos | RPM supuesto | Ingresos/mes estimados |
|---|---:|---:|---:|---:|---:|---:|
| A | 5.000 | 2,0 | 60 % | 60 % | 3 € | 10,80 € |
| B | 30.000 | 2,5 | 60 % | 60 % | 5 € | 135,00 € |
| C | 100.000 | 2,5 | 60 % | 60 % | 8 € | 720,00 € |

Cálculo del escenario B: 30.000 × 2,5 = 75.000 páginas vistas; × 0,6 × 0,6 = 27.000 monetizables; / 1.000 × 5 € = 135 €.

## Costes (rellenar con datos reales)

| Concepto | Tipo | Ejemplo ilustrativo |
|---|---|---|
| Dominio | Anual | 10–20 € |
| Alojamiento estático | Mensual | 0–20 € |
| Revisión jurídica inicial | Puntual | A presupuestar |
| Revisión fiscal o financiera | Por pieza u hora | A presupuestar |
| Redacción y revisión editorial propia | Horas al mes × coste por hora | A definir |
| Actualización trimestral de tarifas | Horas al trimestre | 4–8 h |
| Herramientas (correo, copias, Search Console) | Mensual | 0–10 € |

Resultado = ingresos estimados − costes. Con tráfico bajo, el resultado puede ser negativo durante mucho tiempo; el modelo sirve para saber qué variables mover (contenido útil, retención, costes), no para prometer rentabilidad.

## Qué medir (además de ingresos)

Lecciones completadas, aciertos en los repasos y uso de herramientas, además de visitas y tiempo. En esta versión esas métricas solo existen en el dispositivo de cada usuario (`/es/progreso/`); para medirlas en conjunto haría falta una analítica respetuosa con el consentimiento.
