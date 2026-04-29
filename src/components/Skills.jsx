import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiReact, SiJavascript, SiTypescript, SiPython,
  SiTailwindcss, SiGit, SiVisualstudiocode, SiFigma,
  SiNodedotjs, SiMongodb, SiVercel, SiGithub,
  SiHtml5, SiCss, SiFramer, SiDocker
} from "react-icons/si";

const TECH = [
  { name: "React.js", Icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", Icon: SiFramer, color: "#BB4BFF" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: SiCss, color: "#1572B6" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Vercel", Icon: SiVercel, color: "#cccccc" },
];

export default function Skills({ isDark }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className={`py-28 ${isDark ? "bg-surface-900" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="font-mono text-accent text-sm">03. skills</span>
          </div>
          <h2 className={`font-display text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className={`font-body max-w-xl mb-16 ${isDark ? "text-white/50" : "text-gray-500"}`}>
            Tools and technologies I work with to build great products.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4">
          {TECH.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.08, y: -4 }}
              className={`group flex flex-col items-center gap-3 p-5 rounded-2xl cursor-default transition-all duration-200 ${
                isDark
                  ? "glass hover:bg-white/10 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(0,255,135,0.08)]"
                  : "bg-gray-50 border border-gray-200 hover:border-accent/40 hover:shadow-md"
              }`}
            >
              <tech.Icon size={32} style={{ color: tech.color }} className="transition-transform group-hover:scale-110" />
              <span className={`font-mono text-xs font-medium text-center leading-tight ${isDark ? "text-white/60" : "text-gray-600"}`}>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
