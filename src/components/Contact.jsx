import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { personalInfo } from "../data/portfolio";

const socials = [
  { Icon: FiGithub,   label: "GitHub",   href: personalInfo.github },
  { Icon: FiLinkedin, label: "LinkedIn",  href: personalInfo.linkedin },
];

export default function Contact({ isDark }) {
  const ref     = useRef(null);
  const formRef = useRef(null);
  const inView  = useInView(ref, { once: true, margin: "-80px" });

  // ✅ FIXED: state keys match input name attributes exactly
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_iy2utrf",   // ✅ your Service ID
        "template_uk20u8f",  // ✅ FIXED typo (was templates_)
        formRef.current,
        "BiqwGCNXBMMADXt8c"  // ✅ your Public Key
      );
      setStatus("sent");
      // ✅ FIXED: reset uses correct keys
      setForm({ from_name: "", from_email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const inputClass = `w-full px-4 py-3 rounded-xl font-body text-sm outline-none transition-all border focus:border-accent focus:ring-1 focus:ring-accent/30 ${
    isDark
      ? "bg-white/5 border-white/10 text-white placeholder-white/30"
      : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
  }`;

  return (
    <section id="contact" className={`py-28 ${isDark ? "bg-surface-900" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="font-mono text-accent text-sm">05. contact</span>
          </div>
          <h2 className={`font-display text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className={`font-body max-w-xl mb-16 ${isDark ? "text-white/50" : "text-gray-500"}`}>
            I'm actively looking for frontend roles. Whether you have a project,
            opportunity, or just want to chat — my inbox is open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* ── Info side ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-4 mb-10">
              {[
                { Icon: HiMail,           label: "Email",    value: personalInfo.email },
                { Icon: HiLocationMarker, label: "Location", value: personalInfo.location },
              ].map(({ Icon, label, value }) => (
                <div
                  key={label}
                  className={`flex items-center gap-4 glass rounded-xl p-4 ${
                    isDark ? "" : "bg-gray-50 border-gray-200"
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-accent mb-0.5">{label}</div>
                    <div className={`font-body text-sm ${isDark ? "text-white/80" : "text-gray-700"}`}>
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className={`font-mono text-xs mb-4 ${isDark ? "text-white/40" : "text-gray-400"}`}>
                Find me on
              </p>
              <div className="flex gap-3">
                {socials.map(({ Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-11 h-11 rounded-xl flex items-center justify-center glass transition-all hover:border-accent/50 hover:text-accent ${
                      isDark ? "text-white/60" : "text-gray-500"
                    }`}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Form side ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {status === "sent" ? (
              // ── Success screen ──
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="h-full flex flex-col items-center justify-center gap-4 py-16 text-center"
              >
                <div className="text-5xl">🚀</div>
                <h3 className={`font-display font-bold text-xl ${isDark ? "text-white" : "text-gray-900"}`}>
                  Message sent!
                </h3>
                <p className={`font-body text-sm ${isDark ? "text-white/50" : "text-gray-500"}`}>
                  I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-accent font-mono text-xs underline underline-offset-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              // ── Contact form ──
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">

                  {/* Name */}
                  <div>
                    <label className={`block font-mono text-xs mb-1.5 ${isDark ? "text-white/40" : "text-gray-500"}`}>
                      Name
                    </label>
                    <input
                      name="from_name"
                      value={form.from_name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className={`block font-mono text-xs mb-1.5 ${isDark ? "text-white/40" : "text-gray-500"}`}>
                      Email
                    </label>
                    <input
                      name="from_email"
                      type="email"
                      value={form.from_email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className={`block font-mono text-xs mb-1.5 ${isDark ? "text-white/40" : "text-gray-500"}`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell me about your project..."
                    className={`${inputClass} resize-none`}
                    required
                  />
                </div>

                {/* Error message */}
                {status === "error" && (
                  <p className="text-red-400 font-mono text-xs">
                    Something went wrong. Please email me directly at{" "}
                    <span className="underline">{personalInfo.email}</span>
                  </p>
                )}

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(0,255,135,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 bg-accent text-black font-display font-bold text-sm rounded-xl tracking-wide disabled:opacity-60"
                >
                  {status === "sending" ? "Sending... ⏳" : "Send Message →"}
                </motion.button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}