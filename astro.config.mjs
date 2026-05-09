// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
    fonts: [{
        provider: fontProviders.fontsource(),
        name: "Montserrat",
        cssVariable: "--font-montserrat",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
  }]
});
