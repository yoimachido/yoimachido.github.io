import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const base = z.object({
  title: z.string(),
  description: z.string().optional(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
});

const works = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/works' }),
  schema: base.extend({
    category: z.enum(['short-story', 'visual', 'web', 'zine', 'other']).default('other'),
    thumbnail: z.string().optional(),
    year: z.number().optional(),
  }),
});

const labs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/labs' }),
  schema: base.extend({
    stack: z.array(z.string()).default([]),
    status: z.enum(['wip', 'live', 'archived']).default('wip'),
    demoUrl: z.string().url().optional(),
    sourceUrl: z.string().url().optional(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: base.extend({
    kind: z.enum(['devlog', 'adr', 'design-log', 'article-seed', 'misc']).default('misc'),
    sourceDoc: z.string().optional(),
  }),
});

export const collections = { works, labs, notes };
