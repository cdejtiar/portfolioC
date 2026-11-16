"use client"
import type { CaseStudyLocale, ResolvedCaseStudySection } from "@/lib/case-study/types"
import { caseStudyTranslations } from "@/lib/case-study/translations"
import {
  FormattedText,
  SectionContainer,
  SectionEyebrow,
  SectionWrapper,
} from "../shared/section-primitives"

interface ResultsBlockProps {
  resultSection?: ResolvedCaseStudySection
  learningsSection?: ResolvedCaseStudySection
  language: CaseStudyLocale
}

function ResultsColumn({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string
  title?: string
  items: string[]
}) {
  return (
    <div>
      {title && (
        <h3 className="mt-3 font-superlobster text-2xl text-foreground md:text-3xl">
          {title}
        </h3>
      )}
      <div className="text-sm leading-6 text-muted-foreground">
        {items.map((item) => (
          <FormattedText
            key={item}
            text={item}
            className="text-sm leading-7 text-muted-foreground"
          />
        ))}
      </div>
    </div>
  )
}

export function ResultsBlock({
  resultSection,
  learningsSection,
  language,
}: ResultsBlockProps) {
  const t = caseStudyTranslations[language]
  const resultItems = resultSection?.items ?? []
  const learningsItems = learningsSection?.items ?? []
  const hasBoth = resultItems.length > 0 && learningsItems.length > 0

  return (
    <SectionWrapper>
      <SectionContainer className="container mx-auto max-w-6xl px-6 pb-28 pt-8 md:pb-36">
        <div className="rounded-xl border border-cs-hairline bg-cs-card p-7 md:p-10">
          <SectionEyebrow>
            {language === "es" ? "Resultados y aprendizajes" : "Results & learnings"}
          </SectionEyebrow>

          {resultSection?.description && (
            <FormattedText
              text={resultSection.description}
              className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base"
            />
          )}

          <div className={`mt-10 grid gap-10 ${hasBoth ? "md:grid-cols-2" : ""}`}>
            {resultItems.length > 0 && (
              <ResultsColumn
                eyebrow={t.results}
                title={resultSection?.title}
                items={resultItems}
              />
            )}
            {learningsItems.length > 0 && (
              <div
                className={
                  hasBoth ? "md:border-l md:border-cs-hairline md:pl-10" : ""
                }
              >
                <ResultsColumn
                  eyebrow={t.learnings}
                  title={learningsSection?.title}
                  items={learningsItems}
                />
              </div>
            )}
          </div>
        </div>
      </SectionContainer>
    </SectionWrapper>
  )
}