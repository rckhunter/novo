import { AppShell } from "@/components/layout/app-shell";

export default function Page(){return <AppShell><div className="grid md:grid-cols-2 gap-4"><div className="glass rounded-xl p-4"><h3 className="font-semibold">Perfil Competitivo</h3><p className="text-zinc-400">Elo, agentes, funções, histórico.</p></div><div className="glass rounded-xl p-4"><h3 className="font-semibold">Desenvolvimento</h3><p className="text-zinc-400">Coach notes, pontos fortes, disciplina e evolução.</p></div></div></AppShell>}
