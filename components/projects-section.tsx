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

// Sample projects data - replace with your actual projects
const projectsData: { [key: string]: Project[] } = {
  es: [
    {
      id: "1",
      title: "EcoLiving App",
      description: "Aplicación móvil para promover prácticas de vida sostenible",
      fullDescription:
        "EcoLiving es una aplicación móvil diseñada para promover prácticas de vida sostenible. Ofrece funciones como seguimiento de huella de carbono, sugerencias ecológicas y conexión con iniciativas locales de sostenibilidad.",
      image: "/mobile-app-eco-living-sustainable.jpg",
      technologies: ["React Native", "TypeScript", "Node.js", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Seguimiento de huella de carbono",
        "Sugerencias ecológicas personalizadas",
        "Directorio de iniciativas locales",
        "Foro de participación comunitaria",
      ],
    },
    {
      id: "2",
      title: "Portfolio Interactivo",
      description: "Sitio web portfolio con animaciones y efectos modernos",
      fullDescription:
        "Un portfolio personal moderno con efectos de vidrio líquido, animaciones suaves y diseño responsivo. Construido con las últimas tecnologías web.",
      image: "/modern-portfolio-website.png",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: ["Efectos de vidrio líquido", "Animaciones fluidas", "Diseño responsivo", "Modo oscuro/claro"],
    },
    {
      id: "3",
      title: "Dashboard Analytics",
      description: "Panel de control para análisis de datos empresariales",
      fullDescription:
        "Un dashboard completo para análisis de datos empresariales con gráficos interactivos, filtros avanzados y reportes en tiempo real.",
      image: "/analytics-dashboard-visualization.png",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: ["Gráficos interactivos", "Filtros avanzados", "Reportes en tiempo real", "Exportación de datos"],
    },
  ],
  en: [
    {
      id: "1",
      title: "EcoLiving App",
      description: "Mobile application to promote sustainable living practices",
      fullDescription:
        "EcoLiving is a mobile application designed to promote sustainable living practices. It offers features such as carbon footprint tracking, eco-friendly suggestions, and connecting users with local sustainability initiatives.",
      image: "/mobile-app-eco-living-sustainable.jpg",
      technologies: ["React Native", "TypeScript", "Node.js", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Carbon footprint tracker",
        "Personalized eco-friendly suggestions",
        "Local initiatives directory",
        "Community engagement forum",
      ],
    },
    {
      id: "2",
      title: "Interactive Portfolio",
      description: "Portfolio website with modern animations and effects",
      fullDescription:
        "A modern personal portfolio with liquid glass effects, smooth animations, and responsive design. Built with the latest web technologies.",
      image: "/modern-portfolio-website.png",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: ["Liquid glass effects", "Smooth animations", "Responsive design", "Dark/light mode"],
    },
    {
      id: "3",
      title: "Analytics Dashboard",
      description: "Control panel for business data analysis",
      fullDescription:
        "A comprehensive dashboard for business data analysis with interactive charts, advanced filters, and real-time reporting.",
      image: "/analytics-dashboard-visualization.png",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: ["Interactive charts", "Advanced filters", "Real-time reports", "Data export"],
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
    <section id="projects" className="py-16 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-superlobster text-3xl md:text-4xl font-bold text-primary mb-4">{t.title}</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto font-barlow">{t.subtitle}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
    </section>
  )
}
