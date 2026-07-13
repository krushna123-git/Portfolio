import { useState } from "react";
import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ResumeModal from "./ResumeModal";

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

          {/* LEFT */}
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
            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <a
                href="https://www.linkedin.com/in/kumbhare-krushna-bi"
                target="_blank"
                rel="noreferrer"
                className="
                  px-8
                  py-4
                  bg-blue-600
                  rounded-xl
                  hover:bg-blue-700
                  hover:scale-105
                  transition-all
                  text-center
                "
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/krushna123-git"
                target="_blank"
                rel="noreferrer"
                className="
                  px-8
                  py-4
                  bg-slate-700
                  rounded-xl
                  hover:bg-slate-600
                  hover:scale-105
                  transition-all
                  text-center
                "
              >
                GitHub
              </a>

              <button
                onClick={() => setOpenResume(true)}
                className="
                  px-8
                  py-4
                  bg-green-600
                  rounded-xl
                  hover:bg-green-700
                  hover:scale-105
                  transition-all
                "
              >
                View Resume
              </button>

              <a
                href="/resume.pdf"
                download
                className="
                  px-8
                  py-4
                  bg-cyan-600
                  rounded-xl
                  hover:bg-cyan-700
                  hover:scale-105
                  transition-all
                  text-center
                "
              >
                Download Resume
              </a>

            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative">

              <div
                className="
                  absolute
                  inset-0
                  bg-blue-500
                  blur-[120px]
                  opacity-30
                  rounded-full
                "
              />

              <motion.div
                whileHover={{
                  rotateY: 10,
                  rotateX: 5,
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
                className="
                  relative
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
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