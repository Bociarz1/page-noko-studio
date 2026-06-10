---
trigger: always_on
---

# Reguła: Optymalizacja i Wyświetlanie Obrazów

Jako asystent AI, MUSISZ bezwzględnie przestrzegać poniższych zasad podczas dodawania i modyfikowania grafik w tym projekcie. Wydajność i optymalizacja obrazów (Core Web Vitals) są tutaj traktowane z najwyższym priorytetem.

## 1. Bezwzględny Nakaz Używania Komponentu `<Image>`

Kategoryczny ZAKAZ używania klasycznego, statycznego tagu HTML `<img>`. Do wyświetlania jakichkolwiek obrazów rastrowych MUSISZ używać wbudowanego komponentu Astro. Zwykły tag `<img>` zablokuje proces optymalizacji.

Wymagany import na szczycie pliku `.astro`:
```astro
import { Image } from 'astro:assets';
// Przykład importu lokalnego zdjęcia:
// import projectImg from '@assets/images/project.jpg'; 
```

## 2. Obowiązkowe Atrybuty i Format `avif`

Każdy komponent `<Image>` MUSI posiadać precyzyjny zestaw parametrów generujących responsywne rozdzielczości oraz optymalny format.

- **Format AVIF:** Zawsze wymuszaj generowanie najlżejszego formatu poprzez dodanie atrybutu `format="avif"`.
- **Wymiary:** Zawsze podawaj natywne `width` i `height`, aby przeglądarka zarezerwowała miejsce i zapobiegła skakaniu treści (Cumulative Layout Shift).
- **Responsywność (Srcset):** MUSISZ zdefiniować tablicę `widths` (generowanie wariantów) oraz atrybut `sizes` (podpowiadający przeglądarce, którą wersję pobrać na danym ekranie).
- **Leniwe Ładowanie:** Zawsze stosuj `loading="lazy"`. Jedynym wyjątkiem są obrazki umieszczone bezpośrednio w sekcji Hero (na samej górze ekranu przed scrollowaniem - tzw. LCP), które jako jedyne powinny posiadać `loading="eager"`.

## 3. Idealny Wzorzec Implementacji

Gdy tworzysz kod wyświetlający zdjęcie, MUSISZ użyć poniższych atrybutów, dopasowanych do zdjecia i sytuacji.

```astro
<Image
  src={projectImg}
  alt="Precyzyjny opis obrazka dla niewidomych i SEO"
  format="avif"
  width={1200}
  height={800}
  widths={[400, 800, 1200]}
  sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px"
  loading="lazy"
/>
```
