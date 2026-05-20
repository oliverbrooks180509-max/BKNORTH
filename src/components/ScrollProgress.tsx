import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });
  return (
    <motion.div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-50 h-px origin-left bg-bone/70"
      style={{ scaleX }}
    />
  );
}
