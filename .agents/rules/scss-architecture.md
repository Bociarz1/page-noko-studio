---
activation: Glob
pattern: "src/**/*.scss"
---

# SCSS Architecture & Conventions

## Architektura plików SCSS w projekcie:

```
src/
├── styles/
│   ├── _global.scss        ← JEDYNE miejsce dla globalnych tokenów CSS i stylów html/body
│   └── _config.scss        ← Re-eksportuje narzędzia z libs dla komponentów (TYLKO @forward, BEZ kodu CSS)
│
└── libs/ui/styles/
    ├── _breakpoints.scss   ← Mixin mq() i hide-on(), zmienne $breakpoints
    ├── _reset.scss         ← Bazowy CSS reset
    ├── _typography-utils.scss ← Klasy użytkowe z prefiksem ui- (np. .ui-text-h1)
    ├── _z-indexes.scss     ← Zmienne CSS z-indexów z prefiksem ui- (np. var(--ui-z-header))
    └── config.module.scss  ← $lib-prefix ('ui-'), eksportowany do TS
```

## Zasady bezwzględne:

### Import w komponentach:
```scss
// Zawsze @use, nigdy @import
@use '@styles/_config.scss' as *;    // daje dostęp do mixin mq(), hide-on() bez prefixu
@use '@styles/_config.scss';         // jeśli chcesz z prefixem (config.mq(), config.hide-on())
```

### Breakpointy – zawsze przez mixin:
```scss
@use '@styles/_config.scss' as *;

.my-component {
  padding: 1rem;

  @include mq('tablet') {
    padding: 2rem;
  }

  @include mq('desktop') {
    padding: 3rem;
  }
}
```

Dostępne breakpointy (mobile-first):
- `mobile`: 0px (domyślny, bez media query)
- `tablet`: 768px
- `desktop`: 1024px
- `wide`: 1200px

### Ukrywanie elementów:
```scss
@use '@styles/_config.scss' as *;

.only-desktop {
  @include hide-on('mobile', 'tablet');
}
```

### Zmienne CSS (tokeny z :root w `_global.scss`):
- Kolory: `var(--color-white)`, `var(--color-dark)`, `var(--color-cream)`, `var(--color-green)`, `var(--color-error)`, itd.
- Typografia: `var(--text-display)`, `var(--text-h1)` → `var(--text-h4)`, `var(--text-body-lg)`, `var(--text-body)`, `var(--text-body-sm)`, `var(--text-caption)`
- Font weights: `var(--font-light)`, `var(--font-regular)`, `var(--font-medium)`, `var(--font-semibold)`, `var(--font-bold)`
- Układ: `var(--header-height)` (74px), `var(--footer-height)` (74px)
- Z-indexy: `var(--ui-z-below)`, `var(--ui-z-default)`, `var(--ui-z-elevated)`, `var(--ui-z-dropdown)`, `var(--ui-z-header)`, `var(--ui-z-overlay)`, `var(--ui-z-modal)`, `var(--ui-z-critical)`

### Klasy typograficzne z biblioteki ui (prefiks `ui-`):
```html
<p class="ui-text-h2 ui-font-semibold">Nagłówek</p>
<span class="ui-text-body ui-font-regular">Treść</span>
```

## Nazewnictwo klas CSS — BEM:
Stosuj metodologię BEM:
```scss
.header { }               // Block
.header__logo { }         // Element
.header__logo--bold { }   // Modifier
```

## Zakazy:
- **NIGDY** nie używaj `@import` w SCSS (deprecated) — zawsze `@use` lub `@forward`.
- **NIGDY** nie wpisuj stałych wartości pikselowych dla wysokości zależnych od headera/footera.
- **NIGDY** nie definiuj `font-family` w komponentach — tylko w `_global.scss`.
- **NIGDY** nie modyfikuj plików w `src/libs/` — to biblioteka współdzielona.
- Nie używaj `!important` poza plikami w `src/libs/` (wyjątek: `hide-on` mixin).
