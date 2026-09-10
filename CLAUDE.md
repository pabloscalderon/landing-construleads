# CLAUDE.md — Sistema de landings de paid media

## Qué es esto
Plantilla base reutilizable para crear landing pages de campañas de Google Ads y Meta Ads.
Construida con **Astro + Tailwind CSS v4** (output estático). Cada landing es un clon de esta plantilla.

Campaña actual: plataforma SaaS de gestión de viajes para empresas de transporte y
distribución (público: gerentes de tráfico con 25+ viajes diarios).

## Regla de oro
Para una campaña nueva, **edita solo `src/data/landing.js`**. Ese archivo es la única
fuente de verdad: textos, CTAs, IDs de tracking, colores de marca (vía tokens).
NO toques los componentes salvo que se pida un bloque o estructura nuevos.

## Estructura
- `src/data/landing.js` → todo el contenido editable de la landing
- `src/styles/tokens.css` → `@import "tailwindcss"` + `@theme` con los tokens de marca
  (colores, tipografía, escala) y las clases base/`components`. Cambiar marca aquí.
- `src/layouts/Base.astro` → <head>, SEO, DM Sans y tracking (GTM/gtag/GA4/Meta Pixel)
  + helper `window.track(evento, datos)` para ViewContent / Lead / Schedule
- `src/components/*.astro` → secciones y piezas reutilizables:
  - Estructura: `Header`, `Hero`, `VideoProducto`, `Problema`, `Solucion`,
    `PruebaSocial`, `Faq`, `CtaFinal`, `Footer`
  - Piezas: `Boton` (píldora + flecha), `Eyebrow` (kicker con guion —•—),
    `Icono` (SVG inline), `TestimonioCard`
- `src/pages/index.astro` → ensambla las secciones

Los tokens del `@theme` se usan como utilidades de Tailwind: `bg-violeta`,
`text-gris`, `border-violeta`, etc.

## Tracking
El tracking se inyecta solo si hay ID en `landing.js > meta`:
- `gtmId` → Google Tag Manager
- `gtagId` → Google Ads (conversiones)
- `metaPixelId` → Meta Pixel
Para conversiones, usar `window.track(evento, datos)` (definido en `Base.astro`):
dispara a dataLayer + fbq + gtag a la vez. Eventos de esta landing:
`ViewContent` (carga), `Lead` (submit del form), `Schedule` (reunión agendada).
Los lugares de instalación de Meta CAPI, Google Ads y GA4 están marcados con
comentarios en `Base.astro` y `CtaFinal.astro`.

El formulario y el calendario del cierre se conectan a **Clientify**
(ver comentarios en `src/components/CtaFinal.astro`): el `<div id="clientify-calendar">`
y el `<script src="…/meetings/script/v2/14950.js">` van pegados ahí.

## Convenciones de diseño
- Fondo negro puro. Secciones de contraste: degradé violeta (`.fondo-violeta`)
  y burdeos/negro (`.fondo-burdeos`) como transición antes del cierre.
- Violeta `--color-violeta` para CTAs y acentos. Verde neón `--color-verde`
  **solo** para agendar reunión / WhatsApp sobre fondo violeta (texto negro).
- Un solo CTA por sección, repetido (header, hero, solución, cierre).
- Botones: píldora + circulito blanco con flecha (usar `<Boton />`).
- Mobile-first, foco visible en teclado, `prefers-reduced-motion` respetado.
- No hardcodear colores: usar los tokens del `@theme` de tokens.css.
- Copy en español neutro/latino. Sin modismos regionales.
  Excepción de la campaña actual: el brief del cliente define el copy con voseo
  rioplatense (podés, gestionás, elegís), así que toda la landing lo mantiene.
- El precio NO se muestra en ningún lugar de esta landing: solo se menciona que
  se define en la reunión según el volumen de viajes.

## Flujo de trabajo
1. `npm run dev` → previsualizar en http://localhost:4321
2. Editar `landing.js` chateando con Claude Code
3. `npm run build` → genera `/dist` (lo que se sube al servidor)
4. Push a `main` → GitHub Actions despliega a Hostinger por SSH/rsync (ver workflow)

## Crear una landing nueva a partir de esta plantilla
Copiar el repo a una carpeta nueva, vaciar el git history, ajustar `astro.config.mjs`
(campo `site`) y reescribir `landing.js`.
