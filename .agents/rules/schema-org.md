---
activation: Glob
pattern: "src/schemas/**/*.ts"
---

# Schema.org (JSON-LD) Conventions

## Architektura schematów:

```
src/
├── libs/ui/schemas/    ← Biblioteka builderów (buildWebSite, buildOrganization, itd.) — NIE modyfikuj
└── schemas/            ← Schematy konkretnych stron projektu (używają builderów z libs)
```

## Dostępne buildery z `@libs/ui/schemas`:

| Builder | Typ Schema.org | Użycie |
|---|---|---|
| `buildGraph(...schemas)` | `@graph` | Otacza wszystkie schematy strony |
| `buildWebSite(opts)` | `WebSite` | Tylko na home (1 raz na projekt) |
| `buildOrganization(opts)` | `Organization / LocalBusiness` | Dane firmy |
| `buildWebPage(opts)` | `WebPage / ContactPage / ...` | Każda podstrona |
| `buildService(opts)` | `Service` | Usługi |
| `buildFAQ(items)` | `FAQPage` | Sekcje FAQ |
| `buildItemList(items)` | `ItemList` | Listy (portfolio grid) |
| `buildCreativeWork(opts)` | `CreativeWork` | Projekty portfolio |

## Wzorzec tworzenia schematu strony:

```ts
// src/schemas/offerSchema.ts
import { buildGraph, buildWebPage, buildFAQ } from '@libs/ui/schemas';
import { organizationSchema } from '@schemas/organizationSchema';
import { BASE_URL } from 'src/consts/site';

export function buildOfferSchema(faqItems: { q: string; a: string }[]) {
  return buildGraph(
    buildWebPage({
      type: 'WebPage',
      id: `${BASE_URL}/oferta/#webpage`,
      url: `${BASE_URL}/oferta`,
      name: 'Oferta | Nazwa Firmy',
      description: 'Opis strony...',
      isPartOfId: `${BASE_URL}/#website`,
      aboutId: `${BASE_URL}/#organization`,
    }),
    organizationSchema,
    buildFAQ(faqItems),
  );
}
```

## Wstrzykiwanie na stronie:
```astro
---
import { buildOfferSchema } from '@schemas/offerSchema';
const schema = buildOfferSchema(faqData);
---

<MainLayout ...>
  <script type="application/ld+json" set:html={JSON.stringify(schema)} />
  ...
</MainLayout>
```

## Zasady:
- Każda strona powinna mieć schemat `WebPage` (lub podtyp).
- `organizationSchema` z `src/schemas/organizationSchema.ts` dołączaj do każdej strony.
- `websiteSchema` z `src/schemas/websiteSchema.ts` dołączaj TYLKO do strony głównej.
- ID w schematch zawsze jako fragment URL: `${BASE_URL}/sciezka/#typ`, np. `${BASE_URL}/#organization`.
- Dane firmy pobieraj z `src/consts/site.ts` (COMPANY, BASE_URL) — NIE wpisuj ich ręcznie.
- Używaj `buildGraph()` jako wrappera — NIE ręcznie twórz `@context` i `@graph`.
