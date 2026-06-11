"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    id: 1,
    institution: "SR University",
    degree: "B.Tech CSE",
    duration: "2024 – Present",
    cgpa: "7.7",
    status: "Current",
    color: "from-[#00E5FF] to-[#38BDF8]",
  },
  {
    id: 2,
    institution: "SVS Group of Institutions",
    degree: "Diploma CSE",
    duration: "2021 – 2024",
    cgpa: "9.02",
    status: "Completed",
    color: "from-[#8B5CF6] to-[#A855F7]",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-32 relative bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <p className="font-mono text-[#00E5FF] text-sm tracking-widest mb-4">
            02 — EDUCATION
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-white">
            Academic Background
          </h2>
        </motion.div>

        <div className="max-w-4xl relative">
          {/* Timeline Line */}
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-[#00E5FF]/50 via-white/10 to-transparent" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-20 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[18px] top-2 w-[19px] h-[19px] rounded-full bg-[#050816] border-2 border-[#00E5FF] flex items-center justify-center group-hover:scale-125 transition-transform z-10">
                  <div className="w-2 h-2 rounded-full bg-[#00E5FF] group-hover:shadow-[0_0_10px_#00E5FF]" />
                </div>

                <div className="bg-[#0F172A] border border-white/5 p-8 rounded-2xl hover:border-[#00E5FF]/30 transition-all relative overflow-hidden shadow-xl">
                  {/* Hover Gradient */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
                  
                  <div className="flex justify-between items-start mb-4">
                    <div className="font-mono text-sm text-[#00E5FF] tracking-wider mb-2">
                      {item.duration}
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#94A3B8]">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-[#94A3B8] text-base flex items-center gap-2">
                    <GraduationCap size={18} className="text-[#00E5FF]" />
                    {item.institution}
                  </p>

                  {item.cgpa !== "N/A" && (
                    <div className="mt-6 flex items-center gap-3 bg-[#050816] border border-white/5 w-fit px-5 py-2.5 rounded-xl">
                      <div className="text-sm font-mono text-[#94A3B8]">CGPA</div>
                      <div className="text-lg font-bold font-sans text-white">
                        {item.cgpa}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
