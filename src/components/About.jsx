import { motion } from "framer-motion";

const expertise = [
  "Power BI",
  "SQL Server",
  "DAX",
  "Power Query",
  "Excel VBA",
  "Microsoft Fabric",
  "Dashboard Design",
  "Data Analysis",
];

const achievements = [
  {
    value: "3.7+",
    label: "Years Experience",
  },
  {
    value: "10M+",
    label: "Records Analyzed",
  },
  {
    value: "20+",
    label: "Dashboards Created",
  },
  {
    value: "100+",
    label: "Reports Delivered",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 md:px-6 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 uppercase tracking-[5px] mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Turning Data Into
            <span className="text-blue-500">
              {" "}Business Insights
            </span>
          </h2>

          <p className="text-slate-400 max-w-4xl mx-auto text-lg leading-8">
            Data Analyst and Power BI Developer with experience
            in Business Intelligence, SQL Server, Dashboard
            Development, Reporting Automation, Microsoft Fabric,
            Data Visualization and Analytics Solutions.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          {achievements.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{
                scale: 1.05,
                rotateY: 8,
                y: -8,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-3xl
                p-6
                text-center
                hover:border-blue-500
                hover:shadow-blue-500/20
                hover:shadow-2xl
                transition-all
                duration-500
              "
            >
              <h3 className="text-3xl md:text-4xl font-bold text-blue-400">
                {item.value}
              </h3>

              <p className="text-slate-300 mt-2">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              rotateY: -3,
              y: -5,
            }}
            className="
              bg-white/5
              backdrop-blur-2xl
              border border-white/10
              rounded-3xl
              p-8
              hover:border-blue-500
              hover:shadow-blue-500/20
              hover:shadow-2xl
              transition-all
              duration-500
            "
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400">
              Professional Summary
            </h3>

            <p className="text-slate-300 leading-8">
              Experienced in developing interactive Power BI
              dashboards, building SQL queries, automating
              reporting processes, analyzing large datasets,
              and creating business intelligence solutions
              that support data-driven decision making.
            </p>

            <p className="text-slate-300 leading-8 mt-5">
              Strong expertise in Power BI, DAX, Power Query,
              SQL Server, Excel VBA, Microsoft Fabric,
              Dashboard Development and KPI Reporting.
            </p>
          </motion.div>

          {/* Core Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              rotateY: 3,
              y: -5,
            }}
            className="
              bg-white/5
              backdrop-blur-2xl
              border border-white/10
              rounded-3xl
              p-8
              hover:border-cyan-400
              hover:shadow-cyan-500/20
              hover:shadow-2xl
              transition-all
              duration-500
            "
          >
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              Core Expertise
            </h3>

            <div className="grid grid-cols-2 gap-4">

              {expertise.map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{
                    scale: 1.08,
                    rotateY: 10,
                    y: -5,
                  }}
                  className="
                    bg-slate-900/80
                    border border-white/10
                    rounded-xl
                    p-4
                    text-center
                    hover:border-cyan-400
                    hover:shadow-lg
                    hover:shadow-cyan-500/20
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  {skill}
                </motion.div>
              ))}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}