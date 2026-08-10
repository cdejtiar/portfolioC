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
            "Materia Sistemas Gamificados: usar dinámicas de juego para sostener el hábito de leer.",
        },
        { title: "Equipo", description: "Proyecto individual." },
        {
          title: "Resultado",
          description:
            "Prototipo funcional de una app que combina seguimiento personal, descubrimiento y comunidad.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        { title: "Rol", description: "UX/UI Design · Gamification" },
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
      title: "Registrar libros no cambia un hábito.",
      body: "El proyecto parte de una pregunta: ¿cómo podemos utilizar dinámicas de juego para transformar el seguimiento de lecturas en una experiencia que motive a continuar leyendo?",
      description:
        "La propuesta no busca solamente registrar libros terminados, sino crear un sistema que genere un cambio positivo en el comportamiento.",
      sideHighlight: {
        title: "Motivación, no métrica",
        description:
          "La gamificación refuerza el hábito; no es un puntaje decorativo sobre la lectura.",
      },
    },
    {
      type: "concept",
      title: "Registrar → Descubrir → Conectar",
      body: "GameReads combina tres dimensiones. Los usuarios pueden registrar sus lecturas, recibir recomendaciones basadas en sus intereses y relacionarse con personas con gustos similares.\nTambién pueden compartir puntuaciones, opiniones y críticas.",
    },
    {
      type: "design-decisions",
      title: "Gamificación con propósito",
      decisions: [
        {
          title: "Gamification Canvas como marco",
          problem:
            "Las mecánicas de juego suelen agregarse al final, sin relación con el objetivo del producto.",
          decision:
            "Definir la propuesta desde un Gamification Canvas antes de diseñar pantallas.",
          impact:
            "Cada dinámica quedó justificada por su aporte al hábito de lectura.",
        },
        {
          title: "Gamificación como mecanismo, no como capa",
          problem:
            "Un sistema de puntos aislado premia la actividad, pero no sostiene el hábito.",
          decision:
            "Vincular puntuaciones y recompensas al progreso de lectura y a la interacción entre lectores.",
          impact:
            "La motivación se apoya en el propio hábito en lugar de en recompensas puntuales.",
        },
      ],
    },
    {
      type: "prototyping",
      title: "Diseño y prototipado",
      body: "Después del análisis de diferentes plataformas existentes, desarrollé el User Flow y el prototipo funcional de la aplicación.",
    },
    {
      type: "final-solution",
      title: "Leer, descubrir y compartir en un mismo lugar",
      description:
        "GameReads propone transformar una actividad individual en una experiencia que combina seguimiento personal, descubrimiento y comunidad.",
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
      title: "Resultados y aprendizajes",
      description:
        "Un prototipo funcional que muestra cómo la gamificación puede sostener un hábito sin convertirlo en una competencia.",
      items: [
        "Gamification Canvas aplicado a un objetivo de comportamiento concreto.",
        "User Flow y prototipo funcional completos.",
        "Las dinámicas de juego funcionan cuando refuerzan el objetivo, no cuando lo reemplazan.",
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
            "Gamified Systems course: using game dynamics to sustain the reading habit.",
        },
        { title: "Team", description: "Solo project." },
        {
          title: "Outcome",
          description:
            "Working prototype of an app that blends personal tracking, discovery, and community.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        { title: "Role", description: "UX/UI Design · Gamification" },
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
      body: "GameReads was built during the Gamified Systems course.\nIt's a mobile app that uses gamification strategies to motivate people to read more, while making it easier to discover new books and connect with other readers.",
    },
    {
      type: "challenge",
      title: "Logging books doesn't change a habit.",
      body: "The project starts from one question: how can we use game dynamics to turn reading tracking into an experience that motivates people to keep reading?",
      description:
        "The goal isn't only to log finished books, but to build a system that drives a positive behavior change.",
      sideHighlight: {
        title: "Motivation, not metrics",
        description:
          "Gamification reinforces the habit; it isn't a decorative score on top of reading.",
      },
    },
    {
      type: "concept",
      title: "Track → Discover → Connect",
      body: "GameReads combines three dimensions. Users can log their reading, get recommendations based on their interests, and connect with people who share their taste.\nThey can also share ratings, opinions, and reviews.",
    },
    {
      type: "design-decisions",
      title: "Gamification with a purpose",
      decisions: [
        {
          title: "Gamification Canvas as the framework",
          problem:
            "Game mechanics are usually bolted on at the end, disconnected from the product goal.",
          decision:
            "Define the proposal through a Gamification Canvas before designing any screen.",
          impact:
            "Every dynamic was justified by how it supports the reading habit.",
        },
        {
          title: "Gamification as a mechanism, not a layer",
          problem:
            "An isolated points system rewards activity but doesn't sustain the habit.",
          decision:
            "Tie scores and rewards to reading progress and to reader-to-reader interaction.",
          impact:
            "Motivation rests on the habit itself rather than on one-off rewards.",
        },
      ],
    },
    {
      type: "prototyping",
      title: "Design and prototyping",
      body: "After analyzing existing platforms, I built the user flow and the working prototype of the app.",
    },
    {
      type: "final-solution",
      title: "Read, discover, and share in one place",
      description:
        "GameReads turns an individual activity into an experience that combines personal tracking, discovery, and community.",
      items: [
        "Reading log.",
        "Personalized recommendations.",
        "Book ratings.",
        "Sharing opinions.",
        "Reader-to-reader connections.",
        "Points system.",
      ],
    },
    {
      type: "result",
      title: "Results & learnings",
      description:
        "A working prototype showing how gamification can sustain a habit without turning it into a competition.",
      items: [
        "Gamification Canvas applied to a concrete behavioral goal.",
        "Complete user flow and working prototype.",
        "Game dynamics work when they reinforce the goal, not when they replace it.",
      ],
    },
  ],
})
