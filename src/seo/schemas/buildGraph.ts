export function buildGraph(...schemas: any[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
}
