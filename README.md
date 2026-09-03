# AM — Architecture & Matter

A production-ready architectural portfolio built with React, Next-compatible routing, Vinext, and the OpenAI Sites deployment runtime.

## Run locally

1. Install Node.js 22+ and pnpm.
2. Run `pnpm install`.
3. Run `pnpm dev` and open the printed local address.

## Replace content

- Project names, facts, images, and descriptions: `app/data.ts`
- Homepage biography, skills, process, and contact copy: `app/page.tsx`
- Reusable project case-study structure: `app/projects/[slug]/page.tsx`
- Palette, typography, layout, diagrams, motion, and responsive rules: `app/globals.css`
- Hero image and any future local media: `public/`
- Site title and description: `app/layout.tsx`

Adding a project object to `app/data.ts` automatically adds it to the homepage. Its case study is available at `/projects/[slug]` using the reusable template.

## Build and deploy

Run `pnpm build` for a production build. The included `.openai/hosting.json` and Vite configuration are ready for OpenAI Sites. The same build output can also be adapted for any Cloudflare Workers-compatible host.
