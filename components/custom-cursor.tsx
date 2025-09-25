"use client"

import { useEffect, useState, useRef, useCallback } from "react"

interface Particle {
  id: number
  x: number
  y: number
  opacity: number
  scale: number
  color: string
  velocity: { x: number; y: number }
  life: number
}

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isOverImage, setIsOverImage] = useState(false)
  const [isOverContact, setIsOverContact] = useState(false)
  const [mounted, setMounted] = useState(false)

  const particlesRef = useRef<Particle[]>([])
  const particleIdRef = useRef(0)
  const lastMouseMoveRef = useRef(0)
  const animationFrameRef = useRef<number>()

  const throttledMouseMove = useCallback((e: MouseEvent) => {
    if (!mounted) return
    
    const now = Date.now()
    if (now - lastMouseMoveRef.current < 16) return // ~60fps throttling

    lastMouseMoveRef.current = now
    setMousePosition({ x: e.clientX, y: e.clientY })
    setIsVisible(true)

    // Check if cursor is over contact section
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      const rect = contactSection.getBoundingClientRect()
      const isInContact = e.clientY >= rect.top && e.clientY <= rect.bottom
      setIsOverContact(isInContact)
    }

    if (Math.random() > 0.95) {
      // Much less frequent particle creation
      const colors = ["#402940", "#b4d4ee", "#ebe8d8"]
      const newParticle: Particle = {
        id: particleIdRef.current++,
        x: e.clientX + (Math.random() - 0.5) * 10,
        y: e.clientY + (Math.random() - 0.5) * 10,
        opacity: 0.8,
        scale: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        velocity: {
          x: (Math.random() - 0.5) * 1,
          y: Math.random() * -1.5 - 0.5,
        },
        life: 1,
      }

      particlesRef.current.push(newParticle)
      if (particlesRef.current.length > 15) {
        particlesRef.current.shift()
      }
    }
  }, [mounted])

  const handleMouseDown = useCallback(() => {
    setIsClicking(true)

    const colors = ["#402940", "#b4d4ee", "#ebe8d8"]
    for (let i = 0; i < 4; i++) {
      particlesRef.current.push({
        id: particleIdRef.current++,
        x: mousePosition.x,
        y: mousePosition.y,
        opacity: 1,
        scale: Math.random() * 0.8 + 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        velocity: {
          x: (Math.random() - 0.5) * 4,
          y: (Math.random() - 0.5) * 4,
        },
        life: 1,
      })
    }
  }, [mousePosition.x, mousePosition.y])

  const handleMouseUp = useCallback(() => setIsClicking(false), [])

  const animateParticles = useCallback(() => {
    particlesRef.current = particlesRef.current
      .map((particle) => ({
        ...particle,
        x: particle.x + particle.velocity.x,
        y: particle.y + particle.velocity.y,
        opacity: particle.opacity * 0.95,
        scale: particle.scale * 0.98,
        life: particle.life * 0.95,
        velocity: {
          x: particle.velocity.x * 0.97,
          y: particle.velocity.y * 0.97,
        },
      }))
      .filter((particle) => particle.life > 0.1) // Better cleanup threshold

    animationFrameRef.current = requestAnimationFrame(animateParticles)
  }, [])

  // Mount detection useEffect
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const handleMouseEnter = (e: Event) => {
      setIsHovering(true)
    }

    const handleMouseLeave = (e: Event) => {
      setIsHovering(false)
    }

    const handleImageMouseEnter = (e: Event) => {
      const target = e.target as HTMLImageElement
      // Detectar si es la foto de perfil o el logo
      if (target.alt?.includes("Camila Dejtiar") || 
          target.alt?.includes("Logo") || 
          target.src?.includes("profileCami") || 
          target.src?.includes("logo")) {
        setIsOverImage(true)
      }
    }

    const handleImageMouseLeave = (e: Event) => {
      setIsOverImage(false)
    }

    const handleDocumentMouseEnter = () => setIsVisible(true)
    const handleDocumentMouseLeave = () => setIsVisible(false)

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], .cursor-pointer, input, textarea',
      )

      const imageElements = document.querySelectorAll('img')

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter, { passive: true })
        el.addEventListener("mouseleave", handleMouseLeave, { passive: true })
      })

      imageElements.forEach((el) => {
        el.addEventListener("mouseenter", handleImageMouseEnter, { passive: true })
        el.addEventListener("mouseleave", handleImageMouseLeave, { passive: true })
      })
    }

    document.body.classList.add("cursor-none")
    window.addEventListener("mousemove", throttledMouseMove, { passive: true })
    window.addEventListener("mousedown", handleMouseDown, { passive: true })
    window.addEventListener("mouseup", handleMouseUp, { passive: true })
    document.addEventListener("mouseenter", handleDocumentMouseEnter, { passive: true })
    document.addEventListener("mouseleave", handleDocumentMouseLeave, { passive: true })

    addHoverListeners()
    animateParticles()

    return () => {
      document.body.classList.remove("cursor-none")
      window.removeEventListener("mousemove", throttledMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseenter", handleDocumentMouseEnter)
      document.removeEventListener("mouseleave", handleDocumentMouseLeave)

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      particlesRef.current = []
    }
  }, [throttledMouseMove, handleMouseDown, handleMouseUp, animateParticles, mounted])

  // Don't render until mounted
  if (!mounted || !isVisible) return null

  return (
    <>
      <div
        className={`fixed pointer-events-none ${isOverImage || isOverContact ? '' : 'mix-blend-difference'}`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
          zIndex: 2147483647, // Valor máximo de z-index
        }}
      >
        <div
          className={`
            w-6 h-6 rounded-full backdrop-blur-sm
            transition-transform duration-200 ease-out
            ${isOverImage 
              ? 'border-2 border-primary bg-primary/20' 
              : isOverContact
              ? 'border border-black dark:border-2 dark:border-white bg-transparent dark:bg-white/20'
              : 'border border-black dark:border-white'
            }
            ${isHovering ? "scale-150 bg-black/10 dark:bg-white/10" : "scale-100 bg-transparent"}
            ${isClicking ? "scale-75" : ""}
          `}
        />

        <div
          className={`
            absolute top-1/2 left-1/2 w-1 h-1 rounded-full
            transition-all duration-200 ease-out
            ${isOverImage 
              ? 'bg-primary scale-100' 
              : isOverContact
              ? 'bg-black dark:bg-white scale-100'
              : 'bg-black dark:bg-white'
            }
            ${isHovering ? "scale-0" : "scale-100"}
          `}
          style={{ transform: "translate(-50%, -50%)" }}
        />
      </div>

      {particlesRef.current.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            transform: "translate(-50%, -50%)",
            opacity: particle.opacity,
            width: `${particle.scale * 4}px`,
            height: `${particle.scale * 4}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 8px ${particle.color}60`,
            zIndex: 2147483646, // Un nivel debajo del cursor principal
          }}
        />
      ))}

      {isHovering && (
        <div
          className="fixed pointer-events-none rounded-full"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: "translate(-50%, -50%)",
            width: "40px",
            height: "40px",
            background: "radial-gradient(circle, rgba(180,212,238,0.3) 0%, transparent 70%)",
            filter: "blur(10px)",
            zIndex: 2147483645, // Un nivel debajo de las partículas
          }}
        />
      )}
    </>
  )
}
