import { motion } from "framer-motion";

export function SDGSection() {
  const sdgs = [
    { number: "04", name: "Quality Education" },
    { number: "09", name: "Industry, Innovation and Infrastructure" },
    { number: "11", name: "Sustainable Cities and Communities" },
    { number: "17", name: "Partnerships for the Goals" },
  ];

  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 text-gray-800"
        >
          Sustainable Development Goals (SDGs)
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg text-justify text-gray-600 mb-12 max-w-4xl mx-auto"
        >
          Join us at TrustNet 2026 as we explore the transformative role of
          Trusted Networks and Intelligent Systems in supporting the United
          Nations Sustainable Development Goals (SDGs). This conference
          emphasizes four key SDGs:
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {sdgs.map((sdg, index) => (
            <motion.div
              key={sdg.number}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="flex flex-col items-center"
            >
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={`sdg-icons/sdg${sdg.number}.png`}
                  alt={`SDG ${sdg.number}`}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
