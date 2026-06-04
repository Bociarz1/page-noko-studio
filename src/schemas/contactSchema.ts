import { buildGraph, buildWebPage } from '@libs/ui/schemas';
import { websiteSchema } from '@schemas/websiteSchema';
import { organizationSchema } from '@schemas/organizationSchema';
import { BASE_URL } from 'src/consts/site';

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
