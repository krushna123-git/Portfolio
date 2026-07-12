import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-blue-400 uppercase tracking-widest mb-4">
            Welcome To My Portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
            Krushna
            <span className="text-blue-500"> Kumbhare</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl">
            Data Analyst • Power BI Developer • SQL Specialist
          </h2>

          <p className="mt-6 text-slate-400 text-lg max-w-xl">
            BCA Graduate with 3.7+ years of experience in MIS,
            Power BI, SQL Server and Business Intelligence.
            Passionate about transforming raw data into
            actionable business insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="https://www.linkedin.com/in/kumbhare-krushna-bi"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 px-6 py-3 rounded-xl hover:scale-105 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/krushna123-git"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-700 px-6 py-3 rounded-xl hover:scale-105 transition"
            >
              GitHub
            </a>

            <a
              href="/resume.pdf"
              download
              className="bg-green-600 px-6 py-3 rounded-xl hover:scale-105 transition"
            >
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 rounded-full" />

            <img
              src={profile}
              alt="Krushna"
              className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-blue-500 object-cover shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}