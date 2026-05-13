import Link from "next/link";
import { ReactNode } from "react";

const items = ["ceo","performance","tryouts","attendance","points","finance","recruitment"];

export function AppShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen grid grid-cols-[220px_1fr]"><aside className="glass p-4"><h1 className="font-bold text-cyan-300 mb-4">SAFEZONE HUB</h1><nav className="space-y-2">{items.map(i=><Link key={i} href={`/${i}`} className="block capitalize text-zinc-300 hover:text-cyan-300">{i}</Link>)}</nav></aside><main className="p-6">{children}</main></div>;
}
