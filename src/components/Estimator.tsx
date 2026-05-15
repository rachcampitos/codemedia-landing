"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { AnimatedSection } from "./ui/AnimatedSection";
import { ProjectTermsModal } from "./ProjectTermsModal";
import { useLanguage } from "@/i18n";
import {
  PROJECT_TYPES,
  FEATURES,
  TIMELINE_OPTIONS,
  FEATURE_CATEGORIES,
  getFeaturesByCategory,
  calculateEstimate,
  type ProjectTypeId,
  type TimelineId,
  type FeatureCategory,
} from "@/data/estimator";
import {
  getFeatureStepMessages,
  getTimelineStepMessages,
  type ContextMessage,
  type MessageSeverity,
} from "@/data/estimator-context-messages";

// ─── Animated price counter ───────────────────────────────────────────────────

function useAnimatedNumber(target: number, shouldReduce: boolean | null) {
  const motionValue = useMotionValue(target);
  const spring = useSpring(motionValue, {
    stiffness: shouldReduce ? 10000 : 120,
    damping: shouldReduce ? 100 : 20,
    restDelta: 1,
  });
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    motionValue.set(target);
  }, [target, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => {
      setDisplay(Math.round(v));
    });
    return unsubscribe;
  }, [spring]);

  return display;
}

// ─── Step inline alert ────────────────────────────────────────────────────────

const INLINE_ALERT_STYLES: Record<
  MessageSeverity,
  { wrapper: string; icon: string }
> = {
  warning: {
    wrapper: "border-l-red-400 bg-red-50/70 dark:bg-red-950/25",
    icon: "text-red-500 dark:text-red-400",
  },
  info: {
    wrapper: "border-l-blue-400 bg-blue-50/70 dark:bg-blue-950/25",
    icon: "text-blue-500 dark:text-blue-400",
  },
  tip: {
    wrapper: "border-l-emerald-400 bg-emerald-50/70 dark:bg-emerald-950/25",
    icon: "text-emerald-600 dark:text-emerald-400",
  },
};

