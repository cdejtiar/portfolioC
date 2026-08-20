"use client"

import { Button } from "@/components/ui/button"
import { getCvDownload } from "@/lib/cv"
import { motion } from "framer-motion"
import { Mail, Linkedin, Github } from "lucide-react"
import { RichText } from "@/components/rich-text"

interface ContactSectionProps {
  language: "es" | "en"
}

const contactText = {
  es: {
    subtitle: "Contacto",
    title: "Construyamos algo significativo juntos.",
    email: "cdejtiar14@gmail.com",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    downloadCV: "Descargar CV",
    description:
      "Si querés dialogar sobre un **producto digital**, una **oportunidad freelance** o un **desafío UX/Product**, escribime."
  },
  en: {
    subtitle: "Contact",
    title: "Let's build something meaningful together.",
    email: "cdejtiar14@gmail.com",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    downloadCV: "Download CV",
    description:
      "If you'd like to talk about **digital product work**, **freelance opportunities**, or a **UX/Product challenge**, feel free to reach out."
  },
}

export function ContactSection({ language }: ContactSectionProps) {
  const t = contactText[language]
  const cv = getCvDownload(language)

  return (
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-muted-foreground mb-4">{t.subtitle}</p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              {t.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
              <RichText text={t.description} />
            </p>

            <div className="mt-10">
              <Button asChild variant="default" size="lg" className="rounded-2xl bg-primary text-primary-foreground px-8 py-4 shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all duration-300">
                <a href={cv.href} download={cv.fileName}>
                  {t.downloadCV}
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Email</p>
                  <a href={`mailto:${t.email}`} className="text-base font-medium text-foreground hover:text-primary transition-colors">
                    {t.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/camila-dejtiar-56a38b214/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Conectar en LinkedIn
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">GitHub</p>
                  <a
                    href="https://github.com/cdejtiar"
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Ver repositorios
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}