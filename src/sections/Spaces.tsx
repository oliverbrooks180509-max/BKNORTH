import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "../components/SectionHeader";
import { spaces } from "../data/content";

function SpaceCard({ s, i }: { s: typeof spaces[number]; i: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const align = i % 2 === 0 ? "md:col-start-1" : "md:col-start-7";

  return (
    <div
      ref={ref}
      className={`relative grid grid-cols-1 md:grid-cols-12 gap-8 items-end ${i > 0 ? "mt-24 md:mt-32" : ""}`}
    >
      <div className={`md:col-span-6 ${align}`}>
        <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-ink-800">
          <motion.img
            style={{ y }}
            src={s.img}
            alt={s.name}
            className="absolute inset-0 h-[120%] w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
        </div>
      </div>
      <div className={`md:col-span-5 ${i % 2 === 0 ? "md:col-start-8" : "md:col-start-2"} pb-2`}>
        <span className="font-mono text-[10px] uppercase tracking-micro text-gold-500">
          {`Space N° 0${i + 1}`}
        </span>
        <h3 className="display mt-4 text-4xl md:text-5xl text-bone">{s.name}</h3>
        <p className="mt-4 text-sm md:text-base text-bone/60 leading-relaxed max-w-md">
          {s.detail}
        </p>
      </div>
    </div>
  );
}

export default function Spaces() {
  return (
    <section id="spaces" className="relative bg-ink-900 py-28 md:py-40">
      <div className="container-page">
        <SectionHeader
          index="N° 05"
          kicker="The Spaces"
          title="Designed by physiologists. Built like a hotel."
          lede="Climate-engineered, acoustically tuned, and stocked with equipment most clinics cannot afford."
        />

        <div className="mt-20">
          {spaces.map((s, i) => (
            <SpaceCard key={s.name} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
