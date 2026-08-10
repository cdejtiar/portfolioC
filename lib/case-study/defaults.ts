import { getCaseStudyContent } from "./content"
import type { Project } from "@/lib/projects"
import type {
  CaseStudyBlockType,
  CaseStudyDecision,
  CaseStudyHighlight,
  CaseStudyLocale,
  CaseStudyProcessStep,
  CaseStudySectionConfig,
} from "./types"

const DESIGN_ROLES = [
  "Product Design",
  "UX Research",
  "Design Systems",
  "Research",
] as const

const DEV_ROLES = ["Frontend Development", "AI Integration"] as const

export function isDesignProject(project: Project): boolean {
  return project.roles.some((role) =>
    (DESIGN_ROLES as readonly string[]).includes(role),
  )
}

export function isDevOnlyProject(project: Project): boolean {
  return project.roles.every((role) =>
    (DEV_ROLES as readonly string[]).includes(role),
  )
}

export function getDefaultProcessSteps(
  language: CaseStudyLocale,
): CaseStudyProcessStep[] {
  if (language === "es") {
    return [
      {
        label: "01. Investigación",
        title: "Investigación",
        description:
          "Mapear contexto, usuarios y oportunidades desde la observación y la conversación.",
      },
      {
        label: "02. Definición",
        title: "Definición",
        description:
          "Sintetizar hallazgos y convertirlos en una dirección clara de producto.",
      },
      {
        label: "03. Ideación",
        title: "Ideación",
        description:
          "Explorar múltiples caminos para resolver el problema con una lógica de experiencia.",
      },
      {
        label: "04. Diseño",
        title: "Diseño",
        description:
          "Materializar la dirección en interfaces, flujos y decisiones visuales coherentes.",
      },
      {
        label: "05. Testing",
        title: "Testing",
        description:
          "Validar con usuarios reales y detectar oportunidades de mejora.",
      },
      {
        label: "06. Iteración",
        title: "Iteración",
        description:
          "Refinar el producto con una mirada más estratégica y empática.",
      },
    ]
  }

  return [
    {
      label: "01. Research",
      title: "Research",
      description:
        "Map the context, users, and opportunities through observation and conversation.",
    },
    {
      label: "02. Definition",
      title: "Definition",
      description:
        "Synthesize insights and turn them into a clear product direction.",
    },
    {
      label: "03. Ideation",
      title: "Ideation",
      description:
        "Explore multiple paths to solve the problem through a thoughtful experience lens.",
    },
    {
      label: "04. Design",
      title: "Design",
      description:
        "Materialize the direction into interfaces, flows, and coherent visual decisions.",
    },
    {
      label: "05. Testing",
      title: "Testing",
      description:
        "Validate with real users and identify opportunities to improve the experience.",
    },
    {
      label: "06. Iteration",
      title: "Iteration",
      description:
        "Refine the product with a more strategic and empathetic lens.",
    },
  ]
}

export function getDefaultResearchHighlights(
  project: Project,
  language: CaseStudyLocale,
): CaseStudyHighlight[] {
  return [
    {
      title: language === "es" ? "Insight principal" : "Core insight",
      detail: project.problemStatement || project.fullDescription,
    },
    {
      title: language === "es" ? "Necesidad detectada" : "Need discovered",
      detail: project.need || project.description,
    },
  ]
}

export function getDefaultDesignDecisions(
  language: CaseStudyLocale,
): CaseStudyDecision[] {
  return [
    {
      title:
        language === "es" ? "Decisión de estructura" : "Structure decision",
      problem:
        language === "es"
          ? "La experiencia debía sentirse clara desde el primer contacto."
          : "The experience needed to feel clear from the first interaction.",
      decision:
        language === "es"
          ? "Prioricé mensajes simples, una navegación directa y una entrada visual más amable."
          : "I prioritized simple messaging, direct navigation, and a warmer first impression.",
      impact:
        language === "es"
          ? "Se redujo la fricción inicial y la propuesta se volvió más accesible."
          : "Initial friction was reduced and the proposal became more accessible.",
    },
  ]
}

export function getDefaultOutcomeItems(
  project: Project,
  language: CaseStudyLocale,
): string[] {
  if (project.outcomes?.length) return project.outcomes

  return language === "es"
    ? [
        "Propuesta más clara y con una identidad de producto más sólida.",
        "Ruta de diseño preparada para iterar con usuarios reales.",
      ]
    : [
        "A clearer proposal with a stronger product identity.",
        "A design direction ready to iterate with real users.",
      ]
}

/** Fallback layout that mirrors the current monolithic page behavior. */
export function getDefaultCaseStudySections(
  project: Project,
): CaseStudySectionConfig[] {
  const sections: CaseStudySectionConfig[] = [
    { type: "hero" },
    { type: "overview" },
    { type: "problem" },
  ]

  if (isDesignProject(project)) {
    sections.push(
      { type: "design-process" },
      { type: "research" },
      { type: "design-decisions" },
    )
  }

  if (isDevOnlyProject(project) || project.architecture || project.githubUrl) {
    sections.push({ type: "development" })
  }

  sections.push({ type: "final-solution" }, { type: "result" })

  return sections
}

export function resolveProjectSections(
  project: Project,
  language: CaseStudyLocale = "es",
): CaseStudySectionConfig[] {
  if (project.sections?.length) {
    return project.sections.filter((section) => !section.hidden)
  }

  const content = getCaseStudyContent(project.id, language)
  if (content?.length) {
    return content.filter((section) => !section.hidden)
  }

  return getDefaultCaseStudySections(project)
}

export function isTimelineBlock(type: CaseStudyBlockType): boolean {
  return type === "design-process" || type === "process"
}

export function isResearchBlock(type: CaseStudyBlockType): boolean {
  return type === "research" || type === "research-findings"
}

export function isProblemBlock(type: CaseStudyBlockType): boolean {
  return (
    type === "problem" ||
    type === "opportunity" ||
    type === "challenge" ||
    type === "problem-definition"
  )
}

export function isDevelopmentBlock(type: CaseStudyBlockType): boolean {
  return (
    type === "development" ||
    type === "technical-decisions" ||
    type === "implementation" ||
    type === "technologies"
  )
}

export function isSolutionBlock(type: CaseStudyBlockType): boolean {
  return type === "final-solution" || type === "solution"
}

export function isResultsBlock(type: CaseStudyBlockType): boolean {
  return type === "result" || type === "learnings"
}

export function isTextBlock(type: CaseStudyBlockType): boolean {
  return [
    "context",
    "ideation",
    "wireframes",
    "prototyping",
    "ui-design",
    "design-system",
    "interaction-design",
    "personas",
    "journey",
    "user-flow",
    "information-architecture",
    "concept",
    "testing",
    "testing-results",
    "iterations",
    "features",
    "prototype",
    "metadata",
    "role",
    "year",
    "tools",
  ].includes(type)
}
