import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface FeaturedProjectSectionProps {
  language: "es" | "en"
}

const translations = {
  es: {
    label: "Proyecto Destacado",
    heading: "inFLOW • Tesis",
    description:
      "inFLOW nació para abordar un problema que afecta a millones de estudiantes: la procrastinación académica. A través de UX Research, diseño estratégico y desarrollo frontend, diseñé una plataforma que acompaña a los estudiantes con herramientas personalizadas para planificar, mantener el foco y construir hábitos de estudio más saludables.",
    productTagline: "Proyecto de tesis y experiencia híbrida UX / UI / Frontend.",
    viewCaseStudy: "Ver Caso de Estudio",
    metrics: [
      "+150 participantes",
      "UX Research",
      "Product Design",
      "Design System",
      "React + TypeScript",
      "AI Integration",
      "User Testing",
    ],
    impact: "Investigación con +150 estudiantes que permitió validar el problema y definir la propuesta de valor del producto.",
    scope: "Proyecto end-to-end que abarcó investigación, definición del MVP, UX/UI, desarrollo frontend e integración de IA.",
  },
  en: {
    label: "Featured Project",
    heading: "inFLOW • Thesis",
    description:
      "inFLOW was created to address a challenge faced by millions of students: academic procrastination. Through UX research, strategic design, and front-end development, I designed and built a platform that supports students with personalized tools to plan their work, stay focused, and build healthier study habits.",
    productTagline: "Thesis project and hybrid UX / UI / Frontend work.",
    viewCaseStudy: "View Case Study",
    metrics: [
      "+150 participants",
      "UX Research",
      "Product Design",
      "Design System",
      "React + TypeScript",
      "AI Integration",
      "User Testing",
    ],
    impact: "Research with +150 students that allowed validating the problem and defining the product's value proposition.",
    scope: "End-to-end project covering research, MVP definition, UX/UI, frontend development, and AI integration.",
  },
}

export function FeaturedProjectSection({ language }: FeaturedProjectSectionProps) {
  const t = translations[language]

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <section id="featured-project" className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.32em] text-muted-foreground mb-4">
            {t.label}
          </p>
          <h2 className="font-superlobster text-5xl md:text-6xl font-bold mb-4 gradient-text animate-fade-in-up">
            {t.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
            {t.description}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-8 lg:pt-4">
            <div className="flex flex-wrap gap-3">
              {t.metrics.map((metric) => (
                <span
                  key={metric}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-foreground/80"
                >
                  {metric}
                </span>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.32em] text-primary mb-3">{language === "es" ? "Impacto" : "Impact"}</p>
                <p className="text-sm leading-6 text-muted-foreground">
                  {t.impact}
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.32em] text-primary mb-3">{language === "es" ? "Alcance" : "Scope"}</p>
                <p className="text-sm leading-6 text-muted-foreground">
                  {t.scope}
                </p>
              </div>
            </div>

            <Button asChild size="lg" variant="secondary" className="rounded-2xl px-8 py-4 text-base font-semibold">
              <a href="/project/13">{t.viewCaseStudy}</a>
            </Button>
          </div>

          <div className="flex items-center lg:min-h-[420px] md:flex xl:hidden">
            <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/10">
              <img
                src="/images/inflow.png"
                alt="inFLOW product"
                className="w-full h-[280px] sm:h-[360px] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent px-6 py-5">
                <p className="text-sm uppercase tracking-[0.32em] text-white/70">inFLOW</p>
                <p className="mt-2 text-base font-semibold text-white">{t.productTagline}</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </motion.div>
  )
}
