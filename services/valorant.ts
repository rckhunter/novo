export async function getValorantStats(name: string, tag: string) {
  const base = process.env.VALORANT_API_BASE_URL;
  const res = await fetch(`${base}/valorant/v1/mmr/br/pc/${name}/${tag}`, { headers: { Authorization: process.env.VALORANT_API_KEY ?? "" }, next: { revalidate: 300 } });
  if (!res.ok) throw new Error("Valorant API error");
  return res.json();
}
