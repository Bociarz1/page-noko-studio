import { websiteSchema, organizationSchema } from '@schemas/shared';

import { BASE_URL } from '@constants/site';

interface ContactSchemaOptions {
  name: string;
  description: string;
}

export function buildContactSchema({ name, description }: ContactSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${BASE_URL}/kontakt/#webpage`,
        'url': `${BASE_URL}/kontakt`,
        name,
        description,
        'isPartOf': {
          '@type': 'WebSite',
          '@id': websiteSchema['@id'],
          'url': websiteSchema.url,
          'name': websiteSchema.name,
        },
        'about': {
          '@id': organizationSchema['@id'],
        },
      },
      organizationSchema,
    ],
  };
}
