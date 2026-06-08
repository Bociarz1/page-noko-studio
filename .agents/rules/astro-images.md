---
activation: Glob
pattern: "src/**/*.{astro,md,mdx}"
---

# Astro Images & Optimization

## Zasady bezwzględne:
1. **NIGDY** nie używaj `<img>` — zawsze komponent `<Image />` z `astro:assets`.
2. Importuj obraz w frontmatter i przekazuj jako prop `src` (NIE stringi URL dla lokalnych plików).
3. Każdy `<Image />` MUSI mieć: `alt`, `width`, `height`.
4. Zdefiniuj `widths` (3 wartości: mobile/tablet/desktop) i pasujący `sizes`.

## Loading strategy:
- **LCP (hero, first visible image)**: `loading="eager"` + `fetchpriority="high"`, BEZ `widths` (jedno pełne źródło = szybszy LCP).
- **Poniżej linii zgięcia**: `loading="lazy"` (domyślne) + `widths` + `sizes`.

## Ikony / SVG:
- SVG importuj jako komponenty Astro: `import MyIcon from '@assets/icons/icon-name.svg';` → `<MyIcon width="20" height="20" aria-hidden="true" />`.
- NIE używaj `<Image />` dla ikon SVG.

## Przykłady:

### Hero (LCP):
```astro
---
import { Image } from 'astro:assets';
import heroImg from '@assets/images/hero.webp';
---

<Image
  src={heroImg}
  alt="Opis zdjęcia hero"
  width={1920}
  height={1080}
  loading="eager"
  fetchpriority="high"
/>
```

### Zdjęcie w sekcji (lazy):
```astro
---
import { Image } from 'astro:assets';
import projectImg from '@assets/portfolio/projekt-1.webp';
---

<Image
  src={projectImg}
  alt="Opis projektu"
  width={1200}
  height={800}
  widths={[400, 800, 1200]}
  sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px"
  loading="lazy"
/>
```

## Formaty:
- Preferuj `.webp` dla zdjęć (Astro konwertuje automatycznie).
- Pliki źródłowe przechowuj w `src/assets/images/` lub `src/assets/portfolio/`.
- Zewnętrzne domeny obrazów deklaruj w `astro.config.mjs` pod `image.domains`.
