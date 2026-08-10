"use client";

import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Search,
  Compass,
  MapPin,
  PenTool,
  Target,
  Repeat,
} from "lucide-react";

import { motion, type Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { projectsByLocale, type Project } from "@/lib/projects";

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
};

// ---------- Framer Motion variants ----------
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-[11px] uppercase tracking-[0.35em] text-primary/80">
        {eyebrow}
      </p>
      <h2 className="font-superlobster text-3xl sm:text-4xl text-foreground">
        {title}
      </h2>
      <p className="text-base leading-8 text-muted-foreground">{description}</p>
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1rem] border border-white/10 bg-white/5 p-5 shadow-inner shadow-black/5 backdrop-blur-sm">
      <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 text-sm leading-7 text-foreground">{value}</p>
    </div>
  );
}

function getStepIcon(title: string) {
  const key = title.toLowerCase();
  if (key.includes("invest") || key.includes("research")) return Search;
  if (key.includes("defini")) return Compass;
  if (key.includes("idea")) return MapPin;
  if (key.includes("diseñ") || key.includes("design")) return PenTool;
  if (key.includes("test")) return Target;
  if (key.includes("iterac") || key.includes("iterat")) return Repeat;
  return Search;
}

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [project, setProject] = useState<Project | null>(null);

  // ---- scroll-spy state for the sticky process indicator ----
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const t = translations[language];

  useEffect(() => {
    const savedLanguage =
      (localStorage.getItem("language") as "es" | "en") || "es";
    setLanguage(savedLanguage);

    const projectId = params.id as string;
    const projects = projectsByLocale[savedLanguage];
    const foundProject = projects.find((p) => p.id === projectId);
    setProject(foundProject || null);
  }, [params.id]);

  const resolveImage = (img?: string) => {
    if (!img) return "/placeholder.svg";

    let s = img.replace(/\\/g, "/");

    if (s.includes("/public/")) {
      s = s.substring(s.indexOf("/public/") + "/public/".length);
    }

    const imagesIdx = s.indexOf("images/");
    if (imagesIdx !== -1) {
      s = "/" + s.substring(imagesIdx);
      return s;
    }

    s = s.replace(/^(?:\.+\/)+/, "");
    if (!s.startsWith("/")) s = "/" + s;

    return s;
  };

  // Determine project type so we can render narrative or technical flows
  const isDesignProject = project?.roles?.some((r) =>
    ["Product Design", "UX Research", "Design Systems", "Research"].includes(r),
  );

  const isDevOnly = project?.roles?.every((r) =>
    ["Frontend Development", "AI Integration"].includes(r),
  );

  const processSteps = project?.processSteps || [
    {
      label: language === "es" ? "01. Investigación" : "01. Research",
      title: language === "es" ? "Investigación" : "Research",
      description:
        language === "es"
          ? "Mapear contexto, usuarios y oportunidades desde la observación y la conversación."
          : "Map the context, users, and opportunities through observation and conversation.",
    },
    {
      label: language === "es" ? "02. Definición" : "02. Definition",
      title: language === "es" ? "Definición" : "Definition",
      description:
        language === "es"
          ? "Sintetizar hallazgos y convertirlos en una dirección clara de producto."
          : "Synthesize insights and turn them into a clear product direction.",
    },
    {
      label: language === "es" ? "03. Ideación" : "03. Ideation",
      title: language === "es" ? "Ideación" : "Ideation",
      description:
        language === "es"
          ? "Explorar múltiples caminos para resolver el problema con una lógica de experiencia."
          : "Explore multiple paths to solve the problem through a thoughtful experience lens.",
    },
    {
      label: language === "es" ? "04. Diseño" : "04. Design",
      title: language === "es" ? "Diseño" : "Design",
      description:
        language === "es"
          ? "Materializar la dirección en interfaces, flujos y decisiones visuales coherentes."
          : "Materialize the direction into interfaces, flows, and coherent visual decisions.",
    },
    {
      label: language === "es" ? "05. Testing" : "05. Testing",
      title: language === "es" ? "Testing" : "Testing",
      description:
        language === "es"
          ? "Validar con usuarios reales y detectar oportunidades de mejora."
          : "Validate with real users and identify opportunities to improve the experience.",
    },
    {
      label: language === "es" ? "06. Iteración" : "06. Iteration",
      title: language === "es" ? "Iteración" : "Iteration",
      description:
        language === "es"
          ? "Refinar el producto con una mirada más estratégica y empática."
          : "Refine the product with a more strategic and empathetic lens.",
    },
  ];

  // ---- IntersectionObserver: watches each process step and updates the sticky indicator ----
  useEffect(() => {
    if (!isDesignProject) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-step-index"));
            setActiveStepIndex(idx);
          }
        });
      },
      // banda angosta en el centro de la pantalla: la etapa "activa"
      // es la que cruza esa banda al scrollear
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [processSteps, isDesignProject, project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-superlobster text-primary mb-4">
            {t.projectNotFound}
          </h1>
          <Button onClick={() => router.push("/projects")} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.backToProjects}
          </Button>
        </div>
      </div>
    );
  }

  const overviewItems = [
    { label: t.context, value: project.context || project.description },
    { label: t.role, value: project.roleSummary || project.roles.join(" · ") },
    {
      label: t.team,
      value:
        project.team ||
        (language === "es"
          ? "Diseñadora independiente + stakeholders"
          : "Independent designer + stakeholders"),
    },
    {
      label: t.duration,
      value: project.duration || (language === "es" ? "6 semanas" : "6 weeks"),
    },
    { label: t.tools, value: project.technologies.join(" · ") },
    { label: t.outcome, value: project.outcome || project.description },
  ];

  const researchHighlights = project.researchHighlights || [
    {
      title: language === "es" ? "Insight principal" : "Core insight",
      detail: project.problemStatement || project.fullDescription,
    },
    {
      title: language === "es" ? "Necesidad detectada" : "Need discovered",
      detail: project.need || project.description,
    },
  ];

  const designDecisions = project.designDecisions || [
    {
      title:
        language === "es" ? "Decisión de estructura" : "Structure decision",
      problem:
        language === "es"
          ? "La experiencia debía sentirse clara desde el primer contacto."
          : "The experience needed to feel clear from the first interaction.",
      decision:
        language === "es"
          ? "Prioricé mensajes simples, una navegación directa y una entrada visual más amable."
          : "I prioritized simple messaging, direct navigation, and a warmer first impression.",
      impact:
        language === "es"
          ? "Se redujo la fricción inicial y la propuesta se volvió más accesible."
          : "Initial friction was reduced and the proposal became more accessible.",
    },
  ];

  const finalOutcomeItems = project.outcomes || [
    language === "es"
      ? "Propuesta más clara y con una identidad de producto más sólida."
      : "A clearer proposal with a stronger product identity.",
    language === "es"
      ? "Ruta de diseño preparada para iterar con usuarios reales."
      : "A design direction ready to iterate with real users.",
  ];

  return (
    <div className="min-h-screen bg-[#100c19] text-foreground overflow-hidden">
      {/*
      ============================================================
      HERO
      ============================================================
    */}
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative min-h-[620px] flex items-start"
      >
        <div className="container mx-auto max-w-6xl px-6 pt-28 pb-24 md:pt-36 md:pb-32">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-6 text-[10px] font-medium uppercase tracking-[0.35em] text-primary"
            >
              {t.caseStudy}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="font-superlobster text-6xl leading-[0.92] tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-[88px] xl:text-[96px]"
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-7 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base"
            >
              {project.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-x-10 gap-y-5"
            >
              <div>
                <p className="text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
                  {t.role}
                </p>
                <p className="mt-2 text-xs text-foreground">
                  {project.roleSummary || project.roles.join(" · ")}
                </p>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
                  {t.tools}
                </p>
                <p className="mt-2 text-xs text-foreground">
                  {project.technologies.join(", ")}
                </p>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
                  {t.duration}
                </p>
                <p className="mt-2 text-xs text-foreground">
                  {project.duration ||
                    (language === "es" ? "6 semanas" : "6 weeks")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* subtle bottom glow */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#171323] to-transparent" />
      </motion.header>

      {/*
      ============================================================
      OVERVIEW
      ============================================================
    */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-[#1b1727]"
      >
        <div className="container mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                label: t.context,
                value: project.context || project.description,
              },
              {
                label: t.team,
                value:
                  project.team ||
                  (language === "es"
                    ? "Diseñadora independiente + stakeholders"
                    : "Independent designer + stakeholders"),
              },
              {
                label: t.outcome,
                value: project.outcome || project.description,
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="min-h-[150px] rounded-xl border border-white/[0.06] bg-white/[0.045] p-6"
              >
                <p className="text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
                  {item.label}
                </p>

                <p className="mt-4 text-xs leading-6 text-foreground/90">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/*
      ============================================================
      PROBLEM / OPPORTUNITY
      ============================================================
    */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-[#100c19]"
      >
        <div className="container mx-auto max-w-6xl px-6 py-24 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="max-w-3xl">
              <h2 className="font-superlobster text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
                {language === "es"
                  ? "El Exceso de Caminos como Parálisis."
                  : "Too many paths can feel paralyzing."}
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                {project.problemStatement || project.fullDescription}
              </p>

              <div className="mt-8 max-w-xl border-l-2 border-primary pl-5">
                <p className="text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
                  {t.whatIFound}
                </p>

                <p className="mt-3 text-xs leading-6 text-foreground/90">
                  {project.need || project.solution}
                </p>
              </div>
            </div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="rounded-xl border border-white/[0.06] bg-[#211c2d] p-7 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M12 9v4"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 17h.01"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3 className="mt-4 text-sm font-semibold text-foreground">
                {language === "es" ? "El Botón de Crisis" : "The Crisis Button"}
              </h3>

              <p className="mt-2 text-[11px] leading-5 text-muted-foreground">
                {language === "es"
                  ? "Una propuesta de emergencia para momentos de bloqueo cognitivo severo."
                  : "An emergency quick-action for moments of severe cognitive blocks."}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/*
      ============================================================
      PROCESS
      ============================================================
    */}
      {isDesignProject && (
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-[#100c19]"
        >
          <div className="container mx-auto max-w-6xl px-6 py-24 md:py-28">
            <div className="mb-16 text-center">
              <p className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                {t.process}
              </p>

              <h2 className="mt-4 font-superlobster text-4xl text-foreground md:text-5xl">
                {language === "es"
                  ? "El Viaje Creativo"
                  : "The Creative Journey"}
              </h2>
            </div>

            <div className="relative overflow-x-auto pb-6">
              <div className="relative min-w-[760px]">
                {/* timeline line */}
                <div className="absolute left-8 right-8 top-6 h-px bg-white/15" />

                <div className="relative grid grid-cols-6 gap-4">
                  {processSteps.map((step, idx) => {
                    const isActive = idx === activeStepIndex;
                    const isDone = idx <= activeStepIndex;
                    const Icon = getStepIcon(step.title);

                    return (
                      <motion.div
                        key={step.title}
                        ref={(el) => {
                          stepRefs.current[idx] = el;
                        }}
                        data-step-index={idx}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="text-center"
                      >
                        <motion.div
                          animate={{
                            scale: isActive ? 1.12 : 1,
                            backgroundColor: isDone
                              ? "var(--primary)"
                              : "rgba(255,255,255,0.06)",
                            borderColor: isDone
                              ? "var(--primary)"
                              : "rgba(255,255,255,0.12)",
                          }}
                          transition={{ duration: 0.3 }}
                          className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border"
                        >
                          <Icon
                            className="h-4 w-4"
                            style={{
                              color: isDone
                                ? "var(--primary-foreground)"
                                : "var(--muted-foreground)",
                            }}
                            strokeWidth={1.8}
                          />
                        </motion.div>

                        <p
                          className={`mt-5 text-[9px] font-semibold uppercase tracking-[0.2em] ${
                            isActive ? "text-primary" : "text-muted-foreground"
                          }`}
                        >
                          {step.title}
                        </p>

                        <p className="mx-auto mt-3 max-w-[130px] text-[10px] leading-5 text-muted-foreground">
                          {step.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/*
      ============================================================
      RESEARCH
      ============================================================
    */}
      {isDesignProject && (
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-[#100c19]"
        >
          <div className="container mx-auto max-w-6xl px-6 py-24 md:py-28">
            <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                  {t.research}
                </p>

                <h2 className="mt-4 font-superlobster text-4xl leading-tight text-foreground sm:text-5xl">
                  {language === "es" ? (
                    <>
                      Voz del <span className="text-primary">Usuario.</span>
                    </>
                  ) : (
                    <>
                      Voice of the <span className="text-primary">User.</span>
                    </>
                  )}
                </h2>

                <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
                  {language === "es"
                    ? "Escuchar a los usuarios permitió entender qué necesitaban realmente y qué obstáculos estaban atravesando."
                    : "Listening to users helped reveal what they actually needed and what obstacles they were facing."}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {researchHighlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-xl border border-white/[0.06] bg-[#211c2d] p-6"
                  >
                    <span className="font-serif text-xl text-primary/70">
                      “
                    </span>

                    <p className="mt-2 text-sm leading-7 text-foreground/90">
                      {item.detail}
                    </p>

                    <p className="mt-5 text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                      — {item.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/*
      ============================================================
      DESIGN DECISIONS
      ============================================================
    */}
      {isDesignProject && (
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-[#292534]"
        >
          <div className="container mx-auto max-w-6xl px-6 py-24 md:py-28">
            <div className="mb-12">
              <p className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                {t.decisions}
              </p>

              <h2 className="mt-4 font-superlobster text-4xl text-foreground sm:text-5xl">
                {language === "es"
                  ? "Decisiones de Diseño"
                  : "Design Decisions"}
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {designDecisions.map((decision, index) => (
                <motion.div
                  key={decision.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-lg border border-white/[0.06] bg-[#100c19] p-6"
                >
                  <h3 className="text-sm font-semibold text-foreground">
                    {decision.title}
                  </h3>

                  <div className="mt-6 space-y-5">
                    <div>
                      <p className="text-[8px] uppercase tracking-[0.25em] text-primary">
                        {language === "es" ? "Problema" : "Problem"}
                      </p>

                      <p className="mt-2 text-[11px] leading-5 text-muted-foreground">
                        {decision.problem}
                      </p>
                    </div>

                    <div>
                      <p className="text-[8px] uppercase tracking-[0.25em] text-primary">
                        {language === "es" ? "Decisión" : "Decision"}
                      </p>

                      <p className="mt-2 text-[11px] leading-5 text-muted-foreground">
                        {decision.decision}
                      </p>
                    </div>

                    <div>
                      <p className="text-[8px] uppercase tracking-[0.25em] text-primary">
                        {language === "es" ? "Impacto" : "Impact"}
                      </p>

                      <p className="mt-2 text-[11px] leading-5 text-muted-foreground">
                        {decision.impact}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/*
      ============================================================
      TECHNICAL IMPLEMENTATION
      ============================================================
    */}
      {(isDevOnly || project.architecture || project.githubUrl) && (
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-[#100c19]"
        >
          <div className="container mx-auto max-w-6xl px-6 py-24 md:py-28">
            <div className="mb-10 max-w-2xl">
              <p className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                {language === "es"
                  ? "Implementación técnica"
                  : "Technical implementation"}
              </p>

              <h2 className="mt-4 font-superlobster text-4xl text-foreground sm:text-5xl">
                {language === "es"
                  ? "Arquitectura y código"
                  : "Architecture & code"}
              </h2>

              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                {language === "es"
                  ? "Detalles técnicos relevantes, decisiones de implementación y recursos."
                  : "Relevant technical details, implementation decisions, and resources."}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {project.architecture && (
                <div className="rounded-xl border border-white/[0.06] bg-[#211c2d] p-6">
                  <p className="text-[9px] uppercase tracking-[0.28em] text-primary">
                    {language === "es" ? "Arquitectura" : "Architecture"}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {project.architecture}
                  </p>
                </div>
              )}

              {project.repoHighlights && (
                <div className="rounded-xl border border-white/[0.06] bg-[#211c2d] p-6">
                  <p className="text-[9px] uppercase tracking-[0.28em] text-primary">
                    {language === "es"
                      ? "Puntos claves del repositorio"
                      : "Repo highlights"}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
                    {project.repoHighlights.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.githubUrl && (
                <div className="rounded-xl border border-white/[0.06] bg-[#211c2d] p-6 md:col-span-2">
                  <p className="text-[9px] uppercase tracking-[0.28em] text-primary">
                    GitHub
                  </p>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm text-foreground underline decoration-primary/50 underline-offset-4 transition-colors hover:text-primary"
                  >
                    {project.githubUrl}
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.section>
      )}

      {/*
      ============================================================
      FINAL SOLUTION
      ============================================================
    */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-[#100c19]"
      >
        <div className="container mx-auto max-w-6xl px-6 py-24 md:py-28">
          <div className="mb-14 text-center">
            <p className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              {t.finalSolution}
            </p>

            <h2 className="mt-4 font-superlobster text-4xl text-foreground sm:text-5xl">
              {language === "es" ? "La Solución Final" : "The Final Solution"}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
              {project.finalSolution ||
                (language === "es"
                  ? "Una interfaz diseñada para acompañar al usuario de forma clara, simple y coherente."
                  : "An interface designed to guide users through a clear, simple and coherent experience.")}
            </p>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-xl"
            >
              <img
                src={resolveImage(project.image)}
                alt={`${project.title} final interface`}
                className="h-[360px] w-full object-cover md:h-[480px]"
              />
            </motion.div>

            <div>
              <h3 className="text-xl font-semibold text-foreground">
                {language === "es"
                  ? "Una experiencia pensada para el usuario"
                  : "An experience designed around the user"}
              </h3>

              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {project.finalSolution ||
                  project.solution ||
                  project.description}
              </p>

              <div className="mt-7 space-y-4">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/*
      ============================================================
      RESULTS
      ============================================================
    */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-[#100c19]"
      >
        <div className="container mx-auto max-w-6xl px-6 pb-28 pt-8 md:pb-36">
          <div className="rounded-xl border border-white/[0.06] bg-[#211c2d] p-7 md:p-10">
            <div className="grid items-center gap-8 md:grid-cols-[0.35fr_0.65fr]">
              <div className="md:border-r md:border-white/[0.08] md:pr-8">
                <p className="font-superlobster text-4xl text-primary md:text-5xl">
                  {project.outcome ? "✓" : "+40%"}
                </p>

                <p className="mt-3 text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                  {language === "es"
                    ? "Resultado del proyecto"
                    : "Project outcome"}
                </p>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
                  {t.results}
                </p>

                <h2 className="mt-3 font-superlobster text-2xl text-foreground md:text-3xl">
                  {language === "es"
                    ? "Resultados y Aprendizajes"
                    : "Results & Learnings"}
                </h2>

                <div className="mt-4 space-y-3">
                  {finalOutcomeItems.map((item) => (
                    <p
                      key={item}
                      className="text-sm leading-7 text-muted-foreground"
                    >
                      {item}
                    </p>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                    {t.learnings}
                  </span>

                  <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                    {t.impact}
                  </span>

                  <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                    {t.nextSteps}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
