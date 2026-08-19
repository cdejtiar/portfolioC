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
            "Materia Programación Multimedial III: una exploración del ecosistema Web3.",
        },
        {
          title: "Mi participación",
          description:
            "Diseño de la identidad visual, sistema generativo, frontend, backend e integración Web3.",
        },
        {
          title: "Resultado",
          description:
            "Colección generativa de 50 NFTs con una web funcional de minting en testnet.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        {
          title: "Tipo de proyecto",
          description: "Proyecto académico · Diseño + Desarrollo",
        },
        { title: "Año", description: "2022" },
        {
          title: "Tecnologías",
          description:
            "Procreate · JavaScript · Web3.js · HTML · CSS · Smart Contracts · Ethereum Testnet",
        },
      ],
    },
    {
      type: "context",
      title: "El proyecto",
      body: "NFTBunnies fue desarrollado durante la materia Programación Multimedial III como una exploración del **ecosistema Web3**.\nEl desafío consistía en crear una **colección de 50 NFTs**, diseñar una identidad visual propia y desarrollar una web funcional que permitiera realizar el minting utilizando **Ethereum de prueba**.",
    },
    {
      type: "challenge",
      title: "Una estética coherente con combinaciones distintas",
      body: "El proyecto combinaba dos áreas diferentes: crear una **identidad visual consistente** y construir un sistema capaz de **generar múltiples variaciones** automáticamente.",
      description:
        "La colección debía mantener una **estética coherente** aunque cada NFT tuviera una combinación diferente de atributos.",
    },
    {
      type: "design-system",
      title: "Diseño generativo",
      body: "La identidad visual fue creada en **Procreate** y los elementos se organizaron en categorías que podían combinarse mediante un script.\nDe esta manera, un mismo sistema podía **generar múltiples versiones** de los personajes sin diseñar cada NFT individualmente.",
      items: [
        "Fondos.",
        "Clima.",
        "Color del cuerpo.",
        "Manos.",
        "Accesorios.",
        "Decoraciones.",
      ],
    },
    {
      type: "development",
      title: "Desarrollo",
      body: "Además de la generación de la colección, desarrollé la **web completa** y la **integración con Web3**.\nLa web utilizaba Ethereum de prueba para experimentar con el funcionamiento de **Smart Contracts** y el proceso de creación de NFTs.",
      items: [
        "Frontend.",
        "Backend.",
        "Logo e identidad visual.",
        "Integración con Web3.",
        "Sistema de minting.",
      ],
    },
    {
      type: "final-solution",
      title: "La colección terminada",
      description:
        "50 NFTs generados a partir del mismo sistema visual, junto a una web funcional de minting sobre Ethereum de prueba.",
    },
    {
      type: "result",
      title: "Resultado",
      description:
        "El proyecto terminó en una **colección generativa de 50 NFTs** acompañada por una experiencia web funcional.",
      body: "Más allá del resultado visual, permitió explorar la relación entre **diseño de sistemas, generación procedural y desarrollo web**.",
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
            "Programación Multimedial III course: an exploration of the Web3 ecosystem.",
        },
        {
          title: "My role",
          description:
            "Visual identity, generative system, frontend, backend, and Web3 integration.",
        },
        {
          title: "Outcome",
          description:
            "Generative collection of 50 NFTs with a working minting site on testnet.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        {
          title: "Project type",
          description: "Academic project · Design + Development",
        },
        { title: "Year", description: "2022" },
        {
          title: "Technologies",
          description:
            "Procreate · JavaScript · Web3.js · HTML · CSS · Smart Contracts · Ethereum Testnet",
        },
      ],
    },
    {
      type: "context",
      title: "The project",
      body: "NFTBunnies was built during the Programación Multimedial III course as an exploration of the **Web3 ecosystem**.\nThe challenge was to create a **collection of 50 NFTs**, design its own visual identity, and build a working site to mint them using **test Ethereum**.",
    },
    {
      type: "challenge",
      title: "One coherent aesthetic, many combinations",
      body: "The project combined two different areas: building a **consistent visual identity** and building a system able to **generate multiple variations** automatically.",
      description:
        "The collection had to keep a **coherent aesthetic** even though every NFT had a different combination of attributes.",
    },
    {
      type: "design-system",
      title: "Generative design",
      body: "The visual identity was created in **Procreate** and the elements were organized into categories that a script could combine.\nThat way a single system could **generate many versions** of the characters without designing each NFT by hand.",
      items: [
        "Backgrounds.",
        "Weather.",
        "Body colour.",
        "Hands.",
        "Accessories.",
        "Decorations.",
      ],
    },
    {
      type: "development",
      title: "Development",
      body: "Beyond generating the collection, I built the **full site** and the **Web3 integration**.\nThe site used test Ethereum to experiment with **smart contracts** and the NFT creation process.",
      items: [
        "Frontend.",
        "Backend.",
        "Logo and visual identity.",
        "Web3 integration.",
        "Minting system.",
      ],
    },
    {
      type: "final-solution",
      title: "The finished collection",
      description:
        "50 NFTs generated from the same visual system, alongside a working minting site on the Ethereum testnet.",
    },
    {
      type: "result",
      title: "Result",
      description:
        "The project ended in a **generative collection of 50 NFTs** plus a working web experience.",
      body: "Beyond the visual outcome, it was a way to explore the relationship between **systems design, procedural generation, and web development**.",
    },
  ],
});
