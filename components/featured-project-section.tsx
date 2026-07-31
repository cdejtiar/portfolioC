import { Button } from "@/components/ui/button"

interface FeaturedProjectSectionProps {
  language: "es" | "en"
}

const translations = {
  es: {
    label: "Proyecto Destacado",
    heading: "inFLOW — caso de estudio principal",
    description:
      "Mi proyecto más importante combina investigación con diseño estratégico y frontend, orientado a ayudar a universitarios a reducir la procrastinación con una experiencia clara y motivadora.",
    productTagline: "Proyecto de tesis y experiencia híbrida UX / UI / Frontend.",
    viewCaseStudy: "Ver Case Study",
    metrics: [
      "157 participantes",
      "UX Research",
      "React + TypeScript",
      "AI Integration",
      "Design System",
      "User Testing",
    ],
  },
  en: {
    label: "Featured Project",
    heading: "inFLOW — main case study",
    description:
      "My most important project combines research with strategic design and frontend delivery, focused on helping university students reduce procrastination through a clear, motivating experience.",
    productTagline: "Thesis project and hybrid UX / UI / Frontend work.",
    viewCaseStudy: "View Case Study",
    metrics: [
      "157 participants",
      "UX Research",
      "React + TypeScript",
      "AI Integration",
      "Design System",
      "User Testing",
    ],
  },
}

export function FeaturedProjectSection({ language }: FeaturedProjectSectionProps) {
  const t = translations[language]

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.32em] text-muted-foreground mb-4">
            {t.label}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-foreground">
            {t.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
            {t.description}
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-8">
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
                <p className="text-sm uppercase tracking-[0.32em] text-primary mb-3">Impacto</p>
                <p className="text-sm leading-6 text-muted-foreground">
                  157 personas participaron en la investigación y ayudaron a validar el enfoque del producto.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.32em] text-primary mb-3">Alcance</p>
                <p className="text-sm leading-6 text-muted-foreground">
                  Un proceso híbrido que atraviesa UX Research, diseño de interfaz y desarrollo frontend.
                </p>
              </div>
            </div>

            <Button asChild size="lg" variant="secondary" className="rounded-2xl px-8 py-4 text-base font-semibold">
              <a href="/project/13">{t.viewCaseStudy}</a>
            </Button>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/10">
            <img
              src="/images/comingsoon.png"
              alt="inFLOW product preview"
              className="h-[520px] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent px-6 py-5">
              <p className="text-sm uppercase tracking-[0.32em] text-white/70">inFLOW</p>
              <p className="mt-2 text-base font-semibold text-white">{t.productTagline}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
