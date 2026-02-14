"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";

const technologies = [
  "Next.js",
  "React",
  "Angular",
  "Ionic",
  "NestJS",
  "MongoDB",
  "TypeScript",
  "Tailwind",
  "Cloudflare",
  "Railway",
];

export function TrustBar() {
  const { t } = useLanguage();

  return (
    <section className="!py-12 border-y border-[var(--border)] bg-[var(--surface)]">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-[var(--text-muted)] mb-8 font-semibold">
          {t("trustbar.label")}
        </p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {technologies.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
