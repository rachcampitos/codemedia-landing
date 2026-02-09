"use client";

import { AnimatedSection } from "./ui/AnimatedSection";
import { services } from "@/data/content";
import { motion } from "framer-motion";

export function Services() {
  const featured = services[0];
  const FeaturedIcon = featured.icon;
  const bottom = services[3];
  const BottomIcon = bottom?.icon;

  return (
    <section id="servicios">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <p className="text-[var(--primary)] font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Servicios
          </p>
          <h2 className="text-[var(--secondary)] dark:text-white mb-6">
            Servicios end-to-end
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Desde el diseno UX hasta el deployment en produccion.
            Todo bajo un mismo equipo.
          </p>
        </AnimatedSection>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Feature card - tall */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:row-span-2"
          >
            <div className="glass-premium rounded-3xl p-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E40AF] flex items-center justify-center mb-6 shadow-lg">
                  <FeaturedIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-[var(--secondary)] dark:text-white mb-4">
                  {featured.title}
                </h3>
                <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
                  {featured.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-[var(--surface)] dark:bg-[var(--surface-secondary)] text-[var(--text-primary)] border border-[var(--border)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Services 2-3 stacked */}
          {services.slice(1, 3).map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.1, duration: 0.6 }}
              >
                <div className="glass-card rounded-3xl p-8 h-full">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-[#06B6D4]/10 dark:bg-[#22D3EE]/15 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-[#06B6D4] dark:text-[#22D3EE]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[var(--secondary)] dark:text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--surface-secondary)] text-[var(--text-secondary)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Service 4 - wide bottom */}
          {bottom && BottomIcon && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="md:col-span-2"
            >
              <div className="glass-card rounded-3xl p-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#06B6D4] to-[#0891B2] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <BottomIcon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-[var(--secondary)] dark:text-white mb-3">
                      {bottom.title}
                    </h3>
                    <p className="text-lg text-[var(--text-secondary)] mb-4 leading-relaxed">
                      {bottom.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {bottom.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 rounded-full text-sm font-medium bg-[var(--surface)] dark:bg-[var(--surface-secondary)] text-[var(--text-primary)] border border-[var(--border)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
