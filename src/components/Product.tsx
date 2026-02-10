"use client";

import { AnimatedSection } from "./ui/AnimatedSection";
import { product } from "@/data/content";
import {
  ExternalLink,
  Shield,
  MessageCircle,
  CreditCard,
  Trophy,
  FlaskConical,
  Wifi,
  Smartphone,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { useTheme } from "./ThemeProvider";

/* ── Feature cards data ── */
const features = [
  {
    icon: Shield,
    title: "Verificacion CEP",
    description:
      "Cada enfermera es validada directamente con la base de datos del Colegio de Enfermeros del Peru.",
    stat: "100% verificadas",
    gradient: "from-[#06B6D4] to-[#0891B2]",
  },
  {
    icon: MessageCircle,
    title: "Chat en Tiempo Real",
    description:
      "Socket.io para comunicacion instantanea entre pacientes y enfermeras con notificaciones push.",
    stat: "<100ms latencia",
    gradient: "from-[#1E40AF] to-[#3B82F6]",
  },
  {
    icon: CreditCard,
    title: "Pagos Integrados",
    description:
      "Culqi + Yape para tarjetas de credito/debito y billeteras digitales.",
    stat: "Culqi + Yape",
    gradient: "from-[#059669] to-[#10B981]",
  },
  {
    icon: Trophy,
    title: "Sistema de Niveles",
    description:
      "Gamificacion profesional: Certificada, Destacada, Experimentada y Elite basado en rendimiento.",
    stat: "4 niveles",
    gradient: "from-[#D97706] to-[#F59E0B]",
  },
];

/* ── Tech badges ── */
const techBadges = [
  { icon: FlaskConical, label: "768 Tests" },
  { icon: BarChart3, label: "82% Coverage" },
  { icon: Wifi, label: "Socket.io" },
  { icon: Smartphone, label: "iOS + Android + Web" },
];

/* ── Phone screen definitions ── */
const screenLabels = [
  "Inicio",
  "Perfil Enfermera",
  "Chat",
  "Pagos",
  "Estados del Servicio",
  "Codigo de Seguridad",
];

const slideDurations = [4500, 4500, 4500, 4500, 7500, 5000];

/* Star SVG reusable */
const Star = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-2 h-2 text-[#f59e0b]">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

/* ── Theme-aware color helpers ── */
interface ScreenProps {
  isDark: boolean;
}

const t = (isDark: boolean, light: string, dark: string) => isDark ? dark : light;

/* ── Individual phone screens ── */
function HomeScreen({ isDark }: ScreenProps) {
  return (
    <>
      <div className="bg-gradient-to-b from-[#0F172A] to-[#1E40AF] px-4 pt-2 pb-5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-white/60 text-[8px]">Bienvenida</p>
            <p className="text-white font-bold text-[11px]">Hola, Maria</p>
          </div>
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center relative">
            <div className="w-3.5 h-3.5 rounded-full bg-white/60" />
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#f43f5e] border border-[#1E40AF]" />
          </div>
        </div>
        <div className="bg-white/15 rounded-xl px-3 py-2 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full border-2 border-white/50" />
          <span className="text-white/50 text-[9px]">Buscar servicio de enfermeria...</span>
        </div>
      </div>
      <div className={`px-3 py-3 flex-1 ${t(isDark, "bg-[#f8fafc]", "bg-[#0F172A]")}`}>
        <p className={`text-[9px] font-semibold mb-2 ${t(isDark, "text-[#0F172A]", "text-[#F8FAFC]")}`}>Servicios Populares</p>
        <div className="grid grid-cols-2 gap-1.5 mb-3">
          {[
            { label: "Inyecciones", color: "#06B6D4", price: "S/50" },
            { label: "Curaciones", color: isDark ? "#38BDF8" : "#0F172A", price: "S/60" },
            { label: "Control vital", color: "#f59e0b", price: "S/45" },
            { label: "Terapia", color: "#22c55e", price: "S/80" },
          ].map((s) => (
            <div key={s.label} className={`rounded-xl p-2 shadow-sm border ${t(isDark, "bg-white border-[#e2e8f0]", "bg-[#1E293B] border-[#334155]")}`}>
              <div className="flex items-center justify-between mb-1">
                <div className="w-5 h-5 rounded-lg flex items-center justify-center" style={{ background: `${s.color}15` }}>
                  <div className="w-2.5 h-2.5 rounded" style={{ background: s.color }} />
                </div>
                <span className="text-[7px] font-semibold text-[#06B6D4]">{s.price}</span>
              </div>
              <p className={`text-[8px] font-medium ${t(isDark, "text-[#0F172A]", "text-[#F8FAFC]")}`}>{s.label}</p>
            </div>
          ))}
        </div>
        <p className={`text-[9px] font-semibold mb-1.5 ${t(isDark, "text-[#0F172A]", "text-[#F8FAFC]")}`}>Enfermeras Elite Cerca de Ti</p>
        <div className={`rounded-xl p-2.5 shadow-sm border flex items-center gap-2.5 ${t(isDark, "bg-white border-[#e2e8f0]", "bg-[#1E293B] border-[#334155]")}`}>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#0F172A] flex items-center justify-center flex-shrink-0 ring-2 ring-[#f59e0b]">
            <span className="text-white text-[9px] font-bold">MC</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1">
              <p className={`text-[9px] font-semibold ${t(isDark, "text-[#0F172A]", "text-[#F8FAFC]")}`}>Maria C.</p>
              <span className="text-[6px] px-1 py-0.5 rounded bg-[#f59e0b]/15 text-[#d97706] font-bold">ELITE</span>
            </div>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} />)}
              <span className="text-[7px] text-[#64748b] ml-0.5">4.9 (245)</span>
            </div>
            <p className="text-[7px] text-[#06B6D4] font-medium">CEP 108887 Verificada</p>
          </div>
          <div className={`rounded-lg px-2 py-1 flex items-center justify-center ${t(isDark, "bg-[#0F172A]", "bg-[#06B6D4]")}`}>
            <span className={`text-[7px] font-semibold leading-none ${t(isDark, "text-white", "text-[#0F172A]")}`}>Ver</span>
          </div>
        </div>
      </div>
    </>
  );
}

