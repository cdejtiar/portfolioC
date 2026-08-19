import { defineCaseStudy } from "./define";

export default defineCaseStudy({
  es: [
    { type: "hero" },
    {
      type: "overview",
      cards: [
        {
          title: "Contexto",
          description:
            "Proyecto final de Programación Multimedial IV: recrear el juego del dinosaurio de Chrome.",
        },
        {
          title: "Mi participación",
          description:
            "Desarrollo completo del juego en Unity, interfaz y sistema de puntajes.",
        },
        {
          title: "Resultado",
          description:
            "Videojuego funcional con jugabilidad infinita y registro de puntuaciones en SQLite.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        {
          title: "Tipo de proyecto",
          description: "Proyecto académico · Game Development",
        },
        { title: "Año", description: "2023" },
        {
          title: "Tecnologías",
          description: "Unity · C# · SQLite · Visual Studio Code",
        },
      ],
    },
    {
      type: "context",
      title: "El proyecto",
      body: "RunnerDino fue desarrollado como proyecto final de Programación Multimedial IV.\nLa idea consistía en recrear la experiencia del clásico juego del dinosaurio de Google Chrome: un personaje que **corre indefinidamente** mientras debe esquivar obstáculos.",
    },
    {
      type: "challenge",
      title: "Replicar la mecánica para entender los fundamentos",
      body: "El objetivo no era solamente replicar la mecánica principal, sino utilizar el proyecto como una oportunidad para comprender los **fundamentos de C#, Unity y gestión de datos con SQLite**.",
    },
    {
      type: "development",
      title: "Desarrollo",
      body: "El juego fue construido en **Unity** utilizando scripts personalizados y las herramientas disponibles dentro del editor.\n**SQLite** permitió incorporar un sistema para almacenar y gestionar las puntuaciones.",
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
      type: "process-gallery",
      title: "El proceso", // en: "The process"
      images: [
        { src: "/images/runner-dino-process-1.png" },
        { src: "/images/runner-dino-process-2.png" },
      ],
    },
    {
      type: "final-solution",
      title: "El juego en funcionamiento", // en: "The game in action"
      image: "/images/runner-dino-final.png",
    },
    {
      type: "result",
      title: "Resultado",
      description:
        "Un videojuego **funcional, simple de utilizar** y visualmente atractivo.",
      body: "La experiencia mantiene la lógica accesible del juego original mientras incorpora una **implementación propia** y un sistema de registro de puntajes.",
    },
    {
      type: "learnings",
      title: "Aprendizajes",
      items: [
        "RunnerDino fue la oportunidad de pasar de la **lógica de programación** al desarrollo de una experiencia jugable completa.",
        "Trabajar con un **motor de juego** implica pensar en estados, colisiones y persistencia de datos al mismo tiempo.",
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
            "Final project for Programación Multimedial IV: recreating Chrome's dinosaur game.",
        },
        {
          title: "My role",
          description:
            "Full game development in Unity, interface, and score system.",
        },
        {
          title: "Outcome",
          description:
            "Working game with endless gameplay and score tracking in SQLite.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        {
          title: "Project type",
          description: "Academic project · Game Development",
        },
        { title: "Year", description: "2023" },
        {
          title: "Technologies",
          description: "Unity · C# · SQLite · Visual Studio Code",
        },
      ],
    },
    {
      type: "context",
      title: "The project",
      body: "RunnerDino was built as the final project for Programación Multimedial IV.\nThe idea was to recreate the classic Google Chrome dinosaur game: a character that **runs endlessly** while dodging obstacles.",
    },
    {
      type: "challenge",
      title: "Replicating the mechanic to learn the fundamentals",
      body: "The goal wasn't only to replicate the core mechanic, but to use the project to understand the **fundamentals of C#, Unity, and data management with SQLite**.",
    },
    {
      type: "development",
      title: "Development",
      body: "The game was built in **Unity** using custom scripts and the tools available inside the editor.\n**SQLite** made it possible to store and manage scores.",
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
      type: "process-gallery",
      title: "The process",
      images: [
        { src: "/images/runner-dino-process-1.png" },
        { src: "/images/runner-dino-process-2.png" },
      ],
    },
    {
      type: "final-solution",
      title: "The game in action",
      image: "/images/runner-dino-final.png",
    },
    {
      type: "result",
      title: "Result",
      description:
        "A game that's **functional, simple to play**, and visually appealing.",
      body: "It keeps the accessible logic of the original game while adding my **own implementation** and a score tracking system.",
    },
    {
      type: "learnings",
      title: "Learnings",
      items: [
        "RunnerDino was the chance to move from **programming logic** to building a complete playable experience.",
        "Working with a **game engine** means thinking about states, collisions, and data persistence at the same time.",
      ],
    },
  ],
});
