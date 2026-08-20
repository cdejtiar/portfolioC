"use client"

import { motion, useReducedMotion } from "framer-motion"
import { csEase } from "../shared/section-primitives"
import { ExternalLink, FileText, Github, Presentation } from "lucide-react"
import type { Project } from "@/lib/projects"
import type { CaseStudyLocale, ResolvedCaseStudySection } from "@/lib/case-study/types"
import { caseStudyTranslations } from "@/lib/case-study/translations"

interface HeroBlockProps {
  section: ResolvedCaseStudySection
  project: Project
  language: CaseStudyLocale
  projectType?: string
  year?: string
}

interface ProjectLink {
  href: string
  label: string
  icon: typeof ExternalLink
}

export function HeroBlock({
  section,
  project,
  language,
  projectType,
  year,
}: HeroBlockProps) {
  const t = caseStudyTranslations[language]
  const reduce = useReducedMotion()
  const words = project.title.split(" ")

  const rise = (delay: number) =>
    reduce
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3 } }
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { delay, duration: 0.7, ease: csEase },
        }

  const links: ProjectLink[] = [
    project.liveUrl && { href: project.liveUrl, label: t.viewLive, icon: ExternalLink },
    project.slidesUrl && { href: project.slidesUrl, label: t.viewPresentation, icon: Presentation },
    project.docsUrl && { href: project.docsUrl, label: t.viewProjectCharter, icon: FileText },
    project.docsUrl2 && { href: project.docsUrl2, label: t.viewResearch, icon: FileText },
    project.githubUrl && { href: project.githubUrl, label: t.viewCode, icon: Github },
  ].filter(Boolean) as ProjectLink[]

  return (
    <header className="relative flex min-h-[620px] items-start overflow-hidden bg-cs-surface">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(120% 80% at 12% 0%, color-mix(in oklab, var(--primary) 14%, transparent) 0%, transparent 60%)",
        }}
      />

      {!reduce && (
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.9, ease: csEase }}
          style={{ originY: 0 }}
          className="pointer-events-none absolute inset-0 z-20 bg-cs-surface-alt"
        />
      )}

      <div className="relative z-10 container mx-auto max-w-6xl px-6 pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="max-w-4xl">
          <motion.p
            {...rise(0.25)}
            className="mb-6 text-[10px] font-medium uppercase tracking-[0.35em] text-primary"
          >
            {section.eyebrow ?? t.caseStudy}
          </motion.p>

          <h1 className="font-superlobster text-6xl leading-[0.92] tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-[88px] xl:text-[96px]">
            {words.map((word, index) => (
              <span key={`${word}-${index}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                <motion.span
                  className="inline-block"
                  initial={reduce ? { opacity: 0 } : { y: "110%" }}
                  animate={reduce ? { opacity: 1 } : { y: "0%" }}
                  transition={{ delay: 0.35 + index * 0.07, duration: 0.85, ease: csEase }}
                >
                  {word}
                </motion.span>
                {index < words.length - 1 && <span>&nbsp;</span>}
              </span>
            ))}
          </h1>

          <motion.p
            {...rise(0.6)}
            className="mt-7 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base"
          >
            {project.description}
          </motion.p>

          <motion.div
            {...rise(0.72)}
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

            {projectType && (
              <div>
                <p className="text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
                  {t.projectType}
                </p>
                <p className="mt-2 text-xs text-foreground">{projectType}</p>
              </div>
            )}

            {year && (
              <div>
                <p className="text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
                  {t.year}
                </p>
                <p className="mt-2 text-xs text-foreground">{year}</p>
              </div>
            )}
          </motion.div>

          {links.length > 0 && (
            <motion.div
              {...rise(0.84)}
              className="mt-8 flex flex-wrap gap-3"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cs-hairline bg-cs-card px-4 py-2 text-xs text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <link.icon className="h-3.5 w-3.5" />
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cs-surface-alt to-transparent" />
    </header>
  )
}