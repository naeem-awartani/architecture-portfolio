# Naeem Al-Awartany — Architecture Portfolio

Personal architecture portfolio, built with Next.js, React, and Tailwind CSS.
Includes the homepage and four project case studies. Images, content, styling,
and motion are retained from the original portfolio.

## GitHub Pages

1. Put the contents of this project at the root of your repository, including `.github`.
2. In repository **Settings → Pages → Build and deployment**, select **GitHub Actions**.
3. Commit and push to `main`. The included workflow installs dependencies, builds all pages, and deploys `out`.
4. Open **Actions → Deploy portfolio to GitHub Pages**. Once it succeeds, the website URL appears in **Settings → Pages**.

The workflow automatically sets the repository path, including for a custom domain or a username.github.io repository.

When replacing the previous project, remove these obsolete files/folders from the repository first:
`.openai`, `vite.config.ts`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`, and any `wrangler.*` configuration.
Then copy this project's files, replacing matching files. Preserve your `.git` folder.
Do not upload `node_modules`, `.next`, or local `.env` files.

## Local development

Install Node.js 24, then run (on Windows):

```powershell
npm.cmd install -g pnpm@11.19.0
pnpm.cmd install --frozen-lockfile
pnpm.cmd dev
```

Open http://localhost:3000.

## Build for any static host

```powershell
$env:SITE_URL='https://your-domain.example'
pnpm.cmd build
```

Upload the contents of `out` to the host's public root. No application server,
database, API key, or image optimization service is required. Serve directory
URLs with their `index.html` files and use `404.html` for missing pages.
For a subdirectory deployment, set `NEXT_PUBLIC_BASE_PATH` before building:

```powershell
$env:NEXT_PUBLIC_BASE_PATH='/architecture-portfolio'
$env:SITE_URL='https://naeem-awartani.github.io'
pnpm.cmd build
```

To return to a root deployment, clear `NEXT_PUBLIC_BASE_PATH` and rebuild.
Build-time internet access is needed for dependencies and the existing Geist
fonts; the exported website serves those fonts locally.

## Checks

`pnpm lint` and `pnpm typecheck` are available. Native image tags are retained
to preserve the supplied image presentation and work on static hosting.

Deployment references:
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- https://nextjs.org/docs/app/guides/static-exports
