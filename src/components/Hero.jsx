import { useState } from "react";
import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ResumeModal from "./ResumeModal";

const floatingSkills = [
  {
    name: "Power BI",
    className: "top-4 -left-8",
  },
  {
    name: "SQL",
    className: "top-16 -right-8",
  },
  {
    name: "Excel",
    className: "bottom-24 -left-10",
  },
  {
    name: "DAX",
    className: "bottom-10 -right-8",
  },
  {
    name: "Fabric",
    className: "top-1/2 -right-14",
  },
];

export default function Hero() {
  const [openResume, setOpenResume] = useState(false);

  return (
    <>
      <ResumeModal
        isOpen={openResume}
        onClose={() => setOpenResume(false)}
      />

      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-24"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Availability Badge */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-green-500/10
                border
                border-green-500/30
                text-green-400
                mb-6
              "
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Available for Opportunities
            </div>

            <p className="text-blue-400 uppercase tracking-[4px] mb-4">
              Welcome To My Portfolio
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
              Krushna
              <span className="text-blue-500"> Kumbhare</span>
            </h1>

            <div className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 text-cyan-400 min-h-[60px]">
              <TypeAnimation
                sequence={[
                  "Data Analyst",
                  2000,
                  "Power BI Developer",
                  2000,
                  "SQL Specialist",
                  2000,
                  "Microsoft Fabric Enthusiast",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="mt-8 text-slate-400 text-lg leading-8 max-w-2xl">
              BCA Graduate with 3.7+ years of experience in MIS,
              Business Intelligence, Power BI, SQL Server,
              Dashboard Development and Reporting Automation.
              Passionate about transforming raw data into
              actionable business insights.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="https://www.linkedin.com/in/kumbhare-krushna-bi"
                target="_blank"
                rel="noreferrer"
                className="
                  flex items-center gap-2
                  px-6 py-4
                  bg-blue-600
                  rounded-xl
                  hover:bg-blue-700
                  hover:scale-105
                  transition-all
                "
              >
                🔗 LinkedIn
              </a>

              <a
                href="https://github.com/krushna123-git"
                target="_blank"
                rel="noreferrer"
                className="
                  flex items-center gap-2
                  px-6 py-4
                  bg-slate-700
                  rounded-xl
                  hover:bg-slate-600
                  hover:scale-105
                  transition-all
                "
              >
                💻 GitHub
              </a>

              <button
                onClick={() => setOpenResume(true)}
                className="
                  flex items-center gap-2
                  px-6 py-4
                  bg-green-600
                  rounded-xl
                  hover:bg-green-700
                  hover:scale-105
                  transition-all
                "
              >
                📄 View Resume
              </button>

              <a
                href="/resume.pdf"
                download
                className="
                  flex items-center gap-2
                  px-6 py-4
                  bg-cyan-600
                  rounded-xl
                  hover:bg-cyan-700
                  hover:scale-105
                  transition-all
                "
              >
                ⬇ Download Resume
              </a>

            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-3 gap-4 mt-10">

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 text-center border border-white/10">
                <div className="text-3xl mb-2">📊</div>
                <h4 className="text-2xl font-bold">20+</h4>
                <p className="text-slate-400 text-sm">
                  Dashboards
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 text-center border border-white/10">
                <div className="text-3xl mb-2">🗄️</div>
                <h4 className="text-2xl font-bold">10M+</h4>
                <p className="text-slate-400 text-sm">
                  Records
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 text-center border border-white/10">
                <div className="text-3xl mb-2">📑</div>
                <h4 className="text-2xl font-bold">20+</h4>
                <p className="text-slate-400 text-sm">
                  Reports
                </p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative">

              {floatingSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                  }}
                  className={`
                    absolute
                    ${skill.className}
                    px-4 py-2
                    rounded-full
                    bg-white/10
                    backdrop-blur-xl
                    border border-white/10
                    text-blue-300
                    text-sm
                    hidden md:block
                  `}
                >
                  {skill.name}
                </motion.div>
              ))}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-blue-500
                  via-cyan-500
                  to-purple-500
                  blur-[120px]
                  opacity-30
                  rounded-full
                  animate-pulse
                "
              />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                whileHover={{
                  scale: 1.04,
                }}
                className="
                  relative
                  bg-white/5
                  backdrop-blur-xl
                  border border-white/10
                  rounded-full
                  p-3
                "
              >
                <img
                  src={profile}
                  alt="Krushna Kumbhare"
                  className="
                    w-64
                    h-64
                    sm:w-80
                    sm:h-80
                    lg:w-96
                    lg:h-96
                    rounded-full
                    object-cover
                    border-4
                    border-blue-500
                    shadow-2xl
                  "
                />
              </motion.div>

            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}