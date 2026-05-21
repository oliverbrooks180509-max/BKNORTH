import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Reveal, RevealLines } from "../components/Reveal";
import { site } from "../data/site";

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const ghostY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [200, -200]);
  const ghostOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [60, -60]);

  return (
    <section
      ref={ref}
      id="services"
      className="relative overflow-hidden border-t border-bone/5 bg-ink-950 py-32 sm:py-44 lg:py-52"
    >
      {/* drifting ghost numeral */}
      <motion.span
        aria-hidden
        style={{ y: ghostY, opacity: ghostOpacity }}
        className="display pointer-events-none absolute -right-[4vw] top-1/3 -translate-y-1/2 select-none text-[40vw] leading-none text-bone/[0.03] sm:text-[30vw]"
      >
        04
      </motion.span>

      <div className="container-page relative">
        <motion.div
          style={{ y: headerY }}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-2xl">
            <span className="label">⟨ 04 ⟩ Services &amp; Pricing</span>
            <RevealLines
              as="h2"
              text={"Two tiers.\nClear scope.\nFlexible pricing."}
              className="display mt-8 text-[clamp(2.25rem,6vw,5rem)] text-balance"
              stagger={0.1}
            />
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-bone/65 leading-relaxed">
              Every brief is different. The figures below are starting points —
              we'll happily shape a package around what you actually need.
            </p>
          </Reveal>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-px bg-bone/5 lg:grid-cols-2">
          {site.services.map((s, i) => (
            <ServiceCard
              key={s.tier}
              idx={i}
              progress={scrollYProgress}
              {...s}
            />
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 border-t border-bone/10 pt-12">
            <Note
              label="Hosting"
              copy="Monthly fee covers hosting and any changes you need, as long as we have one week's notice."
            />
            <Note
              label="Negotiation"
              copy="Pricing is flexible. Talk to us — we shape figures around scope, not the other way around."
            />
            <Note
              label="Guarantee"
              copy="24-hour reply on every enquiry. Project timelines are agreed up front."
            />
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-bone/10 pt-12">
            <p className="font-serif text-2xl font-light text-bone max-w-md">
              Not sure which tier suits? A short call usually settles it.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-primary">
                <span>Book a call</span>
                <Arrow />
              </a>
              <a href={site.contact.phoneHref} className="btn-ghost">
                <span>{site.contact.phone}</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type ServiceCardProps = {
  idx: number;
  tier: string;
  name: string;
  tagline: string;
  price: string;
  hosting: string;
  features: readonly string[];
  featured?: boolean;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
};

function ServiceCard({
  idx,
  tier,
  name,
  tagline,
  price,
  hosting,
  features,
  featured,
  progress,
}: ServiceCardProps) {
  const reduced = useReducedMotion();
  // Subtle parallax — staggered so cards drift at different rates.
  const cardY = useTransform(
    progress,
    [0, 1],
    reduced ? [0, 0] : idx === 0 ? [40, -40] : [60, -60]
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.1, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
      style={{ y: cardY }}
      className={`group relative flex flex-col gap-10 p-10 lg:p-14 transition-colors duration-700 ease-apple ${
        featured
          ? "bg-ink-900 text-bone"
          : "bg-ink-950 text-bone hover:bg-ink-900"
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-micro text-bone/50">
            {tier} · {featured ? "Flagship" : "Standard"}
          </span>
          <h3 className="display mt-4 text-[clamp(2rem,4vw,3.25rem)]">
            {name}
          </h3>
          <p className="mt-3 max-w-xs text-bone/65 text-pretty leading-relaxed">
            {tagline}
          </p>
        </div>
        <div className="text-right">
          <p className="font-serif text-3xl sm:text-4xl font-light leading-none">
            {price}
          </p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-micro text-bone/50">
            + {hosting}
          </p>
        </div>
      </div>

      <div className="rule" />

      <ul className="flex flex-col gap-3">
        {features.map((f, i) => (
          <motion.li
            key={f}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 0.7,
              delay: 0.15 + i * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-start gap-4 text-bone/85"
          >
            <span className="mt-2.5 block h-px w-4 bg-bone/40 shrink-0" />
            <span className="leading-relaxed">{f}</span>
          </motion.li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center gap-4 pt-2">
        <a
          href="#contact"
          className={featured ? "btn-primary" : "btn-ghost"}
        >
          <span>Start {name.toLowerCase()}</span>
          <Arrow />
        </a>
        <p className="font-mono text-[10px] uppercase tracking-micro text-bone/40">
          Negotiable
        </p>
      </div>

      {/* corner indicator */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-6 top-6 h-2 w-2 rounded-full bg-bone/0 transition-colors duration-500 group-hover:bg-bone/70"
      />
    </motion.article>
  );
}

function Note({ label, copy }: { label: string; copy: string }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="label">{label}</span>
      <p className="text-bone/70 leading-relaxed">{copy}</p>
    </div>
  );
}

function Arrow() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
      <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
    </svg>
  );
}
