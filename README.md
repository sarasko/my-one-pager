# One-pager

A single-page "about me" site. Vue 3 + TypeScript + Tailwind CSS v4, built with Vite.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs to dist/
npm run preview     # preview the production build
```

## Develop in a dev container

A ready-to-use dev container lives in `.devcontainer/`. With Docker running and
the **Dev Containers** extension installed in VS Code:

1. Open the folder in VS Code.
2. Run **Dev Containers: Reopen in Container** (or click the prompt).
3. Dependencies install automatically (`npm install`).
4. Run `npm run dev` — port 5173 is forwarded and opens in a preview.

The container is Node 20 with Volar, the Tailwind CSS IntelliSense, ESLint, and
Prettier extensions preinstalled. The dev server binds to `0.0.0.0` so the
forwarded port works from your host browser.

## Edit your content

Everything you'd want to change — name, tagline, stack, projects, interests,
education, contact links — lives in **`src/profile.ts`**. No component edits
needed. Update the `links` with your real email / GitHub / LinkedIn before
deploying (they're placeholders).

## Deploy

Pick whichever host you like — configs for all of them are included.

| Host | What to do | Base path |
|------|-----------|-----------|
| **Netlify** | Connect the repo, or `npx netlify deploy --prod`. Uses `netlify.toml`. | `/` (default) |
| **Vercel** | Import the repo, or `npx vercel --prod`. Uses `vercel.json`. | `/` (default) |
| **GitHub Pages** | Push to `main`; the workflow in `.github/workflows/deploy.yml` builds and deploys. Set repo **Settings → Pages → Source = GitHub Actions** once. | auto-set to `/<repo>/` |
| **Docker / any static host** | `docker build -t one-pager . && docker run -p 8080:80 one-pager` | `/` (default) |

### Or, plain Docker Compose (no VS Code required)

```bash
docker compose up dev          # hot-reloading dev server → http://localhost:5173
docker compose up prod --build # the real nginx production image → http://localhost:8080
```

`dev` bind-mounts your source so edits on the host reload instantly, with the
container keeping its own `node_modules` volume so host/container installs
never collide. `prod` builds and runs the exact image used for deployment —
useful as a last check before shipping.

### The base path (important for GitHub Pages)

Vite needs to know the URL sub-path the site is served from:

- **Custom domain, Netlify, Vercel, user site** (`name.github.io`): leave it as `/`.
- **GitHub project site** (`name.github.io/<repo>/`): build with
  `VITE_BASE="/<repo>/" npm run build`. The GitHub Pages workflow already does
  this automatically.

## Accessibility

The page is built to be usable, not just deployable: semantic landmarks, a skip
link, visible keyboard focus, AA-contrast text, `prefers-reduced-motion`
support, and a mobile-down responsive layout.
