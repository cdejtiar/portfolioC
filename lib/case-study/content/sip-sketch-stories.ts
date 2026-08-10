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
            "Proyecto personal: reemplazar un mazo físico de cartas por una experiencia web para reuniones y cumpleaños.",
        },
        { title: "Equipo", description: "Proyecto individual." },
        {
          title: "Resultado",
          description:
            "App web interactiva reutilizable, pensada para acompañar la conversación sin ser el centro de la reunión.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        { title: "Rol", description: "Frontend Development" },
        { title: "Año", description: "2026" },
        {
          title: "Herramientas",
          description: "Next.js · React · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons",
        },
      ],
    },
    {
      type: "context",
      title: "El proyecto",
      body: "Sip, Sketch & Stories es una experiencia web interactiva creada para acompañar reuniones y cumpleaños de una manera simple, espontánea y social.\nLa propuesta reemplaza el clásico mazo físico de cartas por una versión digital que combina consignas para conversar, dibujar, interactuar y brindar.\nEl proyecto nació a partir de una situación personal: el karaoke que había planeado para mi cumpleaños fue cancelado. En lugar de abandonar la idea, transformé la actividad en una experiencia para compartir en casa con amigos, manteniendo tres elementos del plan original: estar juntos, hacer algo creativo y pasarla bien.",
    },
    {
      type: "challenge",
      title: "Conservar lo mejor de un juego físico.",
      body: "Los juegos de cartas para reuniones cumplen una función muy simple: generar una excusa para hablar, reírse y participar.\nPero las cartas físicas deben prepararse previamente, pueden repetirse y muchas dinámicas terminan dependiendo únicamente de preguntas o de beber. Además, cuando una actividad se convierte en una competencia, puede generar presión en personas que simplemente quieren participar de manera relajada.",
      description:
        "La oportunidad estaba en conservar la sorpresa de no saber qué viene después, la espontaneidad de las consignas y la posibilidad de compartirlas, usando las ventajas de una interfaz digital.",
      sideHighlight: {
        title: "Sin puntaje",
        description:
          "Nada de competencia: la experiencia no premia dibujar bien.",
      },
    },
    {
      type: "concept",
      title: "No importa qué dibujes. Lo importante es lo que pasa mientras lo hacés.",
      body: "Cada participante recibe una hoja y marcadores y puede dibujar libremente. No hay una consigna artística inicial, no hay una forma correcta de hacerlo y tampoco existe una puntuación.\nEl dibujo funciona como una actividad paralela que permite que las personas tengan algo que hacer mientras conversan. En determinados momentos, alguien saca una carta desde la aplicación y aparece una nueva consigna.",
      items: [
        "💬 Charlar: preguntas, recuerdos y situaciones hipotéticas.",
        "🥂 Tomar: brindis y pequeñas dinámicas relacionadas con beber.",
        "🖍️ Dibujar: intervenciones simples y absurdas sobre los dibujos.",
        "💛 Caos: reglas temporales y pequeños desafíos grupales.",
        "✨ Especiales: momentos colectivos, fotografías, música y dinámicas de cumpleaños.",
      ],
    },
    {
      type: "design-decisions",
      title: "Decisiones de diseño",
      decisions: [
        {
          title: "Diseñar para 20 personas",
          problem:
            "Si cada carta depende de una sola persona respondiendo, el resto del grupo queda mirando.",
          decision:
            "Combinar cartas individuales, para pequeños grupos, para toda la mesa, desafíos que modifican las reglas y dinámicas para intervenir el dibujo de otra persona.",
          impact:
            "El ritmo de la actividad cambia constantemente sin convertirse en una ronda estructurada de preguntas.",
        },
        {
          title: "Dibujar sin presión",
          problem:
            "No todas las personas saben dibujar y una consigna artística puede generar presión.",
          decision:
            "Usar consignas deliberadamente simples y absurdas: “agregá un pato”, “dibujá con la mano no dominante”, “escondé una estrella”, “convertí un garabato en algo”.",
          impact:
            "El foco pasa de la calidad del dibujo a las situaciones inesperadas que genera.",
        },
        {
          title: "Que lo digital se sienta físico",
          problem:
            "Mostrar una consigna en pantalla pierde el gesto de sacar una carta de un mazo real.",
          decision:
            "Al presionar “Sacar carta”, la carta sale visualmente del mazo, gira y revela la consigna.",
          impact:
            "La animación sostiene la metáfora del objeto físico en lugar de ser decoración.",
        },
        {
          title: "El mazo como sistema de datos",
          problem:
            "Ampliar el contenido implicaba modificar componentes de interfaz.",
          decision:
            "Separar las cartas de la lógica visual y estructurarlas como datos independientes, evitando repetir una carta hasta completar la ronda y volviendo a barajar.",
          impact:
            "El contenido puede crecer o reorganizarse sin alterar la experiencia principal.",
        },
        {
          title: "Modo pantalla completa",
          problem:
            "En un grupo grande, un mazo visible solo desde un celular deja a la mayoría afuera.",
          decision:
            "Incorporar un modo de pantalla completa para proyectar la app en una televisión o monitor.",
          impact:
            "La tecnología queda en segundo plano y la atención sigue en las personas alrededor de la mesa.",
        },
      ],
    },
    {
      type: "final-solution",
      title: "Una sola acción principal: sacar una carta",
      description:
        "La interfaz presenta el mazo y permite descubrir progresivamente nuevas consignas mientras la reunión avanza.",
      body: "Las animaciones, los estados de las cartas, el sistema de categorías y el modo pantalla completa trabajan alrededor de esa interacción principal. La experiencia no intenta convertirse en un juego competitivo: su función es facilitar momentos que probablemente sucederían de todos modos.",
    },
    {
      type: "features",
      title: "Un sistema que puede crecer",
      body: "La separación entre contenido e interfaz permite pensar en futuras versiones sin modificar la estructura principal del producto.",
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
      type: "result",
      title: "Resultados y aprendizajes",
      description:
        "Empezó como una solución para un cumpleaños que había perdido su plan original y terminó convirtiéndose en una pequeña experiencia digital reutilizable.",
      items: [
        "Explorar la relación entre contenido, interacción y movimiento.",
        "Cada decisión de desarrollo debía tener un propósito dentro de la experiencia.",
        "Una interfaz no siempre tiene que ser la protagonista: a veces su función es crear el espacio para que algo suceda.",
        "El objetivo nunca fue jugar con la aplicación, sino tener una excusa para compartir.",
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
            "Personal project: replacing a physical card deck with a web experience for gatherings and birthdays.",
        },
        { title: "Team", description: "Solo project." },
        {
          title: "Outcome",
          description:
            "A reusable interactive web app meant to support conversation without becoming the center of the party.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        { title: "Role", description: "Frontend Development" },
        { title: "Year", description: "2026" },
        {
          title: "Tools",
          description: "Next.js · React · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons",
        },
      ],
    },
    {
      type: "context",
      title: "The project",
      body: "Sip, Sketch & Stories is an interactive web experience created to accompany gatherings and birthdays in a simple, spontaneous, social way.\nIt replaces the classic physical card deck with a digital version that mixes prompts to talk, draw, interact, and toast.\nThe project came out of a personal situation: the karaoke I had planned for my birthday got cancelled. Instead of dropping the idea, I turned the activity into an experience to share at home with friends, keeping three things from the original plan: being together, doing something creative, and having fun.",
    },
    {
      type: "challenge",
      title: "Keeping the best of a physical game.",
      body: "Party card games do something very simple: they create an excuse to talk, laugh, and take part.\nBut physical cards have to be prepared in advance, they repeat, and many dynamics end up relying only on questions or on drinking. And when an activity turns into a competition, it puts pressure on people who just want to join in a relaxed way.",
      description:
        "The opportunity was to keep the surprise of not knowing what comes next, the spontaneity of the prompts, and the ability to share them — using the advantages of a digital interface.",
      sideHighlight: {
        title: "No score",
        description:
          "No competition: the experience never rewards drawing well.",
      },
    },
    {
      type: "concept",
      title: "It doesn't matter what you draw. What matters is what happens while you do.",
      body: "Everyone gets a sheet of paper and markers and can draw freely. There's no initial artistic prompt, no right way to do it, and no score.\nDrawing works as a parallel activity that gives people something to do while they talk. At certain moments, someone draws a card in the app and a new prompt appears.",
      items: [
        "💬 Talk: questions, memories, and hypothetical situations.",
        "🥂 Drink: toasts and small drinking dynamics.",
        "🖍️ Draw: simple, absurd interventions on the drawings.",
        "💛 Chaos: temporary rules and small group challenges.",
        "✨ Specials: collective moments, photos, music, and birthday dynamics.",
      ],
    },
    {
      type: "design-decisions",
      title: "Design decisions",
      decisions: [
        {
          title: "Designing for 20 people",
          problem:
            "If every card depends on one person answering, the rest of the group just watches.",
          decision:
            "Mix individual cards, small-group cards, whole-table cards, challenges that change the rules, and dynamics where you intervene in someone else's drawing.",
          impact:
            "The pace keeps shifting instead of becoming a structured round of questions.",
        },
        {
          title: "Drawing without pressure",
          problem:
            "Not everyone can draw, and an artistic prompt can create pressure.",
          decision:
            "Use deliberately simple, absurd prompts: “add a duck”, “draw with your non-dominant hand”, “hide a star”, “turn a scribble into something”.",
          impact:
            "The focus moves from drawing quality to the unexpected situations it creates.",
        },
        {
          title: "Making the digital feel physical",
          problem:
            "Showing a prompt on screen loses the gesture of pulling a card from a real deck.",
          decision:
            "Pressing “Draw a card” makes the card leave the deck, flip, and reveal the prompt.",
          impact:
            "The animation sustains the physical-object metaphor instead of being decoration.",
        },
        {
          title: "The deck as a data system",
          problem: "Expanding the content meant editing interface components.",
          decision:
            "Separate cards from the visual logic as independent data, avoiding repeats until a round is complete and then reshuffling.",
          impact:
            "Content can grow or be reorganized without altering the main experience.",
        },
        {
          title: "Fullscreen mode",
          problem:
            "In a large group, a deck visible only on one phone leaves most people out.",
          decision:
            "Add a fullscreen mode so the app can be projected on a TV or monitor.",
          impact:
            "The technology stays in the background and attention stays on the people around the table.",
        },
      ],
    },
    {
      type: "final-solution",
      title: "One single main action: draw a card",
      description:
        "The interface presents the deck and lets people progressively discover new prompts as the gathering unfolds.",
      body: "Animations, card states, the category system, and fullscreen mode all revolve around that one interaction. The experience doesn't try to be a competitive game: its job is to enable moments that would probably happen anyway.",
    },
    {
      type: "features",
      title: "A system that can grow",
      body: "Separating content from interface makes future versions possible without changing the product's main structure.",
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
      type: "result",
      title: "Results & learnings",
      description:
        "It started as a fix for a birthday that had lost its original plan and became a small reusable digital experience.",
      items: [
        "Exploring the relationship between content, interaction, and motion.",
        "Every development decision had to serve a purpose inside the experience.",
        "An interface doesn't always have to be the protagonist: sometimes its job is to create space for something to happen.",
        "The goal was never to play with the app, but to have an excuse to share.",
      ],
    },
  ],
})
