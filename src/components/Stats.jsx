import { motion } from "framer-motion";

const stats = [
  {
    number: "3.7+",
    title: "Years Experience",
  },
  {
    number: "20+",
    title: "Dashboards Created",
  },
  {
    number: "10M+",
    title: "Records Analyzed",
  },
  {
    number: "100+",
    title: "Reports Delivered",
  },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="py-20 px-4 md:px-6 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 uppercase tracking-[5px] mb-4">
            Achievements
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Professional Highlights
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{
                scale: 1.05,
                rotateY: 8,
                y: -8,
              }}
              className="
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-3xl
                p-8
                text-center
                hover:border-blue-500
                hover:shadow-blue-500/20
                hover:shadow-2xl
                transition-all
                duration-500
              "
            >
              <h3 className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">
                {item.number}
              </h3>

              <p className="text-slate-300">
                {item.title}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}