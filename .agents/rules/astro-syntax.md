---
trigger: always_on
---

---
activation: Glob
pattern: "src/**/*.astro"
---

# Astro Component Structure

Pilnuj poprawnej anatomii pliku `.astro`.

## Część Server-Side (Frontmatter `---`):
- Wszystkie importy komponentów, skryptów oraz pobieranie danych (np. `Astro.props`, `fetch()`) wykonuj WYŁĄCZNIE wewnątrz potrójnych myślników `---` na górze pliku.
- Kod wewnątrz frontmattera wykonuje się w czasie budowania/na serwerze. Nie umieszczaj tam logiki przeglądarkowej (np. `window.addEventListener`).

## Część Klienta (Tag `<script>`):
- Pamiętaj, że kod w `<script>` w Astro jest domyślnie przetwarzany przez Bundler i optymalizowany. Nie musisz ręcznie dodawać atrybutu `defer`.

## Struktura plików i folderów:
- KAŻDY komponent musi znajdować się w swoim własnym folderze (np. `src/components/Header/Header.astro`).
- Pliki stylów dla komponentu (np. `Header.scss`) muszą znajdować się w tym samym folderze co sam komponent.
- Unikaj wrzucania plików `.astro` bezpośrednio do głównego folderu `src/components/` lub innych podfolderów – zawsze twórz folder z nazwą komponentu.

## Importy i Aliasy:
- Zawsze używaj aliasów zdefiniowanych w `tsconfig.json` (np. `@components/`, `@styles/`, `@assets/`) zamiast ścieżek względnych (np. `../../components/`). Dotyczy to zarówno importów w plikach `.astro` i `.ts`, jak i dyrektyw `@use` w plikach `.scss`.
- Przy importowaniu plików SCSS (np. przez `@use`) **zawsze** dodawaj rozszerzenie `.scss` na końcu ścieżki (np. `@use '@styles/_breakpoints.scss'`).