"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import type { Project } from "@/lib/projects"
import type { CaseStudyLocale } from "@/lib/case-study/types"
import { caseStudyTranslations } from "@/lib/case-study/translations"
import { SectionContainer, SectionWrapper } from "./shared/section-primitives"

interface NextProjectCardProps {
  project: Project
  language: CaseStudyLocale
  resolveImage: (img?: string) => string
}

export function NextProjectCard({
  project,
  language,
  resolveImage,
}: NextProjectCardProps) {
  const t = caseStudyTranslations[language]

  return (
    <SectionWrapper>
      <SectionContainer className="container mx-auto max-w-6xl px-6 pb-28 pt-8 md:pb-36">
        <Link href={`/project/${project.id}`}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-xl border border-cs-hairline bg-cs-card"
          >
            <div className="grid items-center gap-8 p-8 md:grid-cols-[0.45fr_0.55fr] md:p-12">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={resolveImage(project.image)}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-64"
                />
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.28em] text-primary">
                  {t.nextProject}
                </p>
                <h3 className="mt-3 font-superlobster text-3xl text-foreground md:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                  {project.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors group-hover:text-primary">
                  {t.viewProject}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </motion.div>
        </Link>
      </SectionContainer>
    </SectionWrapper>
  )
}