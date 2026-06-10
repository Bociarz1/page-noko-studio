import { buildGraph, buildCreativeWork } from '@seo/schemas';
import { organizationSchema } from '@seo/organizationSchema';
import { BASE_URL } from '@consts/site';

interface ProjectSchemaOptions {
  slug: string;
  title: string;
  description: string;
  year: string | number;
  imageSrcs: string[];
}

export function buildProjectSchema({
  slug,
  title,
  description,
  year,
  imageSrcs,
}: ProjectSchemaOptions) {
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
