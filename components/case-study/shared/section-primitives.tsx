"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function SectionWrapper({
  children,
  className = "bg-[#100c19]",
  delay = 0,
}: SectionWrapperProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.section>
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

export function SectionDescription({
  children,
  className = "mt-5 text-sm leading-7 text-muted-foreground",
}: {
  children: ReactNode
  className?: string
}) {
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
      className="min-h-[150px] rounded-xl border border-white/[0.06] bg-white/[0.045] p-6"
    >
      <p className="text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-4 text-xs leading-6 text-foreground/90">{value}</p>
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
