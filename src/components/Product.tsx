"use client";

import { AnimatedSection } from "./ui/AnimatedSection";
import { product } from "@/data/content";
import { ExternalLink, CheckCircle, BadgeCheck, Smartphone, Shield, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    icon: Smartphone,
    title: "App Multiplataforma",
    description: "iOS, Android y Web desde un unico codebase con Ionic/Angular.",
  },
  {
    icon: Shield,
    title: "Verificacion CEP",
    description: "Validacion automatica contra el Colegio de Enfermeros del Peru.",
  },
  {
    icon: Zap,
    title: "Tiempo Real",
    description: "Chat en vivo, notificaciones push y seguimiento de servicios.",
  },
];

export function Product() {
  return (
    <section id="producto" className="relative overflow-hidden bg-[var(--surface)]">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <p className="text-[var(--primary)] font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Caso de Exito
          </p>
          <h2 className="text-[var(--secondary)] dark:text-white mb-6">
            {product.name}
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            {product.tagline}
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: info */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-semibold">
              <BadgeCheck className="w-4 h-4" />
              Producto en Produccion
            </div>

            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              {product.description}
            </p>

            {/* Feature mini-cards */}
            <div className="space-y-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="glass-card rounded-2xl p-5 flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0F172A] to-[#06B6D4] flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--secondary)] dark:text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Checklist */}
            <div className="space-y-2">
              {product.features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">{f}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-10 py-6 border-y border-[var(--border)]">
              {product.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black gradient-text-animated">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[var(--text-muted)] uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

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

          {/* Right: Phone mockup */}
          <AnimatedSection direction="right">
            <div className="relative max-w-[280px] mx-auto">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] to-[#06B6D4] opacity-15 blur-[60px] rounded-full scale-110" />

              <div className="relative bg-[#0F172A] rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.4rem] overflow-hidden aspect-[9/19]">
                  <div className="bg-[#0F172A] px-6 pt-3 pb-2 flex justify-between items-center text-white text-[10px]">
                    <span>9:41</span>
                    <div className="w-3.5 h-2 border border-white/80 rounded-sm relative">
                      <div className="absolute inset-0.5 bg-white/80 rounded-[1px]" />
                    </div>
                  </div>

                  <div className="bg-gradient-to-b from-[#0F172A] to-[#1E40AF] px-5 pt-3 pb-6">
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

                  <div className="px-4 py-4 bg-[#f8fafc]">
                    <p className="text-[10px] font-semibold text-[#0F172A] mb-2">Servicios populares</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {[
                        { label: "Inyecciones", color: "#06B6D4" },
                        { label: "Curaciones", color: "#0F172A" },
                        { label: "Control vital", color: "#f59e0b" },
                        { label: "Terapia", color: "#22c55e" },
                      ].map((s) => (
                        <div key={s.label} className="bg-white rounded-xl p-2.5 shadow-sm border border-[#e2e8f0]">
                          <div className="w-6 h-6 rounded-lg mb-1.5" style={{ background: `${s.color}20` }}>
                            <div className="w-3 h-3 rounded m-1.5" style={{ background: s.color }} />
                          </div>
                          <p className="text-[9px] font-medium text-[#0F172A]">{s.label}</p>
                        </div>
                      ))}
                    </div>

                    <p className="text-[10px] font-semibold text-[#0F172A] mb-2">Enfermera destacada</p>
                    <div className="bg-white rounded-xl p-3 shadow-sm border border-[#e2e8f0] flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#0F172A] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">MC</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-semibold text-[#0F172A]">Maria C.</p>
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
                        <p className="text-[8px] text-[#06B6D4] font-medium">CEP Verificada</p>
                      </div>
                      <div className="bg-[#0F172A] rounded-lg px-2 py-1">
                        <span className="text-white text-[8px] font-semibold">Ver</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-t border-[#e2e8f0] px-6 py-2 flex justify-between">
                    {["Inicio", "Buscar", "Citas", "Perfil"].map((item, i) => (
                      <div key={item} className="flex flex-col items-center gap-0.5">
                        <div className={`w-4 h-4 rounded-sm ${i === 0 ? 'bg-[#0F172A]' : 'bg-[#cbd5e1]'}`} />
                        <span className={`text-[7px] ${i === 0 ? 'text-[#0F172A] font-semibold' : 'text-[#94a3b8]'}`}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
