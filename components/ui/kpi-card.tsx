import { motion } from "framer-motion";

export function KpiCard({ label, value }: { label: string; value: string }) {
  return <motion.div whileHover={{ y: -4 }} className="glass rounded-xl p-4"><p className="text-xs text-zinc-400">{label}</p><p className="text-2xl font-semibold">{value}</p></motion.div>;
}
