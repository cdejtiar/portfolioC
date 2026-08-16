"use client";

import { motion } from "framer-motion";
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
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center rounded-xl"
            style={{
              willChange: "transform",
              backfaceVisibility: "hidden",
              transform: "translateZ(0)",
            }}
          >
            <img
              src={resolveImage(section.image ?? project.image)}
              alt={`${project.title} final interface`}
              className="h-auto max-h-[560px] w-auto max-w-[85%] object-contain"
            />
          </motion.div>

          {section.subtitle && (
            <h3 className="mt-10 text-center text-xl font-semibold text-foreground">
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
            className="mx-auto mt-14 max-w-3xl text-center text-base leading-9 text-foreground/90 md:text-lg"
          />
        )}
      </SectionContainer>
    </SectionWrapper>
  );
}
