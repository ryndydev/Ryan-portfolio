"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300 ${
        scrolled || open ? "border-b border-line bg-canvas/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Primary">
        <Link href="/" className="font-display text-xl text-ink" aria-label="Ryan Adaya — home">
          ragba<span className="text-amber">.</span>dev
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {site.nav.map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                aria-current={isActive(n.href) ? "page" : undefined}
                className={`relative font-mono text-[13px] tracking-wide transition-colors hover:text-ink ${
                  isActive(n.href) ? "text-ink" : "text-ink-muted"
                }`}
              >
                {n.label}
                {isActive(n.href) && <span className="absolute -bottom-1.5 left-0 h-px w-full bg-amber" aria-hidden />}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="inline-flex min-h-10 items-center rounded-full bg-amber px-4 text-sm font-medium text-on-amber transition-colors hover:bg-amber-hover"
            >
              Start a project
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full text-ink md:hidden cursor-pointer"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-nav" className="border-t border-line bg-canvas px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {site.nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  aria-current={isActive(n.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block py-3 font-display text-2xl ${isActive(n.href) ? "text-amber" : "text-ink"}`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex min-h-11 items-center rounded-full bg-amber px-5 text-sm font-medium text-on-amber"
          >
            Start a project
          </Link>
        </div>
      )}
    </header>
  );
}
