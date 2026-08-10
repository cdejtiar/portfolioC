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
            "Proyecto final de Programación Multimedial IV: recrear el clásico juego del dinosaurio de Chrome.",
        },
        { title: "Equipo", description: "Proyecto individual." },
        {
          title: "Resultado",
          description:
            "Videojuego funcional con jugabilidad infinita y registro de puntajes.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        { title: "Rol", description: "Game Development" },
        { title: "Año", description: "2023" },
        { title: "Herramientas", description: "Unity · C# · SQLite · Visual Studio Code" },
      ],
    },
    {
      type: "context",
      title: "El proyecto",
      body: "RunnerDino fue desarrollado como proyecto final de Programación Multimedial IV.\nLa idea consistía en recrear la experiencia del clásico juego del dinosaurio de Google Chrome: un personaje que corre indefinidamente mientras debe esquivar obstáculos.",
    },
    {
      type: "challenge",
      title: "Replicar una mecánica para entender cómo funciona.",
      body: "El objetivo no era solamente replicar la mecánica principal, sino utilizar el proyecto como una oportunidad para comprender los fundamentos de C#, Unity y gestión de datos con SQLite.",
      description:
        "Un juego simple en apariencia obliga a resolver movimiento, colisiones, generación infinita y persistencia de datos.",
      sideHighlight: {
        title: "Simple no es fácil",
        description:
          "La mecánica más básica es la que expone con más claridad los fundamentos del motor.",
      },
    },
    {
      type: "development",
      title: "Desarrollo en Unity",
      description:
        "El juego fue construido en Unity utilizando scripts personalizados y las herramientas disponibles dentro del editor.",
      body: "SQLite permitió incorporar un sistema para almacenar y gestionar las puntuaciones.",
      items: [
        "Movimiento del personaje.",
        "Detección de colisiones.",
        "Obstáculos.",
        "Jugabilidad infinita.",
        "Interfaz.",
        "Registro de puntajes.",
      ],
    },
    {
      type: "final-solution",
      title: "Un runner propio",
      description:
        "El resultado fue un videojuego funcional, simple de utilizar y visualmente atractivo.",
      body: "La experiencia mantiene la lógica accesible del juego original mientras incorpora una implementación propia y un sistema de registro de puntajes.",
    },
    {
      type: "result",
      title: "Resultados y aprendizajes",
      description:
        "RunnerDino fue una oportunidad para pasar de la lógica de programación tradicional al desarrollo de una experiencia interactiva en tiempo real.",
      items: [
        "Videojuego funcional con persistencia de puntajes en SQLite.",
        "Primer proyecto completo en Unity y C#.",
        "Código, interacción y feedback visual trabajan conjuntamente dentro de un videojuego.",
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
            "Final project for Programación Multimedial IV: recreating Chrome's classic dinosaur game.",
        },
        { title: "Team", description: "Solo project." },
        {
          title: "Outcome",
          description: "A working game with endless gameplay and score tracking.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        { title: "Role", description: "Game Development" },
        { title: "Year", description: "2023" },
        { title: "Tools", description: "Unity · C# · SQLite · Visual Studio Code" },
      ],
    },
    {
      type: "context",
      title: "The project",
      body: "RunnerDino was built as the final project for Programación Multimedial IV.\nThe idea was to recreate the experience of Google Chrome's classic dinosaur game: a character that runs endlessly while dodging obstacles.",
    },
    {
      type: "challenge",
      title: "Replicate a mechanic to understand how it works.",
      body: "The goal wasn't only to replicate the core mechanic, but to use the project as an opportunity to understand the fundamentals of C#, Unity, and data management with SQLite.",
      description:
        "A seemingly simple game still forces you to solve movement, collisions, endless generation, and data persistence.",
      sideHighlight: {
        title: "Simple isn't easy",
        description:
          "The most basic mechanic is the one that exposes the engine's fundamentals most clearly.",
      },
    },
    {
      type: "development",
      title: "Building it in Unity",
      description:
        "The game was built in Unity using custom scripts and the tools available inside the editor.",
      body: "SQLite made it possible to store and manage scores.",
      items: [
        "Character movement.",
        "Collision detection.",
        "Obstacles.",
        "Endless gameplay.",
        "Interface.",
        "Score tracking.",
      ],
    },
    {
      type: "final-solution",
      title: "A runner of my own",
      description:
        "The result was a working game, simple to use and visually appealing.",
      body: "The experience keeps the accessible logic of the original game while adding my own implementation and a score tracking system.",
    },
    {
      type: "result",
      title: "Results & learnings",
      description:
        "RunnerDino was a chance to move from traditional programming logic to building a real-time interactive experience.",
      items: [
        "Working game with score persistence in SQLite.",
        "First complete project in Unity and C#.",
        "Code, interaction, and visual feedback work together inside a game.",
      ],
    },
  ],
})
