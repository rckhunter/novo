"use client";

import { ReactNode, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Bell, ChevronDown, Command, Home, LineChart, Megaphone, Shield, Target, Trophy, Users, Wallet } from "lucide-react";

const nav = [
  { href: "/ceo", label: "CEO Dashboard", icon: Home },
  { href: "/players", label: "Players", icon: Users },
  { href: "/tryouts", label: "Tryouts", icon: Target },
  { href: "/performance", label: "Performance", icon: LineChart },
  { href: "/finance", label: "Finance", icon: Wallet },
  { href: "/attendance", label: "Attendance", icon: Command },
  { href: "/recruitment", label: "Recruitment", icon: Megaphone },
  { href: "/coaching", label: "Coaching", icon: Shield },
  { href: "/safezone-talent", label: "SafeZone Talent", icon: Trophy },
  { href: "/media", label: "Media", icon: Bell },
  { href: "/tournaments", label: "Tournaments", icon: Trophy },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const current = useMemo(() => nav.find((x) => pathname?.includes(x.href)), [pathname]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(230,52,151,0.18),transparent_38%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.18),transparent_36%)]" />
      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 lg:grid-cols-[280px_1fr]">
        <aside className="border-r border-white/10 bg-zinc-950/70 p-4 backdrop-blur-xl lg:p-6">
          <div className="mb-8 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
            <div>
              <p className="text-xs text-zinc-400">SafeZone Esports</p>
              <h1 className="text-sm font-semibold tracking-widest text-cyan-200">COMMAND CENTER</h1>
            </div>
          </div>
          <nav className="space-y-2">
            {nav.map((item) => {
              const active = pathname?.includes(item.href);
              const Icon = item.icon;
              return (
                <Link key={item.href} href={`/dashboard${item.href}`} className="block">
                  <motion.div whileHover={{ x: 4 }} className={`group flex items-center gap-3 rounded-xl border px-3 py-2.5 transition ${active ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-200" : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/20 hover:bg-white/[0.06]"}`}>
                    <Icon className="h-4 w-4" />
                    <span className="text-sm">{item.label}</span>
                  </motion.div>
                </Link>
              );
            })}
          </nav>
        </aside>

        <main className="p-4 md:p-6 lg:p-8">
          <header className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl md:p-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Control Room</p>
              <h2 className="text-lg font-semibold">{current?.label ?? "Dashboard"}</h2>
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-xl border border-white/15 bg-white/[0.04] px-3 py-2 text-sm text-zinc-200">⌘K Search</button>
              <button className="rounded-xl border border-white/15 bg-white/[0.04] p-2"><Bell className="h-4 w-4" /></button>
              <button className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-3 py-2 text-sm">
                CEO
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </header>
          {children}
        </main>
      </div>
    </div>
  );
}
