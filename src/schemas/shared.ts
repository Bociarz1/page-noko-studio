import { BASE_URL } from '@constants/site';

export const organizationSchema = {
  '@type': 'ProfessionalService',
  '@id': `${BASE_URL}/#organization`,
  'name': 'NOKO Studio',
  'legalName': 'NOKO Studio Pracownia Architektury Wnętrz',
  'url': BASE_URL,
  'logo': `${BASE_URL}/favicon.svg`,
  'image': `${BASE_URL}/assets/images/kuchnia-z-wyspa-widok-na-salon-apartament-warszawa.webp`,
  'description': 'Profesjonalna pracownia projektowania i aranżacji wnętrz w Białymstoku. Projektujemy domy, mieszkania i apartamenty w całej Polsce.',
  'telephone': ['+48455408602', '+48455408601'],
  'email': 'biuro@noko-studio.pl',
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Białystok',
    'addressRegion': 'Podlaskie',
    'addressCountry': 'PL',
  },
  'areaServed': [
    { '@type': 'AdministrativeArea', 'name': 'Białystok' },
    { '@type': 'Country', 'name': 'Polska' },
  ],
  'priceRange': '$$',
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  'url': `${BASE_URL}/`,
  'name': 'NOKO Studio',
  'description': 'Profesjonalne projektowanie wnętrz w Białymstoku i całej Polsce.',
  'publisher': {
    '@id': `${BASE_URL}/#organization`,
  },
};
