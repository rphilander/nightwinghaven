import { defineCollection, z } from 'astro:content';

const thoughtsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    maturity: z.enum(['seed', 'sprout', 'growing', 'evergreen']),
    createdAt: z.date(),
    updatedAt: z.date(),
    // Related thoughts - can reference thought IDs that don't exist yet
    relatedThoughts: z.array(z.string()).optional(),
  }),
});

export const collections = {
  thoughts: thoughtsCollection,
};
