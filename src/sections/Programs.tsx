import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { programs } from "../data/content";

export default function Programs() {
  const [active, setActive] = useState(0);
  const current = programs[active];

  return (
    <section id="programs" className="relative bg-ink-900 py-28 md:py-40 overflow-hidden">
      <div className="container-page">
        <SectionHeader
          index="N° 03"
          kicker="Programs"
          title="Built for the next twelve weeks. And the next ten years."
          lede="Each program is a block. Each block ends in a review. No autopilot, ever."
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-12">
          {/* Program list */}
          <div className="lg:col-span-7">
            <ul className="divide-y divide-bone/10 border-t border-bone/10">
              {programs.map((p, i) => {
                const isActive = i === active;
                return (
                  <li key={p.code}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className="group flex w-full items-center justify-between gap-6 py-8 text-left transition-all"
                    >
                      <div className="flex items-baseline gap-6">
                        <span className="font-mono text-[10px] uppercase tracking-micro text-gold-500/80 w-12">
                          {p.code}
                        </span>
                        <motion.span
                          animate={{
                            x: isActive ? 8 : 0,
                            color: isActive ? "#F5F2EC" : "rgba(245,242,236,0.55)",
                          }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="display text-2xl sm:text-3xl md:text-4xl"
                        >
                          {p.name}
                        </motion.span>
                      </div>
                      <motion.span
                        animate={{ opacity: isActive ? 1 : 0.3, x: isActive ? 0 : -8 }}
                        className="font-mono text-[11px] uppercase tracking-micro text-gold-500"
                      >
                        →
                      </motion.span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Detail card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-800">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.code}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={`https://images.unsplash.com/photo-${
                      ["1581009146145-b5ef050c2e1e","1517836357463-d25dfeac3438","1517344800994-80b20463999c","1583454110551-21f2fa2afe61"][active]
                    }?w=1200&q=85&auto=format&fit=crop`}
                    alt=""
                    className="h-full w-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.code}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="label">{current.duration}</span>
                      <span className="h-1 w-1 rounded-full bg-gold-500/60" />
                      <span className="label">{current.sessions}</span>
                    </div>
                    <h3 className="display text-3xl text-bone">{current.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-bone/70 max-w-sm">
                      {current.summary}
                    </p>
                    <a
                      href="#apply"
                      className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-micro text-gold-500 link-underline"
                    >
                      Request this program →
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
