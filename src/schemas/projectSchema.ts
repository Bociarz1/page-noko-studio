import { organizationSchema } from '@schemas/organizationSchema';

import { BASE_URL } from '@constants/site';

interface ProjectSchemaOptions {
  slug: string;
  title: string;
  description: string;
  year: string | number;
  imageSrcs: string[];
}

export function buildProjectSchema({ slug, title, description, year, imageSrcs }: ProjectSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        '@id': `${BASE_URL}/portfolio/${slug}/#creativework`,
        'url': `${BASE_URL}/portfolio/${slug}`,
        name: title,
        description,
        'image': imageSrcs,
        'creator': {
          '@id': organizationSchema['@id'],
        },
        'dateCreated': String(year),
      },
    ],
  };
}
