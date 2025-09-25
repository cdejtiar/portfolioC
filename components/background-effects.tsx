"use client"

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Light mode effects - Violet theme */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary violet elements for light mode with dynamic movements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-violet-400/15 dark:bg-transparent rounded-full blur-2xl animate-orbit" style={{ animationDelay: '0s' }} />
        <div className="absolute top-20 right-1/4 w-48 h-48 bg-violet-500/10 dark:bg-transparent rounded-full blur-3xl animate-drift" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-violet-300/20 dark:bg-transparent rounded-full blur-xl animate-spiral" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-10 w-40 h-40 bg-violet-600/8 dark:bg-transparent rounded-full blur-2xl animate-wave" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-violet-400/12 dark:bg-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/3 left-1/4 w-36 h-36 bg-violet-500/8 dark:bg-transparent rounded-full blur-2xl animate-drift" style={{ animationDelay: '5s' }} />
        <div className="absolute bottom-1/3 left-10 w-20 h-20 bg-violet-300/25 dark:bg-transparent rounded-full blur-lg animate-orbit" style={{ animationDelay: '6s' }} />
        <div className="absolute top-3/4 right-20 w-44 h-44 bg-violet-600/6 dark:bg-transparent rounded-full blur-3xl animate-wave" style={{ animationDelay: '2.5s' }} />
        
        {/* Additional scattered elements with more movement */}
        <div className="absolute top-16 left-1/2 w-16 h-16 bg-violet-400/18 dark:bg-transparent rounded-full blur-lg animate-spiral" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-16 right-1/2 w-32 h-32 bg-violet-500/12 dark:bg-transparent rounded-full blur-xl animate-violet-glow" style={{ animationDelay: '3.5s' }} />
        <div className="absolute top-40 left-20 w-22 h-22 bg-violet-300/22 dark:bg-transparent rounded-full blur-sm animate-drift" style={{ animationDelay: '7s' }} />
        <div className="absolute bottom-40 right-16 w-26 h-26 bg-violet-600/14 dark:bg-transparent rounded-full blur-lg animate-float" style={{ animationDelay: '8s' }} />
      </div>

      {/* Dark mode effects - Deep blues and purples */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary dark elements with dynamic movement */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-transparent dark:bg-blue-600/15 rounded-full blur-3xl animate-drift" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-20 left-10 w-52 h-52 bg-transparent dark:bg-purple-700/10 rounded-full blur-3xl animate-orbit" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/3 left-1/3 w-28 h-28 bg-transparent dark:bg-indigo-500/18 rounded-full blur-xl animate-wave" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-36 h-36 bg-transparent dark:bg-blue-800/12 rounded-full blur-2xl animate-spiral" style={{ animationDelay: '3.5s' }} />
        <div className="absolute top-20 left-20 w-24 h-24 bg-transparent dark:bg-purple-600/20 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-1/3 right-10 w-48 h-48 bg-transparent dark:bg-indigo-700/8 rounded-full blur-3xl animate-drift" style={{ animationDelay: '5s' }} />
        <div className="absolute top-2/3 left-1/4 w-32 h-32 bg-transparent dark:bg-blue-500/15 rounded-full blur-xl animate-wave" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-10 right-1/3 w-20 h-20 bg-transparent dark:bg-purple-500/22 rounded-full blur-lg animate-orbit" style={{ animationDelay: '6s' }} />
        
        {/* Additional dark scattered elements with movement */}
        <div className="absolute top-1/2 right-1/2 w-16 h-16 bg-transparent dark:bg-indigo-600/25 rounded-full blur-sm animate-spiral" style={{ animationDelay: '2.5s' }} />
        <div className="absolute bottom-1/2 left-1/2 w-44 h-44 bg-transparent dark:bg-blue-700/8 rounded-full blur-3xl animate-violet-glow" style={{ animationDelay: '4.5s' }} />
        <div className="absolute top-32 right-1/3 w-22 h-22 bg-transparent dark:bg-purple-400/20 rounded-full blur-lg animate-float" style={{ animationDelay: '7.5s' }} />
        <div className="absolute bottom-32 left-1/4 w-30 h-30 bg-transparent dark:bg-indigo-500/16 rounded-full blur-xl animate-drift" style={{ animationDelay: '8.5s' }} />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0">
        {/* Light mode gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/20 via-transparent to-violet-100/15 dark:from-transparent dark:to-transparent" />
        
        {/* Dark mode gradient */}
        <div className="absolute inset-0 bg-transparent dark:bg-gradient-to-br dark:from-blue-950/30 dark:via-transparent dark:to-purple-950/20" />
      </div>
    </div>
  )
}