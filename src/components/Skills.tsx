"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Frontend Development",
    skills: ["React.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "CRUD"],
  },
  {
    title: "Database Technologies",
    skills: ["MongoDB", "MySQL", "DBMS", "Database Design"],
  },
  {
    title: "Software Engineering",
    skills: ["OOP", "SDLC", "System Design", "Problem Solving", "Debugging"],
  },
  {
    title: "CS Fundamentals",
    skills: ["Data Structures", "Algorithms", "Operating Systems", "Computer Networks"],
  },
  {
    title: "Machine Learning",
    skills: ["Data Analysis", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "MongoDB Atlas"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <p className="font-mono text-[#00E5FF] text-sm tracking-widest mb-4">
            02 — SKILLS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-white">
            Technology Arsenal
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0F172A] border border-white/5 rounded-2xl p-6 hover:border-[#00E5FF]/30 transition-colors group"
            >
              <h3 className="text-white font-bold font-sans mb-4 group-hover:text-[#00E5FF] transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs text-[#94A3B8] bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg group-hover:border-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
