export interface CreativeWorkOptions {
  id: string;
  url: string;
  name: string;
  description?: string;
  image?: string | string[];
  creatorId?: string;
  dateCreated?: string | number;
}

export function buildCreativeWork(opts: CreativeWorkOptions) {
  const schema: any = {
    '@type': 'CreativeWork',
    '@id': opts.id,
    url: opts.url,
    name: opts.name,
  };

  if (opts.description) schema.description = opts.description;
  if (opts.image) schema.image = opts.image;
  if (opts.creatorId) schema.creator = { '@id': opts.creatorId };
  if (opts.dateCreated) schema.dateCreated = String(opts.dateCreated);

  return schema;
}
