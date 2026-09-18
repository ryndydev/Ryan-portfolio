import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, GraduationCap } from "lucide-react";
import { site, principles } from "@/content/site";
import { featured } from "@/content/projects";
import { Button, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { StatTiles } from "@/components/stats";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/motion";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-amber/15 blur-[140px]"
        />
        <Container className="relative grid items-center gap-12 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28 lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>{site.fullName}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-display mt-4 text-[clamp(3.25rem,9vw,6.5rem)] leading-[0.95] text-ink">
                Full-Stack
                <br />
                <span className="italic text-amber">Developer</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted">{site.tagline}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/contact">Start a project</Button>
                <Button href="/portfolio" variant="ghost">See my work</Button>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[12px] tracking-wide text-ink-muted">
                <li className="inline-flex items-center gap-1.5"><MapPin className="size-3.5 text-amber" aria-hidden />{site.location} · {site.timezone}</li>
                <li className="inline-flex items-center gap-1.5"><GraduationCap className="size-3.5 text-amber" aria-hidden />{site.degree}</li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative mx-auto w-full max-w-sm md:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-surface">
              <Image
                src="/images/ryan.webp"
                alt="Portrait of Ryan Adaya"
                fill
                priority
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-canvas/80 to-transparent" aria-hidden />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-line bg-canvas/90 px-4 py-3 backdrop-blur md:block">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">Currently</p>
              <p className="mt-1 text-sm text-ink">Available for new projects</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Stats */}
      <section aria-labelledby="stats-heading">
        <Container className="pb-8">
          <h2 id="stats-heading" className="sr-only">By the numbers</h2>
          <StatTiles />
        </Container>
      </section>

      {/* Featured work */}
      <section className="py-20 md:py-28" aria-labelledby="work-heading">
        <Container>
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected work"
              title={<span id="work-heading">Products people actually use.</span>}
              body="Live platforms in sports coaching and renewable energy, plus SaaS modules under NDA."
            />
            <Link href="/portfolio" className="inline-flex items-center gap-1 font-mono text-[13px] text-amber hover:text-amber-hover">
              All projects <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <ProjectCard project={p} priority={i === 0} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* How I work */}
      <section className="border-y border-line bg-surface/40 py-20 md:py-28" aria-labelledby="how-heading">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="How I work" title={<span id="how-heading">Simple process, no surprises.</span>} />
          </Reveal>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.n} as="li" delay={i * 0.08}>
                <p className="font-display text-5xl text-amber/70">{p.n}</p>
                <div className="hairline mt-4 w-16" />
                <h3 className="mt-5 text-xl text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <Container>
          <Reveal className="text-center">
            <Eyebrow>Let&apos;s build</Eyebrow>
            <h2 className="font-display mx-auto mt-4 max-w-3xl text-4xl leading-[1.05] sm:text-6xl">
              Have a product in mind? <span className="italic text-amber">Tell me about it.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-ink-muted">{site.availability}</p>
            <div className="mt-8 flex justify-center gap-3">
              <Button href="/contact">Start a project</Button>
              <Button href={site.resumePath} variant="ghost" external>Resume</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
