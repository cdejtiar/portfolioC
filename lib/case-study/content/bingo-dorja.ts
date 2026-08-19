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
            "Proyecto personal: acompañar partidas de bingo familiares, comunitarias y recreativas.",
        },
        {
          title: "Mi participación",
          description: "Identidad visual y desarrollo frontend completo.",
        },
        {
          title: "Resultado",
          description:
            "Web app que funciona offline y convierte el sorteo tradicional en una experiencia visual.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        {
          title: "Tipo de proyecto",
          description: "Proyecto personal · Frontend Development",
        },
        { title: "Año", description: "2025" },
        { title: "Tecnologías", description: "HTML · CSS · JavaScript" },
      ],
    },
    {
      type: "context",
      title: "El proyecto",
      body: "Bingo Familiar Dorja es una **aplicación web interactiva** creada para acompañar partidas de bingo familiares, comunitarias y recreativas.\nLa propuesta busca llevar un poco más de **identidad visual y emoción** a una actividad tradicional, sin perder la **simplicidad** necesaria para que cualquier persona pueda utilizarla.",
    },
    {
      type: "challenge",
      title: "Sortear → identificar → continuar",
      body: "El objetivo era crear una herramienta que pudiera utilizarse fácilmente durante una partida, incluso **sin conexión a Internet**.",
      description:
        "La interfaz debía resolver una tarea muy concreta —**sortear, identificar y continuar**— sin agregar complejidad innecesaria.",
    },
    {
      type: "interaction-design",
      title: "La experiencia",
      body: "La aplicación genera **números aleatorios entre 1 y 90** y los presenta visualmente para que puedan ser identificados por todos los participantes.\nCada número sorteado queda **resaltado dentro de la grilla**, mientras que la bolilla actual tiene una visualización de mayor tamaño.\nTambién incorpora un **botón de reinicio** para comenzar una nueva partida.",
    },
    {
      type: "ui-design",
      title: "Identidad visual",
      body: "Además de la funcionalidad, el proyecto buscó construir una estética propia para Dorja.\nLa interfaz combina una **identidad cálida y lúdica** con una estructura simple, pensada para funcionar en contextos familiares y comunitarios.",
    },
    {
      type: "final-solution", // antes era "features"
      title: "Funcionalidades",
      items: [
        "**Generador de números** del 1 al 90.",
        "**Resaltado de números sorteados**.",
        "**Visualización de la bolilla actual**.",
        "**Reinicio de partida**.",
        "**Funcionamiento offline**.",
      ],
    },
    {
      type: "result",
      title: "Resultado",
      description:
        "Una herramienta pequeña y directa que convierte el sorteo tradicional en una **experiencia digital más visual**, manteniendo el foco en el juego.",
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
            "Personal project: supporting family, community, and recreational bingo games.",
        },
        {
          title: "My role",
          description: "Visual identity and full frontend development.",
        },
        {
          title: "Outcome",
          description:
            "A web app that works offline and turns the traditional draw into a visual experience.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        {
          title: "Project type",
          description: "Personal project · Frontend Development",
        },
        { title: "Year", description: "2025" },
        { title: "Technologies", description: "HTML · CSS · JavaScript" },
      ],
    },
    {
      type: "context",
      title: "The project",
      body: "Bingo Familiar Dorja is an **interactive web app** built to support family, community, and recreational bingo games.\nIt brings a bit more **visual identity and emotion** to a traditional activity, without losing the **simplicity** that makes it usable by anyone.",
    },
    {
      type: "challenge",
      title: "Draw → identify → continue",
      body: "The goal was a tool that could be used easily during a game, even **without an internet connection**.",
      description:
        "The interface had to solve a very concrete task — **draw, identify, continue** — without adding unnecessary complexity.",
    },
    {
      type: "interaction-design",
      title: "The experience",
      body: "The app generates **random numbers between 1 and 90** and presents them visually so every player can identify them.\nEach drawn number stays **highlighted inside the grid**, while the current ball gets a larger display.\nIt also includes a **reset button** to start a new game.",
    },
    {
      type: "ui-design",
      title: "Visual identity",
      body: "Beyond functionality, the project built its own aesthetic for Dorja.\nThe interface pairs a **warm, playful identity** with a simple structure meant for family and community settings.",
    },
    {
      type: "final-solution", // antes era "features"
      title: "Features",
      items: [
        "**Number generator** from 1 to 90.",
        "**Highlighting of drawn numbers**.",
        "**Current ball display**.",
        "**Game reset**.",
        "**Offline support**.",
      ],
    },
    {
      type: "result",
      title: "Result",
      description:
        "A small, direct tool that turns the traditional draw into a **more visual digital experience** while keeping the focus on the game.",
    },
  ],
});
