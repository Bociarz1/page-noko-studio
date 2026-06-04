import { buildGraph } from '@libs/ui/schemas';
import { websiteSchema } from '@schemas/websiteSchema';
import { organizationSchema } from '@schemas/organizationSchema';

export function buildHomeSchema() {
  return buildGraph(websiteSchema, organizationSchema);
}