function NurseProfileScreen({ isDark }: ScreenProps) {
  return (
    <>
      <div className="bg-[#0F172A] px-4 pt-2 pb-3">
        <div className="flex items-center justify-between">
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-white text-[8px]">&larr;</span>
          </div>
          <span className="text-white text-[9px] font-semibold">Perfil</span>
          <div className="w-5 h-5" />
        </div>
      </div>
      <div className={`px-4 pt-3 flex-1 ${t(isDark, "bg-[#f8fafc]", "bg-[#0F172A]")}`}>
        <div className="flex flex-col items-center mb-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#0F172A] flex items-center justify-center ring-3 ring-[#f59e0b] shadow-lg">
            <span className="text-white text-sm font-bold">MC</span>
          </div>
          <span className="text-[7px] px-1.5 py-0.5 rounded-full bg-[#f59e0b]/15 text-[#d97706] font-bold mt-1">ELITE</span>
          <p className={`text-[10px] font-bold mt-1 ${t(isDark, "text-[#0F172A]", "text-[#F8FAFC]")}`}>Maria Claudia C.</p>
          <div className="flex items-center gap-1 mt-0.5">
            <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
            <span className="text-[7px] text-[#22c55e] font-medium">CEP 108887 - HABIL</span>
          </div>
          <div className="flex items-center gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => <Star key={i} />)}
            <span className="text-[7px] text-[#64748b] ml-0.5">4.9 (245 resenas)</span>
          </div>
        </div>
        <div className={`flex justify-around rounded-xl p-2 shadow-sm border mb-2.5 ${t(isDark, "bg-white border-[#e2e8f0]", "bg-[#1E293B] border-[#334155]")}`}>
          {[
            { val: "52", lbl: "Servicios" },
            { val: "245", lbl: "Resenas" },
            { val: "2 anos", lbl: "Experiencia" },
          ].map((s) => (
            <div key={s.lbl} className="text-center">
              <p className={`text-[10px] font-bold ${t(isDark, "text-[#0F172A]", "text-[#F8FAFC]")}`}>{s.val}</p>
              <p className="text-[6px] text-[#64748b]">{s.lbl}</p>
            </div>
          ))}
        </div>
        <p className={`text-[8px] font-semibold mb-1 ${t(isDark, "text-[#0F172A]", "text-[#F8FAFC]")}`}>Especialidades</p>
        <div className="flex flex-wrap gap-1 mb-2.5">
          {["Inyectables", "Curaciones", "Terapia", "Control Vital"].map((s) => (
            <span key={s} className={`text-[7px] px-1.5 py-0.5 rounded-full font-medium ${t(isDark, "bg-[#06B6D4]/10 text-[#0891B2]", "bg-[#06B6D4]/20 text-[#22D3EE]")}`}>{s}</span>
          ))}
        </div>
        <div className={`rounded-xl py-2 flex items-center justify-center ${t(isDark, "bg-[#0F172A]", "bg-[#06B6D4]")}`}>
          <span className={`text-[9px] font-semibold leading-none ${t(isDark, "text-white", "text-[#0F172A]")}`}>Solicitar Servicio</span>
        </div>
      </div>
    </>
  );
}

