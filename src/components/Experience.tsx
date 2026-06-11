"use client";

import { motion } from "framer-motion";
import { Briefcase, Database } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative bg-[#0F172A]/30">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <p className="font-mono text-[#00E5FF] text-sm tracking-widest mb-4">
            03 — INTERNSHIPS & SIMULATIONS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-white">
            Practical Experience
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* EduSkills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-[#0F172A] border border-white/5 rounded-2xl p-8 hover:border-[#00E5FF]/30 transition-all relative overflow-hidden group"
          >
            {/* Top Border Gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00E5FF] to-[#38BDF8] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF]">
                <Briefcase size={24} />
              </div>
              <span className="font-mono text-[10px] bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20 px-3 py-1 rounded-full uppercase tracking-wider">
                Intern
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Full Stack Python Intern
            </h3>
            <p className="font-mono text-sm text-[#94A3B8] mb-6">EduSkills</p>

            <ul className="space-y-3">
              {[
                "Backend Development & Database Management",
                "Frontend Integration",
                "Debugging Applications",
                "Deployment Workflow Optimization",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#94A3B8]">
                  <span className="text-[#00E5FF] mt-1">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/5 flex justify-end">
              <a
                href="https://drive.google.com/file/d/1IQ0UpgPeyODhH8lkr4kFvk1xDHnz1pbc/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-xs text-[#00E5FF] hover:text-[#38BDF8] bg-[#00E5FF]/10 hover:bg-[#00E5FF]/20 px-4 py-2 rounded-lg transition-colors border border-[#00E5FF]/20"
              >
                View Certificate
              </a>
            </div>
          </motion.div>

          {/* British Airways */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="bg-[#0F172A] border border-white/5 rounded-2xl p-8 hover:border-[#A855F7]/30 transition-all relative overflow-hidden group"
          >
            {/* Top Border Gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#A855F7]/10 border border-[#A855F7]/20 flex items-center justify-center text-[#A855F7]">
                <Database size={24} />
              </div>
              <span className="font-mono text-[10px] bg-[#A855F7]/10 text-[#A855F7] border border-[#A855F7]/20 px-3 py-1 rounded-full uppercase tracking-wider">
                Simulation
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Data Science Participant
            </h3>
            <p className="font-mono text-sm text-[#94A3B8] mb-6">
              British Airways
            </p>

            <ul className="space-y-3">
              {[
                "Data Analysis & Interpretation",
                "Extracting Business Insights",
                "Structured Problem Solving",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#94A3B8]">
                  <span className="text-[#A855F7] mt-1">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/5 flex justify-end">
              <a
                href="https://drive.google.com/file/d/1Lft4i2sxin8ANssqUGaJbFlJLo1BdJ-m/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-xs text-[#A855F7] hover:text-[#C084FC] bg-[#A855F7]/10 hover:bg-[#A855F7]/20 px-4 py-2 rounded-lg transition-colors border border-[#A855F7]/20"
              >
                View Certificate
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
