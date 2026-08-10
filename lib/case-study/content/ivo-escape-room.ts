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
            "Jornadas IVO en la Escuela ORT: presentar la orientación de Informática a estudiantes de segundo año.",
        },
        {
          title: "Equipo",
          description: "Proyecto colaborativo con mi equipo de trabajo en ORT.",
        },
        {
          title: "Resultado",
          description:
            "Sala de escape digital de cinco subsalas, testeada e iterada antes de las jornadas.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        {
          title: "Rol",
          description: "Diseño de la sala de Diseño · Desarrollo · Narrativa · UX Testing",
        },
        { title: "Año", description: "2025" },
        {
          title: "Herramientas",
          description: "Stitch · v0 · TypeScript · Next.js · Tailwind CSS · GitHub Projects",
        },
      ],
    },
    {
      type: "context",
      title: "El proyecto",
      body: "Sala de Escape IVO fue desarrollada en 2025 junto a mi equipo de trabajo en la Escuela ORT para las jornadas IVO.\nDurante estas jornadas, estudiantes de segundo año recorren las distintas orientaciones que les interesan para conocer mejor sus propuestas.\nNuestro desafío fue mostrar el potencial de la orientación de Informática de una manera que no fuera únicamente expositiva.",
    },
    {
      type: "challenge",
      title: "¿Cómo podemos enseñar mientras los estudiantes juegan?",
      body: "A partir del feedback de ediciones anteriores decidimos transformar la experiencia en algo interactivo.\nLa respuesta fue una sala de escape digital dividida en cinco subsalas, cada una asociada a uno de los pilares de la orientación.",
      description:
        "El contenido no debía aparecer como una explicación aislada, sino como parte del desafío.",
      sideHighlight: {
        title: "Jugar para entender",
        description:
          "Cada puzzle está construido sobre un contenido real de la orientación.",
      },
    },
    {
      type: "concept",
      title: "La experiencia",
      body: "La experiencia utiliza una historia como hilo conductor que conecta todas las salas.\nCada subsala propone desafíos y puzzles relacionados con diferentes áreas de la orientación.\nMi responsabilidad principal fue desarrollar la sala de Diseño.",
    },
    {
      type: "interaction-design",
      title: "Sala de Diseño",
      body: "Para esta sala diseñé una especie de consola interactiva.\nLos estudiantes deben arrastrar diferentes campos hasta conseguir que los diseños coincidan y luego resolver un puzzle relacionado con conceptos de diseño que se trabajan durante la orientación.",
    },
    {
      type: "concept",
      id: "narrativa",
      title: "Narrativa",
      body: "Además del desarrollo de la sala, trabajé sobre la historia que funciona como hilo conductor de toda la experiencia.\nLa narrativa permitió conectar las diferentes subsalas y convertir los desafíos individuales en una experiencia coherente.",
    },
    {
      type: "testing",
      title: "Testing e iteración",
      body: "Conduje pruebas de usabilidad con estudiantes de tercero, cuarto y quinto año.\nLas pruebas permitieron detectar errores y problemas de comprensión que fueron iterados durante las semanas previas a las jornadas. Las últimas pruebas lograron que los estudiantes pudieran completar las salas sin inconvenientes.",
      items: [
        "Tiempo necesario para completar las salas.",
        "Comprensión de los desafíos.",
        "Atractividad de la experiencia.",
        "Relación entre los contenidos y la orientación.",
      ],
    },
    {
      type: "final-solution",
      title: "Aprendizaje, narrativa e interacción",
      description:
        "La Sala de Escape IVO presenta una orientación académica desde una experiencia práctica y entretenida.",
      body: "Cinco subsalas conectadas por una historia, con desafíos que traducen los pilares de la orientación en interacción.",
    },
    {
      type: "result",
      title: "Resultados y aprendizajes",
      description:
        "Las últimas rondas de testing lograron que los estudiantes completaran las salas sin bloqueos.",
      items: [
        "Trabajar en un contexto real con usuarios jóvenes.",
        "La narrativa y la interacción pueden transformar contenido educativo en una experiencia que invita a participar.",
        "El testing iterativo fue lo que hizo la experiencia comprensible.",
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
            "IVO days at ORT School: introducing the Computer Science track to second-year students.",
        },
        {
          title: "Team",
          description: "Collaborative project with my team at ORT.",
        },
        {
          title: "Outcome",
          description:
            "A digital escape room with five sub-rooms, tested and iterated before the event.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        {
          title: "Role",
          description: "Design room design · Development · Narrative · UX Testing",
        },
        { title: "Year", description: "2025" },
        {
          title: "Tools",
          description: "Stitch · v0 · TypeScript · Next.js · Tailwind CSS · GitHub Projects",
        },
      ],
    },
    {
      type: "context",
      title: "The project",
      body: "Sala de Escape IVO was built in 2025 with my team at ORT School for the IVO days.\nDuring those days, second-year students visit the tracks they're interested in to learn more about them.\nOur challenge was to show the potential of the Computer Science track in a way that wasn't purely expository.",
    },
    {
      type: "challenge",
      title: "How can we teach while students play?",
      body: "Based on feedback from previous editions we decided to turn the experience into something interactive.\nThe answer was a digital escape room split into five sub-rooms, each tied to one of the track's pillars.",
      description:
        "The content shouldn't show up as a separate explanation, but as part of the challenge.",
      sideHighlight: {
        title: "Play to understand",
        description:
          "Every puzzle is built on real content from the track.",
      },
    },
    {
      type: "concept",
      title: "The experience",
      body: "The experience uses a story as the thread that connects all the rooms.\nEach sub-room poses challenges and puzzles related to different areas of the track.\nMy main responsibility was building the Design room.",
    },
    {
      type: "interaction-design",
      title: "The Design room",
      body: "For this room I designed a kind of interactive console.\nStudents drag different fields until the designs match, then solve a puzzle based on design concepts covered during the track.",
    },
    {
      type: "concept",
      id: "narrative",
      title: "Narrative",
      body: "Beyond building the room, I worked on the story that ties the whole experience together.\nThe narrative connected the different sub-rooms and turned individual challenges into a coherent experience.",
    },
    {
      type: "testing",
      title: "Testing and iteration",
      body: "I ran usability tests with third-, fourth-, and fifth-year students.\nThe tests surfaced bugs and comprehension issues that we iterated on in the weeks before the event. In the final rounds students completed the rooms without trouble.",
      items: [
        "Time needed to complete the rooms.",
        "Understanding of the challenges.",
        "Appeal of the experience.",
        "Connection between the content and the track.",
      ],
    },
    {
      type: "final-solution",
      title: "Learning, narrative, and interaction",
      description:
        "Sala de Escape IVO presents an academic track through a hands-on, entertaining experience.",
      body: "Five sub-rooms connected by a story, with challenges that translate the track's pillars into interaction.",
    },
    {
      type: "result",
      title: "Results & learnings",
      description:
        "The final testing rounds got students through every room without blockers.",
      items: [
        "Working in a real context with young users.",
        "Narrative and interaction can turn educational content into an experience people want to join.",
        "Iterative testing is what made the experience understandable.",
      ],
    },
  ],
})
