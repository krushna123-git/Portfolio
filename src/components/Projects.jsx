import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [selectedProject, setSelectedProject] = useState(null);

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

          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                y: -8,
              }}
              className="
                relative
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                overflow-hidden
                shadow-2xl
                hover:border-blue-500
                hover:shadow-blue-500/30
                hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
                transition-all
                duration-500
              "
            >
              <div className="grid lg:grid-cols-2 gap-0">

                {/* Dashboard Image */}
                <div
                  className="
                    relative
                    overflow-hidden
                    cursor-pointer
                    group
                  "
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-110
                      group-hover:brightness-110
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-transparent
                      to-transparent
                      opacity-0
                      group-hover:opacity-100
                      transition
                      duration-500
                    "
                  />
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">

                  {/* Animated Badge */}
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="
                      inline-flex
                      items-center
                      gap-3
                      mb-5
                      px-4
                      py-2
                      rounded-full
                      bg-green-500/10
                      border
                      border-green-500/20
                    "
                  >
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>

                    <span className="text-green-400 text-sm font-medium">
                      Live Dashboard Available
                    </span>
                  </motion.div>

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
                            hover:border-blue-500
                            transition
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
                        hover:scale-105
                        transition-all
                        duration-300
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
                        hover:scale-105
                        transition-all
                        duration-300
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

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              bg-black/80
              backdrop-blur-md
              z-50
              flex
              items-center
              justify-center
              p-4
            "
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="
                bg-slate-900
                border
                border-white/10
                rounded-3xl
                overflow-hidden
                max-w-5xl
                w-full
              "
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full max-h-[500px] object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-slate-300 mb-8">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-4">

                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700"
                  >
                    GitHub Repository
                  </a>

                  <a
                    href={selectedProject.dashboard}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700"
                  >
                    Open Dashboard
                  </a>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 rounded-xl bg-slate-700 hover:bg-slate-600"
                  >
                    Close
                  </button>

                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}