"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "./ui/AnimatedSection";
import { services } from "@/data/content";

export function Services() {
  return (
    <section id="servicios">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[var(--primary)] font-semibold text-sm uppercase tracking-wider mb-3">
            Servicios
          </p>
          <h2 className="text-[var(--secondary)] dark:text-white mb-4">
            Lo que hacemos
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
            Ofrecemos servicios integrales de desarrollo de software,
            desde la concepcion hasta el despliegue y mantenimiento.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.12}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="glass-card rounded-2xl p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-[#E74C3C]/10 dark:bg-[#FF6B5A]/15 flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-[#E74C3C] dark:text-[#FF6B5A]" />
                </div>
                <h3 className="text-[var(--secondary)] dark:text-white mb-3 text-xl font-bold">
                  {service.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-5">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--surface-secondary)] text-[var(--text-secondary)] border border-[var(--border)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
