"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/data/content";
import { useRef } from "react";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const scrollProgress = useSpring(scrollYProgress, springConfig);

  const opacity = useTransform(scrollProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollProgress, [0, 0.5], [1, 0.92]);
  const y = useTransform(scrollProgress, [0, 0.5], [0, 100]);
  const logoScale = useTransform(scrollProgress, [0, 0.3], [1, 1.1]);

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

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 inline-flex items-center gap-2 text-sm text-[var(--text-muted)]"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Disponibles para nuevos proyectos
              </motion.div>
            </motion.div>
          </div>

          {/* Logo */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div style={{ scale: logoScale }} className="relative">
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.2, 0.12] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-[var(--primary)] blur-[60px] rounded-full"
              />
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/codemedia-logo.png"
                  alt="Code Media"
                  width={380}
                  height={380}
                  className="relative z-10 object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </motion.div>
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
