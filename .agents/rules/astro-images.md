---
activation: Glob
pattern: "src/**/*.{astro,md,mdx}"
---

# Astro Images & Optimization

W momencie generowania lub używania obrazków w plikach Astro zawsze przestrzegaj poniższych zasad:

1. **Używaj tylko komponentu `<Image />`**: Zawsze korzystaj z wbudowanego komponentu w Astro. NIGDY nie używaj standardowego tagu `<img>`.
2. **Importuj obrazy dla `src`**: Zawsze dodawaj prop `src` poprzez importowanie obrazu na górze pliku (w bloku frontmatter), np.: 
   `import costam from "../assets/obrazek.png";`
   Następnie użyj go w komponencie: `<Image src={costam} ... />`
3. **Wymagane atrybuty**: Zawsze dodawaj atrybuty `alt`, `width` i `height`, aby zapobiec przesunięciom układu (CLS).
4. **Leniwe ładowanie**: Zawsze dodawaj `loading="lazy"`.
5. **Responsywne wielkości (`widths`)**: Zawsze dodawaj atrybut `widths` z tablicą 3 wielkości odpowiednio dla mobile, tablet i desktop, np.: `widths={[400, 800, 1200]}`.
6. **Odpowiednie rozmiary (`sizes`)**: Zawsze dopasowuj atrybut `sizes` do użytych `widths`, podając odpowiednie breakpointy, np.: `sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"`.

Przykładowy poprawny kod:
```astro
---
import heroImage from "@assets/hero.png";
import { Image } from "astro:assets";
---

<Image 
  src={heroImage} 
  alt="Opis obrazka" 
  width={1200} 
  height={800} 
  loading="lazy" 
  widths={[400, 800, 1200]} 
  sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px" 
/>
```
