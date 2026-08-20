"use client"

import {
  Compass,
  MapPin,
  PenTool,
  Repeat,
  Search,
  Target,
  type LucideIcon,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { CS_EASE, useGsapEffect } from "@/lib/animation/gsap"
import type { ResolvedCaseStudySection } from "@/lib/case-study/types"
import {
  FormattedText,
  SectionContainer,
  SectionEyebrow,
  SectionTitle,
  SectionWrapper,
} from "../shared/section-primitives"

function getStepIcon(title: string): LucideIcon {
  const key = title.toLowerCase()
  if (key.includes("invest") || key.includes("research")) return Search
  if (key.includes("defini")) return Compass
  if (key.includes("idea")) return MapPin
  if (key.includes("diseñ") || key.includes("design")) return PenTool
  if (key.includes("test")) return Target
  if (key.includes("iterac") || key.includes("iterat")) return Repeat
  return Search
}

interface ProcessBlockProps {
  section: ResolvedCaseStudySection
}

export function ProcessBlock({ section }: ProcessBlockProps) {
  const steps = section.steps ?? []
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const timelineRef = useRef<HTMLDivElement>(null)

  // La línea del proceso se "dibuja" con el scroll y los pasos entran en cascada.
  useGsapEffect(
    timelineRef,
    ({ gsap, scope }) => {
      gsap.fromTo(
        scope.querySelector("[data-process-line]"),
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left center",
          ease: "none",
          scrollTrigger: {
            trigger: scope,
            start: "top 80%",
            end: "bottom 55%",
            scrub: 0.5,
          },
        },
      )

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-step-index"))
            setActiveStepIndex(idx)
          }
        })
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    )

    stepRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [steps])

  return (
    <SectionWrapper>
      <SectionContainer>
        <div className="mb-16 text-center">
          {section.eyebrow && <SectionEyebrow>{section.eyebrow}</SectionEyebrow>}
          {section.title && (
            <SectionTitle className="mt-4 font-superlobster text-4xl text-foreground md:text-5xl">
              {section.title}
            </SectionTitle>
          )}
        </div>

        <div ref={timelineRef} className="relative overflow-x-auto pb-6">
          <div className="relative min-w-[760px]">
            <div className="absolute left-8 right-8 top-6 h-px bg-cs-hairline" />
            <div
              data-process-line
              className="absolute left-8 right-8 top-6 h-px origin-left bg-primary"
            />

            <div className="relative grid grid-cols-6 gap-4">
              {steps.map((step, idx) => {
                const isActive = idx === activeStepIndex
                const isDone = idx <= activeStepIndex
                const Icon = getStepIcon(step.title)

                return (
                  <div
                    key={`${step.title}-${idx}`}
                    ref={(el) => {
                      stepRefs.current[idx] = el
                    }}
                    data-step-index={idx}
                    data-process-step
                    className="text-center"
                  >
                    <div
                      className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ease-out"
                      style={{
                        transform: `scale(${isActive ? 1.12 : 1})`,
                        backgroundColor: isDone
                          ? "var(--primary)"
                          : "var(--cs-card)",
                        borderColor: isDone
                          ? "var(--primary)"
                          : "var(--cs-hairline)",
                      }}
                    >
                      <Icon
                        className="h-4 w-4"
                        style={{
                          color: isDone
                            ? "var(--primary-foreground)"
                            : "var(--muted-foreground)",
                        }}
                        strokeWidth={1.8}
                      />
                    </div>

                    <p
                      className={`mt-5 text-[9px] font-semibold uppercase tracking-[0.2em] ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {step.title}
                    </p>

                    <FormattedText
                      text={step.description}
                      className="mx-auto mt-3 max-w-[130px] text-[10px] leading-5 text-muted-foreground"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </SectionContainer>
    </SectionWrapper>
  )
}