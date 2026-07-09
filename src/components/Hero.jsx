import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">

        <img
          src={profile}
          alt="Krushna"
          className="w-48 h-48 rounded-full mx-auto border-4 border-blue-500"
        />

        <h1 className="text-6xl font-bold mt-6">
          Krushna Kumbhare
        </h1>

        <h2 className="text-2xl text-slate-400 mt-4">
          Data Analyst • Power BI Developer • MIS Executive
        </h2>

        <div className="flex justify-center gap-4 mt-8">

          <a
            href="https://www.linkedin.com/in/kumbhare-krushna-bi"
            target="_blank"
            className="bg-blue-600 px-6 py-3 rounded-xl"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/krushna123-git"
            target="_blank"
            className="bg-slate-700 px-6 py-3 rounded-xl"
          >
            GitHub
          </a>
          <a href="/resume.pdf"
            download
            className="bg-green-600 px-6 py-3 rounded-xl">
            Download Resume
            </a>

        </div>

      </div>
    </section>
  );
}