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

  const particlesRef = useRef<Particle[]>([])
  const particleIdRef = useRef(0)
  const lastMouseMoveRef = useRef(0)
  const animationFrameRef = useRef<number>()

  const throttledMouseMove = useCallback((e: MouseEvent) => {
    const now = Date.now()
    if (now - lastMouseMoveRef.current < 16) return // ~60fps throttling

    lastMouseMoveRef.current = now
    setMousePosition({ x: e.clientX, y: e.clientY })
    setIsVisible(true)

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
  }, [])

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

  useEffect(() => {
    const handleMouseEnter = (e: Event) => {
      setIsHovering(true)
    }

    const handleMouseLeave = (e: Event) => {
      setIsHovering(false)
    }

    const handleDocumentMouseEnter = () => setIsVisible(true)
    const handleDocumentMouseLeave = () => setIsVisible(false)

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], .cursor-pointer, input, textarea',
      )

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter, { passive: true })
        el.addEventListener("mouseleave", handleMouseLeave, { passive: true })
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
  }, [throttledMouseMove, handleMouseDown, handleMouseUp, animateParticles])

  if (!isVisible) return null

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`
            w-6 h-6 rounded-full border border-white
            transition-transform duration-200 ease-out
            ${isHovering ? "scale-150" : "scale-100"}
            ${isClicking ? "scale-75" : ""}
          `}
          style={{
            backdropFilter: "blur(8px)",
            background: isHovering ? "rgba(255,255,255,0.1)" : "transparent",
          }}
        />

        <div
          className={`
            absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full
            transition-all duration-200 ease-out
            ${isHovering ? "scale-0" : "scale-100"}
          `}
          style={{ transform: "translate(-50%, -50%)" }}
        />
      </div>

      {particlesRef.current.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-[9998] rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            transform: "translate(-50%, -50%)",
            opacity: particle.opacity,
            width: `${particle.scale * 4}px`,
            height: `${particle.scale * 4}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 8px ${particle.color}60`,
          }}
        />
      ))}

      {isHovering && (
        <div
          className="fixed pointer-events-none z-[9997] rounded-full"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: "translate(-50%, -50%)",
            width: "40px",
            height: "40px",
            background: "radial-gradient(circle, rgba(180,212,238,0.3) 0%, transparent 70%)",
            filter: "blur(10px)",
          }}
        />
      )}
    </>
  )
}
