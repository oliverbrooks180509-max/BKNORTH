import { motion, useScroll, useTransform } from "framer-motion";
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
 * Scroll-driven text reveal: the eye fixates as opacity ramps across
 * each fragment in turn. Subtle, expensive, intentional.
 */
export default function Intro() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  return (
    <section
      ref={ref}
      id="intro"
      className="relative bg-ink-950 py-32 sm:py-44 lg:py-56"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-3">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="label"
            >
              ⟨ 01 ⟩ Studio
            </motion.span>
          </div>

          <div className="lg:col-span-9">
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
          </div>
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
