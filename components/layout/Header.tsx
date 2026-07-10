export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-[#0b0b12]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="/" className="text-2xl font-bold text-white">
          UNiK <span className="text-violet-500">Beatz</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <a className="transition hover:text-white" href="/">
            Home
          </a>

          <a className="transition hover:text-white" href="/beats">
            Beats
          </a>

          <a className="transition hover:text-white" href="/producers">
            Producers
          </a>

          <a className="transition hover:text-white" href="/genres">
            Genres
          </a>

          <a className="transition hover:text-white" href="/licenses">
            Licenses
          </a>

          <a className="transition hover:text-white" href="/pricing">
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/login"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Login
          </a>

          <a
            href="/register"
            className="rounded-xl bg-violet-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-violet-500"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}