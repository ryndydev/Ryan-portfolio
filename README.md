# ragba.dev

Ryan Adaya's portfolio. Next.js 16 (static export) · Tailwind 4 · Framer Motion · GitHub Pages.

## Local

```bash
npm install
npm run dev       # live-reload dev server → http://localhost:3100
npm run preview   # production build served locally → http://localhost:4100 (same output GitHub Pages serves)
```

## Deploy

Push to `main`. The workflow in `.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages at https://ragba.dev (usually live within ~1 minute).

## Editing content

- `content/site.ts` — name, role, tagline, links, stats, services, toolkit, timeline
- `content/projects.ts` — every case study (public and NDA)
- `public/images/projects/` — project screenshots · `public/Ryan-Adaya-Resume.pdf` — resume download
- `scripts/make-logo.mjs` — regenerates the R. logo, favicons and share image
