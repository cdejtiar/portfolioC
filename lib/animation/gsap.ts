"use client";

import { useEffect, useRef, type RefObject } from "react";

export const CS_EASE = "expo.out";

type GsapModule = {
  gsap: typeof import("gsap")["gsap"];
  ScrollTrigger: typeof import("gsap/ScrollTrigger")["ScrollTrigger"];
};

let cached: Promise<GsapModule> | null = null;

/** Carga GSAP + ScrollTrigger una sola vez y del lado del cliente. */
export function loadGsap(): Promise<GsapModule> {
  if (!cached) {
    cached = Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([core, st]) => {
        const gsap = core.gsap;
        const ScrollTrigger = st.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);
        return { gsap, ScrollTrigger };
      },
    );
  }
  return cached;
}

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Ejecuta una timeline de GSAP dentro de un scope y limpia todo al desmontar.
 * Si el usuario pide menos movimiento, sólo se aplica el fallback (contenido visible).
 */
export function useGsapEffect(
  scope: RefObject<HTMLElement | null>,
  setup: (ctx: GsapModule & { scope: HTMLElement }) => void,
  deps: unknown[] = [],
) {
  const settled = useRef(false);

  useEffect(() => {
    const el = scope.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      el.querySelectorAll<HTMLElement>("[data-anim]").forEach((node) => {
        node.style.opacity = "1";
        node.style.transform = "none";
        node.style.clipPath = "none";
      });
      return;
    }

    let context: { revert: () => void } | null = null;
    let alive = true;

    loadGsap().then((mod) => {
      if (!alive || !scope.current) return;
      context = mod.gsap.context(() => {
        setup({ ...mod, scope: scope.current as HTMLElement });
      }, scope.current);
      settled.current = true;
    });

    return () => {
      alive = false;
      context?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
