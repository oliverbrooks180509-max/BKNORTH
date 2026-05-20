import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { coaches } from "../data/content";

export default function Coaches() {
  return (
    <section id="coaches" className="relative bg-ink-950 py-28 md:py-40">
      <div className="container-page">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            index="N° 04"
            kicker="The Coaches"
            title={`Not personal trainers. \nA team of practitioners.`}
            lede="Three to one member ratio. Every coach is credentialed, every credential is verified, every program signed."
          />
          <a
            href="#coaches-all"
            className="font-mono text-[11px] uppercase tracking-micro text-bone/70 link-underline self-start md:self-auto"
          >
            Meet the full team →
          </a>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {coaches.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden bg-ink-800"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />
                  <div className="absolute left-4 top-4 flex items-center gap-2 bg-ink-900/60 backdrop-blur-sm px-2.5 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                    <span className="font-mono text-[9px] uppercase tracking-micro text-bone/80">
                      0{i + 1} · Coach
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="display text-2xl md:text-3xl text-bone">
                    {c.name}
                  </h3>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-micro text-gold-500">
                    {c.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-bone/60">
                    {c.bio}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
