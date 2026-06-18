"use client";

import { AnimatedSection } from "./ui/AnimatedSection";
import { siteConfig } from "@/data/content";
import { useLanguage } from "@/i18n";
import { Mail, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contacto">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <p className="text-[var(--primary)] font-bold text-sm uppercase tracking-[0.2em] mb-4">
            {t("contact.label")}
          </p>
          <h2 className="text-[var(--secondary)] dark:text-white mb-6">
            {t("contact.title")}{" "}
            <span className="gradient-text">{t("contact.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            {t("contact.description")}
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {/* WhatsApp — dominant full-width card */}
          <AnimatedSection delay={0} className="mb-6">
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("contact.whatsapp.ariaLabel")}
              className="glass-premium rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6 block hover:scale-[1.01] transition-transform duration-200"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                {/* Availability indicator */}
                <span className="inline-flex items-center gap-1.5 text-xs text-green-600 dark:text-green-400 font-semibold mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  {t("contact.available")}
                </span>
                <h3 className="text-[var(--secondary)] dark:text-white font-bold text-2xl mb-1">
                  {t("contact.whatsapp.title")}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  {t("contact.whatsapp.desc")}
                </p>
                <p className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-medium mt-2">
                  <Clock className="w-3 h-3" />
                  {t("contact.whatsapp.time")}
                </p>
              </div>
              <span className="btn-primary flex-shrink-0 !py-3 !px-6">
                {t("contact.whatsapp.cta")}
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </AnimatedSection>

          {/* Secondary row: Email + Location */}
          <div className="grid sm:grid-cols-2 gap-6">
            <AnimatedSection delay={0.1}>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label={t("contact.email.ariaLabel")}
                className="glass-card rounded-2xl p-6 flex flex-col items-center text-center h-full block hover:bg-[var(--surface)] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0F172A] to-[#1E40AF] flex items-center justify-center mb-4 shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[var(--secondary)] dark:text-white font-bold text-lg mb-1">
                  {t("contact.email.title")}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm mb-3">
                  {t("contact.email.desc")}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-medium mt-auto">
                  <Clock className="w-3 h-3" />
                  {t("contact.email.time")}
                </span>
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center h-full">
                <div className="w-12 h-12 rounded-xl bg-[#06B6D4]/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[#06B6D4]" />
                </div>
                <h3 className="text-[var(--secondary)] dark:text-white font-bold text-lg mb-1">
                  {siteConfig.location}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {t("contact.location.desc")}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
