import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills, personalInfo } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
};

function SkillBar({ name, level, i, isDark }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div ref={ref} custom={i} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className={`font-body text-sm font-medium ${isDark ? "text-white/80" : "text-gray-700"}`}>{name}</span>
        <span className="font-mono text-xs text-accent">{level}%</span>
      </div>
      <div className={`h-1.5 rounded-full overflow-hidden ${isDark ? "bg-white/10" : "bg-gray-200"}`}>
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-cyan-400"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: i * 0.08 + 0.3, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function About({ isDark }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className={`py-28 ${isDark ? "bg-surface-900" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="font-mono text-accent text-sm">01. about</span>
          </div>
          <h2 className={`font-display text-4xl md:text-5xl font-extrabold mb-16 ${isDark ? "text-white" : "text-gray-900"}`}>
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`glass rounded-2xl p-8 mb-8 ${isDark ? "" : "bg-gray-50 border-gray-200"}`}
            >
              <p className={`font-body text-base leading-relaxed mb-4 ${isDark ? "text-white/70" : "text-gray-600"}`}>
                {personalInfo.bio}
              </p>
              <p className={`font-body text-base leading-relaxed ${isDark ? "text-white/70" : "text-gray-600"}`}>
                When I'm not coding, I'm exploring skateboarding tricks or diving deep into the latest in AI/ML research. I believe great software is built at the intersection of empathy, craft, and curiosity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                ["Location", personalInfo.location],
                ["Status", "Open to work"],
                ["Focus", "React.js & AI"],
                ["Email", "06vishakhaprajapti@gmail.com"],
              ].map(([k, v]) => (
                <div key={k} className={`glass rounded-xl p-4 ${isDark ? "" : "bg-gray-50 border-gray-200"}`}>
                  <div className="font-mono text-xs text-accent mb-1">{k}</div>
                  <div className={`font-body text-sm font-medium ${isDark ? "text-white/80" : "text-gray-700"}`}>{v}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className={`font-display font-bold text-lg mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Technical Proficiency
            </motion.h3>
            {skills.map((s, i) => (
              <SkillBar key={s.name} {...s} i={i} isDark={isDark} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
