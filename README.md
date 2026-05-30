# Show & Tell

A content-driven personal portfolio built with [Astro](https://astro.build). It collects software projects, hardware/Raspberry Pi builds, automations, and writing — adding a new entry is just dropping a Markdown file into `src/content/`.

## Tech stack

- **Astro 6** — static site, file-based routing
- **TypeScript** (strict) — type-safe content schemas and config
- **Plain CSS** — a small design-token system in `src/styles/global.css`, no UI framework
- **Content collections** — projects and blog posts validated with Zod
- **ESLint** — flat config with `typescript-eslint` + `eslint-plugin-astro`

## Getting started

```sh
npm install        # install dependencies
cp .env.example .env   # add your site identity (optional, see below)
npm run dev        # start the dev server at localhost:4321
```

## Configuration

Personal info (name, email, links) is read from environment variables so it stays out of the repo. Copy `.env.example` to `.env` and fill in your values:

| Variable           | Description                          |
| :----------------- | :----------------------------------- |
| `SITE_AUTHOR`      | Your name, shown in the header/footer |
| `SITE_DESCRIPTION` | Default meta description / tagline   |
| `SITE_EMAIL`       | Contact email (used for `mailto:`)   |
| `SITE_GITHUB`      | Your GitHub profile URL              |

`.env` is gitignored. If a variable is omitted, the placeholder defaults defined in [`astro.config.mjs`](astro.config.mjs) are used, so the site builds fine without one. For production, set these same variables in your deploy host's environment settings.

## Deployment

The site is deployed to **GitHub Pages** via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Every push to `main` builds with [`withastro/action`](https://github.com/withastro/action) and publishes to Pages.

Because it's a project page, the site is served from a subpath — `https://marcbhopalsingh.github.io/show-and-tell/` — so `site` and `base` are set in [`astro.config.mjs`](astro.config.mjs), and all internal links go through the `url()` helper in [`src/utils/url.ts`](src/utils/url.ts).

One-time setup:

1. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
2. (Optional) Add your site identity under **Settings → Secrets and variables → Actions → Variables**: `SITE_AUTHOR`, `SITE_DESCRIPTION`, `SITE_EMAIL`, `SITE_GITHUB`. These are baked into the static HTML at build time (they are public, not secret). If omitted, the defaults in `astro.config.mjs` are used.
3. Push to `main` (or run the workflow manually from the Actions tab).

To use a custom domain served at the root instead, remove `site`/`base` from `astro.config.mjs` and follow [Astro's custom domain guide](https://docs.astro.build/en/guides/deploy/github/).

## Adding content

Content lives in `src/content/`. Each entry is a Markdown file with frontmatter validated by the schemas in [`src/content.config.ts`](src/content.config.ts).

**Project** — add `src/content/projects/my-project.md`:

```md
---
title: My Project
summary: One-line description shown on cards.
category: software # software | pi | automation
tags: ["TypeScript", "CSS"]
date: 2026-05-30
featured: true # optional, surfaces on the home page
link: https://example.com # optional live URL
repo: https://github.com/you/my-project # optional source URL
---

Markdown body goes here.
```

**Blog post** — add `src/content/blog/my-post.md`:

```md
---
title: My Post
description: Shown in the post list and meta tags.
date: 2026-05-30
tags: ["Notes"]
draft: false # optional, hides the post when true
---

Markdown body goes here.
```

The file name becomes the URL slug (e.g. `/projects/my-project`, `/blog/my-post`).

## Project structure

```text
/
├── public/                 # static assets (favicon, etc.)
├── src/
│   ├── components/          # Header, Footer, ProjectCard, PostCard
│   ├── content/             # Markdown content
│   │   ├── projects/
│   │   └── blog/
│   ├── layouts/             # Layout.astro (shared shell + SEO meta)
│   ├── pages/               # routes: /, /projects, /blog, /about
│   ├── styles/global.css    # design tokens + base styles
│   ├── config.ts            # site identity (sourced from env)
│   └── content.config.ts    # content collection schemas
├── astro.config.mjs         # Astro + env var schema
└── eslint.config.mjs
```

## Commands

All commands are run from the root of the project:

| Command            | Action                                       |
| :----------------- | :------------------------------------------- |
| `npm run dev`      | Start local dev server at `localhost:4321`   |
| `npm run build`    | Build the production site to `./dist/`       |
| `npm run preview`  | Preview the production build locally         |
| `npm run lint`     | Lint with ESLint                             |
| `npm run lint:fix` | Lint and auto-fix where possible             |
