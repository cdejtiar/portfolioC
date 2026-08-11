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
            "Proyecto de la materia Sistemas Gamificados: gamificación aplicada al hábito de leer.",
        },
        {
          title: "Mi participación",
          description:
            "Diseño del sistema gamificado, User Flow y prototipo funcional.",
        },
        {
          title: "Resultado",
          description:
            "Propuesta de app móvil que combina seguimiento personal, descubrimiento y comunidad.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        { title: "Tipo de proyecto", description: "Proyecto académico · UX/UI + Gamification" },
        { title: "Año", description: "2023" },
        {
          title: "Herramientas",
          description: "Figma · Gamification Canvas · User Flow · UX Research",
        },
      ],
    },
    {
      type: "context",
      title: "El proyecto",
      body: "GameReads fue desarrollado durante la materia Sistemas Gamificados.\nLa propuesta consiste en una aplicación móvil que utiliza estrategias de gamificación para motivar a las personas a leer más, mientras facilita el descubrimiento de nuevos libros y la conexión con otros lectores.",
    },
    {
      type: "challenge",
      title: "Gamificar sin quedarse en el registro",
      body: "El proyecto parte de una pregunta: ¿cómo podemos utilizar dinámicas de juego para transformar el seguimiento de lecturas en una experiencia que motive a continuar leyendo?",
      description:
        "La propuesta no busca solamente registrar libros terminados, sino crear un sistema que genere un cambio positivo en el comportamiento.",
    },
    {
      type: "concept",
      title: "Registrar → Descubrir → Conectar",
      body: "La experiencia combina tres dimensiones: los usuarios pueden registrar sus lecturas, recibir recomendaciones basadas en sus intereses y relacionarse con personas con gustos similares.\nTambién pueden compartir puntuaciones, opiniones y críticas.",
    },
    {
      type: "design-decisions",
      title: "Gamificación como mecanismo, no como adorno",
      decisions: [
        {
          title: "Gamification Canvas como estructura",
          problem:
            "Las dinámicas de juego podían quedar como una capa decorativa sin relación con el objetivo.",
          decision:
            "Estructurar la propuesta con un Gamification Canvas para definir cómo cada dinámica acompaña el objetivo principal.",
          impact:
            "La gamificación quedó ligada al hábito de lectura en lugar de funcionar como un elemento aislado.",
        },
      ],
    },
    {
      type: "design-process",
      title: "Del análisis al prototipo",
      body: "Después del análisis de diferentes plataformas existentes, desarrollé el User Flow y el prototipo funcional de la aplicación.",
    },
    {
      type: "final-solution",
      title: "Funcionalidades principales",
      items: [
        "Registro de lecturas.",
        "Recomendaciones personalizadas.",
        "Calificación de libros.",
        "Compartir opiniones.",
        "Conexión entre lectores.",
        "Sistema de puntuaciones.",
      ],
    },
    {
      type: "result",
      title: "Resultado",
      description:
        "GameReads propone transformar una actividad individual en una experiencia que combina seguimiento personal, descubrimiento y comunidad.",
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
            "Project for the Gamified Systems course: gamification applied to the reading habit.",
        },
        {
          title: "My role",
          description:
            "Gamified system design, user flow, and working prototype.",
        },
        {
          title: "Outcome",
          description:
            "A mobile app proposal combining personal tracking, discovery, and community.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        { title: "Project type", description: "Academic project · UX/UI + Gamification" },
        { title: "Year", description: "2023" },
        {
          title: "Tools",
          description: "Figma · Gamification Canvas · User Flow · UX Research",
        },
      ],
    },
    {
      type: "context",
      title: "The project",
      body: "GameReads was built during the Gamified Systems course.\nIt is a mobile app that uses gamification strategies to motivate people to read more, while making it easier to discover new books and connect with other readers.",
    },
    {
      type: "challenge",
      title: "Gamifying beyond tracking",
      body: "The project starts from a question: how can we use game dynamics to turn reading tracking into an experience that motivates people to keep reading?",
      description:
        "The goal isn't only logging finished books, but building a system that drives a positive behaviour change.",
    },
    {
      type: "concept",
      title: "Track → Discover → Connect",
      body: "The experience combines three dimensions: users can log their reading, get recommendations based on their interests, and connect with people who share similar taste.\nThey can also share ratings, opinions, and reviews.",
    },
    {
      type: "design-decisions",
      title: "Gamification as a mechanism, not decoration",
      decisions: [
        {
          title: "Gamification Canvas as structure",
          problem:
            "Game dynamics risked becoming a decorative layer disconnected from the goal.",
          decision:
            "Structure the proposal with a Gamification Canvas to define how each dynamic supports the main objective.",
          impact:
            "Gamification stayed tied to the reading habit instead of working as an isolated element.",
        },
      ],
    },
    {
      type: "design-process",
      title: "From analysis to prototype",
      body: "After analysing several existing platforms, I built the user flow and the working prototype of the app.",
    },
    {
      type: "final-solution",
      title: "Key features",
      items: [
        "Reading log.",
        "Personalized recommendations.",
        "Book ratings.",
        "Sharing opinions.",
        "Connection between readers.",
        "Points system.",
      ],
    },
    {
      type: "result",
      title: "Result",
      description:
        "GameReads turns an individual activity into an experience that combines personal tracking, discovery, and community.",
    },
  ],
})
