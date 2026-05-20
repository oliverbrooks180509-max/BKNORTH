import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { pillars } from "../data/content";

export default function Method() {
  return (
    <section id="method" className="relative bg-ink-950 py-28 md:py-40">
      <div className="container-page">
        <SectionHeader
          index="N° 02"
          kicker="The Method"
          title="Four pillars. One operating system."
          lede="Strength, conditioning, recovery and mind — sequenced together. Not stacked like a content calendar."
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal
              key={p.no}
              delay={i * 0.06}
              className="group relative border-t border-bone/10 lg:border-l lg:border-t-0 first:lg:border-l-0 pt-10 lg:pt-0 lg:pl-10 py-12 lg:pb-0"
            >
              <div className="absolute -top-px left-0 h-px w-0 bg-gold-500 transition-all duration-700 group-hover:w-1/3 lg:top-0 lg:left-0 lg:h-0 lg:w-px lg:bg-gold-500 lg:group-hover:h-1/3" />
              <span className="font-mono text-[10px] uppercase tracking-micro text-gold-500">
                P—{p.no}
              </span>
              <h3 className="display mt-6 text-3xl md:text-4xl text-bone">
                {p.title}
              </h3>
              <p className="mt-6 max-w-xs text-pretty text-sm leading-relaxed text-bone/60">
                {p.body}
              </p>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 h-px bg-bone/15 lg:hidden"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
