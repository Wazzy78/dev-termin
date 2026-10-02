import { terms } from "@/data/terms";

type ApiTerm = { id: number; name: string; description: string; category: string };
const normalize = (value: string) => value.trim().toLowerCase().replace(/['‘’ʻʼ`]/g, "'");

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const backend = process.env.BACKEND_URL;
  if (!backend) {
    return Response.json({ error: "BACKEND_URL is not configured" }, { status: 503 });
  }
  try {
    const url = new URL(`${backend.replace(/\/$/, "")}/terms`);
    for (const key of ["search", "category"]) {
      const value = params.get(key);
      if (value) url.searchParams.set(key, value);
    }
    const response = await fetch(url, { cache: "no-store", signal: AbortSignal.timeout(5000) });
    if (!response.ok) throw new Error("Backend request failed");
    const data: ApiTerm[] = await response.json();
    const query = normalize(params.get("search") ?? "");
    const translatedNames = new Set(query ? terms.filter((term) => normalize(term.translation).includes(query)).map((term) => term.term) : []);
    if (translatedNames.size) {
      url.searchParams.delete("search");
      const translatedResponse = await fetch(url, { cache: "no-store", signal: AbortSignal.timeout(5000) });
      if (!translatedResponse.ok) throw new Error("Backend request failed");
      const candidates: ApiTerm[] = await translatedResponse.json();
      const merged = new Map(data.map((term) => [term.id, term]));
      for (const term of candidates) {
        if (translatedNames.has(term.name)) merged.set(term.id, term);
      }
      return Response.json([...merged.values()]);
    }
    return Response.json(data);
  } catch {
    return Response.json({ error: "Terms API unavailable" }, { status: 502 });
  }
}
