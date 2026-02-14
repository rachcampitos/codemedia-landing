import {
  Smartphone,
  Globe,
  Server,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { type Locale } from "@/i18n";

export const siteConfig = {
  name: "Code Media",
  legalName: "Code Media EIRL",
  tagline: "Software profesional para empresas que crecen",
  description: (locale: Locale) =>
    locale === "en"
      ? "We build mobile apps, web platforms and APIs that scale with your business. Solid architectures, clean code, measurable results."
      : "Desarrollamos aplicaciones moviles, web y APIs que escalan con tu negocio. Arquitecturas solidas, codigo limpio, resultados medibles.",
  url: "https://codemediaperu.com",
  location: "Lima, Peru",
  email: "contacto@codemediaperu.com",
  whatsapp: "+51939175392",
  whatsappLink:
    "https://wa.me/51939175392?text=Hola%20Code%20Media%2C%20tengo%20un%20proyecto%20en%20mente",
};

export const getNavLinks = (locale: Locale) => [
  { href: "#inicio", label: locale === "en" ? "Home" : "Inicio", sectionId: "inicio" },
  { href: "#nosotros", label: locale === "en" ? "About" : "Nosotros", sectionId: "nosotros" },
  { href: "#producto", label: locale === "en" ? "Product" : "Producto", sectionId: "producto" },
  { href: "#portafolio", label: locale === "en" ? "Portfolio" : "Portafolio", sectionId: "portafolio" },
  { href: "#servicios", label: locale === "en" ? "Services" : "Servicios", sectionId: "servicios" },
  { href: "#contacto", label: locale === "en" ? "Contact" : "Contacto", sectionId: "contacto" },
];

export const getStats = (locale: Locale) => [
  { value: "1,000+", label: locale === "en" ? "Active Users" : "Usuarios Activos" },
  { value: "99.9%", label: locale === "en" ? "Production Uptime" : "Uptime Produccion" },
  { value: "80%+", label: locale === "en" ? "Test Coverage" : "Cobertura de Tests" },
];

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

export const getServices = (locale: Locale): Service[] => [
  {
    icon: Smartphone,
    title: locale === "en" ? "Mobile Applications" : "Aplicaciones Moviles",
    description:
      locale === "en"
        ? "Native and hybrid apps optimized for iOS and Android. Same technology powering NurseLite in production with thousands of users."
        : "Apps nativas e hibridas optimizadas para iOS y Android. Misma tecnologia que impulsa NurseLite en produccion con miles de usuarios.",
    tags: ["Ionic", "Angular", "Capacitor"],
  },
  {
    icon: Globe,
    title: locale === "en" ? "Web Platforms" : "Plataformas Web",
    description:
      locale === "en"
        ? "Fast, modern and responsive interfaces. From high-conversion landing pages to complex enterprise dashboards."
        : "Interfaces rapidas, modernas y responsive. Desde landing pages de alta conversion hasta dashboards empresariales complejos.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      locale === "en"
        ? "Scalable and secure architectures. Real-time chat, integrated payments, robust authentication: infrastructure that grows with you."
        : "Arquitecturas escalables y seguras. Chat en tiempo real, pagos integrados, autenticacion robusta: infraestructura que crece contigo.",
    tags: ["NestJS", "Node.js", "MongoDB"],
  },
  {
    icon: Palette,
    title: locale === "en" ? "UI/UX Design" : "Diseno UI/UX",
    description:
      locale === "en"
        ? "Interfaces users understand from the first use. Mobile-first, accessible, with documented design systems."
        : "Interfaces que los usuarios entienden desde el primer uso. Mobile-first, accesibles, con design systems documentados.",
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
];

export const product = {
  name: "NurseLite",
  url: "https://nurse-lite.com",
  appUrl: "https://app.nurse-lite.com",
};

export const techStack = {
  frontend: [
    { name: "Ionic", category: "Mobile" },
    { name: "React", category: "Web" },
    { name: "Next.js", category: "Web" },
    { name: "Angular", category: "Enterprise" },
    { name: "Tailwind", category: "UI" },
  ],
  backend: [
    { name: "NestJS", category: "API" },
    { name: "MongoDB", category: "Database" },
    { name: "Socket.io", category: "Real-time" },
    { name: "JWT", category: "Auth" },
  ],
  devops: [
    { name: "Cloudflare", category: "CDN" },
    { name: "Railway", category: "Hosting" },
    { name: "GitHub", category: "CI/CD" },
  ],
  integrations: [
    { name: "Culqi", category: (locale: Locale) => locale === "en" ? "Payments" : "Pagos" },
    { name: "API CEP", category: (locale: Locale) => locale === "en" ? "Verification" : "Verificacion" },
    { name: "SendGrid", category: "Email" },
    { name: "Cloudinary", category: "Media" },
  ],
};

export const getTechCategories = (locale: Locale) => [
  { key: "frontend" as const, label: "Frontend" },
  { key: "backend" as const, label: "Backend" },
  { key: "devops" as const, label: "DevOps" },
  { key: "integrations" as const, label: locale === "en" ? "Integrations" : "Integraciones" },
];

export const getTechItems = (locale: Locale) => ({
  frontend: techStack.frontend,
  backend: techStack.backend,
  devops: techStack.devops,
  integrations: techStack.integrations.map((item) => ({
    name: item.name,
    category: typeof item.category === "function" ? item.category(locale) : item.category,
  })),
});

export interface PortfolioProject {
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  tags: string[];
  category: string;
  url?: string;
  highlights: string[];
}

export const getPortfolio = (locale: Locale): PortfolioProject[] => [
  {
    title: "NurseLite",
    subtitle:
      locale === "en"
        ? "Home nursing platform"
        : "Plataforma de enfermeria a domicilio",
    description:
      locale === "en"
        ? "Mobile and web app connecting patients with certified nurses in Peru. CEP professional verification, Culqi/Yape payments, real-time chat and tier system."
        : "App movil y web que conecta pacientes con enfermeras certificadas en Peru. Verificacion profesional CEP, pagos con Culqi/Yape, chat en tiempo real y sistema de niveles.",
    gradient: "from-[#0F172A] to-[#06B6D4]",
    tags: ["Ionic", "Angular", "NestJS", "MongoDB", "Socket.io", "Culqi"],
    category: "Healthcare SaaS",
    url: "https://nurse-lite.com",
    highlights:
      locale === "en"
        ? ["1,000+ active users", "768 automated tests", "Real-time chat"]
        : ["1,000+ usuarios activos", "768 tests automatizados", "Chat en tiempo real"],
  },
  {
    title: "Frankie & Rodrigo",
    subtitle:
      locale === "en"
        ? "Interactive wedding website"
        : "Sitio web de boda interactivo",
    description:
      locale === "en"
        ? "Wedding website with mystical tarot aesthetic. Includes RSVP with database, photo gallery, animated countdown, FAQ system and admin panel."
        : "Pagina web de boda con estetica mistica y tarot. Incluye RSVP con base de datos, galeria de fotos, countdown animado, sistema de FAQ y panel de administracion.",
    gradient: "from-[#1a1025] to-[#8B7BB8]",
    tags: ["HTML/CSS/JS", "Express.js", "MongoDB", "Cloudflare"],
    category: "Web Design",
    url: undefined,
    highlights:
      locale === "en"
        ? ["Tarot/mystical theme", "Real-time RSVP", "Canvas animations"]
        : ["Tema tarot/mistico", "RSVP en tiempo real", "Animaciones canvas"],
  },
];

export const getProcess = (locale: Locale) => [
  {
    step: "01",
    title:
      locale === "en"
        ? "We understand your problem"
        : "Entendemos tu problema",
    description:
      locale === "en"
        ? "First meeting: we listen, ask questions, challenge assumptions. Output: a clear requirements document."
        : "Primera reunion: escuchamos, preguntamos, desafiamos supuestos. Salida: documento de requerimientos claro.",
  },
  {
    step: "02",
    title:
      locale === "en"
        ? "We design before coding"
        : "Disenamos antes de programar",
    description:
      locale === "en"
        ? "Figma first, code second. We show you clickable prototypes before writing a single line."
        : "Figma primero, codigo despues. Te mostramos prototipos clickeables antes de escribir una linea.",
  },
  {
    step: "03",
    title:
      locale === "en" ? "Weekly deliveries" : "Entregas semanales",
    description:
      locale === "en"
        ? "Every Friday you see real progress in a staging environment. You comment, we adjust, we move forward."
        : "Cada viernes ves avances reales en ambiente de prueba. Comentas, ajustamos, avanzamos.",
  },
  {
    step: "04",
    title:
      locale === "en"
        ? "Production + support"
        : "Produccion + soporte",
    description:
      locale === "en"
        ? "Automatic deployment, 24/7 monitoring. We don't leave you alone after launch."
        : "Deploy automatico, monitoreo 24/7. No te dejamos solo despues del lanzamiento.",
  },
];

export const getAboutValues = (locale: Locale) => [
  {
    title:
      locale === "en" ? "Custom Approach" : "Enfoque a Medida",
    description:
      locale === "en"
        ? "Every project is unique. We develop solutions that adapt to the real needs of the business, not the other way around."
        : "Cada proyecto es unico. Desarrollamos soluciones que se adaptan a las necesidades reales del negocio, no al reves.",
    gradient: "from-[#0F172A] to-[#1E40AF]",
  },
  {
    title:
      locale === "en"
        ? "Production-Proven Stack"
        : "Stack Probado en Produccion",
    description:
      locale === "en"
        ? "Ionic, Next.js, NestJS, MongoDB. We don't experiment with your budget. We use technologies already validated with real users."
        : "Ionic, Next.js, NestJS, MongoDB. No experimentamos con tu presupuesto. Usamos tecnologias que ya validamos con usuarios reales.",
    gradient: "from-[#06B6D4] to-[#0891B2]",
  },
  {
    title:
      locale === "en"
        ? "Continuous Delivery"
        : "Entrega Continua",
    description:
      locale === "en"
        ? "Automatic deploy on every push. Your product evolves every week. You'll see real progress in days, not months."
        : "Deploy automatico en cada push. Tu producto evoluciona cada semana. Veras progreso real en dias, no en meses.",
    gradient: "from-[#F59E0B] to-[#D97706]",
  },
];

export const getProductFeatures = (locale: Locale) => [
  {
    title: locale === "en" ? "CEP Verification" : "Verificacion CEP",
    description:
      locale === "en"
        ? "Every nurse is validated directly with the database of Peru's Nursing Board."
        : "Cada enfermera es validada directamente con la base de datos del Colegio de Enfermeros del Peru.",
    stat: locale === "en" ? "100% verified" : "100% verificadas",
    gradient: "from-[#06B6D4] to-[#0891B2]",
  },
  {
    title: locale === "en" ? "Real-Time Chat" : "Chat en Tiempo Real",
    description:
      locale === "en"
        ? "Socket.io for instant communication between patients and nurses with push notifications."
        : "Socket.io para comunicacion instantanea entre pacientes y enfermeras con notificaciones push.",
    stat: locale === "en" ? "<100ms latency" : "<100ms latencia",
    gradient: "from-[#1E40AF] to-[#3B82F6]",
  },
  {
    title: locale === "en" ? "Integrated Payments" : "Pagos Integrados",
    description:
      locale === "en"
        ? "Culqi + Yape for credit/debit cards and digital wallets."
        : "Culqi + Yape para tarjetas de credito/debito y billeteras digitales.",
    stat: "Culqi + Yape",
    gradient: "from-[#059669] to-[#10B981]",
  },
  {
    title: locale === "en" ? "Tier System" : "Sistema de Niveles",
    description:
      locale === "en"
        ? "Professional gamification: Certified, Outstanding, Experienced and Elite based on performance."
        : "Gamificacion profesional: Certificada, Destacada, Experimentada y Elite basado en rendimiento.",
    stat: locale === "en" ? "4 tiers" : "4 niveles",
    gradient: "from-[#D97706] to-[#F59E0B]",
  },
];

export const getScreenLabels = (locale: Locale) => [
  locale === "en" ? "Home" : "Inicio",
  locale === "en" ? "Nurse Profile" : "Perfil Enfermera",
  "Chat",
  locale === "en" ? "Payments" : "Pagos",
  locale === "en" ? "Service Status" : "Estados del Servicio",
  locale === "en" ? "Security Code" : "Codigo de Seguridad",
];

export const getTabBarLabels = (locale: Locale) => [
  locale === "en" ? "Home" : "Inicio",
  locale === "en" ? "Search" : "Buscar",
  locale === "en" ? "Bookings" : "Citas",
  locale === "en" ? "Profile" : "Perfil",
];
