"use client";

import { AnimatedSection } from "./ui/AnimatedSection";
import { stats } from "@/data/content";
import { Target, Lightbulb, Zap } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Target,
    title: "Enfoque a Medida",
    description:
      "Cada proyecto es unico. Desarrollamos soluciones personalizadas que se adaptan exactamente a las necesidades del negocio.",
    gradient: "from-[#E74C3C] to-[#C0392B]",
  },
  {
    icon: Lightbulb,
    title: "Stack Probado en Produccion",
    description:
      "Ionic, Next.js, NestJS, MongoDB. No experimentamos con tu presupuesto. Usamos tecnologias que las grandes empresas ya validaron.",
    gradient: "from-[#3498DB] to-[#2980B9]",
  },
  {
    icon: Zap,
    title: "Entrega Continua",
    description:
      "Deploy automatico en cada push. Tu producto evoluciona cada semana. Veras progreso real en dias, no en meses.",
    gradient: "from-[#F39C12] to-[#E67E22]",
  },
];

export function About() {
  return (
    <section id="nosotros">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <p className="text-[var(--primary)] font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Sobre Nosotros
          </p>
          <h2 className="text-[var(--secondary)] dark:text-white mb-6">
            Software peruano,{" "}
            <span className="gradient-text-animated">estandares globales</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            En Code Media fusionamos la identidad cultural peruana con las
            tecnologias mas avanzadas del mercado. Nuestro codigo esta en
            produccion, atendiendo usuarios reales todos los dias.
          </p>
        </AnimatedSection>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="glass-premium rounded-3xl p-10 text-center h-full">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[var(--secondary)] dark:text-white mb-4 text-xl font-bold">
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <AnimatedSection>
          <div className="glass-premium rounded-3xl p-12 lg:p-16">
            <div className="flex flex-wrap justify-around gap-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-5xl md:text-6xl font-black mb-3">
                    <span className="gradient-text-animated">{stat.value}</span>
                  </p>
                  <p className="text-[var(--text-secondary)] font-semibold uppercase tracking-wider text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
