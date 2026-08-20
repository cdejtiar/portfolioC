"use client"

import type { ResolvedCaseStudySection } from "@/lib/case-study/types"
import {
  CardGrid,
  InfoCard,
  SectionContainer,
  SectionWrapper,
} from "../shared/section-primitives"

interface OverviewBlockProps {
  section: ResolvedCaseStudySection
}

export function OverviewBlock({ section }: OverviewBlockProps) {
  const cards = section.cards ?? []

  return (
    <SectionWrapper className="bg-cs-surface-alt">
      <SectionContainer className="container mx-auto max-w-6xl px-6 py-16 md:py-20">
        <CardGrid
          columns={
            cards.length >= 4
              ? "sm:grid-cols-2 lg:grid-cols-4"
              : "md:grid-cols-3"
          }
        >
          {cards.map((card, index) => (
            <InfoCard
              key={card.title}
              label={card.title}
              value={card.description}
              delay={index * 0.08}
            />
          ))}
        </CardGrid>
      </SectionContainer>
    </SectionWrapper>
  )
}
