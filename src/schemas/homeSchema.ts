import { websiteSchema, organizationSchema } from '@schemas/shared';

export function buildHomeSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [websiteSchema, organizationSchema],
  };
}
