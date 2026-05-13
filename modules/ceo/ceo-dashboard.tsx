"use client";

import { AlertTriangle, ArrowUpRight, Flame, Users } from "lucide-react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const kpis = [
  { label: "MRR", value: "$284,900", delta: "+18.4%" },
  { label: "Retention 90d", value: "94.2%", delta: "+2.6%" },
  { label: "Roster Winrate", value: "67.8%", delta: "+5.1%" },
  { label: "Pipeline Value", value: "$91,300", delta: "+9.3%" },
];

const revenue = [{ m: "Jan", rev: 148 }, { m: "Feb", rev: 171 }, { m: "Mar", rev: 188 }, { m: "Apr", rev: 207 }, { m: "May", rev: 234 }, { m: "Jun", rev: 285 }];
const retention = [{ m: "Jan", academy: 80, pro: 88 }, { m: "Feb", academy: 83, pro: 89 }, { m: "Mar", academy: 86, pro: 90 }, { m: "Apr", academy: 87, pro: 92 }, { m: "May", academy: 88, pro: 93 }, { m: "Jun", academy: 91, pro: 94 }];
const teams = [{ team: "VLR Alpha", perf: 92 }, { team: "VLR Beta", perf: 84 }, { team: "GC Phoenix", perf: 79 }, { team: "Academy", perf: 73 }];

export function CtoDashboard() {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{kpis.map((k) => <article key={k.label} className="glass rounded-2xl p-4"><p className="text-xs uppercase tracking-widest text-zinc-500">{k.label}</p><p className="mt-2 text-2xl font-semibold">{k.value}</p><p className="mt-1 flex items-center gap-1 text-xs text-emerald-300"><ArrowUpRight size={13} /> {k.delta} vs last month</p></article>)}</div>

      <div className="grid gap-4 xl:grid-cols-[2fr_1fr]">
        <article className="glass rounded-2xl p-5"><h3 className="mb-4 text-lg font-semibold">Revenue Evolution</h3><div className="h-72"><ResponsiveContainer><AreaChart data={revenue}><defs><linearGradient id="rev" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#22d3ee" stopOpacity={0.35} /><stop offset="95%" stopColor="#22d3ee" stopOpacity={0} /></linearGradient></defs><CartesianGrid stroke="#1f2937" /><XAxis dataKey="m" stroke="#71717a" /><YAxis stroke="#71717a" /><Tooltip /><Area type="monotone" dataKey="rev" stroke="#22d3ee" fillOpacity={1} fill="url(#rev)" /></AreaChart></ResponsiveContainer></div></article>
        <article className="glass rounded-2xl p-5"><h3 className="mb-4 text-lg font-semibold">Critical Alerts</h3><div className="space-y-3 text-sm"><div className="rounded-xl border border-rose-300/25 bg-rose-500/10 p-3"><p className="flex items-center gap-2 text-rose-200"><AlertTriangle size={14} /> Sponsor renewal due in 4 days.</p></div><div className="rounded-xl border border-amber-300/25 bg-amber-500/10 p-3"><p className="flex items-center gap-2 text-amber-100"><Flame size={14} /> 2 players below hydration target.</p></div><div className="rounded-xl border border-cyan-300/25 bg-cyan-500/10 p-3"><p className="flex items-center gap-2 text-cyan-100"><Users size={14} /> 6 high-potential talents awaiting trial.</p></div></div></article>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <article className="glass rounded-2xl p-5 xl:col-span-2"><h3 className="mb-4 text-lg font-semibold">Retention by Segment</h3><div className="h-64"><ResponsiveContainer><LineChart data={retention}><CartesianGrid stroke="#1f2937" /><XAxis dataKey="m" stroke="#71717a" /><YAxis stroke="#71717a" /><Legend /><Tooltip /><Line type="monotone" dataKey="academy" stroke="#818cf8" strokeWidth={2} /><Line type="monotone" dataKey="pro" stroke="#22d3ee" strokeWidth={2} /></LineChart></ResponsiveContainer></div></article>
        <article className="glass rounded-2xl p-5"><h3 className="mb-4 text-lg font-semibold">Team Ranking System</h3><div className="h-64"><ResponsiveContainer><BarChart data={teams} layout="vertical"><CartesianGrid stroke="#1f2937" /><XAxis type="number" stroke="#71717a" /><YAxis dataKey="team" type="category" stroke="#71717a" width={80} /><Tooltip /><Bar dataKey="perf" fill="#14b8a6" radius={[0, 8, 8, 0]} /></BarChart></ResponsiveContainer></div></article>
      </div>
    </section>
  );
}
