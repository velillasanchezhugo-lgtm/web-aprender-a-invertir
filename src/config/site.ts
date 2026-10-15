/**
 * Configuración central del sitio.
 * Todo lo que dependa del titular (datos legales, AdSense, contacto) está aquí
 * y vacío por defecto: no se inventa nada. Ver docs/PENDIENTES.md.
 */

export const SITE = {
  name: 'Criterio',
  tagline: 'Aprende a invertir con criterio propio',
  /** Nombre provisional. No se ha comprobado la disponibilidad de marca ni dominio. */
  provisionalName: true,
  defaultLocale: 'es' as const,
  /** Fecha de la última revisión general del sitio (AAAA-MM-DD). */
  lastSiteReview: '2026-10-15',
};

/** Datos del titular. Obligatorios por la LSSI (art. 10) antes de publicar. */
export const OWNER = {
  legalName: '', // Nombre o razón social
  taxId: '', // NIF/CIF
  address: '',
  email: '', // Correo de contacto
  registry: '', // Datos registrales si es sociedad
};

export const ownerComplete = Object.values(OWNER).slice(0, 4).every((v) => v.trim() !== '');

/**
 * Publicidad. Desactivada hasta disponer de una cuenta real y de una CMP certificada por Google.
 * - client: identificador "ca-pub-XXXXXXXXXXXXXXXX" de AdSense.
 * - cmp: 'google' usa la mensajería de privacidad de Google (CMP certificada) configurada
 *   en la cuenta de AdSense; 'external' indica que se integra otra CMP certificada (añadir script en Consent.astro).
 * - slots: identificadores de bloque de anuncio creados en AdSense.
 */
export const ADS = {
  enabled: (import.meta.env.PUBLIC_ADS_ENABLED ?? 'false') === 'true',
  client: (import.meta.env.PUBLIC_ADSENSE_CLIENT ?? '') as string,
  cmp: (import.meta.env.PUBLIC_CMP ?? 'google') as 'google' | 'external',
  /** Muestra marcos de posición en desarrollo para revisar el diseño sin cargar anuncios. */
  showPlaceholders: (import.meta.env.PUBLIC_AD_PLACEHOLDERS ?? 'false') === 'true',
  slots: {
    inArticle: (import.meta.env.PUBLIC_AD_SLOT_ARTICLE ?? '') as string,
    listing: (import.meta.env.PUBLIC_AD_SLOT_LISTING ?? '') as string,
    sidebar: (import.meta.env.PUBLIC_AD_SLOT_SIDEBAR ?? '') as string,
  },
};

export const adsActive = ADS.enabled && /^ca-pub-\d{10,20}$/.test(ADS.client);

/** Afiliación con intermediarios: desactivada. Si se activa, ver /es/financiacion/. */
export const AFFILIATES = { enabled: false };

/** Versiones lingüísticas publicadas. Solo las publicadas generan hreflang e indexación. */
export const LOCALES_PUBLISHED = ['es'] as const;
