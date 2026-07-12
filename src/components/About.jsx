import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-blue-400 uppercase tracking-widest text-center mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Turning Data Into
            <span className="text-blue-500"> Business Insights</span>
          </h2>

          <p className="text-slate-400 text-center max-w-3xl mx-auto text-lg leading-8 mb-16">
            I am a Data Analyst and Power BI Developer with
            3.7+ years of experience in MIS Reporting,
            Dashboard Development, SQL Server, Power BI,
            Excel Automation, Microsoft Fabric and Business
            Intelligence solutions.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-8
              hover:border-blue-500
              transition
            "
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400">
              Professional Summary
            </h3>

            <p className="text-slate-300 leading-8">
              Experienced in developing interactive Power BI
              dashboards, building SQL queries, automating
              reporting processes, analyzing large datasets,
              and creating business intelligence solutions
              that help organizations make data-driven
              decisions.
            </p>

            <p className="text-slate-300 leading-8 mt-5">
              Strong expertise in Power BI, DAX,
              Power Query, SQL Server, Excel,
              VBA, Reporting Automation and KPI
              Dashboard Development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-8
              hover:border-cyan-500
              transition
            "
          >
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              Core Expertise
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-slate-900 rounded-xl p-4 text-center">
                Power BI
              </div>

              <div className="bg-slate-900 rounded-xl p-4 text-center">
                SQL Server
              </div>

              <div className="bg-slate-900 rounded-xl p-4 text-center">
                DAX
              </div>

              <div className="bg-slate-900 rounded-xl p-4 text-center">
                Power Query
              </div>

              <div className="bg-slate-900 rounded-xl p-4 text-center">
                Excel VBA
              </div>

              <div className="bg-slate-900 rounded-xl p-4 text-center">
                Microsoft Fabric
              </div>

              <div className="bg-slate-900 rounded-xl p-4 text-center">
                Dashboard Design
              </div>

              <div className="bg-slate-900 rounded-xl p-4 text-center">
                Data Analysis
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}