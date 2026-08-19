"use client"
import type { Project } from "@/lib/projects"
import {
  resolveCaseStudySections,
  resolveProjectSections,
  type CaseStudyCard,
  type CaseStudyLocale,
  type ResolvedCaseStudySection,
} from "@/lib/case-study"
import { getBlockLayout } from "@/lib/case-study/block-registry"
import { DesignDecisionsBlock } from "./blocks/design-decisions-block"
import { DevelopmentBlock } from "./blocks/development-block"
import { FinalSolutionBlock } from "./blocks/final-solution-block"
import { GalleryBlock } from "./blocks/gallery-block"
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

// Los archivos de contenido deben titular estas cards de "metadata" así
// (ES/EN) para que el Hero pueda extraerlas automáticamente.
const TYPE_LABELS = ["Tipo de proyecto", "Project type"]
const YEAR_LABELS = ["Año", "Year"]
const TOOLS_LABELS = ["Herramientas", "Tools", "Tecnologías", "Technologies"]

function findCard(
  cards: CaseStudyCard[] | undefined,
  labels: string[],
): CaseStudyCard | undefined {
  return cards?.find((card) => labels.includes(card.title))
}

function renderSection(
  section: ResolvedCaseStudySection,
  props: CaseStudyRendererProps,
  overrideCards?: CaseStudyCard[],
) {
  const { project, language, resolveImage } = props
  const layout = getBlockLayout(section.type)

  switch (layout) {
    case "overview":
      return (
        <OverviewBlock
          key={section.id}
          section={overrideCards ? { ...section, cards: overrideCards } : section}
        />
      )
    case "problem":
      return (
        <ProblemBlock key={section.id} section={section} language={language} />
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
    case "gallery":
      return (
        <GalleryBlock
          key={section.id}
          section={section}
          resolveImage={resolveImage}
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
  const sections = resolveCaseStudySections(sectionConfigs, project, language)

  const metadataSection = sections.find((s) => s.type === "metadata")
  const overviewSection = sections.find((s) => s.type === "overview")

  const projectType = findCard(metadataSection?.cards, TYPE_LABELS)?.description
  const projectYear = findCard(metadataSection?.cards, YEAR_LABELS)?.description
  const toolsCard = findCard(metadataSection?.cards, TOOLS_LABELS)

  const overviewCards = overviewSection?.cards
    ? [...overviewSection.cards.slice(0, 2), ...(toolsCard ? [toolsCard] : [])]
    : undefined

  const resultSection = sections.find((s) => s.type === "result")
  const learningsSection = sections.find((s) => s.type === "learnings")
  const mergedResultsAtId = resultSection?.id ?? learningsSection?.id

  const rendered = sections
    .filter((section) => section.type !== "metadata")
    .filter((section) => !(section.type === "learnings" && resultSection))
    .map((section) => {
      if (section.type === "hero") {
        return (
          <HeroBlock
            key={section.id}
            section={section}
            project={project}
            language={language}
            projectType={projectType}
            year={projectYear}
          />
        )
      }

      if (section.id === mergedResultsAtId && (resultSection || learningsSection)) {
        return (
          <ResultsBlock
            key={section.id}
            resultSection={resultSection}
            learningsSection={learningsSection}
            language={language}
          />
        )
      }

      if (section.id === overviewSection?.id) {
        return renderSection(section, { project, language, resolveImage }, overviewCards)
      }

      return renderSection(section, { project, language, resolveImage })
    })

  return <>{rendered}</>
}