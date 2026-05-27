import { websiteSchema } from '@schemas/websiteSchema';
import { organizationSchema } from '@schemas/organizationSchema';

export function buildHomeSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [websiteSchema, organizationSchema],
  };
}
