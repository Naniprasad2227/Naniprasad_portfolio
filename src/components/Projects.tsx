"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon as Github } from "@/components/Icons";
import { MouseEvent } from "react";

function ProjectCard({
  project,
  index,
}: {
  project: any;
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative bg-[#0F172A] border border-white/5 rounded-3xl overflow-hidden hover:border-[#00E5FF]/20 transition-colors flex flex-col"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 229, 255, 0.05),
              transparent 80%
            )
          `,
        }}
      />
      {project.image && (
        <div className="w-full h-48 sm:h-64 relative overflow-hidden bg-[#050816]">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent" />
        </div>
      )}
      
      <div className="relative z-10 flex flex-col flex-1 p-8 pt-4">
        <div className="font-mono text-xs text-[#00E5FF] mb-4">
          Featured Project
        </div>
        <h3 className="text-3xl font-bold font-sans text-white mb-6">
          {project.title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t: string) => (
            <span
              key={t}
              className="font-mono text-[10px] text-white/70 bg-white/5 px-3 py-1 rounded-full border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 flex-1">
          <div>
            <h4 className="text-sm font-bold text-white mb-3">Features</h4>
            <ul className="space-y-2">
              {project.features.map((f: string) => (
                <li key={f} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                  <span className="text-[#00E5FF] mt-0.5">▹</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          {project.challenges && (
            <div>
              <h4 className="text-sm font-bold text-white mb-3">Challenges Solved</h4>
              <ul className="space-y-2">
                {project.challenges.map((c: string) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                    <span className="text-[#22C55E] mt-0.5">▹</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-sm text-[#94A3B8] hover:text-[#00E5FF] transition-colors"
            >
              <Github size={18} />
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-sm text-[#94A3B8] hover:text-[#00E5FF] transition-colors"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const projects = [
  {
    title: "Complaint Management System",
    image: "/projects/complaint.png",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: [
      "User Authentication",
      "Complaint Registration & Tracking",
      "Admin Dashboard",
      "REST APIs & MVC Architecture",
    ],
    challenges: [
      "API Integration",
      "Debugging",
      "Deployment",
      "MVC Design",
    ],
    github: "https://github.com/Naniprasad2227",
    live: "https://smart-complaint-system-a87sz1ehw-naniprasad2227s-projects.vercel.app/",
  },
  {
    title: "AI Resume Analyzer & Job Matcher",
    image: "/projects/resume-ai.png",
    tech: ["Python", "Generative AI", "LLM APIs"],
    features: [
      "ATS Analysis",
      "Resume Parsing",
      "Job Matching",
      "Skill Gap Detection",
      "Resume Recommendations",
    ],
    challenges: [
      "Prompt Engineering",
      "LLM Integration",
      "Parsing Complex PDFs",
    ],
    github: "https://github.com/Naniprasad2227/AI-Resume-Analyzer-Job-Matcher",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <p className="font-mono text-[#00E5FF] text-sm tracking-widest mb-4">
            04 — PROJECTS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-white">
            Featured Builds
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
