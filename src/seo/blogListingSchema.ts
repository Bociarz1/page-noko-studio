import { COMPANY } from '@consts/site';

interface IBlogListingSchemaArgs {
  title: string;
  description: string;
  url: string;
  posts: {
    title: string;
    url: string;
    pubDate: Date;
  }[];
}

export function buildBlogListingSchema({
  title,
  description,
  url,
  posts,
}: IBlogListingSchemaArgs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': url,
    name: title,
    description: description,
    publisher: {
      '@type': 'Organization',
      name: COMPANY.name,
      logo: {
        '@type': 'ImageObject',
        url: `${COMPANY.url}/logo.png`,
      },
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: post.url,
      datePublished: post.pubDate.toISOString(),
    })),
  };
}
