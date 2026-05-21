import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { site } from "../data/site";
import { RevealLines } from "../components/Reveal";

/**
 * Sticky-stage scroll storytelling. Each step cross-fades and rises as
 * the section scrolls past. On mobile the heading sits above the stage
 * so the step content has the full viewport to breathe.
 */
export default function Approach() {
  return (
    <section
      id="approach"
      className="relative border-t border-bone/5 bg-ink-950"
    >
      {/* heading — above stage on mobile, inside stage on desktop */}
      <div className="container-page pt-24 lg:hidden">
        <Heading />
      </div>

      <Stage />
    </section>
  );
}

function Heading() {
  return (
    <>
      <span className="label">⟨ 03 ⟩ Approach</span>
      <RevealLines
        as="h2"
        text={"How we\nwork."}
        className="display mt-6 text-[clamp(2.5rem,8vw,5rem)]"
        stagger={0.12}
      />
      <p className="mt-8 max-w-sm text-bone/65 leading-relaxed">
        Four phases. No surprises. From the first conversation
        to the live site, the process is calm and deliberate.
      </p>
    </>
  );
}

function Stage() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const steps = site.process;

  return (
    <div
      ref={ref}
      className="relative"
      style={{ height: `${(steps.length + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* ambient gradient drift */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 gradient-radial"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: reduced ? 0.4 : 0.6 }}
          transition={{ duration: 1.6 }}
        />

        <div className="container-page relative z-10 flex h-full flex-col justify-center">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            {/* desktop heading — hidden on mobile because rendered above the stage */}
            <div className="hidden lg:col-span-4 lg:block">
              <Heading />
            </div>

            <div className="relative min-h-[55vh] lg:col-span-8 lg:min-h-[420px]">
              {steps.map((s, i) => (
                <Step
                  key={s.step}
                  progress={scrollYProgress}
                  index={i}
                  count={steps.length}
                  step={s.step}
                  title={s.title}
                  copy={s.copy}
                />
              ))}

              {/* progress rail */}
              <div className="absolute right-0 top-0 hidden h-full w-px bg-bone/10 lg:block">
                <ProgressDots progress={scrollYProgress} count={steps.length} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step({
  progress,
  index,
  count,
  step,
  title,
  copy,
}: {
  progress: MotionValue<number>;
  index: number;
  count: number;
  step: string;
  title: string;
  copy: string;
}) {
  const dur = 1 / count;
  const start = index * dur;
  const end = (index + 1) * dur;
  const fadeBand = dur * 0.2;
  const isFirst = index === 0;
  const isLast = index === count - 1;

  // First step starts already visible; last step stays visible through the end.
  const stops = [
    isFirst ? 0 : start - fadeBand,
    isFirst ? 0.0001 : start + fadeBand,
    isLast ? 0.9999 : end - fadeBand,
    isLast ? 1 : end + fadeBand,
  ];
  const values = [
    isFirst ? 1 : 0,
    1,
    1,
    isLast ? 1 : 0,
  ];
  const opacity = useTransform(progress, stops, values);
  const y = useTransform(progress, [start, end], [50, -50]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col justify-center pr-0 lg:pr-16"
    >
      <span className="font-mono text-[11px] uppercase tracking-micro text-bone/40">
        {step} · {title}
      </span>
      <h3 className="display mt-6 text-[clamp(2.25rem,7vw,4rem)]">{title}</h3>
      <p className="mt-6 max-w-lg text-bone/75 leading-relaxed text-base sm:text-lg">
        {copy}
      </p>
    </motion.div>
  );
}

function ProgressDots({
  progress,
  count,
}: {
  progress: MotionValue<number>;
  count: number;
}) {
  const scaleY = useTransform(progress, [0, 1], [0, 1]);
  return (
    <>
      <motion.div
        style={{ scaleY, originY: 0 }}
        className="absolute inset-0 w-px bg-bone/70"
      />
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          style={{ top: `${((i + 0.5) / count) * 100}%` }}
          className="absolute -right-[3px] block h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-bone/30"
        />
      ))}
    </>
  );
}
