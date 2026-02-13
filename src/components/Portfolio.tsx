"use client";

import { AnimatedSection } from "./ui/AnimatedSection";
import { portfolio } from "@/data/content";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

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
          {portfolio.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="glass-premium rounded-3xl overflow-hidden group">
                <div className={`grid ${project.image ? "lg:grid-cols-[1.1fr_1fr]" : "lg:grid-cols-[1fr_1.2fr]"}`}>
                  {/* Visual area */}
                  <div className={`relative h-64 lg:h-auto lg:min-h-[400px] overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                    {project.image ? (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                        />
                        {/* Dark overlay for readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      </>
                    ) : (
                      /* NurseLite stylized preview */
                      <div className="absolute inset-0 flex items-center justify-center">
                        {/* Glow circles */}
                        <div className="absolute w-48 h-48 rounded-full bg-[#06B6D4]/20 blur-[60px] -top-10 -right-10" />
                        <div className="absolute w-36 h-36 rounded-full bg-[#1E40AF]/30 blur-[40px] bottom-10 left-10" />

                        {/* Mini phone mockup */}
                        <div className="relative">
                          <div className="w-44 h-80 bg-[#0F172A] rounded-[2rem] p-2 shadow-2xl ring-1 ring-white/10">
                            <div className="w-full h-full rounded-[1.6rem] bg-gradient-to-b from-[#1E293B] to-[#0F172A] overflow-hidden flex flex-col">
                              {/* Status bar */}
                              <div className="px-4 pt-2 pb-1 flex justify-between items-center text-white/60 text-[8px]">
                                <span>9:41</span>
                                <div className="flex gap-0.5 items-end">
                                  {[...Array(4)].map((_, j) => (
                                    <div key={j} className="w-0.5 rounded-full bg-white/60" style={{ height: `${(j + 2) * 1.5}px` }} />
                                  ))}
                                </div>
                              </div>
                              {/* Header */}
                              <div className="bg-gradient-to-b from-[#0F172A] to-[#1E40AF] px-3 pt-1 pb-3">
                                <p className="text-white/50 text-[6px]">Bienvenida</p>
                                <p className="text-white font-bold text-[9px]">Hola, Maria</p>
                              </div>
                              {/* Content preview */}
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
                              {/* Tab bar */}
                              <div className="px-3 py-1 flex justify-between border-t border-[#334155]">
                                {[true, false, false, false].map((active, j) => (
                                  <div key={j} className="flex flex-col items-center gap-0.5">
                                    <div className={`w-2.5 h-2.5 rounded-sm ${active ? "bg-[#06B6D4]" : "bg-[#334155]"}`} />
                                  </div>
                                ))}
                              </div>
                            </div>
                            {/* Dynamic island */}
                            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-md text-white border border-white/20">
                        {project.category}
                      </span>
                    </div>

                    {/* Title overlay on image */}
                    {project.image && (
                      <div className="absolute bottom-4 left-4 z-10">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white">
                          {project.title}
                        </h3>
                        <p className="text-white/70 text-sm">{project.subtitle}</p>
                      </div>
                    )}
                  </div>

                  {/* Info area */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    {!project.image && (
                      <>
                        <h3 className="text-2xl lg:text-3xl font-bold text-[var(--secondary)] dark:text-white mb-1">
                          {project.title}
                        </h3>
                        <p className="text-[var(--text-muted)] text-sm mb-4">
                          {project.subtitle}
                        </p>
                      </>
                    )}
                    {project.image && (
                      <div className="lg:hidden mb-2">
                        <h3 className="text-2xl font-bold text-[var(--secondary)] dark:text-white">
                          {project.title}
                        </h3>
                      </div>
                    )}

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
          ))}
        </div>
      </div>
    </section>
  );
}
