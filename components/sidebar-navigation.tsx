"use client"
import { Home, User, Briefcase, Mail, Download, Globe, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface SidebarNavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
  language: "es" | "en"
  onLanguageChange: (lang: "es" | "en") => void
  theme: "light" | "dark"
  onThemeChange: (theme: "light" | "dark") => void
}

const translations = {
  es: {
    home: "Inicio",
    about: "Sobre mí",
    projects: "Proyectos",
    contact: "Contacto",
    downloadCV: "Descargar CV",
  },
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    downloadCV: "Download CV",
  },
}

export function SidebarNavigation({
  activeSection,
  onSectionChange,
  language,
  onLanguageChange,
  theme,
  onThemeChange,
}: SidebarNavigationProps) {
  const [isHovered, setIsHovered] = useState(false)
  const t = translations[language]

  const navItems = [
    { id: "home", icon: Home, label: t.home },
    { id: "about", icon: User, label: t.about },
    { id: "projects", icon: Briefcase, label: t.projects },
    { id: "contact", icon: Mail, label: t.contact },
  ]

  const scrollToSection = (sectionId: string) => {
    console.log("[v0] Scrolling to section:", sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80 // Account for any fixed headers
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
      onSectionChange(sectionId)
      console.log("[v0] Scroll initiated to:", sectionId)
    } else {
      console.log("[v0] Element not found:", sectionId)
    }
  }

  const downloadCV = () => {
    // Placeholder for CV download
    const link = document.createElement("a")
    link.href = "/cv.pdf" // You'll need to add your CV file
    link.download = "CV.pdf"
    link.click()
  }

  return (
    <nav
      className={`fixed left-6 z-50 transition-all duration-300 ${
        isHovered ? "top-6 bottom-6" : "top-1/2 -translate-y-1/2"
      }`}
    >
      <div
        className={`glass-effect rounded-2xl transition-all duration-300 ${
          isHovered ? "w-52 h-full flex flex-col p-6" : "w-16 p-3"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Logo/Initials */}
        <div className="text-center mb-6">
          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-superlobster text-sm font-bold mx-auto">
            TN
          </div>
        </div>

        {/* Navigation Items */}
        <div className={`${isHovered ? "flex-1 flex flex-col justify-center" : ""} space-y-3`}>
          {navItems.map((item, index) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              size="sm"
              onClick={() => scrollToSection(item.id)}
              className={`${isHovered ? "w-full justify-start px-4 py-3" : "w-10 h-10 p-0 justify-center"} gap-3 transition-all duration-300 ${
                activeSection === item.id ? "bg-primary text-primary-foreground shadow-lg" : "hover:bg-secondary/20"
              } ${item.id === "contact" ? "mb-4" : ""}`}
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
              {isHovered && <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>}
            </Button>
          ))}
        </div>

        {/* Divider - only show when hovered */}
        {isHovered && <div className="border-t border-border my-4" />}

        {/* Download CV */}
        <Button
          onClick={downloadCV}
          variant="outline"
          size="sm"
          className={`${isHovered ? "w-full justify-start px-4 py-3" : "w-10 h-10 p-0 justify-center"} gap-3 hover:bg-secondary/20 bg-transparent transition-all duration-300`}
        >
          <Download className="w-4 h-4 flex-shrink-0" />
          {isHovered && <span className="text-sm font-medium whitespace-nowrap">{t.downloadCV}</span>}
        </Button>

        {/* Controls - only show when hovered */}
        {isHovered && (
          <div className="space-y-2 mt-4">
            {/* Language Toggle */}
            <Button
              onClick={() => onLanguageChange(language === "es" ? "en" : "es")}
              variant="ghost"
              size="sm"
              className="w-full justify-start gap-3 hover:bg-secondary/20 px-4 py-3"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </Button>

            {/* Theme Toggle */}
            <Button
              onClick={() => onThemeChange(theme === "light" ? "dark" : "light")}
              variant="ghost"
              size="sm"
              className="w-full justify-start gap-3 hover:bg-secondary/20 px-4 py-3"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              <span className="text-sm font-medium">{theme === "light" ? "Oscuro" : "Claro"}</span>
            </Button>
          </div>
        )}

        {/* Copyright - only show when hovered */}
        {isHovered && <div className="text-xs text-muted-foreground text-center mt-auto pt-4">© 2025</div>}
      </div>
    </nav>
  )
}
