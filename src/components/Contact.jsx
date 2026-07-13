import { motion } from "framer-motion";

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
            Dashboard Automation, Business Intelligence or SQL projects?
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Email */}
          <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            className="
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-8
              hover:border-blue-500
              transition
            "
          >
            <h3 className="text-xl font-bold mb-3">
              Email
            </h3>

            <a
              href="mailto:krushnakumbhare.dev@gmail.com"
              className="text-slate-300 hover:text-blue-400"
            >
              krushnakumbhare.dev@gmail.com
            </a>
          </motion.div>

          {/* Mobile */}
          <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            className="
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-8
              hover:border-green-500
              transition
            "
          >
            <h3 className="text-xl font-bold mb-3">
              Mobile
            </h3>

            <a
              href="tel:+917719019907"
              className="text-slate-300 hover:text-green-400"
            >
              +91 77190 19907
            </a>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            className="
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-8
              hover:border-cyan-500
              transition
            "
          >
            <h3 className="text-xl font-bold mb-3">
              LinkedIn
            </h3>

            <a
              href="https://www.linkedin.com/in/kumbhare-krushna-bi"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400"
            >
              View Profile →
            </a>
          </motion.div>

          {/* GitHub */}
          <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            className="
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-8
              hover:border-purple-500
              transition
            "
          >
            <h3 className="text-xl font-bold mb-3">
              GitHub
            </h3>

            <a
              href="https://github.com/krushna123-git"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400"
            >
              View Projects →
            </a>
          </motion.div>

        </div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/917719019907?text=Hi%20Krushna,%20I%20visited%20your%20portfolio."
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
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
            Chat on WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
}