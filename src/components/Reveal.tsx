import { motion, type Variants, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  amount?: number;
};

/**
 * Fade & rise on enter — used for paragraph blocks, cards, and visual elements.
 */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
  once = true,
  amount = 0.3,
}: RevealProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration: 1.1,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

type RevealLinesProps = {
  text: string;
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

const container: Variants = {
  hidden: {},
  show: (s: number) => ({
    transition: { staggerChildren: s, delayChildren: 0 },
  }),
};

const line: Variants = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
};

/**
 * Reveals a string line-by-line by splitting on newline characters.
 * Each line slides up from below a clipping mask — Apple-style.
 */
export function RevealLines({
  text,
  className = "",
  lineClassName = "",
  delay = 0,
  stagger = 0.12,
  as = "h2",
}: RevealLinesProps) {
  const Tag = motion[as];
  const lines = text.split("\n");
  return (
    <Tag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      custom={stagger}
      transition={{ delayChildren: delay }}
    >
      {lines.map((l, i) => (
        <span
          key={i}
          className="block overflow-hidden"
          style={{ paddingBottom: "0.06em" }}
        >
          <motion.span variants={line} className={`block ${lineClassName}`}>
            {l}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
