import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

export function LocationSection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Event Location
        </motion.h2>

        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 50,
              damping: 20,
            }}
            className="w-full lg:w-1/2 h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.4098187540787!2d75.56355427533436!3d26.84588167687407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4850e05bee9b%3A0x1b996759b44c0f11!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sin!4v1701840000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 50,
              damping: 20,
            }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-justify">
                Nestled in the vibrant landscape of Rajasthan, Manipal
                University Jaipur (MUJ) blends tradition with modernity,
                standing as a beacon of innovation and excellence. Spanning 122
                acres of architectural brilliance, the university fosters
                creativity, inquiry, and entrepreneurship. With a global
                perspective, MUJ offers diverse programs across engineering,
                management, law, design, sciences, and humanities, shaping
                future leaders through interdisciplinary learning and
                cutting-edge research.
              </p>
              <p className="text-justify mt-4">
                MUJ's state-of-the-art laboratories, futuristic incubation
                centers, and dynamic cultural ecosystem create a thriving
                community of innovators and change-makers. Rooted in academic
                excellence and driven by limitless possibilities, MUJ is more
                than an institution—it's an experience that inspires,
                transforms, and redefines the future.
              </p>
            </div>

            <div className="flex items-start gap-3 text-gray-700 mt-6">
              <FaMapMarkerAlt className="text-2xl text-orange-500 mt-1 flex-shrink-0" />
              <p className="font-medium">
                Dehmi Kalan, Near GVK Toll Plaza, Jaipur-Ajmer Expressway,
                Jaipur, Rajasthan 303007
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
