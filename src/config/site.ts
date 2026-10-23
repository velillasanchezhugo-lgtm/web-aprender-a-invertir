/**
 * Configuración central del sitio.
 * Todo lo que dependa del titular (datos legales, AdSense, contacto) está aquí
 * y vacío por defecto: no se inventa nada. Ver docs/PENDIENTES.md.
 */

export const SITE = {
  name: 'umotion Academy',
  shortName: 'Academy',
  parent: 'umotion',
  parentUrl: 'https://umotion-com.vercel.app/',
  tagline: 'Aprende a invertir en 5 minutos al día',
  /**
   * Modo prototipo: mientras no haya dominio definitivo, todas las páginas llevan «noindex»
   * y robots.txt bloquea el rastreo. Para publicar: PUBLIC_INDEXABLE=true.
   */
  indexable: (import.meta.env.PUBLIC_INDEXABLE ?? 'false') === 'true',
  defaultLocale: 'es' as const,
  /** Fecha de la última revisión general del sitio (AAAA-MM-DD). */
  lastSiteReview: '2026-10-15',
};

/**
 * Autoría del proyecto. Solo se muestra en letra pequeña al final de la política de privacidad.
 * Revisa que el nombre sea exactamente como quieres que aparezca.
 */
export const AUTHOR = {
  name: 'Hugo Velilla Sánchez',
  email: 'velillasanchezhugo@gmail.com',
};

/** Datos del titular. Obligatorios por la LSSI (art. 10) antes de publicar con dominio y publicidad. */
export const OWNER = {
  legalName: '', // Nombre o razón social (completar al monetizar; hoy la autoría figura solo en la política de privacidad)
  taxId: '', // NIF/CIF
  address: '',
  email: '', // Correo de contacto
  registry: '', // Datos registrales si es sociedad
};

export const ownerComplete = Object.values(OWNER).slice(0, 4).every((v) => v.trim() !== '');

/**
 * Datos legales comunes a las páginas legales. Ver docs/LEGAL.md.
 * - minAge: edad mínima para crear una cuenta sin permiso de los padres (art. 7 LOPDGDD: 14 años en España).
 * - updated: fecha de la última revisión de los textos legales (AAAA-MM-DD). Son borradores hasta que los revise un abogado.
 * - mailProvider: quién envía el correo del enlace mágico. Por defecto, el servicio de Supabase;
 *   si el titular configura un SMTP propio, escribe aquí su nombre (por ejemplo, el proveedor elegido) para la política de privacidad.
 * - hosting / functionsRegion: alojamiento de la web y región de las funciones (Vercel). Cámbialo si se fija otra región.
 */
export const LEGAL = {
  minAge: 14,
  updated: '2026-10-23',
  mailProvider: '',
  hosting: 'Vercel Inc. (EE. UU.)',
  functionsRegion: 'fra1 (Fráncfort, Alemania)', // coincide con "regions" de vercel.json
  /** Autoridad de control para reclamar. */
  authority: { name: 'Agencia Española de Protección de Datos (AEPD)', url: 'https://www.aepd.es/' },
};

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

/**
 * Tutor con IA (función api/tutor.js con Claude). Desactivado por defecto.
 * Activar: PUBLIC_AI_TUTOR=true (muestra el chat) y, en el servidor, AI_TUTOR_ENABLED=true + ANTHROPIC_API_KEY.
 * Sin él, el tutor funciona en modo guiado sin conexión (análisis de noticias paso a paso y búsqueda en la academia).
 */
export const AI_TUTOR = {
  enabled: (import.meta.env.PUBLIC_AI_TUTOR ?? 'false') === 'true',
  endpoint: '/api/tutor',
  provider: 'Anthropic (Claude)',
};

/**
 * Recomendación editorial de bróker para quien empieza de cero.
 * paid: pon `true` si umotion recibe cualquier remuneración de la entidad (referidos, afiliación, acuerdos):
 * entonces la web la identifica como «Publicidad / colaboración pagada» en todas partes.
 */
export const RECOMMENDED_BROKER = {
  id: 'trade-republic',
  name: 'Trade Republic',
  paid: (import.meta.env.PUBLIC_BROKER_PAID ?? 'false') === 'true',
  module: '/es/modulos/trade-republic/',
};

/**
 * Cuentas opcionales (Supabase) y recordatorio diario (notificaciones push).
 * Sin estas variables la web funciona igual, sin registro, y el recordatorio se ofrece para el calendario.
 * Ver docs/CUENTAS-Y-AVISOS.md.
 */
export const ACCOUNTS = {
  enabled: !!(import.meta.env.PUBLIC_SUPABASE_URL && import.meta.env.PUBLIC_SUPABASE_ANON_KEY),
};
export const PUSH = {
  enabled: !!import.meta.env.PUBLIC_VAPID_PUBLIC_KEY,
  hour: '16:00',
};

/**
 * Precios que se muestran en la web (no se escriben dentro del contenido). Ver docs/CURRICULO.md, sección 12 y D-08.
 * Los pagos aún no están activos: las páginas de los niveles 2 y 3 muestran el temario y una lista de interés.
 */
export const PRICING = {
  n2: { monthly: '5 €/mes', annual: '49 €/año', trialDays: 7 },
  n3: { course: '50 €', certification: '99 €' },
  paymentsEnabled: false,
};
