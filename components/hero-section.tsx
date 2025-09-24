"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, Eye } from "lucide-react"

interface HeroSectionProps {
  language: "es" | "en"
}

const translations = {
  es: {
    greeting: "Hola, soy",
    name: "Tu Nombre",
    title: "Diseñador",
    subtitle: "Digital",
    description:
      "Un creativo apasionado especializado en crear experiencias digitales hermosas e intuitivas. Transformo problemas complejos en diseños elegantes y fáciles de usar.",
    contactMe: "Contáctame",
    seeMore: "Ver más",
  },
  en: {
    greeting: "Hello, I'm",
    name: "Your Name",
    title: "Designer",
    subtitle: "Digital",
    description:
      "A passionate creative specializing in crafting beautiful and intuitive digital experiences. I transform complex problems into elegant, user-friendly designs.",
    contactMe: "Contact Me",
    seeMore: "See More",
  },
}

export function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language]

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-3xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-lg font-barlow text-muted-foreground mb-4 animate-fade-in">{t.greeting}</p>

          {/* Name */}
          <h1 className="font-superlobster text-5xl md:text-6xl font-bold mb-4 gradient-text animate-fade-in-up">
            {t.name}
          </h1>

          {/* Title - Large Typography as requested */}
          <div className="mb-6">
            <h2 className="font-coolvetica text-6xl md:text-7xl lg:text-8xl font-bold leading-none text-primary/20 select-none">
              {t.title}
            </h2>
            <h3 className="font-coolvetica text-4xl md:text-5xl font-bold -mt-4 md:-mt-6 gradient-text">
              {t.subtitle}
            </h3>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg font-barlow text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up">
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up mb-12">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-4 text-base font-semibold rounded-2xl glass-effect transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-4 h-4 mr-2" />
              {t.contactMe}
            </Button>

            <Button
              onClick={scrollToProjects}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-4 text-base font-semibold rounded-2xl glass-effect transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Eye className="w-4 h-4 mr-2" />
              {t.seeMore}
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-5 h-5 text-muted-foreground mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
