import { websiteSchema, organizationSchema } from '@schemas/shared';

interface FaqItem {
  q: string;
  a: string;
}

export function buildOfferSchema(faqItems: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Projektowanie Wnętrz - Konsultacje',
        'provider': { '@id': organizationSchema['@id'] },
      },
      {
        '@type': 'Service',
        'name': 'Projektowanie Wnętrz - Pakiet Podstawowy',
        'provider': { '@id': organizationSchema['@id'] },
      },
      {
        '@type': 'Service',
        'name': 'Projektowanie Wnętrz - Pakiet Standard',
        'provider': { '@id': organizationSchema['@id'] },
      },
      {
        '@type': 'Service',
        'name': 'Projektowanie Wnętrz - Pakiet Premium',
        'provider': { '@id': organizationSchema['@id'] },
      },
      {
        '@type': 'FAQPage',
        'mainEntity': faqItems.map((f) => ({
          '@type': 'Question',
          'name': f.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.a,
          },
        })),
      },
    ],
  };
}
