# christopher-hsieh.github.io

Personal portfolio for **Christopher J. Hsieh** — Lead Software Engineer.

Live: [https://christopher-hsieh.github.io/](https://christopher-hsieh.github.io/)

## Tech

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript
- CSS Modules (no CSS framework, no UI library)
- Lazy-loaded interactive demos (`React.lazy` + `Suspense`)
- Deployed to GitHub Pages via GitHub Actions

## Local development

```bash
npm install
npm run dev          # start the local dev server
npm run build        # production build into dist/
npm run preview      # preview the production build
npm run typecheck    # strict TS check (no emit)
```

## Project structure

```text
src/
  main.tsx            # entry
  App.tsx             # composes the page
  styles/
    tokens.css        # design tokens (colors, spacing, fonts)
    global.css        # reset, base typography, smooth scroll
  components/         # shared UI: Nav, SectionLabel, Terminal, Tag, Stat, TimelineItem
  sections/           # page sections: Hero, About, Work, Experience, Skills, Education, Contact
  demos/              # interactive demos rendered inside Work cards
  data/               # content sourced from resume-26.md
  hooks/              # tiny utilities (useInView)
public/
  favicon.svg
  .nojekyll           # tell GitHub Pages not to run Jekyll
.github/workflows/
  deploy.yml          # build + deploy to GitHub Pages on push to master
```

## Deployment

The site builds and deploys automatically on every push to `master` via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), using the
official GitHub Pages flow (`actions/configure-pages` →
`actions/upload-pages-artifact` → `actions/deploy-pages`).

One-time setup (only needed once for this repo):

1. Repository **Settings → Pages → Build and deployment → Source** = **GitHub Actions**.
2. Push to `master`. The workflow will build and publish.

There is no `gh-pages` branch — Pages serves the artifact uploaded by the
workflow directly.

## Content

All content (profile, experience, skills, work cards) lives in
[`src/data/`](src/data/) and is sourced from
[`resume-26.md`](resume-26.md). Update the data files to update the site.

## Archive

The previous Jekyll-based site lives in [`Archive/`](Archive/) and is
preserved for posterity but is not built or served.
