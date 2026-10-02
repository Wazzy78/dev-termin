"use client";

import { useEffect, useState } from "react";

import { terms } from "@/data/terms";

const sortedTerms = [...terms].sort((a, b) => a.term.localeCompare(b.term, "en"));
const categories = ["Frontend", "Backend", "DevOps", "QA", "Management", "Database", "Cloud", "Security"];
type ApiTerm = { id: number; name: string; description: string; category: string };

function normalizeSearch(value: string) {
  return value.trim().toLowerCase().replace(/['‘’ʻʼ`]/g, "'");
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [apiTerms, setApiTerms] = useState<ApiTerm[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (category) params.set("category", category);
        if (search.trim()) params.set("search", search.trim());
        const response = await fetch(`/api/terms?${params}`, { signal: controller.signal });
        if (!response.ok) throw new Error("Terms API unavailable");
        const data: ApiTerm[] = await response.json();
        if (!Array.isArray(data)) throw new Error("Invalid terms response");
        setApiTerms(data);
        setUnavailable(false);
      } catch {
        if (!controller.signal.aborted) {
          setApiTerms(null);
          setUnavailable(true);
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, 150);
    return () => { clearTimeout(timer); controller.abort(); };
  }, [category, search]);

  const query = normalizeSearch(search);
  const availableTerms = apiTerms === null
    ? (category ? [] : sortedTerms)
    : apiTerms.map((item) => ({
        term: item.name,
        translation: terms.find((term) => term.term === item.name)?.translation ?? "",
        description: item.description,
      })).sort((a, b) => a.term.localeCompare(b.term, "en"));
  const filteredTerms = availableTerms.filter((item) =>
    [item.term, item.translation, item.description].some((value) =>
      normalizeSearch(value).includes(query)
    )
  );

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            DEV TERMIN
          </h1>

          <p className="mt-4 text-lg text-gray-400">
            IT terminlarini o‘zbek tilida tushuning.
          </p>
        </header>

        <section className="mb-14">
          <input
            type="search"
            aria-label="Inglizcha termin yoki o‘zbekcha tarjimani qidirish"
            placeholder="Masalan: Docker, API, Deployment..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-gray-700 bg-gray-900 px-5 py-4 text-lg text-white outline-none transition focus:border-white"
          />
        </section>

        <nav aria-label="Termin kategoriyalari" className="mb-6 flex gap-2 overflow-x-auto pb-2">
          {["", ...categories].map((value) => (
            <button key={value} type="button" aria-pressed={category === value}
              onClick={() => setCategory(value)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm ${category === value ? "border-white bg-white text-black" : "border-gray-700 text-gray-400"}`}>
              {value || "Barchasi"}
            </button>
          ))}
        </nav>
        {unavailable && <p role="status" className="mb-5 text-sm text-amber-400">API bilan bog‘lanib bo‘lmadi. Mahalliy lug‘at uchun “Barchasi”ni tanlang.</p>}
        {loading && <p role="status" className="mb-5 text-gray-400">Yuklanmoqda...</p>}
        <section className="space-y-5" aria-busy={loading}>
          {filteredTerms.length > 0 ? (
            filteredTerms.map((item) => (
              <div
                key={item.term}
                className="rounded-2xl border border-gray-800 bg-gray-950 p-6"
              >
                <h2 className="text-2xl font-semibold">
                  {item.term}
                </h2>

                <p className="mt-2 text-lg text-green-400">
                  {item.translation}
                </p>

                <p className="mt-3 leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              Termin topilmadi.
            </p>
          )}
        </section>

        <footer className="mt-20 border-t border-gray-800 pt-6 text-center text-sm text-gray-600">
          dev-termin.uz
        </footer>
      </div>
    </main>
  );
}
