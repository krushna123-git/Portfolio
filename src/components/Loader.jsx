import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold"
      >
        <span className="text-blue-500">Krushna</span> Kumbhare
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-slate-400"
      >
        Data Analyst • Power BI Developer
      </motion.p>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "220px" }}
        transition={{ duration: 2 }}
        className="h-1 bg-blue-500 rounded-full mt-8"
      />
    </div>
  );
}