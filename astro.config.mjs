// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://noko-studio.pl",
    output: "static",
    adapter: cloudflare({
        imageService: "compile",
    }),
    integrations: [sitemap()],
    build: {
        inlineStylesheets: "always"
    },
    fonts: [{
        provider: fontProviders.fontsource(),
        name: "Montserrat",
        cssVariable: "--font-montserrat",
        weights: [300, 400, 500, 600],
        styles: ["normal"],
        display: "swap",
        subsets: ["latin", "latin-ext"],
        fallbacks: ["Arial", "Helvetica", "sans-serif"]
    }],
    image: {
        domains: ["images.unsplash.com"]
    }
});
