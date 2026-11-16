import type { CaseStudyLocale, CaseStudySectionConfig } from "@/lib/case-study/types"

/**
 * Contenido de un caso de estudio: la misma secuencia de bloques en ES y EN.
 * Solo datos, sin JSX: la UI la resuelve el registry de bloques.
 */
export type CaseStudyContent = Record<CaseStudyLocale, CaseStudySectionConfig[]>

/** Helper de autoría: fuerza el chequeo de tipos en cada archivo de contenido. */
export function defineCaseStudy(content: CaseStudyContent): CaseStudyContent {
  return content
}
