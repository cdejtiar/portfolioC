"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ImageIcon } from "lucide-react";
import type { Project } from "@/lib/projects";
import type {
  CaseStudyLocale,
  ResolvedCaseStudySection,
} from "@/lib/case-study/types";
import { caseStudyTranslations } from "@/lib/case-study/translations";
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

  const reduce = useReducedMotion();
  const showcaseRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], reduce ? [1, 1, 1] : [0.92, 1, 1.02]);
  const parallax = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [48, -36]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 1], reduce ? [1, 1, 1] : [0, 1, 1]);

  return (
    <SectionWrapper>
      <SectionContainer>
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
            <h3 className="text-center text-xl font-semibold text-foreground">
              {section.subtitle}
            </h3>
          )}

          {section.body && !bodyIsFlow && (
            <FormattedText
              text={section.body}
              className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-muted-foreground"
            />
          )}
        </div>

        {section.body && bodyIsFlow && (
          <FormattedText
            text={section.body}
            className="mx-auto mt-4 max-w-3xl text-center text-base leading-9 text-foreground/90 md:text-lg"
          />
        )}

        {hasItems && (
          <div
            className={`mx-auto max-w-4xl ${
              section.body || section.subtitle ? "mt-14" : "mt-2"
            }`}
          >
            <div className="grid gap-x-10 sm:grid-cols-2">
              {items.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                  className="flex items-start gap-4 border-b border-cs-hairline py-5"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <FormattedText
                    text={item}
                    className="text-sm leading-6 text-muted-foreground md:text-base"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        <motion.div
          ref={showcaseRef}
          style={{ scale, y: parallax, opacity }}
          className={`flex justify-center ${
            hasItems || section.body || section.subtitle ? "mt-16" : "mt-4"
          }`}
        >
          {image ? (
            <motion.img
              whileHover={{ scale: 1.01 }}
              src={resolveImage(image)}
              alt={`${project.title} final interface`}
              className="h-auto max-h-[560px] w-auto max-w-[85%] rounded-xl object-contain"
            />
          ) : (
            <div className="flex h-[320px] w-full max-w-[85%] flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-cs-hairline bg-cs-card md:h-[420px]">
              <ImageIcon className="h-6 w-6 text-muted-foreground/60" strokeWidth={1.5} />
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground/70">
                {t.finalSolutionImagePlaceholder}
              </p>
            </div>
          )}
        </motion.div>

      </SectionContainer>
    </SectionWrapper>
  );
}
