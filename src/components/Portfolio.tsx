"use client";

import { AnimatedSection } from "./ui/AnimatedSection";
import { portfolio } from "@/data/content";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

/* ── Sparkle star SVG ── */
const Sparkle = ({ size = 12 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: size, height: size }}>
    <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
  </svg>
);

/* ── NurseLite phone mockup preview ── */
function NurseLitePreview() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute w-48 h-48 rounded-full bg-[#06B6D4]/20 blur-[60px] -top-10 -right-10" />
      <div className="absolute w-36 h-36 rounded-full bg-[#1E40AF]/30 blur-[40px] bottom-10 left-10" />

      <div className="relative">
        <div className="w-44 h-80 bg-[#0F172A] rounded-[2rem] p-2 shadow-2xl ring-1 ring-white/10">
          <div className="w-full h-full rounded-[1.6rem] bg-gradient-to-b from-[#1E293B] to-[#0F172A] overflow-hidden flex flex-col">
            <div className="px-4 pt-2 pb-1 flex justify-between items-center text-white/60 text-[8px]">
              <span>9:41</span>
              <div className="flex gap-0.5 items-end">
                {[...Array(4)].map((_, j) => (
                  <div key={j} className="w-0.5 rounded-full bg-white/60" style={{ height: `${(j + 2) * 1.5}px` }} />
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-b from-[#0F172A] to-[#1E40AF] px-3 pt-1 pb-3">
              <p className="text-white/50 text-[6px]">Bienvenida</p>
              <p className="text-white font-bold text-[9px]">Hola, Maria</p>
            </div>
            <div className="px-2 py-2 flex-1">
              <div className="grid grid-cols-2 gap-1 mb-2">
                {["#06B6D4", "#0F172A", "#f59e0b", "#22c55e"].map((c) => (
                  <div key={c} className="rounded-lg p-1.5 bg-[#1E293B] border border-[#334155]">
                    <div className="w-3 h-3 rounded" style={{ background: c, opacity: 0.8 }} />
                    <div className="w-8 h-1 rounded bg-white/20 mt-1" />
                  </div>
                ))}
              </div>
              <div className="rounded-lg p-2 bg-[#1E293B] border border-[#334155] flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#0F172A] ring-1 ring-[#f59e0b]" />
                <div className="flex-1">
                  <div className="w-10 h-1 rounded bg-white/30 mb-0.5" />
                  <div className="w-14 h-1 rounded bg-[#06B6D4]/40" />
                </div>
              </div>
            </div>
            <div className="px-3 py-1 flex justify-between border-t border-[#334155]">
              {[true, false, false, false].map((active, j) => (
                <div key={j} className="flex flex-col items-center gap-0.5">
                  <div className={`w-2.5 h-2.5 rounded-sm ${active ? "bg-[#06B6D4]" : "bg-[#334155]"}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full" />
        </div>
      </div>
    </div>
  );
}

/* ── Wedding site mystical animated preview ── */
function WeddingPreview() {
  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 2,
  }));

  const sparkles = [
    { x: "8%", y: "12%", size: 14, delay: 0 },
    { x: "85%", y: "18%", size: 10, delay: 1.2 },
    { x: "15%", y: "75%", size: 8, delay: 0.6 },
    { x: "90%", y: "70%", size: 12, delay: 1.8 },
    { x: "50%", y: "8%", size: 6, delay: 2.4 },
  ];

  return (
    <div className="absolute inset-0 bg-[#050505] overflow-hidden">
      {/* Starfield */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-[#C4956A]"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Sparkle stars */}
      {sparkles.map((s, i) => (
        <motion.div
          key={i}
          className="absolute text-[#C4956A]/60"
          style={{ left: s.x, top: s.y }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 3,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkle size={s.size} />
        </motion.div>
      ))}

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,123,184,0.08)_0%,_transparent_70%)]" />

      {/* Moon glow */}
      <motion.div
        className="absolute top-6 right-10 w-16 h-16 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(196,149,106,0.15) 0%, transparent 70%)",
          boxShadow: "0 0 40px rgba(196,149,106,0.1)",
        }}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Tarot card preview */}
        <motion.div
          className="relative mb-6"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-24 h-36 rounded-lg border border-[#C4956A]/30 bg-gradient-to-b from-[#0a0a0a] to-[#1a1025] flex flex-col items-center justify-center p-2 shadow-[0_0_30px_rgba(139,123,184,0.15)]">
            {/* Card inner border */}
            <div className="w-full h-full rounded border border-[#8B7BB8]/20 flex flex-col items-center justify-center gap-2 p-2">
              {/* Hearts icon */}
              <svg viewBox="0 0 40 20" className="w-8 h-4 text-[#C4956A]/70" fill="currentColor">
                <path d="M10 18s-8-5.5-8-11c0-3.5 2.5-6 6-6 2 0 3.5 1 4 2.5C12.5 2 14 1 16 1c3.5 0 6 2.5 6 6 0 5.5-8 11-8 11z" transform="translate(-2,0)" />
                <path d="M10 18s-8-5.5-8-11c0-3.5 2.5-6 6-6 2 0 3.5 1 4 2.5C12.5 2 14 1 16 1c3.5 0 6 2.5 6 6 0 5.5-8 11-8 11z" transform="translate(18,0)" />
              </svg>
              <div className="w-6 h-px bg-[#C4956A]/30" />
              <p className="text-[7px] text-[#C4956A]/50 tracking-widest uppercase">Est. 2026</p>
            </div>
          </div>
        </motion.div>

        {/* Names */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <p className="text-[#8B7BB8] text-2xl lg:text-3xl font-serif tracking-wide" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            Frankie <span className="text-[#C4956A]/60 text-lg mx-1">&amp;</span> Rodrigo
          </p>
          <motion.div
            className="mx-auto mt-3 h-px bg-gradient-to-r from-transparent via-[#C4956A]/40 to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
          />
          <p className="text-[#C4956A]/50 text-xs mt-3 tracking-[0.3em] uppercase">
            Westbury, NY
          </p>
        </motion.div>
      </div>

      {/* Bottom subtle nav preview */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-6">
        {["Home", "Schedule", "Gallery", "RSVP"].map((item, i) => (
          <motion.span
            key={item}
            className="text-[9px] text-white/20 tracking-wider"
            animate={{ opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

/* ── Preview resolver ── */
const previews: Record<string, () => React.JSX.Element> = {
  NurseLite: NurseLitePreview,
  "Frankie & Rodrigo": WeddingPreview,
};

export function Portfolio() {
  return (
    <section id="portafolio">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <p className="text-[var(--primary)] font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Portafolio
          </p>
          <h2 className="text-[var(--secondary)] dark:text-white mb-6">
            Proyectos en produccion
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Software real, funcionando, con usuarios reales.
            Cada proyecto resuelve un problema concreto.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 lg:gap-10">
          {portfolio.map((project, i) => {
            const Preview = previews[project.title];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <div className="glass-premium rounded-3xl overflow-hidden group">
                  <div className="grid lg:grid-cols-2">
                    {/* Visual area - same size for both */}
                    <div className={`relative h-72 lg:h-auto lg:min-h-[420px] overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                      {Preview && <Preview />}

                      {/* Category badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-md text-white border border-white/20">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Info area - same layout for both */}
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <h3 className="text-2xl lg:text-3xl font-bold text-[var(--secondary)] dark:text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-[var(--text-muted)] text-sm mb-5">
                        {project.subtitle}
                      </p>

                      <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.highlights.map((h) => (
                          <div
                            key={h}
                            className="flex items-center gap-2 text-sm text-[var(--text-primary)]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
                            {h}
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--surface-secondary)] text-[var(--text-secondary)] border border-[var(--border)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      {project.url ? (
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#06B6D4] dark:text-[#22D3EE] font-semibold group/link hover:gap-3 transition-all"
                        >
                          Ver proyecto
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-[var(--text-muted)] text-sm">
                          <ArrowRight className="w-4 h-4" />
                          Proyecto privado
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
