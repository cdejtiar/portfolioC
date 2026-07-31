"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { useState, useEffect } from "react"
import { projectsByLocale, type Project } from "@/lib/projects"



const translations = {
  es: {
    backToProjects: "Volver a Proyectos",
    viewLive: "Ver en Vivo",
    viewPresentation: "Ver Presentación",
    viewProjectCharter: "Ver Acta de Proyecto",
    viewResearch: "Ver Investigación",
    viewCode: "Ver Código",
    keyFeatures: "Características Clave",
    technologies: "Tecnologías Utilizadas",
    projectNotFound: "Proyecto no encontrado",
  },
  en: {
    backToProjects: "Back to Projects",
    viewLive: "View Live",
    viewPresentation: "View Presentation",
    viewProjectCharter: "View Project Charter",
    viewResearch: "View Research",
    viewCode: "View Code",
    keyFeatures: "Key Features",
    technologies: "Technologies Used",
    projectNotFound: "Project not found",
  },
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
    const projects = projectsByLocale[savedLanguage]
    const foundProject = projects.find((p) => p.id === projectId)
    setProject(foundProject || null)
  }, [params.id])

  // Normalize image paths coming from project data.
  // Some entries reference files with a relative path into the `public` folder
  // (for example: "../../../public/images/..."), so map those to the
  // correct absolute public path ("/images/...") before rendering.
  const resolveImage = (img?: string) => {
    // Robustly normalize image paths coming from project data so they
    // always reference the `public` folder via an absolute path like
    // `/images/...`. This prevents broken relative paths (e.g. ".../../../public/images/..")
    // that can work sometimes but break on back-navigation or different base paths.
    if (!img) return "/placeholder.svg"

    let s = img.replace(/\\/g, "/")

    // If the string contains '/public/', drop everything up to and including '/public'
    if (s.includes("/public/")) {
      s = s.substring(s.indexOf("/public/") + "/public/".length)
    }

    // If it contains 'images/' anywhere, use that as the root under public
    const imagesIdx = s.indexOf("images/")
    if (imagesIdx !== -1) {
      s = "/" + s.substring(imagesIdx)
      return s
    }

    // Remove leading dot-segments like '../../' or './' and ensure leading '/'
    s = s.replace(/^(?:\.+\/)+/, "")
    if (!s.startsWith("/")) s = "/" + s

    return s
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-superlobster text-primary mb-4">{t.projectNotFound}</h1>
          <Button onClick={() => router.push("/#projects")} variant="outline">
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
        <Button onClick={() => router.push("/#projects")} variant="ghost" className="mb-8 hover:bg-secondary/20">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.backToProjects}
        </Button>

        {/* Project Header */}
        <div className="glass-card rounded-2xl p-8 mb-8">
          <h1 className="font-superlobster text-4xl md:text-5xl font-bold text-primary mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground font-barlow mb-6">{project.description}</p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <Button
                onClick={() => window.open(project.liveUrl, "_blank")}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {t.viewLive}
              </Button>
            )}
            {project.slidesUrl && (
              <Button
                onClick={() => window.open(project.slidesUrl, "_blank")}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {t.viewPresentation}
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
            {project.docsUrl && (
              <Button
                onClick={() => window.open(project.docsUrl, "_blank")}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {t.viewProjectCharter}
              </Button>
            )}
            {project.docsUrl2 && (
              <Button
                onClick={() => window.open(project.docsUrl2, "_blank")}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {t.viewResearch}
              </Button>
            )}
          </div>
        </div>

        {/* Project Image */}
        <div className="glass-card rounded-2xl p-4 mb-8">
          <img
            src={resolveImage(project.image)}
            alt={project.title}
            // Use object-contain on small screens to avoid awkward crops and
            // switch to object-cover on md+ for a tighter layout. Also keep
            // height auto on mobile and limit max-height so images don't grow
            // too large.
            className={
              (["NFTBunnies", "GameReads", "intoximate"].includes(project.title)
                ? "w-full object-contain h-auto max-h-[60vh] rounded-lg"
                : "w-full object-contain md:object-cover h-auto md:h-96 max-h-[60vh] rounded-lg")
            }
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
