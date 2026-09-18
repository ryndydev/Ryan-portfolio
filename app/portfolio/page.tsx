import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { Container, SectionHeading } from "@/components/ui";
import { ProjectGrid } from "@/components/project-grid";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Case studies: live web platforms, interactive tools, and SaaS modules built under NDA.",
  alternates: { canonical: "/portfolio/" },
};

export default function PortfolioPage() {
  const nda = projects.filter((p) => p.visibility === "nda").length;
  return (
    <Container className="py-16 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Portfolio"
          title="Project gallery"
          body={`${projects.length} projects: ${projects.length - nda} public, ${nda} under NDA. Click any card for the full case study.`}
        />
      </Reveal>
      <div className="mt-10">
        <ProjectGrid projects={projects} />
      </div>
    </Container>
  );
}
