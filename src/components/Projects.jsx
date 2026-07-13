import { motion } from "framer-motion";

import tourismImage from "../assets/tourism-dashboard.png";
import fitnessImage from "../assets/fitness-dashboard.png";

const projects = [
  {
    title: "Tourism Analytics for Thailand",

    description:
      "Interactive Power BI dashboard analyzing tourism trends, visa categories, visitor behavior, top destinations and tourism KPIs.",

    image: tourismImage,

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

    image: fitnessImage,

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
      className="py-24 px-4 sm:px-6 bg-slate-950"
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
          <p className="text-blue-400 uppercase tracking-[4px] mb-3">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Featured Projects
          </h2>

          <p className="text-slate-400 mt-5 max-w-3xl mx-auto text-lg">
            Real-world Business Intelligence solutions
            developed using Power BI, SQL Server,
            DAX and Reporting Automation.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-16">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{
                rotateX: 2,
                rotateY: 2,
                scale: 1.02,
              }}
              className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                overflow-hidden
                shadow-2xl
                hover:border-blue-500
                transition-all
                duration-500
              "
            >
              <div
                className="
                  grid
                  lg:grid-cols-2
                  gap-0
                "
              >

                {/* Dashboard Image */}
                <div className="overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-110
                    "
                  />

                </div>

                {/* Content */}
                <div className="p-8 md:p-10">

                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>

                    <span className="text-green-400 text-sm">
                      Live Dashboard Available
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold mb-5">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 leading-8 mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 mb-8">

                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-4 py-2
                          rounded-full
                          bg-blue-500/20
                          text-blue-300
                          text-sm
                        "
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  {/* Highlights */}
                  <div className="mb-8">

                    <h4 className="text-cyan-400 font-semibold mb-4">
                      Key Highlights
                    </h4>

                    <div className="grid sm:grid-cols-2 gap-3">

                      {project.highlights.map((item) => (
                        <div
                          key={item}
                          className="
                            bg-slate-900
                            border
                            border-white/10
                            rounded-xl
                            p-3
                          "
                        >
                          ✓ {item}
                        </div>
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
                        px-6 py-3
                        rounded-xl
                        bg-blue-600
                        hover:bg-blue-700
                        transition
                        text-center
                      "
                    >
                      GitHub Repository
                    </a>

                    <a
                      href={project.dashboard}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        px-6 py-3
                        rounded-xl
                        bg-green-600
                        hover:bg-green-700
                        transition
                        text-center
                      "
                    >
                      Live Dashboard
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