function StepInlineAlert({ message }: { message: ContextMessage }) {
  const MsgIcon = message.icon;
  const { wrapper, icon } = INLINE_ALERT_STYLES[message.severity];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className={`rounded-xl border-l-2 px-4 py-3 flex gap-3 items-start ${wrapper}`}
    >
      <MsgIcon className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${icon}`} aria-hidden="true" />
      <div className="min-w-0">
        <p className="text-xs font-semibold text-[var(--text-primary)] leading-snug">
          {message.title}
        </p>
        <p className="text-xs text-[var(--text-secondary)] mt-0.5 leading-relaxed">
          {message.body}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Feature chip ─────────────────────────────────────────────────────────────

function FeatureChip({
  feature,
  locale,
  isSelected,
  onToggle,
}: {
  feature: (typeof FEATURES)[0];
  locale: string;
  isSelected: boolean;
  onToggle: () => void;
}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const shouldReduce = useReducedMotion();
  const lang = locale as "es" | "en";

  return (
    <div className="relative">
      <motion.button
        type="button"
        onClick={onToggle}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        aria-pressed={isSelected}
        animate={shouldReduce ? {} : { scale: isSelected ? 1.02 : 1 }}
        whileHover={shouldReduce ? {} : { scale: isSelected ? 1.02 : 1.015 }}
        whileTap={shouldReduce ? {} : { scale: 0.975 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{
          boxShadow: isSelected
            ? "0 0 0 1px rgba(6,182,212,0.5), 0 0 12px rgba(6,182,212,0.2)"
            : "0 0 0 1px rgba(148,163,184,0.25)",
        }}
        className={`px-3 py-1.5 rounded-full text-sm
          [transition:box-shadow_200ms_ease-out,_background-color_200ms_ease-out,_color_200ms_ease-out]
          outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]
          ${isSelected
            ? "bg-[var(--accent)]/10 text-cyan-700 dark:text-cyan-300 font-semibold"
            : "bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          }`}
      >
        {feature.name[lang]}
      </motion.button>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            role="tooltip"
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-20
                       w-56 rounded-xl bg-[var(--primary-light)] dark:bg-[var(--surface-secondary)]
                       border border-[var(--border)] shadow-lg px-3 py-2.5 pointer-events-none"
          >
            <p className="text-xs font-semibold text-white dark:text-[var(--text-primary)] mb-1">
              {feature.name[lang]}
            </p>
            <p className="text-xs text-white/80 dark:text-[var(--text-secondary)] leading-relaxed">
              {feature.description[lang]}
            </p>
            <p className="text-xs text-[var(--accent)] font-medium mt-1.5">
              +${feature.priceMin.toLocaleString()} – $
              {feature.priceMax.toLocaleString()} USD
            </p>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0
                            border-l-4 border-r-4 border-t-4
                            border-l-transparent border-r-transparent
                            border-t-[var(--border)]" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function Estimator() {
  const { locale, t } = useLanguage();
  const lang = locale as "es" | "en";
  const shouldReduce = useReducedMotion();

  const [selectedProject, setSelectedProject] =
    useState<ProjectTypeId | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<Set<string>>(
    new Set()
  );
  const [selectedTimeline, setSelectedTimeline] =
    useState<TimelineId>("standard");
  const [termsOpen, setTermsOpen] = useState(false);

  const selectedFeatureIds = useMemo(
    () => Array.from(selectedFeatures),
    [selectedFeatures]
  );

  const estimate = useMemo(
    () =>
      calculateEstimate(selectedProject, selectedFeatureIds, selectedTimeline),
    [selectedProject, selectedFeatureIds, selectedTimeline]
  );

  const featureMessages = useMemo(
    () => getFeatureStepMessages(selectedFeatureIds, selectedTimeline),
    [selectedFeatureIds, selectedTimeline]
  );

  const timelineMessages = useMemo(
    () => getTimelineStepMessages(selectedFeatureIds, selectedTimeline),
    [selectedFeatureIds, selectedTimeline]
  );

  const animatedMin = useAnimatedNumber(estimate.priceMin, shouldReduce);
  const animatedMax = useAnimatedNumber(estimate.priceMax, shouldReduce);

  const formatPrice = (v: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(v);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contacto");
    if (el) {
      el.scrollIntoView({ behavior: shouldReduce ? "auto" : "smooth" });
    }
  };

  return (
    <>
      <section id="estimador">
        <div className="container mx-auto px-6">
          {/* Section header */}
          <AnimatedSection className="text-center mb-20">
            <p className="text-[var(--primary)] font-bold text-sm uppercase tracking-[0.2em] mb-4">
              {t("estimator.label")}
            </p>
            <h2 className="text-[var(--secondary)] dark:text-white mb-6">
              {t("estimator.title")}
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
              {t("estimator.subtitle")}
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* ── STEP 1: Project type ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-3xl p-6 md:p-8"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)] mb-5">
                01 — {t("estimator.step1")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {PROJECT_TYPES.map((pt) => {
                  const isSelected = selectedProject === pt.id;
                  return (
                    <motion.button
                      key={pt.id}
                      type="button"
                      onClick={() =>
                        setSelectedProject(isSelected ? null : pt.id)
                      }
                      aria-pressed={isSelected}
                      animate={shouldReduce ? {} : { scale: isSelected ? 1.02 : 1 }}
                      whileHover={shouldReduce ? {} : { scale: isSelected ? 1.02 : 1.015 }}
                      whileTap={shouldReduce ? {} : { scale: 0.975 }}
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      style={{
                        boxShadow: isSelected
                          ? "0 0 0 1px rgba(6,182,212,0.5), 0 0 20px rgba(6,182,212,0.15), 0 4px 16px rgba(0,0,0,0.08)"
                          : "0 0 0 1px rgba(148,163,184,0.2), 0 2px 8px rgba(0,0,0,0.04)",
                      }}
                      className={`rounded-2xl p-4 text-left
                        [transition:box-shadow_200ms_ease-out,_background-color_200ms_ease-out]
                        outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]
                        ${
                          isSelected
                            ? "bg-[var(--accent)]/10"
                            : "bg-[var(--surface)]"
                        }`}
                    >
                      <p
                        className={`font-semibold text-sm leading-snug mb-1 ${
                          isSelected
                            ? "text-[var(--accent)]"
                            : "text-[var(--text-primary)]"
                        }`}
                      >
                        {pt.label[lang]}
                      </p>
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                        {pt.description[lang]}
                      </p>
                      <p className="text-xs font-semibold text-[var(--text-secondary)] mt-2">
                        ${pt.baseMin.toLocaleString()} – $
                        {pt.baseMax.toLocaleString()}
                        <span className="font-normal text-[var(--text-muted)]">
                          {" "}
                          USD
                        </span>
                      </p>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* ── STEP 2: Features ── */}
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="glass-card rounded-3xl p-6 md:p-8"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)] mb-5">
                02 — {t("estimator.step2")}
              </p>

              <div className="space-y-6">
                {FEATURE_CATEGORIES.map((category: FeatureCategory) => {
                  const features = getFeaturesByCategory(category);
                  return (
                    <div key={category}>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                        {category}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {features.map((feature) => (
                          <FeatureChip
                            key={feature.id}
                            feature={feature}
                            locale={locale}
                            isSelected={selectedFeatures.has(feature.id)}
                            onToggle={() => toggleFeature(feature.id)}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Inline alerts for features step */}
              <AnimatePresence>
                {featureMessages.length > 0 && (
                  <motion.div
                    key="feature-alerts"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 pt-5 border-t border-[var(--border)] space-y-2">
                      <AnimatePresence mode="popLayout">
                        {featureMessages.slice(0, 2).map((msg) => (
                          <StepInlineAlert key={msg.id} message={msg} />
                        ))}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* ── STEP 3: Timeline ── */}
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-3xl p-6 md:p-8"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)] mb-5">
                03 — {t("estimator.step3")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TIMELINE_OPTIONS.map((tl) => {
                  const isSelected = selectedTimeline === tl.id;
                  return (
                    <motion.button
                      key={tl.id}
                      type="button"
                      onClick={() => setSelectedTimeline(tl.id)}
                      aria-pressed={isSelected}
                      animate={shouldReduce ? {} : { scale: isSelected ? 1.02 : 1 }}
                      whileHover={shouldReduce ? {} : { scale: isSelected ? 1.02 : 1.015 }}
                      whileTap={shouldReduce ? {} : { scale: 0.975 }}
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      style={{
                        boxShadow: isSelected
                          ? "0 0 0 1px rgba(6,182,212,0.5), 0 0 20px rgba(6,182,212,0.15), 0 4px 16px rgba(0,0,0,0.08)"
                          : "0 0 0 1px rgba(148,163,184,0.2), 0 2px 8px rgba(0,0,0,0.04)",
                      }}
                      className={`rounded-2xl p-4 text-left
                        [transition:box-shadow_200ms_ease-out,_background-color_200ms_ease-out]
                        outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]
                        ${
                          isSelected
                            ? "bg-[var(--accent)]/10"
                            : "bg-[var(--surface)]"
                        }`}
                    >
                      <p
                        className={`font-semibold text-sm leading-snug mb-1 ${
                          isSelected
                            ? "text-[var(--accent)]"
                            : "text-[var(--text-primary)]"
                        }`}
                      >
                        {tl.label[lang]}
                      </p>
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                        {tl.description[lang]}
                      </p>
                    </motion.button>
                  );
                })}
              </div>

              {/* Inline alerts for timeline step */}
              <AnimatePresence>
                {timelineMessages.length > 0 && (
                  <motion.div
                    key="timeline-alerts"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 pt-5 border-t border-[var(--border)] space-y-2">
                      <AnimatePresence mode="popLayout">
                        {timelineMessages.slice(0, 2).map((msg) => (
                          <StepInlineAlert key={msg.id} message={msg} />
                        ))}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* ── Price display ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="glass-premium rounded-3xl p-6 md:p-8"
            >
              {!selectedProject ? (
                <p className="text-center text-[var(--text-muted)] text-sm py-4">
                  {t("estimator.selectProject")}
                </p>
              ) : (
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  {/* Price */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)] mb-2">
                      {t("estimator.estimate")}
                    </p>
                    <p className="text-3xl md:text-4xl font-extrabold text-[var(--secondary)] dark:text-white tracking-tight">
                      {formatPrice(animatedMin)}
                      <span className="text-[var(--text-muted)] font-normal mx-2">
                        –
                      </span>
                      {formatPrice(animatedMax)}
                      <span className="text-lg font-semibold text-[var(--text-secondary)] ml-2">
                        USD
                      </span>
                    </p>

                    {estimate.weekMin > 0 && (
                      <p className="text-sm text-[var(--text-secondary)] mt-2">
                        {t("estimator.weeks")}:{" "}
                        <span className="font-semibold text-[var(--text-primary)]">
                          {estimate.weekMin}–{estimate.weekMax}{" "}
                          {t("estimator.weeksUnit")}
                        </span>
                      </p>
                    )}

                    {selectedFeatureIds.length === 0 && (
                      <p className="text-xs text-[var(--text-muted)] mt-1">
                        {t("estimator.noFeatures")}
                      </p>
                    )}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col gap-3 flex-shrink-0">
                    <motion.button
                      type="button"
                      onClick={scrollToContact}
                      whileHover={shouldReduce ? {} : { scale: 1.02 }}
                      whileTap={shouldReduce ? {} : { scale: 0.98 }}
                      className="btn-primary"
                    >
                      {t("estimator.cta")}
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </motion.button>

                    <button
                      type="button"
                      onClick={() => setTermsOpen(true)}
                      className="flex items-center justify-center gap-2 text-sm
                                 text-[var(--text-secondary)] hover:text-[var(--accent)]
                                 transition-colors underline-offset-2 hover:underline
                                 focus-visible:outline-none focus-visible:ring-2
                                 focus-visible:ring-[var(--accent)] rounded-lg px-2 py-1"
                    >
                      <FileText className="w-4 h-4" aria-hidden="true" />
                      {t("estimator.terms")}
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <ProjectTermsModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
    </>
  );
}
