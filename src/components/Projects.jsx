import { motion } from "framer-motion";

const projects = [
  {
    title: "Tourism Analytics for Thailand",
    description:
      "Interactive Power BI dashboard analyzing tourism trends, visa categories, visitor behavior, top destinations and tourism KPIs.",

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
    ],
  },

  {
    title: "VTONE Fitness Gym Analytics",
    description:
      "Power BI and SQL Server dashboard for fitness member analysis, workout trends, weight loss tracking and membership insights.",

    technologies: [
      "Power BI",
      "SQL Server",
      "DAX",
    ],

    github:
      "https://github.com/krushna123-git/VTONE-FITNESS-GYM",

    dashboard:
      "https://app.powerbi.com/view?r=eyJrIjoiYmEzOGNjYjAtZDJmYi00ZmU1LTlhMjItNjMyNGU0NTk1NTI4IiwidCI6IjgxYWMxZjdiLWJjOWUtNDVmYy1hZTc3LWJlNDEyNzQ2OWUyMCJ9",

    highlights: [
      "Membership Analysis",
      "Workout Tracking",
      "Weight Loss Monitoring",
      "Business KPI Reporting",
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

        {/* Header */}
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
            Business Intelligence solutions built using
            Power BI, SQL Server, DAX, Power Query and
            modern analytics techniques.
          </p>
        </motion.div>

        <div className="space-y-24">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                rotateX: 2,
                rotateY: 2,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="
                group
                bg-white/5
                backdrop-blur-2xl
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

                {/* LEFT */}
                <div className="p-8 md:p-12">

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>

                    <span className="text-green-400 text-sm">
                      Live Dashboard Available
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 leading-8 mb-8">
                    {project.description}
                  </p>

                  {/* Technologies */}
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

                  {/* Highlights */}
                  <div className="mb-10">
                    <h4 className="text-xl font-semibold text-cyan-400 mb-4">
                      Key Highlights
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
                            bg-slate-800/50
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

                  {/* Buttons */}
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
                        hover:scale-105
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
                        hover:scale-105
                        transition-all
                      "
                    >
                      Live Dashboard
                    </a>

                  </div>

                </div>

                {/* RIGHT */}
                <div
                  className="
                    bg-slate-900
                    overflow-hidden
                  "
                >
                  <div
                    className="
                      h-full
                      transition-all
                      duration-700
                      group-hover:scale-105
                    "
                  >
                    <iframe
                      title={project.title}
                      src={project.dashboard}
                      width="100%"
                      height="100%"
                      className="
                        min-h-[350px]
                        md:min-h-[550px]
                      "
                      frameBorder="0"
                      allowFullScreen
                    />
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