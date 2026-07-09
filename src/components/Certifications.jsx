const certs = [
  "Data Science & Machine Learning - Datamites",
  "Full Stack Web Development - DevTown",
  "Advanced Java",
  "Power BI & SQL Analytics",
];

export default function Certifications() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold mb-10">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {certs.map((cert) => (
          <div
            key={cert}
            className="bg-slate-800 p-6 rounded-2xl"
          >
            {cert}
          </div>
        ))}
      </div>
    </section>
  );
}