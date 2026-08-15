"use client"

import { motion } from "framer-motion"
import type { ResolvedCaseStudySection } from "@/lib/case-study/types"
import {
  CardGrid,
  FormattedText,
  InfoCard,
  SectionContainer,
  SectionDescription,
  SectionEyebrow,
  SectionTitle,
  SectionWrapper,
} from "../shared/section-primitives"

interface TextBlockProps {
  section: ResolvedCaseStudySection
}

export function TextBlock({ section }: TextBlockProps) {
  const bgClass =
    section.variant === "muted"
      ? "bg-cs-surface-alt"
      : section.variant === "accent"
        ? "bg-cs-surface-accent"
        : "bg-cs-surface"

  return (
    <SectionWrapper className={bgClass}>
      <SectionContainer>
        <div className="max-w-3xl">
          {section.eyebrow && <SectionEyebrow>{section.eyebrow}</SectionEyebrow>}
          {section.title && <SectionTitle>{section.title}</SectionTitle>}
          {section.description && (
            <SectionDescription>{section.description}</SectionDescription>
          )}
          {section.body && (
            <FormattedText text={section.body} className="mt-6 text-sm leading-7 text-muted-foreground md:text-base" />
          )}
        </div>

        {section.items && section.items.length > 0 && (
          <div className="mt-8 space-y-4">
            {section.items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <FormattedText text={item} className="text-sm leading-6 text-muted-foreground md:text-base" />
              </div>
            ))}
          </div>
        )}

        {section.cards && section.cards.length > 0 && (
          <div className="mt-10">
          <CardGrid>
            {section.cards.map((card, index) => (
              <InfoCard
                key={card.title}
                label={card.title}
                value={card.description}
                delay={index * 0.08}
              />
            ))}
          </CardGrid>
          </div>
        )}
      </SectionContainer>
    </SectionWrapper>
  )
}

interface CardsBlockProps {
  section: ResolvedCaseStudySection
}

export function CardsBlock({ section }: CardsBlockProps) {
  const cards = section.cards ?? section.highlights?.map((h) => ({
    title: h.title,
    description: h.detail,
  })) ?? []

  return (
    <SectionWrapper className={section.variant === "accent" ? "bg-cs-surface-accent" : "bg-cs-surface"}>
      <SectionContainer>
        <div className="mb-10 max-w-2xl">
          {section.eyebrow && <SectionEyebrow>{section.eyebrow}</SectionEyebrow>}
          {section.title && <SectionTitle>{section.title}</SectionTitle>}
          {section.description && (
            <SectionDescription>{section.description}</SectionDescription>
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-xl border border-cs-hairline bg-cs-card p-6"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {card.title}
              </h3>
              <FormattedText
                text={card.description}
                className="mt-4 text-sm leading-7 text-muted-foreground"
              />
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </SectionWrapper>
  )
}

interface BeforeAfterBlockProps {
  section: ResolvedCaseStudySection
  resolveImage: (img?: string) => string
}

export function BeforeAfterBlock({
  section,
  resolveImage,
}: BeforeAfterBlockProps) {
  const { beforeAfter } = section
  if (!beforeAfter) return null

  return (
    <SectionWrapper>
      <SectionContainer>
        <div className="mb-10 max-w-2xl">
          {section.eyebrow && <SectionEyebrow>{section.eyebrow}</SectionEyebrow>}
          {section.title && <SectionTitle>{section.title}</SectionTitle>}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[beforeAfter.before, beforeAfter.after].map((side, index) => (
            <div
              key={index}
              className="rounded-xl border border-cs-hairline bg-cs-card p-6"
            >
              {side.label && (
                <p className="text-[9px] uppercase tracking-[0.28em] text-primary">
                  {side.label}
                </p>
              )}
              {side.image && (
                <img
                  src={resolveImage(side.image)}
                  alt={side.label ?? ""}
                  className="mt-4 h-48 w-full rounded-lg object-cover"
                />
              )}
              <FormattedText
                text={side.description}
                className="mt-4 text-sm leading-7 text-muted-foreground"
              />
            </div>
          ))}
        </div>
      </SectionContainer>
    </SectionWrapper>
  )
}