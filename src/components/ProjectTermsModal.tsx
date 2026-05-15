"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle,
  GitBranch,
  Calendar,
  Lock,
  CreditCard,
  ShieldCheck,
  Users,
  FileText,
  Server,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { PROJECT_TERMS, type TermSection } from "@/data/project-terms";
import { useLanguage, type Locale } from "@/i18n";

// ─── Icon lookup (static map — no dynamic import) ─────────────────────────────

const ICON_MAP: Record<string, LucideIcon> = {
  CheckCircle,
  GitBranch,
  Calendar,
  Lock,
  CreditCard,
  ShieldCheck,
  Users,
  FileText,
  Server,
};

function resolveIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? FileText;
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProjectTermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ─── Accordion item ───────────────────────────────────────────────────────────

function TermAccordionItem({
  section,
  locale,
  isOpen,
  onToggle,
}: {
  section: TermSection;
  locale: Locale;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = resolveIcon(section.icon);

  return (
    <div className="border border-[var(--border)] rounded-2xl overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center gap-4 p-5 text-left transition-colors
                   hover:bg-[var(--surface)] focus-visible:outline-none
                   focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
      >
        <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-[var(--accent)]" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-[var(--text-primary)] text-base leading-snug">
            {section.title[locale]}
          </p>
          <p className="text-sm text-[var(--text-secondary)] mt-0.5 leading-snug">
            {section.subtitle[locale]}
          </p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex-shrink-0"
        >
          <ChevronDown
            className="w-5 h-5 text-[var(--text-muted)]"
            aria-hidden="true"
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-5 pb-5 pt-1 border-t border-[var(--border)]">
              <ul className="space-y-4 mt-4">
                {section.items[locale].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[var(--text-primary)] text-sm leading-snug">
                        {item.label}
                      </p>
                      <p className="text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main modal ───────────────────────────────────────────────────────────────

export function ProjectTermsModal({ isOpen, onClose }: ProjectTermsModalProps) {
  const { locale, t } = useLanguage();
  const [openSectionId, setOpenSectionId] = useState<string | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Focus close button for accessibility
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
      setOpenSectionId(null);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  const toggleSection = (id: string) => {
    setOpenSectionId((prev) => (prev === id ? null : id));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label={t("estimator.termsTitle")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-50 flex items-center justify-center p-4
                     bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-2xl max-h-[90vh] flex flex-col
                       bg-[var(--background)] rounded-3xl shadow-2xl
                       border border-[var(--border)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--border)] flex-shrink-0">
              <div>
                <h2 className="text-xl font-bold text-[var(--text-primary)]">
                  {t("estimator.termsTitle")}
                </h2>
                <p className="text-sm text-[var(--text-secondary)] mt-0.5">
                  Code Media EIRL
                </p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label={t("estimator.termsClose")}
                className="w-10 h-10 rounded-xl flex items-center justify-center
                           text-[var(--text-muted)] hover:text-[var(--text-primary)]
                           hover:bg-[var(--surface)] transition-colors
                           focus-visible:outline-none focus-visible:ring-2
                           focus-visible:ring-[var(--accent)]"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-3">
              {PROJECT_TERMS.map((section: TermSection) => (
                <TermAccordionItem
                  key={section.id}
                  section={section}
                  locale={locale}
                  isOpen={openSectionId === section.id}
                  onToggle={() => toggleSection(section.id)}
                />
              ))}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-[var(--border)] flex-shrink-0">
              <button
                type="button"
                onClick={onClose}
                className="btn-primary w-full justify-center text-base py-3 px-6"
              >
                {t("estimator.termsClose")}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
