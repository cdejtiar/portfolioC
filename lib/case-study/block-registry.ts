import type { CaseStudyBlockType } from "@/lib/case-study/types"

export type CaseStudyBlockCategory =
  | "general"
  | "ux-research"
  | "design"
  | "validation"
  | "development"
  | "closing"

export type CaseStudyBlockLayout =
  | "hero"
  | "overview"
  | "problem"
  | "timeline"
  | "research"
  | "decisions"
  | "development"
  | "solution"
  | "results"
  | "text"
  | "cards"
  | "before-after"
  | "gallery"

export interface CaseStudyBlockDefinition {
  type: CaseStudyBlockType
  category: CaseStudyBlockCategory
  layout: CaseStudyBlockLayout
}

export const CASE_STUDY_BLOCK_REGISTRY: Record<
  CaseStudyBlockType,
  CaseStudyBlockDefinition
> = {
  hero: { type: "hero", category: "general", layout: "hero" },
  overview: { type: "overview", category: "general", layout: "overview" },
  metadata: { type: "metadata", category: "general", layout: "overview" },
  role: { type: "role", category: "general", layout: "text" },
  year: { type: "year", category: "general", layout: "text" },
  tools: { type: "tools", category: "general", layout: "text" },
  context: { type: "context", category: "ux-research", layout: "text" },
  problem: { type: "problem", category: "ux-research", layout: "problem" },
  opportunity: {
    type: "opportunity",
    category: "ux-research",
    layout: "problem",
  },
  challenge: { type: "challenge", category: "ux-research", layout: "problem" },
  research: { type: "research", category: "ux-research", layout: "research" },
  "research-findings": {
    type: "research-findings",
    category: "ux-research",
    layout: "research",
  },
  "problem-definition": {
    type: "problem-definition",
    category: "ux-research",
    layout: "text",
  },
  personas: { type: "personas", category: "ux-research", layout: "cards" },
  journey: { type: "journey", category: "ux-research", layout: "text" },
  "user-flow": { type: "user-flow", category: "ux-research", layout: "text" },
  "information-architecture": {
    type: "information-architecture",
    category: "ux-research",
    layout: "text",
  },
  ideation: { type: "ideation", category: "design", layout: "text" },
  "design-process": {
    type: "design-process",
    category: "design",
    layout: "timeline",
  },
  process: { type: "process", category: "design", layout: "timeline" },
  wireframes: { type: "wireframes", category: "design", layout: "text" },
  prototyping: { type: "prototyping", category: "design", layout: "text" },
  prototype: { type: "prototype", category: "design", layout: "text" },
  "ui-design": { type: "ui-design", category: "design", layout: "text" },
  "design-system": {
    type: "design-system",
    category: "design",
    layout: "text",
  },
  "interaction-design": {
    type: "interaction-design",
    category: "design",
    layout: "text",
  },
  concept: { type: "concept", category: "design", layout: "text" },
  testing: { type: "testing", category: "validation", layout: "text" },
  "testing-results": {
    type: "testing-results",
    category: "validation",
    layout: "text",
  },
  iterations: { type: "iterations", category: "validation", layout: "text" },
  "before-after": {
    type: "before-after",
    category: "validation",
    layout: "before-after",
  },
  "design-decisions": {
    type: "design-decisions",
    category: "validation",
    layout: "decisions",
  },
  development: {
    type: "development",
    category: "development",
    layout: "development",
  },
  "technical-decisions": {
    type: "technical-decisions",
    category: "development",
    layout: "development",
  },
  technologies: {
    type: "technologies",
    category: "development",
    layout: "development",
  },
  implementation: {
    type: "implementation",
    category: "development",
    layout: "development",
  },
  features: { type: "features", category: "development", layout: "text" },
  "final-solution": {
    type: "final-solution",
    category: "closing",
    layout: "solution",
  },
  solution: { type: "solution", category: "closing", layout: "solution" },
  result: { type: "result", category: "closing", layout: "results" },
  learnings: { type: "learnings", category: "closing", layout: "results" },
}

export function getBlockLayout(type: CaseStudyBlockType): CaseStudyBlockLayout {
  return CASE_STUDY_BLOCK_REGISTRY[type].layout
}

export function getBlocksByCategory(
  category: CaseStudyBlockCategory,
): CaseStudyBlockDefinition[] {
  return Object.values(CASE_STUDY_BLOCK_REGISTRY).filter(
    (block) => block.category === category,
  )
}