"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/data/content";
import { useRef, useState, useEffect } from "react";

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
  { indent: 0, tokens: [{ text: "// \u2713 Build exitoso \u2014 0 errores", color: "#546e7a" }] },
];

const FULL_NAME = "CodeMedia";
const CHAR_DELAY = 100;
const SLASH_JUMP_DELAY = 350;

type Phase = "waiting" | "typing" | "jumping" | "done";

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

  const [phase, setPhase] = useState<Phase>("waiting");
  const [charIndex, setCharIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReducedMotion(true);
      setPhase("done");
      setCharIndex(FULL_NAME.length);
      return;
    }

    // Phase 1: slash alone blinks for 0.6s
    const startTimer = setTimeout(() => {
      setPhase("typing");
    }, 600);

    return () => clearTimeout(startTimer);
  }, []);

  // Phase 2: typing characters one by one
  useEffect(() => {
    if (phase !== "typing") return;

    if (charIndex < FULL_NAME.length) {
      const timer = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, CHAR_DELAY);
      return () => clearTimeout(timer);
    }

    // Typing complete, jump slash to end
    const jumpTimer = setTimeout(() => {
      setPhase("jumping");
      setTimeout(() => setPhase("done"), 100);
    }, SLASH_JUMP_DELAY);

    return () => clearTimeout(jumpTimer);
  }, [phase, charIndex]);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  const contentReady = phase === "done";
  const showSlashBefore = phase === "waiting" || phase === "typing";

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
            {/* Typewriter brand name */}
            <h1
              aria-label="CodeMedia"
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-[var(--secondary)] dark:text-white mb-6"
            >
              <span aria-hidden="true">
                {/* Slash before text (typing phase) */}
                <AnimatePresence mode="wait">
                  {showSlashBefore && (
                    <motion.span
                      key="slash-before"
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.15 }}
                      className="text-[#06B6D4]"
                    >
                      /
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Typed characters */}
                <span>
                  {FULL_NAME.slice(0, 4).slice(0, charIndex)}
                </span>
                <span className="gradient-text-animated">
                  {charIndex > 4 ? FULL_NAME.slice(4, charIndex) : ""}
                </span>

                {/* Slash after text (done phase) */}
                <AnimatePresence>
                  {(phase === "jumping" || phase === "done") && (
                    <motion.span
                      key="slash-after"
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-[#06B6D4]"
                    >
                      /
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Blinking cursor */}
                {!contentReady && (
                  <span className="inline-block w-[3px] h-[0.85em] bg-[#06B6D4] ml-0.5 align-middle animate-[cursor-blink_0.8s_linear_infinite]" />
                )}
              </span>
            </h1>

            {/* Content that appears after typewriter completes */}
            <motion.div
              initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={contentReady ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="text-[var(--primary)] font-bold text-sm uppercase tracking-[0.2em] mb-4">
                Desarrollo de Software
              </p>

              <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                {siteConfig.description}
              </p>

              {/* Availability */}
              <div className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Disponibles para nuevos proyectos
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
              </div>
            </motion.div>
          </div>

          {/* Code Editor */}
          <motion.div
            className="flex-1 flex justify-center w-full"
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={contentReady ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
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
                      initial={reducedMotion ? {} : { opacity: 0, x: -10 }}
                      animate={contentReady ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.08, duration: 0.3 }}
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
                    initial={reducedMotion ? {} : { opacity: 0 }}
                    animate={contentReady ? { opacity: 1 } : {}}
                    transition={{ delay: 1.4 }}
                    className="flex mt-1"
                  >
                    <span className="text-[#546e7a] w-8 text-right mr-4 select-none text-xs leading-7">
                      11
                    </span>
                    <span className="inline-block w-[2px] h-5 bg-[#06B6D4] mt-1 animate-[cursor-blink_0.8s_linear_infinite]" />
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
        animate={contentReady ? { opacity: 1 } : {}}
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
