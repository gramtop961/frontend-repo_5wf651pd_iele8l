export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-400 to-sky-400"></div>
          <span className="text-xl font-semibold tracking-tight">ZenPay</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#demo"
            className="hidden md:inline-flex px-4 py-2 rounded-lg border border-white/20 text-white/90 hover:bg-white/10 transition"
          >
            View Dashboard Demo
          </a>
          <button className="px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition">
            Start for Free
          </button>
        </div>
      </div>
    </header>
  );
}
