import { AppShell } from "@/components/layout/app-shell";

const ranking = [["ACE",1420],["NYX",1395],["KAI",1352],["LUX",1310],["RIV",1288]];
export default function Page(){return <AppShell><section className="glass rounded-2xl p-6"><h3 className="text-xl font-semibold">Ranking & Progression System</h3><div className="mt-4 space-y-2">{ranking.map((r,i)=><div key={r[0]} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3"><p className="font-medium">#{i+1} {r[0]}</p><p className="text-cyan-200">{r[1]} pts</p></div>)}</div></section></AppShell>}
