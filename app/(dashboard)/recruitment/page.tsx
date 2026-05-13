import { AppShell } from "@/components/layout/app-shell";

const stages = ["Sourced", "Screened", "Trial", "Coach Review", "Offer"];
export default function Page(){return <AppShell><section className="space-y-4"><h3 className="text-xl font-semibold">Recruitment Pipeline</h3><div className="grid gap-3 md:grid-cols-5">{stages.map((s,i)=><div key={s} className="glass rounded-xl p-4"><p className="text-xs text-zinc-500">Stage {i+1}</p><p className="mt-1 font-medium">{s}</p><p className="mt-3 text-2xl font-semibold text-cyan-200">{[42,28,13,7,3][i]}</p></div>)}</div></section></AppShell>}
