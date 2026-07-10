import BeatCard, {
  type BeatCardProps,
} from "@/components/beats/BeatCard";
import BeatFilters from "@/components/beats/BeatFilters";
import BeatSearch from "@/components/beats/BeatSearch";
import Header from "@/components/layout/Header";

const licenseOptions = [
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

const beats: BeatCardProps[] = [
  {
    id: 1,
    title: "Midnight Mirage",
    producer: "Nova Beats",
    genre: "Afrobeat",
    mood: "Summer",
    bpm: 102,
    musicalKey: "F#m",
    audioUrl: "/audio/demo-beat.mp3",
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
    audioUrl: "/audio/demo-beat.mp3",
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
    audioUrl: "/audio/demo-beat.mp3",
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
    audioUrl: "/audio/demo-beat.mp3",
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
    audioUrl: "/audio/demo-beat.mp3",
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
    audioUrl: "/audio/demo-beat.mp3",
    licenses: licenseOptions,
  },
];

export default function BeatsPage() {
  return (
    <main className="min-h-screen bg-[#09090f] text-white">
      <Header />

      <BeatSearch />

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[260px_1fr]">
          <BeatFilters />

          <div>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-gray-400">
                {beats.length} beats found
              </p>

              <select
                defaultValue="recommended"
                aria-label="Sort beats"
                className="rounded-xl border border-white/10 bg-[#12121a] px-4 py-3 text-sm text-white outline-none focus:border-violet-500"
              >
                <option value="recommended">Recommended</option>
                <option value="newest">Newest</option>
                <option value="popular">Most popular</option>
                <option value="price-low">Price low to high</option>
                <option value="price-high">Price high to low</option>
              </select>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {beats.map((beat) => (
                <BeatCard key={beat.id} {...beat} />
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <button
                type="button"
                className="rounded-xl border border-white/10 bg-white/5 px-7 py-3 font-semibold text-white transition hover:border-violet-500/40 hover:bg-white/10"
              >
                Load more beats
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}