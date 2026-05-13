import { AppShell } from "@/components/layout/app-shell";
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const radar = [{ s: "Aim", v: 91 }, { s: "Trading", v: 82 }, { s: "Utility", v: 88 }, { s: "Comms", v: 79 }, { s: "Clutch", v: 86 }];
const evo = [{ w: "W1", score: 68 }, { w: "W2", score: 71 }, { w: "W3", score: 74 }, { w: "W4", score: 78 }, { w: "W5", score: 81 }];

export default function Page() {
  return <AppShell><section className="grid gap-4 xl:grid-cols-2"><article className="glass rounded-2xl p-5"><h3 className="mb-4 text-lg font-semibold">Performance Evolution</h3><div className="h-72"><ResponsiveContainer><LineChart data={evo}><XAxis dataKey="w" stroke="#71717a" /><YAxis stroke="#71717a" /><Tooltip /><Line type="monotone" dataKey="score" stroke="#22d3ee" strokeWidth={3} /></LineChart></ResponsiveContainer></div></article><article className="glass rounded-2xl p-5"><h3 className="mb-4 text-lg font-semibold">Skill Wheel</h3><div className="h-72"><ResponsiveContainer><RadarChart data={radar}><PolarGrid stroke="#3f3f46" /><PolarAngleAxis dataKey="s" stroke="#a1a1aa" /><Radar dataKey="v" stroke="#818cf8" fill="#818cf8" fillOpacity={0.4} /></RadarChart></ResponsiveContainer></div></article></section></AppShell>;
}
