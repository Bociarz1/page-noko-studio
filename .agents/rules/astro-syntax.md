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
