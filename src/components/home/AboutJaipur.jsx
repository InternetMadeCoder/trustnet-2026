import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function AboutJaipur() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const places = [
    {
      name: "Hawa Mahal",
      description:
        "Built in 1799 by Maharaja Sawai Pratap Singh, Hawa Mahal is a five-story pink sandstone structure designed to resemble the crown of Lord Krishna. Its 953 intricately designed windows, or jharokhas, were created to allow royal ladies to observe street festivals and daily life while maintaining their privacy. The design ensures a natural air conditioning effect, keeping the interiors cool even during the summer. The palace is an architectural marvel and a symbol of Jaipur's unique heritage, best viewed in the early morning when the sunlight bathes its façade.",
      image: "/jaipur-images/hawa-mahal.jpg",
    },
    {
      name: "Jantar Mantar",
      description:
        "Built by Maharaja Sawai Jai Singh II in 1734, Jantar Mantar is an astronomical observatory and a UNESCO World Heritage Site. The site features a collection of 19 architectural instruments, including the world's largest stone sundial, the Samrat Yantra. These instruments were designed to measure time, predict eclipses, and observe celestial phenomena with remarkable precision. Jantar Mantar showcases the scientific advancements of its time and offers visitors a fascinating insight into the interplay of astronomy, mathematics, and architecture.",
      image: "/jaipur-images/jantar-mantar.jpg",
    },
    {
      name: "Amber Fort",
      description:
        "Amber Fort, located 11 km from Jaipur, is an architectural masterpiece that showcases a blend of Rajput and Mughal styles. Built with red sandstone and marble, the fort is known for its majestic halls, like the Diwan-e-Aam (Hall of Public Audience) and Diwan-e-Khas (Hall of Private Audience). The Sheesh Mahal (Hall of Mirrors) is particularly captivating, with its intricate mirror work that reflects light to illuminate the entire room. Visitors can also enjoy an elephant ride up the hill or attend the mesmerizing Light and Sound Show, which narrates the fort's rich history.",
      image: "/jaipur-images/amber-fort.jpg",
    },
    {
      name: "Nahargarh Fort",
      description:
        "Nahargarh Fort, meaning 'Abode of Tigers,' was built in 1734 by Maharaja Sawai Jai Singh II. Perched on the Aravalli Hills, it served as a retreat for the royal family and a defense fortification. The fort's architecture includes ornate structures like the Madhavendra Bhavan, a royal residence with interconnected rooms and frescoes. Visitors flock here for its panoramic views of Jaipur, particularly at sunset. Today, it is a popular picnic spot and an iconic landmark that captures the essence of the city's history and scenic beauty.",
      image: "/jaipur-images/nahargarh-fort.jpg",
    },
    {
      name: "Johari Bazar & Baapu Bazar",
      description:
        "Jaipur's bustling bazaars are a sensory delight, offering a glimpse into the city's vibrant culture. Johari Bazaar is a paradise for jewelry lovers, featuring handcrafted gold and silver ornaments, precious gemstones, and traditional kundan and meenakari designs. Bapu Bazaar is known for its colorful textiles, leather goods, and mojari footwear. The bazaars also offer an array of handicrafts, souvenirs, and traditional Rajasthani items. Exploring these markets is a must for visitors looking to experience Jaipur's artistry, craftsmanship, and lively atmosphere.",
      image: "/jaipur-images/bapu-bazaar.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % places.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + places.length) % places.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Discover Jaipur
        </motion.h2>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12 relative">
          {/* Content */}
          <div className="w-full lg:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -50, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 50, y: -20 }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                  opacity: { duration: 0.8 },
                }}
                className="space-y-4"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center lg:text-left">
                  {places[currentIndex].name}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  {places[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 relative mb-6 lg:mb-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={places[currentIndex].image}
                alt={places[currentIndex].name}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                  opacity: { duration: 0.8 },
                  scale: { duration: 1.4 },
                }}
                className="w-full h-[300px] md:h-[400px] object-cover rounded-xl shadow-xl"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Dots with enhanced animation */}
        <div className="flex justify-center gap-2 mt-8">
          {places.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentIndex ? "w-8 bg-gray-800" : "w-2 bg-gray-300"
              }`}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
