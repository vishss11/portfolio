import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiBriefcase, HiAcademicCap } from "react-icons/hi";
import { experience } from "../data/portfolio";

function TimelineItem({ item, i, isDark }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isWork = item.type === "work";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`flex gap-6 mb-10 ${i % 2 !== 0 ? "flex-row-reverse" : ""} md:flex-row`}
    >
      {/* Icon dot */}
      <div className="flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 ${
            isWork ? "bg-accent/20 border border-accent/40 text-accent" : "bg-cyan-400/20 border border-cyan-400/40 text-cyan-400"
          }`}
        >
          {isWork ? <HiBriefcase size={18} /> : <HiAcademicCap size={18} />}
        </motion.div>
        <div className={`w-[1px] flex-1 mt-2 ${isDark ? "bg-white/10" : "bg-gray-200"}`} />
      </div>

      {/* Card */}
      <div className={`flex-1 pb-2 ${i % 2 !== 0 ? "text-right md:text-left" : ""}`}>
        <div className={`glass rounded-2xl p-6 transition-all hover:border-accent/30 ${
          isDark ? "" : "bg-gray-50 border-gray-200"
        }`}>
          <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
            <span className={`font-mono text-xs px-2 py-0.5 rounded-md ${
              isWork ? "bg-accent/10 text-accent" : "bg-cyan-400/10 text-cyan-400"
            }`}>
              {item.period}
            </span>
          </div>
          <h3 className={`font-display font-bold text-lg mt-2 mb-0.5 ${isDark ? "text-white" : "text-gray-900"}`}>
            {item.role}
          </h3>
          <div className={`font-body text-sm font-medium mb-3 ${isDark ? "text-accent" : "text-accent"}`}>
            @ {item.company}
          </div>
          <p className={`font-body text-sm leading-relaxed mb-4 ${isDark ? "text-white/55" : "text-gray-500"}`}>
            {item.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {item.tech.map((t) => (
              <span key={t} className={`font-mono text-xs px-2 py-0.5 rounded ${
                isDark ? "bg-white/5 text-white/50 border border-white/10" : "bg-gray-100 text-gray-600"
              }`}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience({ isDark }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className={`py-28 ${isDark ? "bg-surface-950" : "bg-surface-50"}`}>
      <div className="max-w-3xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="font-mono text-accent text-sm">04. experience</span>
          </div>
          <h2 className={`font-display text-4xl md:text-5xl font-extrabold mb-16 ${isDark ? "text-white" : "text-gray-900"}`}>
            My <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        <div>
          {experience.map((item, i) => (
            <TimelineItem key={item.id} item={item} i={i} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
}
