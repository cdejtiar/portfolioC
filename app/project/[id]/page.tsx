"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { projectsByLocale, type Project } from "@/lib/projects"

const translations = {
  es: {
    backToProjects: "Volver a Proyectos",
    viewLive: "Ver en Vivo",
    viewPresentation: "Ver Presentación",
    viewProjectCharter: "Ver Acta de Proyecto",
    viewResearch: "Ver Investigación",
    viewCode: "Ver Código",
    projectNotFound: "Proyecto no encontrado",
    caseStudy: "Caso de estudio",
    overview: "Resumen del proyecto",
    context: "Contexto",
    role: "Rol",
    team: "Equipo",
    duration: "Duración",
    tools: "Herramientas",
    outcome: "Resultado",
    problemOpportunity: "Problema y oportunidad",
    process: "Proceso de diseño",
    research: "Investigación y descubrimientos",
    decisions: "Decisiones de diseño",
    finalSolution: "Solución final",
    results: "Resultados y aprendizajes",
    quickRead: "Lectura rápida",
    whatIFound: "Qué descubrí",
    whatIChanged: "Qué decidí",
    impact: "Impacto",
    learnings: "Aprendizajes",
    nextSteps: "Próximos pasos",
  },
  en: {
    backToProjects: "Back to Projects",
    viewLive: "View Live",
    viewPresentation: "View Presentation",
    viewProjectCharter: "View Project Charter",
    viewResearch: "View Research",
    viewCode: "View Code",
    projectNotFound: "Project not found",
    caseStudy: "Case study",
    overview: "Project overview",
    context: "Context",
    role: "Role",
    team: "Team",
    duration: "Duration",
    tools: "Tools",
    outcome: "Outcome",
    problemOpportunity: "Problem and opportunity",
    process: "Design process",
    research: "Research and insights",
    decisions: "Design decisions",
    finalSolution: "Final solution",
    results: "Results and learnings",
    quickRead: "Quick read",
    whatIFound: "What I found",
    whatIChanged: "What I chose",
    impact: "Impact",
    learnings: "Learnings",
    nextSteps: "Next steps",
  },
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-[11px] uppercase tracking-[0.35em] text-primary/80">{eyebrow}</p>
      <h2 className="font-superlobster text-3xl sm:text-4xl text-foreground">{title}</h2>
      <p className="text-base leading-8 text-muted-foreground">{description}</p>
    </div>
  )
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.2rem] border border-white/20 bg-white/40 p-4 shadow-sm shadow-black/5 backdrop-blur-sm">
      <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">{label}</p>
      <p className="mt-2 text-sm leading-7 text-foreground">{value}</p>
    </div>
  )
}

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const [language, setLanguage] = useState<"es" | "en">("es")
  const [project, setProject] = useState<Project | null>(null)

  const t = translations[language]

  useEffect(() => {
    const savedLanguage = (localStorage.getItem("language") as "es" | "en") || "es"
    setLanguage(savedLanguage)

    const projectId = params.id as string
    const projects = projectsByLocale[savedLanguage]
    const foundProject = projects.find((p) => p.id === projectId)
    setProject(foundProject || null)
  }, [params.id])

  const resolveImage = (img?: string) => {
    if (!img) return "/placeholder.svg"

    let s = img.replace(/\\/g, "/")

    if (s.includes("/public/")) {
      s = s.substring(s.indexOf("/public/") + "/public/".length)
    }

    const imagesIdx = s.indexOf("images/")
    if (imagesIdx !== -1) {
      s = "/" + s.substring(imagesIdx)
      return s
    }

    s = s.replace(/^(?:\.+\/)+/, "")
    if (!s.startsWith("/")) s = "/" + s

    return s
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-superlobster text-primary mb-4">{t.projectNotFound}</h1>
          <Button onClick={() => router.push("/#projects")} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.backToProjects}
          </Button>
        </div>
      </div>
    )
  }

  const overviewItems = [
    { label: t.context, value: project.context || project.description },
    { label: t.role, value: project.roleSummary || project.roles.join(" · ") },
    { label: t.team, value: project.team || (language === "es" ? "Diseñadora independiente + stakeholders" : "Independent designer + stakeholders") },
    { label: t.duration, value: project.duration || (language === "es" ? "6 semanas" : "6 weeks") },
    { label: t.tools, value: project.technologies.join(" · ") },
    { label: t.outcome, value: project.outcome || project.description },
  ]

  const processSteps = project.processSteps || [
    {
      label: language === "es" ? "01. Investigación" : "01. Research",
      title: language === "es" ? "Investigación" : "Research",
      description: language === "es" ? "Mapear contexto, usuarios y oportunidades desde la observación y la conversación." : "Map the context, users, and opportunities through observation and conversation.",
    },
    {
      label: language === "es" ? "02. Definición" : "02. Definition",
      title: language === "es" ? "Definición" : "Definition",
      description: language === "es" ? "Sintetizar hallazgos y convertirlos en una dirección clara de producto." : "Synthesize insights and turn them into a clear product direction.",
    },
    {
      label: language === "es" ? "03. Ideación" : "03. Ideation",
      title: language === "es" ? "Ideación" : "Ideation",
      description: language === "es" ? "Explorar múltiples caminos para resolver el problema con una lógica de experiencia." : "Explore multiple paths to solve the problem through a thoughtful experience lens.",
    },
    {
      label: language === "es" ? "04. Diseño" : "04. Design",
      title: language === "es" ? "Diseño" : "Design",
      description: language === "es" ? "Materializar la dirección en interfaces, flujos y decisiones visuales coherentes." : "Materialize the direction into interfaces, flows, and coherent visual decisions.",
    },
    {
      label: language === "es" ? "05. Testing" : "05. Testing",
      title: language === "es" ? "Testing" : "Testing",
      description: language === "es" ? "Validar con usuarios reales y detectar oportunidades de mejora." : "Validate with real users and identify opportunities to improve the experience.",
    },
    {
      label: language === "es" ? "06. Iteración" : "06. Iteration",
      title: language === "es" ? "Iteración" : "Iteration",
      description: language === "es" ? "Refinar el producto con una mirada más estratégica y empática." : "Refine the product with a more strategic and empathetic lens.",
    },
  ]

  const researchHighlights = project.researchHighlights || [
    {
      title: language === "es" ? "Insight principal" : "Core insight",
      detail: project.problemStatement || project.fullDescription,
    },
    {
      title: language === "es" ? "Necesidad detectada" : "Need discovered",
      detail: project.need || project.description,
    },
  ]

  const designDecisions = project.designDecisions || [
    {
      title: language === "es" ? "Decisión de estructura" : "Structure decision",
      problem: language === "es" ? "La experiencia debía sentirse clara desde el primer contacto." : "The experience needed to feel clear from the first interaction.",
      decision: language === "es" ? "Prioricé mensajes simples, una navegación directa y una entrada visual más amable." : "I prioritized simple messaging, direct navigation, and a warmer first impression.",
      impact: language === "es" ? "Se redujo la fricción inicial y la propuesta se volvió más accesible." : "Initial friction was reduced and the proposal became more accessible.",
    },
  ]

  const finalOutcomeItems = project.outcomes || [
    language === "es" ? "Propuesta más clara y con una identidad de producto más sólida." : "A clearer proposal with a stronger product identity.",
    language === "es" ? "Ruta de diseño preparada para iterar con usuarios reales." : "A design direction ready to iterate with real users.",
  ]

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <Button onClick={() => router.push("/#projects")} variant="ghost" className="mb-8 hover:bg-secondary/20">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.backToProjects}
        </Button>

        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/40 p-8 shadow-[0_20px_70px_rgba(64,41,64,0.08)] backdrop-blur-xl md:p-10 lg:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-primary">
                  {t.caseStudy}
                </span>
                {project.roles.map((role) => (
                  <span key={role} className="rounded-full border border-white/20 bg-white/50 px-3 py-1 text-sm text-muted-foreground">
                    {role}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                <h1 className="font-superlobster text-4xl sm:text-5xl lg:text-6xl text-foreground">{project.title}</h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground">{project.description}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
                <InfoCard label={t.role} value={project.roleSummary || project.roles.join(" · ")} />
                <InfoCard label={t.duration} value={project.duration || (language === "es" ? "6 semanas" : "6 weeks")} />
                <InfoCard label={t.tools} value={project.technologies.join(" · ")} />
                <InfoCard label={t.outcome} value={project.outcome || (language === "es" ? "Propuesta de producto y prototipo funcional" : "Product concept and functional prototype")} />
              </div>

              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <Button onClick={() => window.open(project.liveUrl, "_blank")} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t.viewLive}
                  </Button>
                )}
                {project.slidesUrl && (
                  <Button onClick={() => window.open(project.slidesUrl, "_blank")} className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t.viewPresentation}
                  </Button>
                )}
                {project.githubUrl && (
                  <Button onClick={() => window.open(project.githubUrl, "_blank")} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Github className="w-4 h-4 mr-2" />
                    {t.viewCode}
                  </Button>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/20 bg-white/50 p-3 shadow-2xl shadow-primary/10 backdrop-blur">
                <img src={resolveImage(project.image)} alt={project.title} className="h-[420px] w-full rounded-[1.35rem] object-cover" />
              </div>
            </div>
          </div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-[2rem] border border-white/10 bg-white/30 p-8 backdrop-blur-xl md:p-10"
        >
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>{t.quickRead}</span>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {overviewItems.map((item) => (
              <InfoCard key={item.label} label={item.label} value={item.value} />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mt-8 grid gap-8 rounded-[2rem] border border-white/10 bg-white/30 p-8 backdrop-blur-xl md:grid-cols-[0.85fr_1.15fr] md:p-10"
        >
          <SectionHeading
            eyebrow={t.problemOpportunity}
            title={language === "es" ? "Una necesidad real, una oportunidad clara" : "A real need, a clear opportunity"}
            description={project.problemStatement || project.problem || (language === "es" ? "El trabajo comenzó con una pregunta concreta: cómo transformar una necesidad cotidiana en una experiencia más amable, útil y memorable." : "The work began with a concrete question: how to turn a daily need into a more thoughtful, useful, and memorable experience.")}
          />
          <div className="space-y-4">
            <div className="rounded-[1.3rem] border border-white/20 bg-white/50 p-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">{t.context}</p>
              <p className="mt-2 text-base leading-8 text-foreground">{project.fullDescription}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.3rem] border border-white/20 bg-white/50 p-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">{t.whatIFound}</p>
                <p className="mt-2 text-sm leading-7 text-foreground">{project.need || project.solution || (language === "es" ? "La fricción no estaba en la intención, sino en la dificultad de empezar." : "The friction was not in the intention, but in the difficulty of getting started.")}</p>
              </div>
              <div className="rounded-[1.3rem] border border-white/20 bg-white/50 p-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">{t.whatIChanged}</p>
                <p className="mt-2 text-sm leading-7 text-foreground">{project.opportunity || (language === "es" ? "Diseñé una experiencia que invitara a actuar con menos presión y más claridad." : "I designed an experience that invited action with less pressure and more clarity.")}</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-[2rem] border border-white/10 bg-white/30 p-8 backdrop-blur-xl md:p-10"
        >
          <SectionHeading
            eyebrow={t.process}
            title={language === "es" ? "Un proceso que acompaña la decisión" : "A process that supports decision-making"}
            description={language === "es" ? "Cada etapa ayudó a convertir el problema en una propuesta más precisa, humana y útil." : "Each phase helped turn the problem into a more precise, human, and useful proposal."}
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.title} className="rounded-[1.4rem] border border-white/20 bg-white/50 p-5">
                <p className="text-[11px] uppercase tracking-[0.3em] text-primary/80">{step.label}</p>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mt-8 grid gap-8 rounded-[2rem] border border-white/10 bg-white/30 p-8 backdrop-blur-xl md:grid-cols-[0.85fr_1.15fr] md:p-10"
        >
          <SectionHeading
            eyebrow={t.research}
            title={language === "es" ? "Descubrimientos que dieron forma al diseño" : "Discoveries that shaped the design"}
            description={language === "es" ? "La investigación permitió traducir conversaciones, comportamientos y necesidades en decisiones de producto." : "Research helped translate conversations, behaviors, and needs into product decisions."}
          />
          <div className="space-y-4">
            {researchHighlights.map((item) => (
              <div key={item.title} className="rounded-[1.3rem] border border-white/20 bg-white/50 p-5">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-[2rem] border border-white/10 bg-white/30 p-8 backdrop-blur-xl md:p-10"
        >
          <SectionHeading
            eyebrow={t.decisions}
            title={language === "es" ? "Decisiones que explican el diseño" : "Decisions that explain the design"}
            description={language === "es" ? "Cada elección fue pensada para reducir la fricción, reforzar la claridad y sostener una identidad propia." : "Each choice was made to reduce friction, strengthen clarity, and support a distinct identity."}
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {designDecisions.map((decision) => (
              <div key={decision.title} className="rounded-[1.4rem] border border-white/20 bg-white/50 p-6">
                <h3 className="text-lg font-semibold text-foreground">{decision.title}</h3>
                <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">{language === "es" ? "Problema" : "Problem"}</p>
                    <p className="mt-1">{decision.problem}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">{language === "es" ? "Decisión" : "Decision"}</p>
                    <p className="mt-1">{decision.decision}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">{language === "es" ? "Impacto" : "Impact"}</p>
                    <p className="mt-1">{decision.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-[2rem] border border-white/10 bg-white/30 p-8 backdrop-blur-xl md:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-4">
              <SectionHeading
                eyebrow={t.finalSolution}
                title={language === "es" ? "La interfaz como protagonista" : "The interface as the protagonist"}
                description={project.finalSolution || (language === "es" ? "La solución se presenta como una experiencia coherente, visualmente cuidada y pensada para acompañar al usuario en cada paso." : "The solution is presented as a coherent experience, carefully visualized and designed to guide the user at every step.")}
              />
              <div className="rounded-[1.4rem] border border-white/20 bg-white/50 p-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">{t.impact}</p>
                <div className="mt-3 space-y-3">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm leading-7 text-muted-foreground">
                      <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/20 bg-white/50 p-3 shadow-xl shadow-primary/10">
              <img src={resolveImage(project.image)} alt={`${project.title} final interface`} className="h-[480px] w-full rounded-[1.35rem] object-cover" />
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-[2rem] border border-white/10 bg-white/30 p-8 backdrop-blur-xl md:p-10"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[1.4rem] border border-white/20 bg-white/50 p-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">{t.results}</p>
              <div className="mt-4 space-y-3">
                {finalOutcomeItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-7 text-muted-foreground">
                    <span className="mt-2 h-2 w-2 rounded-full bg-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.4rem] border border-white/20 bg-white/50 p-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">{t.learnings}</p>
              <p className="mt-4 text-sm leading-8 text-muted-foreground">
                {project.learnings?.[0] || (language === "es" ? "Aprendí que la claridad de la experiencia suele valer más que la complejidad del sistema, y que cada decisión debe sostener una narrativa simple para el usuario." : "I learned that experience clarity usually matters more than system complexity, and that every decision should support a simple narrative for the user.")}
              </p>
              <div className="mt-6 rounded-[1.2rem] border border-dashed border-primary/20 bg-primary/5 p-4">
                <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">{t.nextSteps}</p>
                <p className="mt-2 text-sm leading-7 text-foreground">
                  {project.learnings?.[1] || (language === "es" ? "Iterar con usuarios reales, medir la respuesta y refinar la propuesta con más contexto." : "Iterate with real users, measure response, and refine the proposal with more context.")}
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
