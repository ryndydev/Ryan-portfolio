import type { Metadata } from "next";
import { services } from "@/content/site";
import { Button, Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Services",
  description: "Full-stack web apps, Next.js sites, AI features, SaaS platforms, payments and CRM integrations, and interactive tools.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <Container className="py-16 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Capabilities"
          title="What I can build for you"
          body="One accountable developer from data model to deployment. These are the engagements I take on most often."
        />
      </Reveal>
      <ol className="mt-12 grid gap-4 sm:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.title} as="li" delay={i * 0.05} className="card p-7">
            <p className="font-mono text-[11px] tracking-[0.2em] text-amber">0{i + 1}</p>
            <h2 className="font-display mt-3 text-2xl text-ink">{s.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{s.body}</p>
          </Reveal>
        ))}
      </ol>
      <Reveal className="mt-14">
        <Button href="/contact">Start a project</Button>
      </Reveal>
    </Container>
  );
}
