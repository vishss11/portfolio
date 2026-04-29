import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  const { isDark, toggle } = useTheme();

  return (
    <div className={`noise ${isDark ? "dark" : ""}`}>
      <Navbar isDark={isDark} toggleTheme={toggle} />
      <main>
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <Projects isDark={isDark} />
        <Skills isDark={isDark} />
        <Experience isDark={isDark} />
        <Contact isDark={isDark} />
      </main>
      <Footer isDark={isDark} />
    </div>
  );
}
