export type Language = "es" | "en"

export function getCvDownload(language: Language) {
  if (language === "es") {
    return {
      href: "/CV%20Espa%C3%B1ol%20(2026).pdf",
      fileName: "CV Español (2026).pdf",
    }
  }

  return {
    href: "/CV%20English%20(2026).pdf",
    fileName: "CV English (2026).pdf",
  }
}
