import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { RevealLines } from "../components/Reveal";

export default function Guarantee() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.3, 1, 1, 0.3]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-t border-bone/5 bg-ink-900 py-32 sm:py-44 lg:py-52"
    >
      {/* huge background numeral */}
      <motion.span
        aria-hidden
        style={{ y, opacity }}
        className="display pointer-events-none absolute -right-[4vw] top-1/2 -translate-y-1/2 select-none text-[42vw] leading-none text-bone/[0.04] sm:text-[34vw]"
      >
        24
      </motion.span>

      <div className="container-page relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <span className="label">⟨ 05 ⟩ Guarantee</span>
          </div>
          <div className="lg:col-span-9">
            <RevealLines
              as="h2"
              text={"Reply within\n24 hours.\nAlways."}
              className="display text-[clamp(2.5rem,7vw,6rem)] text-balance"
              stagger={0.12}
            />
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 max-w-xl text-bone/70 leading-relaxed text-lg"
            >
              Every enquiry gets a reply within a day — usually much sooner.
              Once you're a client, edits and changes are handled with one
              week's notice, included in your monthly plan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <a href="#contact" className="btn-primary">
                <span>Start your website</span>
              </a>
              <a href="#about" className="btn-ghost">
                <span>About the studio</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
