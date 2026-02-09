"use client";

import { AnimatedSection } from "./ui/AnimatedSection";
import { siteConfig } from "@/data/content";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contacto">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <p className="text-[var(--primary)] font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Contacto
          </p>
          <h2 className="text-[var(--secondary)] dark:text-white mb-6">
            Listo para{" "}
            <span className="gradient-text">comenzar?</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Agenda una consultoria tecnica gratuita.
            Conversemos sobre tu idea, presupuesto y timeline.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            <AnimatedSection delay={0}>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-premium rounded-3xl p-8 flex flex-col items-center text-center h-full block"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-5 shadow-lg">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[var(--secondary)] dark:text-white font-bold text-xl mb-2">
                  Respuesta Inmediata
                </h3>
                <p className="text-[var(--text-secondary)] mb-3">
                  Escribenos y conversamos hoy mismo
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs text-green-600 dark:text-green-400 font-medium">
                  <Clock className="w-3 h-3" />
                  Responde en &lt;1 hora
                </span>
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <a
                href={`mailto:${siteConfig.email}`}
                className="glass-premium rounded-3xl p-8 flex flex-col items-center text-center h-full block"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E40AF] flex items-center justify-center mb-5 shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[var(--secondary)] dark:text-white font-bold text-xl mb-2">
                  Cotizacion Formal
                </h3>
                <p className="text-[var(--text-secondary)] mb-3">
                  Propuesta tecnica + timeline + presupuesto
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-medium">
                  <Clock className="w-3 h-3" />
                  Respuesta en 24h habiles
                </span>
              </a>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.2} className="mt-6">
            <div className="glass-card rounded-2xl p-6 flex items-center justify-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#06B6D4]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#06B6D4]" />
              </div>
              <div>
                <p className="font-bold text-[var(--secondary)] dark:text-white">
                  {siteConfig.location}
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Trabajamos remoto con clientes en todo el Peru
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
