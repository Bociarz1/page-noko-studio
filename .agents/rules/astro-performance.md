---
trigger: always_on
---

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

## Stylowanie i CSS:
- Style definuj w odzielnym pliku obok komponentu np. `Component.astro` -> `Component.scss`.
- Do pliku astro imortuj style poprzez:
<style lang="scss">
  @use './Component.scss';
</style>
- zawsze używaj @use przy importowaniu