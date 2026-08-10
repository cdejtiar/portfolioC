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
            "Proyecto personal para acompañar partidas de bingo familiares, comunitarias y recreativas.",
        },
        { title: "Equipo", description: "Proyecto individual." },
        {
          title: "Resultado",
          description:
            "Aplicación web funcional, usable durante una partida incluso sin conexión.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        { title: "Rol", description: "Frontend Development · Identidad visual" },
        { title: "Año", description: "2025" },
        { title: "Herramientas", description: "HTML · CSS · JavaScript" },
      ],
    },
    {
      type: "context",
      title: "El proyecto",
      body: "Bingo Familiar Dorja es una aplicación web interactiva creada para acompañar partidas de bingo familiares, comunitarias y recreativas.\nLa propuesta busca llevar un poco más de identidad visual y emoción a una actividad tradicional, sin perder la simplicidad necesaria para que cualquier persona pueda utilizarla.",
    },
    {
      type: "challenge",
      title: "Sortear → identificar → continuar",
      body: "El objetivo era crear una herramienta que pudiera utilizarse fácilmente durante una partida, incluso sin conexión a Internet.",
      description:
        "La interfaz debía resolver una tarea muy concreta sin agregar complejidad innecesaria.",
      sideHighlight: {
        title: "Una sola tarea",
        description:
          "Todo el diseño se ordena alrededor del momento de cantar el número.",
      },
    },
    {
      type: "interaction-design",
      title: "La experiencia",
      body: "La aplicación genera números aleatorios entre 1 y 90 y los presenta visualmente para que puedan ser identificados por todos los participantes.\nCada número sorteado queda resaltado dentro de la grilla, mientras que la bolilla actual tiene una visualización de mayor tamaño.\nTambién incorpora un botón de reinicio para comenzar una nueva partida.",
    },
    {
      type: "ui-design",
      title: "Identidad visual",
      body: "Además de la funcionalidad, el proyecto buscó construir una estética propia para Dorja.\nLa interfaz combina una identidad cálida y lúdica con una estructura simple, pensada para funcionar en contextos familiares y comunitarios.",
    },
    {
      type: "final-solution",
      title: "Una herramienta pequeña y directa",
      description:
        "Convierte el sorteo tradicional en una experiencia digital más visual, manteniendo el foco en el juego.",
      items: [
        "Generador de números del 1 al 90.",
        "Resaltado de números sorteados.",
        "Visualización de la bolilla actual.",
        "Reinicio de partida.",
        "Funcionamiento offline.",
      ],
    },
    {
      type: "result",
      title: "Resultados y aprendizajes",
      description:
        "Una app usada en partidas reales, donde la restricción principal fue no estorbar el juego.",
      items: [
        "Funciona sin conexión, en cualquier dispositivo de la mesa.",
        "Una interfaz mínima puede sostener una experiencia colectiva.",
        "La identidad visual también puede aportar emoción a una herramienta simple.",
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
            "Personal project to support family, community, and recreational bingo games.",
        },
        { title: "Team", description: "Solo project." },
        {
          title: "Outcome",
          description:
            "Working web app, usable during a game even without a connection.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        { title: "Role", description: "Frontend Development · Visual identity" },
        { title: "Year", description: "2025" },
        { title: "Tools", description: "HTML · CSS · JavaScript" },
      ],
    },
    {
      type: "context",
      title: "The project",
      body: "Bingo Familiar Dorja is an interactive web app created to support family, community, and recreational bingo games.\nIt aims to bring a bit more visual identity and excitement to a traditional activity, without losing the simplicity anyone needs to use it.",
    },
    {
      type: "challenge",
      title: "Draw → identify → continue",
      body: "The goal was to create a tool that could be used easily during a game, even without an internet connection.",
      description:
        "The interface had to solve one very concrete task without adding unnecessary complexity.",
      sideHighlight: {
        title: "One single task",
        description:
          "The whole design is organized around the moment of calling the number.",
      },
    },
    {
      type: "interaction-design",
      title: "The experience",
      body: "The app generates random numbers between 1 and 90 and displays them so every participant can read them.\nEvery drawn number stays highlighted in the grid, while the current ball gets a larger display.\nIt also includes a reset button to start a new game.",
    },
    {
      type: "ui-design",
      title: "Visual identity",
      body: "Beyond functionality, the project set out to build a visual identity of its own for Dorja.\nThe interface pairs a warm, playful identity with a simple structure meant for family and community settings.",
    },
    {
      type: "final-solution",
      title: "A small, direct tool",
      description:
        "It turns the traditional draw into a more visual digital experience while keeping the focus on the game.",
      items: [
        "Number generator from 1 to 90.",
        "Highlighting of drawn numbers.",
        "Current ball display.",
        "Game reset.",
        "Offline support.",
      ],
    },
    {
      type: "result",
      title: "Results & learnings",
      description:
        "An app used in real games, where the main constraint was staying out of the game's way.",
      items: [
        "Works offline, on any device at the table.",
        "A minimal interface can support a collective experience.",
        "Visual identity can add emotion even to a simple tool.",
      ],
    },
  ],
})
