import { AppShell } from "@/components/layout/app-shell";

const rows = [
  ["Sponsorship", "$120,000", "+12%"],
  ["Subscriptions", "$84,300", "+8%"],
  ["Tournament Winnings", "$41,200", "+17%"],
  ["Merch", "$27,100", "+5%"],
];

export default function Page(){return <AppShell><section className="glass rounded-2xl p-6"><h3 className="text-xl font-semibold">Financial Overview</h3><p className="mt-1 text-sm text-zinc-400">P&L visibility, runway control, and department budget health.</p><div className="mt-5 overflow-hidden rounded-xl border border-white/10"><table className="w-full text-left text-sm"><thead className="bg-white/5 text-zinc-400"><tr><th className="p-3">Channel</th><th className="p-3">Revenue</th><th className="p-3">Growth</th></tr></thead><tbody>{rows.map(r=><tr key={r[0]} className="border-t border-white/10"><td className="p-3">{r[0]}</td><td className="p-3">{r[1]}</td><td className="p-3 text-emerald-300">{r[2]}</td></tr>)}</tbody></table></div></section></AppShell>}
