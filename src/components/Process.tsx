"use client";

import { AnimatedSection } from "./ui/AnimatedSection";
import { RevealText } from "./ui/RevealText";
import { getProcess } from "@/data/content";
import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";
import { useMemo } from "react";

export function Process() {
  const { locale, t } = useLanguage();
  const processSteps = useMemo(() => getProcess(locale), [locale]);

  return (
    <section id="proceso">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <p className="text-[var(--primary)] font-bold text-sm uppercase tracking-[0.2em] mb-4">
            {t("process.label")}
          </p>
          <RevealText
            as="h2"
            className="text-[var(--secondary)] dark:text-white mb-6"
          >
            {t("process.title")}
          </RevealText>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            {t("process.description")}
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--primary)] via-[var(--accent)] to-transparent hidden sm:block" />

            <div className="space-y-8">
              {processSteps.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="flex items-start gap-6"
                >
                  {/* Step number */}
                  <div className="relative z-10 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E40AF] dark:from-[#06B6D4] dark:to-[#0891B2] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white dark:text-[#0F172A] font-bold text-sm">
                      {item.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="glass-card rounded-2xl p-6 flex-1">
                    <h3 className="text-lg font-bold text-[var(--secondary)] dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
