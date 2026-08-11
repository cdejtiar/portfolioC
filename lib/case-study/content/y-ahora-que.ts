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
            "Hackathon de la Universidad Maimónides, mi primera participación en el concurso.",
        },
        {
          title: "Mi participación",
          description:
            "UX Research y diseño de la propuesta junto al equipo: encuestas, entrevistas, definición del problema y prototipado.",
        },
        {
          title: "Resultado",
          description:
            "Prototipo funcional en alta fidelidad presentado frente a un jurado después de dos semanas de workshops.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        { title: "Tipo de proyecto", description: "Hackathon · UX/UI Design" },
        { title: "Año", description: "2021" },
        {
          title: "Herramientas",
          description:
            "Figma · Adobe XD · Miro · User Research · Design Thinking",
        },
      ],
    },
    {
      type: "context",
      title: "El proyecto",
      body: "Y Ahora Qué? fue desarrollado durante una Hackathon de la Universidad Maimónides, en mi primera participación en el concurso.\nDurante dos semanas de workshops y trabajo en equipo desarrollamos un prototipo funcional que después presentamos frente a un jurado.\nEl punto de partida fue una situación cotidiana: terminar una serie o película y no saber qué ver después.",
    },
    {
      type: "challenge",
      title: "Demasiadas opciones no era el problema.",
      body: "Nuestra hipótesis inicial fue que el problema estaba relacionado con la cantidad infinita de opciones disponibles y el poco tiempo que las personas tienen para elegir.\nPara comprobarlo realizamos encuestas y entrevistas, y los resultados nos llevaron a cuestionar esa primera hipótesis.",
      description:
        "El problema no era simplemente tener demasiadas opciones: era encontrar una opción que realmente coincidiera con los gustos y el estado de ánimo de cada persona.",
    },
    {
      type: "research",
      title: "Escuchar antes de definir",
      description:
        "Encuestas y entrevistas fueron la base para revisar la hipótesis inicial y entender el proceso real de elección.",
      highlights: [
        {
          title: "Encuestas y entrevistas",
          detail:
            "Usadas para validar la hipótesis inicial. Los resultados la contradijeron.",
        },
        {
          title: "User Persona",
          detail:
            "Construida a partir de los principales puntos de dolor del proceso de elección.",
        },
        {
          title: "User Journey",
          detail:
            "Mapeamos qué ocurría desde que una persona terminaba una serie hasta que decidía qué ver.",
        },
      ],
    },
    {
      type: "research-findings",
      title: "Lo que cambió nuestra dirección",
      description:
        "Los hallazgos movieron el foco del catálogo a la persona que está eligiendo.",
      highlights: [
        {
          title: "El volumen no era el obstáculo",
          detail:
            "Las personas no se frenaban por falta de opciones, sino por no encontrar una que les cerrara.",
        },
        {
          title: "El estado de ánimo importaba",
          detail:
            "La elección dependía tanto del gusto como de cómo se sentía la persona en ese momento.",
        },
        {
          title: "El proceso terminaba en abandono",
          detail:
            "El recorrido habitual era buscar, comparar, dudar y abandonar sin ver nada.",
        },
      ],
    },
    {
      type: "problem-definition",
      title: "El problema redefinido",
      body: "Pasamos de una problemática general —hay demasiado contenido— a una oportunidad de diseño concreta: ayudar a una persona a encontrar algo que coincida con sus gustos y con su estado de ánimo, en el momento en que quiere ver algo.",
      items: [
        "El obstáculo no es la cantidad de contenido, sino la compatibilidad con la persona.",
        "La decisión depende del momento emocional, no solo del género.",
        "El éxito es empezar a mirar, no seguir buscando.",
      ],
    },
    {
      type: "design-decisions",
      title: "Decisiones de diseño",
      decisions: [
        {
          title: "Filtros empáticos",
          problem:
            "Los filtros tradicionales por género o año no ayudaban a encontrar algo compatible con el momento.",
          decision:
            "Incorporar filtros relacionados con gustos y emociones, además de los tradicionales.",
          impact:
            "La elección deja de depender solo del catálogo y empieza a considerar cómo se siente la persona.",
        },
        {
          title: "Redirección directa al contenido",
          problem:
            "Elegir algo no alcanzaba: después había que buscarlo en la plataforma donde estaba disponible.",
          decision:
            "Vincular las plataformas de streaming del usuario y redirigir directo al servicio donde puede reproducirse.",
          impact:
            "El recorrido termina en reproducir, no en volver a buscar.",
        },
      ],
    },
    {
      type: "prototyping",
      title: "Prototipado y validación",
      body: "Comenzamos con un prototipo de baja fidelidad para validar el flujo y las principales decisiones.\nDespués del testeo iteramos la propuesta y desarrollamos un prototipo funcional en alta fidelidad.\nTambién dejamos planteadas funcionalidades para una futura versión: foros, chats, contenido compartido y recomendaciones adaptadas a las preferencias de dos personas que miran juntas.",
    },
    {
      type: "final-solution",
      title: "Una plataforma que conecta tus plataformas",
      description:
        "Y Ahora Qué? conecta los distintos servicios de streaming que usa una persona y ofrece recomendaciones más personalizadas.",
      body: "La experiencia reemplaza el recorrido de buscar → comparar → dudar → abandonar por contar qué querés ver → recibir opciones → elegir → mirar.",
      items: [
        "Filtros empáticos.",
        "Recomendaciones personalizadas.",
        "Vinculación con plataformas de streaming.",
        "Redirección directa al contenido.",
        "Base para futuras experiencias sociales.",
      ],
    },
    {
      type: "result",
      title: "Resultado",
      description:
        "Y Ahora Qué? convirtió una situación cotidiana en una oportunidad para simplificar la toma de decisiones dentro de un ecosistema saturado de contenido.",
      items: [
        "Prototipo funcional en alta fidelidad presentado frente a un jurado.",
        "Problema redefinido a partir de investigación con usuarios.",
        "Funcionalidades futuras documentadas para una siguiente versión.",
      ],
    },
    {
      type: "learnings",
      title: "Aprendizajes",
      items: [
        "Revisar una hipótesis inicial cuando la investigación la contradice es parte del proceso, no un retroceso.",
        "El problema que creíamos estar resolviendo no era exactamente el que los usuarios experimentaban.",
        "Definir bien el problema cambió la solución más que cualquier decisión de interfaz.",
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
            "Universidad Maimónides hackathon, my first time taking part in the competition.",
        },
        {
          title: "My role",
          description:
            "UX research and proposal design with the team: surveys, interviews, problem definition, and prototyping.",
        },
        {
          title: "Outcome",
          description:
            "High-fidelity working prototype presented to a jury after two weeks of workshops.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        { title: "Project type", description: "Hackathon · UX/UI Design" },
        { title: "Year", description: "2021" },
        {
          title: "Tools",
          description:
            "Figma · Adobe XD · Miro · User Research · Design Thinking",
        },
      ],
    },
    {
      type: "context",
      title: "The project",
      body: "Y Ahora Qué? was built during a hackathon at Universidad Maimónides, my first time taking part in the competition.\nOver two weeks of workshops and teamwork we built a working prototype and presented it to a jury.\nThe starting point was an everyday situation: finishing a series or a film and not knowing what to watch next.",
    },
    {
      type: "challenge",
      title: "Too many options wasn't the problem.",
      body: "Our initial hypothesis was that the problem came from the endless number of options available and the little time people have to choose.\nWe ran surveys and interviews to test it, and the results made us question that first hypothesis.",
      description:
        "The problem wasn't simply having too many options: it was finding an option that actually matched each person's taste and mood.",
    },
    {
      type: "research",
      title: "Listen before defining",
      description:
        "Surveys and interviews were the basis for revisiting the initial hypothesis and understanding the real decision process.",
      highlights: [
        {
          title: "Surveys and interviews",
          detail:
            "Used to validate the initial hypothesis. The results contradicted it.",
        },
        {
          title: "User persona",
          detail:
            "Built around the main pain points of the decision process.",
        },
        {
          title: "User journey",
          detail:
            "We mapped what happened from finishing a series to deciding what to watch.",
        },
      ],
    },
    {
      type: "research-findings",
      title: "What changed our direction",
      description:
        "The findings moved the focus from the catalogue to the person doing the choosing.",
      highlights: [
        {
          title: "Volume wasn't the blocker",
          detail:
            "People weren't stuck for lack of options, but for not finding one that clicked.",
        },
        {
          title: "Mood mattered",
          detail:
            "The choice depended as much on taste as on how the person felt at that moment.",
        },
        {
          title: "The process ended in giving up",
          detail:
            "The usual loop was searching, comparing, hesitating, and quitting without watching anything.",
        },
      ],
    },
    {
      type: "problem-definition",
      title: "The problem, redefined",
      body: "We moved from a broad issue — there is too much content — to a concrete design opportunity: helping someone find something that matches their taste and their mood, right when they want to watch something.",
      items: [
        "The blocker isn't the amount of content, it's how well it matches the person.",
        "The decision depends on the emotional moment, not only on genre.",
        "Success means starting to watch, not continuing to search.",
      ],
    },
    {
      type: "design-decisions",
      title: "Design decisions",
      decisions: [
        {
          title: "Empathetic filters",
          problem:
            "Traditional genre or year filters didn't help find something that fit the moment.",
          decision:
            "Add filters tied to taste and emotions alongside the traditional ones.",
          impact:
            "The choice stops depending only on the catalogue and starts considering how the person feels.",
        },
        {
          title: "Direct redirection to the content",
          problem:
            "Choosing wasn't enough: you still had to find the title on whichever platform had it.",
          decision:
            "Link the user's streaming platforms and redirect straight to the service where it can be played.",
          impact: "The journey ends in playing, not in searching again.",
        },
      ],
    },
    {
      type: "prototyping",
      title: "Prototyping and validation",
      body: "We started with a low-fidelity prototype to validate the flow and the main decisions.\nAfter testing we iterated the proposal and built a high-fidelity working prototype.\nWe also outlined features for a future version: forums, chats, shared content, and recommendations adapted to the preferences of two people watching together.",
    },
    {
      type: "final-solution",
      title: "A platform that connects your platforms",
      description:
        "Y Ahora Qué? connects the different streaming services a person uses and offers more personalized recommendations.",
      body: "The experience replaces the search → compare → hesitate → give up loop with say what you feel like watching → get options → choose → watch.",
      items: [
        "Empathetic filters.",
        "Personalized recommendations.",
        "Streaming platform linking.",
        "Direct redirection to the content.",
        "Groundwork for future social experiences.",
      ],
    },
    {
      type: "result",
      title: "Result",
      description:
        "Y Ahora Qué? turned an everyday situation into an opportunity to simplify decision-making inside an ecosystem saturated with content.",
      items: [
        "High-fidelity working prototype presented to a jury.",
        "Problem redefined through user research.",
        "Future features documented for a next version.",
      ],
    },
    {
      type: "learnings",
      title: "Learnings",
      items: [
        "Revisiting an initial hypothesis when research contradicts it is part of the process, not a setback.",
        "The problem we thought we were solving wasn't exactly the one users were living.",
        "Defining the problem well changed the solution more than any interface decision.",
      ],
    },
  ],
})
