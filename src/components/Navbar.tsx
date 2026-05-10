import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#portfolio" },
  { label: "Services", href: "#services" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/10 py-6"
          : "bg-transparent border-b border-white/10 py-6 mt-6"
      )}
    >
      <div className="max-w-[1024px] mx-auto px-10 flex items-center justify-between pb-5">
        <a href="#" className="font-sans text-[14px] font-[800] tracking-[4px] uppercase text-white">
          Abdullah Al-Hiami
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] uppercase tracking-[1px] text-white/40 hover:text-[#00FF66] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="border border-white/20 px-5 py-[10px] rounded-[4px] uppercase tracking-[1px] text-[10px] text-white hover:bg-white/5 font-bold transition-all"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}
