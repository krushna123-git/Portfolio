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
      className="py-20 md:py-24 px-4 sm:px-6 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-blue-400 uppercase tracking-widest mb-3 text-sm">
            Career Journey
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Professional Experience
          </h2>

          <p className="text-slate-400 mt-4 max-w-3xl mx-auto text-sm md:text-base">
            Experience in Business Intelligence, Data Analysis,
            MIS Reporting, SQL Development and Dashboard Automation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-[2px] bg-blue-500/30 md:-translate-x-1/2" />

          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`relative flex mb-12 md:mb-16 ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >
              {/* Dot */}
              <div
                className="
                  absolute
                  left-0
                  md:left-1/2
                  top-8
                  w-6
                  h-6
                  bg-blue-500
                  rounded-full
                  border-4
                  border-slate-950
                  md:-translate-x-1/2
                  z-10
                "
              />

              {/* Card */}
              <div
                className="
                  ml-10
                  md:ml-0
                  w-full
                  md:w-[45%]
                  bg-white/5
                  backdrop-blur-lg
                  border
                  border-white/10
                  rounded-3xl
                  p-6
                  md:p-8
                  hover:border-blue-500
                  hover:shadow-blue-500/20
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >
                <p className="text-blue-400 mb-2 font-medium">
                  {job.period}
                </p>

                <h3 className="text-xl md:text-2xl font-bold">
                  {job.role}
                </h3>

                <p className="text-cyan-400 mb-4">
                  {job.company}
                </p>

                <p className="text-slate-300 leading-7 mb-6 text-sm md:text-base">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2 md:gap-3">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        px-3
                        py-2
                        rounded-full
                        bg-blue-500/20
                        text-blue-300
                        text-xs
                        md:text-sm
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}