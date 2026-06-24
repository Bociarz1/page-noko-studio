import { buildGraph, buildFAQ } from '@seo/schemas';
import type { FaqItem } from '@seo/schemas/buildFAQ';
import { websiteSchema } from '@seo/websiteSchema';
import { organizationSchema } from '@seo/organizationSchema';

export function buildHomeSchema(faqItems?: FaqItem[]) {
  const schemas: any[] = [websiteSchema, organizationSchema];
  if (faqItems && faqItems.length > 0) {
    schemas.push(buildFAQ(faqItems));
  }
  return buildGraph(...schemas);
}
