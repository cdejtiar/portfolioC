"use client"
import { Home, User, Briefcase, Mail, Download, Globe, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

interface SidebarNavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
  language: "es" | "en"
  onLanguageChange: (language: "es" | "en") => void
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
}: SidebarNavigationProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const t = translations[language]

  const navItems = [
    { id: "home", icon: Home, label: t.home },
    { id: "about", icon: User, label: t.about },
    { id: "projects", icon: Briefcase, label: t.projects },
    { id: "contact", icon: Mail, label: t.contact },
  ]

  const scrollToSection = (sectionId: string) => {
    if (!mounted) return
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
    if (!mounted) return
    // Placeholder for CV download
    const link = document.createElement("a")
    link.href = "/cv.pdf" // You'll need to add your CV file
    link.download = "CV.pdf"
    link.click()
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      {/* Desktop Sidebar - 1165px+ */}
      <nav
        className={`desktop-nav fixed z-50 transition-all duration-300 left-6 ${
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
        {/* Logo/Avatar */}
        <div className="text-center mb-4 md:mb-6">
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full overflow-hidden mx-auto border-2 border-primary/20">
            <img 
              src="/profileCami.jpg" 
              alt="Logo" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Navigation Items */}
        <div className={`${isHovered ? "flex-1 flex flex-col justify-center" : ""} space-y-2 md:space-y-3`}>
          {navItems.map((item, index) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              size="sm"
              onClick={() => scrollToSection(item.id)}
              className={`${
                isHovered 
                  ? "w-full justify-start px-3 md:px-4 py-2 md:py-3" 
                  : "w-8 h-8 md:w-10 md:h-10 p-0 justify-center"
              } gap-2 md:gap-3 transition-all duration-300 ${
                activeSection === item.id ? "bg-primary text-primary-foreground shadow-lg" : "hover:bg-secondary/20"
              } ${item.id === "contact" ? "mb-3 md:mb-4" : ""}`}
            >
              <item.icon className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
              {isHovered && <span className="text-xs md:text-sm font-medium whitespace-nowrap">{item.label}</span>}
            </Button>
          ))}
        </div>

        {/* Divider - only show when hovered */}
        {isHovered && <div className="border-t border-border my-3 md:my-4" />}

        {/* Download CV */}
        <Button
          onClick={downloadCV}
          variant="outline"
          size="sm"
          className={`${
            isHovered 
              ? "w-full justify-start px-3 md:px-4 py-2 md:py-3" 
              : "w-8 h-8 md:w-10 md:h-10 p-0 justify-center"
          } gap-2 md:gap-3 hover:bg-secondary/20 bg-transparent transition-all duration-300`}
        >
          <Download className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
          {isHovered && <span className="text-xs md:text-sm font-medium whitespace-nowrap">{t.downloadCV}</span>}
        </Button>

        {/* Controls - only show when hovered */}
        {isHovered && (
          <div className="space-y-2 mt-3 md:mt-4">
            {/* Language Toggle */}
            <Button
              onClick={() => onLanguageChange(language === "es" ? "en" : "es")}
              variant="ghost"
              size="sm"
              className="w-full justify-start gap-2 md:gap-3 hover:bg-secondary/20 px-3 md:px-4 py-2 md:py-3"
            >
              <Globe className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-xs md:text-sm font-medium">{language.toUpperCase()}</span>
            </Button>

            {/* Theme Toggle */}
            <Button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              variant="ghost"
              size="sm"
              className="w-full justify-start gap-2 md:gap-3 hover:bg-secondary/20 px-3 md:px-4 py-2 md:py-3"
            >
              {theme === "light" ? <Moon className="w-3 h-3 md:w-4 md:h-4" /> : <Sun className="w-3 h-3 md:w-4 md:h-4" />}
              <span className="text-xs md:text-sm font-medium">{theme === "light" ? "Oscuro" : "Claro"}</span>
            </Button>
          </div>
        )}

        {/* Copyright - only show when hovered */}
        {isHovered && <div className="text-xs text-muted-foreground text-center mt-auto pt-4">© 2025</div>}
        </div>
      </nav>

      {/* Mobile Bottom Navigation - under 1165px */}
      <nav className="mobile-nav fixed bottom-0 left-0 right-0 z-50 pb-safe">
        <div className="glass-effect mx-1 sm:mx-4 mb-2 sm:mb-4 rounded-2xl p-1.5 sm:p-3">
          <div className="flex items-center justify-between">
            {/* Left side - Main navigation icons */}
            <div className="flex items-center justify-center gap-1 sm:gap-3">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className={`w-9 h-9 sm:w-12 sm:h-12 p-0 rounded-lg sm:rounded-xl transition-all duration-300 ${
                    activeSection === item.id 
                      ? "bg-primary text-primary-foreground shadow-lg scale-110" 
                      : "hover:bg-secondary/20 hover:scale-105"
                  }`}
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
              ))}
              
              {/* Separator */}
              <div className="w-px h-6 sm:h-8 bg-muted-foreground/30 mx-0.5 sm:mx-1"></div>
              
              {/* Language Toggle */}
              <Button
                onClick={() => onLanguageChange(language === "es" ? "en" : "es")}
                variant="ghost"
                size="sm"
                className="w-9 h-9 sm:w-12 sm:h-12 p-0 rounded-lg sm:rounded-xl hover:bg-secondary/20 hover:scale-105 transition-all duration-300"
                title={language === "es" ? "Cambiar idioma" : "Change language"}
              >
                <Globe className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
              </Button>
              
              {/* Theme Toggle */}
              <Button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                variant="ghost"
                size="sm"
                className="w-9 h-9 sm:w-12 sm:h-12 p-0 rounded-lg sm:rounded-xl hover:bg-secondary/20 hover:scale-105 transition-all duration-300"
                title={theme === "light" ? 
                  (language === "es" ? "Modo oscuro" : "Dark mode") : 
                  (language === "es" ? "Modo claro" : "Light mode")
                }
              >
                {theme === "light" ? 
                  <Moon className="w-4.5 h-4.5 sm:w-5 sm:h-5" /> : 
                  <Sun className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                }
              </Button>
            </div>
            
            {/* Right side - Download CV button with text */}
            <Button
              onClick={downloadCV}
              variant="secondary"
              size="sm"
              className="px-2 sm:px-3 py-1.5 sm:py-2 h-auto rounded-lg sm:rounded-xl hover:bg-secondary/90 hover:scale-105 transition-all duration-300 text-xs sm:text-sm font-medium"
            >
              <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-1.5" />
              {language === "es" ? "Descargar CV" : "Download CV"}
            </Button>
          </div>
        </div>
      </nav>
    </>
  )
}
