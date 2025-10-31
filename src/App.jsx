import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black font-inter text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="demo" className="bg-gradient-to-b from-black to-zinc-900 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Live demo</h2>
              <p className="mt-3 text-white/70">
                Explore interactions, transitions, and content structure in a focused preview section.
              </p>
            </div>
            <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-2">
              <div className="aspect-video w-full rounded-xl bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.05),transparent_45%)]" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
