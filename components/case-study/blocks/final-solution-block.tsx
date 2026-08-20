"use client";

import { useRef } from "react";
import { ImageIcon } from "lucide-react";
import type { Project } from "@/lib/projects";
import type {
  CaseStudyLocale,
  ResolvedCaseStudySection,
} from "@/lib/case-study/types";
import { caseStudyTranslations } from "@/lib/case-study/translations";
import { CS_EASE, useGsapEffect } from "@/lib/animation/gsap";
import {
  FormattedText,
  SectionContainer,
  SectionDescription,
  SectionEyebrow,
  SectionTitle,
  SectionWrapper,
} from "../shared/section-primitives";

interface FinalSolutionBlockProps {
  section: ResolvedCaseStudySection;
  project: Project;
  language: CaseStudyLocale;
  resolveImage: (img?: string) => string;
}

export function FinalSolutionBlock({
  section,
  project,
  language,
  resolveImage,
}: FinalSolutionBlockProps) {
  const t = caseStudyTranslations[language];
  const bodyIsFlow = section.body?.includes("→") ?? false;
  const items = section.items ?? [];
  const hasItems = items.length > 0;
  const image = section.image;

  const showcaseRef = useRef<HTMLDivElement>(null);

  useGsapEffect(showcaseRef, ({ gsap, scope }) => {
    const media = scope.querySelector("[data-showcase-media]");
    if (!media) return;

    // Reveal atado al progreso de scroll: la interfaz se descubre con máscara,
    // escala y sube mientras la sección atraviesa el viewport.
    gsap.fromTo(
      media,
      {
        clipPath: "inset(12% 8% 12% 8% round 0px)",
        scale: 0.9,
        yPercent: 6,
        filter: "blur(8px)",
      },
      {
        clipPath: "inset(0% 0% 0% 0% round 0px)",
        scale: 1,
        yPercent: 0,
        filter: "blur(0px)",
        ease: "none",
        scrollTrigger: {
          trigger: scope,
          start: "top 88%",
          end: "center 45%",
          scrub: 0.6,
        },
      },
    );

    const bullets = scope.parentElement?.querySelectorAll("[data-solution-item]");
    if (bullets && bullets.length > 0) {
      gsap.fromTo(
        bullets,
        { autoAlpha: 0, x: -18 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.7,
          ease: CS_EASE,
          stagger: 0.08,
          scrollTrigger: { trigger: bullets[0], start: "top 88%", once: true },
        },
      );
    }
  });

  return (
    <SectionWrapper>
      <SectionContainer className="container mx-auto max-w-6xl px-6 pt-24 md:pt-28">
        <div className="mb-14 text-center">
          <SectionEyebrow>{section.eyebrow ?? t.finalSolution}</SectionEyebrow>
          {section.title && (
            <SectionTitle className="mt-4 font-superlobster text-4xl text-foreground sm:text-5xl">
              {section.title}
            </SectionTitle>
          )}
          {section.description && (
            <SectionDescription className="mx-auto mt-5 max-w-2xl">
              {section.description}
            </SectionDescription>
          )}
        </div>

        <div className="flex flex-col items-center">
          {section.subtitle && (
            <h3
              data-anim
              className="text-center text-xl font-semibold text-foreground"
            >
              {section.subtitle}
            </h3>
          )}

          {section.body && !bodyIsFlow && (
            <div data-anim>
              <FormattedText
                text={section.body}
                className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-muted-foreground"
              />
            </div>
          )}
        </div>

        {section.body && bodyIsFlow && (
          <div data-anim>
            <FormattedText
              text={section.body}
              className="mx-auto mt-4 max-w-3xl text-center text-base leading-9 text-foreground/90 md:text-lg"
            />
          </div>
        )}

        {hasItems && (
          <div
            className={`mx-auto max-w-4xl ${
              section.body || section.subtitle ? "mt-14" : "mt-2"
            }`}
          >
            <div className="grid gap-x-10 sm:grid-cols-2">
              {items.map((item) => (
                <div
                  key={item}
                  data-solution-item
                  className="flex items-start gap-4 border-b border-cs-hairline py-5"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <FormattedText
                    text={item}
                    className="text-sm leading-6 text-muted-foreground md:text-base"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </SectionContainer>

      <div
        ref={showcaseRef}
        className="w-full pb-24 md:pb-28"
      >
        {image ? (
          <img
            data-showcase-media
            src={resolveImage(image)}
            alt={`${project.title} final interface`}
            className="block h-auto w-full object-contain will-change-transform"
          />
        ) : (
          <div
            data-showcase-media
            className="flex h-[320px] w-full flex-col items-center justify-center gap-3 border-y border-dashed border-cs-hairline bg-cs-card md:h-[460px]"
          >
            <ImageIcon
              className="h-6 w-6 text-muted-foreground/60"
              strokeWidth={1.5}
            />
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground/70">
              {t.finalSolutionImagePlaceholder}
            </p>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
