import { websiteSchema } from '@schemas/websiteSchema';

import { BASE_URL } from '@constants/site';

interface Project {
  slug: string;
}

export function buildPortfolioSchema(projects: Project[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${BASE_URL}/portfolio/#webpage`,
        'url': `${BASE_URL}/portfolio`,
        'name': 'Portfolio – NOKO Studio',
        'description': 'Realizacje i projekty wnętrz NOKO Studio. Projekty domów i apartamentów z pasją i dbałością o detal.',
        'isPartOf': {
          '@id': websiteSchema['@id'],
        },
      },
      {
        '@type': 'ItemList',
        'itemListElement': projects.map((project, index) => ({
          '@type': 'ListItem',
          'position': index + 1,
          'url': `${BASE_URL}/portfolio/${project.slug}`,
        })),
      },
    ],
  };
}
