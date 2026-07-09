const skills = [
  "Power BI",
  "DAX",
  "SQL Server",
  "Microsoft Fabric",
  "Python",
  "Excel VBA",
  "Azure",
  "Power Automate",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-10">
        Skills
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-slate-800 p-6 rounded-2xl text-center hover:scale-105 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}