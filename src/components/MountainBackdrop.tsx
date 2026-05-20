import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/**
 * A subtle, multi-layer mountain line backdrop used behind the hero.
 * Layers drift apart and fade as the user scrolls, like distant terrain.
 */
export default function MountainBackdrop() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 60]);
  const y2 = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 110]);
  const y3 = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.15]);
  const scale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [1, 1.08]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Soft top light */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-x-0 top-0 h-[60vh] gradient-radial"
      />

      {/* Far layer */}
      <motion.svg
        style={{ y: y1, scale, opacity }}
        viewBox="0 0 1600 600"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-[12%] h-[55vh] w-full"
      >
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F4F2EE" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#F4F2EE" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 480 L180 360 L320 420 L500 280 L700 380 L900 260 L1100 360 L1280 240 L1440 340 L1600 300 L1600 600 L0 600 Z"
          fill="url(#g1)"
          stroke="rgba(244,242,238,0.18)"
          strokeWidth="0.6"
        />
      </motion.svg>

      {/* Mid layer */}
      <motion.svg
        style={{ y: y2, opacity }}
        viewBox="0 0 1600 600"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-[4%] h-[55vh] w-full"
      >
        <defs>
          <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F4F2EE" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#F4F2EE" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 520 L140 420 L260 480 L420 340 L580 460 L760 320 L940 440 L1140 320 L1340 420 L1500 360 L1600 400 L1600 600 L0 600 Z"
          fill="url(#g2)"
          stroke="rgba(244,242,238,0.28)"
          strokeWidth="0.7"
        />
      </motion.svg>

      {/* Near layer */}
      <motion.svg
        style={{ y: y3, opacity }}
        viewBox="0 0 1600 600"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-[60vh] w-full"
      >
        <defs>
          <linearGradient id="g3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F4F2EE" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#050505" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 560 L120 480 L240 540 L380 400 L540 520 L720 380 L900 500 L1080 380 L1260 480 L1440 400 L1600 460 L1600 600 L0 600 Z"
          fill="url(#g3)"
          stroke="rgba(244,242,238,0.42)"
          strokeWidth="0.8"
        />
      </motion.svg>

      {/* Drifting accent line */}
      <motion.svg
        viewBox="0 0 1600 600"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-[28%] h-[40vh] w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, delay: 0.4 }}
      >
        <motion.path
          d="M0 300 C 200 240 400 360 600 300 S 1000 240 1200 300 S 1600 360 1600 300"
          stroke="rgba(244,242,238,0.18)"
          strokeWidth="0.6"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.svg>

      {/* Bottom vignette */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950" />
    </div>
  );
}
