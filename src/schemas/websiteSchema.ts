import { BASE_URL } from 'src/consts/site';
import { buildWebSite } from '@libs/ui/schemas';

export const websiteSchema = buildWebSite({
  url: `${BASE_URL}/`,
  name: 'NOKO Studio',
  description: 'Profesjonalne projektowanie wnętrz w Białymstoku i całej Polsce.',
  publisherId: `${BASE_URL}/#organization`,
});
