export interface ContactPoint {
  telephone: string;
  contactType: string;
  availableLanguage?: string | string[];
}

export interface Address {
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
  addressRegion?: string;
  addressCountry: string;
}

export interface Offer {
  name: string;
  priceRange?: string;
}

export interface OrganizationOptions {
  type?: 'Organization' | 'LocalBusiness' | 'ProfessionalService' | string;
  id: string;
  name: string;
  legalName?: string;
  url: string;
  logo?: string;
  image?: string;
  description?: string;
  telephone?: string;
  email?: string;
  address?: Address;
  contactPoints?: ContactPoint[];
  areaServed?: { type: string, name: string }[];
  priceRange?: string;
  makesOffer?: Offer;
}

export function buildOrganization(opts: OrganizationOptions) {
  const schema: any = {
    '@type': opts.type || 'Organization',
    '@id': opts.id,
    'name': opts.name,
    'url': opts.url,
  };
  if (opts.legalName) schema.legalName = opts.legalName;
  if (opts.logo) schema.logo = opts.logo;
  if (opts.image) schema.image = opts.image;
  if (opts.description) schema.description = opts.description;
  if (opts.telephone) schema.telephone = opts.telephone;
  if (opts.email) schema.email = opts.email;
  
  if (opts.address) {
    schema.address = {
      '@type': 'PostalAddress',
      ...opts.address
    };
  }
  
  if (opts.contactPoints) {
    schema.contactPoint = opts.contactPoints.map(cp => ({
      '@type': 'ContactPoint',
      ...cp
    }));
  }
  
  if (opts.areaServed) {
    schema.areaServed = opts.areaServed.map(area => ({
      '@type': area.type,
      'name': area.name
    }));
  }
  
  if (opts.priceRange) schema.priceRange = opts.priceRange;
  
  if (opts.makesOffer) {
    schema.makesOffer = {
      '@type': 'Offer',
      'itemOffered': {
        '@type': 'Service',
        'name': opts.makesOffer.name
      }
    };
  }
  
  return schema;
}
