import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./brand-icons";
import { site } from "@/content/site";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl">
            ragba<span className="text-amber">.</span>dev
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">{site.tagline}</p>
          <div className="mt-5 flex gap-2">
            <SocialLink href={site.socials.github} label="GitHub"><GithubIcon className="size-4" /></SocialLink>
            <SocialLink href={site.socials.linkedin} label="LinkedIn"><LinkedinIcon className="size-4" /></SocialLink>
            <SocialLink href={`mailto:${site.email}`} label="Email"><Mail className="size-4" /></SocialLink>
          </div>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {site.nav.filter((n) => n.href !== "/").map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-ink-muted transition-colors hover:text-ink">{n.label}</Link>
              </li>
            ))}
            <li>
              <a href={site.resumePath} download className="inline-flex items-center gap-1 text-ink-muted transition-colors hover:text-ink">
                Download resume <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Availability</p>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">{site.availability}</p>
          <Link href="/contact" className="mt-4 inline-flex items-center gap-1 text-sm text-amber hover:text-amber-hover">
            Get in touch <ArrowUpRight className="size-3.5" aria-hidden />
          </Link>
        </div>
      </Container>
      <Container className="flex flex-col gap-2 border-t border-line py-6 font-mono text-[11px] tracking-wide text-ink-faint sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} {site.fullName}. All rights reserved.</span>
        <span>Next.js · Tailwind · Deployed on GitHub Pages</span>
      </Container>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex size-11 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-amber hover:text-amber"
    >
      {children}
    </a>
  );
}
