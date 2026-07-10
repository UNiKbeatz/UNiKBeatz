import BeatPlayer from "@/components/beats/BeatPlayer";
import LicenseSelector, {
  type LicenseOption,
} from "@/components/beats/LicenseSelector";

export type BeatCardProps = {
  id: number;
  title: string;
  producer: string;
  genre: string;
  mood: string;
  bpm: number;
  musicalKey: string;
  audioUrl: string;
  licenses: LicenseOption[];
};

export default function BeatCard({
  title,
  producer,
  genre,
  mood,
  bpm,
  musicalKey,
  audioUrl,
  licenses,
}: BeatCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40">
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-violet-700/60 via-fuchsia-600/30 to-blue-700/50">
        <div className="absolute inset-0 bg-black/10" />

        <BeatPlayer title={title} audioUrl={audioUrl} />

        <button
          type="button"
          aria-label={`Add ${title} to favorites`}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-lg text-white backdrop-blur transition hover:bg-violet-600"
        >
          ♡
        </button>
      </div>

      <div className="p-5">
        <h2 className="text-lg font-semibold text-white">{title}</h2>

        <p className="mt-1 text-sm text-gray-400">by {producer}</p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-300">
          <span className="rounded-full bg-white/5 px-3 py-1">
            {genre}
          </span>

          <span className="rounded-full bg-white/5 px-3 py-1">
            {mood}
          </span>

          <span className="rounded-full bg-white/5 px-3 py-1">
            {bpm} BPM
          </span>

          <span className="rounded-full bg-white/5 px-3 py-1">
            {musicalKey}
          </span>
        </div>

        <LicenseSelector licenses={licenses} beatTitle={title} />
      </div>
    </article>
  );
}