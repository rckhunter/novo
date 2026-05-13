import { AppShell } from "@/components/layout/app-shell";

const metrics = [["K/D", "1.26"], ["HS%", "31"], ["ACS", "248"], ["Clutch", "22%"]];

export default function Page() {
  return (
    <AppShell>
      <section className="grid gap-4 xl:grid-cols-3">
        <article className="glass rounded-2xl p-5 xl:col-span-2">
          <h3 className="text-xl font-semibold">Player Profile · ACE</h3>
          <p className="mt-2 text-sm text-zinc-400">Role: Flex Duelist · Contract: Tier A · Talent Index: 92</p>
          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
            {metrics.map((m) => (
              <div key={m[0]} className="rounded-xl border border-white/10 bg-white/5 p-3">
                <p className="text-xs text-zinc-500">{m[0]}</p>
                <p className="text-lg font-semibold">{m[1]}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="glass rounded-2xl p-5">
          <h4 className="font-semibold">Coaching Panel</h4>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li>• Improve anti-eco discipline.</li>
            <li>• Better post-plant utility timing.</li>
            <li>• Strong opener impact (+9%).</li>
          </ul>
          <h4 className="mt-5 font-semibold">Internal Messaging</h4>
          <div className="mt-2 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-zinc-300">Coach Nova: "Excellent VOD adaptation this week."</div>
        </article>
      </section>
    </AppShell>
  );
}
