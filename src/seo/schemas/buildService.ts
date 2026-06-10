export interface ServiceOptions {
  name: string;
  providerId?: string;
}

export function buildService(opts: ServiceOptions) {
  const schema: any = {
    '@type': 'Service',
    name: opts.name,
  };
  if (opts.providerId) {
    schema.provider = { '@id': opts.providerId };
  }
  return schema;
}
