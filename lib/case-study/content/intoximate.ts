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
            "Proyecto final de Proyecto Senior, trabajado como si fuera un encargo freelance.",
        },
        {
          title: "Mi participación",
          description:
            "UX/UI y desarrollo mobile junto a un compañero, con planificación y seguimiento de tiempos.",
        },
        {
          title: "Resultado",
          description:
            "Versión beta funcional validada con usuarios y alineada con la propuesta inicial.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        { title: "Tipo de proyecto", description: "Proyecto académico · UX/UI + Desarrollo Mobile" },
        { title: "Año", description: "2023" },
        {
          title: "Herramientas",
          description:
            "React Native · Expo · Jira · GitHub · UX Research · Scrum · Design Thinking",
        },
      ],
    },
    {
      type: "context",
      title: "El proyecto",
      body: "intoximate fue desarrollado como proyecto final de Proyecto Senior junto a un compañero.\nEl objetivo era explorar una tecnología que no conocíamos y encarar el proyecto como si se tratara de un encargo freelance, incluyendo planificación, seguimiento de tiempos, diseño, desarrollo y validación.",
    },
    {
      type: "challenge",
      title: "¿Qué tomo?",
      body: "La propuesta buscaba resolver una situación sencilla y cotidiana: decidir qué tomar.",
      description:
        "En lugar de limitarse a mostrar recetas, la aplicación propone diferentes formas de descubrir tragos según preferencias, además de incorporar dinámicas más lúdicas.",
    },
    {
      type: "concept",
      title: "Buscar → Filtrar → Descubrir → Jugar",
      body: "La aplicación permite explorar diferentes tragos mediante filtros y encontrar opciones que se adapten a las preferencias del usuario.\nSobre esa base se incorporan juegos, un aleatorizador de tragos y el descubrimiento de nuevas combinaciones.",
    },
    {
      type: "design-process",
      title: "Diseño y validación",
      body: "Durante la etapa de diseño trabajamos con Design Thinking para definir la propuesta de valor y validar la solución con usuarios.\nA partir de ahí desarrollamos prototipos de media y alta fidelidad que sirvieron como base para la versión funcional.",
    },
    {
      type: "development",
      title: "Aprender la tecnología mientras se construye",
      body: "Uno de los desafíos principales fue aprender una tecnología nueva durante el proyecto.\nEl desarrollo implicó investigar y trabajar con React Native, Expo, APIs y GitHub.\nEl proyecto se organizó mediante Scrum, con dos checkpoints principales: Diseño y Desarrollo.",
      items: [
        "React Native y Expo como stack de la app mobile.",
        "Integración de APIs para el catálogo de tragos.",
        "Gestión del trabajo en Jira y GitHub.",
      ],
    },
    {
      type: "technologies",
      title: "Tecnologías",
      items: [
        "React Native",
        "Expo",
        "Jira",
        "GitHub",
        "Google Docs · Google Sheets",
      ],
    },
    {
      type: "result",
      title: "Resultado",
      description:
        "El resultado fue una versión beta funcional validada por usuarios y alineada con la propuesta inicial.",
    },
    {
      type: "learnings",
      title: "Aprendizajes",
      items: [
        "Combinar diseño y desarrollo en un mismo proyecto cambia la forma de tomar decisiones: se piensa en lo que se puede sostener técnicamente.",
        "Aprender una tecnología nueva mientras se construye el producto exige planificar con margen y priorizar el MVP.",
      ],
    },
  ],
  en: [
    { type: "hero" },
    {
      type: "overview",
      cards: [
        {
          title: "Context",
          description:
            "Final project for Proyecto Senior, run as if it were a freelance commission.",
        },
        {
          title: "My role",
          description:
            "UX/UI and mobile development with a teammate, including planning and time tracking.",
        },
        {
          title: "Outcome",
          description:
            "Working beta validated with users and aligned with the initial proposal.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        { title: "Project type", description: "Academic project · UX/UI + Mobile Development" },
        { title: "Year", description: "2023" },
        {
          title: "Tools",
          description:
            "React Native · Expo · Jira · GitHub · UX Research · Scrum · Design Thinking",
        },
      ],
    },
    {
      type: "context",
      title: "The project",
      body: "intoximate was built as the final project for Proyecto Senior with a teammate.\nThe goal was to explore a technology we didn't know and run the project like a freelance commission: planning, time tracking, design, development, and validation.",
    },
    {
      type: "challenge",
      title: "What should I drink?",
      body: "The proposal set out to solve a simple everyday situation: deciding what to drink.",
      description:
        "Instead of just listing recipes, the app offers different ways to discover drinks based on preferences, plus more playful dynamics.",
    },
    {
      type: "concept",
      title: "Search → Filter → Discover → Play",
      body: "The app lets you explore drinks through filters and find options that match your preferences.\nOn top of that it adds games, a drink randomizer, and the discovery of new combinations.",
    },
    {
      type: "design-process",
      title: "Design and validation",
      body: "During design we used Design Thinking to define the value proposition and validate the solution with users.\nFrom there we built medium- and high-fidelity prototypes that became the base for the working version.",
    },
    {
      type: "development",
      title: "Learning the technology while building",
      body: "One of the main challenges was learning a new technology during the project.\nDevelopment meant researching and working with React Native, Expo, APIs, and GitHub.\nThe project ran on Scrum with two main checkpoints: Design and Development.",
      items: [
        "React Native and Expo as the mobile stack.",
        "API integration for the drinks catalogue.",
        "Work managed in Jira and GitHub.",
      ],
    },
    {
      type: "technologies",
      title: "Technologies",
      items: [
        "React Native",
        "Expo",
        "Jira",
        "GitHub",
        "Google Docs · Google Sheets",
      ],
    },
    {
      type: "result",
      title: "Result",
      description:
        "The outcome was a working beta validated by users and aligned with the initial proposal.",
    },
    {
      type: "learnings",
      title: "Learnings",
      items: [
        "Combining design and development in one project changes how you decide: you think about what you can actually sustain technically.",
        "Learning a new technology while building the product requires planning slack and ruthless MVP prioritisation.",
      ],
    },
  ],
})
