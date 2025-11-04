"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react"

interface ContactSectionProps {
  language: "es" | "en"
}

const translations = {
  es: {
    title: "Contacto",
    subtitle: "Hablemos sobre tu próximo proyecto",
    name: "Nombre",
    email: "Email",
    message: "Mensaje",
    send: "Enviar Mensaje",
    sending: "Enviando...",
    success: "¡Mensaje enviado con éxito!",
    error: "Error al enviar el mensaje",
    phone: "+54 9 11 6246-4060",
    location: "Buenos Aires, Argentina",
    emailAddress: "cdejtiar14@gmail.com",
  },
  en: {
    title: "Contact",
    subtitle: "Let's talk about your next project",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send Message",
    sending: "Sending...",
    success: "Message sent successfully!",
    error: "Error sending message",
    phone: "+54 9 11 6246-4060",
    location: "Buenos Aires, Argentina",
    emailAddress: "cdejtiar14@gmail.com",
  },
}

export function ContactSection({ language }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const t = translations[language]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      // Build a mailto link so the user's mail client opens prefilled
      const subject = encodeURIComponent(`Contacto desde portfolio: ${formData.name}`)
      const body = encodeURIComponent(
        `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
      )

      const mailto = `mailto:${t.emailAddress}?subject=${subject}&body=${body}`

      // Try to open the user's mail client. Prefer window.open, then fallback to a programmatic anchor click.
      let opened = false
      try {
        const newWindow = window.open(mailto)
        opened = !!newWindow
      } catch (e) {
        // ignore
      }

      if (!opened) {
        // Fallback: create an invisible anchor and click it
        const a = document.createElement("a")
        a.href = mailto
        a.style.display = "none"
        document.body.appendChild(a)
        a.click()
        a.remove()
      }

      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (err) {
      console.error("Contact form error:", err)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 3000)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: t.emailAddress,
      href: `mailto:${t.emailAddress}`,
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: t.phone,
      href: `tel:${t.phone}`,
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: t.location,
      href: "#",
    },
  ]

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/camila-dejtiar-56a38b214/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/cdejtiar", label: "GitHub" },
  ]

  return (
    <section id="contact" className="py-16 min-h-screen flex items-center relative bg-gradient-to-b from-transparent from-5% via-violet-50/10 via-30% to-violet-200 to-100% dark:from-transparent dark:from-5% dark:via-violet-950/5 dark:via-30% dark:to-violet-950 dark:to-100%">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-superlobster text-3xl md:text-4xl font-bold text-primary mb-4">{t.title}</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto font-barlow">{t.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="glass-card border-0">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder={t.name}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder={t.email}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder={t.message}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 py-4 text-base font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
                      {t.sending}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      {t.send}
                    </>
                  )}
                </Button>

                {submitStatus === "success" && <p className="text-green-600 text-center font-barlow">{t.success}</p>}
                {submitStatus === "error" && <p className="text-red-600 text-center font-barlow">{t.error}</p>}
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <info.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-barlow text-xs text-muted-foreground">{info.label}</p>
                    <a href={info.href} className="font-barlow text-sm text-foreground hover:text-primary transition-colors">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-border/50">
              <p className="font-barlow text-muted-foreground mb-3 text-sm">Sígueme en:</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info Card */}
            <Card className="glass-card border-0">
              <CardContent className="p-4">
                <h3 className="font-superlobster text-base text-primary mb-2">
                  {language === "es" ? "¿Tenés un proyecto en mente?" : "Have a project in mind?"}
                </h3>
                <p className="font-barlow text-muted-foreground text-xs leading-relaxed">
                  {language === "es"
                    ? "Estoy siempre abierta a discutir nuevas oportunidades y proyectos interesantes. No dudes en contactarme."
                    : "I'm always open to discussing new opportunities and interesting projects. Don't hesitate to reach out."}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
