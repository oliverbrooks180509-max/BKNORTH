import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Logo from "./Logo";
import { site } from "../data/site";
import { RevealLines } from "./Reveal";

export default function Footer() {
  const year = new Date().getFullYear();
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const headlineY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [80, -20]);
  const ghostY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [120, -40]);
  const ghostOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 1]);

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden border-t border-bone/5 bg-ink-950"
    >
      {/* drifting background mark — parallax */}
      <motion.span
        aria-hidden
        style={{ y: ghostY, opacity: ghostOpacity }}
        className="display pointer-events-none absolute -right-[6vw] -bottom-[10vh] select-none text-[36vw] leading-none text-bone/[0.03] sm:text-[26vw]"
      >
        north
      </motion.span>

      <div className="container-page relative py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <motion.div style={{ y: headlineY }} className="lg:col-span-7">
            <RevealLines
              as="h2"
              text={"Let's build\nsomething\nworth noticing."}
              className="display text-[clamp(2.5rem,7vw,5rem)] text-bone"
            />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="#contact" className="btn-primary">
                <span>Start your website</span>
                <Arrow />
              </a>
              <a href={site.contact.phoneHref} className="btn-ghost">
                <span>Book a call</span>
              </a>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <span className="label">Contact</span>
              <ul className="mt-6 space-y-3 text-bone/80">
                <li>
                  <a className="link-underline" href={site.contact.phoneHref}>
                    {site.contact.phone}
                  </a>
                </li>
                {site.contact.emails.map((email) => (
                  <li key={email}>
                    <a className="link-underline break-all" href={`mailto:${email}`}>
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="label">Navigate</span>
              <ul className="mt-6 space-y-3 text-bone/80">
                {site.nav.map((n) => (
                  <li key={n.href}>
                    <a className="link-underline" href={n.href}>
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col-reverse gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-4 text-bone/50">
            <Logo />
            <span className="font-mono text-[10px] uppercase tracking-micro">
              © {year} {site.brand.name}. All rights reserved.
            </span>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-micro text-bone/40 max-w-xs">
            Designed and built in-house. Pricing is flexible — every brief is different.
          </p>
        </div>
      </div>
    </footer>
  );
}

function Arrow() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
      <path
        d="M1 5h12m0 0L9 1m4 4L9 9"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="square"
      />
    </svg>
  );
}
