const beats = [
  {
    title: "Midnight Mirage",
    producer: "Nova Beats",
    genre: "Afrobeat",
    bpm: 102,
    key: "F#m",
    price: 39,
  },
  {
    title: "Paris Nights",
    producer: "Luxe Sound",
    genre: "Trap",
    bpm: 140,
    key: "Dm",
    price: 49,
  },
  {
    title: "Desert Love",
    producer: "Sahara Music",
    genre: "Arabic Pop",
    bpm: 96,
    key: "Am",
    price: 59,
  },
  {
    title: "Neon Dreams",
    producer: "Wave District",
    genre: "R&B",
    bpm: 88,
    key: "C#m",
    price: 45,
  },
];

export default function TrendingBeats() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
              Trending now
            </p>

            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Beats artists are playing
            </h2>
          </div>

          <button className="hidden text-sm font-semibold text-violet-400 hover:text-violet-300 md:block">
            View all beats →
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {beats.map((beat, index) => (
            <article
              key={beat.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-violet-500/40 hover:bg-white/[0.05]"
            >
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-violet-700/60 via-fuchsia-600/30 to-blue-700/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-black/40 text-2xl text-white backdrop-blur transition group-hover:scale-110">
                    ▶
                  </div>
                </div>

                <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  #{index + 1}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">
                  {beat.title}
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  by {beat.producer}
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-300">
                  <span className="rounded-full bg-white/5 px-3 py-1">
                    {beat.genre}
                  </span>
                  <span className="rounded-full bg-white/5 px-3 py-1">
                    {beat.bpm} BPM
                  </span>
                  <span className="rounded-full bg-white/5 px-3 py-1">
                    {beat.key}
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Starting at</p>
                    <p className="font-semibold text-white">€{beat.price}</p>
                  </div>

                  <button className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500">
                    View beat
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}