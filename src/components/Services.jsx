import { motion } from "framer-motion";

const services = [
  {
    title: "Power BI Development",
    description:
      "Interactive dashboards, KPI scorecards and business intelligence reporting solutions.",
    icon: "📊",
  },
  {
    title: "SQL Optimization",
    description:
      "Advanced SQL queries, stored procedures, performance tuning and database reporting.",
    icon: "⚙️",
  },
  {
    title: "Data Analytics",
    description:
      "Transforming raw data into actionable insights for business decision making.",
    icon: "📈",
  },
  {
    title: "Business Intelligence",
    description:
      "End-to-end BI solutions using Power BI, DAX, Power Query and Fabric.",
    icon: "🚀",
  },
  {
    title: "Microsoft Fabric",
    description:
      "Modern data platform solutions including data integration and analytics.",
    icon: "☁️",
  },
  {
    title: "Reporting Automation",
    description:
      "Automated reporting workflows reducing manual effort and improving accuracy.",
    icon: "⚡",
  },
  {
    title: "Excel VBA",
    description:
      "Excel automation, macros and dynamic reporting solutions.",
    icon: "📑",
  },
  {
    title: "KPI Dashboard Design",
    description:
      "Executive dashboards with meaningful KPIs and performance tracking.",
    icon: "🎯",
  },
];

export default function Services() {
  return (
    <section
      id="services"
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
            Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I Do
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto">
            Helping organizations transform raw data into
            actionable business insights through analytics,
            automation and business intelligence solutions.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              className="
                relative
                overflow-hidden
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-3xl
                p-6
                hover:border-blue-500
                hover:shadow-blue-500/20
                hover:shadow-2xl
                transition-all
                duration-500
              "
            >
              {/* Glow Effect */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-blue-500/10
                  via-cyan-500/10
                  to-purple-500/10
                  opacity-0
                  hover:opacity-100
                  transition
                  duration-500
                "
              />

              <div className="relative z-10">

                <div className="text-5xl mb-5">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-400 text-sm leading-7">
                  {service.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}