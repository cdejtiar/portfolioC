"use client"

import type { CaseStudyLocale, ResolvedCaseStudySection } from "@/lib/case-study/types"
import { caseStudyTranslations } from "@/lib/case-study/translations"
import {
  FormattedText,
  SectionContainer,
  SectionWrapper,
} from "../shared/section-primitives"

interface ProblemBlockProps {
  section: ResolvedCaseStudySection
  language: CaseStudyLocale
}

export function ProblemBlock({ section, language }: ProblemBlockProps) {
  const t = caseStudyTranslations[language]
  const sideHighlight = section.sideHighlight

  return (
    <SectionWrapper>
      <SectionContainer>
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="max-w-3xl">
            <h2 className="font-superlobster text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
              {section.title}
            </h2>
            {section.body && (
              <FormattedText
                text={section.body}
                className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base"
              />
            )}
            {section.description && (
              <div className="mt-8 max-w-xl border-l-2 border-primary pl-5">
                <p className="text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
                  {t.whatIFound}
                </p>
                <FormattedText
                  text={section.description}
                  className="mt-3 text-xs leading-6 text-foreground/90"
                />
              </div>
            )}
          </div>
          {sideHighlight && (
            <div
              data-anim
              className="rounded-xl border border-cs-hairline bg-cs-card p-7 text-center transition-transform duration-300 ease-out hover:-translate-y-1.5"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M12 9v4"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 17h.01"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-foreground">
                {sideHighlight.title}
              </h3>
              <p className="mt-2 text-[11px] leading-5 text-muted-foreground">
                {sideHighlight.description}
              </p>
            </div>
          )}
        </div>
      </SectionContainer>
    </SectionWrapper>
  )
}