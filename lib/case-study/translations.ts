import type { CaseStudyBlockType, CaseStudyLocale } from "./types"

type CaseStudyUiKey =
  | "caseStudy"
  | "backToProjects"
  | "projectNotFound"
  | "whatIFound"
  | "whatIChanged"
  | "impact"
  | "nextSteps"
  | "quickRead"
  | "viewLive"
  | "viewPresentation"
  | "viewProjectCharter"
  | "viewResearch"
  | "viewCode"
  | "context"
  | "role"
  | "team"
  | "duration"
  | "tools"
  | "outcome"
  | "overview"
  | "problemOpportunity"
  | "process"
  | "research"
  | "decisions"
  | "finalSolution"
  | "results"
  | "learnings"

export type CaseStudyTranslations = Record<CaseStudyUiKey, string> &
  Record<CaseStudyBlockType, string>

const es: CaseStudyTranslations = {
  caseStudy: "Caso de estudio",
  backToProjects: "Volver a Proyectos",
  projectNotFound: "Proyecto no encontrado",
  overview: "Resumen del proyecto",
  context: "Contexto",
  role: "Rol",
  team: "Equipo",
  duration: "Duración",
  tools: "Herramientas",
  outcome: "Resultado",
  year: "Año",
  problemOpportunity: "Problema y oportunidad",
  process: "Proceso de diseño",
  research: "Investigación y descubrimientos",
  decisions: "Decisiones de diseño",
  finalSolution: "Solución final",
  results: "Resultados y aprendizajes",
  learnings: "Aprendizajes",
  quickRead: "Lectura rápida",
  whatIFound: "Qué descubrí",
  whatIChanged: "Qué decidí",
  impact: "Impacto",
  nextSteps: "Próximos pasos",
  viewLive: "Ver en Vivo",
  viewPresentation: "Ver Presentación",
  viewProjectCharter: "Ver Acta de Proyecto",
  viewResearch: "Ver Investigación",
  viewCode: "Ver Código",
  hero: "Caso de estudio",
  metadata: "Información del proyecto",
  problem: "Problema y oportunidad",
  opportunity: "Oportunidad",
  "research-findings": "Hallazgos de investigación",
  "problem-definition": "Definición del problema",
  personas: "Personas",
  journey: "User Journey",
  "user-flow": "User Flow",
  "information-architecture": "Arquitectura de información",
  ideation: "Ideación",
  "design-process": "Proceso de diseño",
  wireframes: "Wireframes",
  prototyping: "Prototipado",
  "ui-design": "Diseño UI",
  "design-system": "Design System",
  "interaction-design": "Diseño de interacción",
  testing: "Testing",
  "testing-results": "Resultados de testing",
  iterations: "Iteraciones",
  "before-after": "Antes y después",
  "design-decisions": "Decisiones de diseño",
  development: "Implementación técnica",
  "technical-decisions": "Decisiones técnicas",
  technologies: "Tecnologías",
  implementation: "Implementación",
  features: "Funcionalidades",
  result: "Resultados",
  challenge: "Desafío",
  concept: "Concepto",
  solution: "Solución",
  prototype: "Prototipo",
}

const en: CaseStudyTranslations = {
  caseStudy: "Case study",
  backToProjects: "Back to Projects",
  projectNotFound: "Project not found",
  overview: "Project overview",
  context: "Context",
  role: "Role",
  team: "Team",
  duration: "Duration",
  tools: "Tools",
  outcome: "Outcome",
  year: "Year",
  problemOpportunity: "Problem and opportunity",
  process: "Design process",
  research: "Research and insights",
  decisions: "Design decisions",
  finalSolution: "Final solution",
  results: "Results and learnings",
  learnings: "Learnings",
  quickRead: "Quick read",
  whatIFound: "What I found",
  whatIChanged: "What I chose",
  impact: "Impact",
  nextSteps: "Next steps",
  viewLive: "View Live",
  viewPresentation: "View Presentation",
  viewProjectCharter: "View Project Charter",
  viewResearch: "View Research",
  viewCode: "View Code",
  hero: "Case study",
  metadata: "Project information",
  problem: "Problem and opportunity",
  opportunity: "Opportunity",
  "research-findings": "Research findings",
  "problem-definition": "Problem definition",
  personas: "Personas",
  journey: "User Journey",
  "user-flow": "User Flow",
  "information-architecture": "Information Architecture",
  ideation: "Ideation",
  "design-process": "Design process",
  wireframes: "Wireframes",
  prototyping: "Prototyping",
  "ui-design": "UI Design",
  "design-system": "Design System",
  "interaction-design": "Interaction design",
  testing: "Testing",
  "testing-results": "Testing results",
  iterations: "Iterations",
  "before-after": "Before & after",
  "design-decisions": "Design decisions",
  development: "Technical implementation",
  "technical-decisions": "Technical decisions",
  technologies: "Technologies",
  implementation: "Implementation",
  features: "Features",
  result: "Results",
  challenge: "Challenge",
  concept: "Concept",
  solution: "Solution",
  prototype: "Prototype",
}

export const caseStudyTranslations: Record<CaseStudyLocale, CaseStudyTranslations> = {
  es,
  en,
}

export function getBlockLabel(
  type: CaseStudyBlockType,
  language: CaseStudyLocale,
): string {
  return caseStudyTranslations[language][type] ?? type
}
