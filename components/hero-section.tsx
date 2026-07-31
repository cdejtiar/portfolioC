"use client"

import { Button } from "@/components/ui/button"
import { getCvDownload } from "@/lib/cv"
import { ArrowDown } from "lucide-react"

interface HeroSectionProps {
  language: "es" | "en"
}

const translations = {
  es: {
    titleLine: "Diseñadora Multimedial • UX/UI Designer • Product Designer • Frontend Developer",
    description:
      "Diseño productos digitales centrados en las personas, combinando UX Research, Product Design y desarrollo frontend para transformar problemas complejos en experiencias intuitivas.",
    viewProjects: "Ver Proyectos",
    downloadCV: "Descargar CV",
  },
  en: {
    titleLine: "Multimedia Designer • UX/UI Designer • Product Designer • Frontend Developer",
    description:
      "I design people-centered digital products by combining UX research, product design, and frontend development to turn complex problems into intuitive experiences.",
    viewProjects: "View Projects",
    downloadCV: "Download CV",
  },
}

export function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language]
  const cv = getCvDownload(language)

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen pt-safe-top pb-safe-bottom flex items-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-10 w-44 h-44 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-16 right-10 w-72 h-72 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.32em] text-muted-foreground mb-5">Portfolio</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-foreground">
              Camila Dejtiar
            </h1>
            <p className="mt-4 text-lg font-semibold text-primary/80">{t.titleLine}</p>
            <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground">
              {t.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="rounded-2xl bg-primary text-primary-foreground px-8 py-4 shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all duration-300"
              >
                {t.viewProjects}
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-2xl px-8 py-4 text-base font-semibold transition-all duration-300">
                <a href={cv.href} download={cv.fileName}>
                  {t.downloadCV}
                </a>
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/10">
            <img
              src="/images/comingsoon.png"
              alt="inFLOW product preview"
              className="h-[520px] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent px-6 py-5">
              <p className="text-xs uppercase tracking-[0.32em] text-white/70">inFLOW</p>
              <p className="mt-2 text-sm text-white/90">Proyecto principal con enfoque en UX, UI y frontend.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ArrowDown className="h-6 w-6 text-muted-foreground animate-bounce" />
      </div>
    </section>
  )
}
