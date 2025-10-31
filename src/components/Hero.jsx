import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            New • AI-Powered Payouts
          </p>
          <h1 className="mt-6 text-4xl md:text-6xl leading-tight font-semibold tracking-tight">
            Payments that think with you
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/70 max-w-xl">
            AI-powered invoicing, instant payouts, zero stress. Focus on your craft while ZenPay automates the rest.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center justify-center rounded-xl bg-white text-black px-6 py-3 font-medium shadow-lg shadow-white/10 hover:bg-white/90 transition">
              Start for Free
            </button>
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-white/90 hover:bg-white/10 transition"
            >
              View Dashboard Demo
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-white/50">
            <span>PCI-DSS compliant</span>
            <span>•</span>
            <span>Zero setup fees</span>
            <span>•</span>
            <span>24/7 support</span>
          </div>
        </div>

        <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] w-full overflow-hidden rounded-3xl">
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/gL1OurO-6gihUrEW/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          {/* Subtle gradient and glow overlays that don't block interaction */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/30" />
          <div className="pointer-events-none absolute -inset-40 bg-[radial-gradient(ellipse_at_center,rgba(125,255,212,0.15),transparent_50%)]" />
        </div>
      </div>
    </section>
  );
}
