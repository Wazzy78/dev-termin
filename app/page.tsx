"use client";

import { useState } from "react";

import { terms } from "@/data/terms";

const sortedTerms = [...terms].sort((a, b) => a.term.localeCompare(b.term, "en"));

function normalizeSearch(value: string) {
  return value.trim().toLowerCase().replace(/['‘’ʻʼ`]/g, "'");
}

export default function Home() {
  const [search, setSearch] = useState("");

  const query = normalizeSearch(search);
  const filteredTerms = sortedTerms.filter((item) =>
    [item.term, item.translation].some((value) =>
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

        <section className="space-y-5">
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
