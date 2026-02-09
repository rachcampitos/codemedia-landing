"use client";

import { AnimatedSection } from "./ui/AnimatedSection";
import { product } from "@/data/content";
import { ExternalLink, CheckCircle, BadgeCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Product() {
  return (
    <section id="producto" className="bg-[var(--surface)]">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[var(--primary)] font-semibold text-sm uppercase tracking-wider mb-3">
            Producto Destacado
          </p>
          <h2 className="text-[var(--secondary)] dark:text-white mb-4">
            {product.name}
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
            {product.tagline}
          </p>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Product info */}
          <AnimatedSection direction="left" className="flex-1">
            <div className="glass-card rounded-2xl p-8 lg:p-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm font-medium mb-6">
                <BadgeCheck className="w-4 h-4" />
                Producto en Produccion
              </div>

              <p className="text-[var(--text-secondary)] text-lg mb-8">
                {product.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                    <span className="text-[var(--text-primary)]">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex gap-8 mb-8 pb-8 border-b border-[var(--border)]">
                {product.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-[var(--primary)]">
                      {stat.value}
                    </p>
                    <p className="text-sm text-[var(--text-muted)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                Visitar NurseLite
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Phone mockup con identidad NurseLite */}
          <AnimatedSection direction="right" className="flex-1">
            <div className="relative max-w-[280px] mx-auto">
              {/* Phone frame */}
              <div className="relative bg-[#1a1a2e] rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.4rem] overflow-hidden aspect-[9/19]">
                  {/* Status bar */}
                  <div className="bg-[#1e3a5f] px-6 pt-3 pb-2 flex justify-between items-center text-white text-[10px]">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-3.5 h-2 border border-white/80 rounded-sm relative">
                        <div className="absolute inset-0.5 bg-white/80 rounded-[1px]" />
                      </div>
                    </div>
                  </div>

                  {/* NurseLite header */}
                  <div className="bg-gradient-to-b from-[#1e3a5f] to-[#2d5f8a] px-5 pt-3 pb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Image
                        src="/nurselite-logo.png"
                        alt="NurseLite"
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-lg object-cover"
                      />
                      <span className="text-white font-bold text-sm">NurseLite</span>
                    </div>
                    <p className="text-white/90 text-xs mb-3">Encuentra tu enfermera</p>
                    <div className="bg-white/20 rounded-xl px-3 py-2 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full border-2 border-white/60" />
                      <span className="text-white/60 text-[10px]">Buscar servicio...</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-4 py-4 bg-[#f8fafc]">
                    {/* Service cards */}
                    <p className="text-[10px] font-semibold text-[#1a1a2e] mb-2">Servicios populares</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {[
                        { label: "Inyecciones", color: "#4a9d9a" },
                        { label: "Curaciones", color: "#1e3a5f" },
                        { label: "Control vital", color: "#f59e0b" },
                        { label: "Terapia", color: "#22c55e" },
                      ].map((s) => (
                        <div key={s.label} className="bg-white rounded-xl p-2.5 shadow-sm border border-[#e2e8f0]">
                          <div className="w-6 h-6 rounded-lg mb-1.5" style={{ background: `${s.color}20` }}>
                            <div className="w-3 h-3 rounded m-1.5" style={{ background: s.color }} />
                          </div>
                          <p className="text-[9px] font-medium text-[#1a1a2e]">{s.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Nurse card */}
                    <p className="text-[10px] font-semibold text-[#1a1a2e] mb-2">Enfermera destacada</p>
                    <div className="bg-white rounded-xl p-3 shadow-sm border border-[#e2e8f0] flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4a9d9a] to-[#1e3a5f] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">MC</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-semibold text-[#1a1a2e]">Maria C.</p>
                        <div className="flex items-center gap-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <div key={i} className="w-2 h-2 text-[#f59e0b]">
                                <svg viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                              </div>
                            ))}
                          </div>
                          <span className="text-[8px] text-[#64748b]">4.9</span>
                        </div>
                        <p className="text-[8px] text-[#4a9d9a] font-medium">CEP Verificada</p>
                      </div>
                      <div className="bg-[#1e3a5f] rounded-lg px-2 py-1">
                        <span className="text-white text-[8px] font-semibold">Ver</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom nav */}
                  <div className="bg-white border-t border-[#e2e8f0] px-6 py-2 flex justify-between">
                    {["Inicio", "Buscar", "Citas", "Perfil"].map((item, i) => (
                      <div key={item} className="flex flex-col items-center gap-0.5">
                        <div className={`w-4 h-4 rounded-sm ${i === 0 ? 'bg-[#1e3a5f]' : 'bg-[#cbd5e1]'}`} />
                        <span className={`text-[7px] ${i === 0 ? 'text-[#1e3a5f] font-semibold' : 'text-[#94a3b8]'}`}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Dynamic island */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
