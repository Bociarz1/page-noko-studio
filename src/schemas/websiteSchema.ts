import { BASE_URL } from '@constants/site';

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
