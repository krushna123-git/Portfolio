import { motion } from "framer-motion";

const experience = [
  {
    company: "Credence Resource Management",
    role: "MIS Analyst",
    period: "2023 - Present",
    description:
      "Developed Power BI dashboards, automated MIS reports, optimized SQL queries, created KPI dashboards, and delivered business insights to stakeholders.",
    skills: [
      "Power BI",
      "SQL Server",
      "Excel VBA",
      "DAX",
      "Reporting Automation",
    ],
  },

  {
    company: "SoftGrid Computers Pvt Ltd",
    role: "Data Analyst",
    period: "2022 - 2023",
    description:
      "Created analytical reports, maintained data accuracy, automated Excel processes, generated business reports and supported operational decision-making.",
    skills: [
      "Excel",
      "SQL",
      "Data Analysis",
      "Reporting",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-4 md:px-6 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 uppercase tracking-[5px] mb-4">
            Career Journey
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Professional Experience
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto">
            Experience in Business Intelligence, Dashboard
            Development, SQL Development, MIS Reporting,
            Data Analysis and Reporting Automation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Animated Line */}
          <div
            className="
              absolute
              left-4
              md:left-1/2
              top-0
              bottom-0
              w-[3px]
              bg-gradient-to-b
              from-blue-500
              via-cyan-400
              to-blue-500
              md:-translate-x-1/2
            "
          />

          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`relative flex mb-16 ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="
                  absolute
                  left-0
                  md:left-1/2
                  top-10
                  w-8
                  h-8
                  rounded-full
                  bg-blue-500
                  border-4
                  border-slate-950
                  shadow-lg
                  shadow-blue-500/50
                  md:-translate-x-1/2
                  z-20
                "
              />

              {/* Experience Card */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                  rotateY: 3,
                  rotateX: 2,
                  y: -8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="
                  ml-12
                  md:ml-0
                  w-full
                  md:w-[45%]

                  bg-white/5
                  backdrop-blur-2xl

                  border
                  border-white/10

                  rounded-3xl
                  p-6
                  md:p-8

                  shadow-xl

                  hover:border-blue-500
                  hover:shadow-blue-500/20
                  hover:shadow-2xl

                  transition-all
                  duration-500
                "
              >
                <div className="mb-4">
                  <span
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-blue-500/20
                      text-blue-300
                      text-sm
                    "
                  >
                    {job.period}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {job.role}
                </h3>

                <p className="text-cyan-400 mb-5 text-lg">
                  {job.company}
                </p>

                <p className="text-slate-300 leading-8 mb-8">
                  {job.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {job.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{
                        scale: 1.1,
                        y: -3,
                      }}
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-blue-500/20
                        border
                        border-blue-500/20
                        text-blue-300
                        text-sm
                        cursor-pointer
                      "
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

              </motion.div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}