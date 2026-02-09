"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/data/content";
import { useRef } from "react";

const codeLines = [
  { indent: 0, tokens: [{ text: "const", color: "#c792ea" }, { text: " app ", color: "#eeffff" }, { text: "=", color: "#89ddff" }, { text: " createApp", color: "#82aaff" }, { text: "({", color: "#89ddff" }] },
  { indent: 1, tokens: [{ text: "name", color: "#f07178" }, { text: ":", color: "#89ddff" }, { text: ' "NurseLite"', color: "#c3e88d" }, { text: ",", color: "#89ddff" }] },
  { indent: 1, tokens: [{ text: "stack", color: "#f07178" }, { text: ":", color: "#89ddff" }, { text: " [", color: "#89ddff" }, { text: '"NestJS"', color: "#c3e88d" }, { text: ",", color: "#89ddff" }, { text: ' "Ionic"', color: "#c3e88d" }, { text: ",", color: "#89ddff" }, { text: ' "MongoDB"', color: "#c3e88d" }, { text: "]", color: "#89ddff" }, { text: ",", color: "#89ddff" }] },
  { indent: 1, tokens: [{ text: "tests", color: "#f07178" }, { text: ":", color: "#89ddff" }, { text: " 768", color: "#f78c6c" }, { text: ",", color: "#89ddff" }] },
  { indent: 1, tokens: [{ text: "coverage", color: "#f07178" }, { text: ":", color: "#89ddff" }, { text: ' "82%"', color: "#c3e88d" }, { text: ",", color: "#89ddff" }] },
  { indent: 1, tokens: [{ text: "uptime", color: "#f07178" }, { text: ":", color: "#89ddff" }, { text: ' "99.9%"', color: "#c3e88d" }, { text: ",", color: "#89ddff" }] },
  { indent: 0, tokens: [{ text: "});", color: "#89ddff" }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ text: "await", color: "#c792ea" }, { text: " app", color: "#eeffff" }, { text: ".", color: "#89ddff" }, { text: "deploy", color: "#82aaff" }, { text: "(", color: "#89ddff" }, { text: '"production"', color: "#c3e88d" }, { text: ");", color: "#89ddff" }] },
  { indent: 0, tokens: [{ text: "// ✓ Build exitoso — 0 errores", color: "#546e7a" }] },
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const scrollProgress = useSpring(scrollYProgress, springConfig);

  const opacity = useTransform(scrollProgress, [0, 0.35, 0.7], [1, 1, 0]);
  const scale = useTransform(scrollProgress, [0, 0.35, 0.7], [1, 1, 0.92]);
  const y = useTransform(scrollProgress, [0, 0.35, 0.7], [0, 0, 100]);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Decorative blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[var(--primary)] opacity-[0.06] blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[var(--accent)] opacity-[0.04] blur-[80px]" />
      </div>

      <motion.div
        style={{ opacity, scale, y }}
        className="container mx-auto px-6 pt-32 pb-20"
      >
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-[var(--primary)] font-bold text-sm uppercase tracking-[0.2em] mb-6"
              >
                Desarrollo de Software
              </motion.p>

              <h1 className="text-[var(--secondary)] dark:text-white mb-8">
                {siteConfig.tagline.split(" ").slice(0, 2).join(" ")}{" "}
                <span className="gradient-text-animated">
                  {siteConfig.tagline.split(" ").slice(2).join(" ")}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                {siteConfig.description}
              </p>

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--text-muted)]"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Disponibles para nuevos proyectos
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a
                  href="#producto"
                  onClick={(e) => scrollTo(e, "producto")}
                  className="btn-primary justify-center"
                >
                  Ver nuestro trabajo
                  <ArrowDown className="w-4 h-4" />
                </a>
                <a
                  href="#contacto"
                  onClick={(e) => scrollTo(e, "contacto")}
                  className="btn-secondary justify-center"
                >
                  Agendar consultoria
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Code Editor */}
          <motion.div
            className="flex-1 flex justify-center w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative w-full max-w-[520px]">
              {/* Glow behind editor */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#06B6D4]/20 to-[#1E40AF]/20 blur-[40px] rounded-3xl" />

              {/* Editor window */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Title bar */}
                <div className="bg-[#1a1a2e] px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="text-[#546e7a] text-xs font-mono ml-2">app.config.ts</span>
                  <div className="ml-auto flex items-center gap-2">
                    <span className="text-[10px] text-[#28c840] font-mono">TypeScript</span>
                  </div>
                </div>

                {/* Code area */}
                <div className="bg-[#0d1117] px-5 py-5 font-mono text-sm leading-7">
                  {codeLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.08, duration: 0.3 }}
                      className="flex"
                    >
                      <span className="text-[#546e7a] w-8 text-right mr-4 select-none text-xs leading-7">
                        {i + 1}
                      </span>
                      <span style={{ paddingLeft: `${line.indent * 20}px` }}>
                        {line.tokens.map((token, j) => (
                          <span key={j} style={{ color: token.color }}>
                            {token.text}
                          </span>
                        ))}
                      </span>
                    </motion.div>
                  ))}

                  {/* Blinking cursor */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="flex mt-1"
                  >
                    <span className="text-[#546e7a] w-8 text-right mr-4 select-none text-xs leading-7">
                      11
                    </span>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                      className="w-[2px] h-5 bg-[#06B6D4] inline-block mt-1"
                    />
                  </motion.div>
                </div>

                {/* Status bar */}
                <div className="bg-[#0F172A] px-4 py-1.5 flex items-center justify-between text-[10px] font-mono">
                  <div className="flex items-center gap-3">
                    <span className="text-[#28c840] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#28c840]" />
                      main
                    </span>
                    <span className="text-[#546e7a]">UTF-8</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#546e7a]">
                    <span>Ln 10, Col 34</span>
                    <span className="text-[#06B6D4]">Prettier</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-[var(--text-muted)] rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-2 bg-[var(--text-muted)] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