function ChatScreen({ isDark }: ScreenProps) {
  return (
    <>
      <div className="bg-[#0F172A] px-4 pt-2 pb-2.5">
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-white text-[8px]">&larr;</span>
          </div>
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#0F172A] flex items-center justify-center ring-1 ring-[#f59e0b]">
            <span className="text-white text-[7px] font-bold">MC</span>
          </div>
          <div className="flex-1">
            <p className="text-white text-[9px] font-semibold">Maria C.</p>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
              <span className="text-[#22c55e] text-[7px]">En linea</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`px-3 py-3 flex-1 flex flex-col justify-end gap-2 ${t(isDark, "bg-[#f8fafc]", "bg-[#0F172A]")}`}>
        <div className="flex items-center justify-center">
          <span className={`text-[7px] text-[#94a3b8] px-2 py-0.5 rounded-full shadow-sm ${t(isDark, "bg-white", "bg-[#1E293B]")}`}>Hoy, 14:30</span>
        </div>
        {/* Nurse message */}
        <div className="flex gap-1.5 max-w-[85%]">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#0F172A] flex items-center justify-center flex-shrink-0 mt-auto">
            <span className="text-white text-[6px] font-bold">MC</span>
          </div>
          <div>
            <div className={`rounded-2xl rounded-bl-sm px-2.5 py-1.5 shadow-sm border ${t(isDark, "bg-white border-[#e2e8f0]", "bg-[#1E293B] border-[#334155]")}`}>
              <p className={`text-[8px] ${t(isDark, "text-[#0F172A]", "text-[#F8FAFC]")}`}>Hola Maria, confirmo tu servicio de inyeccion para las 3pm. Ya estoy en camino.</p>
            </div>
            <span className="text-[6px] text-[#94a3b8] ml-1">14:30</span>
          </div>
        </div>
        {/* User message */}
        <div className="flex justify-end max-w-[80%] ml-auto">
          <div>
            <div className={`rounded-2xl rounded-br-sm px-2.5 py-1.5 ${t(isDark, "bg-[#0F172A]", "bg-[#06B6D4]")}`}>
              <p className={`text-[8px] ${t(isDark, "text-white", "text-[#0F172A]")}`}>Perfecto, gracias! Te espero.</p>
            </div>
            <div className="flex items-center justify-end gap-0.5 mt-0.5">
              <span className="text-[6px] text-[#94a3b8]">14:31</span>
              <span className="text-[6px] text-[#06B6D4]">&#10003;&#10003;</span>
            </div>
          </div>
        </div>
        {/* Nurse typing */}
        <div className="flex gap-1.5 max-w-[40%]">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#0F172A] flex items-center justify-center flex-shrink-0 mt-auto">
            <span className="text-white text-[6px] font-bold">MC</span>
          </div>
          <div className={`rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm border flex items-center gap-1 ${t(isDark, "bg-white border-[#e2e8f0]", "bg-[#1E293B] border-[#334155]")}`}>
            <span className="w-1 h-1 rounded-full bg-[#94a3b8] animate-bounce [animation-delay:0ms]" />
            <span className="w-1 h-1 rounded-full bg-[#94a3b8] animate-bounce [animation-delay:150ms]" />
            <span className="w-1 h-1 rounded-full bg-[#94a3b8] animate-bounce [animation-delay:300ms]" />
          </div>
        </div>
        {/* Input bar */}
        <div className={`rounded-full px-3 py-1.5 flex items-center gap-2 shadow-sm border mt-1 ${t(isDark, "bg-white border-[#e2e8f0]", "bg-[#1E293B] border-[#334155]")}`}>
          <div className={`w-4 h-4 rounded-full ${t(isDark, "bg-[#e2e8f0]", "bg-[#334155]")}`} />
          <span className="text-[8px] text-[#94a3b8] flex-1">Escribe un mensaje...</span>
          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${t(isDark, "bg-[#0F172A]", "bg-[#06B6D4]")}`}>
            <span className={`text-[7px] ${t(isDark, "text-white", "text-[#0F172A]")}`}>&uarr;</span>
          </div>
        </div>
      </div>
    </>
  );
}

function PaymentScreen({ isDark }: ScreenProps) {
  return (
    <>
      <div className="bg-[#0F172A] px-4 pt-2 pb-3">
        <div className="flex items-center justify-between">
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-white text-[8px]">&larr;</span>
          </div>
          <span className="text-white text-[9px] font-semibold">Pago Seguro</span>
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-white text-[7px]">&#128274;</span>
          </div>
        </div>
      </div>
      <div className={`px-4 py-3 flex-1 ${t(isDark, "bg-[#f8fafc]", "bg-[#0F172A]")}`}>
        <div className={`rounded-xl p-3 shadow-sm border mb-3 ${t(isDark, "bg-white border-[#e2e8f0]", "bg-[#1E293B] border-[#334155]")}`}>
          <p className="text-[8px] text-[#64748b] mb-1">Resumen del servicio</p>
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${t(isDark, "bg-[#06B6D4]/10", "bg-[#06B6D4]/20")}`}>
              <div className="w-4 h-4 rounded bg-[#06B6D4]" />
            </div>
            <div className="flex-1">
              <p className={`text-[9px] font-semibold ${t(isDark, "text-[#0F172A]", "text-[#F8FAFC]")}`}>Inyeccion Intramuscular</p>
              <p className="text-[7px] text-[#64748b]">Maria C. - Elite - 30 min</p>
            </div>
          </div>
          <div className={`border-t pt-2 flex justify-between ${t(isDark, "border-[#e2e8f0]", "border-[#334155]")}`}>
            <span className="text-[8px] text-[#64748b]">Total</span>
            <span className={`text-[12px] font-bold ${t(isDark, "text-[#0F172A]", "text-[#F8FAFC]")}`}>S/ 40.00</span>
          </div>
        </div>
        <p className={`text-[8px] font-semibold mb-2 ${t(isDark, "text-[#0F172A]", "text-[#F8FAFC]")}`}>Metodo de pago</p>
        <div className="space-y-1.5 mb-3">
          <div className={`rounded-xl p-2.5 shadow-sm border-2 border-[#06B6D4] flex items-center gap-2.5 ${t(isDark, "bg-white", "bg-[#1E293B]")}`}>
            <div className="w-8 h-5 rounded bg-gradient-to-r from-[#1A1F71] to-[#2566AF] flex items-center justify-center">
              <span className="text-white text-[6px] font-bold">VISA</span>
            </div>
            <div className="flex-1">
              <p className={`text-[8px] font-medium ${t(isDark, "text-[#0F172A]", "text-[#F8FAFC]")}`}>**** **** **** 4532</p>
            </div>
            <div className="w-3 h-3 rounded-full bg-[#06B6D4] flex items-center justify-center">
              <span className="text-white text-[6px]">&#10003;</span>
            </div>
          </div>
          <div className={`rounded-xl p-2.5 shadow-sm border flex items-center gap-2.5 ${t(isDark, "bg-white border-[#e2e8f0]", "bg-[#1E293B] border-[#334155]")}`}>
            <div className="w-8 h-5 rounded bg-[#6C2DC7] flex items-center justify-center">
              <span className="text-white text-[6px] font-bold">Yape</span>
            </div>
            <p className={`text-[8px] ${t(isDark, "text-[#0F172A]", "text-[#F8FAFC]")}`}>Pagar con Yape</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 mb-2.5">
          <span className="text-[7px]">&#128274;</span>
          <span className="text-[7px] text-[#64748b]">Procesado por Culqi - SSL 256-bit</span>
        </div>
        <div className={`rounded-xl py-2.5 flex items-center justify-center ${t(isDark, "bg-gradient-to-r from-[#0F172A] to-[#1E40AF]", "bg-gradient-to-r from-[#06B6D4] to-[#0891B2]")}`}>
          <span className={`text-[9px] font-semibold leading-none ${t(isDark, "text-white", "text-[#0F172A]")}`}>Pagar S/ 40.00</span>
        </div>
      </div>
    </>
  );
}

