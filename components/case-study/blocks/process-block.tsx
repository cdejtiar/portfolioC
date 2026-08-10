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
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import type { ResolvedCaseStudySection } from "@/lib/case-study/types"
import {
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

        <div className="relative overflow-x-auto pb-6">
          <div className="relative min-w-[760px]">
            <div className="absolute left-8 right-8 top-6 h-px bg-white/15" />

            <div className="relative grid grid-cols-6 gap-4">
              {steps.map((step, idx) => {
                const isActive = idx === activeStepIndex
                const isDone = idx <= activeStepIndex
                const Icon = getStepIcon(step.title)

                return (
                  <motion.div
                    key={`${step.title}-${idx}`}
                    ref={(el) => {
                      stepRefs.current[idx] = el
                    }}
                    data-step-index={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="text-center"
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1.12 : 1,
                        backgroundColor: isDone
                          ? "var(--primary)"
                          : "rgba(255,255,255,0.06)",
                        borderColor: isDone
                          ? "var(--primary)"
                          : "rgba(255,255,255,0.12)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border"
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
                    </motion.div>

                    <p
                      className={`mt-5 text-[9px] font-semibold uppercase tracking-[0.2em] ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {step.title}
                    </p>

                    <p className="mx-auto mt-3 max-w-[130px] text-[10px] leading-5 text-muted-foreground">
                      {step.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </SectionContainer>
    </SectionWrapper>
  )
}
