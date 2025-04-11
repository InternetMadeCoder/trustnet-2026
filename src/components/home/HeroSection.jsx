import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div
      ref={ref}
      className="relative h-screen w-full overflow-hidden pt-[88px]"
      style={{
        background: `url('/homepage/hero-section.jpg') center center / cover fixed`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <motion.div
        style={{ y, opacity }}
        className="relative h-full flex flex-col items-center justify-center text-white px-4 md:px-8"
      >
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-20 h-20 md:w-28 md:h-28 mx-auto mb-6 rounded-full overflow-hidden">
            <img
              src="homepage/manipal-logo.png"
              alt="Manipal Logo"
              className="w-full h-full object-contain drop-shadow-lg rounded-full"
            />
          </div>

          <motion.h1
            className="text-xl md:text-3xl lg:text-4xl font-bold max-w-3xl mx-auto leading-normal shadow-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            International Conference on Trusted Networks and Intelligent Systems
            (TrustNet 2026)
          </motion.h1>

          <motion.h2
            className="text-lg md:text-xl lg:text-2xl font-semibold shadow-text mb-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Manipal University Jaipur
          </motion.h2>

          <motion.p
            className="text-base md:text-lg lg:text-xl shadow-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            1 February - 2 February 2026
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}
