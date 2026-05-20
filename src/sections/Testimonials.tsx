import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "../data/content";

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % testimonials.length), 7000);
    return () => clearInterval(t);
  }, []);

  const current = testimonials[i];

  return (
    <section className="relative bg-ink-900 py-28 md:py-40">
      <div className="container-page grid gap-12 md:grid-cols-12 md:items-end">
        <div className="md:col-span-3 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-micro text-gold-500">N° 07</span>
            <span className="h-px w-10 bg-gold-500/40" />
          </div>
          <span className="label">Members on record</span>
        </div>

        <div className="md:col-span-9">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current.name}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="display text-balance text-3xl sm:text-4xl md:text-5xl text-bone leading-[1.1]">
                <span className="display-italic text-gold-500">“</span>
                {current.quote}
                <span className="display-italic text-gold-500">”</span>
              </p>
              <footer className="mt-10 flex items-center gap-4">
                <span className="font-mono text-sm text-bone">{current.name}</span>
                <span className="h-px w-8 bg-bone/20" />
                <span className="font-mono text-[11px] uppercase tracking-micro text-bone/50">
                  {current.title}
                </span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-10 flex items-center gap-3">
            {testimonials.map((t, idx) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Show testimonial from ${t.name}`}
                onClick={() => setI(idx)}
                className="relative h-px w-14 bg-bone/15 overflow-hidden"
              >
                {idx === i && (
                  <motion.span
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 7, ease: "linear" }}
                    className="absolute inset-0 bg-gold-500"
                    key={`bar-${i}`}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
