import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-slate-950/80
        backdrop-blur-xl
        border-b
        border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <a
            href="#"
            className="
              text-2xl
              md:text-3xl
              font-extrabold
              text-white
              hover:text-blue-400
              transition
            "
          >
            Krushna
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  text-slate-300
                  hover:text-blue-400
                  transition
                  duration-300
                  font-medium
                "
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <div className="hidden md:block">
            <a
              href="/resume.pdf"
              download
              className="
                px-5
                py-2.5
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                transition
              "
            >
              Resume
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              md:hidden
              text-white
              text-3xl
            "
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            md:hidden
            bg-slate-950/95
            backdrop-blur-xl
            border-t
            border-white/10
          "
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="
                block
                px-6
                py-4
                text-slate-300
                hover:text-blue-400
                border-b
                border-white/5
              "
            >
              {link.name}
            </a>
          ))}

          <div className="p-6">
            <a
              href="/resume.pdf"
              download
              className="
                block
                text-center
                bg-blue-600
                py-3
                rounded-xl
                hover:bg-blue-700
                transition
              "
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}