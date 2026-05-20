import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { site } from "../data/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  useEffect(() => {
    if (open) document.documentElement.style.overflow = "hidden";
    else document.documentElement.style.overflow = "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-40 transition-[background-color,backdrop-filter,border-color] duration-500 ease-apple ${
          scrolled
            ? "bg-ink-950/70 backdrop-blur-xl border-b border-bone/5"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container-page flex items-center justify-between h-16 sm:h-20">
          <a href="#top" className="text-bone hover:text-white transition-colors duration-500">
            <Logo />
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-[11px] uppercase tracking-micro text-bone/60 hover:text-bone transition-colors duration-500 link-underline"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a
              href={site.contact.phoneHref}
              className="font-mono text-[11px] uppercase tracking-micro text-bone/60 hover:text-bone transition-colors duration-500"
            >
              {site.contact.phone}
            </a>
            <a href="#contact" className="btn-primary !py-3 !px-5 text-[10px]">
              <span>Start a project</span>
            </a>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col items-end gap-1.5 p-2 -mr-2"
          >
            <span className="block h-px w-7 bg-bone" />
            <span className="block h-px w-5 bg-bone" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-ink-950"
          >
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="container-page flex items-center justify-between h-16 sm:h-20 border-b border-bone/5"
            >
              <Logo />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="font-mono text-[11px] uppercase tracking-micro text-bone/60 hover:text-bone"
              >
                Close
              </button>
            </motion.div>

            <nav className="container-page mt-16 flex flex-col gap-7">
              {site.nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.1 + i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="display text-[clamp(3rem,9vw,5.5rem)] text-bone hover:text-white transition-colors duration-500"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="container-page absolute bottom-10 inset-x-0 flex flex-col gap-4"
            >
              <span className="label">Get in touch</span>
              <a href={site.contact.phoneHref} className="font-serif text-2xl text-bone link-underline">
                {site.contact.phone}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
