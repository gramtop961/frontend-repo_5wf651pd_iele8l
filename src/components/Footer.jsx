export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-emerald-400 to-sky-400" />
          <span>ZenPay</span>
        </div>
        <p className="text-center">© {new Date().getFullYear()} ZenPay, Inc. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#privacy" className="hover:text-white transition">Privacy</a>
          <a href="#terms" className="hover:text-white transition">Terms</a>
        </div>
      </div>
    </footer>
  );
}
