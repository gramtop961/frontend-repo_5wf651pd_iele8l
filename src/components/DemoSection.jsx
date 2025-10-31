export default function DemoSection() {
  return (
    <section id="demo" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">ZenPay AI Dashboard</h2>
            <p className="mt-4 text-white/70 max-w-xl">
              See your cashflow in real time. Generate smart invoices, predict payout timing, and monitor risk with an elegant, minimal interface.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                AI-suggested invoice schedules and reminders
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                Instant payout eligibility with live scoring
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-400" />
                Minimal UI with perfect typography and alignment
              </li>
            </ul>
          </div>

          <div className="order-1 lg:order-2">
            {/* Phone-like screen mock with glowing gradient */}
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-mint-200/0 via-emerald-400/30 to-sky-400/30 blur-2xl opacity-60" />
              <div className="relative rounded-[2rem] bg-gradient-to-b from-white/10 to-white/5 border border-white/10 shadow-2xl overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center justify-between px-5 py-3 text-xs text-white/60">
                  <span>ZenPay</span>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                  </div>
                </div>
                {/* Screen content */}
                <div className="p-5 bg-gradient-to-b from-[#0f1418] to-[#0a0d10]">
                  {/* KPI row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'MRR', value: '$42,800' },
                      { label: 'Payouts', value: '$12,300' },
                      { label: 'Risk', value: 'Low' },
                    ].map((kpi) => (
                      <div key={kpi.label} className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <div className="text-[10px] uppercase tracking-wide text-white/50">{kpi.label}</div>
                        <div className="mt-1 text-sm font-semibold">{kpi.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Invoice waves */}
                  <div className="mt-5 space-y-3">
                    {[0, 1, 2, 3].map((i) => (
                      <div key={i} className="relative overflow-hidden rounded-xl border border-white/10">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-sky-400/10 to-fuchsia-400/10" />
                        <div className="relative grid grid-cols-5 gap-3 p-4">
                          <div className="col-span-2">
                            <div className="h-3 w-24 rounded bg-white/20" />
                            <div className="mt-2 h-2 w-36 rounded bg-white/10" />
                          </div>
                          <div className="col-span-2 self-center">
                            <div className="h-2 w-full rounded bg-gradient-to-r from-emerald-400/50 via-sky-400/50 to-fuchsia-400/50" />
                          </div>
                          <div className="text-right self-center">
                            <span className="text-sm font-semibold">${(Math.random()*900+100).toFixed(0)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
