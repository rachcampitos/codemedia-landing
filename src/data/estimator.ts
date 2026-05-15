// estimator.ts
// Master data for the Code Media EIRL Budget Estimator

export type ProjectTypeId =
  | "landing"
  | "webapp"
  | "ecommerce"
  | "mobile"
  | "system";

export type TimelineId = "rush" | "standard" | "flexible";

export type FeatureCategory =
  | "Seguridad"
  | "Pagos"
  | "Backend"
  | "Frontend"
  | "Mobile"
  | "Calidad";

export interface ProjectType {
  id: ProjectTypeId;
  label: { es: string; en: string };
  description: { es: string; en: string };
  baseMin: number;
  baseMax: number;
  weeks: { min: number; max: number };
}

export interface Feature {
  id: string;
  name: { es: string; en: string };
  description: { es: string; en: string };
  priceMin: number;
  priceMax: number;
  category: FeatureCategory;
}

export interface TimelineOption {
  id: TimelineId;
  label: { es: string; en: string };
  description: { es: string; en: string };
  multiplier: number;
  weekMultiplier: number;
}

export interface Estimate {
  priceMin: number;
  priceMax: number;
  weekMin: number;
  weekMax: number;
}

// ─── PROJECT TYPES ─────────────────────────────────────────────────────────────

export const PROJECT_TYPES: ProjectType[] = [
  {
    id: "landing",
    label: { es: "Landing Page", en: "Landing Page" },
    description: {
      es: "Sitio de una página optimizado para conversión",
      en: "Single-page site optimized for conversion",
    },
    baseMin: 500,
    baseMax: 1200,
    weeks: { min: 2, max: 4 },
  },
  {
    id: "webapp",
    label: { es: "Aplicación Web", en: "Web Application" },
    description: {
      es: "App web completa con backend y autenticación",
      en: "Full web app with backend and authentication",
    },
    baseMin: 2500,
    baseMax: 6000,
    weeks: { min: 6, max: 14 },
  },
  {
    id: "ecommerce",
    label: { es: "E-commerce", en: "E-commerce" },
    description: {
      es: "Tienda online con catálogo, carrito y pagos",
      en: "Online store with catalog, cart, and payments",
    },
    baseMin: 3000,
    baseMax: 7000,
    weeks: { min: 8, max: 16 },
  },
  {
    id: "mobile",
    label: { es: "App Movil", en: "Mobile App" },
    description: {
      es: "Aplicación nativa iOS/Android con Capacitor",
      en: "Native iOS/Android app with Capacitor",
    },
    baseMin: 5000,
    baseMax: 12000,
    weeks: { min: 10, max: 20 },
  },
  {
    id: "system",
    label: { es: "Sistema con Panel Admin", en: "System with Admin Panel" },
    description: {
      es: "Sistema completo con roles y panel de gestión",
      en: "Full system with roles and management panel",
    },
    baseMin: 6000,
    baseMax: 14000,
    weeks: { min: 12, max: 24 },
  },
];

// ─── FEATURES ──────────────────────────────────────────────────────────────────

