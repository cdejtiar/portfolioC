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
            "Hackathon de la Universidad Maimónides, mi segunda participación en el concurso.",
        },
        { title: "Equipo", description: "Equipo de hackathon trabajando con Scrum." },
        {
          title: "Resultado",
          description:
            "Prototipo funcional y premio a Mejor Scrum Master.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        { title: "Rol", description: "UX Research · Product Design · Scrum" },
        { title: "Año", description: "2022" },
        { title: "Herramientas", description: "Figma · Miro · Benchmark · Design Thinking" },
      ],
    },
    {
      type: "context",
      title: "El proyecto",
      body: "enHUELLA2 fue desarrollado durante una Hackathon de la Universidad Maimónides, en mi segunda participación en el concurso.\nDurante dos semanas trabajamos mediante workshops y distintas actividades para crear un prototipo funcional. El proyecto recibió el premio a Mejor Scrum Master.\nLa propuesta nació a partir de una problemática relacionada con la adopción de animales: la información se encuentra dispersa y el proceso puede resultar repetitivo, tedioso y frustrante para quienes buscan adoptar.",
    },
    {
      type: "challenge",
      title: "Adoptar no debería ser un trámite fragmentado.",
      body: "La oportunidad se centró en una pregunta: ¿cómo podríamos facilitar la búsqueda de un animal en adopción y su proceso para que la experiencia sea más agradable y centralizada?",
      description:
        "La respuesta debía contemplar tanto a las personas que buscan adoptar como a refugios y organizaciones que necesitan visibilizar a los animales disponibles.",
      sideHighlight: {
        title: "Dos actores, una experiencia",
        description:
          "Adoptantes y refugios comparten el mismo proceso, pero con necesidades y tiempos distintos.",
      },
    },
    {
      type: "research",
      title: "84 respuestas y un patrón claro.",
      description:
        "Combinamos un Benchmark de soluciones existentes con una encuesta de 84 respuestas y entrevistas cualitativas.",
      highlights: [
        {
          title: "Benchmark",
          detail:
            "Ninguna de las aplicaciones analizadas estaba específicamente diseñada para iOS y la información seguía distribuida entre distintas plataformas.",
        },
        {
          title: "Recorrido corto",
          detail:
            "La mayoría de los encuestados no había visitado más de un refugio u organización.",
        },
        {
          title: "Canales dispersos",
          detail:
            "Aproximadamente la mitad había adoptado mediante redes sociales, refugios o rescatando animales de la calle.",
        },
        {
          title: "Preferencia mobile",
          detail:
            "Existía una preferencia clara por centralizar la información en una aplicación móvil.",
        },
      ],
    },
    {
      type: "problem-definition",
      title: "Definición del MVP",
      body: "Los hallazgos permitieron definir un MVP enfocado en reducir la fragmentación del proceso.\nLa aplicación debía permitir explorar → filtrar → encontrar → gestionar, sin tener que repetir información constantemente.",
    },
    {
      type: "testing",
      title: "Prototipado y testing",
      body: "Desarrollamos un prototipo inicial en baja fidelidad y lo testeamos con 5 posibles usuarios.\nA partir de los resultados iteramos la propuesta pasando por prototipos de media y alta fidelidad.",
      items: [
        "Flujo para cuidadores.",
        "Información postadopción.",
        "Seguimiento de documentación médica.",
        "Búsqueda de veterinarias por zona.",
      ],
    },
    {
      type: "final-solution",
      title: "Un solo lugar y un solo formulario",
      description:
        "enHUELLA2 centraliza animales disponibles para adopción o tránsito y permite gestionar el proceso mediante un único formulario inicial.",
      body: "La experiencia se estructura alrededor de filtros personalizados para ayudar a encontrar un compañero compatible con las necesidades y preferencias del usuario.",
      items: [
        "Información centralizada de animales.",
        "Filtros personalizados.",
        "Formulario único.",
        "Comunicación con refugios y organizaciones.",
        "Publicación de animales en adopción o tránsito.",
      ],
    },
    {
      type: "result",
      title: "Resultados y aprendizajes",
      description:
        "enHUELLA2 propone centralizar una experiencia que hoy puede requerir navegar múltiples espacios y repetir información.",
      items: [
        "Premio a Mejor Scrum Master en la hackathon.",
        "Prototipo de alta fidelidad validado con usuarios.",
        "Investigar antes de definir una solución es clave cuando hay múltiples actores en una misma experiencia.",
        "La tecnología no debería ser una capa extra de complejidad, sino una herramienta para hacer el proceso más claro y accesible.",
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
            "Universidad Maimónides hackathon, my second time taking part in the competition.",
        },
        { title: "Team", description: "Hackathon team working with Scrum." },
        {
          title: "Outcome",
          description: "Working prototype and the Best Scrum Master award.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        { title: "Role", description: "UX Research · Product Design · Scrum" },
        { title: "Year", description: "2022" },
        { title: "Tools", description: "Figma · Miro · Benchmark · Design Thinking" },
      ],
    },
    {
      type: "context",
      title: "The project",
      body: "enHUELLA2 was built during a hackathon at Universidad Maimónides, my second time taking part in the competition.\nOver two weeks we worked through workshops and activities to create a working prototype. The project won the Best Scrum Master award.\nThe idea came from a problem around pet adoption: information is scattered and the process can feel repetitive, tedious, and frustrating for people who want to adopt.",
    },
    {
      type: "challenge",
      title: "Adopting shouldn't be a fragmented errand.",
      body: "The opportunity centered on one question: how could we make finding an animal for adoption — and the process around it — more pleasant and centralized?",
      description:
        "The answer had to consider both the people looking to adopt and the shelters and organizations that need visibility for the animals available.",
      sideHighlight: {
        title: "Two actors, one experience",
        description:
          "Adopters and shelters share the same process, but with different needs and rhythms.",
      },
    },
    {
      type: "research",
      title: "84 responses and a clear pattern.",
      description:
        "We combined a benchmark of existing solutions with a survey of 84 responses and qualitative interviews.",
      highlights: [
        {
          title: "Benchmark",
          detail:
            "None of the apps analyzed was specifically designed for iOS, and information remained spread across different platforms.",
        },
        {
          title: "Short journey",
          detail:
            "Most respondents had not visited more than one shelter or organization.",
        },
        {
          title: "Scattered channels",
          detail:
            "About half had adopted through social media, shelters, or by rescuing animals from the street.",
        },
        {
          title: "Mobile preference",
          detail:
            "There was a clear preference for centralizing information in a mobile app.",
        },
      ],
    },
    {
      type: "problem-definition",
      title: "Defining the MVP",
      body: "The findings let us define an MVP focused on reducing the fragmentation of the process.\nThe app had to allow explore → filter → find → manage, without constantly repeating information.",
    },
    {
      type: "testing",
      title: "Prototyping and testing",
      body: "We built an initial low-fidelity prototype and tested it with 5 potential users.\nBased on the results we iterated the proposal through medium- and high-fidelity prototypes.",
      items: [
        "Foster caregiver flow.",
        "Post-adoption information.",
        "Medical documentation tracking.",
        "Vet search by area.",
      ],
    },
    {
      type: "final-solution",
      title: "One place and one form",
      description:
        "enHUELLA2 centralizes animals available for adoption or fostering and lets people manage the process through a single initial form.",
      body: "The experience is structured around personalized filters that help find a companion compatible with the user's needs and preferences.",
      items: [
        "Centralized animal information.",
        "Personalized filters.",
        "Single form.",
        "Communication with shelters and organizations.",
        "Publishing animals for adoption or fostering.",
      ],
    },
    {
      type: "result",
      title: "Results & learnings",
      description:
        "enHUELLA2 proposes centralizing an experience that today can require navigating multiple spaces and repeating information.",
      items: [
        "Best Scrum Master award at the hackathon.",
        "High-fidelity prototype validated with users.",
        "Researching before defining a solution is key when several actors share one experience.",
        "Technology shouldn't be an extra layer of complexity, but a tool to make the process clearer and more accessible.",
      ],
    },
  ],
})
