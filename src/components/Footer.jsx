export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} CineSphere. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="text-white/70 hover:text-white">Privacy</a>
          <a href="#" className="text-white/70 hover:text-white">Terms</a>
          <a href="#" className="text-white/70 hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
