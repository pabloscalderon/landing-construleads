// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  // Cambia esto por el dominio final de cada landing.
  // Se usa para sitemap, og:url y enlaces canónicos.
  site: "https://tudominio.com",
  output: "static",
  compressHTML: true,
  build: {
    // Inlinea CSS pequeño para que la landing cargue en 1 solo request.
    inlineStylesheets: "auto",
  },
});
