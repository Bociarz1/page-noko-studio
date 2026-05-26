// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    output: "static",
    adapter: cloudflare(),
    build: {
        inlineStylesheets: "always"
    },
    fonts: [{
        provider: fontProviders.fontsource(),
        name: "Montserrat",
        cssVariable: "--font-montserrat",
        weights: [300, 400, 500, 600],
        styles: ["normal"],
        display: "optional",
        subsets: ["latin"],
        fallbacks: ["Arial", "Helvetica", "sans-serif"]
    }],
    image: {
        domains: ["images.unsplash.com"]
    }
});
