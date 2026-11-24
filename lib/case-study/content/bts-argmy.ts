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
            "Proyecto final del curso de Desarrollo Web en Coderhouse, pensado como hub digital para la comunidad ARMY en Argentina.",
        },
        {
          title: "Mi participación",
          description:
            "Proyecto individual: arquitectura de información, jerarquía visual, diseño responsivo y desarrollo frontend de las cinco páginas.",
        },
        {
          title: "Tecnologías",
          description:
            "Stitch de Google · Figma · HTML5 · SCSS · CSS3 · Bootstrap · JavaScript · SEO · Git · GitHub",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        {
          title: "Tipo de proyecto",
          description: "Sitio web responsivo para una comunidad",
        },
        { title: "Año", description: "2026" },
        { title: "Equipo", description: "Proyecto individual" },
      ],
    },
    { type: "problem", title: "Problema y oportunidad" },
    { type: "design-process", title: "Proceso de diseño" },
    {
      type: "design-decisions",
      title: "Decisiones de diseño",
    },
    { type: "development", title: "Implementación frontend" },
    {
      type: "final-solution",
      title: "Solución final",
      image: "/images/btsargmy-screens.png",
    },
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
            "Final project for the Web Development course at Coderhouse, designed as a digital hub for the ARMY community in Argentina.",
        },
        {
          title: "My contribution",
          description:
            "Solo project: information architecture, visual hierarchy, responsive design, and frontend development across five pages.",
        },
        {
          title: "Technologies",
          description:
            "HTML5 · SCSS · CSS3 · Bootstrap · JavaScript · SEO · Git · GitHub",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        {
          title: "Project type",
          description: "Responsive community website",
        },
        { title: "Year", description: "2026" },
        { title: "Team", description: "Solo project" },
      ],
    },
    { type: "problem", title: "Problem and opportunity" },
    { type: "design-process", title: "Design process" },
    {
      type: "design-decisions",
      title: "Design decisions",
    },
    { type: "development", title: "Frontend implementation" },
    {
      type: "final-solution",
      title: "Final solution",
      image: "/images/btsargmy-screens.png",
    },
    { type: "result" },
    { type: "learnings" },
  ],
})
