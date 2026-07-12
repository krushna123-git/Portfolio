import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    {
      number: 2.5,
      suffix: "+",
      title: "Years Experience",
    },
    {
      number: 10,
      suffix: "+",
      title: "Projects Completed",
    },
    {
      number: 10000000,
      suffix: "+",
      title: "Records Analyzed",
    },
    {
      number: 100,
      suffix: "+",
      title: "Reports Delivered",
    },
  ];

  return (
    <section
      id="stats"
      className="py-24 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-bold mb-16"
        >
          Professional Highlights
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
              }}
              className="
                bg-white/10
                backdrop-blur-xl
                border border-white/10
                rounded-3xl
                p-8
                text-center
                shadow-xl
              "
            >
              <h3 className="text-4xl md:text-5xl font-bold text-blue-400">
                <CountUp
                  end={item.number}
                  duration={3}
                  separator=","
                  decimals={item.number === 2.5 ? 1 : 0}
                />
                {item.suffix}
              </h3>

              <p className="text-slate-300 mt-4 text-lg">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}