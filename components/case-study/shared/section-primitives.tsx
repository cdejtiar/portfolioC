"use client";

import { useRef, type ReactNode } from "react";
import { CS_EASE, useGsapEffect } from "@/lib/animation/gsap";

/** Curva de easing única para toda la capa de movimiento del case study. */
export const csEase = [0.16, 1, 0.3, 1] as const;

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Reveal de sección con GSAP + ScrollTrigger.
 * Los hijos marcados con data-anim entran en cascada.
 */
export function SectionWrapper({
  children,
  className = "bg-cs-surface",
  delay = 0,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);

  useGsapEffect(ref, ({ gsap, scope }) => {
    const items = scope.querySelectorAll<HTMLElement>("[data-anim]");
    const targets = items.length > 0 ? items : [scope];

    gsap.fromTo(
      targets,
      { autoAlpha: 0, y: 34 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: CS_EASE,
        delay,
        stagger: 0.09,
        scrollTrigger: { trigger: scope, start: "top 82%", once: true },
      },
    );
  });

  return (
    <section ref={ref} className={className}>
      {children}
    </section>
  );
}

/** Item hijo para grillas y listas: entra con el stagger de la sección. */
export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div data-anim className={className}>
      {children}
    </div>
  );
}

export function SectionContainer({
  children,
  className = "container mx-auto max-w-6xl px-6 py-24 md:py-28",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p
      data-anim
      className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground"
    >
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className = "mt-4 font-superlobster text-4xl text-foreground sm:text-5xl",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 data-anim className={className}>
      {children}
    </h2>
  );
}

/**
 * Renderiza texto plano soportando **negrita** y saltos de línea (\n).
 * Punto único de verdad para el parseo de formato en todo el case study.
 */
export function FormattedText({
  text,
  className,
}: {
  text: string;
  className?: string;
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
              );
            }
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={i} className="font-semibold text-foreground">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return <span key={i}>{part}</span>;
          })}
        </p>
      ))}
    </div>
  );
}

export function SectionDescription({
  children,
  className = "mt-5 text-sm leading-7 text-muted-foreground",
}: {
  children: ReactNode;
  className?: string;
}) {
  // Si viene un string (el caso normal, texto de contenido), se parsea con FormattedText.
  // Si viene JSX ya armado desde algún bloque puntual, se respeta tal cual.
  if (typeof children === "string") {
    return (
      <div data-anim>
        <FormattedText text={children} className={className} />
      </div>
    );
  }
  return (
    <p data-anim className={className}>
      {children}
    </p>
  );
}

export function InfoCard({
  label,
  value,
}: {
  label: string;
  value: string;
  delay?: number;
}) {
  return (
    <div
      data-anim
      className="min-h-[150px] rounded-xl border border-cs-hairline bg-cs-card p-6 transition-transform duration-300 hover:-translate-y-1"
    >
      <p className="text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
        {label}
      </p>
      <FormattedText
        text={value}
        className="mt-4 text-xs leading-6 text-foreground/90"
      />
    </div>
  );
}

export function CardGrid({
  children,
  columns = "md:grid-cols-3",
}: {
  children: ReactNode;
  columns?: string;
}) {
  return <div className={`grid gap-4 ${columns}`}>{children}</div>;
}
