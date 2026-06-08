---
activation: always_on
---

# Deployment & Infrastructure

## Stack wdrożeniowy:
- **Hosting**: Cloudflare Pages
- **Adapter**: `@astrojs/cloudflare` v13+
- **Output mode**: `static` (SSG) z wyjątkiem tras API (`prerender = false`)
- **Node**: >= 22.12.0

## Konfiguracja (`astro.config.mjs`):
- `site`: URL produkcyjny (np. `https://noko-studio.pl`)
- `output: "static"` — zmień na `"hybrid"` jeśli potrzeba SSR per-strona
- `adapter: cloudflare({ imageService: "compile" })` — kompiluje obrazy build-time
- `build.inlineStylesheets: "always"` — wstrzykuje CSS inline (lepszy LCP, zero FOUC)
- `integrations: [sitemap()]` — auto-generacja `sitemap.xml`

## API Routes (trasy dynamiczne):
Każda trasa API (plik w `src/pages/api/`) MUSI mieć:
```ts
export const prerender = false;
```
Bez tego Cloudflare nie obsłuży jej jako funkcji Edge.

## Zmienne środowiskowe:
- Przechowywane w `.env` (lokalnie) i w panelu Cloudflare Pages (produkcja).
- `.env` jest w `.gitignore` — **NIGDY nie commituj kluczy API**.
- Wymagane:
  - `RESEND_API_KEY` — klucz Resend do wysyłki maili
  - `CONTACT_EMAIL` — docelowy adres e-mail formularza

## Czcionki:
- Montserrat Variable przez Fontsource (`@fontsource-variable/montserrat`).
- Zadeklarowana w `astro.config.mjs` jako `fonts[].provider = fontProviders.fontsource()`.
- CSS variable: `--font-montserrat`.
- Importowana w `MainLayout.astro` przez `import '@fontsource-variable/montserrat'`.

## Sitemap:
- Auto-generowany przez `@astrojs/sitemap`.
- Strony z `noindex: true` (przekazane przez MainLayout → SEO) NIE pojawiają się w sitemap — weryfikuj ręcznie.

## Formatowanie kodu:
- **Prettier** z `prettier-plugin-astro`.
- Konfiguracja w `.prettierrc`: singleQuote, semi, trailingComma es5, printWidth 100, endOfLine lf.
- Uruchom: `npm run format` (formatuje `src/**/*.{astro,ts,scss,css,md,json}`).
