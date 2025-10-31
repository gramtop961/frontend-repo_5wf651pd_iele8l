import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black" id="home">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6QjP5w5Q0oTW06ZB/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-40 text-center text-white sm:pt-48">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Cinematic experiences for the modern web
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-white/80 sm:text-lg">
          Bring your brand to life with interactive 3D scenes, buttery animations, and a design system built for speed.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#get-started"
            className="pointer-events-auto rounded-md bg-white px-5 py-3 font-medium text-black shadow-sm transition hover:bg-white/90"
          >
            Get Started
          </a>
          <a
            href="#demo"
            className="pointer-events-auto rounded-md border border-white/20 px-5 py-3 font-medium text-white/90 transition hover:border-white/40 hover:text-white"
          >
            Watch Demo
          </a>
        </div>
      </div>
    </section>
  );
}
