export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-12">
        Featured Projects
      </h2>

      {/* Tourism Dashboard */}
      <div className="mb-24">
        <h3 className="text-3xl font-semibold mb-4">
          Tourism Analytics for Thailand
        </h3>

        <p className="text-slate-300 mb-6">
          Interactive Power BI dashboard analyzing
          tourism trends, visa categories, top destinations,
          visitor patterns, and tourism KPIs.
        </p>

        <a
          href="https://github.com/krushna123-git/Tourism-Analytics-for-Thailand"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400"
        >
          View GitHub Repository →
        </a>

        <div className="mt-8 rounded-2xl overflow-hidden">
          <iframe
            title="Thailand Tourism Dashboard"
            src="https://app.powerbi.com/view?r=eyJrIjoiYzkyNmNjNjYtOTNhMC00NTBmLTkwYTgtMDBkYzE3ZjJmNDIxIiwidCI6IjgxYWMxZjdiLWJjOWUtNDVmYy1hZTc3LWJlNDEyNzQ2OWUyMCJ9"
            width="100%"
            height="700"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>

      {/* VTONE Dashboard */}
      <div>
        <h3 className="text-3xl font-semibold mb-4">
          VTONE Fitness Gym Analytics
        </h3>

        <p className="text-slate-300 mb-6">
          Fitness member analytics dashboard developed
          using Power BI and SQL Server.
        </p>

        <a
          href="https://github.com/krushna123-git/VTONE-FITNESS-GYM"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400"
        >
          View GitHub Repository →
        </a>

        <div className="mt-8 rounded-2xl overflow-hidden">
          <iframe
            title="VTONE Fitness Dashboard"
            src="https://app.powerbi.com/view?r=eyJrIjoiYmEzOGNjYjAtZDJmYi00ZmU1LTlhMjItNjMyNGU0NTk1NTI4IiwidCI6IjgxYWMxZjdiLWJjOWUtNDVmYy1hZTc3LWJlNDEyNzQ2OWUyMCJ9"
            width="100%"
            height="700"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}