import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { brand, nav } from "../data/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink-900/80 backdrop-blur-md border-b border-bone/5"
            : "bg-transparent"
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between md:h-20">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-serif text-xl tracking-tight text-bone">
              {brand.name}
            </span>
            <span className="hidden font-mono text-[9px] uppercase tracking-micro text-bone/40 md:inline">
              {brand.established}
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="font-mono text-[11px] uppercase tracking-micro text-bone/70 transition-colors hover:text-gold-500"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#apply"
              className="hidden md:inline-flex items-center gap-2 border border-bone/15 px-4 py-2.5 font-mono text-[10px] uppercase tracking-micro text-bone/80 transition-all hover:border-gold-500 hover:text-gold-500"
            >
              Apply
              <span aria-hidden>↗</span>
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center text-bone lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink-950"
          >
            <div className="container-page flex h-16 items-center justify-between md:h-20">
              <span className="font-serif text-xl text-bone">{brand.name}</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center text-bone"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="container-page mt-10 flex flex-col gap-2">
              {nav.map((n, i) => (
                <motion.a
                  key={n.label}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, ease: [0.65, 0, 0.35, 1] }}
                  className="border-b border-bone/10 py-5 font-serif text-4xl text-bone"
                >
                  {n.label}
                </motion.a>
              ))}
              <a
                href="#apply"
                onClick={() => setOpen(false)}
                className="btn-primary mt-8 w-full"
              >
                Apply for membership <span aria-hidden>↗</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
