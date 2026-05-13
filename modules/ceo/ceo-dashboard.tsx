"use client";
import { KpiCard } from "@/components/ui/kpi-card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const kpis = [{label:"Receita mensal",value:"R$ 42.500"},{label:"Inadimplência",value:"6.2%"},{label:"Retenção",value:"91%"},{label:"Players ativos",value:"58"}];
const data = [{m:"Jan",g:12},{m:"Fev",g:15},{m:"Mar",g:18},{m:"Abr",g:24},{m:"Mai",g:29}];

export function CtoDashboard(){
  return <section className="space-y-6"><h2 className="text-2xl font-bold">Dashboard CEO</h2><div className="grid md:grid-cols-4 gap-3">{kpis.map(k=><KpiCard key={k.label} {...k} />)}</div><div className="glass rounded-xl p-4 h-72"><ResponsiveContainer width="100%" height="100%"><LineChart data={data}><XAxis dataKey="m" /><YAxis /><Tooltip /><Line type="monotone" dataKey="g" stroke="#22d3ee" /></LineChart></ResponsiveContainer></div></section>;
}
