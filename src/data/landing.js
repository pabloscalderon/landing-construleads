// ============================================================
//  landing.js — ÚNICA FUENTE DE VERDAD DE LA LANDING
//  Edita SOLO este archivo para una campaña nueva.
//  Claude Code puede reescribir todo esto chateando.
// ============================================================

export const landing = {
  // --- Meta / SEO / tracking ---
  meta: {
    titulo: "Duplica tus leads cualificados sin ampliar presupuesto",
    descripcion:
      "Auditamos y reconstruimos tus campañas de Google y Meta Ads. Resultados medibles en 30 días o seguimos sin coste.",
    idioma: "es",
    // IDs de medición — déjalos vacíos si no aplican.
    gtmId: "",          // p.ej. "GTM-XXXXXX"
    gtagId: "",         // p.ej. "AW-123456789" (Google Ads)
    metaPixelId: "",    // p.ej. "123456789012345"
  },

  // --- Marca (afecta colores/logo de la landing) ---
  marca: {
    nombre: "Now Marketing Digital",
    logoTexto: "NOW",
    // Si tienes logo en imagen, ponlo en /public/img y referencia: "/img/logo.svg"
    logoImagen: "",
  },

  // --- HERO (lo primero que ve el tráfico de pago) ---
  hero: {
    eyebrow: "Agencia de paid media · Google & Meta Ads",
    titulo: "Tu agencia de Google Ads debería mostrarte cuánto dinero facturas con tus campañas, no cuántos clics tienes.",
    subtitulo:
      "Reestructuramos tu cuenta, implementamos medición server-side y reescribimos tus creativos. Pagas por resultados, no por horas.",
    ctaTexto: "Solicita tu auditoría gratuita",
    ctaAncla: "#contacto",
    // Prueba social rápida bajo el CTA
    badge: "+300 cuentas gestionadas · Partner oficial de Google y Meta",
  },

  // --- Bloque de dolor/beneficio ---
  problemas: {
    titulo: "Si te suena alguno de estos, hablemos",
    items: [
      {
        titulo: "Tu CPL sube cada mes",
        texto:
          "Las campañas se han ido degradando y nadie ha reestructurado la cuenta en meses.",
      },
      {
        titulo: "No sabes qué creativo funciona",
        texto:
          "Sin un sistema de testing, estás adivinando en lugar de decidiendo con datos.",
      },
      {
        titulo: "La medición está rota",
        texto:
          "Sin tracking server-side ni CAPI, optimizas con datos incompletos y pierdes conversiones.",
      },
    ],
  },

  // --- Cómo trabajamos / proceso ---
  proceso: {
    titulo: "Cómo lo hacemos",
    pasos: [
      {
        n: "01",
        titulo: "Auditoría",
        texto: "Revisamos estructura, medición y creativos. Sin coste y sin compromiso.",
      },
      {
        n: "02",
        titulo: "Reconstrucción",
        texto: "Consolidamos campañas, implementamos value-based bidding y tracking server-side.",
      },
      {
        n: "03",
        titulo: "Escala",
        texto: "Sistema de testing de creativos y optimización continua hacia tu CPA objetivo.",
      },
    ],
  },

  // --- Prueba social ---
  testimonios: {
    titulo: "Resultados, no promesas",
    items: [
      {
        cita: "Bajamos el coste por lead un 40% en el primer trimestre.",
        autor: "Dirección de Marketing",
        empresa: "Cliente SaaS B2B",
      },
      {
        cita: "Por fin tenemos datos fiables para decidir dónde invertir.",
        autor: "Head of Growth",
        empresa: "E-commerce",
      },
    ],
  },

  // --- CTA / formulario final ---
  contacto: {
    titulo: "Solicita tu auditoría gratuita",
    subtitulo:
      "Te decimos en 48h qué está fallando en tu cuenta y cuánto puedes recuperar.",
    // El form envía a public/contact.php (PHP incluido en el hosting de Hostinger).
    // Envía el lead por correo a pablo@nowmarketingdigital.com y redirige a /gracias.
    endpoint: "/contact.php",
    botonTexto: "Quiero mi auditoría",
    // Texto legal bajo el botón
    legal: "Al enviar aceptas nuestra política de privacidad. No spam.",
  },

  footer: {
    texto: "Now Marketing Digital — Paid media para empresas que quieren crecer.",
    enlaces: [
      { texto: "Política de privacidad", url: "/privacidad" },
      { texto: "Aviso legal", url: "/aviso-legal" },
    ],
  },
};
