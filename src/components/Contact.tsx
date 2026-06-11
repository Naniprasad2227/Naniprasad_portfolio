"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/Icons";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate sending
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <p className="font-mono text-[#00E5FF] text-sm tracking-widest mb-4">
            07 — CONTACT
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-white">
            Let's Build Something Great
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-8"
          >
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              Open to <strong className="text-white">internships</strong>, freelance projects, and collaboration. Drop me a message — I reply within 24 hours.
            </p>

            <div className="flex flex-col gap-4 mt-4">
              <a href="mailto:naniprasadcharla@gmail.com" className="flex items-center gap-4 bg-[#0F172A] border border-white/5 p-4 rounded-2xl hover:border-[#00E5FF]/30 hover:bg-[#0F172A]/80 transition-all group">
                <div className="w-12 h-12 bg-[#00E5FF]/10 border border-[#00E5FF]/20 rounded-xl flex items-center justify-center text-[#00E5FF] group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-mono text-xs text-[#94A3B8] mb-1 uppercase tracking-wider">Email</p>
                  <p className="text-white font-sans">naniprasadcharla@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:+919014920173" className="flex items-center gap-4 bg-[#0F172A] border border-white/5 p-4 rounded-2xl hover:border-[#00E5FF]/30 hover:bg-[#0F172A]/80 transition-all group">
                <div className="w-12 h-12 bg-[#00E5FF]/10 border border-[#00E5FF]/20 rounded-xl flex items-center justify-center text-[#00E5FF] group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-mono text-xs text-[#94A3B8] mb-1 uppercase tracking-wider">Phone</p>
                  <p className="text-white font-sans">+91 9014920173</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/naniprasad-macharla/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-[#0F172A] border border-white/5 p-4 rounded-2xl hover:border-[#00E5FF]/30 hover:bg-[#0F172A]/80 transition-all group">
                <div className="w-12 h-12 bg-[#00E5FF]/10 border border-[#00E5FF]/20 rounded-xl flex items-center justify-center text-[#00E5FF] group-hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="font-mono text-xs text-[#94A3B8] mb-1 uppercase tracking-wider">LinkedIn</p>
                  <p className="text-white font-sans">naniprasad-macharla</p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-[#0F172A] border border-white/5 p-4 rounded-2xl">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/50">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-mono text-xs text-[#94A3B8] mb-1 uppercase tracking-wider">Location</p>
                  <p className="text-white font-sans">Hanumakonda, Telangana, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <form suppressHydrationWarning onSubmit={handleSubmit} className="bg-[#0F172A] border border-white/5 p-8 rounded-3xl flex flex-col gap-6 shadow-2xl">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
                  </span>
                  <span className="font-mono text-[10px] text-[#22C55E] tracking-widest uppercase">Available</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-mono text-xs text-[#00E5FF] tracking-wider uppercase">Name</label>
                  <input suppressHydrationWarning type="text" id="name" required placeholder="Your name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all font-sans" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-mono text-xs text-[#00E5FF] tracking-wider uppercase">Email</label>
                  <input suppressHydrationWarning type="email" id="email" required placeholder="your@email.com" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all font-sans" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="font-mono text-xs text-[#00E5FF] tracking-wider uppercase">Subject</label>
                <input suppressHydrationWarning type="text" id="subject" required placeholder="Internship / Collaboration" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all font-sans" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono text-xs text-[#00E5FF] tracking-wider uppercase">Message</label>
                <textarea suppressHydrationWarning id="message" required rows={4} placeholder="Tell me about the opportunity..." className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all font-sans resize-y" />
              </div>

              <button
                suppressHydrationWarning
                type="submit"
                disabled={status !== "idle"}
                className="mt-2 flex items-center justify-center gap-2 bg-[#00E5FF] hover:bg-[#38BDF8] disabled:bg-[#00E5FF]/50 text-[#050816] px-6 py-4 rounded-xl font-mono font-bold transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] hover:-translate-y-1 disabled:hover:translate-y-0"
              >
                {status === "idle" && (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
                {status === "sending" && "Transmitting..."}
                {status === "sent" && "Message Sent ✓"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
