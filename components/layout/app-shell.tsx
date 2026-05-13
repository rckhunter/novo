"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, CalendarCheck2, Crown, Gauge, LineChart, MessageSquare, Shield, Swords, Target, Trophy, UserCircle2, Users2, Wallet } from "lucide-react";
import { motion } from "framer-motion";

const nav = [
  { href: "/ceo", label: "CEO Command", icon: Crown },
  { href: "/performance", label: "Performance", icon: Gauge },
  { href: "/finance", label: "Finance", icon: Wallet },
  { href: "/tryouts", label: "Tryouts", icon: Target },
  { href: "/attendance", label: "Attendance", icon: CalendarCheck2 },
  { href: "/recruitment", label: "Recruitment", icon: Users2 },
  { href: "/points", label: "Rankings", icon: Trophy },
  { href: "/players/ace", label: "Player Hub", icon: UserCircle2 },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#07090f] text-zinc-100">
      <div className="mx-auto grid min-h-screen max-w-[1800px] grid-cols-1 lg:grid-cols-[300px_1fr]">
        <aside className="border-r border-white/10 bg-gradient-to-b from-[#0f1320] to-[#07090f] p-5 lg:p-7">
          <div className="glass rounded-2xl p-5">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-cyan-400/20 p-2 text-cyan-300"><Shield size={18} /></div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">SafeZone Hub</p>
                <h1 className="text-xl font-semibold">Esports OS</h1>
              </div>
            </div>
            <nav className="space-y-1">
              {nav.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href;
                return (
                  <Link key={item.href} href={item.href} className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${active ? "bg-cyan-400/15 text-cyan-200" : "text-zinc-400 hover:bg-white/5 hover:text-zinc-100"}`}>
                    <Icon size={16} />{item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-7 rounded-xl border border-cyan-300/20 bg-cyan-500/10 p-3 text-xs text-cyan-100">Talent Engine status: <b>Live</b> · 23 prospects in onboarding</div>
          </div>
        </aside>

        <main className="p-4 md:p-7">
          <motion.header initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glass mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl p-4 md:p-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Operations Center</p>
              <h2 className="text-lg font-semibold md:text-2xl">SAFEZONE Competitive Intelligence</h2>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <div className="rounded-xl border border-white/10 bg-white/5 p-2"><Swords size={16} /></div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-2"><LineChart size={16} /></div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-2"><MessageSquare size={16} /></div>
              <div className="relative rounded-xl border border-white/10 bg-white/5 p-2"><Bell size={16} /><span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-rose-400" /></div>
            </div>
          </motion.header>
          {children}
        </main>
      </div>
    </div>
  );
}
