import { motion } from "framer-motion";

import tourismImage from "../assets/tourism-dashboard.png";
import fitnessImage from "../assets/fitness-dashboard.png";

const projects = [
  {
    title: "Tourism Analytics for Thailand",
    image: tourismImage,

    description:
      "Interactive Power BI dashboard analyzing tourism trends, visitor behavior, visa categories, top destinations, revenue metrics and tourism KPIs.",

    technologies: [
      "Power BI",
      "SQL Server",
      "DAX",
      "Power Query",
    ],

    github:
      "https://github.com/krushna123-git/Tourism-Analytics-for-Thailand",

    dashboard:
      "https://app.powerbi.com/view?r=eyJrIjoiYzkyNmNjNjYtOTNhMC00NTBmLTkwYTgtMDBkYzE3ZjJmNDIxIiwidCI6IjgxYWMxZjdiLWJjOWUtNDVmYy1hZTc3LWJlNDEyNzQ2OWUyMCJ9",

    highlights: [
      "Tourism Trend Analysis",
      "Visa Category Insights",
      "Top Destination Analytics",
      "Interactive KPI Dashboard",
      "Visitor Behavior Analysis",
    ],
  },

  {
    title: "VTONE Fitness Gym Analytics",
    image: fitnessImage,

    description:
      "Comprehensive fitness analytics dashboard developed using Power BI and SQL Server for membership tracking, workout monitoring, weight-loss analysis and business KPI reporting.",

    technologies: [
      "Power BI",
      "SQL Server",
      "DAX",
      "Data Analytics",
    ],

    github:
      "https://github.com/krushna123-git/VTONE-FITNESS-GYM",

    dashboard:
      "https://app.powerbi.com/view?r=eyJrIjoiYmEzOGNjYjAtZDJmYi00ZmU1LTlhMjItNjMyNGU0NTk1NTI4IiwidCI6IjgxYWMxZjdiLWJjOWUtNDVmYy1hZTc3LWJlNDEyNzQ2OWUyMCJ9",

    highlights: [
      "Membership Analysis",
      "Workout Tracking",
      "Weight Loss Monitoring",
      "KPI Reporting",
      "Performance Analytics",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-4 md:px-6 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 uppercase tracking-[5px] mb-4">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured Projects
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Real-world Business Intelligence solutions,
            dashboard development projects and data
            analytics implementations built using
            Power BI, SQL Server and Microsoft technologies.
          </p>
        </motion.div>

        <div className="space-y-24">

          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="
                group
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                overflow-hidden
                shadow-2xl
                hover:border-blue-500/40
                hover:shadow-blue-500/20
                transition-all
                duration-500
              "
            >
              <div className="grid lg:grid-cols-2">

                {/* IMAGE SIDE */}
                <div className="relative overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-all
                      duration-700
                      hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-slate-950
                      via-transparent
                      to-transparent
                    "
                  />

                  <div className="absolute bottom-6 left-6">
                    <span
                      className="
                        bg-green-500/20
                        text-green-400
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        border
                        border-green-500/30
                      "
                    >
                      Live Dashboard
                    </span>
                  </div>

                </div>

                {/* CONTENT SIDE */}
                <div className="p-8 md:p-12">

                  <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 leading-8 mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
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
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="mb-10">
                    <h4 className="text-xl font-semibold text-cyan-400 mb-4">
                      Project Highlights
                    </h4>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {project.highlights.map((item) => (
                        <motion.div
                          key={item}
                          whileHover={{
                            scale: 1.03,
                            x: 5,
                          }}
                          className="
                            bg-slate-900
                            border
                            border-white/10
                            rounded-xl
                            p-3
                            transition-all
                          "
                        >
                          ✓ {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        text-center
                        px-6
                        py-3
                        rounded-xl
                        bg-blue-600
                        hover:bg-blue-700
                        transition-all
                      "
                    >
                      GitHub Repository
                    </a>

                    <a
                      href={project.dashboard}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        text-center
                        px-6
                        py-3
                        rounded-xl
                        bg-green-600
                        hover:bg-green-700
                        transition-all
                      "
                    >
                      View Live Dashboard
                    </a>

                  </div>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}