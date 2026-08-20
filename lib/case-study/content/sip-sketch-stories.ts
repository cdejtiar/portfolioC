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
            "Proyecto personal nacido de un cumpleaños que perdió su plan original.",
        },
        {
          title: "Mi participación",
          description:
            "Proyecto individual: estructura de la interfaz, componentes, interacciones, animaciones y lógica del mazo.",
        },
        {
          title: "Tecnologías",
          description:
            "Next.js · React · TypeScript · Tailwind CSS · Framer Motion",
        },
        {
          title: "Resultado",
          description:
            "Experiencia web reutilizable centrada en una única acción: sacar una carta.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        { title: "Tipo de proyecto", description: "Proyecto personal · Frontend Development" },
        { title: "Año", description: "2026" },
        { title: "Equipo", description: "Proyecto individual" },
      ],
    },
    {
      type: "context",
      title: "El proyecto",
      body: "Sip, Sketch & Stories es una **experiencia web interactiva** creada para acompañar reuniones y cumpleaños de una manera simple, espontánea y social.\nLa propuesta reemplaza el clásico **mazo físico de cartas** por una versión digital que combina consignas para conversar, dibujar, interactuar y brindar.\nEl proyecto nació a partir de una situación personal: el karaoke que había planeado para mi cumpleaños fue cancelado, y en lugar de abandonar la idea decidí **transformar la actividad** en una experiencia para compartir en casa.\nLa intención era mantener tres elementos del plan original: **estar juntos, hacer algo creativo y pasarla bien**.",
    },
    {
      type: "challenge",
      title: "Diseñar para una reunión de 20 personas",
      body: "La experiencia fue pensada para grupos de aproximadamente **20 personas**, lo que hacía necesario evitar que todas las cartas dependieran de una única persona respondiendo una pregunta.",
      description:
        "El mazo combina **distintos niveles de participación** para que el ritmo pueda cambiar constantemente sin convertirse en una ronda estructurada de preguntas y respuestas.",
      items: [
        "**Cartas individuales**.",
        "**Cartas para pequeños grupos**.",
        "**Cartas donde participa toda la mesa**.",
        "**Desafíos** que modifican temporalmente las reglas.",
        "**Dinámicas** que permiten intervenir el dibujo de otra persona.",
      ],
    },
    {
      type: "design-decisions",
      title: "Decisiones de diseño e interacción",
      decisions: [
        {
          title: "Una actividad sin presión",
          problem:
            "No todas las personas saben dibujar, y el dibujo podía sentirse como una competencia.",
          decision:
            "Consignas de dibujo **deliberadamente simples y absurdas**: “agregá un pato”, “dibujá con la mano no dominante”, “escondé una estrella”, “convertí un garabato en algo”.",
          impact:
            "El objetivo deja de ser crear una obra de arte y pasa a ser **intervenir el dibujo** y generar situaciones inesperadas.",
        },
        {
          title: "Hacer que lo digital se sintiera físico",
          problem:
            "Trasladar la sensación de sacar una carta de un mazo físico a una pantalla.",
          decision:
            "Al presionar “Sacar carta”, la carta **sale visualmente del mazo, gira y revela** la consigna.",
          impact:
            "La animación refuerza la **metáfora del objeto físico** en lugar de funcionar solo como decoración.",
        },
        {
          title: "El mazo como sistema",
          problem:
            "El contenido tenía que poder crecer sin romper la interfaz ni repetir cartas.",
          decision:
            "**Separar las cartas de la lógica visual** y estructurarlas como datos independientes, evitando repetir una carta hasta completar una ronda y volviendo a barajar después.",
          impact:
            "El contenido puede **modificarse, ampliarse o reorganizarse** sin tocar los componentes de la interfaz.",
        },
        {
          title: "Diseñada para compartir pantalla",
          problem:
            "El mazo tenía que ser visible para todo el grupo, no solo para quien sostiene el celular.",
          decision:
            "Incorporar un **modo de pantalla completa** para proyectar la aplicación en una televisión o monitor.",
          impact:
            "La tecnología queda en segundo plano y la **atención sigue estando en las personas** alrededor de la mesa.",
        },
      ],
    },
    {
      type: "iterations",
      title: "Un sistema que puede crecer",
      body: "La separación entre contenido e interfaz permite pensar en **futuras versiones** sin modificar la estructura principal del producto.",
      items: [
        "Nuevos mazos temáticos.",
        "Diferentes niveles de intensidad.",
        "Modos para distintos tamaños de grupo.",
        "Cartas personalizadas para cada evento.",
        "Nuevas categorías.",
        "Dinámicas específicas para cumpleaños, reuniones o celebraciones.",
      ],
    },
    {
      type: "final-solution",
      title: "La solución final",
      description:
        "Una experiencia web centrada en una **única acción principal**: sacar una carta.",
        image: "../../../public/images/sipsketchstories-screens.png",
      body: "La interfaz presenta el mazo y permite descubrir progresivamente nuevas consignas mientras la reunión avanza. Las animaciones, los estados de las cartas, el sistema de categorías y el modo pantalla completa trabajan alrededor de esa interacción principal.\nLa experiencia no intenta convertirse en un juego competitivo: su función es **facilitar momentos que probablemente sucederían de todos modos** —hablar, reírse, dibujar, brindar y compartir.",
    },
    {
      type: "result",
      title: "Resultado",
      description:
        "Sip, Sketch & Stories comenzó como una solución para un cumpleaños que había perdido su plan original y terminó convirtiéndose en una **pequeña experiencia digital reutilizable**.",
    },
    {
      type: "learnings",
      title: "Aprendizajes",
      items: [
        "Explorar la relación entre **contenido, interacción y movimiento**: cada decisión de desarrollo tenía que tener un propósito dentro de la experiencia.",
        "Una interfaz no siempre tiene que ser la protagonista: a veces su función es **crear el espacio y las condiciones** para que algo suceda.",
        "La tecnología reemplaza un mazo de cartas, pero **la experiencia realmente ocurre fuera de la pantalla**.",
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
            "Personal project born from a birthday that lost its original plan.",
        },
        {
          title: "My role",
          description:
            "Solo project: interface structure, components, interactions, animations, and deck logic.",
        },
        {
          title: "Technologies",
          description:
            "Next.js · React · TypeScript · Tailwind CSS · Framer Motion",
        },
        {
          title: "Outcome",
          description:
            "A reusable web experience built around a single action: draw a card.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        { title: "Project type", description: "Personal project · Frontend Development" },
        { title: "Year", description: "2026" },
        { title: "Team", description: "Solo project" },
      ],
    },
    {
      type: "context",
      title: "The project",
      body: "Sip, Sketch & Stories is an **interactive web experience** made to liven up gatherings and birthdays in a simple, spontaneous, social way.\nIt replaces the classic **physical card deck** with a digital version that mixes prompts to talk, draw, interact, and toast.\nThe project came out of a personal situation: the karaoke I had planned for my birthday was cancelled, and instead of dropping the idea I **turned the activity** into an experience to share at home.\nThe intention was to keep three things from the original plan: **being together, doing something creative, and having a good time**.",
    },
    {
      type: "challenge",
      title: "Designing for a group of 20",
      body: "The experience was designed for groups of around **20 people**, which meant no card could depend on a single person answering a question.",
      description:
        "The deck mixes **different levels of participation** so the pace keeps shifting instead of turning into a structured Q&A round.",
      items: [
        "**Individual cards**.",
        "**Cards for small groups**.",
        "**Cards where the whole table plays**.",
        "**Challenges** that temporarily change the rules.",
        "**Dynamics** that let you draw on someone else's sheet.",
      ],
    },
    {
      type: "design-decisions",
      title: "Design and interaction decisions",
      decisions: [
        {
          title: "An activity without pressure",
          problem:
            "Not everyone can draw, and drawing risked feeling like a competition.",
          decision:
            "**Deliberately simple, absurd** drawing prompts: “add a duck”, “draw with your non-dominant hand”, “hide a star”, “turn a scribble into something”.",
          impact:
            "The goal stops being making art and becomes **intervening in the drawing** and creating unexpected situations.",
        },
        {
          title: "Making digital feel physical",
          problem:
            "Translating the feeling of pulling a card from a physical deck onto a screen.",
          decision:
            "When you press “Draw card”, the card **visually leaves the deck, flips, and reveals** the prompt.",
          impact:
            "The animation reinforces the **physical-object metaphor** instead of working as mere decoration.",
        },
        {
          title: "The deck as a system",
          problem:
            "Content had to grow without breaking the interface or repeating cards.",
          decision:
            "**Separate the cards from the visual logic** as independent data, avoiding repeats until a round is complete and then reshuffling.",
          impact:
            "Content can be **edited, expanded, or reorganized** without touching interface components.",
        },
        {
          title: "Designed for screen sharing",
          problem:
            "The deck had to be visible to the whole group, not just whoever holds the phone.",
          decision:
            "Add a **fullscreen mode** so the app can be projected on a TV or monitor.",
          impact:
            "Technology stays in the background and **attention stays on the people** around the table.",
        },
      ],
    },
    {
      type: "iterations",
      title: "A system that can grow",
      body: "Separating content from interface makes **future versions** possible without changing the product's main structure.",
      items: [
        "New themed decks.",
        "Different intensity levels.",
        "Modes for different group sizes.",
        "Custom cards for each event.",
        "New categories.",
        "Specific dynamics for birthdays, gatherings, or celebrations.",
      ],
    },
    {
      type: "final-solution",
      title: "The final solution",
      description:
        "A web experience centred on a **single main action**: draw a card.",
        image: "../../../public/images/sipsketchstories-screens.png",
      body: "The interface presents the deck and reveals new prompts progressively as the gathering unfolds. Animations, card states, the category system, and fullscreen mode all work around that main interaction.\nIt isn't trying to be a competitive game: its purpose is to **make room for things that would probably happen anyway** — talking, laughing, drawing, toasting, sharing.",
    },
    {
      type: "result",
      title: "Result",
      description:
        "Sip, Sketch & Stories started as a fix for a birthday that had lost its original plan and ended up becoming a **small, reusable digital experience**.",
    },
    {
      type: "learnings",
      title: "Learnings",
      items: [
        "Exploring the relationship between **content, interaction, and motion**: every development decision had to serve the experience.",
        "An interface doesn't always have to be the protagonist: sometimes its job is to **create the space and conditions** for something to happen.",
        "Technology replaces a deck of cards, but **the experience really happens off-screen**.",
      ],
    },
  ],
})