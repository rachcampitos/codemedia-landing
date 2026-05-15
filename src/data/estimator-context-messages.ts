// estimator-context-messages.ts
// Contextual advisory messages for the Code Media EIRL Budget Estimator
// Displayed in Layer 1 (tip panel) based on selected features and timeline

import {
  AlertTriangle,
  Info,
  Lightbulb,
  Shield,
  Clock,
  CreditCard,
  Smartphone,
  Globe,
  Zap,
  Database,
  Lock,
  Bell,
  FileText,
  Search,
  BarChart2,
  Layers,
  RefreshCw,
  Users,
  type LucideIcon,
} from "lucide-react";

export type MessageSeverity = "warning" | "info" | "tip";

export interface ContextMessage {
  id: string;
  severity: MessageSeverity;
  icon: LucideIcon;
  title: string;
  body: string;
  /** Feature IDs that must ALL be selected to trigger (AND logic) */
  requires?: string[];
  /** Feature IDs where ANY one triggers this message (OR logic) */
  anyOf?: string[];
  /** Timeline IDs that trigger this message */
  timelines?: string[];
  /** Minimum number of selected features to trigger */
  minFeatures?: number;
  /** Maximum number of selected features (for "you're keeping it lean" tip) */
  maxFeatures?: number;
}

export const CONTEXT_MESSAGES: ContextMessage[] = [
  // ─── SINGLE-FEATURE TRIGGERS ─────────────────────────────────────────────

  {
    id: "rush_timeline_warning",
    severity: "warning",
    icon: AlertTriangle,
    title: "Plazo acelerado: +20–35% al costo base",
    body: "Entregar en menos de 4 semanas requiere dedicación exclusiva y horas extra. El costo sube pero la calidad no baja — simplemente pagas el costo de oportunidad real.",
    timelines: ["rush"],
  },
  {
    id: "flexible_timeline_tip",
    severity: "tip",
    icon: Lightbulb,
    title: "Plazo flexible = mejor precio y mayor calidad",
    body: "Con 8+ semanas podemos planificar sprints bien definidos, hacer revisiones contigo en cada etapa y entregarte código más mantenible a largo plazo.",
    timelines: ["flexible"],
  },
  {
    id: "two_fa_info",
    severity: "info",
    icon: Shield,
    title: "2FA agrega 1–2 semanas al módulo de autenticación",
    body: "Incluye flujo OTP por email/SMS, QR para apps autenticadoras (TOTP) y pantallas de recuperación. Recomendado si manejarás datos sensibles o pagos.",
    anyOf: ["two_fa"],
  },
  {
    id: "payments_culqi_info",
    severity: "info",
    icon: CreditCard,
    title: "Culqi: integración lista para Perú + Yape",
    body: "Culqi es el procesador local más completo: tarjetas Visa/Mastercard, Yape y cobros recurrentes. Requiere cuenta empresa con RUC activo. Comisión: 3.99% + S/0.60 por transacción.",
    anyOf: ["payments_culqi"],
  },
  {
    id: "payments_stripe_info",
    severity: "info",
    icon: CreditCard,
    title: "Stripe: ideal para clientes internacionales",
    body: "Stripe acepta 135+ monedas y simplifica el cumplimiento fiscal global. Para Perú, considera que los cobros en USD implican conversión y posibles comisiones bancarias adicionales para tus usuarios.",
    anyOf: ["payments_stripe"],
  },
  {
    id: "websockets_info",
    severity: "info",
    icon: Zap,
    title: "WebSockets requieren infraestructura persistente",
    body: "Las conexiones en tiempo real no funcionan en servidores serverless estándar. Necesitarás un servidor dedicado (Railway, Fly.io) o un servicio gestionado como Ably o Pusher — ambos tienen costo mensual.",
    anyOf: ["websockets"],
  },
  {
    id: "push_notifications_info",
    severity: "info",
    icon: Bell,
    title: "Push notifications: FCM gratis, pero requiere configuración nativa",
    body: "Firebase Cloud Messaging (FCM) no tiene costo por volumen razonable. Sin embargo, para apps nativas (iOS/Android) se necesita configurar certificados APNs y google-services.json — suma 1 semana extra.",
    anyOf: ["push_notifications"],
  },
  {
    id: "job_queues_info",
    severity: "info",
    icon: RefreshCw,
    title: "Colas de trabajo: +infraestructura Redis o BullMQ",
    body: "Los jobs asincrónicos (emails, reportes, scraping) requieren Redis como broker. En Railway cuesta ~$5–10/mes. Incluye reintentos automáticos, dashboards de monitoreo y procesamiento en segundo plano.",
    anyOf: ["job_queues"],
  },
  {
    id: "file_uploads_info",
    severity: "info",
    icon: FileText,
    title: "Subida de archivos: Cloudinary o S3",
    body: "Cloudinary es ideal para imágenes (transformación automática, CDN incluido, gratis hasta 25GB). Para documentos PDF/Excel recomendamos S3 + CloudFront. El almacenamiento en el servidor propio es un antipatrón.",
    anyOf: ["file_uploads"],
  },
  {
    id: "mobile_capacitor_info",
    severity: "info",
    icon: Smartphone,
    title: "App nativa con Capacitor: publicación en tiendas incluye tiempo de revisión",
    body: "Google Play aprueba en 1–3 días hábiles. Apple App Store puede demorar 1–7 días por revisión manual. Planifica el lanzamiento con al menos 2 semanas de margen antes de la fecha objetivo.",
    anyOf: ["mobile_capacitor"],
  },
  {
    id: "pwa_tip",
    severity: "tip",
    icon: Smartphone,
    title: "PWA: la forma más rápida de tener presencia móvil",
    body: "Una Progressive Web App se instala desde el navegador sin pasar por tiendas. Ideal como primer paso antes de invertir en una app nativa. Menor costo, menor tiempo de desarrollo, actualizable al instante.",
    anyOf: ["pwa"],
  },
  {
    id: "offline_sync_warning",
    severity: "warning",
    icon: AlertTriangle,
    title: "Offline sync: el feature más complejo de implementar correctamente",
    body: "La sincronización offline implica resolver conflictos de datos, manejo de colas locales y estrategias de merge. Agrega 2–4 semanas al cronograma y requiere planificación cuidadosa de los casos borde antes de escribir código.",
    anyOf: ["offline_sync"],
  },
  {
    id: "i18n_info",
    severity: "info",
    icon: Globe,
    title: "Internacionalización: define los idiomas desde el inicio",
    body: "Agregar i18n retroactivamente cuesta 2–3x más que hacerlo desde el primer día. Si tienes planes de expansión internacional, define los idiomas objetivo ahora aunque la traducción llegue después.",
    anyOf: ["i18n"],
  },
  {
    id: "seo_info",
    severity: "info",
    icon: Search,
    title: "SEO técnico requiere SSR o generación estática",
    body: "Las SPAs (Angular/React puros) no son indexadas correctamente por Google sin renderizado del lado servidor. Si el SEO es crítico para tu negocio, Next.js con SSR o SSG es la elección correcta desde el inicio.",
    anyOf: ["seo"],
  },
  {
    id: "admin_dashboard_info",
    severity: "info",
    icon: BarChart2,
    title: "Panel de administración: define el alcance antes de cotizar",
    body: "Un panel admin puede ser tan simple como una tabla con filtros o tan complejo como un ERP. El rango de costo es enorme. Define qué entidades necesitas gestionar y qué acciones realizará cada rol de usuario.",
    anyOf: ["admin_dashboard"],
  },
  {
    id: "design_system_tip",
    severity: "tip",
    icon: Layers,
    title: "Sistema de diseño: inversión que se recupera rápido",
    body: "Un sistema de componentes bien definido reduce el tiempo de desarrollo de cada pantalla nueva en 40–60%. Si tienes más de 15 pantallas planificadas, el costo inicial se amortiza dentro del mismo proyecto.",
    anyOf: ["design_system"],
  },
  {
    id: "analytics_info",
    severity: "info",
    icon: BarChart2,
    title: "Analytics: define las métricas antes de implementar",
    body: "Sin un plan de métricas previo, los analytics se convierten en datos sin contexto. Define 5–10 eventos clave (registro, conversión, abandono) antes de integrar cualquier herramienta de tracking.",
    anyOf: ["analytics"],
  },
  {
    id: "accessibility_info",
    severity: "info",
    icon: Users,
    title: "Accesibilidad WCAG 2.1 AA: buena práctica y requisito legal en muchos mercados",
    body: "Implementar accesibilidad desde el inicio agrega ~10–15% al tiempo de desarrollo. Hacerlo retroactivamente puede costar 3x más. En mercados como EE.UU. y Europa, incumplir las normas puede implicar demandas.",
    anyOf: ["accessibility"],
  },
  {
    id: "security_owasp_tip",
    severity: "tip",
    icon: Shield,
    title: "Seguridad OWASP incluida en proyectos con autenticación o pagos",
    body: "Cuando seleccionás auth o pagos, ya incorporamos protecciones contra OWASP Top 10: SQL injection, XSS, CSRF, rate limiting, y validación de inputs. No es un add-on — es parte del entregable.",
    anyOf: ["security_owasp"],
  },
  {
    id: "rate_limiting_info",
    severity: "info",
    icon: Shield,
    title: "Rate limiting: protección básica contra bots y abusos",
    body: "Implementamos rate limiting por IP y por usuario usando Redis o en memoria. Esencial si tu API será pública o si tienes endpoints de login/registro que podrían ser atacados con fuerza bruta.",
    anyOf: ["rate_limiting"],
  },
  {
    id: "bundle_splitting_tip",
    severity: "tip",
    icon: Zap,
    title: "Code splitting: carga inicial más rápida sin sacrificar funcionalidad",
    body: "Con lazy loading y bundle splitting, el usuario descarga solo el código que necesita en cada momento. Reduce el tiempo de carga inicial hasta 60% en apps grandes. Recomendado para proyectos con 10+ rutas.",
    anyOf: ["bundle_splitting"],
  },
  {
    id: "rendering_ssr_info",
    severity: "info",
    icon: Globe,
    title: "SSR: mejor SEO y primera carga más rápida",
    body: "Server-Side Rendering mejora el tiempo hasta el primer byte visible (FCP) y permite que los crawlers indexen tu contenido correctamente. Ideal para landings, blogs y e-commerce. Agrega complejidad al deployment.",
    anyOf: ["rendering_ssr"],
  },
  {
    id: "core_web_vitals_tip",
    severity: "tip",
    icon: Zap,
    title: "Core Web Vitals: Google los usa como factor de ranking",
    body: "LCP, FID y CLS son métricas de rendimiento que Google incorpora al algoritmo de búsqueda. Optimizarlas mejora tu posicionamiento orgánico además de la experiencia del usuario. Lo medimos antes y después del deploy.",
    anyOf: ["core_web_vitals"],
  },
  {
    id: "animations_info",
    severity: "info",
    icon: Layers,
    title: "Animaciones: equilibrio entre impacto visual y rendimiento",
    body: "Las animaciones bien hechas mejoran la percepción de velocidad y calidad. Las mal hechas degradan el rendimiento en dispositivos móviles de gama media. Usamos Framer Motion con `will-change` y `transform` para mantener 60fps.",
    anyOf: ["animations"],
  },
  {
    id: "api_rest_info",
    severity: "info",
    icon: Database,
    title: "API REST: documentación OpenAPI incluida",
    body: "Cada endpoint que desarrollamos incluye documentación Swagger/OpenAPI automática. Esto facilita la integración con terceros, el testing y la incorporación de nuevos desarrolladores al proyecto.",
    anyOf: ["api_rest"],
  },
  {
    id: "auth_rbac_info",
    severity: "info",
    icon: Lock,
    title: "RBAC: define los roles y permisos antes de empezar",
    body: "El control de acceso basado en roles requiere que definas qué puede hacer cada tipo de usuario. Un esquema de permisos cambiado a mitad del proyecto puede implicar refactoring significativo. Documentémoslo juntos en la primera sesión.",
    anyOf: ["auth_rbac"],
  },
  {
    id: "oauth2_info",
    severity: "info",
    icon: Lock,
    title: "OAuth 2.0: login social listo en 1 semana",
    body: "Integramos Google, Facebook o Microsoft OAuth 2.0. El tiempo principal está en la configuración de credenciales en cada plataforma y el manejo correcto de tokens. Recomendamos empezar con Google — es el más adoptado en Perú.",
    anyOf: ["oauth2"],
  },

  // ─── COMBINATION TRIGGERS (AND logic) ────────────────────────────────────

  {
    id: "payments_two_fa_combo",
    severity: "warning",
    icon: Shield,
    title: "Pagos + 2FA: combinación recomendada por reguladores financieros",
    body: "Si procesas pagos, el 2FA no es opcional — es la línea de defensa que protege a tus usuarios de fraude. En mercados regulados (fintech, e-commerce con alto volumen) puede ser requerimiento legal. Ya lo tienes cubierto en este presupuesto.",
    requires: ["payments_culqi", "two_fa"],
  },
  {
    id: "payments_stripe_culqi_combo",
    severity: "tip",
    icon: CreditCard,
    title: "Culqi + Stripe: cubre Perú y mercados internacionales",
    body: "Con ambos procesadores puedes cobrar localmente con Yape/POS (Culqi) y a clientes del exterior con tarjetas internacionales (Stripe). Evalúa si tu modelo de negocio justifica mantener dos integraciones — el costo de mantenimiento se duplica.",
    requires: ["payments_culqi", "payments_stripe"],
  },
  {
    id: "mobile_offline_combo",
    severity: "warning",
    icon: AlertTriangle,
    title: "App nativa + offline sync: planificación crítica requerida",
    body: "Esta combinación es potente pero demandante. Necesitamos definir exactamente qué datos persisten offline, cómo se resuelven conflictos y qué pasa cuando el usuario actualiza la app con datos pendientes de sync. Agenda una sesión de arquitectura antes de iniciar.",
    requires: ["mobile_capacitor", "offline_sync"],
  },
  {
    id: "seo_ssr_combo",
    severity: "tip",
    icon: Search,
    title: "SEO + SSR: la combinación correcta para posicionamiento orgánico",
    body: "Tienes las dos piezas que necesitas para SEO técnico serio. Con Next.js SSR + metadata dinámica + sitemap automático puedes competir en búsquedas orgánicas desde el día uno del lanzamiento.",
    requires: ["seo", "rendering_ssr"],
  },
  {
    id: "admin_analytics_combo",
    severity: "tip",
    icon: BarChart2,
    title: "Panel admin + analytics: define quién ve qué",
    body: "Los dashboards de analytics dentro de un panel admin son una de las features más solicitadas y más subestimadas. ¿Los administradores ven datos en tiempo real o reportes diferidos? ¿Hay exportación a Excel/PDF? Cada respuesta cambia el alcance.",
    requires: ["admin_dashboard", "analytics"],
  },
  {
    id: "websockets_job_queues_combo",
    severity: "info",
    icon: Database,
    title: "WebSockets + colas: arquitectura event-driven robusta",
    body: "Cuando combinás tiempo real con procesamiento asíncrono, recomendamos Redis como broker compartido — sirve tanto para BullMQ (colas) como para Socket.io (pub/sub). Una sola instancia Redis reduce costos y simplifica el stack.",
    requires: ["websockets", "job_queues"],
  },
  {
    id: "auth_oauth_rbac_combo",
    severity: "tip",
    icon: Lock,
    title: "OAuth + RBAC: el sistema de auth completo",
    body: "Tienes login social (OAuth) y control de permisos granular (RBAC). Recuerda definir cómo se asigna el rol inicial a usuarios que se registran por primera vez con Google — es un detalle que suele olvidarse y genera bugs en producción.",
    requires: ["oauth2", "auth_rbac"],
  },
  {
    id: "pwa_push_combo",
    severity: "info",
    icon: Bell,
    title: "PWA + push notifications: experiencia casi nativa",
    body: "Las PWA pueden enviar notificaciones push en Android sin pasar por Play Store. En iOS esto funciona solo desde iOS 16.4+ y requiere que el usuario agregue la app a su pantalla de inicio. Buena opción para llegar rápido al mercado.",
    requires: ["pwa", "push_notifications"],
  },
  {
    id: "i18n_accessibility_combo",
    severity: "tip",
    icon: Globe,
    title: "i18n + accesibilidad: preparado para mercados exigentes",
    body: "La combinación de múltiples idiomas y cumplimiento WCAG es el estándar para productos que quieren entrar a Europa o EE.UU. Si tienes planes de expansión, esta inversión hoy evita una refactorización costosa después.",
    requires: ["i18n", "accessibility"],
  },
  {
    id: "design_system_animations_combo",
    severity: "tip",
    icon: Layers,
    title: "Design system + animaciones: UI de nivel premium",
    body: "Con tokens de diseño consistentes y motion guidelines definidas desde el inicio, cada animación refuerza la identidad visual en lugar de distraer. Así se construyen productos que se sienten 'pulidos' — no es magia, es sistema.",
    requires: ["design_system", "animations"],
  },

  // ─── COUNT-BASED TRIGGERS ─────────────────────────────────────────────────

  {
    id: "many_features_warning",
    severity: "warning",
    icon: AlertTriangle,
    title: "Alcance amplio: considerá una estrategia MVP primero",
    body: "Con muchas features simultáneas aumenta el riesgo de scope creep, integraciones problemáticas y retrasos en cascada. Recomendamos lanzar con las 5–7 features más críticas, validar con usuarios reales, y agregar el resto en iteraciones.",
    minFeatures: 12,
  },
  {
    id: "medium_features_info",
    severity: "info",
    icon: Info,
    title: "Alcance moderado: buen equilibrio entre valor y velocidad",
    body: "Este conjunto de features permite entregar un producto completo sin sobrecargar el equipo. Con sprints de 2 semanas y demos regulares, puedes ver progreso tangible desde la tercera semana.",
    minFeatures: 6,
    maxFeatures: 11,
  },
  {
    id: "few_features_tip",
    severity: "tip",
    icon: Lightbulb,
    title: "MVP enfocado: la forma más inteligente de validar una idea",
    body: "Con pocas features bien elegidas puedes lanzar en 4–6 semanas, conseguir usuarios reales y aprender qué construir después. Los mejores productos empezaron así — Airbnb, Dropbox, Uber.",
    maxFeatures: 4,
  },
  {
    id: "rush_many_features_warning",
    severity: "warning",
    icon: AlertTriangle,
    title: "Plazo acelerado + muchas features: combinación de alto riesgo",
    body: "Pedir muchas features en poco tiempo es la causa número uno de proyectos fallidos. Si el deadline es inamovible, reducí el alcance — no el estándar de calidad. Podemos ayudarte a priorizar qué incluir en V1.",
    minFeatures: 10,
    timelines: ["rush"],
  },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const SEVERITY_ORDER: Record<MessageSeverity, number> = {
  warning: 0,
  info: 1,
  tip: 2,
};

/**
 * Messages triggered by feature selection — rendered inline inside Step 2.
 * Excludes timeline-only messages (those belong to Step 3).
 */
export function getFeatureStepMessages(
  selectedFeatures: string[],
  selectedTimeline: string
): ContextMessage[] {
  void selectedTimeline; // step 2 messages don't filter by timeline
  const featureSet = new Set(selectedFeatures);
  const featureCount = selectedFeatures.length;

  return CONTEXT_MESSAGES.filter((msg) => {
    if (msg.timelines) return false; // belongs to timeline step
    if (msg.requires && !msg.requires.every((f) => featureSet.has(f))) return false;
    if (msg.anyOf && !msg.anyOf.some((f) => featureSet.has(f))) return false;
    if (msg.minFeatures !== undefined && featureCount < msg.minFeatures) return false;
    if (msg.maxFeatures !== undefined && featureCount > msg.maxFeatures) return false;
    const hasFeatureSelector = msg.requires !== undefined || msg.anyOf !== undefined;
    if (hasFeatureSelector && featureCount === 0) return false;
    const hasTrigger =
      msg.requires || msg.anyOf ||
      msg.minFeatures !== undefined || msg.maxFeatures !== undefined;
    if (!hasTrigger) return false;
    return true;
  }).sort((a, b) => SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity]);
}

/**
 * Messages triggered by timeline selection — rendered inline inside Step 3.
 * Includes rush+features combos (timeline is the primary driver).
 */
export function getTimelineStepMessages(
  selectedFeatures: string[],
  selectedTimeline: string
): ContextMessage[] {
  const featureCount = selectedFeatures.length;

  return CONTEXT_MESSAGES.filter((msg) => {
    if (!msg.timelines) return false;
    if (!msg.timelines.includes(selectedTimeline)) return false;
    if (msg.minFeatures !== undefined && featureCount < msg.minFeatures) return false;
    if (msg.maxFeatures !== undefined && featureCount > msg.maxFeatures) return false;
    return true;
  }).sort((a, b) => SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity]);
}

/**
 * @deprecated Use getFeatureStepMessages + getTimelineStepMessages instead.
 * Kept for reference — all messages combined.
 */
export function getActiveMessages(
  selectedFeatures: string[],
  selectedTimeline: string
): ContextMessage[] {
  return [
    ...getFeatureStepMessages(selectedFeatures, selectedTimeline),
    ...getTimelineStepMessages(selectedFeatures, selectedTimeline),
  ].sort((a, b) => SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity]);
}
