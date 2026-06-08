---
activation: Glob
pattern: "src/**/*.astro"
---

# Astro Component Structure

Pilnuj poprawnej anatomii pliku `.astro`.

## Część Server-Side (Frontmatter `---`):
- Wszystkie importy komponentów, skryptów oraz pobieranie danych (`Astro.props`, `fetch()`) wykonuj WYŁĄCZNIE wewnątrz `---`.
- Kod frontmattera wykonuje się w czasie budowania / na serwerze — NIE umieszczaj tam logiki przeglądarkowej (`window`, `document`, `localStorage`).
- Props zawsze typuj przez lokalny `interface Props` wewnątrz `---`.

## Kolejność elementów w pliku `.astro`:
```
--- (frontmatter: importy, interface Props, logika serwerowa) ---
<style lang="scss"> @use ... </style>   ← zaraz pod ---
<script> import ... </script>            ← opcjonalnie
<!-- HTML template -->
```

## Część Klienta (Tag `<script>`):
- Kod `<script>` jest domyślnie bundlowany i odroczony — NIE dodawaj ręcznie `defer`.
- Logikę JS/TS powiązaną z komponentem trzymaj w osobnym pliku `Component.ts` w tym samym folderze i importuj go przez `<script>import './Component.ts';</script>`.
- Dostęp do DOM realizuj po załadowaniu dokumentu — kod w `<script>` w Astro uruchamia się po DOMContentLoaded.

## Struktura plików i folderów:
- KAŻDY komponent musi znajdować się w swoim własnym folderze:
  - `src/components/shared/Header/Header.astro`
  - `src/components/pages/index/OurServices/OurServices.astro`
- Pliki powiązane z komponentem (`.scss`, `.ts`) muszą być w TYM SAMYM folderze.
- Komponenty zagnieżdżone wewnątrz innego komponentu trafiają do podfolderu `components/` tego rodzica, np. `Header/components/HeaderMenu/HeaderMenu.astro`.
- NIE wrzucaj plików `.astro` bezpośrednio do `src/components/` — zawsze twórz folder z nazwą komponentu.

## Importy i Aliasy:
Zawsze używaj aliasów z `tsconfig.json`. Dostępne aliasy:

| Alias          | Ścieżka fizyczna     |
|----------------|----------------------|
| `@assets/*`    | `src/assets/*`       |
| `@components/*`| `src/components/*`   |
| `@layouts/*`   | `src/layouts/*`      |
| `@pages/*`     | `src/pages/*`        |
| `@styles/*`    | `src/styles/*`       |
| `@data/*`      | `src/data/*`         |
| `@constants/*` | `src/consts/*`       |
| `@schemas/*`   | `src/schemas/*`      |
| `@libs/*`      | `src/libs/*`         |

- Przy `@use` w SCSS **zawsze** dodawaj rozszerzenie `.scss`: `@use '@styles/_config.scss'`.
- Wyjątek: importy z `src/consts/` w plikach `.astro` możesz robić bez aliasu jeśli potrzebujesz – ale preferuj alias `@constants/`.

## Wyjście HTML:
- Schema.org wstrzykuj przez `<script type="application/ld+json" set:html={JSON.stringify(schema)} />` — NIE przez `<Fragment set:html>`.