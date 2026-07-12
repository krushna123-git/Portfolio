import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h3 className="text-3xl font-bold mb-3">
            Krushna Kumbhare
          </h3>

          <p className="text-slate-400 mb-8">
            Data Analyst • Power BI Developer • SQL Specialist
          </p>

          {/* Social Links */}
          <div className="flex justify-center flex-wrap gap-4 mb-8">

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
          <a
            href="#"
            className="
              inline-block
              px-6 py-3
              rounded-xl
              border
              border-blue-500
              text-blue-400
              hover:bg-blue-500
              hover:text-white
              transition
            "
          >
            ↑ Back To Top
          </a>

          <div className="mt-10 text-slate-500 text-sm">
            © {new Date().getFullYear()} Krushna Kumbhare.
            All Rights Reserved.
          </div>

        </motion.div>

      </div>
    </footer>
  );
}