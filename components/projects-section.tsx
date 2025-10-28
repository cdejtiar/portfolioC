"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
}

interface ProjectsSectionProps {
  language: "es" | "en";
}

const translations = {
  es: {
    title: "Mis Proyectos",
    subtitle:
      "Una selección de trabajos que muestran mi pasión por el diseño y desarrollo",
    viewProject: "Ver Proyecto",
  },
  en: {
    title: "My Projects",
    subtitle:
      "A selection of work that showcases my passion for design and development",
    viewProject: "View Project",
  },
};

// Projects data - Portfolio showcase
const projectsData: { [key: string]: Project[] } = {
  es: [
    {
      id: "1",
      title: "eXerparK",
      description:
        "Plataforma digital para motivar la actividad física y conectar personas a través del movimiento",
      fullDescription:
        "eXerparK nació en 2021, en el contexto pospandemia, con el objetivo de recuperar la motivación por el ejercicio y fomentar el encuentro en espacios públicos como parques y plazas. \n El proyecto combina bienestar, comunidad y tecnología: propone un espacio donde las personas pueden descubrir actividades gratuitas al aire libre, agendarlas, conocer gente nueva y mantenerse activas. \n Durante la investigación inicial se realizó un Desk Research y un Social Listening sobre los hábitos de ejercicio en Argentina, lo que permitió detectar una pérdida generalizada de motivación. \n A partir de esa problemática, el proceso de Ideación se centró en la pregunta “¿Cómo podríamos crear un espacio donde las personas desmotivadas puedan motivarse?”, definiendo la motivación como el eje central del diseño. \n Con herramientas como Customer Journey, User Flow y Benchmark, se consolidó una propuesta con valor agregado y se desarrolló un prototipo funcional en Adobe XD.",
      image: "/placeholder.jpg",
      technologies: ["Adobe XD", "Figma", "Desk Research", "Benchmarking"],
      //links a prototipo y a presentación de google
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Agenda personal para planificar actividades",
        "Sistema de reservas gratuito en espacios públicos",
        "Enfoque en la motivación y la comunidad",
      ],
    },
    {
      id: "2",
      title: "Y Ahora Qué?",
      description:
        "Solución digital para descubrir qué ver después de terminar una serie o película",
      fullDescription: `Y Ahora Qué? nació en 2021 durante una Hackathon de la Universidad Maimónides, mi primera experiencia en el concurso. Durante dos semanas intensas de workshops y trabajo en equipo, desarrollamos un prototipo funcional que presentamos frente a un jurado.
El proyecto surge de una situación común: terminar una serie o película y no saber qué ver a continuación.
Durante la fase de Research, realizamos una lluvia de ideas sobre el mundo de las series y el entretenimiento, identificando una problemática clara: la saturación de opciones y el poco tiempo para decidir.
Luego de encuestas y entrevistas descubrimos que el verdadero problema no era la falta de contenido, sino la dificultad de encontrar algo que se ajuste realmente a los gustos del usuario.
A partir de esta redefinición, creamos una User Persona y su User Journey, y avanzamos hacia las etapas de Definición, User Flow y desarrollo del MVP.
La solución final fue una plataforma que permite:
- Conectar tus plataformas de streaming favoritas.
- Recibir recomendaciones personalizadas con filtros empáticos basados en emociones y gustos.
- Redirigirte directamente a la plataforma donde se reproduce el contenido elegido.

Después de un proceso de testeo, creamos un prototipo en alta fidelidad, y propusimos ideas para un futuro Y Ahora Qué? 2.0, que incluiría funciones como foros informales, chats, indicadores de contenido visto, y opciones colaborativas según con quién mires.`,
      image: "/placeholder.jpg",
      technologies: [
        "Figma",
        "Adobe XD",
        "Miro",
        "User Research",
        "Design Thinking",
      ],
      //links a prototipo y a presentación de google
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Filtros empáticos personalizados",
        "Vinculación directa con plataformas de streaming",
        "Sistema de recomendaciones basado en emociones y gustos",
        "Espacios de interacción futura entre usuarios",
      ],
    },
    {
      id: "3",
      title: "enHUELLA2",
      description:
        "Aplicación digital para centralizar y agilizar el proceso de adopción de animales",
      fullDescription: `enHUELLA2 fue creado en 2022 durante una Hackathon de la Universidad Maimónides, en mi segunda participación en el concurso. Durante dos semanas de workshops y trabajo en equipo, desarrollamos un prototipo funcional, con el que obtuvimos el premio a Mejor Scrum Master.
    El proyecto aborda la problemática de la adopción de animales y el desafío de encontrar información clara, accesible y centralizada sobre refugios, organizaciones y procesos de adopción.
    Nuestra propuesta fue una aplicación que permita a los refugios y organizaciones publicar animales en adopción o tránsito, y que los usuarios puedan encontrar a su compañero ideal mediante filtros personalizados.
    En la fase de Research, realizamos un Benchmark que evidenció la falta de soluciones adaptadas a iOS y la dispersión de la información entre múltiples sitios.
    También llevamos a cabo una encuesta con 84 participantes, donde descubrimos que más del 50 % adoptó a través de redes sociales o rescatando directamente, y que la mayoría prefería una app centralizada.
    Complementamos este análisis con entrevistas cualitativas que nos aportaron nuevas perspectivas sobre la experiencia del proceso de adopción.
    Durante la Definición, nos guiamos por la pregunta:
    ¿Cómo podríamos facilitar la búsqueda de un animal en adopción y su proceso para que la experiencia sea más agradable y centralizada?
    Con esta base, definimos un MVP centrado en una aplicación que:
    - Centraliza la información de animales disponibles.
    - Permite completar un único formulario inicial para simplificar el proceso.
    - Facilita la comunicación con refugios y organizaciones.

    Tras el testeo con 5 usuarios, iteramos el diseño desde baja hasta alta fidelidad, mejorando usabilidad y flujo.
    Finalmente, proyectamos ideas para una versión futura de enHUELLA2, con funciones como:
    - Flujo y diseño para cuidadores.
    - Información postadopción y cuidados básicos.
    - Seguimiento de documentación médica.
    - Búsqueda de veterinarias por zona.`,
      image: "/placeholder.jpg",
      technologies: [
        "Figma",
        "Miro",
        "Design Thinking",
        "User Research",
        "Scrum",
      ],
      //links a prototipo y a presentación de google
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Centralización de información sobre adopciones",
        "Filtros personalizados por tipo de mascota y necesidades",
        "Formulario único y simplificado",
        "Comunicación directa con refugios y organizaciones",
      ],
    },
    {
      id: "4",
      title: "NFTBunnies",
      description:
        "Colección digital de NFTs generativos creada con Procreate y Web3",
      fullDescription: `NFTBunnies fue desarrollado en 2022 en el marco de la materia Programación Multimedial III.
El desafío consistía en diseñar una colección de 50 NFTs con una temática libre, programar una web funcional para mintearlos y experimentar con Smart Contracts y Ethereum de prueba, explorando el potencial del ecosistema Web3.
Para la creación visual utilicé Procreate, organizando los elementos en carpetas por categorías: fondos, clima, color de cuerpo, manos, accesorios y decoraciones.
Cada combinación generaba variaciones únicas, y mediante un script automatizado logré producir múltiples versiones de forma dinámica.
Además de la programación del backend, me encargué del diseño del frontend y del logo, buscando transmitir una estética divertida, tierna y juguetona, alineada con el universo visual de los personajes.`,
      image: "/placeholder.jpg",
      technologies: ["Procreate", "JavaScript", "Web3.js", "HTML", "CSS"],
      //links a github y vercel
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Colección generativa de 50 NFTs",
        "Implementación de Smart Contracts en red de prueba Ethereum",
        "Web funcional para minteo de NFTs",
        "Diseño integral de identidad visual y frontend",
      ],
    },
    {
      id: "5",
      title: "Dino",
      description:
        "Videojuego inspirado en el clásico juego del dinosaurio de Chrome",
      fullDescription: `Dino fue creado en 2023 como proyecto final de la materia Programación Multimedial IV.
El objetivo era recrear el icónico juego del dinosaurio de Google Chrome, donde el personaje debe esquivar obstáculos mientras corre indefinidamente, combinando jugabilidad simple con un diseño visual atractivo.
El desarrollo se realizó utilizando C#, Unity y SQLite, comprendiendo los fundamentos del lenguaje, el motor de juego y la gestión de datos.
A través de scripts personalizados y las herramientas del editor, logré un resultado funcional, fluido y divertido, que destaca por su interfaz amigable y facilidad de uso.`,
      image: "/placeholder.jpg",
      technologies: [
        "Unity",
        "C#",
        "SQLite",
        "LocalStorage",
        "Visual Studio Code",
      ],
      //link a github
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Jugabilidad infinita con detección de colisiones",
        "Interfaz visual dinámica y atractiva",
        "Scripts personalizados en C#",
        "Sistema de registro de puntajes con SQLite y LocalStorage",
      ],
    },

    {
      id: "7",
      title: "GameReads",
      description: "Aplicación gamificada para motivar la lectura",
      fullDescription: `GameReads fue desarrollado en 2023 dentro de la materia Sistemas Gamificados, con el objetivo de aplicar estrategias de gamificación a un entorno digital.
 La propuesta consiste en una app móvil que permite a los usuarios registrar sus lecturas, descubrir nuevos libros, compartir opiniones y conectarse con otros lectores, todo dentro de un sistema diseñado para motivar el hábito de leer más.
 El proyecto se enmarca en un sistema de cambio de comportamiento, cuyo propósito es generar un impacto positivo en los usuarios a través del juego y la interacción social.
 Las principales funcionalidades permiten:
  - Llevar un registro personal de lecturas.
  - Recibir recomendaciones basadas en gustos e intereses.
  - Calificar y compartir opiniones con otros usuarios.
  - Conectarse con personas afines y descubrir nuevas lecturas.

Durante el desarrollo realicé un análisis comparativo de plataformas existentes, diseñé un Gamification Canvas para estructurar la estrategia lúdica, y creé tanto el User Flow como el prototipo funcional del sistema.`,
      image: "/placeholder.jpg",
      technologies: [
        "Figma",
        "Gamification Canvas",
        "User Flow",
        "UX Research",
      ],
      //links a prototipo y a presentación de google
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Sistema de reseñas y calificaciones",
        "Registro y seguimiento de lecturas",
        "Recomendaciones personalizadas según intereses",
        "Comunidad de lectores y sistema de puntuaciones",
      ],
    },
    {
      id: "8",
      title: "Organizador", //me quedé acá
      description:
        "Aplicación de productividad para gestión de tareas y proyectos",
      fullDescription:
        "Herramienta completa de productividad que combina gestión de tareas, calendario, notas y colaboración en equipo en una interfaz limpia y eficiente.",
      image: "/placeholder.jpg",
      technologies: ["React", "TypeScript", "Supabase", "Tailwind"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Gestión avanzada de tareas",
        "Calendario integrado",
        "Colaboración en tiempo real",
        "Sincronización multiplataforma",
      ],
    },
    {
      id: "9",
      title: "intoximate",
      description:
        "Aplicación de salud para seguimiento de hábitos y bienestar",
      fullDescription:
        "App centrada en el bienestar personal que ayuda a usuarios a identificar y reducir hábitos tóxicos mientras promueve un estilo de vida saludable.",
      image: "/placeholder.jpg",
      technologies: ["Flutter", "Dart", "Firebase", "HealthKit"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Seguimiento de hábitos",
        "Análisis de patrones",
        "Recordatorios inteligentes",
        "Integración con dispositivos de salud",
      ],
    },
    {
      id: "10",
      title: "Bingo",
      description: "Juego de bingo online multijugador con salas privadas",
      fullDescription:
        "Plataforma de bingo online que permite crear salas privadas, jugar con amigos y disfrutar de diferentes variantes del clásico juego de bingo.",
      image: "/placeholder.jpg",
      technologies: ["Socket.io", "React", "Node.js", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Multijugador en tiempo real",
        "Salas privadas y públicas",
        "Diferentes modalidades de juego",
        "Chat integrado",
      ],
    },
    //falta intoximate
    {
      id: "12",
      title: "Sala de escape IVO 2025",
      description: "Experiencia interactiva de escape room digital inmersiva",
      fullDescription:
        "Juego de escape room digital desarrollado para el evento IVO 2025, combinando puzzles interactivos, narrativa inmersiva y tecnología web moderna.",
      image: "/placeholder.jpg",
      technologies: ["Three.js", "React", "WebGL", "CSS3"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Gráficos 3D interactivos",
        "Puzzles complejos",
        "Narrativa inmersiva",
        "Experiencia multisensorial",
      ],
    },
    {
      id: "13",
      title: "inFlow",
      description:
        "Proyecto de tesis: Sistema inteligente de gestión de flujo de trabajo",
      fullDescription:
        "Proyecto de tesis en desarrollo que utiliza inteligencia artificial para optimizar flujos de trabajo empresariales, automatizar procesos y mejorar la productividad organizacional.",
      image: "/placeholder.jpg",
      technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Inteligencia artificial integrada",
        "Automatización de procesos",
        "Análisis predictivo",
        "Dashboard analítico avanzado",
      ],
    },
    {
      id: "14",
      title: "Portfolio Moderno",
      description:
        "Portfolio personal interactivo con navegación fluida y efectos de vidrio",
      fullDescription:
        "Portfolio personal desarrollado con Next.js 14, featuring navegación móvil innovadora, efectos de vidrio líquido, sistema de temas, y optimizaciones para dispositivos táctiles. Incluye safe areas para móviles modernos.",
      image: "/modern-portfolio-website.png",
      technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Navegación móvil flotante innovadora",
        "Efectos de vidrio líquido (glassmorphism)",
        "Breakpoints personalizados (1165px)",
        "Safe areas para dispositivos modernos",
      ],
    },
  ],
  en: [
    {
      id: "1",
      title: "eXerparK",
      description:
        "Digital platform for entertainment space management and booking",
      fullDescription:
        "eXerparK is a comprehensive platform for managing and booking entertainment spaces like parks, recreational centers, and sports areas. Includes booking system, online payments, and user management.",
      image: "/placeholder.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Real-time booking system",
        "Integrated payment management",
        "Complete administrative panel",
        "Automatic notifications",
      ],
    },
    {
      id: "2",
      title: "Y Ahora Qué?",
      description:
        "Interactive application for decision making and personal guidance",
      fullDescription:
        "An innovative application that helps users make important life decisions through interactive tools, personalized advice, and goal tracking.",
      image: "/placeholder.jpg",
      technologies: ["React Native", "Firebase", "TypeScript", "Expo"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Decision-making tools",
        "AI-powered personalized advice",
        "Goal tracking",
        "Intuitive and friendly interface",
      ],
    },
    {
      id: "3",
      title: "enHUELLA2",
      description: "Carbon footprint tracking and sustainability system",
      fullDescription:
        "Web platform for calculating and tracking personal and corporate carbon footprint, with recommendations to reduce environmental impact.",
      image: "/placeholder.jpg",
      technologies: ["Vue.js", "Python", "Django", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Automatic carbon footprint calculation",
        "Detailed reports and visualizations",
        "Personalized recommendations",
        "Comparisons and metrics",
      ],
    },
    {
      id: "4",
      title: "NFTBunnies",
      description: "NFT marketplace and collection featuring digital bunnies",
      fullDescription:
        "Blockchain project combining digital art and NFT technology, featuring a unique collection of digital bunnies with different rarities and special characteristics.",
      image: "/placeholder.jpg",
      technologies: ["React", "Solidity", "Web3.js", "IPFS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Smart contracts on Ethereum",
        "Integrated marketplace",
        "Rarity system",
        "Community and rewards",
      ],
    },
    {
      id: "5",
      title: "Dino",
      description: "Retro arcade game inspired by Chrome's dinosaur",
      fullDescription:
        "Modern recreation of Google Chrome's classic dinosaur game with improved graphics, power-ups, and online scoring system.",
      image: "/placeholder.jpg",
      technologies: ["JavaScript", "HTML5 Canvas", "CSS3", "LocalStorage"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Enhanced pixel art graphics",
        "Power-up system",
        "Online leaderboard",
        "Responsive controls",
      ],
    },

    {
      id: "7",
      title: "GameReads",
      description: "Social platform for video game reviews and recommendations",
      fullDescription:
        "Social network dedicated to gamers where they can write reviews, discover new games, and connect with other players with similar tastes.",
      image: "/placeholder.jpg",
      technologies: ["React", "Node.js", "GraphQL", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Review and rating system",
        "Personalized recommendations",
        "Gamer community",
        "Integrated game API",
      ],
    },
    {
      id: "8",
      title: "Organizer",
      description: "Productivity application for task and project management",
      fullDescription:
        "Complete productivity tool that combines task management, calendar, notes, and team collaboration in a clean and efficient interface.",
      image: "/placeholder.jpg",
      technologies: ["React", "TypeScript", "Supabase", "Tailwind"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Advanced task management",
        "Integrated calendar",
        "Real-time collaboration",
        "Cross-platform synchronization",
      ],
    },
    {
      id: "9",
      title: "intoximate",
      description: "Health application for habit tracking and wellness",
      fullDescription:
        "Personal wellness-focused app that helps users identify and reduce toxic habits while promoting a healthy lifestyle.",
      image: "/placeholder.jpg",
      technologies: ["Flutter", "Dart", "Firebase", "HealthKit"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Habit tracking",
        "Pattern analysis",
        "Smart reminders",
        "Health device integration",
      ],
    },
    {
      id: "10",
      title: "Bingo",
      description: "Online multiplayer bingo game with private rooms",
      fullDescription:
        "Online bingo platform that allows creating private rooms, playing with friends, and enjoying different variants of the classic bingo game.",
      image: "/placeholder.jpg",
      technologies: ["Socket.io", "React", "Node.js", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Real-time multiplayer",
        "Private and public rooms",
        "Different game modes",
        "Integrated chat",
      ],
    },

    {
      id: "12",
      title: "IVO 2025 Escape Room",
      description: "Immersive digital escape room interactive experience",
      fullDescription:
        "Digital escape room game developed for the IVO 2025 event, combining interactive puzzles, immersive narrative, and modern web technology.",
      image: "/placeholder.jpg",
      technologies: ["Three.js", "React", "WebGL", "CSS3"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Interactive 3D graphics",
        "Complex puzzles",
        "Immersive narrative",
        "Multisensory experience",
      ],
    },
    {
      id: "13",
      title: "inFlow",
      description: "Thesis project: Intelligent workflow management system",
      fullDescription:
        "Thesis project in development that uses artificial intelligence to optimize business workflows, automate processes, and improve organizational productivity.",
      image: "/placeholder.jpg",
      technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Integrated artificial intelligence",
        "Process automation",
        "Predictive analytics",
        "Advanced analytical dashboard",
      ],
    },
    {
      id: "14",
      title: "Modern Portfolio",
      description:
        "Interactive personal portfolio with fluid navigation and glass effects",
      fullDescription:
        "Personal portfolio developed with Next.js 14, featuring innovative mobile navigation, liquid glass effects, theme system, and touch device optimizations. Includes safe areas for modern mobile devices.",
      image: "/modern-portfolio-website.png",
      technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Innovative floating mobile navigation",
        "Liquid glass effects (glassmorphism)",
        "Custom breakpoints (1165px)",
        "Safe areas for modern devices",
      ],
    },
  ],
};

export function ProjectsSection({ language }: ProjectsSectionProps) {
  const router = useRouter();
  const t = translations[language];
  const projects = projectsData[language];

  const handleProjectClick = (projectId: string) => {
    localStorage.setItem("language", language);
    router.push(`/project/${projectId}`);
  };

  return (
    <section
      id="projects"
      className="py-16 min-h-screen flex items-center relative"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-superlobster text-3xl md:text-4xl font-bold text-primary mb-4">
              {t.title}
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto font-barlow">
              {t.subtitle}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="glass-card border-0 overflow-hidden cursor-pointer group"
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-superlobster text-lg font-bold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-barlow mb-3 line-clamp-2 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary/20 text-secondary-foreground text-xs rounded-full font-barlow"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent text-xs"
                  >
                    {t.viewProject}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
