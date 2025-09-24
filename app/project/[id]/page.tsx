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

// Sample projects data - same as in projects-section
const projectsData: { [key: string]: Project[] } = {
  es: [
    {
      id: "1",
      title: "EcoLiving App",
      description: "Aplicación móvil para promover prácticas de vida sostenible",
      fullDescription:
        "EcoLiving es una aplicación móvil diseñada para promover prácticas de vida sostenible. Ofrece funciones como seguimiento de huella de carbono, sugerencias ecológicas y conexión con iniciativas locales de sostenibilidad. La aplicación utiliza algoritmos de machine learning para personalizar las recomendaciones según los hábitos del usuario y su ubicación geográfica.",
      image: "/mobile-app-eco-living-sustainable.jpg",
      technologies: ["React Native", "TypeScript", "Node.js", "MongoDB", "Machine Learning"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Seguimiento de huella de carbono en tiempo real",
        "Sugerencias ecológicas personalizadas con IA",
        "Directorio de iniciativas locales de sostenibilidad",
        "Foro de participación comunitaria",
        "Gamificación con sistema de puntos y logros",
        "Integración con dispositivos IoT para monitoreo automático",
      ],
    },
    {
      id: "2",
      title: "Portfolio Interactivo",
      description: "Sitio web portfolio con animaciones y efectos modernos",
      fullDescription:
        "Un portfolio personal moderno con efectos de vidrio líquido, animaciones suaves y diseño responsivo. Construido con las últimas tecnologías web para ofrecer una experiencia de usuario excepcional. Incluye navegación fluida, transiciones elegantes y optimización para todos los dispositivos.",
      image: "/modern-portfolio-website.png",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Efectos de vidrio líquido (glassmorphism)",
        "Animaciones fluidas con Framer Motion",
        "Diseño completamente responsivo",
        "Modo oscuro/claro con transiciones suaves",
        "Navegación lateral colapsable",
        "Optimización SEO y performance",
      ],
    },
    {
      id: "3",
      title: "Dashboard Analytics",
      description: "Panel de control para análisis de datos empresariales",
      fullDescription:
        "Un dashboard completo para análisis de datos empresariales con gráficos interactivos, filtros avanzados y reportes en tiempo real. Diseñado para ayudar a las empresas a tomar decisiones basadas en datos con visualizaciones claras y métricas clave.",
      image: "/analytics-dashboard-visualization.png",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Gráficos interactivos con D3.js",
        "Filtros avanzados y búsqueda en tiempo real",
        "Reportes automatizados y programables",
        "Exportación de datos en múltiples formatos",
        "Sistema de alertas y notificaciones",
        "API REST para integración con otros sistemas",
      ],
    },
  ],
  en: [
    {
      id: "1",
      title: "EcoLiving App",
      description: "Mobile application to promote sustainable living practices",
      fullDescription:
        "EcoLiving is a mobile application designed to promote sustainable living practices. It offers features such as carbon footprint tracking, eco-friendly suggestions, and connecting users with local sustainability initiatives. The app uses machine learning algorithms to personalize recommendations based on user habits and geographic location.",
      image: "/mobile-app-eco-living-sustainable.jpg",
      technologies: ["React Native", "TypeScript", "Node.js", "MongoDB", "Machine Learning"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Real-time carbon footprint tracking",
        "AI-powered personalized eco-friendly suggestions",
        "Local sustainability initiatives directory",
        "Community engagement forum",
        "Gamification with points and achievements system",
        "IoT device integration for automatic monitoring",
      ],
    },
    {
      id: "2",
      title: "Interactive Portfolio",
      description: "Portfolio website with modern animations and effects",
      fullDescription:
        "A modern personal portfolio with liquid glass effects, smooth animations, and responsive design. Built with the latest web technologies to deliver an exceptional user experience. Features fluid navigation, elegant transitions, and optimization for all devices.",
      image: "/modern-portfolio-website.png",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Liquid glass effects (glassmorphism)",
        "Smooth animations with Framer Motion",
        "Fully responsive design",
        "Dark/light mode with smooth transitions",
        "Collapsible sidebar navigation",
        "SEO and performance optimization",
      ],
    },
    {
      id: "3",
      title: "Analytics Dashboard",
      description: "Control panel for business data analysis",
      fullDescription:
        "A comprehensive dashboard for business data analysis with interactive charts, advanced filters, and real-time reporting. Designed to help businesses make data-driven decisions with clear visualizations and key metrics.",
      image: "/analytics-dashboard-visualization.png",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Interactive charts with D3.js",
        "Advanced filters and real-time search",
        "Automated and schedulable reports",
        "Data export in multiple formats",
        "Alert and notification system",
        "REST API for integration with other systems",
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
