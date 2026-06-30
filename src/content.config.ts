import { defineCollection, reference } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const authorsCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/authors" }),
  schema: ({ image }) => z.object({
    name: z.string(),
    description: z.string(),
    avatar: image(),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string().max(65, "Tytuł powinien mieć maksymalnie 65 znaków dla lepszego SEO."),
    description: z.string().min(50).max(160, "Opis powinien mieć od 50 do 160 znaków."),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: reference('authors'),
    image: image(),
    tags: z.array(z.string()).default([]),
    faq: z.array(z.object({
      q: z.string(),
      a: z.string()
    })).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'authors': authorsCollection,
};
