---
activation: always_on
---

# Project Architecture & Directory Structure

## Przegląd projektu:
Projekt oparty o **Astro 6** z adapterem **Cloudflare** (output: static + SSR dla API routes).
Budowanie: `npm run build`, dev: `npm run dev`, formatowanie: `npm run format`.

## Biblioteka UI wewnętrzna (`src/libs/ui/`):
To współdzielona biblioteka narzędzi. **NIGDY jej nie modyfikuj bez wyraźnej potrzeby.**

```
src/libs/ui/
├── api/
│   └── mailer.ts           ← sendFormEmail() przez Resend API
├── components/
│   ├── Button/             ← Komponent linku/przycisku (używa LIB_PREFIX)
│   ├── SEO/                ← Meta tagi, OG, Twitter Cards
│   └── SectionHeader/     ← Nagłówek sekcji (tytuł + podtytuł)
├── interfaces/
│   ├── NavLink.ts          ← INavLink<T> — typ dla elementów nawigacji
│   └── SectionIds.ts       ← TSectionIds<T> — typ dla mapowania sekcji
├── schemas/                ← Buildery Schema.org (JSON-LD)
│   ├── buildGraph.ts       ← Otacza schematy w @context/@graph
│   ├── buildWebSite.ts
│   ├── buildOrganization.ts
│   ├── buildWebPage.ts
│   ├── buildService.ts
│   ├── buildFAQ.ts
│   ├── buildItemList.ts
│   ├── buildCreativeWork.ts
│   └── index.ts            ← Re-eksportuje wszystkie buildery
├── styles/
│   ├── _breakpoints.scss   ← mixin mq(), hide-on()
│   ├── _reset.scss
│   ├── _typography-utils.scss
│   ├── _z-indexes.scss
│   └── config.module.scss  ← $lib-prefix = 'ui-'
└── config.ts               ← Eksportuje LIB_PREFIX do TS
```

## Struktura projektu (`src/`):

```
src/
├── assets/
│   ├── favicon/            ← favicon.ico, apple-touch-icon.png
│   ├── icons/              ← Ikony SVG (importowane jako komponenty)
│   ├── images/             ← Zdjęcia (webp preferowany)
│   └── portfolio/          ← Zdjęcia projektów portfolio
│
├── components/
│   ├── shared/             ← Komponenty współdzielone przez wszystkie strony
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── Button/         ← Wrapper na @libs/ui/components/Button
│   │   ├── CookiePopup/
│   │   ├── FAQ/
│   │   ├── FloatingPhone/
│   │   ├── PortfolioItem/
│   │   └── SectionHeader/
│   └── pages/              ← Komponenty specyficzne dla stron
│       ├── index/          ← Sekcje strony głównej
│       ├── offer/
│       ├── portfolio/
│       ├── portfolioDetails/
│       ├── contact/
│       ├── privacyPolicy/
│       ├── terms-of-service/
│       └── Error404/
│
├── consts/
│   ├── navLinks.ts         ← enum NavLinks, SectionIds, NAV_ELEMENTS
│   └── site.ts             ← BASE_URL, COMPANY (dane firmy)
│
├── data/
│   └── projects.ts         ← Dane projektów portfolio
│
├── layouts/
│   └── MainLayout/         ← Główny layout (head, header, footer, cookie, floating phone)
│
├── libs/                   ← Biblioteka wewnętrzna (patrz wyżej)
│
├── pages/
│   ├── api/
│   │   └── contact.ts      ← POST /api/contact (obsługuje formularz)
│   ├── index.astro
│   ├── portfolio.astro
│   ├── portfolio/[slug].astro
│   ├── oferta.astro
│   ├── kontakt.astro
│   ├── polityka-prywatnosci.astro
│   ├── regulamin.astro
│   └── 404.astro
│
├── schemas/                ← Schema.org dla poszczególnych stron (używają builderów z libs)
│   ├── organizationSchema.ts
│   ├── websiteSchema.ts
│   ├── homeSchema.ts
│   ├── offerSchema.ts
│   ├── portfolioSchema.ts
│   ├── projectSchema.ts
│   └── contactSchema.ts
│
└── styles/
    ├── _global.scss        ← Globalne tokeny CSS + font-family
    └── _config.scss        ← Re-export breakpointów dla komponentów
```

## Kluczowe wzorce:

### Dodawanie nowej strony:
1. Utwórz `src/pages/nazwa-strony.astro`.
2. Użyj `<MainLayout title="..." metaDescription="...">`.
3. Dodaj `NavLinks.NAZWA = '/nazwa-strony'` w `src/consts/navLinks.ts`.
4. Dodaj section IDs do `SectionIds` w `navLinks.ts`.
5. Utwórz schemat w `src/schemas/nazwaSchema.ts` i wstrzyknij przez `<script type="application/ld+json">`.

### Dodawanie nowego komponentu:
1. Utwórz folder `src/components/shared/NazwaKomponentu/` lub `src/components/pages/[strona]/NazwaKomponentu/`.
2. Utwórz `NazwaKomponentu.astro` + `NazwaKomponentu.scss` (i opcjonalnie `NazwaKomponentu.ts`).
3. Importuj przez alias `@components/shared/NazwaKomponentu/NazwaKomponentu.astro`.

### Font:
- Montserrat Variable (fontsource) — zadeklarowany w `astro.config.mjs`.
- NIE importuj `@fontsource-variable/montserrat` w komponentach — tylko w `MainLayout.astro`.
