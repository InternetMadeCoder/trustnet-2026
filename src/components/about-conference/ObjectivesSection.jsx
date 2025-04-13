import React from "react";
import { motion } from "framer-motion";

const ObjectivesSection = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left side - Title */}
          <motion.div
            className="lg:w-1/3 w-full relative lg:sticky top-0 lg:top-24 bg-gray-100 py-4 z-10"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight text-center lg:text-left">
              Objectives of TrustNet 2026
            </h2>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="lg:w-2/3 space-y-8"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-600 leading-relaxed text-lg text-justify">
              The objective of the inaugural edition of the International
              Conference on Trusted Networks and Intelligent Systems (TrustNet
              2026) is to foster an engaging platform where researchers,
              practitioners, and industry leaders can collaboratively explore
              advancements in secure, intelligent technologies. Our goal is to:
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Promote Knowledge Exchange",
                  content:
                    "Facilitate the sharing of cutting-edge research, methodologies, and best practices in trusted networks and intelligent systems, offering a platform for presenting impactful findings and pioneering solutions.",
                },
                {
                  title: "Encourage Collaboration",
                  content:
                    "Bridge academia and industry by fostering interdisciplinary partnerships focused on building reliable, secure, and intelligent infrastructures for future technologies.",
                },
                {
                  title: "Highlight Advancements",
                  content:
                    "Showcase emerging trends, tools, and technologies in cybersecurity, trust mechanisms, and AI systems that are shaping the evolution of intelligent networks.",
                },
                {
                  title: "Inspire Innovation",
                  content:
                    "Motivate participants to explore novel ideas and develop creative solutions to address current and future challenges in trusted computing and intelligent systems.",
                },
                {
                  title: "Support Professional Development",
                  content:
                    "Provide valuable learning opportunities through expert-led workshops, keynote sessions, and interactive panels aimed at upskilling professionals and enriching academic inquiry.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-justify">{item.content}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-gray-600 leading-relaxed text-lg italic text-justify"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              TrustNet 2026 aspires to become a pivotal event that accelerates
              progress in the realm of trusted and intelligent systems,
              fostering a vibrant global community committed to secure and smart
              technological innovation.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ObjectivesSection;
