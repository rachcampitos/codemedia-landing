"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
import { useRef, useCallback, useState, useEffect, type ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  lightIntensity?: number;
  scale?: number;
}

export function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  lightIntensity = 0.15,
  scale = 1.02,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const [hasHover, setHasHover] = useState(false);

  useEffect(() => {
    setHasHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  const springConfig = { stiffness: 200, damping: 25 };

  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rawScale = useMotionValue(1);
  const lightX = useMotionValue(50);
  const lightY = useMotionValue(50);

  const rotateX = useSpring(rawRotateX, springConfig);
  const rotateY = useSpring(rawRotateY, springConfig);
  const scaleVal = useSpring(rawScale, springConfig);

  const background = useMotionTemplate`radial-gradient(circle at ${lightX}% ${lightY}%, rgba(255,255,255,${lightIntensity}), transparent 60%)`;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width;
      const ny = (e.clientY - rect.top) / rect.height;
      rawRotateX.set((ny - 0.5) * -maxTilt * 2);
      rawRotateY.set((nx - 0.5) * maxTilt * 2);
      rawScale.set(scale);
      lightX.set(nx * 100);
      lightY.set(ny * 100);
    },
    [maxTilt, scale, rawRotateX, rawRotateY, rawScale, lightX, lightY]
  );

  const handleMouseLeave = useCallback(() => {
    rawRotateX.set(0);
    rawRotateY.set(0);
    rawScale.set(1);
    lightX.set(50);
    lightY.set(50);
  }, [rawRotateX, rawRotateY, rawScale, lightX, lightY]);

  if (prefersReduced || !hasHover) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div style={{ perspective: 800 }}>
      <motion.div
        ref={ref}
        className={`relative ${className}`}
        style={{
          rotateX,
          rotateY,
          scale: scaleVal,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit] z-10"
          style={{ background }}
        />
      </motion.div>
    </div>
  );
}
