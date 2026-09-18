"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Lock, Sparkles } from "lucide-react";
import type { Project } from "@/content/projects";
import { Chip, NdaBadge } from "./ui";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const reduce = useReducedMotion();
  const nda = project.visibility === "nda";
  const hasInsight = !!project.insight && !!project.live;

  return (
    <motion.article
      layout={!reduce}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group card relative flex flex-col overflow-hidden focus-within:border-line-strong"
    >
      {/* Cover */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
        {project.cover ? (
          <Image
            src={project.cover}
            alt={`${project.title} — screenshot`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            priority={priority}
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="nda-cover absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3 text-amber">
              <Lock className="size-7" aria-hidden />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em]">Under NDA</span>
            </div>
          </div>
        )}

        {/* Live insight overlay (hover / focus) */}
        {hasInsight && (
          <div
            className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-canvas via-canvas/90 to-canvas/30 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
            aria-hidden
          >
            <p className="mb-2 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-amber">
              <Sparkles className="size-3.5" /> Live insight
            </p>
            <ul className="space-y-1.5 text-[13px] leading-snug text-ink">
              {project.insight!.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="mt-[7px] size-1 shrink-0 rounded-full bg-amber" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">{project.category}</p>
            <h3 className="font-display mt-1.5 text-2xl leading-tight text-ink">
              <Link href={`/portfolio/${project.slug}/`} className="after:absolute after:inset-0 after:content-['']">
                {project.title}
              </Link>
            </h3>
          </div>
          {nda ? <NdaBadge /> : <span className="font-mono text-[11px] text-ink-faint">{project.year}</span>}
        </div>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-muted">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
          {project.stack.length > 4 && <Chip>+{project.stack.length - 4}</Chip>}
        </div>
      </div>

      {/* Live link sits above the stretched card link */}
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 mx-5 mb-5 inline-flex min-h-10 w-fit items-center gap-1.5 rounded-full border border-line px-3.5 text-[13px] text-ink transition-colors hover:border-amber hover:text-amber"
        >
          Open live site <ArrowUpRight className="size-3.5" aria-hidden />
        </a>
      )}
    </motion.article>
  );
}
