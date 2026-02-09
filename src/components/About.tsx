"use client";

import { AnimatedSection } from "./ui/AnimatedSection";
import { stats } from "@/data/content";
import { Target, Lightbulb, Zap } from "lucide-react";

export function About() {
  return (
    <section id="nosotros" className="bg-[var(--surface)]">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[var(--primary)] font-semibold text-sm uppercase tracking-wider mb-3">
            Sobre Nosotros
          </p>
          <h2 className="text-[var(--secondary)] dark:text-white mb-4">
            Tecnologia con proposito
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
            En Code Media creemos que la tecnologia debe resolver problemas reales.
            Creamos software que transforma la manera en que las empresas operan
            y conectan con sus clientes.
          </p>
        </AnimatedSection>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Target,
              title: "Enfoque a Medida",
              description:
                "Cada proyecto es unico. Desarrollamos soluciones personalizadas que se adaptan exactamente a las necesidades del negocio.",
            },
            {
              icon: Lightbulb,
              title: "Innovacion Constante",
              description:
                "Utilizamos las tecnologias mas modernas del mercado para crear productos competitivos y de alto rendimiento.",
            },
            {
              icon: Zap,
              title: "Resultados Rapidos",
              description:
                "Metodologias agiles y equipos enfocados que entregan valor desde la primera iteracion del proyecto.",
            },
          ].map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.15}>
              <div className="glass-card rounded-2xl p-8 text-center h-full">
                <div className="w-14 h-14 rounded-xl bg-[#E74C3C]/10 dark:bg-[#FF6B5A]/15 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-[#E74C3C] dark:text-[#FF6B5A]" />
                </div>
                <h3 className="text-[var(--secondary)] dark:text-white mb-3 text-xl font-bold">
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats */}
        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </p>
                <p className="text-[var(--text-secondary)] font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
