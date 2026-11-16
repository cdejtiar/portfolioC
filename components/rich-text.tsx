import type { ReactNode } from "react";

/**
 * Renderiza texto inline soportando **negrita**.
 * Punto único de verdad para el formato del copy del home / projects.
 * No agrega wrappers de bloque: se usa dentro del <p> o <h*> existente.
 */
export function RichText({ text }: { text: string }): ReactNode {
  return text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}
