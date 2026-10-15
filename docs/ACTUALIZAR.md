# Cómo actualizar la web

Todo cambio de tarifas, fiscalidad o normativa debe revisarlo una persona antes de publicarse. La IA puede ayudar a detectar cambios y a redactar, pero no publica sola.

## Flujo general

1. Edita el archivo correspondiente.
2. Ejecuta `npm run verify`: pruebas, control editorial y compilación.
3. Si has cambiado algo sustancial, actualiza `reviewed` en el frontmatter y añade una entrada en `corrections` de la página y en `src/data/corrections.json`.
4. Publica (ver `PUBLICAR-Y-ADSENSE.md`).

## Añadir una lección

Crea `src/content/lessons/<slug>.md` copiando una existente. Campos obligatorios: `title`, `description` (170 caracteres como máximo), `level`, `topic` (uno de los de `TOPICS` en `src/lib/content.ts`), `minutes`, `learn`, `mistake`, `summary`, `quiz`, `next`, `author`, `published`, `reviewed`, `status`, `sources`.

- El cuerpo debe incluir `## Explicación` y `## Ejemplo numérico`.
- Calcula los ejemplos con las funciones de `src/lib/calc/` para que coincidan con las herramientas.
- Los términos del glosario se enlazan como `[texto](/es/glosario/#id)`.
- Si una frase del frontmatter contiene «: », ejecuta `python3 scripts/fix-yaml-colons.py`.
- `status: revisado` exige rellenar `reviewer` con una persona real.

## Actualizar un bróker

`src/data/brokers.json`. Por cada campo: `v` (`si` / `parcial` / `no`), `value` y `src` (identificador de `sources.json`). Actualiza `reviewed` en la cabecera y la fecha `checked` de la fuente. Las reglas numéricas de `fees` alimentan la calculadora; usa `null` si un dato no está verificado. Revísalo cada tres meses.

## Actualizar el IPC

Descarga la serie del INE y regenera `src/data/ipc-spain.json`:

```bash
curl -s "https://servicios.ine.es/wstempus/js/ES/DATOS_SERIE/IPC251856?nult=400" -o ipc.json
python3 -c "import json;d=json.load(open('ipc.json'))['Data'];print({x['Anyo']:x['Valor'] for x in d if x['FK_Periodo']==12})"
```

Comprueba antes si el INE ha cambiado de base o de código de serie: en la consulta del 15/10/2026 el último dato de esta serie era el de diciembre de 2025.

## Fiscalidad

La escala del ahorro de 2025 está en `src/content/lessons/comisiones-y-fiscalidad.md`. Revísala cada año con el Manual práctico de Renta de la AEAT del ejercicio correspondiente.

## Reglas del test

`src/data/quiz.json`. La página `/es/test/reglas/` se genera sola. `npm test` comprueba que todas las lecciones citadas existen y que el plan no contiene recomendaciones de productos.

## Imagen social

`npm run og` regenera `public/og-default.png` (requiere Pillow).
