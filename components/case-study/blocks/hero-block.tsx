"use client";

import { useRef } from "react";
import { ExternalLink, FileText, Github, Presentation } from "lucide-react";
import type { Project } from "@/lib/projects";
import type {
  CaseStudyLocale,
  ResolvedCaseStudySection,
} from "@/lib/case-study/types";
import { caseStudyTranslations } from "@/lib/case-study/translations";
import { CS_EASE, useGsapEffect } from "@/lib/animation/gsap";

interface HeroBlockProps {
  section: ResolvedCaseStudySection;
  project: Project;
  language: CaseStudyLocale;
  projectType?: string;
  year?: string;
}

interface ProjectLink {
  href: string;
  label: string;
  icon: typeof ExternalLink;
}

export function HeroBlock({
  section,
  project,
  language,
  projectType,
  year,
}: HeroBlockProps) {
  const t = caseStudyTranslations[language];
  const words = project.title.split(" ");
  const rootRef = useRef<HTMLElement>(null);

  useGsapEffect(rootRef, ({ gsap, scope }) => {
    const tl = gsap.timeline({ defaults: { ease: CS_EASE } });

    tl.fromTo(
      scope.querySelector("[data-curtain]"),
      { scaleY: 1 },
      { scaleY: 0, duration: 1, transformOrigin: "top center" },
    )
      .fromTo(
        scope.querySelectorAll("[data-word]"),
        { yPercent: 118, rotate: 3 },
        { yPercent: 0, rotate: 0, duration: 1.1, stagger: 0.07 },
        0.3,
      )
      .fromTo(
        scope.querySelectorAll("[data-anim]"),
        { autoAlpha: 0, y: 22 },
        { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.08 },
        0.45,
      );

    // Parallax suave del halo de fondo al scrollear.
    gsap.to(scope.querySelector("[data-halo]"), {
      yPercent: 22,
      ease: "none",
      scrollTrigger: {
        trigger: scope,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  const links: ProjectLink[] = [
    project.liveUrl && {
      href: project.liveUrl,
      label: t.viewLive,
      icon: ExternalLink,
    },
    project.slidesUrl && {
      href: project.slidesUrl,
      label: t.viewPresentation,
      icon: Presentation,
    },
    project.docsUrl && {
      href: project.docsUrl,
      label: t.viewProjectCharter,
      icon: FileText,
    },
    project.docsUrl2 && {
      href: project.docsUrl2,
      label: t.viewResearch,
      icon: FileText,
    },
    project.githubUrl && {
      href: project.githubUrl,
      label: t.viewCode,
      icon: Github,
    },
  ].filter(Boolean) as ProjectLink[];

  return (
    <header
      ref={rootRef}
      className="relative flex min-h-[620px] items-start overflow-hidden bg-cs-surface"
    >
      <div
        data-halo
        className="pointer-events-none absolute -inset-y-24 inset-x-0 opacity-70"
        style={{
          background:
            "radial-gradient(120% 80% at 12% 0%, color-mix(in oklab, var(--primary) 14%, transparent) 0%, transparent 60%)",
        }}
      />

      <div
        data-curtain
        className="pointer-events-none absolute inset-0 z-20 origin-top bg-cs-surface-alt"
      />

      <div className="relative z-10 container mx-auto max-w-6xl px-6 pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="max-w-4xl">
          <p
            data-anim
            className="mb-6 text-[10px] font-medium uppercase tracking-[0.35em] text-primary"
          >
            {section.eyebrow ?? t.caseStudy}
          </p>

          <h1 className="font-superlobster text-6xl leading-[0.92] tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-[88px] xl:text-[96px]">
            {words.map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="inline-block overflow-hidden pb-[0.08em] align-bottom"
              >
                <span data-word className="inline-block">
                  {word}
                </span>
                {index < words.length - 1 && <span>&nbsp;</span>}
              </span>
            ))}
          </h1>

          <p
            data-anim
            className="mt-7 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base"
          >
            {project.description}
          </p>

          <div data-anim className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
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
          </div>

          {links.length > 0 && (
            <div data-anim className="mt-8 flex flex-wrap gap-3">
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
            </div>
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cs-surface-alt to-transparent" />
    </header>
  );
}
