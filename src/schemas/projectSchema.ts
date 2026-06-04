import { buildGraph, buildCreativeWork } from '@libs/ui/schemas';
import { organizationSchema } from '@schemas/organizationSchema';
import { BASE_URL } from 'src/consts/site';

interface ProjectSchemaOptions {
  slug: string;
  title: string;
  description: string;
  year: string | number;
  imageSrcs: string[];
}

export function buildProjectSchema({ slug, title, description, year, imageSrcs }: ProjectSchemaOptions) {
  const creativeWork = buildCreativeWork({
    id: `${BASE_URL}/portfolio/${slug}/#creativework`,
    url: `${BASE_URL}/portfolio/${slug}`,
    name: title,
    description,
    image: imageSrcs,
    creatorId: organizationSchema['@id'],
    dateCreated: String(year),
  });

  return buildGraph(creativeWork);
}
