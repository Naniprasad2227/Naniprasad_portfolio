"use client";

import { Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="py-12 bg-[#050816] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00E5FF]/20 to-[#38BDF8]/20 border border-[#00E5FF]/30 flex items-center justify-center font-mono font-bold text-sm text-white">
            N<span className="text-[#00E5FF]">M</span>
          </div>
          <span className="font-sans font-bold text-white">
            Macharla Naniprasad
          </span>
        </div>

        <p className="text-[#94A3B8] text-sm text-center max-w-md italic font-serif">
          "Code is the closest thing to a superpower that humans have."
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/Naniprasad2227"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94A3B8] hover:text-[#00E5FF] transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/naniprasad-macharla/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94A3B8] hover:text-[#00E5FF] transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:naniprasadcharla@gmail.com"
            className="text-[#94A3B8] hover:text-[#00E5FF] transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>

        <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mt-4">
          © {new Date().getFullYear()} Macharla Naniprasad · Built with Precision
        </p>
      </div>
    </footer>
  );
}
