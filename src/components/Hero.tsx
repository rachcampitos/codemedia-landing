"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/data/content";

export function Hero() {
  const scrollToProduct = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("producto");
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[var(--primary)] opacity-5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[var(--primary)] opacity-5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="text-[var(--primary)] font-semibold text-sm uppercase tracking-wider mb-4">
                Desarrollo de Software
              </p>
              <h1 className="text-[var(--secondary)] dark:text-white mb-6">
                {siteConfig.tagline.split(" ").map((word, i) =>
                  word === "software" ? (
                    <span key={i} className="gradient-text">
                      {word}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  )
                )}
              </h1>
              <p className="text-lg text-[var(--text-secondary)] max-w-lg mx-auto lg:mx-0 mb-8">
                {siteConfig.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#producto"
                  onClick={scrollToProduct}
                  className="btn-primary justify-center"
                >
                  Conoce nuestro trabajo
                  <ArrowDown className="w-4 h-4" />
                </a>
                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("contacto");
                    if (el)
                      window.scrollTo({
                        top: el.offsetTop - 80,
                        behavior: "smooth",
                      });
                  }}
                  className="btn-secondary justify-center"
                >
                  Hablemos
                </a>
              </div>
            </motion.div>
          </div>

          {/* Logo / Visual */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative">
              {/* Glow behind logo */}
              <div className="absolute inset-0 bg-[var(--primary)] opacity-10 blur-3xl rounded-full scale-75" />
              <Image
                src="/codemedia-logo.png"
                alt="Code Media"
                width={320}
                height={320}
                className="relative z-10 object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
