"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { useLanguage } from "@/components/language-provider"
import { projectsByLocale } from "@/lib/projects"

const translations = {
  es: {
    title: "Todos mis proyectos",
    subtitle:
      "Conoce el catálogo completo de trabajos donde combino investigación, estrategia, diseño y desarrollo.",
    filterLabel: "Filtrar por rol",
    allRole: "Todos",
    viewCaseStudy: "Ver Case Study",
    backHome: "Volver al inicio",
  },
  en: {
    title: "All projects",
    subtitle:
      "Explore the full set of work where I combine research, strategy, design, and frontend delivery.",
    filterLabel: "Filter by role",
    allRole: "All",
    viewCaseStudy: "View Case Study",
    backHome: "Back to home",
  },
}

export default function ProjectsPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const projects = projectsByLocale[language]
  const allRoles = useMemo(
    () => [
      t.allRole,
      ...Array.from(new Set(projects.flatMap((project) => project.roles))),
    ],
    [projects, t.allRole],
  )
  const [selectedRole, setSelectedRole] = useState<string>(t.allRole)

  // Role names are localized, so reset the filter whenever the language changes.
  useEffect(() => {
    setSelectedRole(t.allRole)
  }, [t.allRole])
  const filteredProjects = useMemo(
    () =>
      selectedRole === t.allRole
        ? projects
        : projects.filter((project) => project.roles.includes(selectedRole)),
    [projects, selectedRole, t.allRole],
  )

  return (
    <main className="relative z-10 py-24 lg:pb-16">
      <SidebarNavigation />

      <div className="container mx-auto px-6">
        <div className="mb-14 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
            {t.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.32em] text-muted-foreground mb-4">{t.filterLabel}</p>
          <div className="flex flex-wrap gap-3">
            {allRoles.map((role) => {
              const isActive = selectedRole === role
              return (
                <Button
                  key={role}
                  variant={isActive ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => setSelectedRole(role)}
                  className="rounded-full px-4 py-3 text-xs font-semibold"
                >
                  {role}
                </Button>
              )
            })}
          </div>
        </div>

        <div className="grid gap-8 xl:grid-cols-3 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <article key={project.id} className="glass-card rounded-[2rem] border border-border p-6 shadow-xl shadow-black/5 transition hover:-translate-y-1">
              <div className="overflow-hidden rounded-[1.5rem] bg-card/80">
                <div className="flex aspect-[4/3] w-full items-center justify-center p-3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
              <div className="mt-6">
                <div className="flex flex-wrap gap-2">
                  {project.roles.map((role) => (
                    <span key={`${project.id}-${role}`} className="rounded-full bg-secondary/20 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-secondary-foreground">
                      {role}
                    </span>
                  ))}
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-foreground">{project.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={`${project.id}-${tech}`} className="rounded-full bg-background/90 px-3 py-2 text-[11px] text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={`/project/${project.id}`} className="inline-flex items-center rounded-full border border-border bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
                    {t.viewCaseStudy}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-muted-foreground">{filteredProjects.length} {language === "es" ? "proyectos" : "projects"}</p>
          </div>
          <Link href="/" className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-sm shadow-black/5 transition hover:bg-secondary/90">
            {t.backHome}
          </Link>
        </div>
      </div>
    </main>
  )
}
