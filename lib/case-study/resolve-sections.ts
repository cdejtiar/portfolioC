import type { Project } from "@/lib/projects"
import {
  getDefaultDesignDecisions,
  getDefaultOutcomeItems,
  getDefaultProcessSteps,
  getDefaultResearchHighlights,
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

function defaultTeam(language: CaseStudyLocale): string {
  return language === "es"
    ? "Diseñadora independiente + stakeholders"
    : "Independent designer + stakeholders"
}

function defaultDuration(language: CaseStudyLocale): string {
  return language === "es" ? "6 semanas" : "6 weeks"
}

function defaultProblemTitle(language: CaseStudyLocale): string {
  return language === "es"
    ? "El Exceso de Caminos como Parálisis."
    : "Too many paths can feel paralyzing."
}

function defaultSideHighlight(language: CaseStudyLocale) {
  return {
    title: language === "es" ? "El Botón de Crisis" : "The Crisis Button",
    description:
      language === "es"
        ? "Una propuesta de emergencia para momentos de bloqueo cognitivo severo."
        : "An emergency quick-action for moments of severe cognitive blocks.",
  }
}

function defaultProcessTitle(language: CaseStudyLocale): string {
  return language === "es" ? "El Viaje Creativo" : "The Creative Journey"
}

function defaultResearchTitle(language: CaseStudyLocale): string {
  return language === "es" ? "Voz del Usuario." : "Voice of the User."
}

function defaultResearchDescription(language: CaseStudyLocale): string {
  return language === "es"
    ? "Escuchar a los usuarios permitió entender qué necesitaban realmente y qué obstáculos estaban atravesando."
    : "Listening to users helped reveal what they actually needed and what obstacles they were facing."
}

function defaultFinalSolutionDescription(language: CaseStudyLocale): string {
  return language === "es"
    ? "Una interfaz diseñada para acompañar al usuario de forma clara, simple y coherente."
    : "An interface designed to guide users through a clear, simple and coherent experience."
}

function defaultFinalSolutionSubtitle(language: CaseStudyLocale): string {
  return language === "es"
    ? "Una experiencia pensada para el usuario"
    : "An experience designed around the user"
}

function resolveTextBlockBody(
  section: CaseStudySectionConfig,
  project: Project,
): string | undefined {
  if (section.body) return section.body

  switch (section.type) {
    case "context":
      return project.context || project.description
    case "ideation":
    case "wireframes":
    case "prototyping":
    case "ui-design":
    case "design-system":
    case "interaction-design":
    case "personas":
    case "journey":
    case "user-flow":
    case "information-architecture":
    case "concept":
    case "testing":
    case "testing-results":
    case "iterations":
    case "prototype":
      return project.fullDescription
    case "features":
      return project.finalSolution || project.solution || project.description
    case "role":
      return project.roleSummary || project.roles.join(" · ")
    case "year":
      return project.year
    case "tools":
    case "technologies":
      return project.technologies.join(" · ")
    default:
      return undefined
  }
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
            title: getBlockLabel("team", language),
            description: project.team || defaultTeam(language),
          },
          {
            title: getBlockLabel("outcome", language),
            description: project.outcome || project.description,
          },
        ],
      }

    case "metadata":
      return {
        ...base,
        cards: section.cards ?? [
          {
            title: getBlockLabel("role", language),
            description: project.roleSummary || project.roles.join(" · "),
          },
          {
            title: getBlockLabel("year", language),
            description: project.year || defaultDuration(language),
          },
          {
            title: getBlockLabel("tools", language),
            description: project.technologies.join(" · "),
          },
        ],
      }

    default:
      if (isProblemBlock(section.type)) {
        return {
          ...base,
          title: section.title ?? defaultProblemTitle(language),
          body: section.body ?? project.problemStatement ?? project.fullDescription,
          description: section.description ?? project.need ?? project.solution,
          sideHighlight: section.sideHighlight ?? defaultSideHighlight(language),
        }
      }

      if (isTimelineBlock(section.type)) {
        return {
          ...base,
          title: section.title ?? defaultProcessTitle(language),
          steps: section.steps ?? project.processSteps ?? getDefaultProcessSteps(language),
        }
      }

      if (isResearchBlock(section.type)) {
        return {
          ...base,
          title: section.title ?? defaultResearchTitle(language),
          description:
            section.description ?? defaultResearchDescription(language),
          highlights:
            section.highlights ??
            project.researchHighlights ??
            getDefaultResearchHighlights(project, language),
        }
      }

      if (section.type === "design-decisions") {
        return {
          ...base,
          title:
            section.title ??
            (language === "es" ? "Decisiones de Diseño" : "Design Decisions"),
          decisions:
            section.decisions ??
            project.designDecisions ??
            getDefaultDesignDecisions(language),
        }
      }

      if (isDevelopmentBlock(section.type)) {
        return {
          ...base,
          title:
            section.title ??
            (language === "es" ? "Arquitectura y código" : "Architecture & code"),
          description:
            section.description ??
            (language === "es"
              ? "Detalles técnicos relevantes, decisiones de implementación y recursos."
              : "Relevant technical details, implementation decisions, and resources."),
          body: section.body ?? project.architecture,
          items: section.items ?? project.repoHighlights,
        }
      }

      if (isSolutionBlock(section.type)) {
        return {
          ...base,
          title:
            section.title ??
            (language === "es" ? "La Solución Final" : "The Final Solution"),
          description:
            section.description ??
            project.finalSolution ??
            defaultFinalSolutionDescription(language),
          subtitle: section.subtitle ?? defaultFinalSolutionSubtitle(language),
          body:
            section.body ??
            project.finalSolution ??
            project.solution ??
            project.description,
          items: section.items ?? project.features,
          image: section.image ?? project.image,
        }
      }

      if (isResultsBlock(section.type)) {
        return {
          ...base,
          title:
            section.title ??
            (language === "es"
              ? "Resultados y Aprendizajes"
              : "Results & Learnings"),
          items:
            section.items ??
            project.learnings ??
            getDefaultOutcomeItems(project, language),
          description: section.description ?? project.outcome,
        }
      }

      if (section.type === "before-after") {
        return section.beforeAfter ? base : null
      }

      if (isTextBlock(section.type)) {
        const body = resolveTextBlockBody(section, project)
        if (!body && !section.title && !section.description && !section.items) {
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

      return base.body || base.title || base.description ? base : null
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
