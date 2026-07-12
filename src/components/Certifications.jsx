import { motion } from "framer-motion";

const certifications = [
  {
    title: "Data Science & Machine Learning",
    provider: "Datamites",
    year: "2024",
  },
  {
    title: "Full Stack Web Development",
    provider: "DevTown",
    year: "2022",
  },
  {
    title: "Advanced Java",
    provider: "Professional Training",
    year: "2022",
  },
  {
    title: "Power BI & SQL Analytics",
    provider: "Industry Training",
    year: "2023",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 px-4 md:px-6 bg-slate-900"
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
            Learning Journey
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Certifications
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto">
            Professional certifications and training programs
            that strengthened my expertise in Data Analytics,
            Business Intelligence and Software Development.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 8,
                rotateX: 4,
                y: -10,
              }}
              className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-8
                text-center
                hover:border-blue-500
                hover:shadow-2xl
                hover:shadow-blue-500/20
                transition-all
                duration-500
              "
            >
              <div
                className="
                  w-16
                  h-16
                  mx-auto
                  mb-6
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  to-cyan-400
                  flex
                  items-center
                  justify-center
                  text-2xl
                  font-bold
                "
              >
                ✓
              </div>

              <h3 className="text-xl font-bold mb-3">
                {cert.title}
              </h3>

              <p className="text-cyan-400 mb-2">
                {cert.provider}
              </p>

              <p className="text-slate-400">
                {cert.year}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}