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
  const [theme, setTheme] = useState<"light" | "dark">("light")

  // Handle theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

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
    <main className="relative">
      <CustomCursor />

      {/* Sidebar Navigation */}
      <SidebarNavigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onThemeChange={setTheme}
      />

      {/* Hero Section - Full viewport */}
      <HeroSection language={language} />

      {/* Main Content */}
      <div className="ml-0 lg:ml-24">
        <section id="about" className="py-16 min-h-screen flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-superlobster text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
                {language === "es" ? "Sobre Mí" : "About Me"}
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Profile Photo Section */}
                <div className="lg:col-span-1 flex justify-center">
                  <div className="glass-card p-6 rounded-2xl text-center">
                    <div className="w-40 h-40 mx-auto mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <img src="/professional-headshot.png" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-superlobster text-lg font-bold text-primary mb-2">
                      {language === "es" ? "Tu Nombre" : "Your Name"}
                    </h3>
                    <p className="font-barlow text-muted-foreground text-sm">
                      {language === "es" ? "Diseñador Digital" : "Digital Designer"}
                    </p>
                  </div>
                </div>

                {/* About Text */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="glass-card p-6 rounded-2xl">
                    <p className="text-base font-barlow text-muted-foreground leading-relaxed mb-4">
                      {language === "es"
                        ? "Soy un diseñador digital apasionado con más de 5 años de experiencia creando experiencias digitales excepcionales. Mi enfoque se centra en combinar estética moderna con funcionalidad intuitiva, siempre buscando transmitir confianza y proactividad en cada proyecto."
                        : "I'm a passionate digital designer with over 5 years of experience creating exceptional digital experiences. My approach focuses on combining modern aesthetics with intuitive functionality, always seeking to convey confidence and proactivity in every project."}
                    </p>
                    <p className="text-base font-barlow text-muted-foreground leading-relaxed">
                      {language === "es"
                        ? "Me especializo en crear interfaces que no solo se ven increíbles, sino que también ofrecen experiencias de usuario fluidas y memorables."
                        : "I specialize in creating interfaces that not only look incredible, but also offer smooth and memorable user experiences."}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="glass-card p-6 rounded-2xl">
                    <h3 className="font-superlobster text-xl font-bold text-primary mb-4">
                      {language === "es" ? "Habilidades" : "Skills"}
                    </h3>

                    <div className="space-y-4">
                      {/* Design Skills */}
                      <div>
                        <h4 className="font-coolvetica text-base font-semibold text-foreground mb-2">
                          {language === "es" ? "Diseño" : "Design"}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {["UI/UX Design", "Figma", "Adobe Creative Suite", "Prototyping", "Design Systems"].map(
                            (skill) => (
                              <span
                                key={skill}
                                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-barlow border border-primary/20"
                              >
                                {skill}
                              </span>
                            ),
                          )}
                        </div>
                      </div>

                      {/* Development Skills */}
                      <div>
                        <h4 className="font-coolvetica text-base font-semibold text-foreground mb-2">
                          {language === "es" ? "Desarrollo" : "Development"}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-secondary/20 text-secondary-foreground text-xs rounded-full font-barlow border border-secondary/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Tools */}
                      <div>
                        <h4 className="font-coolvetica text-base font-semibold text-foreground mb-2">
                          {language === "es" ? "Herramientas" : "Tools"}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {["Git", "Vercel", "Notion", "Slack", "Linear"].map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-accent/20 text-accent-foreground text-xs rounded-full font-barlow border border-accent/30"
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
        </section>

        {/* Projects Section */}
        <ProjectsSection language={language} />

        {/* Contact Section */}
        <ContactSection language={language} />
      </div>
    </main>
  )
}
