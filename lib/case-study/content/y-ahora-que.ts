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
        { title: "Equipo", description: "Equipo multidisciplinario de hackathon." },
        {
          title: "Resultado",
          description:
            "Prototipo funcional presentado frente a un jurado después de dos semanas de workshops.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        { title: "Rol", description: "UX Research · Product Design" },
        { title: "Año", description: "2021" },
        { title: "Herramientas", description: "Figma · Adobe XD · Miro" },
      ],
    },
    {
      type: "context",
      title: "El proyecto",
      body: "Y Ahora Qué? fue desarrollado durante una Hackathon de la Universidad Maimónides, en mi primera participación en el concurso.\nDurante dos semanas de workshops y trabajo en equipo desarrollamos un prototipo funcional que posteriormente presentamos frente a un jurado.\nEl proyecto parte de una situación cotidiana: terminar una serie o película y no saber qué ver después.",
    },
    {
      type: "challenge",
      title: "Demasiadas opciones no era el problema.",
      body: "Nuestra hipótesis inicial fue que el problema estaba relacionado con la cantidad infinita de opciones disponibles y el poco tiempo que las personas tienen para elegir.\nPara comprobarlo realizamos encuestas y entrevistas. Los resultados nos llevaron a cuestionar nuestra primera hipótesis.",
      description:
        "El problema no era simplemente tener demasiadas opciones: era encontrar una opción que realmente coincidiera con los gustos y el estado de ánimo de cada persona.",
      sideHighlight: {
        title: "Filtros empáticos",
        description:
          "En lugar de filtrar solo por género o año, filtrar por cómo se siente la persona en ese momento.",
      },
    },
    {
      type: "research",
      title: "Escuchar antes de definir.",
      description:
        "Encuestas y entrevistas nos permitieron redefinir el problema y pasar de una problemática general a una oportunidad de diseño concreta.",
      highlights: [
        {
          title: "User Persona",
          detail:
            "Construimos una persona enfocada en los principales puntos de dolor del proceso de elección.",
        },
        {
          title: "User Journey",
          detail:
            "Mapeamos qué ocurría desde que alguien terminaba una serie hasta que finalmente decidía qué ver.",
        },
        {
          title: "Hipótesis revisada",
          detail:
            "La investigación contradijo nuestra suposición inicial y cambió la dirección del proyecto.",
        },
      ],
    },
    {
      type: "concept",
      title: "De buscar a mirar",
      body: "La experiencia busca reemplazar el recorrido de buscar → comparar → dudar → abandonar.\nY transformarlo en: contar qué querés ver → recibir opciones → elegir → mirar.",
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
      body: "En lugar de depender únicamente de filtros tradicionales, incorporamos filtros empáticos relacionados con gustos y emociones. Una vez seleccionado el contenido, la plataforma redirige directamente al servicio donde puede reproducirse.",
      items: [
        "Filtros empáticos.",
        "Recomendaciones personalizadas.",
        "Vinculación con plataformas de streaming.",
        "Redirección directa al contenido.",
        "Posibilidad de futuras experiencias sociales.",
      ],
    },
    {
      type: "result",
      title: "Resultados y aprendizajes",
      description:
        "Y Ahora Qué? convirtió una situación cotidiana en una oportunidad para simplificar la toma de decisiones dentro de un ecosistema saturado de contenido.",
      items: [
        "Prototipo funcional en alta fidelidad presentado frente a un jurado.",
        "Revisar una hipótesis inicial cuando la investigación la contradice es parte del proceso.",
        "El problema que creíamos estar resolviendo no era exactamente el que los usuarios experimentaban.",
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
        { title: "Team", description: "Multidisciplinary hackathon team." },
        {
          title: "Outcome",
          description:
            "Working prototype presented to a jury after two weeks of workshops.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        { title: "Role", description: "UX Research · Product Design" },
        { title: "Year", description: "2021" },
        { title: "Tools", description: "Figma · Adobe XD · Miro" },
      ],
    },
    {
      type: "context",
      title: "The project",
      body: "Y Ahora Qué? was built during a hackathon at Universidad Maimónides, my first time taking part in the competition.\nOver two weeks of workshops and teamwork we built a working prototype and presented it to a jury.\nThe project starts from an everyday situation: finishing a series or a film and not knowing what to watch next.",
    },
    {
      type: "challenge",
      title: "Too many options wasn't the problem.",
      body: "Our initial hypothesis was that the problem came from the endless number of options available and the little time people have to choose.\nTo test it we ran surveys and interviews. The results made us question that first hypothesis.",
      description:
        "The problem wasn't simply having too many options: it was finding an option that actually matched each person's taste and mood.",
      sideHighlight: {
        title: "Empathetic filters",
        description:
          "Instead of filtering only by genre or year, filter by how the person feels right now.",
      },
    },
    {
      type: "research",
      title: "Listen before defining.",
      description:
        "Surveys and interviews let us redefine the problem and move from a broad issue to a concrete design opportunity.",
      highlights: [
        {
          title: "User persona",
          detail:
            "We built a persona focused on the main pain points of the decision process.",
        },
        {
          title: "User journey",
          detail:
            "We mapped what happened from finishing a series to finally deciding what to watch.",
        },
        {
          title: "Revised hypothesis",
          detail:
            "Research contradicted our initial assumption and changed the direction of the project.",
        },
      ],
    },
    {
      type: "concept",
      title: "From searching to watching",
      body: "The experience replaces the search → compare → hesitate → give up loop.\nAnd turns it into: say what you feel like watching → get options → choose → watch.",
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
      body: "Instead of relying only on traditional filters, we introduced empathetic filters tied to taste and emotions. Once the content is chosen, the platform redirects straight to the service where it can be played.",
      items: [
        "Empathetic filters.",
        "Personalized recommendations.",
        "Streaming platform linking.",
        "Direct redirection to the content.",
        "Room for future social experiences.",
      ],
    },
    {
      type: "result",
      title: "Results & learnings",
      description:
        "Y Ahora Qué? turned an everyday situation into an opportunity to simplify decision-making inside an ecosystem saturated with content.",
      items: [
        "High-fidelity working prototype presented to a jury.",
        "Revisiting an initial hypothesis when research contradicts it is part of the process.",
        "The problem we thought we were solving wasn't exactly the one users were living.",
      ],
    },
  ],
})
