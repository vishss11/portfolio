import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { useScrollProgress } from "../hooks/useScrollProgress";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ isDark, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const { scrolled, progress } = useScrollProgress();

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[100] bg-white/10">
        <motion.div
          className="h-full bg-accent"
          style={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-2xl shadow-black/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            className="font-display font-extrabold text-xl tracking-tight"
          >
            <span className="text-accent">&lt;</span>
            <span className={isDark ? "text-white" : "text-gray-900"}>Vish</span>
            <span className="text-accent">/&gt;</span>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                className={`font-body text-sm font-medium transition-colors relative group ${
                  isDark ? "text-white/60 hover:text-white" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}

            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className={`p-2 rounded-lg transition-colors ${
                isDark ? "bg-white/10 text-yellow-300 hover:bg-white/20" : "bg-black/10 text-indigo-600 hover:bg-black/20"
              }`}
            >
              {isDark ? <RiSunFill size={18} /> : <RiMoonFill size={18} />}
            </motion.button>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,255,135,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="px-4 py-2 bg-accent text-black font-display font-bold text-sm rounded-lg"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${isDark ? "bg-white/10 text-yellow-300" : "bg-black/10 text-indigo-600"}`}
            >
              {isDark ? <RiSunFill size={18} /> : <RiMoonFill size={18} />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className={isDark ? "text-white" : "text-gray-900"}
            >
              {open ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden glass border-t border-white/10"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {navLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`font-body font-medium py-1 border-b border-white/10 ${
                      isDark ? "text-white/80" : "text-gray-700"
                    }`}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
