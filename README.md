# Harsh Shah — Portfolio

A minimal, dark-mode-only portfolio built for a backend/distributed-systems engineer.
Next.js 15 (App Router) + TypeScript + Tailwind CSS. No UI framework beyond Tailwind,
no animation library — just fade/hover transitions.

## Before you deploy

Everything personal lives in **one file**: `lib/config.ts`. Open it and replace:

- `email` — your real email
- `links.github` / `links.linkedin` / `links.leetcode` — your real profile URLs
- `domain` — your production URL (used for metadata/Open Graph)

Then add your resume as `public/resume.pdf` (the Download Resume button links to
`/resume.pdf`).

Project GitHub links live in `lib/data.ts` (the `projects` array) — update
`githubUrl` for each, and add a `liveUrl` if a project has a live demo.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Deploy

Push to a Git repo and import it on [Vercel](https://vercel.com/new) — no extra
configuration needed.

## Structure

```
app/
  layout.tsx      — metadata, fonts, root shell
  page.tsx         — assembles all sections
  globals.css      — Tailwind + base styles
  icon.svg         — favicon
components/
  sections/        — Hero, About, Skills, Experience, Projects, Resume, Contact
  layout/          — Footer
  ui/              — Button, Section (shared primitives)
lib/
  config.ts        — personal info & links (edit this)
  data.ts          — skills, projects, experience content
  types.ts         — shared TypeScript types
```
# My_Website
# My_Website
