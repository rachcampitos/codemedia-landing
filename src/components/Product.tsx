"use client";

import { AnimatedSection } from "./ui/AnimatedSection";
import { product } from "@/data/content";
import { ExternalLink, CheckCircle, BadgeCheck } from "lucide-react";
import Link from "next/link";

export function Product() {
  return (
    <section id="producto" className="bg-[var(--surface)]">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[var(--primary)] font-semibold text-sm uppercase tracking-wider mb-3">
            Producto Destacado
          </p>
          <h2 className="text-[var(--secondary)] dark:text-white mb-4">
            {product.name}
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
            {product.tagline}
          </p>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Product info */}
          <AnimatedSection direction="left" className="flex-1">
            <div className="glass-card rounded-2xl p-8 lg:p-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm font-medium mb-6">
                <BadgeCheck className="w-4 h-4" />
                Producto en Produccion
              </div>

              <p className="text-[var(--text-secondary)] text-lg mb-8">
                {product.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                    <span className="text-[var(--text-primary)]">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex gap-8 mb-8 pb-8 border-b border-[var(--border)]">
                {product.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-[var(--primary)]">
                      {stat.value}
                    </p>
                    <p className="text-sm text-[var(--text-muted)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                Visitar NurseLite
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Visual / mockup placeholder */}
          <AnimatedSection direction="right" className="flex-1">
            <div className="relative max-w-md mx-auto">
              {/* Phone mockup frame */}
              <div className="relative bg-[var(--secondary)] dark:bg-[#21262D] rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-[var(--background)] rounded-[2.4rem] overflow-hidden aspect-[9/16] flex flex-col items-center justify-center">
                  {/* Simulated app screen */}
                  <div className="w-full h-full bg-gradient-to-b from-[#f0fdf4] to-[#ffffff] dark:from-[#0D1117] dark:to-[#161B22] flex flex-col items-center justify-center p-8">
                    <div className="w-16 h-16 rounded-2xl bg-[var(--primary)] flex items-center justify-center mb-4">
                      <span className="text-white text-2xl font-bold">N</span>
                    </div>
                    <h4 className="text-xl font-bold text-[var(--secondary)] dark:text-white mb-2">
                      NurseLite
                    </h4>
                    <p className="text-sm text-[var(--text-muted)] text-center mb-6">
                      Enfermeria a domicilio
                    </p>
                    <div className="w-full space-y-3">
                      <div className="h-3 bg-[var(--surface-secondary)] rounded-full w-full" />
                      <div className="h-3 bg-[var(--surface-secondary)] rounded-full w-3/4" />
                      <div className="h-3 bg-[var(--surface-secondary)] rounded-full w-5/6" />
                      <div className="mt-6 h-12 bg-[var(--primary)] rounded-xl w-full opacity-80" />
                    </div>
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[var(--secondary)] dark:bg-[#21262D] rounded-b-2xl" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
