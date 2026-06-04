import { BASE_URL, COMPANY } from 'src/consts/site';
import { buildOrganization } from '@libs/ui/schemas';

export const organizationSchema = buildOrganization({
  type: 'ProfessionalService',
  id: `${BASE_URL}/#organization`,
  name: COMPANY.name,
  legalName: COMPANY.legalName,
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.ico`,
  image: `${BASE_URL}/og-image.png`,
  description: COMPANY.description,
  telephone: COMPANY.phones.aleksandra.raw,
  contactPoints: [
    {
      telephone: COMPANY.phones.aleksandra.raw,
      contactType: 'customer service',
      availableLanguage: 'Polish',
    },
    {
      telephone: COMPANY.phones.paulina.raw,
      contactType: 'customer service',
      availableLanguage: 'Polish',
    },
  ],
  email: COMPANY.email,
  address: {
    streetAddress: COMPANY.address.street,
    addressLocality: COMPANY.address.city,
    postalCode: COMPANY.address.postalCode,
    addressRegion: COMPANY.address.region,
    addressCountry: COMPANY.address.country,
  },
  areaServed: [
    { type: 'AdministrativeArea', name: 'Białystok' },
    { type: 'AdministrativeArea', name: 'Białystok and nearby areas' },
    { type: 'Country', name: 'Polska' },
  ],
  priceRange: '$$',
  makesOffer: {
    name: 'Kompleksowe projektowanie wnętrz domów i apartamentów',
  },
});
