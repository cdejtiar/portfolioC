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
    <div className="rounded-[1rem] border border-white/10 bg-white/5 p-5 shadow-inner shadow-black/5 backdrop-blur-sm">
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
          <Button onClick={() => router.push("/projects")} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.backToProjects}
          </Button>
        </div>
      </div>
    )
  }

  // Determine project type so we can render narrative or technical flows
  const isDesignProject = project.roles?.some((r) =>
    ["Product Design", "UX Research", "Design Systems", "Research"].includes(r)
  )

  const isDevOnly = project.roles?.every((r) =>
    ["Frontend Development", "AI Integration"].includes(r)
  )

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
        {/*<Button onClick={() => router.push("/projects")} variant="ghost" className="mb-8 hover:bg-secondary/20">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.backToProjects}
        </Button>*/}

        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/6 bg-transparent p-8 md:p-10 lg:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="pt-6 lg:pt-10">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[11px] uppercase tracking-[0.32em] text-primary/80">{t.caseStudy}</span>
              </div>

              <h1 className="font-superlobster text-6xl md:text-8xl lg:text-[96px] leading-tight text-foreground -tracking-tight mb-6">
                {project.title}
              </h1>

              <p className="max-w-3xl text-lg md:text-xl leading-8 text-muted-foreground mb-8">{project.description}</p>

              <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-foreground mr-2">{t.role}:</span>
                  <span>{project.roleSummary || project.roles.join(" · ")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-foreground mr-2">{t.tools}:</span>
                  <span>{project.technologies.join(" · ")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-foreground mr-2">{t.duration}:</span>
                  <span>{project.duration || (language === "es" ? "6 semanas" : "6 weeks")}</span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-end items-start">
              <div className="w-full max-w-lg rounded-[1.8rem] overflow-hidden shadow-2xl shadow-primary/10">
                <img src={resolveImage(project.image)} alt={project.title} className="w-full h-[520px] object-cover" />
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
          className="mt-8 grid gap-8 rounded-[2rem] p-8 md:grid-cols-[0.7fr_0.3fr] md:p-10"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-superlobster mb-4">{language === "es" ? "El Exceso de Caminos como Parálisis." : "Too many paths can feel paralyzing."}</h2>
            <p className="text-lg text-muted-foreground mb-6">{project.problemStatement || project.fullDescription}</p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1rem] border border-white/10 bg-white/5 p-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">{t.context}</p>
                <p className="mt-2 text-sm leading-7 text-foreground">{project.context || project.description}</p>
              </div>
              <div className="rounded-[1rem] border border-white/10 bg-white/5 p-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">{t.whatIFound}</p>
                <p className="mt-2 text-sm leading-7 text-foreground">{project.need || project.solution}</p>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-center">
            <div className="rounded-[1rem] border border-white/10 bg-white/6 p-6 w-full max-w-sm text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mx-auto mb-3">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 9v4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 17h.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">{language === "es" ? "El Botón de Crisis" : "The Crisis Button"}</h3>
              <p className="text-sm text-muted-foreground">{language === "es" ? "Una propuesta de emergencia para momentos de bloqueo cognitivo severo." : "An emergency quick-action for moments of severe cognitive blocks."}</p>
            </div>
          </div>
        </motion.section>

        {/** Design-led narrative: process timeline + research + decisions */}
        {isDesignProject && (
          <>
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="mt-8 rounded-[2rem] p-8 md:p-10"
            >
              <div className="max-w-4xl mx-auto">
                <p className="text-sm uppercase tracking-[0.32em] text-muted-foreground mb-6">{t.process}</p>
                <div className="relative">
                  <div className="absolute left-4 right-4 top-6 h-px bg-divider/30" />
                  <div className="flex items-center justify-between gap-6 overflow-x-auto py-6">
                    {processSteps.map((step, idx) => (
                      <div key={step.title} className="flex-shrink-0 w-48 text-center">
                        <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-white/6 flex items-center justify-center border border-white/8 text-primary font-semibold">{idx + 1}</div>
                        <h4 className="text-sm font-semibold text-foreground">{step.title}</h4>
                        <p className="mt-2 text-xs text-muted-foreground">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
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
          </>
        )}

        {/** Technical implementation - render for dev-only or when technical metadata exists */}
        {(isDevOnly || project.architecture || project.githubUrl) && (
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="mt-8 rounded-[2rem] border border-white/10 bg-white/30 p-8 backdrop-blur-xl md:p-10"
          >
            <SectionHeading
              eyebrow={language === "es" ? "Implementación técnica" : "Technical implementation"}
              title={language === "es" ? "Notas de arquitectura y código" : "Architecture & code notes"}
              description={language === "es" ? "Detalles técnicos relevantes, decisiones de implementación y recursos." : "Relevant technical details, implementation decisions, and resources."}
            />
            <div className="mt-6 space-y-4">
              {project.architecture && (
                <div className="rounded-[1.3rem] border border-white/20 bg-white/50 p-5">
                  <h3 className="text-lg font-semibold text-foreground">{language === "es" ? "Arquitectura" : "Architecture"}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{project.architecture}</p>
                </div>
              )}

              {project.repoHighlights && (
                <div className="rounded-[1.3rem] border border-white/20 bg-white/50 p-5">
                  <h3 className="text-lg font-semibold text-foreground">{language === "es" ? "Puntos claves del repositorio" : "Repo highlights"}</h3>
                  <ul className="mt-2 space-y-2 text-sm leading-7 text-muted-foreground">
                    {project.repoHighlights.map((r) => (
                      <li key={r}>• {r}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.githubUrl && (
                <div className="rounded-[1.3rem] border border-white/20 bg-white/50 p-5">
                  <p className="text-sm text-muted-foreground">{language === "es" ? "Código disponible en:" : "Source code:"}</p>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="mt-2 inline-block text-primary underline">
                    {project.githubUrl}
                  </a>
                </div>
              )}
            </div>
          </motion.section>
        )}

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
