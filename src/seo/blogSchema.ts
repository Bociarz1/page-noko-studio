import { COMPANY } from '@consts/site';

interface IBlogSchemaArgs {
  title: string;
  description: string;
  url: string;
  pubDate: Date;
  updatedDate?: Date;
  authorName: string;
  imageUrl?: string;
}

export function generateBlogSchema({
  title,
  description,
  url,
  pubDate,
  updatedDate,
  authorName,
  imageUrl,
}: IBlogSchemaArgs) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: title,
    description: description,
    image: imageUrl || `${COMPANY.url}/og-image.png`,
    author: {
      '@type': 'Person',
      name: authorName,
      url: COMPANY.url,
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY.name,
      logo: {
        '@type': 'ImageObject',
        url: `${COMPANY.url}/logo.png`,
      },
    },
    datePublished: pubDate.toISOString(),
    dateModified: (updatedDate || pubDate).toISOString(),
  };

  return [articleSchema];
}
