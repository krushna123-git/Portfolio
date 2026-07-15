import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 uppercase tracking-widest mb-3">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Work Together
          </h2>

          <p className="text-slate-400 mt-4 max-w-3xl mx-auto">
            Interested in Data Analytics, Power BI Development,
            Dashboard Automation, Business Intelligence,
            SQL Development or Reporting Solutions?
          </p>

          <div className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Available For Opportunities
          </div>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Email */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="
              relative
              overflow-hidden
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-8
              hover:border-blue-500
              hover:shadow-blue-500/20
              hover:shadow-2xl
              transition-all
              duration-300
            "
          >
            <div className="flex items-center gap-3 mb-4">
              <FaEnvelope className="text-blue-400 text-2xl" />
              <h3 className="text-xl font-bold">
                Email
              </h3>
            </div>

            <a
              href="mailto:krushnakumbhare.dev@gmail.com"
              className="text-slate-300 hover:text-blue-400 break-all"
            >
              krushnakumbhare.dev@gmail.com
            </a>
          </motion.div>

          {/* Mobile */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="
              relative
              overflow-hidden
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-8
              hover:border-green-500
              hover:shadow-green-500/20
              hover:shadow-2xl
              transition-all
              duration-300
            "
          >
            <div className="flex items-center gap-3 mb-4">
              <FaPhoneAlt className="text-green-400 text-2xl" />
              <h3 className="text-xl font-bold">
                Mobile
              </h3>
            </div>

            <a
              href="tel:+917719019907"
              className="text-slate-300 hover:text-green-400"
            >
              +91 77190 19907
            </a>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="
              relative
              overflow-hidden
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-8
              hover:border-cyan-500
              hover:shadow-cyan-500/20
              hover:shadow-2xl
              transition-all
              duration-300
            "
          >
            <div className="flex items-center gap-3 mb-4">
              <FaLinkedin className="text-cyan-400 text-2xl" />
              <h3 className="text-xl font-bold">
                LinkedIn
              </h3>
            </div>

            <a
              href="https://www.linkedin.com/in/kumbhare-krushna-bi"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:text-cyan-300"
            >
              View Profile →
            </a>
          </motion.div>

          {/* GitHub */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="
              relative
              overflow-hidden
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-8
              hover:border-purple-500
              hover:shadow-purple-500/20
              hover:shadow-2xl
              transition-all
              duration-300
            "
          >
            <div className="flex items-center gap-3 mb-4">
              <FaGithub className="text-purple-400 text-2xl" />
              <h3 className="text-xl font-bold">
                GitHub
              </h3>
            </div>

            <a
              href="https://github.com/krushna123-git"
              target="_blank"
              rel="noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              View Projects →
            </a>
          </motion.div>

        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-5 mt-16"
        >
          <a
            href="https://wa.me/917719019907?text=Hi%20Krushna,%20I%20visited%20your%20portfolio."
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              justify-center
              gap-3
              px-8
              py-4
              rounded-2xl
              bg-green-600
              hover:bg-green-700
              text-white
              font-semibold
              transition
              shadow-lg
            "
          >
            <FaWhatsapp size={22} />
            Chat on WhatsApp
          </a>

        </motion.div>

      </div>
    </section>
  );
}