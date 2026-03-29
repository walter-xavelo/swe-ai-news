import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()),
    sourceUrl: z.string().url(),
    summary: z.string(),
  }),
});

export const collections = {
  'news': newsCollection,
};
