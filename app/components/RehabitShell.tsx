import type { ReactNode } from 'react';

export function RehabitShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-zinc-950 text-zinc-50">
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="https://rehabit.app" className="flex items-center gap-2.5" aria-label="Explore all Rehabit apps">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-300/10 ring-1 ring-emerald-300/20"><img src="https://rehabit.app/images/RHB-Torus-Logo-Icon.svg" alt="" className="h-6 w-6" /></span>
          <span className="text-lg font-bold tracking-tight">rehabit</span><span className="hidden h-5 w-px bg-white/10 sm:block"/><span className="hidden text-sm text-zinc-400 sm:block">Blindspot Decoder</span>
        </a>
        <a href="https://rehabit.app/auth" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:bg-white/10">Sign in</a>
      </div>
    </header>
    {children}
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-7 text-xs text-zinc-500 sm:flex-row sm:px-8"><span>© {new Date().getFullYear()} Rehabit</span><nav className="flex gap-5"><a href="https://rehabit.app" className="hover:text-zinc-200">Explore all apps</a><a href="mailto:feedback@rehabit.app" className="hover:text-zinc-200">Feedback</a></nav></div>
    </footer>
  </div>;
}
