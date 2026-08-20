"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react"

export type Language = "es" | "en"

const STORAGE_KEY = "language"
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365

function isLanguage(value: unknown): value is Language {
  return value === "es" || value === "en"
}

function persist(language: Language) {
  try {
    window.localStorage.setItem(STORAGE_KEY, language)
  } catch {
    /* ignore */
  }
  try {
    document.cookie = `${STORAGE_KEY}=${language}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`
  } catch {
    /* ignore */
  }
}

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({
  children,
  initialLanguage = "es",
}: {
  children: ReactNode
  initialLanguage?: Language
}) {
  // The server already read the language cookie, so the first paint is correct.
  const [language, setLanguageState] = useState<Language>(initialLanguage)

  // Fallback for visitors whose preference only lives in localStorage (pre-cookie).
  useEffect(() => {
    let saved: string | null = null
    try {
      saved = window.localStorage.getItem(STORAGE_KEY)
    } catch {
      /* ignore */
    }
    if (isLanguage(saved) && saved !== initialLanguage) {
      setLanguageState(saved)
    } else {
      persist(initialLanguage)
    }
  }, [initialLanguage])

  useEffect(() => {
    persist(language)
    document.documentElement.lang = language
  }, [language])

  const setLanguage = useCallback((next: Language) => setLanguageState(next), [])
  const toggleLanguage = useCallback(
    () => setLanguageState((prev) => (prev === "es" ? "en" : "es")),
    [],
  )

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage }),
    [language, setLanguage, toggleLanguage],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used inside a LanguageProvider")
  }
  return context
}
