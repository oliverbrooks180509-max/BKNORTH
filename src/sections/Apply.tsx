import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "../components/Reveal";

export default function Apply() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="apply"
      ref={ref}
      className="relative isolate overflow-hidden bg-ink-950 noise"
    >
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=2400&q=85&auto=format&fit=crop"
          alt=""
          className="h-[120%] w-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/95 via-ink-950/80 to-ink-950" />
      </motion.div>

      <div className="container-page py-32 md:py-48">
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Reveal className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-micro text-gold-500">
                N° 10
              </span>
              <span className="h-px w-10 bg-gold-500/40" />
              <span className="label">2026 Intake</span>
            </Reveal>
            <Reveal delay={0.05} as="h2" className="display mt-8 text-[12vw] sm:text-[10vw] md:text-[7.5vw] lg:text-[6.4vw] leading-[0.9] text-bone">
              <span>Apply.</span><br />
              <span className="display-italic text-gold-500">Or don't.</span>
            </Reveal>
            <Reveal delay={0.12} as="p" className="mt-8 max-w-xl text-pretty text-base sm:text-lg text-bone/70 leading-relaxed">
              The waitlist closes when each house reaches capacity. Apply once.
              Hear from us within ten business days.
            </Reveal>
          </div>

          <div className="md:col-span-4 flex flex-col gap-3">
            <a href="#form" className="btn-primary group">
              Begin Application
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#tour" className="btn-ghost group">
              Book a Tour
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-micro text-bone/40">
              Reply within 10 business days · No follow-ups
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
