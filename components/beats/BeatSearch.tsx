export default function BeatSearch() {
  return (
    <section className="border-b border-white/10 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
          Marketplace
        </p>

        <h1 className="mt-3 text-4xl font-bold text-white md:text-6xl">
          Find your next beat
        </h1>

        <p className="mt-4 max-w-2xl text-gray-400">
          Discover premium beats from independent producers and choose the
          license that fits your release.
        </p>

        <div className="mt-8 flex max-w-3xl flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 sm:flex-row">
          <input
            type="search"
            placeholder="Search beats, producers, genres or moods"
            aria-label="Search beats"
            className="min-h-12 flex-1 rounded-xl border border-white/10 bg-black/20 px-4 text-white outline-none placeholder:text-gray-500 focus:border-violet-500"
          />

          <button
            type="button"
            className="min-h-12 rounded-xl bg-violet-600 px-7 font-semibold text-white transition hover:bg-violet-500"
          >
            Search
          </button>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {["Afrobeat", "Trap", "Dancehall", "Drill", "R&B", "Arabic Pop"].map(
            (genre) => (
              <button
                key={genre}
                type="button"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition hover:border-violet-500/50 hover:text-white"
              >
                {genre}
              </button>
            ),
          )}
        </div>
      </div>
    </section>
  );
}