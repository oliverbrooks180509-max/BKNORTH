import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { brand } from "../data/content";

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden bg-ink-950 noise"
    >
      {/* Background image */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 -z-10"
      >
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=2400&q=85&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-950/40 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-transparent to-ink-950/30" />
      </motion.div>

      {/* Top meta strip */}
      <div className="container-page mt-24 md:mt-28 flex items-center justify-between text-bone/50">
        <span className="font-mono text-[10px] uppercase tracking-micro">
          {brand.established}
        </span>
        <span className="hidden md:inline font-mono text-[10px] uppercase tracking-micro">
          {brand.city}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-micro">
          N° 001 / Apex
        </span>
      </div>

      {/* Hero copy */}
      <motion.div
        style={{ y, opacity }}
        className="container-page relative z-10 mt-auto pb-16 md:pb-24"
      >
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-12 bg-gold-500" />
          <span className="label">Invitation Only · 2026 Intake</span>
        </div>

        <h1 className="display text-bone text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[9.2vw] leading-[0.85]">
          <RevealLine delay={0.05}>Train like</RevealLine>
          <RevealLine delay={0.18}>
            your <span className="display-italic text-gold-500">career</span>
          </RevealLine>
          <RevealLine delay={0.31}>depends on it.</RevealLine>
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-end">
          <p className="md:col-span-5 max-w-md text-pretty text-base sm:text-lg text-bone/70 leading-relaxed">
            Meridian is a private training club for operators, founders and athletes
            who have outgrown the gym. <span className="text-bone">No mirrors, no algorithms — just standards.</span>
          </p>

          <div className="md:col-span-7 flex flex-wrap items-center gap-3 md:justify-end">
            <a href="#apply" className="btn-primary group">
              Apply for Membership
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#tour" className="btn-ghost group">
              Book a Tour
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-bone/40"
        >
          <span className="font-mono text-[9px] uppercase tracking-micro">Scroll</span>
          <span className="block h-8 w-px bg-bone/30" />
        </motion.div>
      </div>
    </section>
  );
}

function RevealLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}
