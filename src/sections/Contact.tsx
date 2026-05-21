import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Reveal, RevealLines } from "../components/Reveal";
import { site } from "../data/site";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [60, -60]);
  const rightY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [30, -30]);
  const ghostY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [180, -180]);
  const ghostOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      id="contact"
      className="relative overflow-hidden border-t border-bone/5 bg-ink-950 py-32 sm:py-44 lg:py-52"
    >
      {/* drifting background numeral */}
      <motion.span
        aria-hidden
        style={{ y: ghostY, opacity: ghostOpacity }}
        className="display pointer-events-none absolute -left-[4vw] top-1/2 -translate-y-1/2 select-none text-[42vw] leading-none text-bone/[0.025] sm:text-[30vw]"
      >
        06
      </motion.span>

      <div className="container-page relative">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <motion.div style={{ y: leftY }} className="lg:col-span-5">
            <span className="label">⟨ 06 ⟩ Contact</span>
            <RevealLines
              as="h2"
              text={"Start your\nwebsite."}
              className="display mt-8 text-[clamp(2.5rem,6.5vw,5.5rem)]"
              stagger={0.12}
            />
            <Reveal delay={0.3}>
              <p className="mt-8 max-w-md text-bone/70 leading-relaxed">
                Tell us a little about your brand, your timeline, and what
                you're trying to elevate. We reply within 24 hours.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-14 space-y-10">
                <div>
                  <span className="label">Direct line</span>
                  <a
                    href={site.contact.phoneHref}
                    className="mt-3 block font-serif text-3xl sm:text-4xl font-light text-bone link-underline"
                  >
                    {site.contact.phone}
                  </a>
                </div>
                <div>
                  <span className="label">Email</span>
                  <div className="mt-3 space-y-2">
                    {site.contact.emails.map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="block font-serif text-xl font-light text-bone link-underline break-all"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </motion.div>

          <motion.div style={{ y: rightY }} className="lg:col-span-7 lg:pt-6">
            <Reveal delay={0.2}>
              <ContactForm />
            </Reveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
