export interface WebPageOptions {
  type?: 'WebPage' | 'ContactPage' | 'CollectionPage' | 'AboutPage' | string;
  id: string;
  url: string;
  name: string;
  description?: string;
  isPartOfId?: string;
  aboutId?: string;
}

export function buildWebPage(opts: WebPageOptions) {
  const schema: any = {
    '@type': opts.type || 'WebPage',
    '@id': opts.id,
    'url': opts.url,
    'name': opts.name,
  };
  if (opts.description) schema.description = opts.description;
  if (opts.isPartOfId) {
    schema.isPartOf = { '@id': opts.isPartOfId };
  }
  if (opts.aboutId) {
    schema.about = { '@id': opts.aboutId };
  }
  
  return schema;
}
