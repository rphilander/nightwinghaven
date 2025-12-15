import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const thoughts = await getCollection('thoughts');

  // Sort by updatedAt descending (most recent first)
  const sortedThoughts = thoughts.sort((a, b) =>
    b.data.updatedAt.getTime() - a.data.updatedAt.getTime()
  );

  return rss({
    title: 'TwilightWorld.ai',
    description: 'Thoughts on building software in the age of AI',
    site: context.site,
    items: sortedThoughts.map((thought) => ({
      title: thought.data.title,
      pubDate: thought.data.updatedAt,
      description: thought.data.summary,
      link: `/thoughts/${thought.slug}/`,
    })),
  });
}
