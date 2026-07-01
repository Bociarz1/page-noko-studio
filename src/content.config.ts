import { defineCollection, reference } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const authorsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/authors" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    avatar: z.string(),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string().max(100, "Główny tytuł (H1) powinien mieć do 100 znaków."),
    metaTitle: z.string().max(65, "Tytuł SEO powinien mieć do 65 znaków.").optional(),
    description: z.string().min(50).max(160, "Opis powinien mieć od 50 do 160 znaków."),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: reference('authors'),
    image: z.string(),
    tags: z.array(z.string()).default([]),
    faq: z.array(z.object({
      q: z.string(),
      a: z.string()
    })).optional(),
  }),
});

const portfolioCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string(),
    location: z.string(),
    featured: z.boolean().default(false),
    pubDate: z.date(),
    category: z.enum(["apartament", "mieszkanie", "dom"]),
    area: z.string(),
    gallery: z.array(z.object({
      src: z.string(),
      alt: z.string()
    })).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'authors': authorsCollection,
  'portfolio': portfolioCollection,
};
