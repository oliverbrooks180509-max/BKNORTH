import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { faqs } from "../data/content";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-ink-900 py-28 md:py-40">
      <div className="container-page grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeader
            index="N° 09"
            kicker="Frequently"
            title="Questions, fairly."
          />
          <p className="mt-6 max-w-sm text-bone/60 leading-relaxed">
            If your question isn't here, our concierge replies inside one business day.
          </p>
          <a
            href="#concierge"
            className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-micro text-gold-500 link-underline"
          >
            Write to concierge →
          </a>
        </div>

        <div className="lg:col-span-8">
          <ul className="divide-y divide-bone/10 border-y border-bone/10">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-6 py-7 text-left"
                  >
                    <div className="flex items-start gap-5">
                      <span className="font-mono text-[10px] uppercase tracking-micro text-gold-500 pt-1.5">
                        0{i + 1}
                      </span>
                      <span className="display text-xl md:text-2xl text-bone">
                        {f.q}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="grid h-7 w-7 shrink-0 place-items-center text-bone/80"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 0v14M0 7h14" stroke="currentColor" strokeWidth="1" />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pl-11 pb-7 pr-12 text-base leading-relaxed text-bone/60 max-w-2xl">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
