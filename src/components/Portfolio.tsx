"use client";

import { AnimatedSection } from "./ui/AnimatedSection";
import { getPortfolio } from "@/data/content";
import { useLanguage } from "@/i18n";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useMemo, useRef, useCallback, useState, useEffect } from "react";

/* ── Sparkle star SVG ── */
const Sparkle = ({ size = 12 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: size, height: size }}>
    <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
  </svg>
);

/* ── NurseLite phone mockup preview with 3D tilt ── */
function NurseLitePreview() {
  const areaRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const [hasHover, setHasHover] = useState(false);

  useEffect(() => {
    setHasHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  const springCfg = { stiffness: 150, damping: 20 };
  const rawRx = useMotionValue(0);
  const rawRy = useMotionValue(0);
  const rotateX = useSpring(rawRx, springCfg);
  const rotateY = useSpring(rawRy, springCfg);
  const lightX = useMotionValue(50);
  const lightY = useMotionValue(50);
  const glare = useMotionTemplate`radial-gradient(circle at ${lightX}% ${lightY}%, rgba(255,255,255,0.12), transparent 60%)`;

  const canTilt = hasHover && !prefersReduced;

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      if (!areaRef.current || !canTilt) return;
      const rect = areaRef.current.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width;
      const ny = (e.clientY - rect.top) / rect.height;
      rawRx.set((ny - 0.5) * -20);
      rawRy.set((nx - 0.5) * 20);
      lightX.set(nx * 100);
      lightY.set(ny * 100);
    },
    [canTilt, rawRx, rawRy, lightX, lightY]
  );

  const onLeave = useCallback(() => {
    rawRx.set(0);
    rawRy.set(0);
    lightX.set(50);
    lightY.set(50);
  }, [rawRx, rawRy, lightX, lightY]);

  return (
    <div
      ref={areaRef}
      className="absolute inset-0 flex items-center justify-center"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ perspective: 800 }}
    >
      <div className="absolute w-48 h-48 rounded-full bg-[#06B6D4]/20 blur-[60px] -top-10 -right-10" />
      <div className="absolute w-36 h-36 rounded-full bg-[#1E40AF]/30 blur-[40px] bottom-10 left-10" />

      <motion.div
        className="relative"
        style={{
          rotateX: canTilt ? rotateX : 0,
          rotateY: canTilt ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="w-44 h-80 bg-[#0F172A] rounded-[2rem] p-2 shadow-2xl ring-1 ring-white/10 relative overflow-hidden">
          <div className="w-full h-full rounded-[1.6rem] bg-gradient-to-b from-[#1E293B] to-[#0F172A] overflow-hidden flex flex-col">
            <div className="px-4 pt-2 pb-1 flex justify-between items-center text-white/60 text-[8px]">
              <span>9:41</span>
              <div className="flex gap-0.5 items-end">
                {[...Array(4)].map((_, j) => (
                  <div key={j} className="w-0.5 rounded-full bg-white/60" style={{ height: `${(j + 2) * 1.5}px` }} />
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-b from-[#0F172A] to-[#1E40AF] px-3 pt-1 pb-3">
              <p className="text-white/50 text-[6px]">Bienvenida</p>
              <p className="text-white font-bold text-[9px]">Hola, Maria</p>
            </div>
            <div className="px-2 py-2 flex-1">
              <div className="grid grid-cols-2 gap-1 mb-2">
                {["#06B6D4", "#0F172A", "#f59e0b", "#22c55e"].map((c) => (
                  <div key={c} className="rounded-lg p-1.5 bg-[#1E293B] border border-[#334155]">
                    <div className="w-3 h-3 rounded" style={{ background: c, opacity: 0.8 }} />
                    <div className="w-8 h-1 rounded bg-white/20 mt-1" />
                  </div>
                ))}
              </div>
              <div className="rounded-lg p-2 bg-[#1E293B] border border-[#334155] flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#0F172A] ring-1 ring-[#f59e0b]" />
                <div className="flex-1">
                  <div className="w-10 h-1 rounded bg-white/30 mb-0.5" />
                  <div className="w-14 h-1 rounded bg-[#06B6D4]/40" />
                </div>
              </div>
            </div>
            <div className="px-3 py-1 flex justify-between border-t border-[#334155]">
              {[true, false, false, false].map((active, j) => (
                <div key={j} className="flex flex-col items-center gap-0.5">
                  <div className={`w-2.5 h-2.5 rounded-sm ${active ? "bg-[#06B6D4]" : "bg-[#334155]"}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full" />
          {/* Glare overlay */}
          {canTilt && (
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-[2rem] z-10"
              style={{ background: glare }}
            />
          )}
        </div>
      </motion.div>
    </div>
  );
}

/* ── Tarot card data ── */
const tarotCards = [
  {
    numeral: "I",
    title: "The Stars",
    subtitle: "RSVP Constellation",
    description: "Stars fly & form constellations when guests accept",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M12 2L14.09 8.26L20.18 8.27L15.23 12.14L17.18 18.27L12 14.77L6.82 18.27L8.77 12.14L3.82 8.27L9.91 8.26L12 2Z" />
        <circle cx="5" cy="4" r="1" fill="currentColor" opacity="0.5" />
        <circle cx="20" cy="6" r="0.8" fill="currentColor" opacity="0.4" />
        <circle cx="18" cy="18" r="0.6" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  {
    numeral: "II",
    title: "The Oracle",
    subtitle: "Gallery Deal",
    description: "12 oracle cards deal from deck & flip to reveal photos",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <rect x="3" y="2" width="14" height="20" rx="2" />
        <rect x="7" y="4" width="14" height="20" rx="2" opacity="0.5" transform="translate(-2,-2)" />
        <circle cx="10" cy="12" r="3" />
        <path d="M10 9V7M10 17v-2M7 12H5m10 0h2" opacity="0.5" />
      </svg>
    ),
  },
  {
    numeral: "III",
    title: "The Moon",
    subtitle: "Lunar Clock",
    description: "Real astronomical moon phase calculation & Easter egg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        <circle cx="8" cy="8" r="1" fill="currentColor" opacity="0.3" />
        <circle cx="11" cy="14" r="1.5" fill="currentColor" opacity="0.2" />
        <circle cx="6" cy="12" r="0.8" fill="currentColor" opacity="0.25" />
      </svg>
    ),
  },
];

/* ── Single flippable tarot card ── */
function TarotCard({
  card,
  index,
  flipped,
  onFlip,
}: {
  card: (typeof tarotCards)[0];
  index: number;
  flipped: boolean;
  onFlip: () => void;
}) {
  return (
    <motion.div
      className="relative cursor-pointer"
      style={{ perspective: 600, width: 90, height: 140 }}
      initial={{ opacity: 0, y: 20, rotate: (index - 1) * 4 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
      onClick={onFlip}
      role="button"
      aria-label={flipped ? card.title : `Reveal card ${card.numeral}`}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Back */}
        <div
          className="absolute inset-0 rounded-lg border border-[#C4956A]/30 bg-gradient-to-b from-[#0a0a0a] to-[#1a1025] flex flex-col items-center justify-center shadow-[0_0_20px_rgba(139,123,184,0.15)]"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-[calc(100%-10px)] h-[calc(100%-10px)] rounded border border-[#8B7BB8]/20 flex flex-col items-center justify-center gap-1">
            <Sparkle size={14} />
            <p className="text-[10px] text-[#C4956A]/60 tracking-widest font-serif mt-1">
              {card.numeral}
            </p>
            <div className="w-5 h-px bg-[#C4956A]/20" />
            <Sparkle size={8} />
          </div>
        </div>

        {/* Front */}
        <div
          className="absolute inset-0 rounded-lg border border-[#8B7BB8]/40 bg-gradient-to-b from-[#1a1025] to-[#0d0815] flex flex-col items-center justify-center px-2 shadow-[0_0_25px_rgba(139,123,184,0.2)]"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="text-[#C4956A]/80 mb-1">{card.icon}</div>
          <p
            className="text-[#8B7BB8] text-[11px] font-bold tracking-wide text-center leading-tight"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            {card.title}
          </p>
          <div className="w-5 h-px bg-[#C4956A]/30 my-1" />
          <p className="text-[7px] text-[#C4956A]/50 tracking-widest uppercase">
            {card.subtitle}
          </p>
          <p className="text-[7px] text-white/30 text-center mt-1.5 leading-relaxed px-1">
            {card.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Wedding site interactive tarot preview ── */
function WeddingPreview() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [allRevealed, setAllRevealed] = useState(false);

  const stars = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 3,
        duration: Math.random() * 2 + 2,
      })),
    []
  );

  const toggleCard = useCallback((index: number) => {
    setFlippedCards((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      if (next.size === 3) setAllRevealed(true);
      return next;
    });
  }, []);

  return (
    <div className="absolute inset-0 bg-[#050505] overflow-hidden">
      {/* Starfield */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-[#C4956A]"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{ opacity: [0.15, 0.7, 0.15] }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,123,184,0.08)_0%,_transparent_70%)]" />

      {/* Moon glow */}
      <motion.div
        className="absolute top-4 right-8 w-12 h-12 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(196,149,106,0.15) 0%, transparent 70%)",
          boxShadow: "0 0 30px rgba(196,149,106,0.08)",
        }}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Names */}
        <p
          className="text-[#8B7BB8] text-lg lg:text-xl font-serif tracking-wide mb-5"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Frankie <span className="text-[#C4956A]/60 text-sm mx-1">&amp;</span>{" "}
          Rodrigo
        </p>

        {/* 3 Tarot cards */}
        <div className="flex items-center gap-3">
          {tarotCards.map((card, i) => (
            <TarotCard
              key={card.numeral}
              card={card}
              index={i}
              flipped={flippedCards.has(i)}
              onFlip={() => toggleCard(i)}
            />
          ))}
        </div>

        {/* Hint or tagline */}
        <motion.p
          className="text-[9px] text-white/25 tracking-[0.2em] uppercase mt-5"
          animate={
            allRevealed
              ? { opacity: 1 }
              : { opacity: [0.2, 0.5, 0.2] }
          }
          transition={
            allRevealed
              ? { duration: 0.4 }
              : { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
          }
        >
          {allRevealed ? "It was in the cards" : "Click to reveal"}
        </motion.p>
      </div>

      {/* Bottom nav preview */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-5">
        {["Home", "Schedule", "Gallery", "RSVP"].map((item, i) => (
          <motion.span
            key={item}
            className="text-[8px] text-white/15 tracking-wider"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

/* ── Preview resolver ── */
const previews: Record<string, () => React.JSX.Element> = {
  NurseLite: NurseLitePreview,
  "Frankie & Rodrigo": WeddingPreview,
};

export function Portfolio() {
  const { locale, t } = useLanguage();
  const portfolio = useMemo(() => getPortfolio(locale), [locale]);

  return (
    <section id="portafolio">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <p className="text-[var(--primary)] font-bold text-sm uppercase tracking-[0.2em] mb-4">
            {t("portfolio.label")}
          </p>
          <h2 className="text-[var(--secondary)] dark:text-white mb-6">
            {t("portfolio.title")}
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            {t("portfolio.description")}
          </p>
        </AnimatedSection>

        <div className="grid gap-8 lg:gap-10">
          {portfolio.map((project, i) => {
            const Preview = previews[project.title];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <div className="glass-premium rounded-3xl overflow-hidden group">
                  <div className="grid lg:grid-cols-2">
                    {/* Visual area - same size for both */}
                    <div className={`relative h-72 lg:h-auto lg:min-h-[420px] overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                      {Preview && <Preview />}

                      {/* Category badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-md text-white border border-white/20">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Info area - same layout for both */}
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <h3 className="text-2xl lg:text-3xl font-bold text-[var(--secondary)] dark:text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-[var(--text-muted)] text-sm mb-5">
                        {project.subtitle}
                      </p>

                      <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.highlights.map((h) => (
                          <div
                            key={h}
                            className="flex items-center gap-2 text-sm text-[var(--text-primary)]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
                            {h}
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--surface-secondary)] text-[var(--text-secondary)] border border-[var(--border)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      {project.url ? (
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#06B6D4] dark:text-[#22D3EE] font-semibold group/link hover:gap-3 transition-all"
                        >
                          {t("portfolio.viewProject")}
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-[var(--text-muted)] text-sm">
                          <ArrowRight className="w-4 h-4" />
                          {t("portfolio.privateProject")}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
