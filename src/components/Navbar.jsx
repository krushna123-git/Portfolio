import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-slate-950/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="font-bold text-2xl text-blue-400">
          Krushna
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg">
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-blue-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-white/10">
          <div className="flex flex-col p-6 gap-4">

            <a
              href="#about"
              onClick={() => setOpen(false)}
            >
              About
            </a>

            <a
              href="#skills"
              onClick={() => setOpen(false)}
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={() => setOpen(false)}
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}