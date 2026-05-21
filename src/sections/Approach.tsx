import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { site } from "../data/site";
import { Reveal, RevealLines } from "../components/Reveal";

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative border-t border-bone/5 bg-ink-950"
    >
      <ApproachMobile />
      <ApproachDesktop />
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
        className="display mt-6 text-[clamp(2.5rem,6vw,5rem)]"
        stagger={0.12}
      />
      <p className="mt-8 max-w-sm text-bone/65 leading-relaxed">
        Four phases. No surprises. From the first conversation
        to the live site, the process is calm and deliberate.
      </p>
    </>
  );
}

function ApproachMobile() {
  return (
    <div className="container-page py-24 lg:hidden">
      <Heading />
      <div className="mt-16 space-y-12">
        {site.process.map((s, i) => (
          <Reveal key={s.step} delay={i * 0.05}>
            <div className="border-t border-bone/10 pt-6">
              <span className="font-mono text-[11px] uppercase tracking-micro text-bone/40">
                {s.step} · {s.title}
              </span>
              <h3 className="display mt-4 text-3xl">{s.title}</h3>
              <p className="mt-4 text-bone/75 leading-relaxed">
                {s.copy}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function ApproachDesktop() {
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
      className="relative hidden lg:block"
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
          <div className="grid grid-cols-12 gap-16">
            <div className="col-span-4">
              <Heading />
            </div>

            <div className="col-span-8 relative min-h-[420px]">
              {steps.map((s, i) => {
                const start = i / steps.length;
                const end = (i + 1) / steps.length;
                return (
                  <Step
                    key={s.step}
                    progress={scrollYProgress}
                    start={start}
                    end={end}
                    step={s.step}
                    title={s.title}
                    copy={s.copy}
                  />
                );
              })}

              {/* progress rail */}
              <div className="absolute right-0 top-0 h-full w-px bg-bone/10">
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
  start,
  end,
  step,
  title,
  copy,
}: {
  progress: MotionValue<number>;
  start: number;
  end: number;
  step: string;
  title: string;
  copy: string;
}) {
  const fadeIn = start;
  const peak = (start + end) / 2;
  const fadeOut = end;
  const opacity = useTransform(
    progress,
    [Math.max(0, fadeIn - 0.05), fadeIn, peak, fadeOut, Math.min(1, fadeOut + 0.05)],
    [0, 1, 1, 1, 0]
  );
  const y = useTransform(progress, [fadeIn, fadeOut], [40, -40]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col justify-center pr-16"
    >
      <span className="font-mono text-[11px] uppercase tracking-micro text-bone/40">
        {step} · {title}
      </span>
      <h3 className="display mt-6 text-[clamp(2.25rem,5vw,4rem)]">{title}</h3>
      <p className="mt-6 max-w-lg text-bone/75 leading-relaxed text-lg">
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