/* ── Service status steps (matching real NurseLite app) ── */
const serviceSteps = [
  { label: "Aceptado", sublabel: "Enfermera confirmada", gradient: "from-[#3b82f6] via-[#2563eb] to-[#1d4ed8]", color: "#3b82f6", icon: "\u2713" },
  { label: "En camino", sublabel: "Llegando en 8 min", gradient: "from-[#f97316] via-[#ea580c] to-[#f97316]", color: "#f97316", icon: "\u2192" },
  { label: "Llego", sublabel: "En tu domicilio", gradient: "from-[#f59e0b] via-[#d97706] to-[#f59e0b]", color: "#f59e0b", icon: "\u25CF" },
  { label: "En servicio", sublabel: "Atencion en progreso", gradient: "from-[#10b981] via-[#059669] to-[#10b981]", color: "#10b981", icon: "\u2695" },
  { label: "Completado", sublabel: "Servicio finalizado", gradient: "from-[#34d399] via-[#10b981] to-[#34d399]", color: "#10b981", icon: "\u2713" },
];

function ServiceStatusScreen({ isDark }: ScreenProps) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setActiveStep(0);
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev >= serviceSteps.length - 1 ? prev : prev + 1));
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  const step = serviceSteps[activeStep];

  return (
    <>
      <div className="bg-[#0F172A] px-4 pt-2 pb-2.5">
        <div className="flex items-center justify-between">
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-white text-[8px]">&larr;</span>
          </div>
          <span className="text-white text-[9px] font-semibold">Servicio Activo</span>
          <div className="w-5 h-5" />
        </div>
      </div>
      <div className={`px-3.5 py-3 flex-1 ${t(isDark, "bg-[#f8fafc]", "bg-[#0F172A]")}`}>
        {/* Gradient Banner - hero element with gradient-shift animation */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          className={`relative rounded-xl p-3 mb-3 overflow-hidden bg-gradient-to-r ${step.gradient}`}
          style={{ backgroundSize: "200% 200%", animation: "gradient-shift 3s ease infinite" }}
        >
          {/* Pulse overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.2) 0%, transparent 60%)",
              animation: "pulse-glow 2s ease-in-out infinite",
            }}
          />
          <div className="relative flex items-center gap-2.5">
            <motion.div
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm"
            >
              <span className="text-white text-sm font-bold">{step.icon}</span>
            </motion.div>
            <div className="flex-1">
              <p className="text-white text-[11px] font-bold">{step.label}</p>
              <p className="text-white/70 text-[7px]">{step.sublabel}</p>
            </div>
            <div className="text-white/40 text-[8px] font-mono">{activeStep + 1}/5</div>
          </div>
        </motion.div>

        {/* Vertical timeline with pulse rings */}
        <div className="pl-1 mb-2.5">
          {serviceSteps.map((s, i) => (
            <div key={s.label} className="flex items-start gap-2.5">
              <div className="flex flex-col items-center">
                <div className="relative">
                  {/* Pulse ring - always rendered, animated via props for smooth transitions */}
                  <motion.div
                    key={`pulse-${i}-${activeStep}`}
                    animate={
                      i === activeStep
                        ? { scale: [1, 2.5], opacity: [0.4, 0] }
                        : { scale: 1, opacity: 0 }
                    }
                    transition={
                      i === activeStep
                        ? { duration: 1.4, ease: "easeOut" }
                        : { duration: 0.4 }
                    }
                    className="absolute inset-0 rounded-full"
                    style={{ background: s.color }}
                  />
                  <div
                    className="relative w-4 h-4 rounded-full flex items-center justify-center transition-all duration-400"
                    style={{
                      background: i <= activeStep ? s.color : isDark ? "#334155" : "#e2e8f0",
                    }}
                  >
                    {i < activeStep ? (
                      <span className="text-white text-[6px] font-bold">{"\u2713"}</span>
                    ) : i === activeStep ? (
                      <motion.span
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-white"
                      />
                    ) : (
                      <span className={`w-1 h-1 rounded-full ${isDark ? "bg-[#64748b]" : "bg-[#94a3b8]"}`} />
                    )}
                  </div>
                </div>
                {i < serviceSteps.length - 1 && (
                  <div className="relative w-0.5 h-4">
                    <div className={`absolute inset-0 ${isDark ? "bg-[#334155]" : "bg-[#e2e8f0]"}`} />
                    {i < activeStep && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 origin-top"
                        style={{ background: s.color }}
                      />
                    )}
                  </div>
                )}
              </div>
              <div className="-mt-0.5 pb-1">
                <p className={`text-[8px] font-semibold transition-colors duration-300 ${
                  i <= activeStep
                    ? t(isDark, "text-[#0F172A]", "text-[#F8FAFC]")
                    : "text-[#94a3b8]"
                }`}>
                  {s.label}
                </p>
                {i <= activeStep && (
                  <p className="text-[6px] text-[#64748b]">
                    {i < activeStep ? "Completado" : "Ahora"}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Nurse card */}
        <div className={`rounded-xl p-2 flex items-center gap-2 border ${t(isDark, "bg-white border-[#e2e8f0]", "bg-[#1E293B] border-[#334155]")}`}>
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#0F172A] flex items-center justify-center ring-2 ring-[#f59e0b]">
            <span className="text-white text-[6px] font-bold">MC</span>
          </div>
          <div className="flex-1">
            <p className={`text-[8px] font-semibold ${t(isDark, "text-[#0F172A]", "text-[#F8FAFC]")}`}>Maria C.</p>
            <p className="text-[6px] text-[#06B6D4]">Enfermera Elite</p>
          </div>
          <div className={`rounded-lg px-2 py-1 flex items-center justify-center ${t(isDark, "bg-[#0F172A]", "bg-[#06B6D4]")}`}>
            <span className={`text-[7px] font-semibold leading-none ${t(isDark, "text-white", "text-[#0F172A]")}`}>Chat</span>
          </div>
        </div>
      </div>
    </>
  );
}

function SecurityCodeScreen({ isDark }: ScreenProps) {
  const [seconds, setSeconds] = useState(247);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 299));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <>
      <div className="bg-[#0F172A] px-4 pt-2 pb-3">
        <div className="flex items-center justify-between">
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-white text-[8px]">&larr;</span>
          </div>
          <span className="text-white text-[9px] font-semibold">Verificacion</span>
          <div className="w-5 h-5" />
        </div>
      </div>
      <div className={`px-4 py-4 flex-1 flex flex-col items-center ${t(isDark, "bg-[#f8fafc]", "bg-[#0F172A]")}`}>
        {/* Shield */}
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#06B6D4] to-[#0891B2] flex items-center justify-center mb-3 shadow-lg">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>

        <p className={`text-[10px] font-bold mb-0.5 ${t(isDark, "text-[#0F172A]", "text-[#F8FAFC]")}`}>
          Codigo de Seguridad
        </p>
        <p className="text-[7px] text-[#64748b] text-center mb-3 px-2 leading-relaxed">
          Comparte este codigo con tu enfermera al llegar
        </p>

        {/* Code display - 6 digits like the real app */}
        <div className="flex gap-1.5 mb-3">
          {["4", "7", "2", "8", "1", "5"].map((digit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
              className={`w-8 h-10 rounded-lg flex items-center justify-center text-base font-bold shadow-sm border ${
                t(isDark,
                  "bg-white border-[#e2e8f0] text-[#0F172A]",
                  "bg-[#1E293B] border-[#334155] text-[#F8FAFC]"
                )
              }`}
            >
              {digit}
            </motion.div>
          ))}
        </div>

        {/* Timer */}
        <div className={`rounded-full px-3 py-1 flex items-center gap-1.5 mb-3 ${t(isDark, "bg-[#06B6D4]/10", "bg-[#06B6D4]/20")}`}>
          <div className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
          <span className="text-[8px] font-mono font-semibold text-[#06B6D4]">
            Expira en {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
          </span>
        </div>

        {/* Info card */}
        <div className={`rounded-xl p-2.5 w-full border ${t(isDark, "bg-white border-[#e2e8f0]", "bg-[#1E293B] border-[#334155]")}`}>
          <div className="flex items-start gap-2">
            <div className="w-4 h-4 rounded-full bg-[#22c55e]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[#22c55e] text-[6px] font-bold">{"\u2713"}</span>
            </div>
            <div>
              <p className={`text-[7px] font-semibold mb-0.5 ${t(isDark, "text-[#0F172A]", "text-[#F8FAFC]")}`}>
                Verificacion doble
              </p>
              <p className="text-[6px] text-[#64748b] leading-relaxed">
                La enfermera ingresa este codigo al llegar para confirmar su identidad y proteger tu seguridad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const screens = [HomeScreen, NurseProfileScreen, ChatScreen, PaymentScreen, ServiceStatusScreen, SecurityCodeScreen];

/* ── Main Product Section ── */
export function Product() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const nextScreen = useCallback(() => {
    setActiveScreen((prev) => (prev + 1) % screens.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(nextScreen, slideDurations[activeScreen]);
    return () => clearTimeout(timer);
  }, [isPaused, nextScreen, activeScreen]);

  const ActiveScreenComponent = screens[activeScreen];

  return (
    <section id="producto" className="relative overflow-hidden bg-[var(--surface)]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#06B6D4] font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Lo Que Construimos
          </p>
          <h2 className="text-[var(--secondary)] dark:text-white mb-4">
            {product.name}
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            {product.tagline}
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-[1fr_auto] gap-12 xl:gap-20 items-start">
          {/* Left: Feature cards + description */}
          <div>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-8 max-w-2xl">
              {product.description}
            </p>

            {/* Feature cards grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-5 group hover:shadow-lg transition-shadow"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-3`}>
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-[var(--secondary)] dark:text-white mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">
                    {feature.description}
                  </p>
                  <span className="text-xs font-semibold text-[#06B6D4] font-mono">
                    {feature.stat}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {techBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--text-secondary)] text-xs font-medium"
                >
                  <badge.icon className="w-3.5 h-3.5 text-[#06B6D4]" />
                  {badge.label}
                </div>
              ))}
            </div>

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

          {/* Right: Phone mockup with carousel */}
          <AnimatedSection direction="right" className="lg:sticky lg:top-28">
            <div
              className="relative w-[280px] mx-auto"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Glow - stronger in dark mode */}
              <div className={`absolute inset-0 bg-gradient-to-br from-[#06B6D4] to-[#1E40AF] blur-[60px] rounded-full scale-110 transition-opacity duration-500 ${isDark ? "opacity-25" : "opacity-15"}`} />

              {/* Phone frame */}
              <div className={`relative bg-[#0F172A] rounded-[3rem] p-3 transition-shadow duration-500 ${isDark ? "shadow-[0_0_50px_rgba(6,182,212,0.2),0_0_100px_rgba(6,182,212,0.1)] ring-1 ring-[#06B6D4]/20" : "shadow-2xl"}`}>
                <div className={`rounded-[2.4rem] overflow-hidden aspect-[9/19] flex flex-col ${t(isDark, "bg-white", "bg-[#0F172A]")}`}>
                  {/* Status bar */}
                  <div className="bg-[#0F172A] px-6 pt-3 pb-1.5 flex justify-between items-center text-white text-[10px] flex-shrink-0">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="flex gap-0.5 items-end">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="w-0.5 rounded-full bg-white" style={{ height: `${(i + 2) * 2}px` }} />
                        ))}
                      </div>
                      <div className="w-3.5 h-2 border border-white/80 rounded-sm relative ml-1">
                        <div className="absolute inset-0.5 bg-white/80 rounded-[1px]" />
                      </div>
                    </div>
                  </div>

                  {/* Screen content - fixed area prevents resize between slides */}
                  <div className="flex-1 relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeScreen}
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -60 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        className="absolute inset-0 flex flex-col overflow-hidden"
                      >
                        <ActiveScreenComponent isDark={isDark} />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Tab bar */}
                  <div className={`border-t px-5 py-1.5 flex justify-between flex-shrink-0 ${t(isDark, "bg-white border-[#e2e8f0]", "bg-[#0F172A] border-[#334155]")}`}>
                    {["Inicio", "Buscar", "Citas", "Perfil"].map((item, i) => (
                      <div key={item} className="flex flex-col items-center gap-0.5">
                        <div className={`w-4 h-4 rounded-sm ${i === 0 ? (isDark ? "bg-[#06B6D4]" : "bg-[#0F172A]") : t(isDark, "bg-[#cbd5e1]", "bg-[#334155]")}`} />
                        <span className={`text-[7px] ${i === 0 ? (isDark ? "text-[#06B6D4] font-semibold" : "text-[#0F172A] font-semibold") : "text-[#94a3b8]"}`}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dynamic island */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
              </div>

              {/* Carousel dots */}
              <div className="flex items-center justify-center gap-2 mt-5">
                {screenLabels.map((label, i) => (
                  <button
                    key={label}
                    onClick={() => setActiveScreen(i)}
                    aria-label={`Ver pantalla: ${label}`}
                    className={`transition-all duration-300 rounded-full ${
                      i === activeScreen
                        ? "w-6 h-2 bg-[#06B6D4]"
                        : "w-2 h-2 bg-[var(--text-muted)] hover:bg-[var(--text-secondary)]"
                    }`}
                  />
                ))}
              </div>

              {/* Screen label */}
              <p className="text-center text-xs text-[var(--text-muted)] mt-2 font-medium">
                {screenLabels[activeScreen]}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
