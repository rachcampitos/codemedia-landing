"use client";

import { AnimatedSection } from "./ui/AnimatedSection";
import { getTechCategories, getTechItems } from "@/data/content";
import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";
import { Monitor, Server, Cloud, Plug } from "lucide-react";
import { useMemo } from "react";

const categoryIcons = {
  frontend: Monitor,
  backend: Server,
  devops: Cloud,
  integrations: Plug,
};

const categoryGradients = {
  frontend: "from-[#0F172A] to-[#1E40AF]",
  backend: "from-[#06B6D4] to-[#0891B2]",
  devops: "from-[#F59E0B] to-[#D97706]",
  integrations: "from-[#27AE60] to-[#2ECC71]",
};

export function TechStack() {
  const { locale, t } = useLanguage();
  const categories = useMemo(() => getTechCategories(locale), [locale]);
  const techItems = useMemo(() => getTechItems(locale), [locale]);

  return (
    <section id="tech-stack">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <p className="text-[var(--primary)] font-bold text-sm uppercase tracking-[0.2em] mb-4">
            {t("tech.label")}
          </p>
          <h2 className="text-[var(--secondary)] dark:text-white mb-6">
            {t("tech.title")}{" "}
            <span className="gradient-text">{t("tech.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            {t("tech.description")}
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, catIndex) => {
            const Icon = categoryIcons[cat.key];
            const gradient = categoryGradients[cat.key];
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                className="glass-card rounded-3xl p-8"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 shadow-lg`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[var(--secondary)] dark:text-white mb-4">
                  {cat.label}
                </h3>
                <div className="space-y-3">
                  {techItems[cat.key].map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm font-medium text-[var(--text-primary)]">
                        {tech.name}
                      </span>
                      <span className="text-xs text-[var(--text-muted)] bg-[var(--surface-secondary)] px-2 py-0.5 rounded-full">
                        {tech.category}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
