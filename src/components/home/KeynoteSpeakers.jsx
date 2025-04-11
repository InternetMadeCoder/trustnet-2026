import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export function KeynoteSpeakers() {
  const speakers = [
    {
      name: "Prof. John Doe",
      affiliation: "Stanford University, USA",
      image: "profile-images/blank-pfp.png",
    },
    {
      name: "Dr. Jane Smith",
      affiliation: "University of Oxford, UK",
      image: "profile-images/blank-pfp.png",
    },
    {
      name: "Prof. Alex Johnson",
      affiliation: "MIT, USA",
      image: "profile-images/blank-pfp.png",
    },
    {
      name: "Dr. Sarah Williams",
      affiliation: "ETH Zürich, Switzerland",
      image: "profile-images/blank-pfp.png",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Keynote Speakers
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4 bg-white shadow-lg">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-gray-800 text-center">
                  {speaker.name}
                </h3>
                <Link
                  to="/"
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                  <FaLinkedin className="text-xl" />
                </Link>
              </div>
              <p className="text-gray-600 text-center">{speaker.affiliation}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
