// ============================================================
//  landing.js — ÚNICA FUENTE DE VERDAD DE LA LANDING
//  Edita SOLO este archivo para una campaña nueva.
//  Claude Code puede reescribir todo esto chateando.
//
//  Campaña actual: plataforma SaaS de gestión de viajes
//  Público: gerentes de tráfico / transporte (25+ viajes diarios)
//  REGLA NO NEGOCIABLE: el precio NO se muestra en ningún texto.
// ============================================================

export const landing = {
  // --- Meta / SEO / tracking ---
  meta: {
    titulo: "Gestión de viajes en tiempo real para empresas de transporte",
    descripcion:
      "Rastreo por enlace, comprobantes de entrega con foto y aviso automático de ETA. Tu gerente de tráfico deja de atender llamadas y vuelve a operar.",
    idioma: "es",
    // IDs de medición — déjalos vacíos si no aplican.
    gtmId: "",          // p.ej. "GTM-XXXXXX"
    gtagId: "",         // p.ej. "AW-123456789" (Google Ads)
    ga4Id: "",          // p.ej. "G-XXXXXXXXXX" (GA4)
    metaPixelId: "",    // p.ej. "123456789012345"
    // Etiqueta de conversión de Google Ads para el evento Lead: "AW-123456789/AbC-D_efG"
    gtagConversionLead: "",
    gtagConversionSchedule: "",
  },

  // --- Marca ---
  marca: {
    // ← CAMBIAR por el nombre real de la plataforma (placeholder).
    nombre: "Rutalink",
    logoTexto: "Rutalink",
    // Si tienes logo en imagen, ponlo en /public/img y referencia: "/img/logo.svg"
    logoImagen: "",
  },

  // --- Navegación (barra flotante) ---
  nav: {
    enlaces: [
      { texto: "Inicio", url: "#inicio" },
      { texto: "El problema", url: "#problema" },
      { texto: "Cómo funciona", url: "#como-funciona" },
      { texto: "Preguntas frecuentes", url: "#faq" },
    ],
    cta: { texto: "Agendar reunión", url: "#agendar" },
  },

  // --- HERO ---
  hero: {
    eyebrow: "Gestión de viajes para transporte y distribución",
    // El titular va en dos partes: contexto en blanco + beneficio destacado en violeta.
    tituloBlanco: "Despachás 25 viajes por día y el teléfono no para de sonar:",
    tituloDestacado:
      "el gerente de tráfico deja de ser el call center de sus clientes",
    subtitulo:
      "Rastreo en tiempo real por enlace, comprobantes de retiro y entrega con foto y aviso automático de ETA a tu cliente.",
    cta: { texto: "Agendar reunión", url: "#agendar" },
    // Micro-prueba social bajo el CTA (opcional, dejar "" para ocultar)
    nota: "Reunión de 30 minutos · Sin compromiso",
  },

  // --- VIDEO DE PRODUCTO ---
  video: {
    eyebrow: "Así funciona",
    titulo: "Un recorrido de 90 segundos por la plataforma",
    subtitulo:
      "Cómo se carga un viaje, cómo lo sigue tu cliente y cómo queda el comprobante de entrega.",
    // Opción A: video propio en /public/video/. Dejar "" si usás iframe.
    src: "",              // p.ej. "/video/demo-producto.mp4"
    poster: "",           // p.ej. "/img/poster-demo.jpg"
    // Opción B: video alojado (YouTube/Vimeo/Loom). Dejar "" si usás <video>.
    iframeSrc: "",        // p.ej. "https://www.youtube.com/embed/XXXXXXXX"
  },

  // --- EL PROBLEMA ---
  problema: {
    eyebrow: "El problema",
    titulo: "Hoy tu operación depende de que alguien conteste el teléfono",
    intro:
      "Mientras la flota está en la calle, el gerente de tráfico pasa el día apagando incendios en lugar de despachar viajes.",
    items: [
      {
        icono: "planilla",
        titulo: "Todo se carga a mano",
        texto:
          "Los datos de cada viaje se cargan manualmente, planilla por planilla, todos los días.",
      },
      {
        icono: "telefono",
        titulo: "El cliente llama y nadie sabe",
        texto:
          "Llaman para preguntar dónde está su carga y nadie puede responder en el momento.",
      },
      {
        icono: "papel",
        titulo: "Comprobantes en papel",
        texto:
          "Los remitos de retiro y entrega se extravían o quedan sin respaldo fotográfico.",
      },
    ],
  },

  // --- LA SOLUCIÓN (tríptico) ---
  solucion: {
    eyebrow: "Cómo funciona",
    titulo: "Tres funciones que sacan el teléfono del medio",
    items: [
      {
        icono: "mapa",
        titulo: "Rastreo en tiempo real por enlace",
        texto:
          "El cliente ve dónde está su carga sin necesidad de llamar.",
      },
      {
        icono: "camara",
        titulo: "Comprobantes de retiro y entrega con foto",
        texto:
          "Respaldo digital de cada movimiento, sin papeles.",
      },
      {
        icono: "reloj",
        titulo: "ETA automático con aviso al cliente",
        texto:
          "Notificación automática del horario estimado de llegada.",
      },
    ],
  },

  // --- PRUEBA SOCIAL (contenido real a definir — placeholder editable) ---
  pruebaSocial: {
    eyebrow: "Caso de uso",
    titulo: "Empresas que ya dejaron de atender llamadas",
    testimonios: [
      {
        cita:
          "Placeholder: acá va la cita corta del cliente contando qué cambió en su operación desde que usa la plataforma.",
        nombre: "Nombre del contacto",
        cargo: "Gerente de Tráfico",
        empresa: "Nombre de la empresa",
        logo: "",           // p.ej. "/img/logos/empresa.svg"
        // Dato duro opcional del caso (dejar "" para ocultar)
        metricaValor: "—",
        metricaTexto: "llamadas menos por día",
      },
    ],
  },

  // --- PREGUNTAS FRECUENTES ---
  faq: {
    eyebrow: "Dudas frecuentes",
    titulo: "Preguntas frecuentes",
    items: [
      {
        pregunta: "¿Para qué tipo de empresas es esta plataforma?",
        respuesta:
          "Para empresas de transporte y distribución que despachan 25 o más viajes por día. También sirve para e-commerce con logística propia.",
      },
      {
        pregunta: "¿Cómo elimina las llamadas de “¿dónde está mi pedido?”?",
        respuesta:
          "Cada viaje genera un enlace de rastreo en tiempo real que podés compartir con tu cliente, con ETA automático avisando cuándo llega.",
      },
      {
        pregunta: "¿Cómo quedan los comprobantes de entrega?",
        respuesta:
          "Con foto digital en el momento del retiro y la entrega, sin papeles que se pierdan ni queden sin respaldo.",
      },
      {
        pregunta: "¿Tengo que cargar los datos de los viajes a mano?",
        respuesta:
          "No, se elimina la carga manual planilla por planilla.",
      },
      {
        pregunta: "¿Cuánto cuesta?",
        respuesta:
          "Depende del volumen de viajes que gestionás. Lo vemos juntos en la reunión, sin compromiso.",
      },
      {
        pregunta: "¿Cómo agendo una demo?",
        respuesta:
          "Con el botón de arriba, elegís un horario de 30 minutos y listo.",
      },
    ],
  },

  // --- CTA FINAL: formulario de calificación + calendario ---
  agendar: {
    eyebrow: "Agendá tu demo",
    titulo: "Veamos tu operación y cuántas llamadas te podés sacar de encima",
    subtitulo:
      "Dejanos tus datos y elegí un horario de 30 minutos. Te mostramos la plataforma con tu propio flujo de viajes.",
    botonTexto: "Quiero mi demo",
    legal:
      "Al enviar aceptás que te contactemos por correo o WhatsApp. Sin compromiso.",
    campos: {
      nombre: "Nombre",
      empresa: "Empresa",
      email: "Correo corporativo",
      whatsapp: "WhatsApp",
      cargo: "Cargo",
      volumen: "Volumen de viajes diarios",
    },
    volumenOpciones: [
      "Menos de 10",
      "10 a 25",
      "25 a 50",
      "50 a 100",
      "Más de 100",
    ],
    calendario: {
      titulo: "Elegí tu horario",
      texto: "Reunión de 30 minutos por videollamada.",
    },
  },

  // --- FOOTER ---
  footer: {
    texto: "Gestión de viajes para empresas de transporte y distribución.",
    // Dejar la url vacía ("") para ocultar el ícono.
    redes: [
      { nombre: "LinkedIn", url: "", icono: "linkedin" },
      { nombre: "Instagram", url: "", icono: "instagram" },
      { nombre: "WhatsApp", url: "", icono: "whatsapp" },
    ],
    enlaces: [
      { texto: "Política de privacidad", url: "/privacidad" },
      { texto: "Aviso legal", url: "/aviso-legal" },
    ],
  },
};
