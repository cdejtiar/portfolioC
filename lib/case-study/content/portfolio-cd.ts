import { defineCaseStudy } from "./define"

export default defineCaseStudy({
  es: [
    { type: "hero" },
    {
      type: "overview",
      cards: [
        {
          title: "Contexto",
          description:
            "Producto personal desarrollado en 2026 para presentar proyectos multidisciplinarios con case studies interactivos, escalables y bilingües.",
        },
        {
          title: "Mi participación",
          description:
            "Proyecto individual: diseño UX/UI, arquitectura del sistema de diseño y desarrollo frontend de la plataforma y el motor de case studies.",
        },
        {
          title: "Tecnologías",
          description:
            "Next.js · React · TypeScript · Tailwind CSS · GSAP · Figma · Vercel",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        {
          title: "Tipo de proyecto",
          description: "Design System & Web Platform",
        },
        { title: "Año", description: "2026" },
        { title: "Equipo", description: "Proyecto individual" },
      ],
    },
    { type: "problem", title: "El desafío" },
    {
      type: "design-decisions",
      title: "Decisiones de diseño y arquitectura",
    },
    { type: "development", title: "Arquitectura frontend" },
    { type: "final-solution", title: "Solución final" },
    { type: "result" },
    { type: "learnings" },
  ],
  en: [
    { type: "hero" },
    {
      type: "overview",
      cards: [
        {
          title: "Context",
          description:
            "Personal product built in 2026 to present multidisciplinary projects through interactive, scalable, bilingual case studies.",
        },
        {
          title: "My contribution",
          description:
            "Solo project: UX/UI design, design system architecture, and frontend development of the platform and case study engine.",
        },
        {
          title: "Technologies",
          description:
            "Next.js · React · TypeScript · Tailwind CSS · GSAP · Figma · Vercel",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        {
          title: "Project type",
          description: "Design System & Web Platform",
        },
        { title: "Year", description: "2026" },
        { title: "Team", description: "Solo project" },
      ],
    },
    { type: "problem", title: "The challenge" },
    {
      type: "design-decisions",
      title: "Design and architecture decisions",
    },
    { type: "development", title: "Frontend architecture" },
    { type: "final-solution", title: "Final solution" },
    { type: "result" },
    { type: "learnings" },
  ],
})
