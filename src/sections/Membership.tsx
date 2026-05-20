import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { membership } from "../data/content";

export default function Membership() {
  return (
    <section id="membership" className="relative bg-ink-950 py-28 md:py-40">
      <div className="container-page">
        <SectionHeader
          index="N° 06"
          kicker="Membership"
          title="Three tiers. One standard."
          lede="There are no day passes and no introductory rates. Every membership is reviewed at twelve months — by us, and by you."
        />

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {membership.map((m, i) => (
            <Reveal key={m.tier} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex h-full flex-col p-8 md:p-10 ${
                  m.feature
                    ? "bg-bone text-ink-900 border border-bone"
                    : "bg-ink-900 text-bone border border-bone/10"
                }`}
              >
                {m.feature && (
                  <span className="absolute -top-3 left-8 bg-gold-500 px-3 py-1 font-mono text-[9px] uppercase tracking-micro text-ink-900">
                    Most Selected
                  </span>
                )}

                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-micro ${
                      m.feature ? "text-ink-500" : "text-gold-500"
                    }`}
                  >
                    Tier 0{i + 1}
                  </span>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-micro ${
                      m.feature ? "text-ink-500" : "text-bone/40"
                    }`}
                  >
                    Annual
                  </span>
                </div>

                <h3 className="display mt-6 text-4xl md:text-5xl">
                  {m.tier}
                </h3>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="display text-5xl">{m.price}</span>
                  {m.cadence && (
                    <span
                      className={`font-mono text-xs ${
                        m.feature ? "text-ink-400" : "text-bone/50"
                      }`}
                    >
                      {m.cadence}
                    </span>
                  )}
                </div>

                <p
                  className={`mt-5 text-sm leading-relaxed ${
                    m.feature ? "text-ink-600" : "text-bone/60"
                  }`}
                >
                  {m.blurb}
                </p>

                <ul className="mt-8 flex flex-col gap-3 border-t pt-8 text-sm" style={{ borderColor: m.feature ? "rgba(10,10,10,0.1)" : "rgba(245,242,236,0.1)" }}>
                  {m.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3">
                      <span
                        className={`mt-2 inline-block h-px w-3 ${
                          m.feature ? "bg-ink-900" : "bg-gold-500"
                        }`}
                      />
                      <span className={m.feature ? "text-ink-700" : "text-bone/70"}>
                        {perk}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#apply"
                  className={`mt-auto inline-flex items-center justify-center gap-3 px-7 py-4 font-mono text-[11px] uppercase tracking-micro transition-all duration-300 ${
                    m.feature
                      ? "bg-ink-900 text-bone hover:bg-gold-500 hover:text-ink-900 mt-10"
                      : "border border-bone/20 text-bone hover:border-gold-500 hover:text-gold-500 mt-10"
                  }`}
                >
                  {m.cta} <span aria-hidden>→</span>
                </a>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-bone/10 pt-8 text-bone/50">
          <p className="font-mono text-[11px] uppercase tracking-micro">
            Houses at capacity in NYC · LDN · waitlist active.
          </p>
          <a href="#apply" className="font-mono text-[11px] uppercase tracking-micro text-gold-500 link-underline">
            Join the waitlist →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
