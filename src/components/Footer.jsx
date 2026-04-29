import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { HiArrowUp } from "react-icons/hi";

export default function Footer({ isDark }) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className={`relative py-12 border-t ${isDark ? "bg-surface-950 border-white/10" : "bg-surface-50 border-gray-200"}`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className={`font-display font-extrabold text-lg ${isDark ? "text-white" : "text-gray-900"}`}>
            <span className="text-accent">&lt;</span>Vish<span className="text-accent">/&gt;</span>
          </span>
          <p className={`font-body text-xs mt-1 ${isDark ? "text-white/30" : "text-gray-400"}`}>
            © {new Date().getFullYear()} · Built with React, Tailwind & Framer Motion
          </p>
        </div>

        <div className="flex items-center gap-4">
          {[
  { Icon: FiGithub, href: "https://github.com/vishss11" },
  { Icon: FiLinkedin, href: "https://linkedin.com/in/vishakha-prajapati1" },
  
].map(({ Icon, href }, i) => (
  <motion.a
    key={i}
    href={href}
    target="_blank"
    rel="noreferrer"
    whileHover={{ scale: 1.2, y: -2 }}
    className={`transition-colors ${isDark ? "text-white/30 hover:text-accent" : "text-gray-400 hover:text-accent"}`}
  >
    <Icon size={17} />
  </motion.a>
))}
            
        </div>

        <motion.button
          onClick={scrollTop}
          whileHover={{ scale: 1.1, y: -3, boxShadow: "0 0 15px rgba(0,255,135,0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="w-9 h-9 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center text-accent"
        >
          <HiArrowUp size={16} />
        </motion.button>
      </div>
    </footer>
  );
}
