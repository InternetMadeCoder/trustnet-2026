import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          About the Event
        </motion.h2>

        <div className="space-y-8 text-gray-600 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="leading-relaxed text-lg text-justify"
          >
            The Department of Computer Science and Engineering, Manipal University Jaipur, India is organizing the International Conference on Trusted Networks and Intelligent Systems (TrustNet 2026). The conference invites industry professionals, academics, and researchers to submit original, high-quality, and previously unpublished research papers. The event focuses on addressing contemporary challenges in the domains of network security, trust models, and intelligent computing systems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="leading-relaxed text-lg text-justify"
          >
            TrustNet 2026 will serve as a dynamic platform for sharing pioneering research and developments in Engineering and Technology, with a special emphasis on trusted networks and intelligent systems. This gathering will bring together thought leaders and innovators to exchange insights, provide expert guidance, and engage in meaningful discussions. Whether you're an experienced professional or an emerging researcher, TrustNet 2026 is your gateway to connect, learn, and explore the technologies shaping the future.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
