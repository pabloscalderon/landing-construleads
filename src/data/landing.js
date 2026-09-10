// ============================================================
//  landing.js — ÚNICA FUENTE DE VERDAD DE LA LANDING
//  Edita SOLO este archivo para una campaña nueva.
//  Claude Code puede reescribir todo esto chateando.
//
//  Lo que sigue es contenido de PLANTILLA: reemplázalo por el de la campaña.
//  Los colores y la tipografía se cambian en src/styles/tokens.css.
// ============================================================

export const landing = {
  // --- Meta / SEO / tracking ---
  meta: {
    titulo: "Título de la landing (55-60 caracteres para Google)",
    descripcion:
      "Descripción de 150-160 caracteres: qué ofreces, para quién y qué gana quien deja sus datos.",
    idioma: "es",
    // IDs de medición — déjalos vacíos si no aplican.
    gtmId: "",          // p.ej. "GTM-XXXXXX"
    gtagId: "",         // p.ej. "AW-123456789" (Google Ads)
    ga4Id: "",          // p.ej. "G-XXXXXXXXXX" (GA4)
    metaPixelId: "",    // p.ej. "123456789012345"
    // Etiquetas de conversión de Google Ads: "AW-123456789/AbC-D_efG"
    gtagConversionLead: "",
    gtagConversionSchedule: "",
  },

  // --- Marca ---
  marca: {
    nombre: "Nombre del cliente",
    logoTexto: "Marca",
    // Si hay logo en imagen, ponlo en /public/img y referencia: "/img/logo.svg"
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
    eyebrow: "Categoría del producto o servicio",
    // El titular va en dos partes: contexto/dolor en blanco + beneficio en el acento.
    tituloBlanco: "Frase de contexto que nombra el dolor del cliente:",
    tituloDestacado: "el beneficio central de la oferta, en una línea",
    subtitulo:
      "Una frase que explique en concreto qué hace el producto o servicio y para quién.",
    cta: { texto: "Agendar reunión", url: "#agendar" },
    // Micro-prueba social bajo el CTA (dejar "" para ocultar)
    nota: "Reunión de 30 minutos · Sin compromiso",
  },

  // --- VIDEO DE PRODUCTO (dejar src e iframeSrc vacíos para ocultar el video) ---
  video: {
    eyebrow: "Así funciona",
    titulo: "Titular del bloque de video",
    subtitulo: "Qué va a ver quien le dé play, en una línea.",
    src: "",              // video propio: "/video/demo.mp4"
    poster: "",           // "/img/poster.jpg"
    iframeSrc: "",        // alojado: "https://www.youtube.com/embed/XXXXXXXX"
  },

  // --- EL PROBLEMA ---
  problema: {
    eyebrow: "El problema",
    titulo: "Titular que describe la situación actual del cliente",
    intro: "Párrafo corto que amplíe el titular y prepare las tres tarjetas.",
    // Íconos disponibles en Icono.astro: planilla, telefono, papel, mapa, camara, reloj, check
    items: [
      { icono: "planilla", titulo: "Primer dolor", texto: "Una línea concreta, con el lenguaje del cliente." },
      { icono: "telefono", titulo: "Segundo dolor", texto: "Una línea concreta, con el lenguaje del cliente." },
      { icono: "papel", titulo: "Tercer dolor", texto: "Una línea concreta, con el lenguaje del cliente." },
    ],
  },

  // --- LA SOLUCIÓN (tríptico) ---
  solucion: {
    eyebrow: "Cómo funciona",
    titulo: "Titular que resume la solución",
    items: [
      { icono: "mapa", titulo: "Primera funcionalidad", texto: "Qué resuelve, en una línea." },
      { icono: "camara", titulo: "Segunda funcionalidad", texto: "Qué resuelve, en una línea." },
      { icono: "reloj", titulo: "Tercera funcionalidad", texto: "Qué resuelve, en una línea." },
    ],
  },

  // --- PRUEBA SOCIAL ---
  pruebaSocial: {
    eyebrow: "Caso de uso",
    titulo: "Titular de la sección de prueba social",
    testimonios: [
      {
        cita: "Cita corta del cliente contando qué cambió desde que usa el producto.",
        nombre: "Nombre del contacto",
        cargo: "Cargo",
        empresa: "Nombre de la empresa",
        logo: "",              // "/img/logos/empresa.svg"
        metricaValor: "",      // dato duro del caso; "" para ocultarlo
        metricaTexto: "",
      },
    ],
  },

  // --- PREGUNTAS FRECUENTES ---
  faq: {
    eyebrow: "Dudas frecuentes",
    titulo: "Preguntas frecuentes",
    items: [
      { pregunta: "¿Para quién es esto?", respuesta: "Respuesta corta y concreta." },
      { pregunta: "¿Cómo funciona?", respuesta: "Respuesta corta y concreta." },
      { pregunta: "¿Cuánto cuesta?", respuesta: "Respuesta corta y concreta." },
      { pregunta: "¿Cómo agendo una reunión?", respuesta: "Respuesta corta y concreta." },
    ],
  },

  // --- CIERRE: calendario + formulario de calificación ---
  agendar: {
    eyebrow: "Agendá tu reunión",
    titulo: "Titular de cierre que invita a agendar",
    subtitulo: "Una línea sobre qué pasa después de dejar los datos.",
    botonTexto: "Quiero mi reunión",
    legal: "Al enviar aceptás que te contactemos. Sin compromiso.",
    campos: {
      nombre: "Nombre",
      empresa: "Empresa",
      email: "Correo corporativo",
      whatsapp: "WhatsApp",
      cargo: "Cargo",
      volumen: "Pregunta de calificación",
    },
    // Opciones del select de calificación (ajustar a cada campaña)
    volumenOpciones: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
    // Bloque 1 del cierre: el calendario (opción principal)
    calendario: {
      titulo: "Elegí tu horario",
      texto: "Reunión de 30 minutos por videollamada.",
      // Script del widget de calendario. Se inyecta DENTRO de #clientify-calendar,
      // que es donde el script monta el widget. Vaciar para ocultarlo.
      // p.ej. "https://app.clientify.com/meetings/script/v2/XXXXX.js"
      scriptUrl: "",
    },
    // Bloque 2 del cierre: el formulario, como alternativa al calendario
    formulario: {
      titulo: "¿Preferís que te contactemos?",
      texto: "Si no encontrás un horario que te sirva, dejanos tus datos.",
    },
  },

  // --- FOOTER ---
  footer: {
    texto: "Una línea que describa al cliente.",
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
