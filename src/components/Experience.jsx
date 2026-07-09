const experience = [
  {
    company: "Credence Resource Management",
    role: "MIS Analyst",
    period: "2023 - Present",
    description:
      "Developed Power BI dashboards, automated MIS reports, optimized SQL queries, and delivered business insights to stakeholders.",
  },
  {
    company: "SoftGrid Computers Pvt Ltd",
    role: "Data Analyst",
    period: "2022 - 2023",
    description:
      "Created reports, maintained data accuracy, developed Excel automation solutions, and supported business operations.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-12">
        Experience
      </h2>

      <div className="space-y-8">
        {experience.map((job, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold">
              {job.role}
            </h3>

            <p className="text-blue-400">
              {job.company}
            </p>

            <p className="text-slate-400 mb-4">
              {job.period}
            </p>

            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}