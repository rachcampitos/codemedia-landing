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
    description: "Stars fly & form constellations on RSVP accept",
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
      style={{ perspective: 600, width: 100, height: 150 }}
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

/* ── RDM Fútbol FIFA card preview ── */
const FIFA_STATS = [
  { key: "PAC", val: 82 },
  { key: "TIR", val: 75 },
  { key: "PAS", val: 78 },
  { key: "REG", val: 80 },
  { key: "DEF", val: 44 },
  { key: "FIS", val: 71 },
];

function RDMFutbolPreview() {
  // active = 0-5 highlights that stat; -1 = "reveal all" pause between cycles
  const [active, setActive] = useState(0);

  useEffect(() => {
    let step = 0;
    const tick = () => {
      step++;
      if (step <= FIFA_STATS.length) {
        setActive(step - 1);
      } else {
        // Pause showing all stats
        setActive(-1);
        setTimeout(() => { step = 0; }, 1200);
      }
    };
    const t = setInterval(tick, 900);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#022008] flex items-center justify-center">
      {/* Pitch glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(22,163,74,0.18)_0%,transparent_70%)]" />

      {/* Floating dots — players on pitch */}
      {[
        { x: 20, y: 30 }, { x: 75, y: 25 }, { x: 50, y: 55 },
        { x: 30, y: 70 }, { x: 68, y: 65 }, { x: 15, y: 60 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white/20"
          style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.3, 1] }}
          transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* FIFA card — outer wrapper owns the shadow and 3D entry */}
      <motion.div
        className="relative z-10 select-none"
        initial={{ opacity: 0, y: 16, rotateY: 15 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          width: 160,
          height: 224,
          perspective: 600,
          boxShadow: "0 8px 40px rgba(212,168,83,0.40), 0 0 0 1px rgba(212,168,83,0.20)",
          borderRadius: 12,
        }}
      >
        {/* Card body */}
        <div
          className="w-full h-full rounded-xl overflow-hidden flex flex-col relative"
          style={{
            background: "linear-gradient(145deg, #2a1a00 0%, #5c3d00 40%, #1a1000 100%)",
            border: "1px solid rgba(212,168,83,0.5)",
          }}
        >
          {/* Warm top shimmer */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(170deg, rgba(255,200,80,0.06) 0%, transparent 45%)" }} />
          {/* Diagonal shimmer */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(212,168,83,0.07) 0%, transparent 55%)" }} />

          {/* HEADER ZONE — 44px */}
          <div className="flex justify-between items-start px-3 pt-3" style={{ height: 44 }}>
            <div className="flex flex-col items-center">
              <span className="text-[#D4A853] font-black leading-none" style={{ fontSize: 28 }}>82</span>
              <span className="text-[#D4A853]/60 font-bold tracking-wide" style={{ fontSize: 9 }}>CAM</span>
            </div>
            {/* Country + badge centered */}
            <div className="flex flex-col items-center justify-start pt-0.5 gap-0.5">
              <span className="text-[#D4A853]/40 tracking-widest font-bold" style={{ fontSize: 7 }}>PER</span>
            </div>
            <div className="w-7 h-7 rounded-full border border-[#D4A853]/30 bg-[#D4A853]/10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="rgba(212,168,83,0.65)" strokeWidth="1.5" style={{ width: 14, height: 14 }}>
                <path d="M12 2l3 6h6l-5 4 2 7-6-4-6 4 2-7L3 8h6z" />
              </svg>
            </div>
          </div>

          {/* AVATAR ZONE — 80px */}
          <div className="flex items-center justify-center" style={{ height: 80 }}>
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: 72,
                height: 72,
                background: "linear-gradient(to bottom, rgba(212,168,83,0.22), rgba(212,168,83,0.04))",
                boxShadow: "0 0 0 1px rgba(212,168,83,0.28)",
              }}
            >
              <span className="font-black text-[#D4A853]" style={{ fontSize: 22, letterSpacing: "0.04em" }}>R.M.</span>
            </div>
          </div>

          {/* DIVIDER — 12px */}
          <div className="flex items-center px-3" style={{ height: 12 }}>
            <div className="flex-1 h-px bg-[#D4A853]/20" />
          </div>

          {/* NAME ZONE — 20px */}
          <div className="flex items-center justify-center" style={{ height: 20 }}>
            <span className="text-[#D4A853] font-black tracking-[0.15em] uppercase" style={{ fontSize: 11 }}>R. MENDOZA</span>
          </div>

          {/* STATS ZONE — 68px */}
          <div className="grid grid-cols-3 px-2 pb-3" style={{ height: 68 }}>
            {FIFA_STATS.map((s, i) => (
              <motion.div
                key={s.key}
                className="flex flex-col items-center justify-center"
                style={{ borderTop: i >= 3 ? "1px solid rgba(212,168,83,0.10)" : "none" }}
                animate={{ scale: active === i ? 1.12 : 1 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <span
                  className="font-black leading-none"
                  style={{
                    fontSize: 13,
                    color: active === -1 || active === i ? "#D4A853" : "rgba(212,168,83,0.65)",
                    transition: "color 0.25s ease",
                  }}
                >
                  {s.val}
                </span>
                <span className="text-white/35 tracking-wide" style={{ fontSize: 8 }}>{s.key}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom section labels */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-3">
        {["Esta Semana", "Jugadores", "Sorteo"].map((label, i) => (
          <motion.span
            key={label}
            className="text-white/20 tracking-wider uppercase"
            style={{ fontSize: 7 }}
            animate={{ opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
          >
            {label}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

/* ── BodegaPOS tablet POS preview ── */
const POS_PRODUCTS = [
  { color: "#06B6D4", name: "Leche",  price: "4.50" },
  { color: "#D4500A", name: "Arroz",  price: "3.20" },
  { color: "#F4A823", name: "Azúcar", price: "3.80" },
  { color: "#2A9D5C", name: "Fideo",  price: "2.50" },
  { color: "#8B5CF6", name: "Atún",   price: "3.80" },
  { color: "#EC4899", name: "Yogurt", price: "2.00" },
  { color: "#D4500A", name: "Inka",   price: "2.50" },
  { color: "#06B6D4", name: "Pan",    price: "0.30" },
];

function BodegaPOSPreview() {
  const prefersReduced = useReducedMotion();
  const [shimmer, setShimmer] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setShimmer((p) => (p >= POS_PRODUCTS.length - 1 ? 0 : p + 1)), 900);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
      {/* Ambient glows */}
      <div className="absolute w-72 h-72 rounded-full bg-[#D4500A]/20 blur-[80px] -top-10 -left-10" />
      <div className="absolute w-48 h-48 rounded-full bg-[#F4A823]/10 blur-[60px] bottom-0 right-0" />

      {/* Tablet frame */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative"
        style={{
          width: 460, height: 290,
          background: "#1c1c1e", borderRadius: 18, padding: 10,
          boxShadow: "0 12px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.07)",
        }}
      >
        {/* Side buttons */}
        <div className="absolute rounded-l" style={{ left: -5, top: 58, width: 5, height: 32, background: "#2a2a2c" }} />
        <div className="absolute rounded-l" style={{ left: -5, top: 104, width: 5, height: 32, background: "#2a2a2c" }} />
        <div className="absolute rounded-r" style={{ right: -5, top: 80, width: 5, height: 46, background: "#2a2a2c" }} />

        {/* Screen */}
        <div className="w-full h-full overflow-hidden flex" style={{ borderRadius: 10, background: "#F0ECE8" }}>

          {/* LEFT 60% — catalogue */}
          <div className="flex flex-col" style={{ width: "60%", background: "#FAF8F5", borderRight: "1px solid #E0D9D3" }}>
            {/* Toolbar */}
            <div className="flex items-center justify-between" style={{ background: "#D4500A", padding: "7px 11px" }}>
              <span style={{ color: "#fff", fontSize: 12, fontWeight: 800 }}>🏪 Cobrar</span>
              <div className="flex items-center justify-center" style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(255,255,255,0.2)" }}>
                <span style={{ fontSize: 10 }}>🔍</span>
              </div>
            </div>
            {/* Category chips */}
            <div className="flex" style={{ gap: 4, padding: "5px 7px", borderBottom: "1px solid #E0D9D3" }}>
              {["Abarrotes", "Bebidas", "Frescos", "Todos"].map((cat, i) => (
                <div key={cat} style={{
                  padding: "3px 6px", borderRadius: 10, fontSize: 8, fontWeight: 700,
                  background: i === 0 ? "#D4500A" : "rgba(212,80,10,0.07)",
                  color: i === 0 ? "#fff" : "#8A8A8A",
                  border: i === 0 ? "1px solid #D4500A" : "1px solid #E0D9D3",
                }}>
                  {cat}
                </div>
              ))}
            </div>
            {/* 4×2 product grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 4, padding: 7, flex: 1 }}>
              {POS_PRODUCTS.map((p, i) => (
                <motion.div
                  key={i}
                  style={{
                    background: "#fff", borderRadius: 7, padding: "5px 4px",
                    display: "flex", flexDirection: "column", alignItems: "flex-start",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                    border: shimmer === i ? "1px solid rgba(212,80,10,0.40)" : "1px solid transparent",
                  }}
                  animate={!prefersReduced && shimmer === i ? { scale: 1.04 } : { scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div style={{ width: 16, height: 16, borderRadius: 5, background: p.color, marginBottom: 3, opacity: 0.85 }} />
                  <div style={{ fontSize: 7, fontWeight: 700, color: "#1A1A1A", lineHeight: 1.2, marginBottom: 2 }}>{p.name}</div>
                  <div style={{ fontSize: 9, fontWeight: 800, color: "#D4500A" }}>S/{p.price}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT 40% — cart */}
          <div className="flex flex-col" style={{ flex: 1, background: "#F0ECE8" }}>
            {/* Cuenta tabs */}
            <div className="flex items-center" style={{ background: "#FAF8F5", borderBottom: "1px solid #E0D9D3", padding: "7px 9px", gap: 5 }}>
              <div style={{ padding: "3px 8px", borderRadius: 7, background: "#2563eb", color: "#fff", fontSize: 9, fontWeight: 700 }}>Cuenta 1</div>
              <div style={{ padding: "3px 8px", borderRadius: 7, background: "transparent", border: "1px solid #2A9D5C", color: "#2A9D5C", fontSize: 9, fontWeight: 700 }}>Cuenta 2</div>
              <div className="flex items-center justify-center" style={{ marginLeft: "auto", width: 20, height: 20, borderRadius: "50%", border: "1.5px dashed #D4500A", color: "#D4500A", fontSize: 14, fontWeight: 700 }}>+</div>
            </div>
            {/* Cart items */}
            <div style={{ flex: 1 }}>
              {[
                { name: "Leche Gloria", qty: "×2", price: "S/ 9.00" },
                { name: "Arroz Costeño", qty: "×1", price: "S/ 3.20" },
                { name: "Azúcar Rubia", qty: "×1", price: "S/ 3.80" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between" style={{ padding: "7px 10px", borderBottom: "1px solid #E0D9D3" }}>
                  <div>
                    <div style={{ fontSize: 9.5, fontWeight: 700, color: "#1A1A1A" }}>{item.name}</div>
                    <div style={{ fontSize: 7.5, color: "#8A8A8A" }}>{item.qty}</div>
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 800, color: "#1A1A1A" }}>{item.price}</div>
                </div>
              ))}
            </div>
            {/* Cart footer */}
            <div style={{ background: "#FAF8F5", borderTop: "1px solid #E0D9D3", padding: 10 }}>
              <div className="flex items-center justify-between" style={{ marginBottom: 7 }}>
                <span style={{ fontSize: 10, color: "#4A4A4A", fontWeight: 700 }}>Total</span>
                <span style={{ fontSize: 17, fontWeight: 900, color: "#1A1A1A" }}>S/ 16.00</span>
              </div>
              <motion.div
                style={{
                  background: "#D4500A", borderRadius: 10, padding: "8px 10px",
                  textAlign: "center", color: "#fff", fontSize: 11, fontWeight: 900,
                  cursor: "default",
                }}
                animate={prefersReduced ? {} : { scale: [1, 1.03, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                ✅ COBRAR S/ 16.00
              </motion.div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

/* ── Preview resolver ── */
const previews: Record<string, () => React.JSX.Element> = {
  NurseLite: NurseLitePreview,
  "Frankie & Rodrigo": WeddingPreview,
  BodegaPOS: BodegaPOSPreview,
  "RDM Futbol": RDMFutbolPreview,
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
