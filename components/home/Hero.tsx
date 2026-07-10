export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute right-10 top-32 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute left-10 bottom-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-[72vh] max-w-7xl flex-col items-center justify-center text-center">
        <div className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-violet-300">
          Premium beats. Original sound. Global creators.
        </div>

        <h1 className="max-w-5xl text-5xl font-bold leading-tight text-white md:text-7xl">
          Discover the perfect beat for your{" "}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
            next hit
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Explore premium beats from talented producers, compare licenses and
          build your next release with UNiK Beatz.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-xl bg-violet-600 px-7 py-3 font-semibold text-white transition hover:bg-violet-500">
            Browse Beats
          </button>

          <button className="rounded-xl border border-white/10 bg-white/5 px-7 py-3 font-semibold text-white transition hover:bg-white/10">
            Start Selling
          </button>
        </div>

        <div className="mt-12 w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="Search by beat, producer, genre or mood"
              className="min-h-12 flex-1 rounded-xl border border-white/10 bg-black/20 px-4 text-white outline-none placeholder:text-gray-500 focus:border-violet-500"
            />

            <button className="min-h-12 rounded-xl bg-white px-6 font-semibold text-black transition hover:bg-gray-200">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}