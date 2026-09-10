# CLAUDE.md — Sistema de landings de paid media

## Qué es esto
Plantilla base reutilizable para crear landing pages de campañas de Google Ads y Meta Ads.
Construida con **Astro + Tailwind CSS v4** (output estático). Cada landing es un clon de esta plantilla.

Este repo NO es la landing de ningún cliente: es el molde. El contenido que trae
`landing.js` es de relleno y está para ser reemplazado.

## Regla de oro
Para una campaña nueva, **edita solo `src/data/landing.js`** (contenido) y
`src/styles/tokens.css` (marca). Esos dos archivos son la única fuente de verdad.
NO toques los componentes salvo que se pida un bloque o estructura nuevos.

## Estructura
- `src/data/landing.js` → todo el contenido editable de la landing
- `src/styles/tokens.css` → `@import "tailwindcss"` + `@theme` con los tokens de marca
  (colores, tipografía, escala) y las clases base/`components`. Cambiar marca aquí.
- `src/layouts/Base.astro` → <head>, SEO, tipografía y tracking (GTM/gtag/GA4/Meta Pixel)
  + helper `window.track(evento, datos)` para ViewContent / Lead / Schedule
- `src/components/*.astro` → secciones y piezas reutilizables:
  - Estructura: `Header`, `Hero`, `VideoProducto`, `Problema`, `Solucion`,
    `PruebaSocial`, `Faq`, `CtaFinal`, `Footer`
  - Piezas: `Boton` (píldora + flecha), `Eyebrow` (kicker con guion —•—),
    `Icono` (SVG inline), `TestimonioCard`
- `src/pages/index.astro` → ensambla las secciones

Los tokens del `@theme` se nombran **por rol, nunca por color**, y se usan como
utilidades de Tailwind: `bg-primario`, `text-suave`, `border-primario`. Así la
misma clase sirve con cualquier paleta de cliente.

Si cambiás la tipografía en `tokens.css > --font-sans`, actualizá también el
`<link>` de Google Fonts en `Base.astro`: son dos lugares que tienen que coincidir.

## Tracking
El tracking se inyecta solo si hay ID en `landing.js > meta`:
- `gtmId` → Google Tag Manager
- `gtagId` → Google Ads (conversiones)
- `ga4Id` → GA4
- `metaPixelId` → Meta Pixel
Para conversiones, usar `window.track(evento, datos)` (definido en `Base.astro`):
dispara a dataLayer + fbq + gtag a la vez. Eventos previstos:
`ViewContent` (carga), `Lead` (submit del form), `Schedule` (reunión agendada).
Los lugares de instalación de Meta CAPI, Google Ads y GA4 están marcados con
comentarios en `Base.astro` y `CtaFinal.astro`.

## El cierre (CtaFinal.astro)
Dos bloques apilados, en este orden:
1. **Calendario de agendamiento** (opción principal). El script del widget va
   **dentro** del `<div id="clientify-calendar">`, porque monta el calendario en
   su propia posición: si se saca de ahí, aparece al final de la página y a ancho
   completo. La URL se carga en `landing.js > agendar.calendario.scriptUrl`;
   vacía, el bloque muestra un marcador en lugar del widget. Como estos widgets
   suelen traer tema claro, va enmarcado en una tarjeta blanca.
2. **Formulario de calificación**, como alternativa para quien no encuentra
   horario. No tiene lógica de envío propia: hay que conectarlo al formulario
   nativo del CRM (ver comentario en el componente).

## Convenciones de diseño
- Fondo oscuro alto contraste. Secciones de contraste: degradé (`.fondo-degradado`)
  y un tono de transición (`.fondo-transicion`) antes del cierre.
- `--color-primario` para CTAs y acentos. La variante `claro` del botón es para
  fondos saturados donde el primario no contrasta.
- Un solo CTA por sección, repetido (header, hero, solución, cierre).
- Botones: píldora + circulito con flecha (usar `<Boton />`).
- Mobile-first, foco visible en teclado, `prefers-reduced-motion` respetado.
- No hardcodear colores: usar los tokens del `@theme` de tokens.css.
- Copy en español neutro/latino. Sin modismos regionales, salvo que el brief
  del cliente pida explícitamente otro registro.

## Flujo de trabajo
1. `npm run dev` → previsualizar en http://localhost:4321
2. Editar `landing.js` chateando con Claude Code
3. `npm run build` → genera `/dist` (lo que se sube al servidor)
4. Push a `main` → GitHub Actions despliega a Hostinger por SSH/rsync (ver workflow)

## Crear una landing nueva a partir de esta plantilla
1. Copiar el repo a una carpeta nueva y vaciar el git history (`rm -rf .git && git init`).
2. Ajustar `astro.config.mjs` (campo `site`) con el dominio final.
3. Reescribir `landing.js` y los tokens de `tokens.css`.
4. Cargar en el repo nuevo sus propios secrets de deploy (`HOSTINGER_*`).
   Ojo: el rsync corre con `--delete`, así que cada landing necesita su propia
   carpeta en el servidor o una pisa a la otra.

### Landings ya derivadas de esta plantilla
- `landing-rutalink` — plataforma de gestión de viajes para transporte.
