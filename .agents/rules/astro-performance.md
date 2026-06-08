---
activation: Glob
pattern: "src/**/*.{astro,md,mdx}"
---

# Astro Performance & HTML Standards

Zawsze optymalizuj kod pod kątem Core Web Vitals (LCP, CLS, INP) oraz najwyższego wyniku Lighthouse.

## Zasady dotyczące obrazów:
- NIGDY nie używaj standardowego tagu `<img>`.
- Zawsze importuj i używaj komponentu `<Image />` z pakietu `astro:assets`.
- Każdy komponent `<Image />` MUSI mieć jawnie zdefiniowane atrybuty `width`, `height` oraz `alt`, aby zapobiegać przesunięciom układu (CLS).
- Dodawaj `loading="lazy"` dla obrazów poniżej linii zgięcia; LCP image (np. hero) – `loading="eager"` + `fetchpriority="high"`.
- Zawsze definiuj `widths` (3 rozmiary: mobile, tablet, desktop) i pasujący `sizes`.

## Stylowanie i CSS:
- Style definiuj w osobnym pliku obok komponentu: `Component.astro` → `Component.scss`.
- Importuj style w pliku `.astro` przez:
```astro
<style lang="scss">
  @use './Component.scss';
</style>
```
- Blok `<style>` umieszczaj zaraz pod `---` (przed HTML), zawsze używaj `@use`.
- Gdy wysokość elementu zależy od headera/footera, korzystaj ze zmiennych CSS z `:root` w `_global.scss` (np. `var(--header-height)`), a NIE ze stałych wartości w pikselach.
- **NIGDY** nie nadpisuj `font-family` w komponentach. Globalna czcionka zdefiniowana jest w `_global.scss` (Montserrat Variable).

## HTML & SEO:
- Każda strona MUSI zawierać dokładnie jeden tag `<h1>`.
- Zachowaj poprawną hierarchię nagłówków: h1 → h2 → h3.
- Wszystkie interaktywne elementy muszą mieć poprawne atrybuty `aria-label` lub widoczny tekst.
- Ikony dekoracyjne oznaczaj `aria-hidden="true"`.