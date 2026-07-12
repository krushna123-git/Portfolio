export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-slate-400">
          © 2026 Krushna Kumbhare | Data Analyst |
          Power BI Developer | SQL Specialist
        </p>

        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/krushna123-git"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/kumbhare-krushna-bi"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}