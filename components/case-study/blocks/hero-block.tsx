"use client"

import { motion } from "framer-motion"
import type { Project } from "@/lib/projects"
import type { CaseStudyLocale, ResolvedCaseStudySection } from "@/lib/case-study/types"
import { caseStudyTranslations } from "@/lib/case-study/translations"

interface HeroBlockProps {
  section: ResolvedCaseStudySection
  project: Project
  language: CaseStudyLocale
}

export function HeroBlock({ section, project, language }: HeroBlockProps) {
  const t = caseStudyTranslations[language]

  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative min-h-[620px] flex items-start"
    >
      <div className="container mx-auto max-w-6xl px-6 pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-6 text-[10px] font-medium uppercase tracking-[0.35em] text-primary"
          >
            {section.eyebrow ?? t.caseStudy}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="font-superlobster text-6xl leading-[0.92] tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-[88px] xl:text-[96px]"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-7 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base"
          >
            {project.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-x-10 gap-y-5"
          >
            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
                {t.role}
              </p>
              <p className="mt-2 text-xs text-foreground">
                {project.roleSummary || project.roles.join(" · ")}
              </p>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
                {t.tools}
              </p>
              <p className="mt-2 text-xs text-foreground">
                {project.technologies.join(", ")}
              </p>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
                {t.duration}
              </p>
              <p className="mt-2 text-xs text-foreground">
                {project.duration ||
                  (language === "es" ? "6 semanas" : "6 weeks")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#171323] to-transparent" />
    </motion.header>
  )
}
