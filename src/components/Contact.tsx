"use client";

import { AnimatedSection } from "./ui/AnimatedSection";
import { siteConfig } from "@/data/content";
import { Mail, MessageCircle, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contacto">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[var(--primary)] font-semibold text-sm uppercase tracking-wider mb-3">
            Contacto
          </p>
          <h2 className="text-[var(--secondary)] dark:text-white mb-4">
            Tienes un proyecto? Hablemos
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
            Estamos listos para ayudarte a transformar tu idea en realidad.
            Escribenos y conversemos sobre tu proximo proyecto.
          </p>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Email */}
            <AnimatedSection delay={0}>
              <a
                href={`mailto:${siteConfig.email}`}
                className="glass-card rounded-2xl p-8 flex flex-col items-center text-center h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-[#E74C3C]/10 dark:bg-[#FF6B5A]/15 flex items-center justify-center mb-4">
                  <Mail className="w-7 h-7 text-[#E74C3C] dark:text-[#FF6B5A]" />
                </div>
                <h3 className="text-[var(--secondary)] dark:text-white font-bold mb-2">
                  Email
                </h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  {siteConfig.email}
                </p>
              </a>
            </AnimatedSection>

            {/* WhatsApp */}
            <AnimatedSection delay={0.1}>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-8 flex flex-col items-center text-center h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                  <MessageCircle className="w-7 h-7 text-green-500" />
                </div>
                <h3 className="text-[var(--secondary)] dark:text-white font-bold mb-2">
                  WhatsApp
                </h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  Escríbenos directamente
                </p>
              </a>
            </AnimatedSection>
          </div>

          {/* Location */}
          <AnimatedSection delay={0.2} className="mt-6">
            <div className="glass-card rounded-2xl p-8 flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#3498DB]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#3498DB]" />
              </div>
              <div>
                <h3 className="text-[var(--secondary)] dark:text-white font-bold">
                  {siteConfig.location}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  Trabajamos de forma remota con clientes en todo el Peru
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
