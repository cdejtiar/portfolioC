import type { Project } from "@/lib/projects"

/** All supported case study block types, grouped by category. */
export type CaseStudyBlockType =
  // General
  | "hero"
  | "overview"
  | "metadata"
  | "role"
  | "year"
  | "tools"
  // UX / Research
  | "context"
  | "problem"
  | "opportunity"
  | "research"
  | "research-findings"
  | "problem-definition"
  | "personas"
  | "journey"
  | "user-flow"
  | "information-architecture"
  // Design
  | "ideation"
  | "design-process"
  | "wireframes"
  | "prototyping"
  | "ui-design"
  | "design-system"
  | "interaction-design"
  // Validation
  | "testing"
  | "testing-results"
  | "iterations"
  | "before-after"
  | "design-decisions"
  // Development / Technology
  | "development"
  | "technical-decisions"
  | "technologies"
  | "implementation"
  | "features"
  // Closing
  | "final-solution"
  | "result"
  | "learnings"
  // Flexible aliases (same visual patterns, different defaults)
  | "challenge"
  | "concept"
  | "process"
  | "solution"
  | "prototype"

export type CaseStudyLocale = "es" | "en"

export interface CaseStudyCard {
  title: string
  description: string
}

export interface CaseStudyHighlight {
  title: string
  detail: string
}

export interface CaseStudyProcessStep {
  label: string
  title: string
  description: string
}

export interface CaseStudyDecision {
  title: string
  problem: string
  decision: string
  impact: string
}

export interface CaseStudyBeforeAfter {
  before: { label?: string; description: string; image?: string }
  after: { label?: string; description: string; image?: string }
}

export interface CaseStudySideHighlight {
  title: string
  description: string
}

/** Per-section configuration. Content fields are optional overrides. */
export interface CaseStudySectionConfig {
  type: CaseStudyBlockType
  id?: string
  hidden?: boolean
  eyebrow?: string
  title?: string
  subtitle?: string
  description?: string
  body?: string
  items?: string[]
  cards?: CaseStudyCard[]
  highlights?: CaseStudyHighlight[]
  steps?: CaseStudyProcessStep[]
  decisions?: CaseStudyDecision[]
  beforeAfter?: CaseStudyBeforeAfter
  sideHighlight?: CaseStudySideHighlight
  image?: string
  variant?: "default" | "muted" | "accent"
}

/** Resolved section data ready for rendering. */
export interface ResolvedCaseStudySection {
  type: CaseStudyBlockType
  id: string
  eyebrow?: string
  title?: string
  subtitle?: string
  description?: string
  body?: string
  items?: string[]
  cards?: CaseStudyCard[]
  highlights?: CaseStudyHighlight[]
  steps?: CaseStudyProcessStep[]
  decisions?: CaseStudyDecision[]
  beforeAfter?: CaseStudyBeforeAfter
  sideHighlight?: CaseStudySideHighlight
  image?: string
  variant?: "default" | "muted" | "accent"
}

export interface CaseStudyRenderContext {
  project: Project
  language: CaseStudyLocale
  resolveImage: (img?: string) => string
}
