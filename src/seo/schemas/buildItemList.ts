export interface ItemListItem {
  url: string;
}

export function buildItemList(items: ItemListItem[]) {
  return {
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: item.url,
    })),
  };
}
