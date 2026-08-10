"use client"

import type { Project } from "@/lib/projects"
import {
  resolveCaseStudySections,
  resolveProjectSections,
  type CaseStudyLocale,
  type ResolvedCaseStudySection,
} from "@/lib/case-study"
import { getBlockLayout } from "@/lib/case-study/block-registry"
import { DesignDecisionsBlock } from "./blocks/design-decisions-block"
import { DevelopmentBlock } from "./blocks/development-block"
import { FinalSolutionBlock } from "./blocks/final-solution-block"
import { HeroBlock } from "./blocks/hero-block"
import { OverviewBlock } from "./blocks/overview-block"
import { ProblemBlock } from "./blocks/problem-block"
import { ProcessBlock } from "./blocks/process-block"
import { ResearchBlock } from "./blocks/research-block"
import { ResultsBlock } from "./blocks/results-block"
import {
  BeforeAfterBlock,
  CardsBlock,
  TextBlock,
} from "./blocks/content-blocks"

interface CaseStudyRendererProps {
  project: Project
  language: CaseStudyLocale
  resolveImage: (img?: string) => string
}

function renderSection(
  section: ResolvedCaseStudySection,
  props: CaseStudyRendererProps,
) {
  const { project, language, resolveImage } = props
  const layout = getBlockLayout(section.type)

  switch (layout) {
    case "hero":
      return (
        <HeroBlock
          key={section.id}
          section={section}
          project={project}
          language={language}
        />
      )
    case "overview":
      return <OverviewBlock key={section.id} section={section} />
    case "problem":
      return (
        <ProblemBlock
          key={section.id}
          section={section}
          language={language}
        />
      )
    case "timeline":
      return <ProcessBlock key={section.id} section={section} />
    case "research":
      return <ResearchBlock key={section.id} section={section} />
    case "decisions":
      return (
        <DesignDecisionsBlock
          key={section.id}
          section={section}
          language={language}
        />
      )
    case "development":
      return (
        <DevelopmentBlock
          key={section.id}
          section={section}
          project={project}
          language={language}
        />
      )
    case "solution":
      return (
        <FinalSolutionBlock
          key={section.id}
          section={section}
          project={project}
          language={language}
          resolveImage={resolveImage}
        />
      )
    case "results":
      return (
        <ResultsBlock
          key={section.id}
          section={section}
          language={language}
        />
      )
    case "before-after":
      return (
        <BeforeAfterBlock
          key={section.id}
          section={section}
          resolveImage={resolveImage}
        />
      )
    case "cards":
      return <CardsBlock key={section.id} section={section} />
    case "text":
    default:
      return <TextBlock key={section.id} section={section} />
  }
}

export function CaseStudyRenderer({
  project,
  language,
  resolveImage,
}: CaseStudyRendererProps) {
  const sectionConfigs = resolveProjectSections(project, language)
  const sections = resolveCaseStudySections(
    sectionConfigs,
    project,
    language,
  )

  return (
    <>
      {sections.map((section) =>
        renderSection(section, { project, language, resolveImage }),
      )}
    </>
  )
}
