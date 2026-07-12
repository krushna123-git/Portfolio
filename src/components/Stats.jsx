import { motion } from "framer-motion";

const stats = [
  { number: "2.5+", label: "Years Experience" },
  { number: "2", label: "Power BI Projects" },
  { number: "10M+", label: "Records Analyzed" },
  { number: "100+", label: "Reports Delivered" },
];


export default function Stats() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Highlights
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 p-8 rounded-2xl text-center shadow-lg"
            >
              <h3 className="text-4xl font-bold text-blue-400">
                {item.number}
              </h3>
              <p className="text-slate-300 mt-2">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}