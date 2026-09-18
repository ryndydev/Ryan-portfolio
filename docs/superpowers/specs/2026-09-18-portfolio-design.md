# Ryan Adaya Portfolio — Design Spec (2026-09-18)

## Goal
Personal portfolio for Ryan Adaya (Full-Stack Developer, Philippines, GMT+8) at **ragba.dev**, built for both recruiters and freelance clients. Reference for feature set/quality bar: agdtayawa.com — **not copied**: different layout, palette, type, and original copy.

## Stack & hosting
- Next.js 15 (App Router), TypeScript, Tailwind v4, Framer Motion, `@number-flow/react`, lucide-react.
- `output: 'export'` → static HTML in `out/`, deployed by GitHub Actions to GitHub Pages on the **ryndydev** account. `public/CNAME` = `ragba.dev`.
- No Vercel, no Solar X accounts, no Claude web/cloud sessions.
- Contact form: FormSubmit.co AJAX endpoint → adayaryan@gmail.com (no backend, no signup).

## Visual system
- Canvas `#0B0B0D`, surface `#141416`, border `rgba(255,255,255,.08)`, text `#F4F1EA` / muted `#A3A09A`.
- Accent **amber `#F5B84B`** (hover `#FFCB6B`), on-accent `#0B0B0D`.
- Type: **Fraunces** (display, opsz axis, weights 400–700 + italic), **Inter** (body), **JetBrains Mono** (eyebrows/labels/tags, uppercase, tracking-widest).
- Grain overlay (SVG noise, 4% opacity), single radial amber glow behind hero. No glass, no violet.
- Motion: staggered reveals (40 ms), NumberFlow counters, layout animation on filter, hover scale 1.02, 200–300 ms ease-out. `prefers-reduced-motion` disables all.

## Routes
| Route | Content |
|---|---|
| `/` | Hero (mono eyebrow "Ryan Adaya", two-line serif "Full-Stack Developer", intro, CTAs *Start a project* / *See work*, offset headshot panel), 4 stat tiles, 3 featured projects, "How I work" 3-step strip, footer CTA |
| `/portfolio` | Filter pills All / Public / NDA (animated). Cards: cover, category, stack chips. `darrenjpaul` card: hover "live insight" overlay (screenshot, 3 facts, Open live →) |
| `/portfolio/[slug]` | Case study: hero, summary, Live/Repo buttons, stack, Challenge → Solution → Key features, prev/next. Solar Calculator page embeds live iframe. NDA pages: copy only, abstract cover, lock badge |
| `/about` | Bio, stats, toolkit (grouped), timeline (2020 BSCpE start → 2023 freelancing → 2024 graduated → 2025 Solar X / DJP → 2026 Poliris) |
| `/services` | 6 capability cards |
| `/contact` | Email / GitHub / LinkedIn cards + form; resume download |

## Projects (data in `content/projects.ts`)
Public: **DJP Athlete Platform** (darrenjpaul.com), **Solar X Canada** (solar-x.ca), **Solar Calculator Canada** (solarcalculatorcanada.org, embedded).
NDA (Poliris — SaaS, three separate cards): **AI Content Generation Engine**, **Content Optimization Suite**, **Long-Term Strategy Planner**. No screenshots, no code, no client name beyond "SaaS".
Early work (from resume, 2023–2024): Tabulation System (Java), COE Student Council Voting System, School File Management System, IoT Solar Dryer w/ Hybrid Energy Switching.

## Stats (estimated, editable in `content/site.ts`)
3+ years experience (since 2023) · 10+ projects shipped · 3 countries served (PH, CA, US) · 5 industries.

## Quality bar
Lighthouse ≥ 95 all categories; WCAG AA contrast; 375 px perfect; keyboard nav + visible focus; skip link; sitemap + robots + OG image; no emoji icons.
