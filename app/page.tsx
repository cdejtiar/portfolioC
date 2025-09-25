"use client"

import { useState, useEffect } from "react"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { CustomCursor } from "@/components/custom-cursor"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [language, setLanguage] = useState<"es" | "en">("es")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"]
      const scrollPosition = window.scrollY + 200 // Increased offset for better detection

      // Find the section that's currently in view
      let currentSection = "home"

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = window.scrollY + rect.top

          if (scrollPosition >= elementTop) {
            currentSection = section
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection)
        console.log("[v0] Active section changed to:", currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  return (
    <main className="relative z-10 lg:pb-0">
      <CustomCursor />

      {/* Sidebar Navigation */}
      <SidebarNavigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        language={language}
        onLanguageChange={setLanguage}
      />

      {/* Hero Section - Full viewport */}
      <HeroSection language={language} />

      {/* About Section - Full width like Hero and Contact */}
      <section id="about" className="py-16 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-superlobster text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
              {language === "es" ? "Sobre Mí" : "About Me"}
            </h2>

            <div className="glass-card p-8 rounded-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  {/* Profile Photo Section */}
                  <div className="lg:col-span-1 flex flex-col items-center justify-center">
                    <div className="w-48 h-48 mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/20 backdrop-blur-sm shadow-lg shadow-primary/5 ring-1 ring-white/10">
                      <img src="/profileCami.jpg" alt="Camila Dejtiar" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-superlobster text-xl font-bold text-primary mb-2 text-center">
                      Camila Dejtiar
                    </h3>
                    <p className="font-barlow text-muted-foreground text-sm text-center">
                      {language === "es" ? "Diseñadora UX/UI" : "UX/UI Designer"}
                    </p>
                  </div>

                  {/* Content Section - Right Side */}
                  <div className="lg:col-span-3 space-y-8">
                    {/* About Description */}
                    <div>
                      <p className="text-base font-barlow text-muted-foreground leading-relaxed mb-4">
                        {language === "es"
                          ? "Soy una diseñadora UX/UI curiosa, apasionada por entender a las personas y por convertir problemas en soluciones creativas. Me motiva pensar en cómo la tecnología puede acompañar y potenciar, sin complicar. Disfruto crear interfaces atractivas y centradas en el usuario, porque creo que el diseño tiene que ser tan lindo como funcional."
                          : "I'm a curious UX/UI designer, passionate about understanding people and turning problems into creative solutions. I'm motivated by thinking about how technology can support and empower, without complicating things. I enjoy creating attractive, user-centered interfaces because I believe design should be as beautiful as it is functional."}
                      </p>
                      <p className="text-base font-barlow text-muted-foreground leading-relaxed mb-8">
                        {language === "es"
                          ? "Cada proyecto es una oportunidad de aprender, mejorar y dejar algo significativo."
                          : "Every project is an opportunity to learn, improve, and leave something meaningful."}
                      </p>
                    </div>

                    {/* Skills Section */}
                    <div>
                      <h3 className="font-superlobster text-xl font-bold text-primary mb-6">
                        {language === "es" ? "Habilidades" : "Skills"}
                      </h3>

                      <div className="space-y-6">
                        {/* Design Skills */}
                        <div>
                          <h4 className="font-coolvetica text-base font-semibold text-foreground mb-3">
                            {language === "es" ? "Diseño" : "Design"}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {["UX/UI Design", "Figma", "Adobe Creative Suite", "Wireframing", "Prototyping", "Design Systems", "Design Thinking"].map(
                              (skill) => (
                                <span
                                  key={skill}
                                  className="px-3 py-2 bg-primary/10 text-primary text-sm rounded-lg font-barlow border border-primary/20 hover:bg-primary/15 transition-colors"
                                >
                                  {skill}
                                </span>
                              ),
                            )}
                          </div>
                        </div>

                        {/* Development Skills */}
                        <div>
                          <h4 className="font-coolvetica text-base font-semibold text-foreground mb-3">
                            {language === "es" ? "Desarrollo" : "Development"}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {["HTML", "CSS", "Javascript", "C#", ".NET", "React", "Next.js"].map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-2 bg-secondary/15 text-secondary-foreground text-sm rounded-lg font-barlow border border-secondary/30 hover:bg-secondary/25 transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Tools */}
                        <div>
                          <h4 className="font-coolvetica text-base font-semibold text-foreground mb-3">
                            {language === "es" ? "Herramientas" : "Tools"}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {["Trello", "Miro", "Google Workspace", "GitHub", "Vercel", "Notion", "Slack", "Jira", "Agile"].map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-2 bg-accent/15 text-accent-foreground text-sm rounded-lg font-barlow border border-accent/30 hover:bg-accent/25 transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Soft Skills */}
                        <div>
                          <h4 className="font-coolvetica text-base font-semibold text-foreground mb-3">
                            {language === "es" ? "Habilidades Blandas" : "Soft Skills"}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {(language === "es" 
                              ? ["Comunicación efectiva", "Trabajo en equipo", "Resolución de problemas", "Pensamiento crítico", "Organización", "Empatía", "Creatividad", "Gestión del tiempo"]
                              : ["Effective Communication", "Teamwork", "Problem Solving", "Critical Thinking", "Organization", "Empathy", "Creativity", "Time Management"]
                            ).map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-2 bg-violet-500/15 text-violet-700 dark:text-violet-300 text-sm rounded-lg font-barlow border border-violet-500/30 hover:bg-violet-500/25 transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Full width like Hero and Contact */}
        <ProjectsSection language={language} />

        {/* Contact Section - Full width like Hero */}
        <ContactSection language={language} />
        
        {/* Minimal space for mobile nav with violet background */}
        <div className="h-24 lg:h-8 bg-violet-200 dark:bg-violet-950">
        </div>
      </main>
  )
}
