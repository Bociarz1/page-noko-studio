import { BASE_URL, COMPANY } from '@constants/site';

export const organizationSchema = {
  '@type': 'ProfessionalService',
  '@id': `${BASE_URL}/#organization`,
  'name': COMPANY.name,
  'legalName': COMPANY.legalName,
  'url': BASE_URL,
  'logo': `${BASE_URL}/favicon.ico`,
  'image': `${BASE_URL}/og-image.png`,
  'description': COMPANY.description,
  'telephone': COMPANY.phones.aleksandra.raw,
  'contactPoint': [
    {
      '@type': 'ContactPoint',
      'telephone': COMPANY.phones.aleksandra.raw,
      'contactType': 'customer service',
      'availableLanguage': 'Polish',
    },
    {
      '@type': 'ContactPoint',
      'telephone': COMPANY.phones.paulina.raw,
      'contactType': 'customer service',
      'availableLanguage': 'Polish',
    },
  ],
  'email': COMPANY.email,
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': COMPANY.address.street,
    'addressLocality': COMPANY.address.city,
    'postalCode': COMPANY.address.postalCode,
    'addressRegion': COMPANY.address.region,
    'addressCountry': COMPANY.address.country,
  },
  'areaServed': [
    { '@type': 'AdministrativeArea', 'name': 'Białystok' },
    { '@type': 'AdministrativeArea', 'name': 'Białystok and nearby areas' },
    { '@type': 'Country', 'name': 'Polska' },
  ],
  'priceRange': '$$',
  'makesOffer': {
    '@type': 'Offer',
    'itemOffered': {
      '@type': 'Service',
      'name': 'Kompleksowe projektowanie wnętrz domów i apartamentów',
    },
  },
};
