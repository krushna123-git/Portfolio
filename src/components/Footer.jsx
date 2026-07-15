import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-10 mb-12">

            {/* Brand */}
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Krushna Kumbhare
              </h3>

              <p className="text-slate-400 leading-7">
                Data Analyst, Power BI Developer and SQL
                Specialist focused on transforming complex
                data into actionable business insights.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-blue-400">
                Quick Links
              </h4>

              <div className="flex flex-col gap-3">
                <a href="#about" className="text-slate-400 hover:text-white">
                  About
                </a>

                <a href="#skills" className="text-slate-400 hover:text-white">
                  Skills
                </a>

                <a href="#experience" className="text-slate-400 hover:text-white">
                  Experience
                </a>

                <a href="#projects" className="text-slate-400 hover:text-white">
                  Projects
                </a>

                <a href="#contact" className="text-slate-400 hover:text-white">
                  Contact
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-cyan-400">
                Contact
              </h4>

              <div className="space-y-3 text-slate-400">

                <p>
                  📧 krushnakumbhare.dev@gmail.com
                </p>

                <p>
                  📱 +91 77190 19907
                </p>

                <p>
                  📍 Maharashtra, India
                </p>

              </div>
            </div>

          </div>

          {/* Social Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">

            <a
              href="https://www.linkedin.com/in/kumbhare-krushna-bi"
              target="_blank"
              rel="noreferrer"
              className="
                px-6 py-3
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                transition
              "
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/krushna123-git"
              target="_blank"
              rel="noreferrer"
              className="
                px-6 py-3
                rounded-xl
                bg-slate-800
                hover:bg-slate-700
                transition
              "
            >
              GitHub
            </a>

            <a
              href="/resume.pdf"
              download
              className="
                px-6 py-3
                rounded-xl
                bg-green-600
                hover:bg-green-700
                transition
              "
            >
              Download Resume
            </a>

          </div>

          {/* Back To Top */}
          <div className="text-center mb-8">

            <a
              href="#"
              className="
                inline-block
                px-6 py-3
                rounded-xl
                border border-blue-500
                text-blue-400
                hover:bg-blue-500
                hover:text-white
                transition
              "
            >
              ↑ Back To Top
            </a>

          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 text-center">

            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Krushna Kumbhare.
              All Rights Reserved.
            </p>

            <p className="text-slate-600 text-xs mt-2">
              Built with React, Tailwind CSS, Framer Motion and Vercel.
            </p>

          </div>

        </motion.div>

      </div>
    </footer>
  );
}