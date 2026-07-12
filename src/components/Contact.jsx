export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-widest mb-3">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Work Together
          </h2>

          <p className="text-slate-400 mt-4 max-w-3xl mx-auto">
            Interested in Data Analytics, Power BI Development,
            Dashboard Automation, Business Intelligence or SQL projects?
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-slate-400">
              krushnakumbhare.dev@gmail.com
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/kumbhare-krushna-bi"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400"
            >
              View Profile
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-2">GitHub</h3>
            <a
              href="https://github.com/krushna123-git"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400"
            >
              View Projects
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}