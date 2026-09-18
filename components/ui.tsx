import Link from "next/link";
import { ArrowUpRight, ArrowRight, Lock } from "lucide-react";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "primary", external, className = "" }: ButtonProps) {
  const base =
    "inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-medium transition-[background,color,border-color,transform] duration-200 ease-out active:scale-[0.98] cursor-pointer";
  const styles =
    variant === "primary"
      ? "bg-amber text-on-amber hover:bg-amber-hover"
      : "border border-line-strong text-ink hover:border-amber hover:text-amber";
  const Icon = external ? ArrowUpRight : ArrowRight;
  const cls = `${base} ${styles} ${className}`;
  // External URLs and files (PDF) must not go through next/link or they get prefetched as routes.
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
        <Icon className="size-4" aria-hidden />
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      <Icon className="size-4" aria-hidden />
    </Link>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  body?: string;
  align?: "left" | "center";
}) {
  const a = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${a}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display mt-3 text-4xl leading-[1.05] text-ink sm:text-5xl">{title}</h2>
      {body && <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">{body}</p>}
    </div>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line px-2.5 py-1 font-mono text-[11px] tracking-wide text-ink-muted">
      {children}
    </span>
  );
}

export function NdaBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber/40 bg-amber/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest text-amber">
      <Lock className="size-3" aria-hidden /> NDA
    </span>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}
