import { Parallax } from "react-parallax";
import { motion } from "framer-motion";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <Parallax
      bgImage="/homepage/hero-section.jpg"
      strength={200}
      className="relative bg-cover bg-center"
      style={{
        width: "100%",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      bgImageStyle={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    >
      <div className="min-h-screen flex flex-col items-center justify-center text-white px-4 md:px-8 bg-black/50">
        <motion.div
          className="text-center space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="relative w-20 h-20 md:w-28 md:h-28 mx-auto mb-6 rounded-full overflow-hidden"
            variants={itemVariants}
          >
            <img
              src="homepage/manipal-logo.png"
              alt="Manipal Logo"
              className="w-full h-full object-contain drop-shadow-lg rounded-full"
            />
          </motion.div>

          <motion.h1
            className="text-xl md:text-3xl lg:text-4xl font-bold max-w-3xl mx-auto leading-normal shadow-text"
            variants={itemVariants}
          >
            International Conference on Trusted Networks and Intelligent Systems
            (TrustNet 2026)
          </motion.h1>

          <motion.h2
            className="text-lg md:text-xl lg:text-2xl font-semibold shadow-text mb-1"
            variants={itemVariants}
          >
            MANIPAL UNIVERSITY JAIPUR
          </motion.h2>

          <motion.p
            className="text-base md:text-lg lg:text-xl shadow-text"
            variants={itemVariants}
          >
            1 February - 2 February 2026
          </motion.p>
        </motion.div>
      </div>
    </Parallax>
  );
}

// Add this to your global CSS or directly in the component using styled-components
const style = `
  .shadow-text {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;
