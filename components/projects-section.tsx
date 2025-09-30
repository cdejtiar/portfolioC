"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface Project {
  id: string
  title: string
  description: string
  fullDescription: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  features: string[]
}

interface ProjectsSectionProps {
  language: "es" | "en"
}

const translations = {
  es: {
    title: "Mis Proyectos",
    subtitle: "Una selección de trabajos que muestran mi pasión por el diseño y desarrollo",
    viewProject: "Ver Proyecto",
  },
  en: {
    title: "My Projects",
    subtitle: "A selection of work that showcases my passion for design and development",
    viewProject: "View Project",
  },
}

// Projects data - Portfolio showcase
const projectsData: { [key: string]: Project[] } = {
  es: [
    {
      id: "1",
      title: "eXerparK",
      description: "Plataforma digital para gestión y reserva de espacios de entretenimiento",
      fullDescription:
        "eXerparK es una plataforma integral para la gestión y reserva de espacios de entretenimiento como parques, centros recreativos y áreas deportivas. Incluye sistema de reservas, pagos en línea y gestión de usuarios.",
      image: "/placeholder.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Sistema de reservas en tiempo real",
        "Gestión de pagos integrada",
        "Panel administrativo completo",
        "Notificaciones automáticas",
      ],
    },
    {
      id: "2", 
      title: "Y Ahora Qué?",
      description: "Aplicación interactiva para toma de decisiones y orientación personal",
      fullDescription:
        "Una aplicación innovadora que ayuda a los usuarios a tomar decisiones importantes en su vida mediante herramientas interactivas, consejos personalizados y seguimiento de objetivos.",
      image: "/placeholder.jpg",
      technologies: ["React Native", "Firebase", "TypeScript", "Expo"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Herramientas de toma de decisiones",
        "Consejos personalizados por IA",
        "Seguimiento de objetivos",
        "Interfaz intuitiva y amigable",
      ],
    },
    {
      id: "3",
      title: "enHUELLA2",
      description: "Sistema de seguimiento de huella de carbono y sostenibilidad",
      fullDescription:
        "Plataforma web para el cálculo y seguimiento de la huella de carbono personal y empresarial, con recomendaciones para reducir el impacto ambiental.",
      image: "/placeholder.jpg",
      technologies: ["Vue.js", "Python", "Django", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Cálculo automático de huella de carbono",
        "Reportes detallados y visualizaciones",
        "Recomendaciones personalizadas",
        "Comparativas y métricas",
      ],
    },
    {
      id: "4",
      title: "NFTBunnies",
      description: "Marketplace y colección de NFTs con temática de conejos digitales",
      fullDescription:
        "Proyecto blockchain que combina arte digital y tecnología NFT, featuring una colección única de conejos digitales con diferentes raridades y características especiales.",
      image: "/placeholder.jpg",
      technologies: ["React", "Solidity", "Web3.js", "IPFS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Smart contracts en Ethereum",
        "Marketplace integrado",
        "Sistema de raridades",
        "Comunidad y rewards",
      ],
    },
    {
      id: "5",
      title: "Dino",
      description: "Juego arcade retro inspirado en el dinosaurio de Chrome",
      fullDescription:
        "Recreación moderna del clásico juego del dinosaurio de Google Chrome con gráficos mejorados, power-ups y sistema de puntuaciones online.",
      image: "/placeholder.jpg",
      technologies: ["JavaScript", "HTML5 Canvas", "CSS3", "LocalStorage"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Gráficos pixelart mejorados",
        "Sistema de power-ups",
        "Leaderboard online",
        "Controles responsivos",
      ],
    },
    {
      id: "6",
      title: "ContentChecker",
      description: "Herramienta de verificación y análisis de contenido digital",
      fullDescription:
        "Aplicación web que analiza y verifica la originalidad del contenido, detecta plagio y proporciona métricas de calidad para escritores y creadores.",
      image: "/placeholder.jpg",
      technologies: ["Python", "Flask", "NLP", "SQLite"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Detección de plagio avanzada",
        "Análisis de legibilidad",
        "Métricas de SEO",
        "Reportes detallados",
      ],
    },
    {
      id: "7",
      title: "GameReads",
      description: "Plataforma social para reseñas y recomendaciones de videojuegos",
      fullDescription:
        "Red social dedicada a gamers donde pueden escribir reseñas, descubrir nuevos juegos y conectar con otros jugadores con gustos similares.",
      image: "/placeholder.jpg",
      technologies: ["React", "Node.js", "GraphQL", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Sistema de reseñas y calificaciones",
        "Recomendaciones personalizadas",
        "Comunidad de gamers",
        "API de juegos integrada",
      ],
    },
    {
      id: "8",
      title: "Organizador",
      description: "Aplicación de productividad para gestión de tareas y proyectos",
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
      description: "Aplicación de salud para seguimiento de hábitos y bienestar",
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
    {
      id: "11",
      title: "MajonApp",
      description: "Aplicación móvil para gestión de eventos y experiencias gastronómicas",
      fullDescription:
        "Plataforma que conecta chef privados con clientes, permitiendo reservar experiencias gastronómicas únicas y personalizadas en casa o eventos especiales.",
      image: "/placeholder.jpg",
      technologies: ["React Native", "Firebase", "Stripe", "Google Maps"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Marketplace de chefs",
        "Sistema de reservas",
        "Pagos seguros integrados",
        "Geolocalización",
      ],
    },
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
      description: "Proyecto de tesis: Sistema inteligente de gestión de flujo de trabajo",
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
      description: "Portfolio personal interactivo con navegación fluida y efectos de vidrio",
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
      description: "Digital platform for entertainment space management and booking",
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
      description: "Interactive application for decision making and personal guidance",
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
      id: "6",
      title: "ContentChecker",
      description: "Digital content verification and analysis tool",
      fullDescription:
        "Web application that analyzes and verifies content originality, detects plagiarism, and provides quality metrics for writers and creators.",
      image: "/placeholder.jpg",
      technologies: ["Python", "Flask", "NLP", "SQLite"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Advanced plagiarism detection",
        "Readability analysis",
        "SEO metrics",
        "Detailed reports",
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
      id: "11",
      title: "MajonApp",
      description: "Mobile app for event management and gastronomic experiences",
      fullDescription:
        "Platform that connects private chefs with clients, allowing booking of unique and personalized gastronomic experiences at home or special events.",
      image: "/placeholder.jpg",
      technologies: ["React Native", "Firebase", "Stripe", "Google Maps"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Chef marketplace",
        "Booking system",
        "Secure integrated payments",
        "Geolocation",
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
      description: "Interactive personal portfolio with fluid navigation and glass effects",
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
}

export function ProjectsSection({ language }: ProjectsSectionProps) {
  const router = useRouter()
  const t = translations[language]
  const projects = projectsData[language]

  const handleProjectClick = (projectId: string) => {
    localStorage.setItem("language", language)
    router.push(`/project/${projectId}`)
  }

  return (
    <section id="projects" className="py-16 min-h-screen flex items-center relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-superlobster text-3xl md:text-4xl font-bold text-primary mb-4">{t.title}</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto font-barlow">{t.subtitle}</p>
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
                <h3 className="font-superlobster text-lg font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-muted-foreground font-barlow mb-3 line-clamp-2 text-sm">{project.description}</p>
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
  )
}
