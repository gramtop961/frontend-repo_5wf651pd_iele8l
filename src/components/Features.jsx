import { Rocket, Sparkles, Shield } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Blazing Performance',
    desc: 'Vite-powered dev experience with instant HMR and production-grade optimizations.',
  },
  {
    icon: Sparkles,
    title: 'Cinematic Visuals',
    desc: 'High-fidelity 3D scenes powered by Spline with silky-smooth animations.',
  },
  {
    icon: Shield,
    title: 'Secure Foundation',
    desc: 'Battle-tested tooling, accessibility-first components, and best practices baked in.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Everything you need to launch</h2>
          <p className="mt-3 text-white/70">
            Opinionated defaults that get out of your way, letting you focus on building delightful experiences.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/[0.08]">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
