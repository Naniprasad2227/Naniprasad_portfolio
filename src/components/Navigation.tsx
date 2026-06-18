"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Internships & Simulations", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/80 backdrop-blur-md border-b border-[#00E5FF]/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E5FF]/20 to-[#38BDF8]/20 border border-[#00E5FF]/30 flex items-center justify-center font-mono font-bold text-lg text-white group-hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] group-hover:rotate-6 transition-all">
            N<span className="text-[#00E5FF]">M</span>
          </div>
          <span className="font-sans font-bold text-lg text-white">
            Naniprasad
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0F172A]/80 backdrop-blur-md border border-white/5 rounded-full px-2 py-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-mono text-[#94A3B8] hover:text-white hover:bg-white/5 rounded-full transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="https://drive.google.com/file/d/1W0Ioba0e7KhHmnmgfanvKsB0xfmk4YkM/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#00E5FF] hover:bg-[#38BDF8] text-[#050816] px-5 py-2.5 rounded-lg font-mono font-bold text-sm transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] hover:-translate-y-0.5"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-[#0F172A] border-b border-[#00E5FF]/10 p-6 flex flex-col gap-4 shadow-2xl md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#94A3B8] font-mono hover:text-white text-lg py-2 border-b border-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1W0Ioba0e7KhHmnmgfanvKsB0xfmk4YkM/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#00E5FF] text-[#050816] px-5 py-3 rounded-lg font-mono font-bold mt-4"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>
      )}
    </header>
  );
}
