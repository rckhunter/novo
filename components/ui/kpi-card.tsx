import { motion } from "framer-motion";

export function KpiCard({ label, value, delta }: { label: string; value: string; delta?: string }) {
  return (
    <motion.div whileHover={{ y: -4, scale: 1.01 }} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
      <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-zinc-100">{value}</p>
      {delta ? <p className="mt-1 text-xs text-cyan-300">{delta}</p> : null}
    </motion.div>
  );
}
