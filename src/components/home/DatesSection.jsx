import { motion } from "framer-motion";
import { BsCalendarCheck } from "react-icons/bs";

export function DatesSection() {
  const dates = [
    {
      title: "Call for Papers",
      date: "1 September 2025",
    },
    {
      title: "Submission Deadline",
      date: "15 December 2025",
    },
    {
      title: "Acceptance Notification",
      date: "5 January 2026",
    },
    {
      title: "Registration Deadline",
      date: "20 January 2026",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-800"
        >
          Important Dates
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {dates.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-white/70 backdrop-blur-sm p-5 md:p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-orange-100/20 flex flex-col items-center text-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,248,240,0.9))",
              }}
            >
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 p-2.5 rounded-full mb-4 shadow-md">
                <BsCalendarCheck className="text-white text-lg md:text-xl" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">{item.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
