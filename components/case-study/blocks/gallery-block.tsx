"use client"

import { motion } from "framer-motion"
import type { ResolvedCaseStudySection } from "@/lib/case-study/types"
import {
  SectionContainer,
  SectionEyebrow,
  SectionTitle,
  SectionWrapper,
} from "../shared/section-primitives"

interface GalleryBlockProps {
  section: ResolvedCaseStudySection
  resolveImage: (img?: string) => string
}

export function GalleryBlock({ section, resolveImage }: GalleryBlockProps) {
  const images = section.images ?? []
  if (images.length === 0) return null

  return (
    <SectionWrapper>
      <SectionContainer>
        <div className="mb-10 max-w-2xl">
          {section.eyebrow && <SectionEyebrow>{section.eyebrow}</SectionEyebrow>}
          {section.title && (
            <SectionTitle className="mt-4 font-superlobster text-3xl text-foreground sm:text-4xl">
              {section.title}
            </SectionTitle>
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="overflow-hidden rounded-xl border border-cs-hairline bg-cs-card"
            >
              <div className="flex aspect-[4/3] w-full items-center justify-center bg-cs-surface-alt p-3">
                <img
                  src={resolveImage(img.src)}
                  alt={img.caption ?? section.title ?? ""}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              {img.caption && (
                <figcaption className="p-4 text-xs leading-6 text-muted-foreground">
                  {img.caption}
                </figcaption>
              )}
            </motion.figure>
          ))}
        </div>
      </SectionContainer>
    </SectionWrapper>
  )
}