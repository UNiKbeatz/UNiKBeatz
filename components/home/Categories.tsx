const categories = [
  { name: "Afrobeat", icon: "🌍", description: "Warm grooves and modern rhythm" },
  { name: "Trap", icon: "🔥", description: "Hard drums and dark melodies" },
  { name: "Dancehall", icon: "🌴", description: "Caribbean bounce and energy" },
  { name: "Drill", icon: "⚡", description: "Cold melodies and aggressive drums" },
  { name: "R&B", icon: "🌙", description: "Smooth, emotional and soulful" },
  { name: "Arabic", icon: "✨", description: "Oriental melodies and modern production" },
  { name: "Pop", icon: "🎤", description: "Catchy and radio-ready production" },
  { name: "House", icon: "🎧", description: "Club rhythms and electronic energy" },
];

export default function Categories() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            Explore styles
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Browse by genre
          </h2>

          <p className="mt-3 max-w-2xl text-gray-400">
            Find the right sound faster by exploring the most popular genres on
            UNiK Beatz.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <button
              key={category.name}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition hover:-translate-y-1 hover:border-violet-500/40 hover:bg-white/[0.05]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-2xl transition group-hover:scale-110">
                {category.icon}
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                {category.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                {category.description}
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-violet-400">
                Explore beats →
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}