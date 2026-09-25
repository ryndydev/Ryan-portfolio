import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, GraduationCap } from "lucide-react";
import { site, toolkit, timeline, principles } from "@/content/site";
import { Button, Chip, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { StatTiles } from "@/components/stats";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name}, ${site.role} from the Philippines. ${site.degree}, building for clients worldwide since 2023.`,
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <Container className="grid items-center gap-12 py-16 md:grid-cols-[0.8fr_1.2fr] md:py-24">
        <Reveal className="relative mx-auto w-full max-w-xs md:max-w-none">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-line">
            <Image src="/images/ryan.webp" alt="Portrait of Ryan Adaya" fill priority sizes="(min-width: 768px) 35vw, 80vw" className="object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex flex-wrap gap-2">
            <Chip><MapPin className="mr-1.5 size-3 text-amber" aria-hidden />{site.location}</Chip>
            <Chip><GraduationCap className="mr-1.5 size-3 text-amber" aria-hidden />{site.degree}</Chip>
          </div>
          <h1 className="font-display mt-6 text-5xl leading-[1] sm:text-6xl">
            Ryan Anthony
            <br />
            <span className="text-ink-muted">Gabriel B. Adaya</span>
          </h1>
          <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.18em] text-ink-muted">
            Full-stack developer · SEO · AI integrations · Computer engineer
          </p>
          <p className="mt-6 max-w-xl leading-relaxed text-ink-muted">
            I studied computer engineering at {site.school} and started shipping software in 2023: first tabulation and
            voting systems for my college, then an IoT thesis, and from 2025 production web platforms for clients around
            the world, as lead developer and SEO. I care about the whole system: the schema, the API, the interface, the
            deploy, and whether it ranks.
          </p>
        </Reveal>
      </Container>

      <Container className="pb-20">
        <StatTiles />
      </Container>

      <section className="border-y border-line bg-surface/40 py-20">
        <Container>
          <Reveal>
            <Eyebrow>The story</Eyebrow>
            <p className="font-display mt-4 max-w-4xl text-3xl leading-[1.15] sm:text-5xl">
              From requirements to a running product, I like turning{" "}
              <span className="italic text-amber">messy problems</span> into software that&apos;s clear to use and easy to maintain.
            </p>
          </Reveal>
          <ol className="mt-16 grid gap-10 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.n} as="li" delay={i * 0.08}>
                <p className="font-display text-4xl text-amber/70">{p.n}</p>
                <h2 className="mt-3 text-lg text-ink">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <Container className="py-20">
        <Reveal>
          <SectionHeading eyebrow="Toolkit" title="What I work with" body="Chosen per project, not by habit. These are the ones I reach for most." />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {toolkit.map((g, i) => (
            <Reveal key={g.group} delay={i * 0.05} className="card p-6">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">{g.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <li key={t}><Chip>{t}</Chip></li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>

      <Container className="pb-24">
        <Reveal>
          <SectionHeading eyebrow="Timeline" title="The journey so far" />
        </Reveal>
        <ol className="relative mt-12 space-y-10 border-l border-line pl-8">
          {timeline.map((t, i) => (
            <Reveal key={t.year} as="li" delay={i * 0.05} className="relative">
              <span className="absolute -left-[37px] top-1.5 size-2.5 rounded-full bg-amber ring-4 ring-canvas" aria-hidden />
              <p className="font-mono text-[12px] tracking-[0.18em] text-amber">{t.year}</p>
              <h3 className="mt-1 text-lg text-ink">{t.title}</h3>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-ink-muted">{t.body}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-14 flex gap-3">
          <Button href="/contact">Work with me</Button>
          <Button href="/portfolio" variant="ghost">See my work</Button>
        </Reveal>
      </Container>
    </>
  );
}
