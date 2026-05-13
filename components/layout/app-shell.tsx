import { ReactNode } from "react";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <aside className="p-4 border-r border-white/10">
        <h1 className="text-2xl font-bold text-cyan-300">
          SAFEZONE HUB
        </h1>
      </aside>

      <main className="p-6">
        {children}
      </main>
    </div>
  );
}
