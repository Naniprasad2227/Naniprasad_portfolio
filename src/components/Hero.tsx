"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/Icons";
import { useEffect, useState } from "react";

const typingWords = [
  "Software Developer",
  "Full Stack Engineer",
  "MERN Developer",
  "Problem Solver",
  "Machine Learning Enthusiast",
];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = typingWords[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === word) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % typingWords.length);
      } else {
        setCurrentText(
          word.substring(0, currentText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Grid & Particles */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 0%, black 20%, transparent 100%)",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Text */}
        <div className="flex flex-col gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-full px-4 py-2"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#22C55E]"></span>
            </span>
            <span className="text-[#22C55E] font-mono text-xs font-bold tracking-wider">
              OPEN TO INTERNSHIPS
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="font-mono text-[#00E5FF] mb-2 tracking-widest text-sm">
              // SOFTWARE ENGINEER
            </p>
            <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tight text-white leading-[1.1]">
              Macharla <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#38BDF8]">
                Naniprasad
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-8 flex items-center gap-2 text-xl md:text-2xl font-mono text-[#94A3B8]"
          >
            <span className="text-[#00E5FF]">→</span>
            <span>{currentText}</span>
            <span className="w-2.5 h-6 bg-[#00E5FF] animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-[#94A3B8] text-lg max-w-lg leading-relaxed"
          >
            Building scalable full-stack applications, data-driven systems, and
            intelligent software — one commit at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 bg-[#00E5FF] hover:bg-[#38BDF8] text-[#050816] px-6 py-3 rounded-xl font-mono font-bold transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] hover:-translate-y-1"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="https://drive.google.com/file/d/1waNmA3_tZh3vM1yTFxQzzU8mzXHrHdG0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-transparent border border-[#00E5FF]/40 text-[#00E5FF] hover:bg-[#00E5FF]/10 px-6 py-3 rounded-xl font-mono font-bold transition-all hover:-translate-y-1"
            >
              <Download size={18} /> Resume
            </a>
            <div className="flex items-center gap-2 ml-2">
              <a
                href="https://github.com/Naniprasad2227"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#94A3B8] hover:text-[#00E5FF] hover:border-[#00E5FF]/40 hover:bg-[#00E5FF]/10 transition-all hover:-translate-y-1"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/naniprasad-macharla/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#94A3B8] hover:text-[#00E5FF] hover:border-[#00E5FF]/40 hover:bg-[#00E5FF]/10 transition-all hover:-translate-y-1"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column - HUD / Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          {/* Abstract HUD */}
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF]/10 to-[#38BDF8]/10 rounded-full blur-3xl animate-pulse" />
            
            {/* Outer Ring */}
            <div className="absolute inset-0 border border-[#00E5FF]/20 rounded-full animate-[spin_20s_linear_infinite] border-dashed" />
            <div className="absolute inset-4 border border-[#38BDF8]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Center Core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-[#0F172A]/80 backdrop-blur-xl border border-[#00E5FF]/40 rounded-2xl flex flex-col items-center justify-center shadow-[0_0_30px_rgba(0,229,255,0.2)]">
                <span className="text-4xl font-black font-sans text-[#00E5FF]">NM</span>
                <span className="text-[10px] font-mono tracking-[0.3em] text-[#94A3B8] mt-2">SYS_CORE</span>
              </div>
            </div>

            {/* Orbiting Stats */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute top-[10%] left-[10%] -rotate-[360deg]">
                <div className="bg-[#0F172A]/90 backdrop-blur-md border border-[#00E5FF]/30 p-4 rounded-xl shadow-xl flex flex-col items-center gap-1">
                  <span className="text-2xl font-bold font-sans text-white">7.7</span>
                  <span className="text-[10px] font-mono text-[#00E5FF] tracking-wider">B.TECH CGPA</span>
                </div>
              </div>
              <div className="absolute bottom-[10%] right-[10%] -rotate-[360deg]">
                <div className="bg-[#0F172A]/90 backdrop-blur-md border border-[#00E5FF]/30 p-4 rounded-xl shadow-xl flex flex-col items-center gap-1">
                  <span className="text-2xl font-bold font-sans text-white">9.02</span>
                  <span className="text-[10px] font-mono text-[#00E5FF] tracking-wider">DIPLOMA CGPA</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom Ticker */}
      <div className="absolute bottom-0 w-full border-t border-[#00E5FF]/10 bg-[#00E5FF]/[0.02] py-3 overflow-hidden">
        <div className="flex w-[200%] animate-[ticker_30s_linear_infinite]">
          {[...Array(2)].map((_, j) => (
            <div key={j} className="flex items-center gap-12 px-6 w-1/2 justify-around">
              {["MERN STACK", "PYTHON", "JAVA", "NODE.JS", "REACT.JS", "MONGODB", "REST API", "MACHINE LEARNING"].map((tech, i) => (
                <div key={i} className="flex items-center gap-12">
                  <span className="font-mono text-xs font-bold tracking-widest text-[#94A3B8]">{tech}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]/50" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
