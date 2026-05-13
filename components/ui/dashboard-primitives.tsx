"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export function GlassCard({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl md:p-5">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-zinc-100">{title}</h3>
        {subtitle ? <p className="text-sm text-zinc-400">{subtitle}</p> : null}
      </div>
      {children}
    </motion.section>
  );
}

export function StatusBadge({ status }: { status: "hot" | "good" | "risk" | "pending" }) {
  const cls = {
    hot: "bg-fuchsia-500/20 text-fuchsia-200 border-fuchsia-400/40",
    good: "bg-emerald-500/20 text-emerald-200 border-emerald-400/40",
    risk: "bg-rose-500/20 text-rose-200 border-rose-400/40",
    pending: "bg-amber-500/20 text-amber-200 border-amber-400/40",
  }[status];
  return <span className={`rounded-full border px-2 py-1 text-xs capitalize ${cls}`}>{status}</span>;
}
