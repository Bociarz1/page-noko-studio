import { buildGraph } from '@seo/schemas';
import { websiteSchema } from '@seo/websiteSchema';
import { organizationSchema } from '@seo/organizationSchema';

export function buildHomeSchema() {
  return buildGraph(websiteSchema, organizationSchema);
}
