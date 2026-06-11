"use client";

import { motion } from "framer-motion";
import { Code2, Cpu } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 relative bg-[#0F172A]/30">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <p className="font-mono text-[#00E5FF] text-sm tracking-widest mb-4">
            01 — ABOUT ME
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-white">
            The Engineer Behind The Code
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-8"
          >
            <div className="space-y-6 text-[#94A3B8] text-lg leading-relaxed">
              <p>
                Currently pursuing a <strong className="text-white">B.Tech in Computer Science Engineering</strong> at SR University, I blend software architecture thinking with hands-on full-stack execution.
              </p>
              <p>
                My toolkit spans the <strong className="text-white">MERN Stack</strong>, Python, and Java. I enjoy solving real-world problems, designing efficient systems, and transforming ideas into practical software solutions.
              </p>
              <p>
                I am actively seeking <strong className="text-[#00E5FF]">internship opportunities</strong> where I can contribute to impactful projects while continuously growing as a Software Development Engineer.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-[#0F172A] border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:border-[#00E5FF]/30 transition-colors group shadow-lg">
                <Code2 className="text-[#00E5FF] mb-3 group-hover:scale-110 transition-transform" size={32} />
                <span className="font-bold text-white mb-1">Full Stack</span>
                <span className="text-xs font-mono text-[#94A3B8]">MERN & Python</span>
              </div>
              <div className="bg-[#0F172A] border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:border-[#38BDF8]/30 transition-colors group shadow-lg">
                <Cpu className="text-[#38BDF8] mb-3 group-hover:scale-110 transition-transform" size={32} />
                <span className="font-bold text-white mb-1">System Design</span>
                <span className="text-xs font-mono text-[#94A3B8]">Scalable Arch</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Code Snippet */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF]/10 to-[#A855F7]/10 blur-3xl rounded-full" />
            
            <div className="bg-[#050816] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative z-10">
              {/* Fake Window Header */}
              <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <p className="ml-4 font-mono text-xs text-[#94A3B8] flex-1 text-center pr-12">naniprasad.json</p>
              </div>
              
              {/* Code Content */}
              <div className="p-6 overflow-x-auto text-sm leading-relaxed font-mono">
                <pre>
                  <code>
                    <span className="text-[#38BDF8]">{"{"}</span>
                    <br />
                    <span className="text-white">  "name"</span>: <span className="text-[#22C55E]">"Macharla Naniprasad"</span>,
                    <br />
                    <span className="text-white">  "role"</span>: <span className="text-[#22C55E]">"Software Development Engineer"</span>,
                    <br />
                    <span className="text-white">  "location"</span>: <span className="text-[#22C55E]">"Telangana, India"</span>,
                    <br />
                    <span className="text-white">  "education"</span>: <span className="text-[#22C55E]">"B.Tech CSE @ SR University"</span>,
                    <br />
                    <span className="text-white">  "skills"</span>: <span className="text-[#38BDF8]">{"["}</span>
                    <br />
                    <span className="text-[#A855F7]">    "MERN Stack"</span>, <span className="text-[#A855F7]">"Python"</span>, <span className="text-[#A855F7]">"Java"</span>,
                    <br />
                    <span className="text-[#A855F7]">    "System Design"</span>, <span className="text-[#A855F7]">"REST APIs"</span>
                    <br />
                    <span className="text-[#38BDF8]">  {"]"}</span>,
                    <br />
                    <span className="text-white">  "interests"</span>: <span className="text-[#38BDF8]">{"["}</span>
                    <br />
                    <span className="text-[#F59E0B]">    "Building scalable systems"</span>,
                    <br />
                    <span className="text-[#F59E0B]">    "Optimizing performance"</span>,
                    <br />
                    <span className="text-[#F59E0B]">    "Learning new architectures"</span>
                    <br />
                    <span className="text-[#38BDF8]">  {"]"}</span>
                    <br />
                    <span className="text-[#38BDF8]">{"}"}</span>
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
