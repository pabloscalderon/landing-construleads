# CLAUDE.md — Sistema de landings de paid media

## Qué es esto
Plantilla base reutilizable para crear landing pages de campañas de Google Ads y Meta Ads.
Construida con Astro (output estático). Cada landing es un clon de esta plantilla.

## Regla de oro
Para una campaña nueva, **edita solo `src/data/landing.js`**. Ese archivo es la única
fuente de verdad: textos, CTAs, IDs de tracking, colores de marca (vía tokens).
NO toques los componentes salvo que se pida un bloque o estructura nuevos.

## Estructura
- `src/data/landing.js` → todo el contenido editable de la landing
- `src/styles/tokens.css` → colores, tipografías, espaciado (cambiar marca aquí)
- `src/layouts/Base.astro` → <head>, SEO e inyección de tracking (GTM/gtag/Meta Pixel)
- `src/components/*.astro` → secciones (Hero, Problemas, Proceso, Testimonios, Contacto…)
- `src/pages/index.astro` → ensambla las secciones

## Tracking
El tracking se inyecta solo si hay ID en `landing.js > meta`:
- `gtmId` → Google Tag Manager
- `gtagId` → Google Ads (conversiones)
- `metaPixelId` → Meta Pixel
Para conversiones, dispara eventos en el submit del form (pedir si se necesita).

## Convenciones de diseño
- Fondo oscuro alto contraste, acento de marca en `--c-primary`.
- Un solo CTA por sección, repetido (header, hero, contacto).
- Mobile-first, foco visible en teclado, `prefers-reduced-motion` respetado.
- No hardcodear colores: usar variables CSS de tokens.css.
- Copy en español neutro/latino. Sin voseo ni modismos regionales.

## Flujo de trabajo
1. `npm run dev` → previsualizar en http://localhost:4321
2. Editar `landing.js` chateando con Claude Code
3. `npm run build` → genera `/dist` (lo que se sube al servidor)
4. Push a `main` → GitHub Actions despliega a Hostinger por SSH/rsync (ver workflow)

## Crear una landing nueva a partir de esta plantilla
Copiar el repo a una carpeta nueva, vaciar el git history, ajustar `astro.config.mjs`
(campo `site`) y reescribir `landing.js`.
