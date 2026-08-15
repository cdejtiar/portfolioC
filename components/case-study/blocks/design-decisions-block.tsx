"use client"

import { motion } from "framer-motion"
import type { CaseStudyLocale, ResolvedCaseStudySection } from "@/lib/case-study/types"
import {
  FormattedText,
  SectionContainer,
  SectionEyebrow,
  SectionTitle,
  SectionWrapper,
} from "../shared/section-primitives"

interface DesignDecisionsBlockProps {
  section: ResolvedCaseStudySection
  language: CaseStudyLocale
}

export function DesignDecisionsBlock({
  section,
  language,
}: DesignDecisionsBlockProps) {
  const decisions = section.decisions ?? []

  return (
    <SectionWrapper className="bg-cs-surface-accent">
      <SectionContainer>
        <div className="mb-12">
          {section.eyebrow && <SectionEyebrow>{section.eyebrow}</SectionEyebrow>}
          {section.title && <SectionTitle>{section.title}</SectionTitle>}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {decisions.map((decision, index) => (
            <motion.div
              key={decision.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-lg border border-cs-hairline bg-cs-surface p-6"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {decision.title}
              </h3>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.25em] text-primary">
                    {language === "es" ? "Problema" : "Problem"}
                  </p>
                  <FormattedText
                    text={decision.problem}
                    className="mt-2 text-[11px] leading-5 text-muted-foreground"
                  />
                </div>

                <div>
                  <p className="text-[8px] uppercase tracking-[0.25em] text-primary">
                    {language === "es" ? "Decisión" : "Decision"}
                  </p>
                  <FormattedText
                    text={decision.decision}
                    className="mt-2 text-[11px] leading-5 text-muted-foreground"
                  />
                </div>

                <div>
                  <p className="text-[8px] uppercase tracking-[0.25em] text-primary">
                    {language === "es" ? "Impacto" : "Impact"}
                  </p>
                  <FormattedText
                    text={decision.impact}
                    className="mt-2 text-[11px] leading-5 text-muted-foreground"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </SectionWrapper>
  )
}