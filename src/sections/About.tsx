import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Reveal, RevealLines } from "../components/Reveal";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [60, -60]);
  const ruleScale = useTransform(scrollYProgress, [0.05, 0.5], [0, 1]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative border-t border-bone/5 bg-ink-950 py-32 sm:py-44 lg:py-56"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Visual column */}
          <div className="lg:col-span-5">
            <motion.div
              style={{ y: imgY }}
              className="relative aspect-[4/5] w-full overflow-hidden bg-ink-900"
            >
              <Reveal y={0} amount={0.2}>
                <div className="absolute inset-0">
                  {/* Abstract architectural line study */}
                  <svg
                    viewBox="0 0 400 500"
                    preserveAspectRatio="xMidYMid slice"
                    className="absolute inset-0 h-full w-full"
                    aria-hidden
                  >
                    <defs>
                      <linearGradient id="aboutGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#F4F2EE" stopOpacity="0.06" />
                        <stop offset="100%" stopColor="#F4F2EE" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <rect width="400" height="500" fill="url(#aboutGrad)" />
                    {[...Array(18)].map((_, i) => (
                      <motion.line
                        key={i}
                        x1={i * 26}
                        y1={0}
                        x2={i * 26 + 80}
                        y2={500}
                        stroke="rgba(244,242,238,0.12)"
                        strokeWidth="0.6"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 2.2,
                          delay: i * 0.04,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      />
                    ))}
                    <motion.path
                      d="M40 460 L120 220 L180 320 L240 140 L320 360"
                      stroke="rgba(244,242,238,0.55)"
                      strokeWidth="1.2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </svg>
                </div>
              </Reveal>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-bone/70">
                <span className="font-mono text-[10px] uppercase tracking-micro">
                  Studio · North
                </span>
                <span className="font-mono text-[10px] uppercase tracking-micro">
                  Est.
                </span>
              </div>
            </motion.div>
          </div>

          {/* Copy column */}
          <div className="lg:col-span-7 lg:pt-8">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="label"
            >
              ⟨ 02 ⟩ About
            </motion.span>

            <RevealLines
              as="h2"
              text={"A studio for brands\nthat want to move\ndifferently."}
              className="display mt-8 text-[clamp(2.25rem,6vw,5rem)] text-balance"
              stagger={0.12}
            />

            <motion.div
              style={{ originX: 0, scaleX: ruleScale }}
              className="mt-10 h-px w-24 bg-bone/40"
            />

            <div className="mt-10 space-y-6 text-bone/75 leading-relaxed max-w-xl">
              <Reveal>
                <p>
                  B&amp;K North is a modern web design agency. We build clean,
                  high-quality websites for brands that want a stronger online
                  presence — companies who understand that the first impression
                  is rarely the storefront, and almost always the screen.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Our work is quiet, considered and confident. Typography
                  leads. Motion supports. Every detail is shaped to make a
                  brand look like the version of itself it deserves to be.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  We work directly with founders and small leadership teams.
                  No layers, no account managers — you talk to the people
                  designing and building your site.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.3}>
              <div className="mt-14 grid grid-cols-2 gap-10 sm:max-w-md">
                <Stat label="Reply window" value="24h" />
                <Stat label="Edits" value="1 week's notice" />
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-14 flex flex-wrap items-center gap-4">
                <a href="#contact" className="btn-primary">
                  <span>Elevate your online presence</span>
                </a>
                <a href="#services" className="btn-ghost">
                  <span>Pricing</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-bone/10 pt-4">
      <p className="font-serif text-2xl font-light text-bone">{value}</p>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-micro text-bone/50">
        {label}
      </p>
    </div>
  );
}
