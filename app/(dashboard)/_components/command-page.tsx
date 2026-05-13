"use client";

import { AppShell } from "@/components/layout/app-shell";
import { GlassCard, StatusBadge } from "@/components/ui/dashboard-primitives";
import { KpiCard } from "@/components/ui/kpi-card";
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const trend = [
  { w: "W1", score: 74, objective: 65 },
  { w: "W2", score: 81, objective: 73 },
  { w: "W3", score: 84, objective: 79 },
  { w: "W4", score: 89, objective: 85 },
  { w: "W5", score: 93, objective: 90 },
];

const roster = [
  ["Nova", "Duelist", "good"],
  ["RazeX", "Controller", "hot"],
  ["Hexa", "Sentinel", "pending"],
  ["KayoN", "Flex", "risk"],
] as const;

export function CommandPage({ title }: { title: string }) {
  return (
    <AppShell>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Team Health" value="92/100" delta={"+5.4%"} />
        <KpiCard label="Pipeline" value="37" delta={"+11"} />
        <KpiCard label="Budget Burn" value="68%" delta={"On Track"} />
        <KpiCard label="Win Momentum" value="7 streak" delta={"Season Best"} />
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.6fr_1fr]">
        <GlassCard title={`${title} Intelligence`} subtitle="Cross-module signal aggregation">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trend}>
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.7} />
                    <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2f2f46" />
                <XAxis dataKey="w" stroke="#a1a1aa" />
                <YAxis stroke="#a1a1aa" />
                <Tooltip contentStyle={{ background: "#0b0b14", border: "1px solid #3f3f46" }} />
                <Legend />
                <Area dataKey="score" stroke="#22d3ee" fill="url(#grad)" />
                <Area dataKey="objective" stroke="#f472b6" fillOpacity={0} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard title="Priority Ops" subtitle="Live execution board">
          <div className="space-y-3">
            {roster.map(([name, role, status]) => (
              <div key={name} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <div>
                  <p className="font-medium">{name}</p>
                  <p className="text-xs text-zinc-400">{role}</p>
                </div>
                <StatusBadge status={status} />
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </AppShell>
  );
}
