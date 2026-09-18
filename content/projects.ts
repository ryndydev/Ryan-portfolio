export type Visibility = "public" | "nda";
export type Tier = "featured" | "work" | "early";

export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  visibility: Visibility;
  tier: Tier;
  year: string;
  role: string;
  stack: string[];
  cover?: string;
  gallery?: string[];
  live?: string;
  embed?: string;
  insight?: string[];
  challenge: string;
  solution: string;
  features: string[];
}

export const projects: Project[] = [
  {
    slug: "djp-athlete-platform",
    title: "DJP Athlete Platform",
    category: "Sports coaching · Web app",
    summary:
      "Full rebuild of a sports-performance coaching business into a Next.js platform: public programs storefront, private client dashboards, AI-assisted program building, and an admin back office.",
    visibility: "public",
    tier: "featured",
    year: "2025–2026",
    role: "Lead full-stack developer",
    stack: ["Next.js 16", "TypeScript", "Supabase", "Stripe", "Claude API", "Tailwind CSS", "GoHighLevel", "YouTube API"],
    cover: "/images/projects/djp-cover.webp",
    gallery: ["/images/projects/djp-cover.webp", "/images/projects/djp-2.webp", "/images/projects/djp-3.webp"],
    live: "https://www.darrenjpaul.com/",
    insight: [
      "Role-based app: marketing, client, and admin route groups behind one middleware",
      "28-table Supabase data layer with Zod validation on every entity",
      "AI exercise matching from a categorized YouTube library",
    ],
    challenge:
      "The coach needed one system for two audiences: private athletes on structured programs, and the public buying evergreen programs. And he wanted it without maintaining a native app or paying App Store overhead. The existing setup scattered clients, videos, and payments across tools.",
    solution:
      "I designed a single Next.js App Router codebase with three route groups (marketing, client, admin) protected by role-aware middleware. Supabase Postgres holds clients, programs, workouts, assessments, and progress; every table has a typed data-access module and a Zod schema. Stripe handles program checkout and subscriptions with webhooks reconciled against the database. An AI service matches exercises to athlete profiles from the coach's YouTube library, and GoHighLevel keeps marketing automation in sync.",
    features: [
      "Marketing site, blog, and program storefront with Stripe checkout",
      "Client dashboard: workouts, progress charts, assessments, profile",
      "Admin panel: client CRM, exercise library, program builder with drag-and-drop",
      "AI-assisted exercise assignment and program generation",
      "Return-to-performance assessment engine",
      "Vitest unit suite and Playwright e2e across Chromium, Firefox, WebKit",
    ],
  },
  {
    slug: "solar-installer-platform",
    title: "National Solar Installer Platform",
    category: "Renewable energy · Marketing platform",
    summary:
      "High-traffic marketing platform for a national residential solar installer: region-specific landing pages, rebate content, lead capture, and CRM-connected quote flows.",
    visibility: "public",
    tier: "featured",
    year: "2025–2026",
    role: "Lead developer & SEO",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "HubSpot", "Technical SEO", "Semrush", "Analytics"],
    cover: "/images/projects/solarx-cover.webp",
    gallery: ["/images/projects/solarx-cover.webp", "/images/projects/solarx-2.webp"],
    live: "https://solar-x.ca/",
    insight: [
      "Regional and city landing pages built for local search",
      "Quote and assessment forms wired into the CRM pipeline",
      "Performance and Core Web Vitals work on a content-heavy site",
    ],
    challenge:
      "An installer with 10,000+ completed projects needed a site that ranks for local solar searches across four regions, explains changing rebate programs clearly, and turns visitors into qualified assessment requests.",
    solution:
      "I lead the Next.js codebase that powers the site and its SEO: regional and city pages driven by structured content, rebate and resource sections that are easy for the marketing team to update, and lead forms connected to the CRM so sales gets clean, attributed leads. Ongoing work covers keyword strategy, on-page and technical SEO, performance, tracking, and conversion improvements.",
    features: [
      "Residential and commercial service pages with region-specific rebate content",
      "Lead capture and quote flows synced to HubSpot",
      "Embedded solar calculator entry points",
      "Core Web Vitals optimization on image-heavy pages",
      "Keyword research, on-page SEO, schema and internal linking tracked in Semrush and Search Console",
      "Analytics and conversion tracking",
    ],
  },
  {
    slug: "solar-savings-estimator",
    title: "Solar Savings Estimator",
    category: "Renewable energy · Interactive tool",
    summary:
      "Public estimator that turns an address, electricity bill, and roof details into panel count, battery sizing, savings, and ROI under regional electricity rates, built to rank and to capture leads.",
    visibility: "nda",
    tier: "work",
    year: "2025–2026",
    role: "Lead developer & SEO",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Regional rate data", "Technical SEO", "Lead capture"],
    challenge:
      "Homeowners researching solar get generic numbers that ignore their region's rates and rebates. The tool had to feel instant, be trustworthy enough to share, rank for calculator searches, and capture leads without feeling like a form.",
    solution:
      "A step-by-step calculator with region-specific electricity rates and rebate logic, producing panel count, battery options, annual savings, and payback period. Inputs are progressive, results update live, and the estimate can be emailed to the user, which is where lead capture happens naturally. I own the codebase and the SEO: keyword targeting, structured data, and Core Web Vitals. Details and client are under NDA.",
    features: [
      "Region-aware savings and ROI model",
      "Battery and EV-charger add-on estimates",
      "Progressive inputs with instant results",
      "Shareable estimate with email capture",
      "Embeddable on partner sites",
    ],
  },
  {
    slug: "ai-content-generation-engine",
    title: "AI Content Generation Engine",
    category: "SaaS · Multi-LLM content",
    summary:
      "Generation module for a SaaS platform that drafts brand-aligned content across formats from a structured brief, using multiple LLM providers with caching and cost controls.",
    visibility: "nda",
    tier: "featured",
    year: "2026",
    role: "Full-stack developer",
    stack: ["Python", "FastAPI", "Celery", "Redis", "PostgreSQL", "Next.js", "Claude API", "OpenAI API"],
    challenge:
      "The platform needed to produce long-form and short-form content that matches a brand's positioning and tone, at volume, without runaway API spend or blocking the UI while generation runs.",
    solution:
      "I built the generation pipeline as background jobs: a brief is normalized into a prompt plan, routed to the best-fit model per task, and streamed back with progress tracking. Responses are cached by prompt fingerprint, and per-workspace budgets stop overruns. Details and client are under NDA.",
    features: [
      "Multi-provider routing (Claude, OpenAI, Mistral) with fallbacks",
      "Background generation with real-time progress",
      "Prompt caching and per-workspace cost limits",
      "Structured outputs validated before they reach the editor",
    ],
  },
  {
    slug: "content-optimization-suite",
    title: "Content Optimization Suite",
    category: "SaaS · Analysis & scoring",
    summary:
      "Optimization module that scores existing content against competitors and search intent, then proposes concrete edits (headings, gaps, tone, structure) right inside the editor.",
    visibility: "nda",
    tier: "work",
    year: "2026",
    role: "Full-stack developer",
    stack: ["Python", "FastAPI", "PostgreSQL", "Next.js", "TypeScript", "LLM analysis", "Charts"],
    challenge:
      "Teams had content but no objective way to know why it underperformed. The module had to explain a score, not just show one, and turn analysis into edits a writer can accept or reject.",
    solution:
      "I implemented multi-axis scoring (coverage, structure, tone, intent match) computed by an analysis pipeline, visualized with radar and heatmap views, and surfaced as inline suggestions in the editor. Every suggestion carries its reasoning so writers keep control. Details and client are under NDA.",
    features: [
      "Multi-axis scoring with explanations",
      "Competitor gap analysis",
      "Inline, accept/reject suggestions in the editor",
      "Radar and heatmap visualizations, exportable to reports",
    ],
  },
  {
    slug: "long-term-strategy-planner",
    title: "Long-Term Strategy Planner",
    category: "SaaS · Planning & tracking",
    summary:
      "Planning module that turns analysis into a quarter-by-quarter content roadmap, tracks execution, and re-plans as performance data comes in.",
    visibility: "nda",
    tier: "work",
    year: "2026",
    role: "Full-stack developer",
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Celery", "Scheduling"],
    challenge:
      "Analysis and generation are useless without a plan that survives contact with a real calendar. The module needed to schedule work, show progress, and adjust when results diverge from the forecast.",
    solution:
      "I built a roadmap engine that groups recommended work into phases, assigns it to a calendar with dependencies, and tracks status. Scheduled jobs pull performance signals and flag items to re-prioritize. Details and client are under NDA.",
    features: [
      "Phase-based roadmap generated from analysis",
      "Calendar view with dependencies and owners",
      "Automated progress tracking and re-prioritization",
      "Exportable plans for stakeholders",
    ],
  },
  {
    slug: "iot-solar-dryer",
    title: "IoT Solar Dryer with Hybrid Energy Switching",
    category: "IoT · Capstone",
    summary:
      "Thesis project: a sensor-driven solar dryer that switches automatically between solar and grid power to keep drying conditions stable.",
    visibility: "public",
    tier: "early",
    year: "2024",
    role: "Engineering lead",
    stack: ["Arduino", "IoT sensors", "Python", "Relay control"],
    challenge: "Solar drying stalls when sunlight drops; manual switching to backup power was unreliable and wasted energy.",
    solution: "Sensors monitor temperature, humidity, and panel output; a controller switches sources automatically and logs conditions for review.",
    features: ["Automatic hybrid source switching", "Live sensor telemetry", "Condition logging"],
  },
  {
    slug: "school-file-management",
    title: "School File Management System",
    category: "Web app · Education",
    summary: "Document management system for a national high school: uploads, categorization, role-based access, and search.",
    visibility: "public",
    tier: "early",
    year: "2024",
    role: "Full-stack developer",
    stack: ["PHP", "MySQL", "JavaScript"],
    challenge: "Paper and shared-drive records were hard to find and easy to lose.",
    solution: "A web system with structured categories, role-based access for staff, and fast search.",
    features: ["Role-based access", "Categorized uploads", "Search and audit trail"],
  },
  {
    slug: "student-council-voting",
    title: "COE Student Council Voting System",
    category: "Web app · Elections",
    summary: "Secure online voting for the College of Engineering student council with one-vote enforcement and live tallies.",
    visibility: "public",
    tier: "early",
    year: "2023",
    role: "Full-stack developer",
    stack: ["PHP", "MySQL", "JavaScript"],
    challenge: "Manual ballots were slow to count and hard to audit.",
    solution: "Authenticated voting with duplicate prevention, admin controls, and real-time results.",
    features: ["Voter authentication", "One-vote enforcement", "Live tally dashboard"],
  },
  {
    slug: "tabulation-system",
    title: "Tabulation System",
    category: "Desktop app · Events",
    summary: "Java desktop application for scoring and ranking contestants across judges and criteria.",
    visibility: "public",
    tier: "early",
    year: "2023",
    role: "Developer",
    stack: ["Java", "MySQL"],
    challenge: "Event scoring in spreadsheets produced errors and delays in announcing results.",
    solution: "A weighted-criteria tabulation app with judge entry screens and instant rankings.",
    features: ["Weighted criteria", "Multi-judge entry", "Instant rankings and export"],
  },
];

export const featured = projects.filter((p) => p.tier === "featured");
export const bySlug = (slug: string) => projects.find((p) => p.slug === slug);
