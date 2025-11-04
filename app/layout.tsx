import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { BackgroundEffects } from "@/components/background-effects"
import "./globals.css"

// Custom fonts as requested
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Portfolio - Camila Dejtiar",
  description: "Portfolio personal de Camila Dejtiar, diseñadora UX/UI.",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  themeColor: '#402940',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Favicon and app icons - Multiple formats for better compatibility */}
        <link rel="icon" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#402940" />
        <meta name="msapplication-TileColor" content="#402940" />
        
        {/* Block unwanted external scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.addEventListener('error', function(e) {
                  if (e.message && e.message.includes('MetaMask')) {
                    e.preventDefault();
                    console.warn('MetaMask connection blocked - not needed for this site');
                    return false;
                  }
                });
              }
            `,
          }}
        />
        {/* Force dark mode on first paint so the site always starts in dark theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                // Force the theme key and class so pages always start in dark mode
                if (typeof window !== 'undefined' && window.localStorage) {
                  window.localStorage.setItem('modern-portfolio-theme', 'dark');
                }
                if (typeof document !== 'undefined' && document.documentElement) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {
                /* ignore */
              }
            `,
          }}
        />
        {/* Preload critical fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&family=Oswald:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Local fonts are loaded via @font-face in globals.css */}
      </head>
      <body className={`font-barlow ${inter.variable} antialiased`} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
          storageKey="modern-portfolio-theme"
        >
          <BackgroundEffects />
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
