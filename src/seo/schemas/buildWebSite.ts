export interface WebSiteOptions {
  url: string;
  name: string;
  description?: string;
  publisherId?: string;
}

export function buildWebSite({ url, name, description, publisherId }: WebSiteOptions) {
  const schema: any = {
    '@type': 'WebSite',
    '@id': `${url}/#website`,
    url: url,
    name: name,
  };
  if (description) schema.description = description;
  if (publisherId) schema.publisher = { '@id': publisherId };

  return schema;
}
