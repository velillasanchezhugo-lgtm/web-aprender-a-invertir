/**
 * Da de alta una empresa en el área «Formación para empresas».
 *   EMPRESAS_SECRET=<la misma clave que en Vercel> npm run empresas:alta -- "Café Luna"
 * Imprime la entrada para añadir a la lista JSON de la variable EMPRESAS_ACCESS (en Vercel, nunca en el repositorio)
 * y la contraseña que hay que dar a la empresa.
 */
import { companyEntry, PREFIX } from '../api/_empresas-core.js';

const name = process.argv.slice(2).join(' ').trim();
const secret = process.env.EMPRESAS_SECRET ?? '';
if (!name) { console.error('Indica el nombre de la empresa: npm run empresas:alta -- "Café Luna"'); process.exit(1); }
if (secret.length < 32) { console.error('Define EMPRESAS_SECRET (32 caracteres o más, por ejemplo con: openssl rand -hex 32).'); process.exit(1); }
const entry = companyEntry(name, secret);
console.log('Entrada para EMPRESAS_ACCESS:');
console.log(JSON.stringify(entry));
console.log(`\nContraseña para la empresa: ${PREFIX}${name.replace(/\s+/g, '')}`);
console.log('(Vale igual con o sin espacios, tildes y mayúsculas.)');
