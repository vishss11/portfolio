import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { HiExternalLink, HiCode } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { projects } from "../data/portfolio";

function ProjectCard({ project, i, isDark }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      <div className={`relative rounded-2xl overflow-hidden border transition-all duration-300 h-full ${
        isDark
          ? "bg-surface-800 border-white/10 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(0,255,135,0.1)]"
          : "bg-white border-gray-200 hover:border-accent/60 hover:shadow-xl"
      }`}>
        {/* Gradient header */}
        <div className={`h-3 bg-gradient-to-r ${project.gradient}`} />

        <div className="p-6">
          {/* Category badge */}
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs px-2 py-1 rounded-md bg-accent/10 text-accent border border-accent/20">
              {project.category}
            </span>
            {project.featured && (
              <span className={`font-mono text-xs px-2 py-1 rounded-md ${isDark ? "bg-white/10 text-white/50" : "bg-gray-100 text-gray-500"}`}>
                ✦ Featured
              </span>
            )}
          </div>

          <h3 className={`font-display font-bold text-xl mb-3 group-hover:text-accent transition-colors ${
            isDark ? "text-white" : "text-gray-900"
          }`}>
            {project.title}
          </h3>
          <p className={`font-body text-sm leading-relaxed mb-5 ${isDark ? "text-white/55" : "text-gray-500"}`}>
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className={`font-mono text-xs px-2 py-1 rounded-md ${
                  isDark ? "bg-white/5 text-white/60 border border-white/10" : "bg-gray-100 text-gray-600"
                }`}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
            <motion.a
              href={project.github}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-1.5 text-xs font-body font-medium transition-colors ${
                isDark ? "text-white/50 hover:text-white" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <FiGithub size={15} /> Code
            </motion.a>
            <motion.a
              href={project.demo}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 text-xs font-body font-medium text-accent hover:text-accent/80 transition-colors"
            >
              <HiExternalLink size={15} /> Live Demo
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects({ isDark }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className={`py-28 ${isDark ? "bg-surface-950" : "bg-surface-50"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="font-mono text-accent text-sm">02. projects</span>
          </div>
          <h2 className={`font-display text-4xl md:text-5xl font-extrabold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
            Selected <span className="text-gradient">Work</span>
          </h2>
          <p className={`font-body max-w-xl mb-10 ${isDark ? "text-white/50" : "text-gray-500"}`}>
            A curated selection of projects I've built — from AI platforms to pixel-perfect UIs.
          </p>

          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((c) => (
              <motion.button
                key={c}
                onClick={() => setFilter(c)}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-1.5 rounded-full font-mono text-xs font-medium transition-all ${
                  filter === c
                    ? "bg-accent text-black"
                    : isDark
                    ? "bg-white/10 text-white/60 hover:bg-white/20"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
              >
                {c}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} i={i} isDark={isDark} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/vishss11"
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 font-body text-sm font-medium border-b pb-0.5 transition-colors ${
              isDark ? "text-white/50 border-white/20 hover:text-accent hover:border-accent" : "text-gray-500 border-gray-300 hover:text-accent hover:border-accent"
            }`}
          >
            <HiCode size={16} /> View all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
