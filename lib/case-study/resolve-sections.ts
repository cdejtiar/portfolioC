import type { Project } from "@/lib/projects"
import {
  isDevelopmentBlock,
  isProblemBlock,
  isResearchBlock,
  isResultsBlock,
  isSolutionBlock,
  isTextBlock,
  isTimelineBlock,
} from "./defaults"
import { getBlockLabel } from "./translations"
import type {
  CaseStudyLocale,
  CaseStudySectionConfig,
  ResolvedCaseStudySection,
} from "./types"

/**
 * Only real project data is used as a fallback. Generic placeholder copy is
 * never injected: a block without documented content is dropped instead.
 */
function resolveTextBlockBody(
  section: CaseStudySectionConfig,
  project: Project,
): string | undefined {
  if (section.body) return section.body

  switch (section.type) {
    case "context":
      return project.context || project.description
    case "features":
      return project.finalSolution || project.solution || project.description
    case "role":
      return project.roleSummary || project.roles.join(" \u00b7 ")
    case "year":
      return project.year
    case "tools":
    case "technologies":
      return project.technologies.join(" \u00b7 ")
    default:
      return undefined
  }
}

function hasContent(section: ResolvedCaseStudySection): boolean {
  return Boolean(
    section.title ||
      section.subtitle ||
      section.description ||
      section.body ||
      section.items?.length ||
      section.cards?.length ||
      section.highlights?.length ||
      section.steps?.length ||
      section.decisions?.length ||
      section.beforeAfter ||
      section.image,
  )
}

export function resolveCaseStudySection(
  section: CaseStudySectionConfig,
  project: Project,
  language: CaseStudyLocale,
  index: number,
): ResolvedCaseStudySection | null {
  const id = section.id ?? `${section.type}-${index}`
  const label = getBlockLabel(section.type, language)

  const base: ResolvedCaseStudySection = {
    type: section.type,
    id,
    eyebrow: section.eyebrow ?? label,
    title: section.title,
    subtitle: section.subtitle,
    description: section.description,
    body: section.body,
    items: section.items,
    cards: section.cards,
    highlights: section.highlights,
    steps: section.steps,
    decisions: section.decisions,
    beforeAfter: section.beforeAfter,
    sideHighlight: section.sideHighlight,
    image: section.image,
    variant: section.variant,
  }

  switch (section.type) {
    case "hero":
      return {
        ...base,
        eyebrow: section.eyebrow,
      }

    case "overview":
      return {
        ...base,
        cards: section.cards ?? [
          {
            title: getBlockLabel("context", language),
            description: project.context || project.description,
          },
          {
            title: getBlockLabel("outcome", language),
            description: project.outcome || project.description,
          },
        ].filter((card) => Boolean(card.description)),
      }

    case "metadata":
      return {
        ...base,
        cards:
          section.cards ??
          [
            {
              title: getBlockLabel("role", language),
              description: project.roleSummary || project.roles.join(" \u00b7 "),
            },
            {
              title: getBlockLabel("year", language),
              description: project.year ?? "",
            },
            {
              title: getBlockLabel("tools", language),
              description: project.technologies.join(" \u00b7 "),
            },
          ].filter((card) => Boolean(card.description)),
      }

    default:
      if (isProblemBlock(section.type)) {
        const resolved = {
          ...base,
          title: section.title ?? label,
          body: section.body ?? project.problemStatement,
          description: section.description ?? project.need,
        }
        return hasContent(resolved) ? resolved : null
      }

      if (isTimelineBlock(section.type)) {
        const steps = section.steps ?? project.processSteps
        return steps?.length ? { ...base, title: section.title ?? label, steps } : null
      }

      if (isResearchBlock(section.type)) {
        const highlights = section.highlights ?? project.researchHighlights
        const resolved = {
          ...base,
          title: section.title ?? label,
          highlights,
        }
        return highlights?.length || section.body || section.description
          ? resolved
          : null
      }

      if (section.type === "design-decisions") {
        const decisions = section.decisions ?? project.designDecisions
        return decisions?.length
          ? { ...base, title: section.title ?? label, decisions }
          : null
      }

      if (isDevelopmentBlock(section.type)) {
        const resolved = {
          ...base,
          title: section.title ?? label,
          body: section.body ?? project.architecture,
          items: section.items ?? project.repoHighlights,
        }
        return hasContent(resolved) ? resolved : null
      }

      if (isSolutionBlock(section.type)) {
        const resolved = {
          ...base,
          title: section.title ?? label,
          description: section.description ?? project.finalSolution,
          body: section.body ?? project.finalSolution ?? project.solution,
          items: section.items,
          image: section.image ?? project.image,
        }
        return resolved.body || resolved.description || resolved.items?.length
          ? resolved
          : null
      }

      if (isResultsBlock(section.type)) {
        const resolved = {
          ...base,
          title: section.title ?? label,
          items:
            section.items ??
            (section.type === "learnings" ? project.learnings : undefined),
          description: section.description ?? project.outcome,
        }
        return hasContent(resolved) ? resolved : null
      }

      if (section.type === "before-after") {
        return section.beforeAfter ? base : null
      }

      if (isTextBlock(section.type)) {
        const body = resolveTextBlockBody(section, project)
        if (!body && !section.description && !section.items?.length) {
          return null
        }

        return {
          ...base,
          title: section.title ?? label,
          body,
          items:
            section.items ??
            (section.type === "features" ? project.features : undefined),
        }
      }

      return hasContent(base) ? base : null
  }
}

export function resolveCaseStudySections(
  sections: CaseStudySectionConfig[],
  project: Project,
  language: CaseStudyLocale,
): ResolvedCaseStudySection[] {
  return sections
    .map((section, index) =>
      resolveCaseStudySection(section, project, language, index),
    )
    .filter((section): section is ResolvedCaseStudySection => section !== null)
}
