"use client"

import { motion } from "framer-motion"
import type { ResolvedCaseStudySection } from "@/lib/case-study/types"
import {
  SectionContainer,
  SectionDescription,
  SectionEyebrow,
  SectionWrapper,
} from "../shared/section-primitives"

interface ResearchBlockProps {
  section: ResolvedCaseStudySection
}

export function ResearchBlock({ section }: ResearchBlockProps) {
  const highlights = section.highlights ?? []
  const title = section.title ?? ""
  const [prefix, suffix] = title.includes("Usuario")
    ? ["Voz del ", "Usuario."]
    : title.includes("User")
      ? ["Voice of the ", "User."]
      : [title, ""]

  return (
    <SectionWrapper>
      <SectionContainer>
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            {section.eyebrow && <SectionEyebrow>{section.eyebrow}</SectionEyebrow>}

            <h2 className="mt-4 font-superlobster text-4xl leading-tight text-foreground sm:text-5xl">
              {suffix ? (
                <>
                  {prefix}
                  <span className="text-primary">{suffix}</span>
                </>
              ) : (
                title
              )}
            </h2>

            {section.description && (
              <SectionDescription className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
                {section.description}
              </SectionDescription>
            )}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-xl border border-white/[0.06] bg-[#211c2d] p-6"
              >
                <span className="font-serif text-xl text-primary/70">“</span>
                <p className="mt-2 text-sm leading-7 text-foreground/90">
                  {item.detail}
                </p>
                <p className="mt-5 text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                  — {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </SectionWrapper>
  )
}
