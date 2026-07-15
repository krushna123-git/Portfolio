import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2022",
    title: "Full Stack Development Internship",
    company: "DevTown",
    description:
      "Completed Full Stack Web Development Internship and worked on real-world web projects.",
  },
  {
    year: "2023",
    title: "MIS Analyst",
    company: "Professional Experience",
    description:
      "Worked on reporting, data management, Excel automation and business operations support.",
  },
  {
    year: "2024",
    title: "Power BI & SQL Reporting",
    company: "Business Intelligence",
    description:
      "Created dashboards, automated reports and worked extensively with SQL Server and Power BI.",
  },
  {
    year: "2025",
    title: "Dashboard Automation",
    company: "Analytics Solutions",
    description:
      "Built interactive dashboards, KPI reports and business intelligence solutions.",
  },
  {
    year: "2026",
    title: "Data Analyst / Power BI Developer",
    company: "Current Goal",
    description:
      "Actively seeking opportunities in Data Analytics, Business Intelligence and Reporting Automation.",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 uppercase tracking-[5px] mb-3">
            Career Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Professional Timeline
          </h2>

          <p className="text-slate-400 mt-4 max-w-3xl mx-auto">
            My journey from Full Stack Development to
            Business Intelligence and Data Analytics.
          </p>
        </motion.div>

        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-500/30 hidden md:block transform -translate-x-1/2"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className={`
                mb-12
                flex
                items-center
                ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }
              `}
            >
              <div className="w-full md:w-1/2 px-4">

                <div
                  className="
                    bg-white/5
                    backdrop-blur-xl
                    border border-white/10
                    rounded-3xl
                    p-6
                    hover:border-blue-500
                    transition
                  "
                >
                  <span className="text-blue-400 font-bold text-lg">
                    {item.year}
                  </span>

                  <h3 className="text-2xl font-bold mt-2">
                    {item.title}
                  </h3>

                  <p className="text-cyan-400 mt-1">
                    {item.company}
                  </p>

                  <p className="text-slate-400 mt-4">
                    {item.description}
                  </p>
                </div>

              </div>

              {/* Circle */}
              <div className="hidden md:flex w-10 justify-center">
                <div className="w-5 h-5 rounded-full bg-blue-500 border-4 border-slate-950"></div>
              </div>

              <div className="hidden md:block w-1/2"></div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}