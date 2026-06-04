import { buildGraph, buildWebPage, buildItemList } from '@libs/ui/schemas';
import { websiteSchema } from '@schemas/websiteSchema';
import { BASE_URL } from 'src/consts/site';

interface Project {
  slug: string;
}

export function buildPortfolioSchema(projects: Project[]) {
  const collectionPage = buildWebPage({
    type: 'CollectionPage',
    id: `${BASE_URL}/portfolio/#webpage`,
    url: `${BASE_URL}/portfolio`,
    name: 'Portfolio – NOKO Studio',
    description: 'Realizacje i projekty wnętrz NOKO Studio. Projekty domów i apartamentów z pasją i dbałością o detal.',
    isPartOfId: websiteSchema['@id'],
  });

  const itemList = buildItemList(
    projects.map((project) => ({
      url: `${BASE_URL}/portfolio/${project.slug}`,
    }))
  );

  return buildGraph(collectionPage, itemList);
}
