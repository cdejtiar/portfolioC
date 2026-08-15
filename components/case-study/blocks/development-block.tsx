"use client"

import type { Project } from "@/lib/projects"
import type { CaseStudyLocale, ResolvedCaseStudySection } from "@/lib/case-study/types"
import {
  FormattedText,
  SectionContainer,
  SectionDescription,
  SectionEyebrow,
  SectionTitle,
  SectionWrapper,
} from "../shared/section-primitives"

interface DevelopmentBlockProps {
  section: ResolvedCaseStudySection
  project: Project
  language: CaseStudyLocale
}

export function DevelopmentBlock({
  section,
  project,
  language,
}: DevelopmentBlockProps) {
  const repoHighlights = section.items ?? []

  return (
    <SectionWrapper>
      <SectionContainer>
        <div className="mb-10 max-w-2xl">
          {section.eyebrow && <SectionEyebrow>{section.eyebrow}</SectionEyebrow>}
          {section.title && <SectionTitle>{section.title}</SectionTitle>}
          {section.description && (
            <SectionDescription>{section.description}</SectionDescription>
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {section.body && (
            <div className="rounded-xl border border-cs-hairline bg-cs-card p-6">
              <p className="text-[9px] uppercase tracking-[0.28em] text-primary">
                {language === "es" ? "Arquitectura" : "Architecture"}
              </p>
              <FormattedText
                text={section.body}
                className="mt-4 text-sm leading-7 text-muted-foreground"
              />
            </div>
          )}

          {repoHighlights.length > 0 && (
            <div className="rounded-xl border border-cs-hairline bg-cs-card p-6">
              <p className="text-[9px] uppercase tracking-[0.28em] text-primary">
                {language === "es"
                  ? "Puntos claves del repositorio"
                  : "Repo highlights"}
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
                {repoHighlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span>•</span>
                    <FormattedText text={item} className="inline" />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.githubUrl && (
            <div className="rounded-xl border border-cs-hairline bg-cs-card p-6 md:col-span-2">
              <p className="text-[9px] uppercase tracking-[0.28em] text-primary">
                GitHub
              </p>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm text-foreground underline decoration-primary/50 underline-offset-4 transition-colors hover:text-primary"
              >
                {project.githubUrl}
              </a>
            </div>
          )}

          {!section.body &&
            repoHighlights.length === 0 &&
            project.technologies.length > 0 && (
              <div className="rounded-xl border border-cs-hairline bg-cs-card p-6 md:col-span-2">
                <p className="text-[9px] uppercase tracking-[0.28em] text-primary">
                  {language === "es" ? "Tecnologías" : "Technologies"}
                </p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {project.technologies.join(" · ")}
                </p>
              </div>
            )}
        </div>
      </SectionContainer>
    </SectionWrapper>
  )
}