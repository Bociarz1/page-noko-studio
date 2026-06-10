import { buildGraph, buildWebPage } from '@seo/schemas';
import { websiteSchema } from '@seo/websiteSchema';
import { organizationSchema } from '@seo/organizationSchema';
import { BASE_URL } from '@consts/site';

interface ContactSchemaOptions {
  name: string;
  description: string;
}

export function buildContactSchema({ name, description }: ContactSchemaOptions) {
  const contactPage = buildWebPage({
    type: 'ContactPage',
    id: `${BASE_URL}/kontakt/#webpage`,
    url: `${BASE_URL}/kontakt`,
    name,
    description,
    isPartOfId: websiteSchema['@id'],
    aboutId: organizationSchema['@id'],
  });

  return buildGraph(contactPage, organizationSchema);
}
