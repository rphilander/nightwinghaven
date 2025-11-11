import { defineCollection, z } from 'astro:content';

const thoughtsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    maturity: z.enum(['sprout', 'growing', 'evergreen']),
    createdAt: z.date(),
    updatedAt: z.date(),
    tags: z.array(z.string()).optional(),
    // Related thoughts - can reference thought IDs that don't exist yet
    relatedThoughts: z.array(z.string()).optional(),
    // Whether this is a placeholder (not yet written)
    isPlaceholder: z.boolean().default(false),
  }),
});

export const collections = {
  thoughts: thoughtsCollection,
};
