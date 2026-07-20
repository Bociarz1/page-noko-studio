---
trigger: always_on
---

# Reguła: Architektura i Struktura Projektu

Jako asystent AI, MUSISZ bezwzględnie przestrzegać poniższych zasad dotyczących struktury projektu podczas generowania lub modyfikowania kodu w tym repozytorium. Każdy folder w katalogu `src/` ma z góry określone, unikalne przeznaczenie.

## 1. Struktura Folderów (`src/`)

### `src/assets/` (Zasoby optymalizowane)
- **Zasada:** Miejsce na obrazki, czcionki i ikony, które wymagają przetworzenia, skompresowania i zoptymalizowania przez silnik Astro podczas budowania (w przeciwieństwie do folderu `public/`).
- **Zastosowanie:** Grafiki rastrowe, pliki `.svg` używane jako komponenty.
- **Rygorystyczna struktura ikon:** Wszystkie ikony używane w projekcie MUSZĄ znajdować się w folderze `/src/assets/icons/`. Każdy plik ikony MUSI być nazwany dokładnie według wzorca: `icon-[nazwa].svg` (np. `icon-arrow.svg`).

### `src/components/` (Komponenty UI)
- **Zasada Główna:** Bezwzględnie stosuj wzorzec Współlokacji (Co-location) dla skomplikowanych komponentów. Nie umieszczaj ciężkiej logiki TypeScript ani masywnych bloków SCSS w pojedynczym pliku `.astro`.
- **Zasada Podziału:** Folder `components/` MUSI być podzielony na podkatalogi `pages/` (dla konkretnych stron) oraz `shared/` (dla generycznych komponentów wielokrotnego użytku).
  1. **Komponenty stron (pages):** Komponent używany tylko na jednej stronie MUSI być zagnieżdżony zgodnie z nazwą tej strony. Przykład: Komponent "Hero" używany tylko na stronie "index.astro" MUSI znajdować się w `/src/components/pages/index/Hero/Hero.astro`.
  2. **Komponenty wspólne (shared):** Komponent generyczny MUSI znajdować się w `/src/components/shared/[NazwaKomponentu]/[NazwaKomponentu].astro`.
- **Wymagany format współlokacji:** 
  ```text
  /[NazwaKomponentu]/
    [NazwaKomponentu].astro
    [NazwaKomponentu].ts
    [NazwaKomponentu].scss
  ```

### `src/consts/` (Stałe Aplikacji)
- **Zasada:** W tym folderze MUSZĄ znajdować się wyłącznie statyczne pliki konfiguracyjne zawierające stałe dane używane w aplikacji. Absolutnie zakazane jest umieszczanie tutaj logiki biznesowej.
- **Zastosowanie:** Plik `site.ts` (dane klienta, linki social media, adresy e-mail).

### `src/content/` (Kolekcje Treści)
- **Zasada:** W tym folderze MUSZĄ znajdować się kolekcje Astro (np. artykuły na bloga, portfolio, autorzy) przechowywane jako pliki `.md` lub `.mdx`. Schematy walidacji (Zod) dla tych kolekcji muszą być definiowane w pliku `src/content.config.ts`. Używane do generowania treści bez używania zewnętrznego systemu CMS.

### `src/layouts/` (Szkielety Stron)
- **Zasada Główna:** Komponenty nadrzędne (wrappery), które określają globalny wygląd HTML i sekcji `<head>`. Podpinamy do nich globalne arkusze stylów oraz meta tagi. To tutaj leży fundament strony.
- **Zasada Współlokacji:** Każdy layout MUSI znajdować się w oddzielnym podfolderze, stosując wzorzec Współlokacji.
- **Wymagany format:** `/src/layouts/[NazwaLayoutu]/[NazwaLayoutu].astro` (np. `/src/layouts/MainLayout/MainLayout.astro` oraz przypisany do niego `MainLayout.scss`).

### `src/libs/` (Biblioteki i Usługi Zewnętrzne)
- **Zasada:** To jest JEDYNE miejsce w całym projekcie, w którym MUSZĄ znajdować się konfiguracje oraz wrappery dla zewnętrznych interfejsów API i bibliotek SDK (np. Stripe, Resend, klienci CMS, adaptery Cloudflare).