export const FEATURES: Feature[] = [
  // Seguridad
  {
    id: "auth_rbac",
    name: { es: "JWT Auth + RBAC", en: "JWT Auth + RBAC" },
    description: {
      es: "Autenticación segura con control de acceso basado en roles",
      en: "Secure authentication with role-based access control",
    },
    priceMin: 800,
    priceMax: 1400,
    category: "Seguridad",
  },
  {
    id: "oauth2",
    name: { es: "Login Social (OAuth2)", en: "Social Login (OAuth2)" },
    description: {
      es: "Inicio de sesion con Google, Facebook u otros proveedores OAuth2",
      en: "Sign in with Google, Facebook, or other OAuth2 providers",
    },
    priceMin: 600,
    priceMax: 1000,
    category: "Seguridad",
  },
  {
    id: "two_fa",
    name: {
      es: "Autenticacion en 2 pasos",
      en: "Two-Factor Authentication",
    },
    description: {
      es: "OTP por email/SMS y soporte para apps autenticadoras (TOTP)",
      en: "OTP via email/SMS and authenticator app support (TOTP)",
    },
    priceMin: 700,
    priceMax: 1200,
    category: "Seguridad",
  },
  {
    id: "security_owasp",
    name: { es: "Seguridad OWASP", en: "OWASP Security" },
    description: {
      es: "Proteccion contra OWASP Top 10: XSS, CSRF, SQL injection y mas",
      en: "Protection against OWASP Top 10: XSS, CSRF, SQL injection and more",
    },
    priceMin: 900,
    priceMax: 1500,
    category: "Seguridad",
  },

  // Pagos
  {
    id: "payments_culqi",
    name: {
      es: "Pagos Culqi (Peru + Yape)",
      en: "Culqi Payments (Peru + Yape)",
    },
    description: {
      es: "Tarjetas Visa/Mastercard, Yape y cobros recurrentes para Peru",
      en: "Visa/Mastercard, Yape, and recurring billing for Peru",
    },
    priceMin: 1500,
    priceMax: 2500,
    category: "Pagos",
  },
  {
    id: "payments_stripe",
    name: {
      es: "Pagos Stripe (Internacional)",
      en: "Stripe Payments (International)",
    },
    description: {
      es: "Pagos internacionales en 135+ monedas con cumplimiento fiscal global",
      en: "International payments in 135+ currencies with global tax compliance",
    },
    priceMin: 1200,
    priceMax: 2000,
    category: "Pagos",
  },

  // Backend
  {
    id: "api_rest",
    name: { es: "API REST + Docs OpenAPI", en: "REST API + OpenAPI Docs" },
    description: {
      es: "API documentada con Swagger/OpenAPI generada automaticamente",
      en: "API documented with auto-generated Swagger/OpenAPI",
    },
    priceMin: 600,
    priceMax: 1200,
    category: "Backend",
  },
  {
    id: "websockets",
    name: {
      es: "Tiempo real (WebSockets)",
      en: "Real-time (WebSockets)",
    },
    description: {
      es: "Comunicacion bidireccional en tiempo real con Socket.io",
      en: "Bidirectional real-time communication with Socket.io",
    },
    priceMin: 1200,
    priceMax: 2000,
    category: "Backend",
  },
  {
    id: "push_notifications",
    name: { es: "Push Notifications", en: "Push Notifications" },
    description: {
      es: "Notificaciones push via Firebase Cloud Messaging para iOS/Android",
      en: "Push notifications via Firebase Cloud Messaging for iOS/Android",
    },
    priceMin: 700,
    priceMax: 1200,
    category: "Backend",
  },

  // Frontend
  {
    id: "animations",
    name: {
      es: "Animaciones avanzadas",
      en: "Advanced animations",
    },
    description: {
      es: "Animaciones fluidas y micro-interacciones con Framer Motion a 60fps",
      en: "Smooth animations and micro-interactions with Framer Motion at 60fps",
    },
    priceMin: 2000,
    priceMax: 5000,
    category: "Frontend",
  },
  {
    id: "pwa",
    name: { es: "Progressive Web App (PWA)", en: "Progressive Web App (PWA)" },
    description: {
      es: "Instalable desde el navegador, funciona offline, sin pasar por tiendas",
      en: "Installable from the browser, works offline, no app store needed",
    },
    priceMin: 1500,
    priceMax: 3500,
    category: "Frontend",
  },
  {
    id: "i18n",
    name: { es: "Multiidioma (i18n)", en: "Multilanguage (i18n)" },
    description: {
      es: "Soporte completo para multiples idiomas desde el primer commit",
      en: "Full support for multiple languages from the first commit",
    },
    priceMin: 800,
    priceMax: 2000,
    category: "Frontend",
  },

  // Mobile
  {
    id: "accessibility",
    name: {
      es: "Accesibilidad WCAG 2.1 AA",
      en: "WCAG 2.1 AA Accessibility",
    },
    description: {
      es: "Cumplimiento de estandares de accesibilidad internacionales",
      en: "Compliance with international accessibility standards",
    },
    priceMin: 2000,
    priceMax: 5000,
    category: "Mobile",
  },

  // Calidad
  {
    id: "analytics",
    name: {
      es: "Analytics + Error tracking",
      en: "Analytics + Error tracking",
    },
    description: {
      es: "Metricas de uso con Google Analytics/Mixpanel + Sentry para errores",
      en: "Usage metrics with Google Analytics/Mixpanel + Sentry for errors",
    },
    priceMin: 800,
    priceMax: 2000,
    category: "Calidad",
  },
  {
    id: "seo",
    name: { es: "SEO Tecnico", en: "Technical SEO" },
    description: {
      es: "SSR/SSG, metadata dinamica, sitemap y optimizacion Core Web Vitals",
      en: "SSR/SSG, dynamic metadata, sitemap, and Core Web Vitals optimization",
    },
    priceMin: 1200,
    priceMax: 2500,
    category: "Calidad",
  },
];

