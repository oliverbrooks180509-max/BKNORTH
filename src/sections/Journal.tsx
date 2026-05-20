import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { journal } from "../data/content";

export default function Journal() {
  return (
    <section id="journal" className="relative bg-ink-950 py-28 md:py-40">
      <div className="container-page">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            index="N° 08"
            kicker="Journal"
            title="Notes from the floor."
            lede="Long-form essays from our head coaches and clinicians. No supplements to sell."
          />
          <a
            href="#journal-all"
            className="font-mono text-[11px] uppercase tracking-micro text-bone/70 link-underline self-start md:self-auto"
          >
            All issues →
          </a>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {journal.map((j, i) => (
            <Reveal key={j.title} delay={i * 0.08}>
              <motion.a
                href="#"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-ink-800">
                  <img
                    src={j.img}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent" />
                  <span className="absolute left-4 top-4 bg-ink-900/70 backdrop-blur-sm px-2.5 py-1 font-mono text-[9px] uppercase tracking-micro text-gold-500">
                    {j.kicker}
                  </span>
                </div>
                <div className="pt-6">
                  <h3 className="display text-2xl md:text-[1.7rem] text-bone leading-tight transition-colors group-hover:text-gold-500">
                    {j.title}
                  </h3>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-micro text-bone/40">
                    Read · {j.read}
                  </p>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
