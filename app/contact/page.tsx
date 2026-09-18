import type { Metadata } from "next";
import { Mail, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { site } from "@/content/site";
import { Container, SectionHeading } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Contact",
  description: "Hire Ryan Adaya, a full-stack developer available for remote projects.",
  alternates: { canonical: "/contact/" },
};

const links = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: GithubIcon, label: "GitHub", value: "@ryndydev", href: site.socials.github },
  { icon: LinkedinIcon, label: "LinkedIn", value: "Ryan Adaya", href: site.socials.linkedin },
  { icon: FileDown, label: "Resume", value: "PDF download", href: site.resumePath },
];

export default function ContactPage() {
  return (
    <Container className="grid gap-14 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your project"
          body={site.availability}
        />
        <ul className="mt-10 space-y-3">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                download={l.label === "Resume" ? true : undefined}
                className="card flex items-center gap-4 px-5 py-4 hover:border-amber/50"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-full border border-line text-amber">
                  <l.icon className="size-4" aria-hidden />
                </span>
                <span>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">{l.label}</span>
                  <span className="block text-sm text-ink">{l.value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={0.1} className="card p-6 sm:p-8">
        <h2 className="font-display text-2xl">Send a message</h2>
        <p className="mt-1 text-sm text-ink-muted">Replies within one business day.</p>
        <div className="mt-6">
          <ContactForm />
        </div>
      </Reveal>
    </Container>
  );
}
