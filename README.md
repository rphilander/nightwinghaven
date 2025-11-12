# TwilightWorld.ai

*"We live in a twilight world. And we make no friends at dusk."*

The sun of traditional software, and traditional software engineering, is setting. The future's autonomous, thinking systems have arrived. This digital garden is where I share my evolving thoughts on where AI is taking our craft.

Live at: **[twilightworld.ai](https://twilightworld.ai)**

## About

TwilightWorld.ai is a digital garden exploring how AI is transforming software engineering. Each thought follows a natural maturity model:

- 🌰 **Seed**: Ideas not yet written, waiting to germinate
- 🌱 **Sprout**: Early ideas and explorations
- 🌿 **Growing**: Developing thoughts with some depth
- 🌳 **Evergreen**: Mature, well-developed concepts

## Features

- **Simple List View**: Clean, minimalist display of thoughts with maturity indicators
- **Maturity Key**: Visual guide to the growth stages of each thought
- **Bidirectional Links**: Thoughts reference related ideas with inbound/outbound link tracking
- **Stable URLs**: Each thought has a permanent URL for sharing
- **Twilight Theme**: Dark blue twilight color scheme with subtle, balanced styling

## Project Structure

```text
/
├── public/
├── src/
│   ├── content/
│   │   ├── config.ts          # Content collections schema
│   │   └── thoughts/           # MDX thought files
│   └── pages/
│       ├── index.astro         # Home page with simple list view
│       └── thoughts/
│           └── [...slug].astro # Thought page template
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Creating New Thoughts

To add a new thought to the garden:

1. Create a new `.mdx` file in `src/content/thoughts/`
2. Add the required frontmatter:

```mdx
---
title: "Your Thought Title"
summary: "A brief summary of your thought"
maturity: "seed" # seed, sprout, growing, or evergreen
createdAt: 2025-11-11
updatedAt: 2025-11-11
tags: ["tag1", "tag2"]
relatedThoughts: ["other-thought-slug"] # optional
---

Your content here...
```

3. The thought will automatically appear on the home page
4. Start with maturity "seed" for ideas you haven't written yet, then promote as the thought develops

## Deployment

This site is configured for deployment on Netlify. Simply connect your GitHub repository to Netlify and it will automatically build and deploy.

## Built With

- [Astro](https://astro.build) - Static site framework
- [MDX](https://mdxjs.com/) - Markdown with JSX support

## License

Content is copyright Rodrigo Philander. Code is MIT.
