# Reguła: Zarządzanie i Konfiguracja Czcionek (Fonty)

Jako asystent AI, podczas dodawania lub zmieniania czcionek w projekcie, MUSISZ bezwzględnie przestrzegać poniższych wytycznych. Dbanie o prywatność (RODO/GDPR) i wydajność ładowania strony to priorytet w tym architektonicznym szablonie.

## 1. Zakaz Google Fonts w HTML
Kategoryczny ZAKAZ wstrzykiwania zewnętrznych linków z Google Fonts (np. `<link href="https://fonts.googleapis.com/..." />`) bezpośrednio w tagu `<head>` (np. w pliku `Layout.astro` lub wewnątrz komponentu `<SEO>`). Pobieranie czcionek na żywo z serwerów Google blokuje renderowanie (Core Web Vitals) i łamie europejskie prawo o prywatności.

## 2. Instalacja Lokalna przez NPM
Zawsze pobieraj i instaluj czcionki lokalnie za pomocą paczek `@fontsource`. 
Użyj menedżera pakietów, np.:
`npm install @fontsource/playfair-display @fontsource/inter`

## 3. Konfiguracja w `astro.config.mjs`
Aby silnik Astro wygenerował poprawne deklaracje `@font-face` połączone bezpośrednio z naszymi zmiennymi SCSS z pliku `_variables.scss`, MUSISZ skonfigurować wtyczkę odpowiedzialną za fonty (np. `astro-font`) dokładnie według poniższego wzorca wewnątrz `astro.config.mjs`.

**Wymagany blok konfiguracyjny:**
Zwróć szczególną uwagę na klucz `cssVariable` – musi się on perfekcyjnie zgadzać z tym, co jest wpisane w `src/styles/_variables.scss` (np. `--font-display`, `--font-sans`). Zawsze ładuj zestawy znaków `latin-ext` dla polskich ogonków.

Przykład poprawnej konfiguracji w `astro.config.mjs`:
```javascript
{
  provider: fontProviders.fontsource(),
  name: "Playfair Display",
  cssVariable: "--font-display", // Zmienna powiązana z _variables.scss
  weights: [400, 500, 600, 700],
  styles: ["normal", "italic"],
  display: "swap", // Zawsze wymuszaj 'swap' dla eliminacji FOUT
  subsets: ["latin", "latin-ext"], // Wymagane dla języka polskiego
  fallbacks: ["Cormorant Garamond", "Georgia", "serif"]
}
```

## 4. Importowanie Fontów (Zasada Współlokacji)
Jeśli wtyczka w `astro.config.mjs` nie wykonuje auto-wstrzykiwania importów do HTML (w zależności od konfiguracji biblioteki), upewnij się, że główny plik układu (np. `/src/layouts/MainLayout/MainLayout.astro`) importuje paczki fizycznie w bloku skryptu na samej górze:

```astro
---
// Importy w MainLayout.astro
import '@fontsource/inter';
import '@fontsource/playfair-display';
---
```

## Podsumowanie
1. Zmienić czcionkę w projekcie = 1. Zainstalować przez NPM -> 2. Dodać definicję `fontsource()` w `astro.config.mjs` powiązaną ze zmienną SCSS -> 3. (Opcjonalnie) dodać import w `MainLayout.astro` -> 4. Korzystać ze zmiennej `var(--font-display)` w całym systemie (np. przypisaną do `h1`).
