---
activation: Glob
pattern: "src/libs/**/*.{ts,astro,scss}"
---

# UI Library (`src/libs/ui/`) — Rules

## Czym jest ta biblioteka:
`src/libs/ui/` to **wewnętrzna biblioteka komponentów i narzędzi** — kod generyczny, niezwiązany z konkretnym projektem. Przenoszona 1:1 między projektami.

## Zasady bezwzględne:
- **NIE modyfikuj** plików w `src/libs/` w kontekście konkretnego projektu.
- Jeśli potrzebujesz rozszerzyć funkcjonalność komponentu z libs, stwórz **wrapper** w `src/components/shared/`.
- Jeśli chcesz nadpisać zmienną SCSS z libs (np. `$lib-prefix`), rób to przez mechanizm `!default` przy `@use`.

## Dostępne komponenty (`src/libs/ui/components/`):

### `<Button href title class? />`
```astro
---
import Button from '@libs/ui/components/Button/Button.astro';
// lub wrapper projektu:
import Button from '@components/shared/Button/Button.astro';
---

<Button href="/kontakt" title="Skontaktuj się" variant="primary" />
```
Używa klasy CSS z `LIB_PREFIX` (np. `ui-btn`). Posiada sloty `beforeIcon` i `afterIcon`.

### `<SEO title metaDescription canonicalUrl? ogImage? siteName? noindex? type? />`
Automatycznie używany przez `MainLayout`. Nie używaj bezpośrednio na stronach.

### `<SectionHeader title subtitle? />`
Nagłówek sekcji. Używaj zamiast ręcznego pisania `<h2>` + `<p>`.

## Dostępne interfejsy (`src/libs/ui/interfaces/`):

### `INavLink<T>`
```ts
import type { INavLink } from '@libs/ui/interfaces/NavLink';

const navItem: INavLink<NavLinks> = {
  label: 'Portfolio',
  href: NavLinks.PORTFOLIO,
  isPathActive: true,
};
```

### `TSectionIds<T>`
```ts
import type { TSectionIds } from '@libs/ui/interfaces/SectionIds';

export const SectionIds = {
  [NavLinks.HOME]: { hero: '', services: 'uslugi' },
} satisfies TSectionIds<NavLinks>;
```

## Dostępne schematy (`src/libs/ui/schemas/`):
Patrz reguła `schema-org.md`.

## API (`src/libs/ui/api/`):

### `sendFormEmail(params)`
```ts
import { sendFormEmail } from '@libs/ui/api/mailer';

const { error } = await sendFormEmail({
  to: import.meta.env.CONTACT_EMAIL,
  replyTo: email,
  subject: `Nowe zapytanie: ${subject}`,
  title: 'Nowe zapytanie z formularza',
  fields: { 'Imię': name, 'E-mail': email },
  message: messageText,
});
```

## Prefix CSS (`ui-`):
Wszystkie klasy CSS z biblioteki mają prefiks `ui-`. Dostępny jako stała w TS:
```ts
import { LIB_PREFIX } from '@libs/ui/config';
// LIB_PREFIX === 'ui-'
```
