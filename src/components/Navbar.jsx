import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((item) =>
        document.getElementById(item.id)
      );

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 150;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
      fixed top-0 left-0 w-full z-50
      transition-all duration-500
      ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <a
          href="#"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Krushna
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`
              relative transition duration-300
              ${
                active === link.id
                  ? "text-blue-400"
                  : "text-gray-300"
              }
              `}
            >
              {link.name}

              <span
                className={`
                absolute left-0 -bottom-1 h-[2px]
                bg-blue-400 transition-all duration-300
                ${
                  active === link.id
                    ? "w-full"
                    : "w-0"
                }
                `}
              />
            </a>
          ))}

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/10">

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`
              block px-6 py-4
              ${
                active === link.id
                  ? "text-blue-400"
                  : "text-gray-300"
              }
              `}
            >
              {link.name}
            </a>
          ))}

        </div>
      )}
    </nav>
  );
}