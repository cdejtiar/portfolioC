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
        { title: "Equipo", description: "Proyecto en pareja, organizado con Scrum." },
        {
          title: "Resultado",
          description: "Versión beta funcional validada con usuarios.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        { title: "Rol", description: "UX/UI Design · Desarrollo mobile" },
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
      body: "intoximate fue desarrollado como proyecto final de Proyecto Senior junto a un compañero.\nEl objetivo era explorar una tecnología que no conocíamos y desarrollar el proyecto como si se tratara de un encargo freelance, incluyendo planificación, seguimiento de tiempos, diseño, desarrollo y validación.",
    },
    {
      type: "challenge",
      title: "¿Qué tomo?",
      body: "La propuesta buscaba resolver una situación sencilla: elegir un trago.\nEn lugar de limitarse a mostrar recetas, la aplicación propone diferentes formas de descubrir tragos según preferencias, además de incorporar dinámicas más lúdicas.",
      description:
        "El recetario no era el problema: el problema era decidir y experimentar con algo nuevo.",
      sideHighlight: {
        title: "Descubrir, no buscar",
        description:
          "Filtros y azar conviven para que elegir sea parte de la diversión.",
      },
    },
    {
      type: "concept",
      title: "Buscar → Filtrar → Descubrir → Jugar",
      body: "La aplicación permite explorar diferentes tragos mediante filtros y encontrar opciones que se adapten a las preferencias del usuario.",
      items: ["Juegos.", "Aleatorizador de tragos.", "Descubrimiento de nuevas combinaciones."],
    },
    {
      type: "prototyping",
      title: "Diseño",
      body: "Durante la etapa de Diseño trabajamos con Design Thinking para definir la propuesta de valor y validar la solución con usuarios.\nA partir de esta etapa desarrollamos prototipos de media y alta fidelidad que sirvieron como base para la versión funcional.",
    },
    {
      type: "development",
      title: "Desarrollo",
      description:
        "Uno de los desafíos principales fue aprender una tecnología nueva durante el proyecto.",
      body: "El proyecto se organizó mediante Scrum, con dos checkpoints principales: Diseño y Desarrollo.",
      items: ["React Native.", "Expo.", "APIs.", "GitHub."],
    },
    {
      type: "final-solution",
      title: "Una beta funcional, no una maqueta",
      description:
        "El resultado fue una versión beta funcional validada por usuarios y alineada con la propuesta inicial.",
      body: "La app combina búsqueda con filtros, descubrimiento aleatorio y dinámicas de juego dentro de una misma experiencia.",
    },
    {
      type: "result",
      title: "Resultados y aprendizajes",
      description:
        "Beta funcional entregada dentro de los plazos definidos y validada con usuarios reales.",
      items: [
        "Combinar diseño y desarrollo dentro de un mismo proyecto.",
        "Aprender una tecnología nueva mientras se construye el producto.",
        "Trabajar con planificación, seguimiento de tiempos y checkpoints como en un encargo real.",
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
        { title: "Team", description: "Two-person project, organized with Scrum." },
        {
          title: "Outcome",
          description: "Working beta version validated with users.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        { title: "Role", description: "UX/UI Design · Mobile development" },
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
      body: "intoximate was built as the final project for Proyecto Senior together with a classmate.\nThe goal was to explore a technology we didn't know and run the project like a freelance commission, including planning, time tracking, design, development, and validation.",
    },
    {
      type: "challenge",
      title: "What should I drink?",
      body: "The project set out to solve a simple situation: choosing a drink.\nInstead of just listing recipes, the app offers different ways to discover drinks based on preferences, plus more playful dynamics.",
      description:
        "The recipe book wasn't the problem: deciding — and trying something new — was.",
      sideHighlight: {
        title: "Discover, don't search",
        description:
          "Filters and randomness coexist so choosing becomes part of the fun.",
      },
    },
    {
      type: "concept",
      title: "Search → Filter → Discover → Play",
      body: "The app lets people explore drinks through filters and find options that match their preferences.",
      items: ["Games.", "Drink randomizer.", "Discovering new combinations."],
    },
    {
      type: "prototyping",
      title: "Design",
      body: "During the design stage we used Design Thinking to define the value proposition and validate the solution with users.\nFrom there we built medium- and high-fidelity prototypes that became the base for the working version.",
    },
    {
      type: "development",
      title: "Development",
      description:
        "One of the main challenges was learning a new technology during the project.",
      body: "The project was organized with Scrum, with two main checkpoints: Design and Development.",
      items: ["React Native.", "Expo.", "APIs.", "GitHub."],
    },
    {
      type: "final-solution",
      title: "A working beta, not a mockup",
      description:
        "The result was a working beta version validated by users and aligned with the initial proposal.",
      body: "The app combines filtered search, random discovery, and playful dynamics in a single experience.",
    },
    {
      type: "result",
      title: "Results & learnings",
      description:
        "Working beta delivered within the defined timeline and validated with real users.",
      items: [
        "Combining design and development inside a single project.",
        "Learning a new technology while building the product.",
        "Working with planning, time tracking, and checkpoints like a real commission.",
      ],
    },
  ],
})
