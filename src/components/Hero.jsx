import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  const skills = ["Power BI", "SQL Server", "Excel", "DAX"];

  return (
    <section
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      pt-24
      pb-12
      relative
      overflow-hidden
    "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-blue-400 uppercase tracking-[4px] mb-4">
            Welcome To My Portfolio
          </p>

          <h1 className="font-extrabold leading-tight">
            <span className="block text-5xl sm:text-6xl md:text-7xl text-white">
              Krushna
            </span>

            <span
              className="
              block
              text-5xl
              sm:text-6xl
              md:text-7xl
              bg-gradient-to-r
              from-blue-400
              via-cyan-400
              to-purple-500
              bg-clip-text
              text-transparent
            "
            >
              Kumbhare
            </span>
          </h1>

          <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-medium text-slate-300">
            Data Analyst • Power BI Developer • SQL Specialist
          </h2>

          <p className="mt-6 text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">
            BCA Graduate with 3.7+ years of experience in MIS,
            Power BI, SQL Server, Excel, DAX and Business Intelligence.
            Passionate about transforming complex datasets into
            actionable business insights and interactive dashboards.
          </p>

          {/* SKILL BADGES */}
          <div className="flex flex-wrap gap-3 mt-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="
                  px-4 py-2
                  rounded-full
                  bg-white/10
                  backdrop-blur-md
                  border border-white/10
                  text-sm
                  text-blue-300
                "
              >
                {skill}
              </motion.div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-10">

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
                shadow-lg
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
                bg-slate-700
                hover:bg-slate-600
                transition
                shadow-lg
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
                shadow-lg
              "
            >
              Download Resume
            </a>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center mt-10 lg:mt-0"
        >
          <div className="relative">

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
              className="
                absolute
                -inset-6
                rounded-full
                border
                border-blue-500/30
              "
            />

            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 rounded-full" />

            <img
              src={profile}
              alt="Krushna"
              className="
                relative
                w-64 h-64
                sm:w-80 sm:h-80
                md:w-96 md:h-96
                rounded-full
                border-4
                border-blue-500
                object-cover
                shadow-2xl
              "
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}