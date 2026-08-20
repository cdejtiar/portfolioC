"use client"
import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

/** Curva de easing única para toda la capa de movimiento del case study. */
export const csEase = [0.16, 1, 0.3, 1] as const

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: csEase } },
}

export const stagger = (delayChildren = 0, staggerChildren = 0.08) => ({
  hidden: {},
  show: { transition: { delayChildren, staggerChildren } },
})

/** Variantes neutralizadas cuando el usuario pide menos movimiento. */
export const staticVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3 } },
}

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function SectionWrapper({
  children,
  className = "bg-cs-surface",
  delay = 0,
}: SectionWrapperProps) {
  const reduce = useReducedMotion()

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={reduce ? staticVariants : fadeUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

/** Item hijo para grillas y listas: hereda el stagger del contenedor. */
export function RevealItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div variants={reduce ? staticVariants : fadeUp} className={className}>
      {children}
    </motion.div>
  )
}

export function SectionContainer({
  children,
  className = "container mx-auto max-w-6xl px-6 py-24 md:py-28",
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={className}>{children}</div>
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
      {children}
    </p>
  )
}

export function SectionTitle({
  children,
  className = "mt-4 font-superlobster text-4xl text-foreground sm:text-5xl",
}: {
  children: ReactNode
  className?: string
}) {
  return <h2 className={className}>{children}</h2>
}

/**
 * Renderiza texto plano soportando **negrita** y saltos de línea (\n).
 * Punto único de verdad para el parseo de formato en todo el case study.
 */
export function FormattedText({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  return (
    <div className={className}>
      {text.split("\n").map((line, lineIndex) => (
        <p key={lineIndex} className="mb-3 last:mb-0">
          {line.split(/(\*\*.*?\*\*|→)/g).map((part, i) => {
            if (part === "→") {
              return (
                <span
                  key={i}
                  className="mt-3 font-superlobster text-2xl text-foreground md:text-3xl"
                >
                  →
                </span>
              )
            }
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={i} className="font-semibold text-foreground">
                  {part.slice(2, -2)}
                </strong>
              )
            }
            return <span key={i}>{part}</span>
          })}
        </p>
      ))}
    </div>
  )
}

export function SectionDescription({
  children,
  className = "mt-5 text-sm leading-7 text-muted-foreground",
}: {
  children: ReactNode
  className?: string
}) {
  // Si viene un string (el caso normal, texto de contenido), se parsea con FormattedText.
  // Si viene JSX ya armado desde algún bloque puntual, se respeta tal cual.
  if (typeof children === "string") {
    return <FormattedText text={children} className={className} />
  }
  return <p className={className}>{children}</p>
}

export function InfoCard({
  label,
  value,
  delay = 0,
}: {
  label: string
  value: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="min-h-[150px] rounded-xl border border-cs-hairline bg-cs-card p-6"
    >
      <p className="text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
        {label}
      </p>
      <FormattedText
        text={value}
        className="mt-4 text-xs leading-6 text-foreground/90"
      />
    </motion.div>
  )
}

export function CardGrid({
  children,
  columns = "md:grid-cols-3",
}: {
  children: ReactNode
  columns?: string
}) {
  return <div className={`grid gap-4 ${columns}`}>{children}</div>
}