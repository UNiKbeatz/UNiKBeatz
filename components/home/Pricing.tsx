const plans = [
  {
    name: "Basic Lease",
    price: "€29",
    description: "Për artistë që sapo po fillojnë.",
    features: [
      "MP3 file",
      "Up to 50,000 streams",
      "1 music video",
      "Commercial use",
    ],
    highlighted: false,
  },
  {
    name: "Premium Lease",
    price: "€79",
    description: "Zgjedhja më e mirë për publikime serioze.",
    features: [
      "MP3 + WAV",
      "Up to 500,000 streams",
      "Trackouts included",
      "Commercial use",
    ],
    highlighted: true,
  },
  {
    name: "Unlimited Lease",
    price: "€149",
    description: "Për artistë që duan më shumë liri.",
    features: [
      "MP3 + WAV + Trackouts",
      "Unlimited streams",
      "Unlimited music videos",
      "Live performances",
    ],
    highlighted: false,
  },
  {
    name: "Exclusive License",
    price: "€499",
    description: "Beat-i hiqet nga marketplace pas blerjes.",
    features: [
      "Full exclusive rights",
      "All audio files",
      "Unlimited usage",
      "Priority support",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            Flexible licenses
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Choose the right license
          </h2>

          <p className="mt-4 text-gray-400">
            Zgjidh licencën që përshtatet me projektin, audiencën dhe buxhetin
            tënd.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-2xl border p-6 ${
                plan.highlighted
                  ? "border-violet-500 bg-violet-500/10 shadow-2xl shadow-violet-950/40"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute right-4 top-4 rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {plan.description}
              </p>

              <div className="mt-6">
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="ml-2 text-sm text-gray-500">starting at</span>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <span className="text-violet-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-xl px-5 py-3 font-semibold transition ${
                  plan.highlighted
                    ? "bg-violet-600 text-white hover:bg-violet-500"
                    : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                Choose license
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}