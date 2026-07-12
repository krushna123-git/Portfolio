import { motion, useScroll } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="
        fixed
        top-0
        left-0
        right-0
        h-1
        z-[9999]
        origin-left
        bg-gradient-to-r
        from-blue-500
        via-cyan-400
        to-purple-500
      "
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}