// ─── TIMELINE OPTIONS ──────────────────────────────────────────────────────────

export const TIMELINE_OPTIONS: TimelineOption[] = [
  {
    id: "rush",
    label: { es: "Rush (<4 semanas)", en: "Rush (<4 weeks)" },
    description: {
      es: "Dedicacion exclusiva, horas extra. +25–45% al costo base.",
      en: "Exclusive dedication, extra hours. +25-45% to base cost.",
    },
    multiplier: 1.35,
    weekMultiplier: 0.6,
  },
  {
    id: "standard",
    label: { es: "Estandar (4-8 semanas)", en: "Standard (4-8 weeks)" },
    description: {
      es: "Sprints de 2 semanas con demos regulares. Precio base.",
      en: "2-week sprints with regular demos. Base price.",
    },
    multiplier: 1.0,
    weekMultiplier: 1.0,
  },
  {
    id: "flexible",
    label: { es: "Flexible (2+ meses)", en: "Flexible (2+ months)" },
    description: {
      es: "Planificacion relajada, mejor precio y mayor calidad. -10%.",
      en: "Relaxed planning, better price and higher quality. -10%.",
    },
    multiplier: 0.90,
    weekMultiplier: 1.4,
  },
];

// ─── FEATURES BY CATEGORY ──────────────────────────────────────────────────────

export const FEATURE_CATEGORIES: FeatureCategory[] = [
  "Seguridad",
  "Pagos",
  "Backend",
  "Frontend",
  "Mobile",
  "Calidad",
];

export function getFeaturesByCategory(
  category: FeatureCategory
): Feature[] {
  return FEATURES.filter((f) => f.category === category);
}

// ─── CALCULATE ESTIMATE ────────────────────────────────────────────────────────

export function calculateEstimate(
  projectTypeId: ProjectTypeId | null,
  selectedFeatureIds: string[],
  timelineId: TimelineId
): Estimate {
  const projectType = PROJECT_TYPES.find((p) => p.id === projectTypeId);
  const timeline = TIMELINE_OPTIONS.find((t) => t.id === timelineId);

  if (!projectType || !timeline) {
    return { priceMin: 0, priceMax: 0, weekMin: 0, weekMax: 0 };
  }

  const selectedFeatures = FEATURES.filter((f) =>
    selectedFeatureIds.includes(f.id)
  );

  const featurePriceMin = selectedFeatures.reduce(
    (sum, f) => sum + f.priceMin,
    0
  );
  const featurePriceMax = selectedFeatures.reduce(
    (sum, f) => sum + f.priceMax,
    0
  );

  const priceMin = Math.round(
    (projectType.baseMin + featurePriceMin) * timeline.multiplier
  );
  const priceMax = Math.round(
    (projectType.baseMax + featurePriceMax) * timeline.multiplier
  );

  const weekMin = Math.round(
    projectType.weeks.min * timeline.weekMultiplier
  );
  const weekMax = Math.round(
    projectType.weeks.max * timeline.weekMultiplier
  );

  return { priceMin, priceMax, weekMin, weekMax };
}
