import { defineCollection, reference } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Helper: zamiast crashować build, auto-obcina za długie wartości SEO
const seoString = (max: number) =>
  z.string().transform(val =>
    val.length > max ? val.slice(0, max - 3).trimEnd() + '...' : val
  );

// Helper: sanityzuje slug – usuwa spacje i niedozwolone znaki
const slugString = z.string().transform(val =>
  val.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
);

// Helper: wyciąga tylko liczbę z pola area (np. "240 m²" → "240")
const areaString = z.string().transform(val => val.replace(/[^\d]/g, '') || val);

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
    slug: slugString,
    title: seoString(100),
    metaTitle: seoString(65).optional(),
    metaDescription: seoString(160).optional(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: reference('authors'),
    image: z.string(),
    articleCategory: z.array(reference('articleCategories')).default([]),
    faq: z.array(z.object({
      q: seoString(150),
      a: z.string()
    })).optional(),
  }),
});

const portfolioCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/portfolio" }),
  schema: z.object({
    slug: slugString,
    title: z.string(),
    metaTitle: seoString(65).optional(),
    metaDescription: seoString(160).optional(),
    description: z.string(),
    cover: z.string(),
    location: z.string(),
    featured: z.boolean().default(false),
    pubDate: z.date(),
    category: z.enum(["apartament", "mieszkanie", "dom"]),
    area: areaString,
    gallery: z.array(z.object({
      src: z.string(),
      alt: seoString(125),
    })).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'authors': authorsCollection,
  'portfolio': portfolioCollection,
  'articleCategories': articleCategoriesCollection,
};
