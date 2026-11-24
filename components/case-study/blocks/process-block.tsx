"use client"

import { useRef } from "react"
import { CS_EASE, useGsapEffect } from "@/lib/animation/gsap"
import type { ResolvedCaseStudySection } from "@/lib/case-study/types"
import {
  FormattedText,
  SectionContainer,
  SectionEyebrow,
  SectionTitle,
  SectionWrapper,
} from "../shared/section-primitives"

interface ProcessBlockProps {
  section: ResolvedCaseStudySection
}

export function ProcessBlock({ section }: ProcessBlockProps) {
  const steps = section.steps ?? []
  const timelineRef = useRef<HTMLOListElement>(null)

  useGsapEffect(
    timelineRef,
    ({ gsap, scope }) => {
      gsap.fromTo(
        scope.querySelectorAll("[data-process-step]"),
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: CS_EASE,
          stagger: 0.08,
          scrollTrigger: { trigger: scope, start: "top 82%", once: true },
        },
      )
    },
    [steps.length],
  )

  return (
    <SectionWrapper>
      <SectionContainer>
        <div className="mb-10 text-center sm:mb-12">
          {section.eyebrow && <SectionEyebrow>{section.eyebrow}</SectionEyebrow>}
          {section.title && (
            <SectionTitle className="mt-4 font-superlobster text-4xl text-foreground md:text-5xl">
              {section.title}
            </SectionTitle>
          )}
        </div>

        <ol
          ref={timelineRef}
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
        >
          {steps.map((step, idx) => (
            <li
              key={`${step.title}-${idx}`}
              data-process-step
              className="h-full rounded-2xl border border-cs-hairline bg-cs-card p-5 transition-colors hover:border-primary/40 sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold tracking-wider text-primary">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-cs-hairline"
                />
              </div>

              <h3 className="mt-5 text-base font-semibold leading-6 text-foreground">
                {step.title}
              </h3>
              <FormattedText
                text={step.description}
                className="mt-3 text-sm leading-6 text-muted-foreground"
              />
            </li>
          ))}
        </ol>
      </SectionContainer>
    </SectionWrapper>
  )
}
