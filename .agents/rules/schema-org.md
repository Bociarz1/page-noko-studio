# Reguła: Strukturalne Dane SEO (Schema.org / JSON-LD)

Jako asystent AI, MUSISZ przestrzegać poniższych zasad podczas optymalizacji technicznego SEO i budowania "Rich Snippets" (Rozszerzonych Wyników) dla wyszukiwarki Google.

## 1. Co to są Schematy (Schema.org)?
Schematy to ukryte fragmenty kodu w formacie JSON-LD wstrzykiwane bezpośrednio do kodu HTML. Służą one do "karmienia" botów wyszukiwarek w 100% ustrukturyzowanymi danymi (np. twardą informacją, że dana strona to firma lokalna, organizacja, artykuł lub sekcja FAQ). Google używa ich, by wyświetlać stronę w sposób specjalny (np. pokazując rozwinięte harmonijki pytań lub gwiazdki ocen prosto w wynikach wyszukiwania).

## 2. Prawidłowa Lokalizacja (Folder `/src/seo/schemas/`)
- Wszelkie definicje, "buildery" i logika odpowiedzialna za przygotowanie obiektów Schema.org MUSZĄ bezwzględnie znajdować się w dedykowanym folderze: **`/src/seo/schemas/`**.
- Kategoryczny ZAKAZ wpisywania twardej logiki JSON-LD bezpośrednio do logiki komponentów wizualnych (`.astro`). Wzorzec architektoniczny wymaga ścisłej separacji: komponenty budują widok dla ludzi, a pliki z `/seo/schemas/` budują widok dla maszyn.

## 3. Wzorzec Generowania i Implementacji
Sztuczna Inteligencja wprowadzająca schemat MUSI wykonać to w 2 rygorystycznych krokach:

**Krok 1: Stworzenie Buildera w TypeScript (`/src/seo/schemas/[nazwa]Schema.ts`)**
Musisz napisać Czystą Funkcję, która przyjmuje dane wejściowe i zwraca tekstowy format JSON zgodny ze standardem Schema.org.

```ts
// Przykład: /src/seo/schemas/faqSchema.ts
export const buildFaqSchema = (questions: { q: string; a: string }[]) => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  });
};
```

**Krok 2: Wstrzyknięcie w Komponencie (`.astro`)**
Zaimportuj builder do właściwego komponentu, wygeneruj JSON-LD i wstrzyknij go na stronę za pomocą tagu `<script type="application/ld+json">`. Aby uniknąć ucięcia lub popsucia formatowania (tzw. escape'owania znaków) przez silnik Astro, MUSISZ użyć atrybutu `set:html`.

```astro
---
// Przykład: /src/components/pages/kontakt/Faq/Faq.astro
import { buildFaqSchema } from '@seo/schemas/faqSchema';
import { faqData } from '@data/faqData'; // Dane pochodzące z zewnątrz

const jsonLd = buildFaqSchema(faqData);
---

<section class="faq">
  <!-- Tu znajduje się normalny, widoczny dla ludzi kod HTML komponentu FAQ... -->
</section>

<!-- Kod widoczny tylko dla botów Google: -->
<script type="application/ld+json" set:html={jsonLd} />
```

## 4. Ograniczenia i Bezpieczeństwo
- **Używaj `set:html`:** Jeśli wstrzykniesz JSON prosto w tag `<script>{jsonLd}</script>`, kompilator Astro uszkodzi cudzysłowy.
- **Tylko to co widać:** Zgodnie z wytycznymi Google, dane Schema.org muszą odpowiadać w 100% temu, co użytkownik realnie widzi na stronie HTML. Nigdy nie wrzucaj do JSON-LD treści ukrytych lub nieistniejących wizualnie na witrynie.
