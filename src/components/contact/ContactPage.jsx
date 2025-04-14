import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaUser,
  FaComment,
} from "react-icons/fa";

const ContactHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/homepage/hero-section.jpg')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1
          className={`text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Contact Us
        </h1>
        <p
          className={`text-base sm:text-xl text-gray-200 max-w-2xl mx-auto transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Have questions about TrustNet 2026? We're here to help!
        </p>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message:
        "Thank you! Your message has been received. We'll get back to you soon.",
    });

    // Clear form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        error: false,
        message: "",
      });
    }, 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white p-6 rounded-xl shadow-xl"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Send us a Message
      </h3>

      {formStatus.submitted && (
        <div
          className={`${
            formStatus.error
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          } p-4 mb-6 rounded-lg`}
        >
          {formStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 "
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 "
              />
            </div>
          </div>
        </div>

        <div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 "
          />
        </div>

        <div className="relative">
          <div className="absolute top-3 left-3 pointer-events-none">
            <FaComment className="text-gray-400" />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            rows={5}
            className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 "
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700  shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

const ContactInfoItem = ({ icon, title, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex items-start space-x-4 p-6 rounded-lg bg-white shadow-md hover:shadow-lg "
    >
      <div className="text-orange-500 text-2xl mt-1">{icon}</div>
      <div>
        <h3 className="font-semibold text-xl text-gray-800 mb-1">{title}</h3>
        <div className="text-gray-600">{children}</div>
      </div>
    </motion.div>
  );
};

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <ContactHero />

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800"
          >
            Get in Touch with Us
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left side - Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <ContactInfoItem icon={<FaMapMarkerAlt />} title="Address">
                <p>
                  Manipal University Jaipur,
                  <br />
                  Dehmi Kalan, Off Jaipur-Ajmer Expressway,
                  <br />
                  Jaipur, Rajasthan – 303007
                </p>
              </ContactInfoItem>

              <ContactInfoItem icon={<FaPhone />} title="Phone">
                <div className="space-y-2">
                  <p>
                    Conference Inquiries:{" "}
                    <a
                      href="tel:+919140112664"
                      className="hover:text-orange-500 transition-colors"
                    >
                      +91 91401 12664
                    </a>
                  </p>
                  <p>
                    Registration Support:{" "}
                    <a
                      href="tel:+917003904117"
                      className="hover:text-orange-500 transition-colors"
                    >
                      +91 70039 04117
                    </a>
                  </p>
                </div>
              </ContactInfoItem>

              <ContactInfoItem icon={<FaEnvelope />} title="Email">
                <div className="space-y-2">
                  <p>
                    <a
                      href="mailto:trustnet2026@gmail.com"
                      className="hover:text-orange-500 transition-colors"
                    >
                      trustnet2026@gmail.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:anju.george@jaipur.manipal.edu"
                      className="hover:text-orange-500 transition-colors"
                    >
                      anju.george@jaipur.manipal.edu
                    </a>
                  </p>
                </div>
              </ContactInfoItem>
            </div>

            {/* Right side - Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800"
          >
            For Registration and Conference Inquiry
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-orange-50 to-amber-100 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Local Organizing Chair
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-orange-200 flex items-center justify-center flex-shrink-0">
                    <FaUser className="text-orange-600 text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      Dr. Anju George
                    </h4>
                    <p className="text-gray-600">Assistant Professor</p>
                    <p className="text-gray-600">
                      Department of Data Science and Engineering
                    </p>
                    <p className="text-gray-600">Manipal University Jaipur</p>
                    <p className="mt-3">
                      <span className="font-medium">Phone:</span>{" "}
                      <a
                        href="tel:+919140112664"
                        className="text-gray-700 hover:text-orange-600 transition-colors"
                      >
                        +91 91401 12664
                      </a>
                    </p>
                    <p>
                      <span className="font-medium">Email:</span>{" "}
                      <a
                        href="mailto:anju.george@jaipur.manipal.edu"
                        className="text-gray-700 hover:text-orange-600 transition-colors"
                      >
                        anju.george@jaipur.manipal.edu
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-amber-50 to-orange-100 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Conference Coordinator
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-orange-200 flex items-center justify-center flex-shrink-0">
                    <FaUser className="text-orange-600 text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      Ms. Shatabdi Basu
                    </h4>
                    <p className="text-gray-600">Assistant Professor</p>
                    <p className="text-gray-600">
                      Department of Data Science and Engineering
                    </p>
                    <p className="text-gray-600">Manipal University Jaipur</p>
                    <p className="mt-3">
                      <span className="font-medium">Phone:</span>{" "}
                      <a
                        href="tel:+917003904117"
                        className="text-gray-700 hover:text-orange-600 transition-colors"
                      >
                        +91 70039 04117
                      </a>
                    </p>
                    <p>
                      <span className="font-medium">Email:</span>{" "}
                      <a
                        href="mailto:shatabdi.basu@jaipur.manipal.edu"
                        className="text-gray-700 hover:text-orange-600 transition-colors"
                      >
                        shatabdi.basu@jaipur.manipal.edu
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800"
          >
            Event Venue
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/2 h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.4098187540787!2d75.56355427533436!3d26.84588167687407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4850e05bee9b%3A0x1b996759b44c0f11!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sin!4v1701840000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  Manipal University Jaipur
                </h3>

                <div className="flex items-start gap-2">
                  <FaMapMarkerAlt className="text-orange-500 text-xl mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Manipal University Jaipur,
                    <br />
                    Jaipur-Ajmer Express Highway,
                    <br />
                    Dehmi Kalan, Near GVK Toll Plaza,
                    <br />
                    Jaipur, Rajasthan 303007
                  </p>
                </div>

                <div className="pt-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    How to Reach:
                  </h4>

                  <div className="space-y-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-medium text-gray-800">By Road:</p>
                      <p className="text-gray-600">
                        Jaipur is well linked by a good network of roadways and
                        road transport to all the important cities. There are
                        excellent bus services between Jaipur – Delhi by
                        Rajasthan State Road Transport Corporation with buses
                        approximately running every half an hour both ways.
                      </p>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-medium text-gray-800">By Train:</p>
                      <p className="text-gray-600">
                        Travel by car from Delhi to Jaipur takes about 5 hours.
                        The Jaipur bus stand is situated 25 Kms. away from
                        Manipal University Jaipur (MUJ).
                      </p>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-medium text-gray-800">By Air:</p>
                      <p className="text-gray-600">
                        Jaipur International Airport is well-connected to major
                        cities in India and several international destinations.
                        The airport is approximately 30 km from the university
                        campus, and taxis are readily available.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section specific to contact inquiries */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                question: "How can I register for TrustNet 2026?",
                answer:
                  "Registration for TrustNet 2026 will open on September 1, 2025. You can register through our online portal accessible via the Registration page. For any registration-related queries, please contact Ms. Shatabdi Basu at shatabdi.basu@jaipur.manipal.edu.",
              },
              {
                question: "Is there a deadline for paper submissions?",
                answer:
                  "Yes, the deadline for paper submissions is December 15, 2025. All submissions must be made through our online submission system. Please check the Call for Papers section for detailed submission guidelines.",
              },
              {
                question:
                  "Will there be accommodation facilities for the conference attendees?",
                answer:
                  "Yes, we will arrange accommodation for conference attendees at discounted rates in hotels near the venue. More details will be shared closer to the conference date. You can contact the organizing committee for specific accommodation-related questions.",
              },
              {
                question: "How can I become a sponsor for TrustNet 2026?",
                answer:
                  "We welcome sponsorships from organizations interested in supporting TrustNet 2026. Please contact Dr. Anju George at anju.george@jaipur.manipal.edu for sponsorship opportunities and packages.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-6">
              Still have questions? Feel free to reach out to us directly.
            </p>
            <a
              href="mailto:trustnet2026@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg  hover:from-orange-600 hover:to-orange-700 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
            >
              <FaEnvelope className="mr-2" />
              Email Us
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
