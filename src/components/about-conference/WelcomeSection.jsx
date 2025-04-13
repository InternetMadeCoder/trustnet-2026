import React from "react";
import { motion } from "framer-motion";

const WelcomeSection = () => {
  return (
    <div className="container mx-auto px-6 py-32">
      <div className="flex flex-col lg:flex-row items-start gap-16">
        <motion.div
          className="lg:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/about-conference/manipal.jpg"
            alt="Manipal University"
            className="rounded-lg shadow-2xl w-full h-[600px] object-cover"
          />
        </motion.div>

        <motion.div
          className="lg:w-1/2 space-y-8"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-8 leading-tight">
            Welcome to TrustNet 2026
          </h2>

          <div className="space-y-6 text-gray-600">
            <p className="text-xl leading-relaxed text-justify font-normal italic">
              Hello and welcome to TrustNet 2026 – where trust meets
              intelligence! The International Conference on Trusted Networks and
              Intelligent Systems (TrustNet) brings together a stellar lineup of
              R&D presentations from leading experts in the field. This
              conference is an excellent opportunity for researchers,
              practitioners, and industry professionals to explore secure
              systems, share insights, and discuss the latest advancements and
              trends in trusted networks and intelligent technologies.
            </p>

            <p className="text-xl leading-relaxed text-justify font-normal italic">
              We are thrilled to host TrustNet on February 1st and 2nd, 2026, in
              the vibrant city of Jaipur, India. The event will be conducted in
              a hybrid mode: the first day (February 1st) will be held in
              physical mode, and the second day (February 2nd) will be in
              digital mode.
            </p>

            <p className="text-2xl font-medium text-center mt-8 italic">
              We look forward to seeing you there!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomeSection;
