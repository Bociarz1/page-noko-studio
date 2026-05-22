---
description: Przeprowadza rygorystyczny audyt technicznego SEO, poprawności semantyki HTML oraz autonomicznie dobiera i generuje struktury danych Schema.org.
---

---
name: seo-audit
description: Przeprowadza rygorystyczny audyt technicznego SEO, poprawności semantyki HTML oraz autonomicznie dobiera i generuje struktury danych Schema.org.
trigger: "/seo-audit"
---

# Przepływ Pracy: Audyt Technicznego SEO i Dopasowanie Schema.org

Kiedy użytkownik wywoła komendę `/seo-audit`, przeanalizuj treść wskazanego pliku według poniższej procedury. Działaj jak doradca i ekspert SEO.

## Krok 1: Semantyka HTML i Dostępność
Przeanalizuj strukturę znaczników pod kątem robotów indeksujących:
1. **Hierarchia nagłówków:** Upewnij się, że na stronie istnieje dokładnie JEDEN nagłówek `<h1>`. Sprawdź, czy poziomy `<h2>` do `<h6>` nie przeskakują chaotycznie (np. z `<h2>` bezpośrednio do `<h4>`).
2. **Atrybuty obrazów:** Znajdź wszystkie tagi graficzne (w tym komponenty `<Image />`). Każdy z nich MUSI posiadać unikalny, opisowy atrybut `alt`.
3. **Linki:** Upewnij się, że linki wewnętrzne i zewnętrzne nie używają tekstów kotwicy typu "kliknij tutaj" czy "więcej". 

## Krok 2: Meta Tagi i Open Graph
Sprawdź sekcję `<head>` komponentu (lub układu Layout):
1. **Title & Description:** Czy długość `<title>` mieści się w granicach 50-60 znaków, a `meta description` w 120-160 znakach? Czy zawierają słowa kluczowe naturalnie dopasowane do kontekstu strony?
2. **Canonical:** Czy strona posiada poprawnie zdefiniowany tag `<link rel="canonical" href="..." />`?

## Krok 3: Autonomiczny dobór i generowanie Schema.org (Nowość)
Przeanalizuj kontekst biznesowy i treść pliku. Na podstawie tego, co znajduje się na stronie, zaproponuj najbogatszy możliwy zestaw struktur danych.

1. **Mapowanie typu podstrony:**
   - Jeśli to strona główna firmy -> Zaproponuj `LocalBusiness` lub `Organization`.
   - Jeśli to strona z ofertą / pojedynczą usługą -> Zaproponuj `Service` powiązany z ofertą cenową `Offer`.
   - Jeśli na stronie są opinie klientów -> Zaproponuj wstrzyknięcie `Review` lub `AggregateRating` do głównego obiektu.
   - Jeśli na stronie znajduje się sekcja pytań i odpowiedzi (FAQ) -> Zaproponuj dodatkowy, niezależny obiekt `FAQPage`.
   - Jeśli to portfolio / realizacja projektu -> Zaproponuj `CreativeWork`.

2. **Generowanie czystego kodu JSON-LD:**
   - Na podstawie przeczytanego pliku (np. nazwy firmy, numeru telefonu, opisów usług) wyciągnij realne dane. Nie używaj placeholderów typu "Twoja Firma Sp. z o.o.". Jeśli jakichś danych brakuje, oznacz je w kodzie komentarzem jako `// DO UZUPEŁNIENIA: [np. cena]`.
   - Przygotuj gotowy do skopiowania znacznik `<script type="application/ld+json">`.

## Krok 4: Raport i Interaktywna Propozycja
Wygeneruj podsumowanie w czacie, podzielone na sekcje:
- **[STAN SEO]:** Analiza semantyki i meta tagów.
- **[REKOMENDACJA SCHEMA.ORG]:** Napisz uzasadnienie: *"Ta strona reprezentuje ofertę usługową, dlatego rekomenduję dodanie typu X oraz sekcji FAQ, ponieważ..."*.
- **[PROJEKT KODU]:** Wyświetl wygenerowany, kompletny kod JSON-LD dopasowany do treści strony.
- **[AKCJA]:** Zapytaj użytkownika: *"Czy chcesz, abym automatycznie wstrzyknął te meta tagi oraz kod Schema do pliku?"* i oczekuj na decyzję.