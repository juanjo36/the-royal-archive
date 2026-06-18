import Link from 'next/link';

const highlights = [
  'Story-driven Git lessons',
  'Animated timeline visualization',
  'Medieval kingdom art direction',
  'Static deployable MVP'
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden px-6 py-8 text-[var(--text)] lg:px-10 lg:py-10">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-center gap-10">
        <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-gold/90">
              NextGenHacks 2026
            </div>
            <div className="space-y-4">
              <p className="font-[family-name:var(--font-title)] text-sm uppercase tracking-[0.45em] text-gold/80">
                The Royal Archive
              </p>
              <h1 className="font-[family-name:var(--font-title)] text-6xl leading-none text-shadow-royal sm:text-7xl lg:text-8xl">
                Restore history.
                <br />
                Learn Git.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                Become the Archivist of a medieval kingdom and repair the kingdom&apos;s living history one timeline at a time.
                The core experience is a visual Git timeline with story, motion, and simple interactions.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/game"
                className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-slate shadow-royal transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#f0c774]"
              >
                Begin the Archive
              </Link>
              <a
                href="#why"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 transition-colors duration-200 hover:bg-white/10"
              >
                See the concept
              </a>
            </div>
          </div>

          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 shadow-royal">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,138,93,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(217,180,95,0.12),transparent_40%)]" />
            <div className="relative space-y-4">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span>Archive status</span>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-200">Stable</span>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-gold/70">Timeline focus</p>
                <div className="mt-4 space-y-3">
                  <div className="h-3 w-3/4 rounded-full bg-gradient-to-r from-gold to-ember" />
                  <div className="flex gap-3">
                    <div className="h-3 w-3 rounded-full bg-gold" />
                    <div className="h-3 flex-1 rounded-full bg-white/10" />
                  </div>
                  <div className="flex gap-3">
                    <div className="h-3 w-3 rounded-full bg-emerald-300" />
                    <div className="h-3 flex-1 rounded-full bg-white/10" />
                    <div className="h-3 w-1/3 rounded-full bg-white/10" />
                  </div>
                </div>
              </div>
              <p className="text-sm leading-6 text-white/70">
                The timeline is the core mechanic. Every Git concept appears as a visible change in the kingdom and in the archive.
              </p>
            </div>
          </div>
        </section>

        <section id="why" className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => (
            <div key={item} className="glass-panel rounded-3xl px-5 py-4 text-sm text-white/80">
              {item}
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}