import { buildGraph, buildService, buildFAQ } from '@libs/ui/schemas';
import { organizationSchema } from '@schemas/organizationSchema';

interface FaqItem {
  q: string;
  a: string;
}

export function buildOfferSchema(faqItems: FaqItem[]) {
  const services = [
    'Projektowanie Wnętrz - Konsultacje',
    'Projektowanie Wnętrz - Pakiet Podstawowy',
    'Projektowanie Wnętrz - Pakiet Standard',
    'Projektowanie Wnętrz - Pakiet Premium',
  ].map((name) => buildService({ name, providerId: organizationSchema['@id'] }));

  const faqPage = buildFAQ(faqItems);

  return buildGraph(...services, faqPage);
}
