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
        {
          title: "Mi participación",
          description:
            "UX Research, diseño de la propuesta y coordinación del equipo con Scrum.",
        },
        {
          title: "Resultado",
          description:
            "Prototipo funcional en dos semanas y premio a Mejor Scrum Master.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        { title: "Tipo de proyecto", description: "Hackathon · UX/UI Design · Scrum" },
        { title: "Año", description: "2022" },
        {
          title: "Herramientas",
          description: "Figma · Miro · Design Thinking · UX Research · Benchmark · Scrum",
        },
      ],
    },
    {
      type: "context",
      title: "El proyecto",
      body: "enHUELLA2 fue desarrollado durante una Hackathon de la Universidad Maimónides, en mi segunda participación en el concurso.\nDurante dos semanas trabajamos mediante workshops y distintas actividades para crear un prototipo funcional.\nLa propuesta nació de una problemática concreta: la información sobre adopción de animales está dispersa y el proceso puede resultar repetitivo, tedioso y frustrante para quienes buscan adoptar.",
    },
    {
      type: "challenge",
      title: "¿Cómo podríamos centralizar el proceso de adopción?",
      body: "La oportunidad se centró en una pregunta: ¿cómo podríamos facilitar la búsqueda de un animal en adopción y su proceso para que la experiencia sea más agradable y centralizada?",
      description:
        "La respuesta debía contemplar tanto a las personas que buscan adoptar como a los refugios y organizaciones que necesitan visibilizar a los animales disponibles.",
    },
    {
      type: "research",
      title: "Benchmark, encuesta y entrevistas",
      description:
        "Combinamos análisis de soluciones existentes con datos cuantitativos y cualitativos antes de definir el producto.",
      highlights: [
        {
          title: "Benchmark",
          detail:
            "Ninguna de las aplicaciones analizadas estaba diseñada específicamente para iOS y la información seguía distribuida entre plataformas.",
        },
        {
          title: "Encuesta · 84 respuestas",
          detail:
            "Base cuantitativa para entender cómo adoptan hoy las personas y qué esperan de una aplicación.",
        },
        {
          title: "Entrevistas cualitativas",
          detail:
            "Complementaron los datos de la encuesta con el detalle del recorrido real de adopción.",
        },
      ],
    },
    {
      type: "research-findings",
      title: "Principales hallazgos",
      highlights: [
        {
          title: "Poca exploración",
          detail:
            "La mayoría de los encuestados no había visitado más de un refugio u organización.",
        },
        {
          title: "Canales fragmentados",
          detail:
            "Aproximadamente la mitad había adoptado mediante redes sociales, refugios o rescatando animales de la calle.",
        },
        {
          title: "Demanda de centralización",
          detail:
            "Existía una preferencia clara por concentrar la información en una aplicación móvil.",
        },
      ],
    },
    {
      type: "problem-definition",
      title: "Definición del MVP",
      body: "Los hallazgos permitieron definir un MVP enfocado en reducir la fragmentación del proceso. La aplicación debía permitir explorar → filtrar → encontrar → gestionar sin tener que repetir información constantemente.",
      items: [
        "Un solo lugar para ver animales en adopción o tránsito.",
        "Filtros que acerquen a un compañero compatible.",
        "Una única instancia de carga de datos para iniciar la gestión.",
      ],
    },
    {
      type: "final-solution",
      title: "Una experiencia centralizada",
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
      type: "testing",
      title: "Prototipado y testing",
      body: "Desarrollamos un prototipo inicial en baja fidelidad y lo testeamos con 5 posibles usuarios.\nA partir de los resultados iteramos la propuesta pasando por prototipos de media y alta fidelidad.",
    },
    {
      type: "iterations",
      title: "Funcionalidades para una siguiente versión",
      items: [
        "Flujo para cuidadores.",
        "Información postadopción.",
        "Seguimiento de documentación médica.",
        "Búsqueda de veterinarias por zona.",
      ],
    },
    {
      type: "result",
      title: "Resultado",
      description:
        "enHUELLA2 propone centralizar una experiencia que hoy puede requerir navegar múltiples espacios y repetir información.",
      items: [
        "Prototipo funcional desarrollado en dos semanas de hackathon.",
        "Premio a Mejor Scrum Master.",
        "MVP definido a partir de 84 respuestas y entrevistas cualitativas.",
      ],
    },
    {
      type: "learnings",
      title: "Aprendizajes",
      items: [
        "Investigar antes de definir una solución es clave cuando hay múltiples actores en una misma experiencia.",
        "La tecnología no debería ser una capa adicional de complejidad, sino una herramienta para hacer el proceso más claro y accesible.",
        "Coordinar el equipo con Scrum sostuvo el ritmo de trabajo en un plazo muy corto.",
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
        {
          title: "My role",
          description:
            "UX research, proposal design, and team coordination with Scrum.",
        },
        {
          title: "Outcome",
          description:
            "Working prototype in two weeks and the Best Scrum Master award.",
        },
      ],
    },
    {
      type: "metadata",
      cards: [
        { title: "Project type", description: "Hackathon · UX/UI Design · Scrum" },
        { title: "Year", description: "2022" },
        {
          title: "Tools",
          description: "Figma · Miro · Design Thinking · UX Research · Benchmark · Scrum",
        },
      ],
    },
    {
      type: "context",
      title: "The project",
      body: "enHUELLA2 was built during a hackathon at Universidad Maimónides, my second time taking part in the competition.\nOver two weeks we worked through workshops and different activities to build a working prototype.\nThe idea came from a concrete problem: information about pet adoption is scattered, and the process can be repetitive, tedious, and frustrating for people who want to adopt.",
    },
    {
      type: "challenge",
      title: "How could we centralize the adoption process?",
      body: "The opportunity focused on one question: how could we make searching for an adoptable animal — and the process around it — more pleasant and centralized?",
      description:
        "The answer had to consider both the people looking to adopt and the shelters and organizations that need visibility for the animals they have available.",
    },
    {
      type: "research",
      title: "Benchmark, survey, and interviews",
      description:
        "We combined analysis of existing solutions with quantitative and qualitative data before defining the product.",
      highlights: [
        {
          title: "Benchmark",
          detail:
            "None of the apps we analysed was designed specifically for iOS, and information stayed spread across platforms.",
        },
        {
          title: "Survey · 84 responses",
          detail:
            "Quantitative base to understand how people adopt today and what they expect from an app.",
        },
        {
          title: "Qualitative interviews",
          detail:
            "Added the detail of the real adoption journey on top of the survey data.",
        },
      ],
    },
    {
      type: "research-findings",
      title: "Key findings",
      highlights: [
        {
          title: "Little exploration",
          detail:
            "Most respondents had not visited more than one shelter or organization.",
        },
        {
          title: "Fragmented channels",
          detail:
            "About half had adopted through social media, shelters, or by rescuing animals from the street.",
        },
        {
          title: "Demand for centralization",
          detail:
            "There was a clear preference for having the information in a single mobile app.",
        },
      ],
    },
    {
      type: "problem-definition",
      title: "Defining the MVP",
      body: "The findings let us define an MVP focused on reducing fragmentation. The app had to allow browse → filter → find → manage without constantly repeating information.",
      items: [
        "One place to see animals available for adoption or foster.",
        "Filters that bring you closer to a compatible companion.",
        "A single data entry step to start the process.",
      ],
    },
    {
      type: "final-solution",
      title: "A centralized experience",
      description:
        "enHUELLA2 centralizes animals available for adoption or foster and handles the process through a single initial form.",
      body: "The experience is built around personalized filters that help find a companion compatible with the user's needs and preferences.",
      items: [
        "Centralized animal information.",
        "Personalized filters.",
        "Single form.",
        "Communication with shelters and organizations.",
        "Publishing animals for adoption or foster.",
      ],
    },
    {
      type: "testing",
      title: "Prototyping and testing",
      body: "We built a low-fidelity prototype and tested it with 5 potential users.\nBased on the results we iterated the proposal through medium- and high-fidelity prototypes.",
    },
    {
      type: "iterations",
      title: "Features for a next version",
      items: [
        "Foster caregiver flow.",
        "Post-adoption information.",
        "Medical documentation tracking.",
        "Finding vets by area.",
      ],
    },
    {
      type: "result",
      title: "Result",
      description:
        "enHUELLA2 centralizes an experience that today can require navigating multiple spaces and repeating information.",
      items: [
        "Working prototype built in a two-week hackathon.",
        "Best Scrum Master award.",
        "MVP defined from 84 survey responses and qualitative interviews.",
      ],
    },
    {
      type: "learnings",
      title: "Learnings",
      items: [
        "Researching before defining a solution is critical when several actors share the same experience.",
        "Technology shouldn't be an extra layer of complexity, but a tool to make the process clearer and more accessible.",
        "Running the team with Scrum kept the pace in a very short timeframe.",
      ],
    },
  ],
})
