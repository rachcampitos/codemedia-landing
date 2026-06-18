"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AnimatedSection } from "./ui/AnimatedSection";
import { useLanguage } from "@/i18n";
import { siteConfig } from "@/data/content";

const FAQ_KEYS = ["q1", "q2", "q3", "q4", "q5", "q6"] as const;

export function FAQ() {
  const { t } = useLanguage();
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <section id="faq">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[var(--primary)] font-bold text-sm uppercase tracking-[0.2em] mb-4">
            {t("faq.label")}
          </p>
          <h2 className="text-[var(--secondary)] dark:text-white">
            {t("faq.title")}
          </h2>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ_KEYS.map((key, i) => {
            const isOpen = openKey === key;
            return (
              <AnimatedSection key={key} delay={i * 0.05}>
                <div className="glass-card rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenKey(isOpen ? null : key)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left
                               hover:bg-[var(--surface)] transition-colors
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset
                               focus-visible:ring-[var(--accent)]"
                  >
                    <span className="font-semibold text-[var(--text-primary)] text-base leading-snug">
                      {t(`faq.${key}.q`)}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-[var(--text-muted)]" aria-hidden="true" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className="px-6 pb-5 pt-3 text-[var(--text-secondary)] leading-relaxed text-sm border-t border-[var(--border)]">
                          {t(`faq.${key}.a`)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* End CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-[var(--text-secondary)] mb-4">
            {t("faq.endCtaText")}
          </p>
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            {t("faq.endCtaBtn")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
