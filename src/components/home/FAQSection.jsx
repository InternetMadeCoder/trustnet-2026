import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export function FAQSection() {
  const faqs = [
    {
      question: "When and where is TrustNet 2026 taking place?",
      answer:
        "TrustNet 2026 will take place from 1st to 2nd February 2026 at Manipal University Jaipur, Dehmi Kalan, Jaipur, Rajasthan - 303007, India.",
    },
    {
      question: "How can I register for the conference?",
      answer:
        "You can register for TrustNet 2026 through our official online registration portal. The link will be available on the conference website once registration opens.",
    },
    {
      question: "What topics will be covered at TrustNet 2026?",
      answer:
        "TrustNet 2026 will focus on a wide range of topics including trusted networks, intelligent systems, cybersecurity, privacy-preserving technologies, machine learning, and secure distributed systems. A detailed agenda will be released closer to the event.",
    },
    {
      question: "Are there opportunities for networking at the conference?",
      answer:
        "Yes, TrustNet 2026 will feature various networking opportunities including breakout sessions, interactive panels, and digital meetups for both in-person and virtual attendees.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-gray-50"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-500"
                >
                  {openIndex === index ? <FiMinus /> : <FiPlus />}
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 py-4 text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
