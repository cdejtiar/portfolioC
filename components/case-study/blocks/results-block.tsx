"use client"

import type { CaseStudyLocale, ResolvedCaseStudySection } from "@/lib/case-study/types"
import { caseStudyTranslations } from "@/lib/case-study/translations"
import { SectionContainer, SectionWrapper } from "../shared/section-primitives"

interface ResultsBlockProps {
  section: ResolvedCaseStudySection
  language: CaseStudyLocale
}

export function ResultsBlock({ section, language }: ResultsBlockProps) {
  const t = caseStudyTranslations[language]
  const items = section.items ?? []

  return (
    <SectionWrapper>
      <SectionContainer className="container mx-auto max-w-6xl px-6 pb-28 pt-8 md:pb-36">
        <div className="rounded-xl border border-cs-hairline bg-cs-card p-7 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[0.35fr_0.65fr]">
            <div className="md:border-r md:border-cs-hairline md:pr-8">
              <p className="font-superlobster text-4xl text-primary md:text-5xl">
                {section.description ? "✓" : "+40%"}
              </p>
              <p className="mt-3 text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                {language === "es" ? "Resultado del proyecto" : "Project outcome"}
              </p>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
                {t.results}
              </p>

              {section.title && (
                <h2 className="mt-3 font-superlobster text-2xl text-foreground md:text-3xl">
                  {section.title}
                </h2>
              )}

              <div className="mt-4 space-y-3">
                {items.map((item) => (
                  <p
                    key={item}
                    className="text-sm leading-7 text-muted-foreground"
                  >
                    {item}
                  </p>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-cs-hairline bg-cs-card px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                  {t.learnings}
                </span>
                <span className="rounded-full border border-cs-hairline bg-cs-card px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                  {t.impact}
                </span>
                <span className="rounded-full border border-cs-hairline bg-cs-card px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                  {t.nextSteps}
                </span>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </SectionWrapper>
  )
}
