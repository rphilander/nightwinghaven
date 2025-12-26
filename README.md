# TwilightWorld.ai

*"We live in a twilight world. And there are no friends at dusk."*

A digital garden exploring how AI is transforming software engineering.

Live at: **[twilightworld.ai](https://twilightworld.ai)**

## Quick Start

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at localhost:4321
netlify deploy --prod  # Deploy to production
```

## Creating New Thoughts

Add a new `.mdx` file in `src/content/thoughts/`:

```mdx
---
title: "Your Thought Title"
summary: "A brief summary"
maturity: "seed"  # seed | sprout | growing | evergreen
createdAt: 2025-12-15
updatedAt: 2025-12-15
relatedThoughts: ["other-thought-slug"]  # optional
---

Your content here...
```

The thought automatically appears on the homepage and RSS feed.

## Maturity Model

- 🌰 **Seed**: Ideas not yet written
- 🌱 **Sprout**: Early explorations
- 🌿 **Growing**: Developing thoughts with depth
- 🌳 **Evergreen**: Mature concepts

## Project Structure

```
src/
├── content/
│   ├── config.ts           # Content schema
│   └── thoughts/           # MDX thought files
└── pages/
    ├── index.astro         # Homepage
    ├── rss.xml.js          # RSS feed
    └── thoughts/
        └── [...slug].astro # Thought template
```

## Features

- **Automatic catalog**: Homepage pulls from content collection
- **RSS feed**: Available at `/rss.xml`
- **Email subscriptions**: Buttondown integration with RSS-to-email
- **Bidirectional links**: `relatedThoughts` creates connections shown in footer
- **Light theme**: Clean white background for easy diagram embedding

## Deployment

Hosted on Netlify. DNS managed via Netlify DNS.

**To publish changes, you must run:**

```bash
netlify deploy --prod
```

This builds the site and deploys to production. Git push alone does not publish — you need to run the deploy command.

## Newsletter

Email subscriptions powered by [Buttondown](https://buttondown.com/twilightworld):
- Sending domain: `newsletter@newsletter.twilightworld.ai`
- RSS-to-email configured to auto-send when new posts are published
- Signup form embedded in homepage footer

## Built With

- [Astro](https://astro.build) + MDX
- [Netlify](https://netlify.com)
- [Buttondown](https://buttondown.com)

## License

Content copyright Rodrigo Philander. Code is MIT.
