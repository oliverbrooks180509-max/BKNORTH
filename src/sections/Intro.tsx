import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { RevealLines } from "../components/Reveal";

const fragments = [
  "We design",
  "and build websites",
  "for modern brands —",
  "clean, considered,",
  "and built to perform.",
];

/**
 * Scroll-driven text reveal layered over a parallax label strip and
 * a drifting background numeral. The eye fixates as opacity ramps.
 */
export default function Intro() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const { scrollYProgress: outerProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const labelY = useTransform(outerProgress, [0, 1], reduced ? [0, 0] : [60, -60]);
  const ghostY = useTransform(outerProgress, [0, 1], reduced ? [0, 0] : [120, -120]);
  const ghostOpacity = useTransform(outerProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const headingY = useTransform(outerProgress, [0, 1], reduced ? [0, 0] : [40, -40]);

  return (
    <section
      ref={ref}
      id="intro"
      className="relative overflow-hidden bg-ink-950 py-32 sm:py-44 lg:py-56"
    >
      {/* drifting background numeral */}
      <motion.span
        aria-hidden
        style={{ y: ghostY, opacity: ghostOpacity }}
        className="display pointer-events-none absolute -left-[6vw] top-1/2 -translate-y-1/2 select-none text-[36vw] leading-none text-bone/[0.025] sm:text-[28vw]"
      >
        01
      </motion.span>

      <div className="container-page relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div style={{ y: labelY }} className="lg:col-span-3">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="label"
            >
              ⟨ 01 ⟩ Studio
            </motion.span>
          </motion.div>

          <motion.div style={{ y: headingY }} className="lg:col-span-9">
            <h2 className="display text-[clamp(2rem,5.4vw,4.4rem)] text-balance">
              {fragments.map((line, i) => {
                const start = i / fragments.length;
                const end = (i + 0.85) / fragments.length;
                return (
                  <Fragment key={i} start={start} end={end} progress={scrollYProgress}>
                    {line}
                  </Fragment>
                );
              })}
            </h2>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-16">
              <RevealLines
                as="p"
                text={"A studio without a template.\nEvery project gets a design system\ndrawn from the brand outwards."}
                className="text-bone/70 leading-relaxed max-w-md"
                stagger={0.08}
              />
              <RevealLines
                as="p"
                text={"24-hour reply guarantee.\nFlexible pricing. Honest scope.\nNo retainers you don't need."}
                className="text-bone/70 leading-relaxed max-w-md"
                stagger={0.08}
                delay={0.15}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Fragment({
  children,
  start,
  end,
  progress,
}: {
  children: React.ReactNode;
  start: number;
  end: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  const y = useTransform(progress, [start, end], [12, 0]);
  return (
    <motion.span style={{ opacity, y }} className="block">
      {children}
    </motion.span>
  );
}
