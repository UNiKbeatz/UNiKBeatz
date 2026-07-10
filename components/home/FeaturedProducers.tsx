const producers = [
  {
    name: "Nova Beats",
    specialty: "Afrobeat & Dancehall",
    followers: "24.8K",
    sales: "1.2K",
    initials: "NB",
  },
  {
    name: "Luxe Sound",
    specialty: "Trap & R&B",
    followers: "18.3K",
    sales: "890",
    initials: "LS",
  },
  {
    name: "Sahara Music",
    specialty: "Arabic Pop",
    followers: "31.6K",
    sales: "1.8K",
    initials: "SM",
  },
  {
    name: "Wave District",
    specialty: "House & Pop",
    followers: "16.9K",
    sales: "760",
    initials: "WD",
  },
];

export default function FeaturedProducers() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
              Featured creators
            </p>

            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Meet top producers
            </h2>

            <p className="mt-3 max-w-2xl text-gray-400">
              Discover verified producers creating premium beats for artists
              around the world.
            </p>
          </div>

          <button className="hidden text-sm font-semibold text-violet-400 hover:text-violet-300 md:block">
            View all producers →
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {producers.map((producer) => (
            <article
              key={producer.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-violet-500/40 hover:bg-white/[0.05]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-blue-500 font-bold text-white">
                  {producer.initials}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-white">
                      {producer.name}
                    </h3>
                    <span className="text-sm text-blue-400">✓</span>
                  </div>

                  <p className="mt-1 text-sm text-gray-400">
                    {producer.specialty}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-xs text-gray-500">Followers</p>
                  <p className="mt-1 font-semibold text-white">
                    {producer.followers}
                  </p>
                </div>

                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-xs text-gray-500">Sales</p>
                  <p className="mt-1 font-semibold text-white">
                    {producer.sales}
                  </p>
                </div>
              </div>

              <button className="mt-6 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-600">
                View profile
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}