import Header from "@/components/layout/Header";

type License = {
  name: string;
  price: number;
};

type Beat = {
  id: number;
  title: string;
  producer: string;
  genre: string;
  mood: string;
  bpm: number;
  musicalKey: string;
  licenses: License[];
};

const licenseOptions: License[] = [
  {
    name: "Basic License",
    price: 65,
  },
  {
    name: "Premium License",
    price: 130,
  },
  {
    name: "Unlimited License",
    price: 200,
  },
  {
    name: "Exclusive License",
    price: 1000,
  },
];

const beats: Beat[] = [
  {
    id: 1,
    title: "Midnight Mirage",
    producer: "Nova Beats",
    genre: "Afrobeat",
    mood: "Summer",
    bpm: 102,
    musicalKey: "F#m",
    licenses: licenseOptions,
  },
  {
    id: 2,
    title: "Paris Nights",
    producer: "Luxe Sound",
    genre: "Trap",
    mood: "Dark",
    bpm: 140,
    musicalKey: "Dm",
    licenses: licenseOptions,
  },
  {
    id: 3,
    title: "Desert Love",
    producer: "Sahara Music",
    genre: "Arabic Pop",
    mood: "Romantic",
    bpm: 96,
    musicalKey: "Am",
    licenses: licenseOptions,
  },
  {
    id: 4,
    title: "Neon Dreams",
    producer: "Wave District",
    genre: "R&B",
    mood: "Chill",
    bpm: 88,
    musicalKey: "C#m",
    licenses: licenseOptions,
  },
  {
    id: 5,
    title: "Golden Waves",
    producer: "Ocean Sound",
    genre: "Dancehall",
    mood: "Happy",
    bpm: 100,
    musicalKey: "Gm",
    licenses: licenseOptions,
  },
  {
    id: 6,
    title: "Dark Motion",
    producer: "Night Studio",
    genre: "Drill",
    mood: "Aggressive",
    bpm: 145,
    musicalKey: "Em",
    licenses: licenseOptions,
  },
];

export default function BeatsPage() {
  return (
    <main className="min-h-screen bg-[#09090f] text-white">
      <Header />

      <section className="border-b border-white/10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            Marketplace
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            Find your next beat
          </h1>

          <p className="mt-4 max-w-2xl text-gray-400">
            Discover premium beats from independent producers and choose the
            license that fits your release.
          </p>

          <div className="mt-8 flex max-w-3xl flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 sm:flex-row">
            <input
              type="text"
              placeholder="Search beats, producers, genres or moods"
              className="min-h-12 flex-1 rounded-xl border border-white/10 bg-black/20 px-4 text-white outline-none placeholder:text-gray-500 focus:border-violet-500"
            />

            <button className="min-h-12 rounded-xl bg-violet-600 px-6 font-semibold text-white transition hover:bg-violet-500">
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="h-fit rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">Filters</h2>

              <button className="text-sm text-violet-400 transition hover:text-violet-300">
                Clear
              </button>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-300">
                  Genre
                </label>

                <select className="mt-2 w-full rounded-xl border border-white/10 bg-[#12121a] px-3 py-3 text-sm text-white outline-none">
                  <option>All genres</option>
                  <option>Afrobeat</option>
                  <option>Trap</option>
                  <option>Dancehall</option>
                  <option>Drill</option>
                  <option>R&B</option>
                  <option>Arabic Pop</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300">
                  Mood
                </label>

                <select className="mt-2 w-full rounded-xl border border-white/10 bg-[#12121a] px-3 py-3 text-sm text-white outline-none">
                  <option>All moods</option>
                  <option>Summer</option>
                  <option>Dark</option>
                  <option>Romantic</option>
                  <option>Chill</option>
                  <option>Aggressive</option>
                  <option>Happy</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300">
                  BPM
                </label>

                <div className="mt-2 grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="rounded-xl border border-white/10 bg-[#12121a] px-3 py-3 text-sm text-white outline-none"
                  />

                  <input
                    type="number"
                    placeholder="Max"
                    className="rounded-xl border border-white/10 bg-[#12121a] px-3 py-3 text-sm text-white outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300">
                  Licenses
                </label>

                <div className="mt-3 space-y-3">
                  {licenseOptions.map((license) => (
                    <label
                      key={license.name}
                      className="flex cursor-pointer items-center justify-between gap-3 text-sm text-gray-300"
                    >
                      <span className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          className="h-4 w-4 accent-violet-600"
                        />
                        {license.name}
                      </span>

                      <span className="font-medium text-white">
                        €{license.price}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-gray-400">{beats.length} beats found</p>

              <select className="rounded-xl border border-white/10 bg-[#12121a] px-4 py-3 text-sm text-white outline-none">
                <option>Recommended</option>
                <option>Newest</option>
                <option>Most popular</option>
                <option>Price low to high</option>
                <option>Price high to low</option>
              </select>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {beats.map((beat) => (
                <article
                  key={beat.id}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40"
                >
                  <div className="relative aspect-square bg-gradient-to-br from-violet-700/60 via-fuchsia-600/30 to-blue-700/50">
                    <button
                      type="button"
                      aria-label={`Play ${beat.title}`}
                      className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-2xl text-white backdrop-blur transition group-hover:scale-110"
                    >
                      ▶
                    </button>

                    <button
                      type="button"
                      aria-label={`Add ${beat.title} to favorites`}
                      className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-white backdrop-blur transition hover:bg-violet-600"
                    >
                      ♡
                    </button>
                  </div>

                  <div className="p-5">
                    <h2 className="text-lg font-semibold text-white">
                      {beat.title}
                    </h2>

                    <p className="mt-1 text-sm text-gray-400">
                      by {beat.producer}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-300">
                      <span className="rounded-full bg-white/5 px-3 py-1">
                        {beat.genre}
                      </span>

                      <span className="rounded-full bg-white/5 px-3 py-1">
                        {beat.mood}
                      </span>

                      <span className="rounded-full bg-white/5 px-3 py-1">
                        {beat.bpm} BPM
                      </span>

                      <span className="rounded-full bg-white/5 px-3 py-1">
                        {beat.musicalKey}
                      </span>
                    </div>

                    <div className="mt-5">
                      <p className="text-xs text-gray-500">License prices</p>

                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {beat.licenses.map((license) => (
                          <button
                            key={license.name}
                            type="button"
                            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left transition hover:border-violet-500/50 hover:bg-violet-500/10"
                          >
                            <span className="block text-xs text-gray-400">
                              {license.name}
                            </span>

                            <span className="mt-1 block font-semibold text-white">
                              €{license.price}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      className="mt-5 w-full rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
                    >
                      Select license
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}