"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Python Essentials",
    issuer: "Cisco",
    link: "https://drive.google.com/file/d/15KFmmmjHw0d3trpRfz2Ey2XxrzURxfBL/view",
    color: "text-[#38BDF8]",
    bg: "bg-[#38BDF8]/10",
    border: "border-[#38BDF8]/20",
  },
  {
    name: "AWS Cloud Computing",
    issuer: "AWS Academy",
    link: "https://drive.google.com/file/d/1j0s1nsxN0QHT86PBv1cCwf5mOPvN7VlH/view",
    color: "text-[#F59E0B]",
    bg: "bg-[#F59E0B]/10",
    border: "border-[#F59E0B]/20",
  },
  {
    name: "Git & GitHub",
    issuer: "Microsoft",
    link: "https://drive.google.com/file/d/1PXINUH0HiQBI28z0cfu_Ho9Wr4Aw73yy/view",
    color: "text-[#A855F7]",
    bg: "bg-[#A855F7]/10",
    border: "border-[#A855F7]/20",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 relative bg-[#0F172A]/30">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <p className="font-mono text-[#00E5FF] text-sm tracking-widest mb-4">
            05 — CERTIFICATIONS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-white">
            Achievement Vault
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-[#0F172A] border ${cert.border} rounded-3xl p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 overflow-hidden cursor-pointer`}
            >
              {/* Radial Glow */}
              <div className={`absolute -top-24 -left-24 w-48 h-48 rounded-full blur-3xl opacity-20 ${cert.bg} group-hover:opacity-40 transition-opacity`} />
              
              <div className={`w-16 h-16 rounded-2xl ${cert.bg} border ${cert.border} flex items-center justify-center ${cert.color} mb-6 relative z-10 group-hover:scale-110 transition-transform`}>
                <Award size={32} />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">
                {cert.name}
              </h3>
              
              <p className="font-mono text-sm text-[#94A3B8] mb-6 relative z-10">
                {cert.issuer}
              </p>
              
              <div className="mt-auto relative z-10 flex items-center gap-3">
                <div className="flex items-center gap-2 bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#22C55E] px-3 py-1.5 rounded-full font-mono text-xs font-bold">
                  <CheckCircle size={14} /> Verified
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-3 py-1.5 rounded-full font-mono text-xs hover:bg-white/10 transition-colors">
                  <ExternalLink size={14} /> View
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
