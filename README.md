# 🌿 Nightwing Haven

A digital garden exploring the intersection of AI and software development. This is a living collection of thoughts that grow and evolve over time.

## About

Nightwing Haven is where I share thoughts about using AI to build software—from early ideas to mature concepts. Each thought follows a maturity model:

- 🌱 **Sprout**: Early ideas and explorations
- 🌿 **Growing**: Developing thoughts with some depth
- 🌳 **Evergreen**: Mature, well-developed concepts

## Features

- **Multiple Views**: Browse thoughts by maturity, recent updates, all thoughts, or table view
- **Bidirectional Links**: Thoughts reference related ideas with inbound/outbound link tracking
- **Placeholder Support**: Reference thoughts that haven't been written yet
- **Stable URLs**: Each thought has a permanent URL for sharing
- **Clean, Technical Design**: Simple styling with an organic feel

## Project Structure

```text
/
├── public/
├── src/
│   ├── content/
│   │   ├── config.ts          # Content collections schema
│   │   └── thoughts/           # MDX thought files
│   └── pages/
│       ├── index.astro         # Home page with multiple views
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
maturity: "sprout" # or "growing" or "evergreen"
createdAt: 2025-11-11
updatedAt: 2025-11-11
tags: ["tag1", "tag2"]
relatedThoughts: ["other-thought-slug"] # optional
isPlaceholder: false # set to true for placeholder thoughts
---

Your content here...
```

3. The thought will automatically appear on the home page

## Deployment

This site is configured for deployment on Netlify. Simply connect your GitHub repository to Netlify and it will automatically build and deploy.

## Built With

- [Astro](https://astro.build) - Static site framework
- [MDX](https://mdxjs.com/) - Markdown with JSX support

## License

Content is copyright Rodrigo Philander. Code is MIT.
