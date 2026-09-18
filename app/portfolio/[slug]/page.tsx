import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Lock, Check } from "lucide-react";
import { projects, bySlug } from "@/content/projects";
import { Button, Chip, Container, Eyebrow, NdaBadge } from "@/components/ui";
import { Reveal } from "@/components/motion";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = bySlug(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
    alternates: { canonical: `/portfolio/${p.slug}/` },
    openGraph: p.cover ? { images: [{ url: p.cover, width: 1280, height: 800 }] } : undefined,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = bySlug(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];
  const nda = project.visibility === "nda";

  return (
    <article>
      {/* Header */}
      <Container className="pt-14 md:pt-20">
        <Reveal>
          <Link href="/portfolio" className="inline-flex items-center gap-1.5 font-mono text-[12px] tracking-wide text-ink-muted hover:text-ink">
            <ArrowLeft className="size-3.5" aria-hidden /> Back to gallery
          </Link>
        </Reveal>
        <Reveal delay={0.05} className="mt-8 flex flex-wrap items-center gap-3">
          <Eyebrow>{project.category}</Eyebrow>
          {nda ? <NdaBadge /> : <span className="font-mono text-[11px] text-ink-faint">{project.year}</span>}
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display mt-4 max-w-4xl text-5xl leading-[0.98] sm:text-6xl md:text-7xl">{project.title}</h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">{project.summary}</p>
        </Reveal>
        <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-3">
          {project.live && <Button href={project.live} external>Visit live site</Button>}
          <Button href="/contact" variant="ghost">Build something similar</Button>
        </Reveal>
      </Container>

      {/* Cover / gallery */}
      <Container className="mt-14">
        <Reveal>
          {project.cover ? (
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-line">
              <Image src={project.cover} alt={`${project.title} — homepage`} fill priority sizes="(min-width: 1152px) 1152px, 100vw" className="object-cover object-top" />
            </div>
          ) : (
            <div className="nda-cover flex aspect-[16/7] items-center justify-center rounded-[1.5rem] border border-line">
              <div className="max-w-md px-6 text-center">
                <Lock className="mx-auto size-8 text-amber" aria-hidden />
                <p className="mt-4 font-display text-2xl">Built under NDA</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Screens, code, and the client&apos;s name aren&apos;t public. The architecture and my role are described below; happy to walk through details on a call.
                </p>
              </div>
            </div>
          )}
        </Reveal>
      </Container>

      {/* Meta + body */}
      <Container className="mt-16 grid gap-12 md:grid-cols-[0.6fr_1.4fr] md:gap-16">
        <Reveal>
          <dl className="space-y-7">
            <div>
              <dt className="eyebrow">Role</dt>
              <dd className="mt-2 text-ink">{project.role}</dd>
            </div>
            <div>
              <dt className="eyebrow">Timeline</dt>
              <dd className="mt-2 text-ink">{project.year}</dd>
            </div>
            <div>
              <dt className="eyebrow">Stack</dt>
              <dd className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((s) => <Chip key={s}>{s}</Chip>)}
              </dd>
            </div>
          </dl>
        </Reveal>

        <div className="space-y-14">
          <Reveal>
            <Eyebrow>The challenge</Eyebrow>
            <p className="mt-4 text-lg leading-relaxed text-ink">{project.challenge}</p>
          </Reveal>
          <Reveal>
            <Eyebrow>What I built</Eyebrow>
            <p className="mt-4 text-lg leading-relaxed text-ink">{project.solution}</p>
          </Reveal>
          <Reveal>
            <Eyebrow>Key features</Eyebrow>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.features.map((f) => (
                <li key={f} className="card flex gap-3 px-4 py-3.5 text-sm text-ink">
                  <Check className="mt-0.5 size-4 shrink-0 text-amber" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 1 && (
        <Container className="mt-20">
          <Reveal>
            <Eyebrow>Screens</Eyebrow>
          </Reveal>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {project.gallery.slice(1).map((src, i) => (
              <Reveal key={src} delay={i * 0.06}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line">
                  <Image src={src} alt={`${project.title} — screen ${i + 2}`} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover object-top" />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      )}

      {/* Live embed */}
      {project.embed && (
        <Container className="mt-20">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Try it live</Eyebrow>
              <p className="mt-2 text-sm text-ink-muted">Embedded from {new URL(project.embed).host}. Scroll inside the frame to use the tool.</p>
            </div>
            <a href={project.embed} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-mono text-[12px] text-amber hover:text-amber-hover">
              Open in new tab <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </Reveal>
          <Reveal className="mt-5 overflow-hidden rounded-[1.5rem] border border-line bg-surface">
            <iframe
              src={project.embed}
              title={`${project.title} — live tool`}
              loading="lazy"
              className="h-[70vh] min-h-[540px] w-full"
              referrerPolicy="no-referrer-when-downgrade"
              allow="geolocation"
            />
          </Reveal>
        </Container>
      )}

      {/* Prev / next */}
      <Container className="mt-24 border-t border-line py-12">
        <nav aria-label="More projects" className="flex justify-between gap-6">
          <Link href={`/portfolio/${prev.slug}/`} className="group max-w-[45%]">
            <span className="inline-flex items-center gap-1 font-mono text-[11px] tracking-widest text-ink-muted"><ArrowLeft className="size-3.5" aria-hidden /> Previous</span>
            <span className="font-display mt-2 block text-xl leading-tight transition-colors group-hover:text-amber">{prev.title}</span>
          </Link>
          <Link href={`/portfolio/${next.slug}/`} className="group max-w-[45%] text-right">
            <span className="inline-flex items-center gap-1 font-mono text-[11px] tracking-widest text-ink-muted">Next <ArrowRight className="size-3.5" aria-hidden /></span>
            <span className="font-display mt-2 block text-xl leading-tight transition-colors group-hover:text-amber">{next.title}</span>
          </Link>
        </nav>
      </Container>
    </article>
  );
}
