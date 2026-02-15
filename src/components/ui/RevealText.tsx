"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, createElement, type ElementType } from "react";

interface RevealTextProps {
  children: string;
  className?: string;
  as?: ElementType;
  stagger?: number;
  delay?: number;
}

export function RevealText({
  children,
  className = "",
  as: Tag = "h2",
  stagger = 0.04,
  delay = 0,
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReduced = useReducedMotion();

  const words = children.split(" ");

  if (prefersReduced) {
    return createElement(Tag, { className, ref }, children);
  }

  return createElement(
    Tag,
    { ref, className, "aria-label": children },
    words.map((word, i) => (
      <motion.span
        key={i}
        aria-hidden="true"
        className="inline-block"
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={
          isInView
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, y: 20, filter: "blur(4px)" }
        }
        transition={{
          duration: 0.4,
          delay: delay + i * stagger,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {word}
        {i < words.length - 1 ? "\u00A0" : ""}
      </motion.span>
    ))
  );
}
