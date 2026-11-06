import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white flex flex-col transition-colors duration-300">
      {/* Navigation Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md px-8 py-6 sticky top-0 z-40 transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-semibold tracking-wider uppercase text-lg text-zinc-900 dark:text-zinc-100">
              Yhwach Almighty
            </span>
          </div>
          <nav className="flex items-center gap-8 text-base text-zinc-600 dark:text-zinc-400 mr-14">
            <Link
              href="/dashboard"
              className="text-zinc-900 dark:text-white font-medium hover:text-red-600 dark:hover:text-red-400 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Home
            </Link>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-950 px-6 py-4 text-center text-xs text-zinc-500 transition-colors duration-300">
        © 2026 Yhwach Almighty • Wandenreich Empire
      </footer>
    </div>
  );
}
