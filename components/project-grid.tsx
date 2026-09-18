"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import type { Project, Visibility } from "@/content/projects";
import { ProjectCard } from "./project-card";

type Filter = "all" | Visibility;

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "public", label: "Public" },
  { key: "nda", label: "NDA" },
];

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.visibility === filter)),
    [filter, projects],
  );
  const counts = {
    all: projects.length,
    public: projects.filter((p) => p.visibility === "public").length,
    nda: projects.filter((p) => p.visibility === "nda").length,
  };

  return (
    <div>
      <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {filters.map((f) => {
          const active = f.key === filter;
          return (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f.key)}
              className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 font-mono text-[12px] tracking-wide transition-colors cursor-pointer ${
                active
                  ? "border-amber bg-amber text-on-amber"
                  : "border-line text-ink-muted hover:border-line-strong hover:text-ink"
              }`}
            >
              {f.label}
              <span className={active ? "opacity-70" : "text-ink-faint"}>{counts[f.key]}</span>
            </button>
          );
        })}
      </div>

      <LayoutGroup>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <ProjectCard key={p.slug} project={p} priority={i < 3} />
            ))}
          </AnimatePresence>
        </div>
      </LayoutGroup>
    </div>
  );
}
