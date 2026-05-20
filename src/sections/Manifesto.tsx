import Reveal from "../components/Reveal";
import { stats } from "../data/content";

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative overflow-hidden bg-ink-900 py-28 md:py-40">
      <div className="container-page grid gap-16 md:grid-cols-12">
        <aside className="md:col-span-4 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-micro text-gold-500">N° 01</span>
            <span className="h-px w-10 bg-gold-500/40" />
            <span className="label">Manifesto</span>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-wider-2 text-bone/40">
            A standard, not a subscription.
          </p>
        </aside>

        <div className="md:col-span-8">
          <Reveal as="h2" className="display text-balance text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] leading-[1.05] text-bone">
            We are not a gym. We are a <span className="display-italic text-gold-500">private standard</span> for the body — held to the same discipline you bring to your work.
          </Reveal>

          <div className="mt-10 grid gap-8 text-bone/60 md:grid-cols-2">
            <Reveal delay={0.05} as="p" className="text-pretty leading-relaxed">
              The fitness industry sells dopamine. We sell adaptation.
              Periodised programming, clinical-grade diagnostics, and coaches who
              outnumber the equipment. The members who stay are the ones who
              were tired of plateaus disguised as progress.
            </Reveal>
            <Reveal delay={0.12} as="p" className="text-pretty leading-relaxed">
              Every house is capped. Every applicant is interviewed. Every program
              is built around a single member — and reviewed every four weeks.
              This is what training looks like when nobody is selling you anything
              once you walk in.
            </Reveal>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-y-10 border-t border-bone/10 pt-10 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05} className="flex flex-col gap-2">
                <span className="display text-4xl md:text-5xl text-bone">{s.value}</span>
                <span className="label-bone">{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
