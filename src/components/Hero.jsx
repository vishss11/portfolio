import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { HiDownload, HiArrowRight } from "react-icons/hi";
import { personalInfo } from "../data/portfolio";

const ROLES = ["Frontend Developer", "React.js Specialist", "UI Craftsperson", "AI/ML Explorer"];

function TypeWriter() {
  const [displayed, setDisplayed] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = ROLES[roleIdx];
    if (!deleting && displayed === current) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed === "") {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    } else {
      timeoutRef.current = setTimeout(
        () => setDisplayed((p) => deleting ? p.slice(0, -1) : current.slice(0, p.length + 1)),
        deleting ? 40 : 80
      );
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, roleIdx]);

  return (
    <span className="text-accent font-mono">
      {displayed}
      <span className="animate-blink text-accent">|</span>
    </span>
  );
}

// Decorative avatar
function Avatar() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      className="relative w-56 h-56 md:w-72 md:h-72 mx-auto"
    >
      {/* Glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-cyan-400/30 blur-2xl scale-110" />
      {/* Border ring */}
      <div className="absolute inset-0 rounded-full border-2 border-accent/40 animate-pulse" />
      {/* Avatar circle */}
      <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-surface-800 to-surface-900 border border-white/10 flex items-center justify-center">
  <img
    src="/profile.jpeg"
    alt="Vish"
    className="w-full h-full object-cover object-center"
  />
  {/* Green badge */}
  <div className="absolute bottom-4 right-4 w-5 h-5 rounded-full bg-accent border-2 border-black" />
</div>
      {/* Orbit decoration */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute inset-[-20px] rounded-full border border-dashed border-accent/20"
      />
      {/* Floating chips */}
      {[
        { label: "React", pos: "-top-4 -right-4", delay: 0 },
        { label: "Python", pos: "-bottom-4 -left-4", delay: 1 },
        { label: "AI/ML", pos: "top-8 -left-12", delay: 0.5 },
      ].map((chip) => (
        <motion.div
          key={chip.label}
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: chip.delay, ease: "easeInOut" }}
          className={`absolute ${chip.pos} bg-surface-800 border border-accent/30 text-accent text-xs font-mono font-medium px-3 py-1 rounded-full shadow-lg`}
        >
          {chip.label}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function Hero({ isDark }) {
  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center overflow-hidden ${
        isDark ? "bg-surface-950" : "bg-surface-50"
      }`}
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,255,135,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,135,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Text */}
          <div className="flex-1 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className={`font-mono text-sm ${isDark ? "text-white/50" : "text-gray-500"}`}>
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`font-display text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05] mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Hi, I'm{" "}
              <span className="text-gradient">{personalInfo.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-xl md:text-2xl font-body mb-6 h-8 ${isDark ? "text-white/70" : "text-gray-600"}`}
            >
              <TypeWriter />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`font-body text-base leading-relaxed mb-10 max-w-lg ${
                isDark ? "text-white/55" : "text-gray-500"
              }`}
            >
              {personalInfo.tagline}. Based in{" "}
              <span className="text-accent">{personalInfo.location}</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0,255,135,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 bg-accent text-black font-display font-bold rounded-xl text-sm tracking-wide"
              >
                Hire Me <HiArrowRight size={16} />
              </motion.a>
              <motion.a
                href={personalInfo.resumeLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2 px-6 py-3 border rounded-xl font-display font-bold text-sm tracking-wide transition-colors ${
                  isDark
                    ? "border-white/20 text-white hover:border-accent hover:text-accent"
                    : "border-gray-300 text-gray-800 hover:border-accent hover:text-accent"
                }`}
              >
                <HiDownload size={16} /> Resume
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-8 mt-12 pt-8 border-t border-white/10"
            >
              {[["2+", "Years Coding"], ["5+", "Projects"], ["50+", "Skills"]].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display font-extrabold text-2xl text-accent">{num}</div>
                  <div className={`font-body text-xs mt-0.5 ${isDark ? "text-white/40" : "text-gray-500"}`}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0"
          >
            <Avatar />
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className={`font-mono text-xs ${isDark ? "text-white/30" : "text-gray-400"}`}>scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-[1px] h-8 bg-gradient-to-b from-accent to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
