"use client";

import { AnimatedSection } from "./ui/AnimatedSection";
import { getStats, getAboutValues } from "@/data/content";
import { useLanguage } from "@/i18n";
import { Target, Lightbulb, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo } from "react";

const valueIcons = [Target, Lightbulb, Zap];

export function About() {
  const { locale, t } = useLanguage();
  const stats = useMemo(() => getStats(locale), [locale]);
  const values = useMemo(
    () =>
      getAboutValues(locale).map((v, i) => ({
        ...v,
        icon: valueIcons[i],
      })),
    [locale]
  );

  return (
    <section id="nosotros">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <p className="text-[var(--primary)] font-bold text-sm uppercase tracking-[0.2em] mb-4">
            {t("about.label")}
          </p>
          <h2 className="text-[var(--secondary)] dark:text-white mb-6">
            {t("about.title")}{" "}
            <span className="gradient-text-animated">{t("about.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            {t("about.description")}
          </p>
        </AnimatedSection>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="glass-premium rounded-3xl p-10 text-center h-full">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[var(--secondary)] dark:text-white mb-4 text-xl font-bold">
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <AnimatedSection>
          <div className="glass-premium rounded-3xl p-12 lg:p-16">
            <div className="flex flex-wrap justify-around gap-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-5xl md:text-6xl font-black mb-3">
                    <span className="gradient-text-animated">{stat.value}</span>
                  </p>
                  <p className="text-[var(--text-secondary)] font-semibold uppercase tracking-wider text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Founder */}
        <AnimatedSection delay={0.1} className="mt-8">
          <div className="glass-card rounded-3xl p-8 md:p-10 flex flex-col sm:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="relative w-24 h-24 md:w-28 md:h-28">
                <img
                  src="/self.jpeg"
                  alt="Raul Campos"
                  className="w-full h-full object-cover object-top rounded-full ring-2 ring-[var(--accent)]/30"
                  loading="lazy"
                  width={112}
                  height={112}
                />
                <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full ring-2 ring-[var(--background)]" aria-hidden="true" />
              </div>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)] mb-1">
                {t("about.label")}
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-[var(--secondary)] dark:text-white mb-1">
                Raul Campos
              </h3>
              <p className="text-sm font-semibold text-[var(--primary)] mb-3">
                {t("about.founder.role")}
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm max-w-xl">
                {t("about.founder.bio")}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
