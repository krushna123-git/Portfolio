import { motion } from "framer-motion";

const technicalSkills = [
  { name: "Power BI", level: 95 },
  { name: "SQL Server", level: 90 },
  { name: "DAX", level: 88 },
  { name: "Excel VBA", level: 92 },
  { name: "Power Query", level: 90 },
  { name: "Microsoft Fabric", level: 75 },
];

const otherSkills = [
  "Python",
  "Azure",
  "Power Automate",
  "Dashboard Development",
  "Business Intelligence",
  "Data Analysis",
  "Reporting Automation",
  "KPI Design",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 md:py-24 px-4 md:px-6 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 uppercase tracking-[4px] mb-3 text-sm">
            My Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical Skills
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto text-base md:text-lg">
            Experienced in Business Intelligence, Dashboard
            Development, Data Analysis, SQL Server,
            Power BI, Microsoft Fabric and Reporting Automation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              rotateY: -3,
              rotateX: 2,
            }}
            className="
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-6 md:p-8
              shadow-xl
              hover:border-blue-500
              hover:shadow-blue-500/20
              hover:shadow-2xl
              transition-all
              duration-500
            "
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <h3 className="text-2xl font-bold mb-8 text-blue-400">
              Core Technologies
            </h3>

            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">
                      {skill.name}
                    </span>

                    <span className="text-cyan-400">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${skill.level}%`,
                      }}
                      transition={{
                        duration: 1.5,
                      }}
                      viewport={{ once: true }}
                      className="
                        bg-gradient-to-r
                        from-blue-500
                        via-cyan-400
                        to-blue-300
                        h-3
                        rounded-full
                      "
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              rotateY: 3,
              rotateX: 2,
            }}
            className="
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-6 md:p-8
              shadow-xl
              hover:border-cyan-400
              hover:shadow-cyan-500/20
              hover:shadow-2xl
              transition-all
              duration-500
            "
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <h3 className="text-2xl font-bold mb-8 text-cyan-400">
              Additional Skills
            </h3>

            <div className="grid grid-cols-2 gap-4">

              {otherSkills.map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{
                    scale: 1.08,
                    y: -8,
                    rotateY: 10,
                    rotateX: 5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                  }}
                  className="
                    bg-slate-900/80
                    backdrop-blur-md
                    rounded-2xl
                    p-4
                    text-center
                    border border-white/10
                    hover:border-cyan-400
                    hover:shadow-lg
                    hover:shadow-cyan-500/20
                    cursor-pointer
                    transition-all
                    duration-300
                  "
                >
                  <span className="text-sm md:text-base">
                    {skill}
                  </span>
                </motion.div>
              ))}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}