### `src/pages/` (Routing)
- **Zasada:** Ten folder bezpośrednio decyduje o adresach URL. Mogą znajdować się tutaj WYŁĄCZNIE strony wizualne `.astro` (np. `kontakt.astro` -> `/kontakt`).
- **Podfolder API (`src/pages/api/`):** To jest JEDYNE dozwolone miejsce na tworzenie punktów końcowych API (API Endpoints), logiki backendowej oraz webhooków w formacie `.ts` (np. `src/pages/api/contact.ts` do obsługi formularzy). Wyjątkiem są techniczne pliki SEO typu `robots.txt.ts`, które muszą być w głównym katalogu `pages/`.
- **Ograniczenie:** Kategoryczny ZAKAZ umieszczania w tych plikach ciężkiej logiki biznesowej. Plik w `pages/` (zarówno `.astro` jak i `.ts`) MUSI pełnić wyłącznie rolę "routera" – odbiera żądanie, importuje logikę wykonawczą z folderów `utils` lub `libs` i zwraca wynik.

### `src/seo/` (Logika Pozycjonowania i Schematy Danych)
- **Zasada Pozycjonowania:** Pliki i skrypty specyficznie powiązane z pozycjonowaniem witryny (np. automatyczne budowanie linków kanonicznych, generowanie mikro-danych dla wyszukiwarek).
- **Zasada Schematów (Schemas):** Ten folder przejmuje również rolę walidacji. To tutaj MUSZĄ znajdować się wszystkie struktury walidacyjne dla danych projektu.
- **Zastosowanie:** Schematy Zod, schematy bloków FAQ, schematy strukturalne JSON-LD.

### `src/styles/` (Globalne Style)
- **Zasada:** Globalne ustawienia SCSS/CSS. Trzymamy tu WYŁĄCZNIE zmienne, resetery i mixiny współdzielone w całej aplikacji.
- **Zastosowanie:** `_breakpoints.scss` (punkty przerwania), `_z-indexes.scss` (warstwy), `_global.scss` (globalne definicje czcionek).

### `src/utils/` (Narzędzia)
- **Zasada:** Dozwolone są tutaj WYŁĄCZNIE Czyste Funkcje (Pure Functions). Funkcje MUSZĄ przyjmować parametry, przetwarzać je i zwracać wynik bez wywoływania jakichkolwiek efektów ubocznych.
- **Ograniczenie:** Kategoryczny ZAKAZ importowania jakichkolwiek zewnętrznych SDK ani usług chmurowych!
- **Zastosowanie:** Formatowanie dat, walidacja wyrażeń regularnych (regex), obliczenia matematyczne.

---

## 2. Konwencje Nazewnictwa

- **Komponenty (.astro, .tsx, .vue):** MUSZĄ używać formatu `PascalCase` (np. `PrimaryButton.astro`).
- **Funkcje i Logika (.ts, .js):** MUSZĄ używać formatu `camelCase` (np. `formatDate.ts`).
- **Strony i Routing:** MUSZĄ używać formatu `kebab-case` (np. `o-nas.astro`).
- **Style (.scss):** Współdzielone pliki częściowe (partials) MUSZĄ zaczynać się od znaku podkreślenia (np. `_z-indexes.scss`).

## 3. Folder `public/`
- **Zasada:** Przeznaczony wyłącznie na zasoby statyczne, które omijają proces budowania aplikacji (jak `favicon.ico`, `site.webmanifest`, `_headers`). NIGDY nie umieszczaj tutaj kodu źródłowego aplikacji.

## 4. Konwencje Stylowania (CSS/SCSS)
- **ZAKAZ INLINE STYLES:** Kategorycznie zabrania się używania atrybutu `style="..."` bezpośrednio w znacznikach HTML/Astro (tzw. inline styles). Wszystkie style MUSZĄ być przeniesione do powiązanych plików `.scss` za pomocą klas. Wyjątkiem są wyłącznie sytuacje, w których wartości muszą być dynamicznie wyliczane przez JavaScript w czasie rzeczywistym i nie da się ich obsłużyć zmiennymi CSS.