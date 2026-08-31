# 🌐 ibrahim aji — personal site

hey! this is my corner of the web where I share thoughts, notes, and the tools I build. civil servant by day, self-taught developer by night. feel free to explore and get in touch.

## 📖 about project

a simple personal website built with [astro](https://astro.build/), server-rendered on cloudflare workers. astro keeps it fast and easy to work with.

## ✨ features

- **writings**: longer blog posts and articles
- **thoughts**: short-form notes and ideas (more like tweets or quotes)
- **dynamic og images**: auto-generated per post using svg + resvg-wasm on the edge
- **self-hosted fonts**: uncut sans, four weights, woff2 + woff fallback

## 🛠️ tech stack

- **astro**: content-focused web framework with ssr on cloudflare workers
- **tailwindcss**: utility-first css framework
- **markdown / mdx**: for writing content
- **typescript**: for type-checking and better code quality
- **biome**: format, lint, and more in a fraction of a second
- **cloudflare workers**: hosts the production site with static assets and server rendering

## 🎨 design

- simple and clean: a monochrome palette with a single accent colour
- lots of whitespace so the content is easy to read
- minimalism and KISS — it suits a personal site like this

## 🚀 deployment

the site is deployed as a cloudflare worker named `blog`.

```bash
bun run build
bunx wrangler deploy --name blog
```

the astro cloudflare adapter writes a worker bundle to `dist/server` and static assets to `dist/client`. `wrangler.jsonc` points at the cloudflare adapter entrypoint, and wrangler follows the generated `dist/server/wrangler.json` during deploy.

## 🤝 contributing

ideas and suggestions welcome — open an issue or a pull request.

## 📬 contact

reach me at ibrahimcious@gmail.com or [@ibrahimcious](https://x.com/ibrahimcious) on x.

## 📜 license

open source under the Apache License 2.0. you're welcome to use the code for your own projects. a shoutout is appreciated but not required.
