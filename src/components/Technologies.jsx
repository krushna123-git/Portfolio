import { motion } from "framer-motion";

const technologies = [
  {
    icon: "📊",
    name: "Power BI",
    description: "Interactive dashboards & business intelligence reporting",
  },
  {
    icon: "🗄️",
    name: "SQL Server",
    description: "Database management, queries and optimization",
  },
  {
    icon: "📈",
    name: "Excel",
    description: "Advanced reporting, analytics and automation",
  },
  {
    icon: "⚡",
    name: "DAX",
    description: "Power BI measures, KPIs and calculations",
  },
  {
    icon: "🔄",
    name: "Power Query",
    description: "Data transformation and ETL processes",
  },
  {
    icon: "☁️",
    name: "Microsoft Fabric",
    description: "Modern analytics and unified data platform",
  },
  {
    icon: "🤖",
    name: "Power Automate",
    description: "Workflow automation and business processes",
  },
  {
    icon: "💻",
    name: "Git & GitHub",
    description: "Version control and project management",
  },
];

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="py-24 px-6 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 uppercase tracking-[5px] mb-3">
            Tech Stack
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technologies I Work With
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto">
            Tools and technologies used to build powerful
            dashboards, automate reporting and deliver
            business intelligence solutions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -10,
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
              <div className="text-5xl mb-4">
                {tech.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {tech.name}
              </h3>

              <p className="text-slate-400 text-sm leading-6">
                {tech.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}