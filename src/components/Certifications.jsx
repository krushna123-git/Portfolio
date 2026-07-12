import { motion } from "framer-motion";

const certifications = [
  {
    title: "Data Science & Machine Learning",
    provider: "Datamites",
    description:
      "Comprehensive training in Data Science, Machine Learning, Data Analysis and predictive modeling.",
  },

  {
    title: "Full Stack Web Development",
    provider: "DevTown",
    description:
      "Hands-on training covering HTML, CSS, JavaScript, React, Node.js and database development.",
  },

  {
    title: "Advanced Java",
    provider: "Professional Training",
    description:
      "Object-oriented programming, collections framework, JDBC and enterprise application concepts.",
  },

  {
    title: "Power BI & SQL Analytics",
    provider: "Professional Learning",
    description:
      "Dashboard development, DAX, Power Query, SQL querying and business intelligence reporting.",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
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
          <p className="text-blue-400 uppercase tracking-widest mb-3">
            Learning Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Certifications
          </h2>

          <p className="text-slate-400 mt-4 max-w-3xl mx-auto">
            Professional certifications and training programs
            that strengthened my expertise in Data Analytics,
            Business Intelligence, Software Development and
            Dashboard Engineering.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-3xl
                p-8
                hover:border-blue-500
                transition-all
              "
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="
                    px-3 py-2
                    rounded-full
                    bg-blue-500/20
                    text-blue-300
                    text-sm
                  "
                >
                  Certified
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-2">
                {cert.title}
              </h3>

              <p className="text-cyan-400 mb-4">
                {cert.provider}
              </p>

              <p className="text-slate-300 leading-7">
                {cert.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}