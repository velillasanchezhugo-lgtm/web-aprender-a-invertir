/**
 * JSON para meterlo dentro de una etiqueta <script> (application/json o application/ld+json) con set:html.
 * JSON.stringify no escapa «<»: un dato con «</script>» cerraría la etiqueta y lo que siguiera se ejecutaría
 * como HTML. Aquí «<», «>», «&» y los separadores de línea U+2028/U+2029 salen como secuencias \u…,
 * que JSON.parse lee igual. Se prueba en tests/safe-json.test.ts.
 */
export function jsonForScript(value: unknown): string {
  return (JSON.stringify(value) ?? 'null')
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}
