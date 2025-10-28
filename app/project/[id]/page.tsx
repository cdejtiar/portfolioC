"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { useState, useEffect } from "react"

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

const translations = {
  es: {
    backToProjects: "Volver a Proyectos",
    viewLive: "Ver en Vivo",
    viewCode: "Ver Código",
    keyFeatures: "Características Clave",
    technologies: "Tecnologías Utilizadas",
    projectNotFound: "Proyecto no encontrado",
  },
  en: {
    backToProjects: "Back to Projects",
    viewLive: "View Live",
    viewCode: "View Code",
    keyFeatures: "Key Features",
    technologies: "Technologies Used",
    projectNotFound: "Project not found",
  },
}

// Projects data - Portfolio showcase
const projectsData: { [key: string]: Project[] } = {
  es: [
    {
      id: "1",
      title: "eXerparK",
      description: "Plataforma digital para motivar la actividad física y conectar personas a través del movimiento.",
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
        "Enfoque en la motivación y la comunidad"
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

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const [language, setLanguage] = useState<"es" | "en">("es")
  const [project, setProject] = useState<Project | null>(null)

  const t = translations[language]

  useEffect(() => {
    // Get language from localStorage or default to 'es'
    const savedLanguage = (localStorage.getItem("language") as "es" | "en") || "es"
    setLanguage(savedLanguage)

    // Find the project
    const projectId = params.id as string
    const projects = projectsData[savedLanguage]
    const foundProject = projects.find((p) => p.id === projectId)
    setProject(foundProject || null)
  }, [params.id])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-superlobster text-primary mb-4">{t.projectNotFound}</h1>
          <Button onClick={() => router.push("/")} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.backToProjects}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back Button */}
        <Button onClick={() => router.push("/")} variant="ghost" className="mb-8 hover:bg-secondary/20">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.backToProjects}
        </Button>

        {/* Project Header */}
        <div className="glass-card rounded-2xl p-8 mb-8">
          <h1 className="font-superlobster text-4xl md:text-5xl font-bold text-primary mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground font-barlow mb-6">{project.description}</p>

          {/* Action Buttons */}
          <div className="flex gap-4">
            {project.liveUrl && (
              <Button
                onClick={() => window.open(project.liveUrl, "_blank")}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {t.viewLive}
              </Button>
            )}
            {project.githubUrl && (
              <Button
                onClick={() => window.open(project.githubUrl, "_blank")}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="w-4 h-4 mr-2" />
                {t.viewCode}
              </Button>
            )}
          </div>
        </div>

        {/* Project Image */}
        <div className="glass-card rounded-2xl p-4 mb-8">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* Project Description */}
        <div className="glass-card rounded-2xl p-8 mb-8">
          <p className="text-muted-foreground font-barlow leading-relaxed text-lg">{project.fullDescription}</p>
        </div>

        {/* Key Features */}
        <div className="glass-card rounded-2xl p-8 mb-8">
          <h2 className="font-superlobster text-2xl text-primary mb-6">{t.keyFeatures}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <span className="font-barlow">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="glass-card rounded-2xl p-8">
          <h2 className="font-superlobster text-2xl text-primary mb-6">{t.technologies}</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full font-barlow border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
