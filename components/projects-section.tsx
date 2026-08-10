"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { projectsByLocale } from "@/lib/projects";

interface ProjectsSectionProps {
  language: "es" | "en";
}

const translations = {
  es: {
    subsubtitle: "Proyectos Seleccionados",
    title: "Mis Proyectos",
    subtitle:
      "Una selección de trabajos que muestran mi pasión por el diseño y desarrollo",
    viewProject: "Ver Proyecto",
  },
  en: {
    subsubtitle: "Selected Projects",
    title: "My Projects",
    subtitle:
      "A selection of work that showcases my passion for design and development",
    viewProject: "View Project",
  },
};

export function ProjectsSection({ language }: ProjectsSectionProps) {
  const t = translations[language]
  const projects = projectsByLocale[language]
  const featuredProjects = projects.filter((project) => project.featured && project.id !== "13").slice(0, 3)

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <p className="text-sm uppercase tracking-[0.32em] text-muted-foreground mb-4">{t.subsubtitle}</p>
          <h2 className="font-superlobster text-5xl md:text-6xl font-bold mb-4 gradient-text animate-fade-in-up">{t.title}</h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="glass-card rounded-[2rem] border border-border p-6 shadow-2xl shadow-black/10 transition hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-[1.5rem] bg-card/80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover"
                />
              </div>

              <div className="mt-6">
                <div className="flex flex-wrap gap-2">
                  {project.roles.map((role) => (
                    <span
                      key={`${project.id}-${role}`}
                      className="rounded-full bg-secondary/20 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-secondary-foreground"
                    >
                      {role}
                    </span>
                  ))}
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-foreground">{project.title}</h3>

                <div className="mt-4 space-y-5 text-sm leading-7 text-muted-foreground">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground mb-2">{language === "es" ? "Problema" : "Problem"}</p>
                    <p>{project.problem ?? project.description}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground mb-2">{language === "es" ? "Solución" : "Solution"}</p>
                    <p>{project.solution ?? project.features.slice(0, 2).join(" ")}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={`${project.id}-${tech}`}
                      className="rounded-full bg-background/90 px-3 py-2 text-[11px] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button asChild variant="secondary" size="sm" className="mt-6 rounded-full px-5 py-3">
                  <a href={`/project/${project.id}`}>{t.viewProject}</a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild variant="default" size="lg" className="rounded-2xl bg-primary text-primary-foreground px-8 py-4 shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all duration-300">
            <a href="/projects">{language === "es" ? "Ver más proyectos" : "View more projects"}</a>
          </Button>
        </div>
        </div>
      </section>
    </motion.div>
  )
}
