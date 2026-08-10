"use client"

import { motion } from "framer-motion"
import type { Project } from "@/lib/projects"
import type { CaseStudyLocale, ResolvedCaseStudySection } from "@/lib/case-study/types"
import { caseStudyTranslations } from "@/lib/case-study/translations"
import {
  SectionContainer,
  SectionDescription,
  SectionEyebrow,
  SectionTitle,
  SectionWrapper,
} from "../shared/section-primitives"

interface FinalSolutionBlockProps {
  section: ResolvedCaseStudySection
  project: Project
  language: CaseStudyLocale
  resolveImage: (img?: string) => string
}

export function FinalSolutionBlock({
  section,
  project,
  language,
  resolveImage,
}: FinalSolutionBlockProps) {
  const t = caseStudyTranslations[language]
  const features = section.items ?? project.features

  return (
    <SectionWrapper>
      <SectionContainer>
        <div className="mb-14 text-center">
          <SectionEyebrow>{section.eyebrow ?? t.finalSolution}</SectionEyebrow>
          {section.title && (
            <SectionTitle className="mt-4 font-superlobster text-4xl text-foreground sm:text-5xl">
              {section.title}
            </SectionTitle>
          )}
          {section.description && (
            <SectionDescription className="mx-auto mt-5 max-w-2xl">
              {section.description}
            </SectionDescription>
          )}
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              src={resolveImage(section.image ?? project.image)}
              alt={`${project.title} final interface`}
              className="h-[360px] w-full object-cover md:h-[480px]"
            />
          </motion.div>

          <div>
            {section.subtitle && (
              <h3 className="text-xl font-semibold text-foreground">
                {section.subtitle}
              </h3>
            )}

            {section.body && (
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {section.body}
              </p>
            )}

            <div className="mt-7 space-y-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </SectionWrapper>
  )
}
