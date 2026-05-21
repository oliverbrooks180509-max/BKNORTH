import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import MountainBackdrop from "../components/MountainBackdrop";
import Logo from "../components/Logo";
import { site } from "../data/site";
import { RevealLines } from "../components/Reveal";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 80]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const markScale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [1, 1.18]);
  const markY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -40]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden bg-ink-950"
    >
      <MountainBackdrop />

      <div className="container-page relative z-10 flex min-h-[100svh] flex-col">
        {/* top bar info */}
        <div className="flex items-center justify-between pt-28 sm:pt-32">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="label"
          >
            North · Studio
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="hidden sm:block label"
          >
            ⟶ Available for new briefs
          </motion.span>
        </div>

        {/* center mark */}
        <motion.div
          style={{ scale: markScale, y: markY }}
          className="flex flex-1 items-center justify-center py-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-bone"
          >
            <Logo size={64} withWordmark={false} />
          </motion.div>
        </motion.div>

        {/* headline */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="pb-20 sm:pb-28"
        >
          <RevealLines
            as="h1"
            text={"Websites.\nBuilt to elevate."}
            className="display text-[clamp(3rem,11vw,9.5rem)] text-bone text-balance"
            delay={0.3}
            stagger={0.14}
          />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-12 gap-8 sm:gap-12 items-end">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="sm:col-span-6 max-w-md text-bone/70 text-balance text-[15px] leading-relaxed"
            >
              {site.brand.name} is a modern web design studio shaping clean,
              high-quality websites for brands that want to move differently.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="sm:col-span-6 flex flex-wrap items-center gap-4 sm:justify-end"
            >
              <a href="#contact" className="btn-primary">
                <span>Start your website</span>
                <Arrow />
              </a>
              <a href="#services" className="btn-ghost">
                <span>View services</span>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* footer rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0 }}
          className="rule"
        />
        <div className="flex flex-wrap items-center justify-between gap-3 py-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1.5, delay: 1.4 }}
            className="font-mono text-[10px] uppercase tracking-micro text-bone/40"
          >
            Scroll
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="h-8 w-px bg-gradient-to-b from-bone/60 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
      <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
    </svg>
  );
}
