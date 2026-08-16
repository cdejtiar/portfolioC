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
  const items = section.items ?? [];
  const hasItems = items.length > 0;
  const image = section.image;

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

        {image && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
            className={`flex justify-center rounded-xl ${
              hasItems || section.body || section.subtitle ? "mt-16" : "mt-4"
            }`}
            style={{
              willChange: "transform",
              backfaceVisibility: "hidden",
              transform: "translateZ(0)",
            }}
          >
            <img
              src={resolveImage(image)}
              alt={`${project.title} final interface`}
              className="h-auto max-h-[560px] w-auto max-w-[85%] object-contain"
            />
          </motion.div>
        )}
      </SectionContainer>
    </SectionWrapper>
  );
}
