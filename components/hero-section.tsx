"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { getCvDownload } from "@/lib/cv"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { RichText } from "@/components/rich-text"

const HeroCanvas = dynamic(
  () => import("@/components/animation/hero-canvas").then((m) => m.HeroCanvas),
  { ssr: false },
)

interface HeroSectionProps {
  language: "es" | "en"
}

const translations = {
  es: {
    titleLine: "Diseñadora Multimedial • UX/UI Designer • Product Designer • Frontend Developer",
    description:
      "Diseño **productos digitales centrados en las personas**, combinando **UX Research**, **Product Design** y **desarrollo frontend** para transformar problemas complejos en **experiencias intuitivas**.",
    viewProjects: "Ver Proyectos",
    downloadCV: "Descargar CV",
  },
  en: {
    titleLine: "Multimedia Designer • UX/UI Designer • Product Designer • Frontend Developer",
    description:
      "I design **people-centered digital products** by combining **UX research**, **product design**, and **frontend development** to turn complex problems into **intuitive experiences**.",
    viewProjects: "View Projects",
    downloadCV: "Download CV",
  },
}

/** Sólo carga la escena 3D si el dispositivo y las preferencias lo permiten. */
function useCanvasEligible() {
  const [eligible, setEligible] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const wideEnough = window.matchMedia("(min-width: 768px)").matches
    const cores = navigator.hardwareConcurrency ?? 8
    setEligible(!reduce && wideEnough && cores > 4)
  }, [])

  return eligible
}

export function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language]
  const cv = getCvDownload(language)
  const canvasEligible = useCanvasEligible()

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
    <section id="home" className="relative min-h-screen pt-safe-top pb-safe-bottom flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-10 w-44 h-44 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-16 right-10 w-72 h-72 rounded-full bg-secondary/10 blur-3xl" />
        {canvasEligible && (
          <div className="absolute inset-0 opacity-60">
            <HeroCanvas />
          </div>
        )}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-center">
          <div className="w-full max-w-3xl text-center lg:text-left">
            <p className="text-sm uppercase tracking-[0.32em] text-muted-foreground mb-5">Portfolio</p>
            <h1 className="font-superlobster text-5xl md:text-8xl font-bold mb-4 gradient-text animate-fade-in-up">
              Camila Dejtiar
            </h1>
            <p className="mt-4 text-lg font-semibold text-primary/80">{t.titleLine}</p>
            <p className="mt-8 max-w-2xl mx-auto text-base leading-8 text-muted-foreground lg:mx-0">
              <RichText text={t.description} />
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center justify-center lg:justify-start">
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
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ArrowDown className="h-6 w-6 text-muted-foreground animate-bounce" />
      </div>
    </section>
    </motion.div>
  )
}
