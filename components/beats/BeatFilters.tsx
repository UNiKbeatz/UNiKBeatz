type LicenseFilter = {
  name: string;
  price: number;
};

const licenseFilters: LicenseFilter[] = [
  { name: "Basic License", price: 65 },
  { name: "Premium License", price: 130 },
  { name: "Unlimited License", price: 200 },
  { name: "Exclusive License", price: 1000 },
];

export default function BeatFilters() {
  return (
    <aside className="h-fit rounded-2xl border border-white/10 bg-white/5 p-5 lg:sticky lg:top-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Filters</h2>

        <button
          type="button"
          className="text-sm font-medium text-violet-400 transition hover:text-violet-300"
        >
          Clear all
        </button>
      </div>

      <div className="mt-7 space-y-7">
        <div>
          <label
            htmlFor="genre"
            className="text-sm font-medium text-gray-300"
          >
            Genre
          </label>

          <select
            id="genre"
            defaultValue=""
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#12121a] px-3 py-3 text-sm text-white outline-none focus:border-violet-500"
          >
            <option value="">All genres</option>
            <option value="afrobeat">Afrobeat</option>
            <option value="trap">Trap</option>
            <option value="dancehall">Dancehall</option>
            <option value="drill">Drill</option>
            <option value="rnb">R&B</option>
            <option value="arabic-pop">Arabic Pop</option>
          </select>
        </div>

        <div>
          <label htmlFor="mood" className="text-sm font-medium text-gray-300">
            Mood
          </label>

          <select
            id="mood"
            defaultValue=""
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#12121a] px-3 py-3 text-sm text-white outline-none focus:border-violet-500"
          >
            <option value="">All moods</option>
            <option value="summer">Summer</option>
            <option value="dark">Dark</option>
            <option value="romantic">Romantic</option>
            <option value="chill">Chill</option>
            <option value="aggressive">Aggressive</option>
            <option value="happy">Happy</option>
          </select>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-300">BPM</p>

          <div className="mt-2 grid grid-cols-2 gap-2">
            <input
              type="number"
              min="40"
              max="250"
              placeholder="Min"
              aria-label="Minimum BPM"
              className="rounded-xl border border-white/10 bg-[#12121a] px-3 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-violet-500"
            />

            <input
              type="number"
              min="40"
              max="250"
              placeholder="Max"
              aria-label="Maximum BPM"
              className="rounded-xl border border-white/10 bg-[#12121a] px-3 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-violet-500"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="musical-key"
            className="text-sm font-medium text-gray-300"
          >
            Musical key
          </label>

          <select
            id="musical-key"
            defaultValue=""
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#12121a] px-3 py-3 text-sm text-white outline-none focus:border-violet-500"
          >
            <option value="">All keys</option>
            <option value="c">C</option>
            <option value="c-sharp">C#</option>
            <option value="d">D</option>
            <option value="d-sharp">D#</option>
            <option value="e">E</option>
            <option value="f">F</option>
            <option value="f-sharp">F#</option>
            <option value="g">G</option>
            <option value="g-sharp">G#</option>
            <option value="a">A</option>
            <option value="a-sharp">A#</option>
            <option value="b">B</option>
          </select>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-300">Licenses</p>

          <div className="mt-3 space-y-3">
            {licenseFilters.map((license) => (
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

                <span className="font-medium text-white">€{license.price}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="w-full rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-500"
        >
          Apply filters
        </button>
      </div>
    </aside>
  );
}