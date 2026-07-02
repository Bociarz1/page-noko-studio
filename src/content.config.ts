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

const articleCategoriesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/articleCategories" }),
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    slug: z.string(),
    title: z.string().max(100, "Główny tytuł (H1) powinien mieć do 100 znaków."),
    metaTitle: z.string().max(65, "Tytuł SEO powinien mieć do 65 znaków.").optional(),
    metaDescription: z.string().max(160, "Opis SEO powinien mieć do 160 znaków.").optional(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: reference('authors'),
    image: z.string(),
    articleCategory: z.array(reference('articleCategories')).default([]),
    faq: z.array(z.object({
      q: z.string(),
      a: z.string()
    })).optional(),
  }),
});

const portfolioCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/portfolio" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    metaTitle: z.string().max(65, "Tytuł SEO powinien mieć do 65 znaków.").optional(),
    metaDescription: z.string().max(160, "Opis SEO powinien mieć do 160 znaków.").optional(),
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
  'articleCategories': articleCategoriesCollection,
};
