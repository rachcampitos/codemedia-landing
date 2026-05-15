// project-terms.ts
// Bilingual (ES/EN) project terms and conditions for the Code Media EIRL Budget Estimator
// Displayed in Layer 3 (contract preview panel) as an interactive accordion

export type Language = "es" | "en";

export interface TermItem {
  label: string;
  detail: string;
}

export interface TermSection {
  id: string;
  icon: string; // Lucide icon name as string — consumer resolves to component
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  items: Record<Language, TermItem[]>;
}

export const PROJECT_TERMS: TermSection[] = [
  // ─── 1. QUÉ ESTÁ INCLUIDO ───────────────────────────────────────────────
  {
    id: "whats_included",
    icon: "CheckCircle",
    title: {
      es: "Qué incluye este presupuesto",
      en: "What this estimate includes",
    },
    subtitle: {
      es: "Todo lo que entregamos, sin cargos ocultos.",
      en: "Everything we deliver, no hidden charges.",
    },
    items: {
      es: [
        {
          label: "Código fuente completo",
          detail:
            "Entregamos todo el código en un repositorio privado de GitHub. Es tuyo desde el primer commit.",
        },
        {
          label: "Documentación técnica básica",
          detail:
            "README con instrucciones de instalación, variables de entorno requeridas y guía de deploy. No un manual de 100 páginas — lo necesario para que cualquier desarrollador pueda retomar el proyecto.",
        },
        {
          label: "Deploy inicial en producción",
          detail:
            "Configuramos el primer deploy en el proveedor acordado (Railway, Cloudflare Pages, Vercel, etc.) y verificamos que todo funcione en el entorno real.",
        },
        {
          label: "Pruebas funcionales de cada módulo",
          detail:
            "Antes de cada entrega validamos que las features implementadas funcionen según lo acordado. Si algo no funciona como se prometió, lo corregimos sin costo adicional.",
        },
        {
          label: "Sesiones de revisión por sprint",
          detail:
            "Cada 2 semanas hacemos una demo del avance. Podés ver el progreso real, dar feedback y ajustar prioridades dentro del alcance acordado.",
        },
        {
          label: "Comunicación directa durante el proyecto",
          detail:
            "Acceso por WhatsApp o Slack con respuesta en horario laboral (Lun–Vie, 9am–6pm PET). No pasás por un intermediario — hablás con el equipo que construye tu producto.",
        },
      ],
      en: [
        {
          label: "Full source code",
          detail:
            "All code delivered in a private GitHub repository. It's yours from the first commit.",
        },
        {
          label: "Basic technical documentation",
          detail:
            "README with setup instructions, required environment variables, and deploy guide. Not a 100-page manual — just what any developer needs to pick up the project.",
        },
        {
          label: "Initial production deployment",
          detail:
            "We configure the first deploy on the agreed provider (Railway, Cloudflare Pages, Vercel, etc.) and verify everything works in the real environment.",
        },
        {
          label: "Functional testing per module",
          detail:
            "Before each delivery we validate that implemented features work as agreed. If something doesn't work as promised, we fix it at no extra cost.",
        },
        {
          label: "Sprint review sessions",
          detail:
            "Every 2 weeks we run a progress demo. You see real progress, give feedback, and adjust priorities within the agreed scope.",
        },
        {
          label: "Direct communication during the project",
          detail:
            "WhatsApp or Slack access with responses during business hours (Mon–Fri, 9am–6pm PET). You talk directly to the team building your product.",
        },
      ],
    },
  },

  // ─── 2. SOLICITUDES DE CAMBIO ───────────────────────────────────────────
  {
    id: "change_requests",
    icon: "GitBranch",
    title: {
      es: "Solicitudes de cambio",
      en: "Change requests",
    },
    subtitle: {
      es: "Cambiar de opinión está bien — lo que cambia es el precio o el tiempo.",
      en: "Changing your mind is fine — what changes is the price or the timeline.",
    },
    items: {
      es: [
        {
          label: "Cambios menores: sin costo",
          detail:
            "Ajustes de textos, colores, traducciones o comportamientos menores que no requieren más de 2 horas de trabajo se incluyen sin cargo durante el desarrollo activo.",
        },
        {
          label: "Cambios medianos: Change Order escrito",
          detail:
            "Cualquier feature nueva, cambio de flujo o modificación de arquitectura se documenta en un Change Order con impacto estimado en costo y tiempo. Requiere aprobación escrita antes de implementar.",
        },
        {
          label: "Todo cambio aprobado se factura",
          detail:
            "Los Change Orders aprobados se agregan al total del contrato y se facturan en el siguiente hito de pago. No hay sorpresas al final del proyecto.",
        },
        {
          label: "No implementamos cambios sin aprobación",
          detail:
            "Si recibimos un pedido verbal de cambio, lo documentamos y esperamos confirmación escrita (email o WhatsApp). Esto protege tanto al cliente como a nuestro equipo.",
        },
        {
          label: "Presupuesto de contingencia recomendado",
          detail:
            "Recomendamos reservar un 15% sobre el total del presupuesto para cambios que surgen durante el desarrollo. En nuestra experiencia, casi todos los proyectos tienen al menos uno.",
        },
      ],
      en: [
        {
          label: "Minor changes: no charge",
          detail:
            "Text adjustments, color tweaks, translations, or minor behavior changes requiring under 2 hours of work are included at no charge during active development.",
        },
        {
          label: "Medium changes: written Change Order",
          detail:
            "Any new feature, flow change, or architectural modification is documented in a Change Order with estimated cost and timeline impact. Written approval is required before implementation.",
        },
        {
          label: "All approved changes are invoiced",
          detail:
            "Approved Change Orders are added to the contract total and invoiced at the next payment milestone. No surprises at the end of the project.",
        },
        {
          label: "We don't implement changes without approval",
          detail:
            "If we receive a verbal change request, we document it and wait for written confirmation (email or WhatsApp). This protects both the client and our team.",
        },
        {
          label: "Recommended contingency budget",
          detail:
            "We recommend setting aside 15% above the total budget for changes that arise during development. In our experience, almost every project has at least one.",
        },
      ],
    },
  },

  // ─── 3. CRONOGRAMA ──────────────────────────────────────────────────────
  {
    id: "timeline",
    icon: "Calendar",
    title: {
      es: "Cronograma y fechas de entrega",
      en: "Timeline and delivery dates",
    },
    subtitle: {
      es: "Cumplimos plazos cuando ambas partes cumplen sus compromisos.",
      en: "We meet deadlines when both parties meet their commitments.",
    },
    items: {
      es: [
        {
          label: "Inicio: a los 5 días hábiles de recibido el primer pago",
          detail:
            "El proyecto arranca una vez acreditado el anticipo acordado. La fecha de inicio oficial se confirma por escrito y define todas las fechas de entrega.",
        },
        {
          label: "Entregas por sprints de 2 semanas",
          detail:
            "Cada sprint tiene objetivos definidos al inicio. Al final de cada sprint hacemos una demo y el cliente da su aprobación o feedback. La aprobación de un sprint no es retroactiva — no se vuelven a abrir módulos ya cerrados sin un Change Order.",
        },
        {
          label: "Retrasos por cliente: el cronograma se extiende en igual medida",
          detail:
            "Si el cliente demora más de 5 días hábiles en responder feedback crítico, aprobar entregables o entregar materiales (textos, logos, accesos), el cronograma se ajusta sin penalidad.",
        },
        {
          label: "Retrasos por Code Media: compensación en alcance",
          detail:
            "Si incumplimos una fecha de entrega por causa propia, ofrecemos compensación en funcionalidad adicional sin costo, equivalente al valor proporcional del retraso.",
        },
        {
          label: "Fuerza mayor documentada",
          detail:
            "Situaciones fuera del control de ambas partes (caídas de proveedores externos, cambios de API de terceros, eventos de fuerza mayor) se documentan y extienden el plazo sin penalidad para ninguna parte.",
        },
      ],
      en: [
        {
          label: "Start: within 5 business days of receiving the first payment",
          detail:
            "The project starts once the agreed advance payment is confirmed. The official start date is confirmed in writing and defines all delivery dates.",
        },
        {
          label: "Deliveries in 2-week sprints",
          detail:
            "Each sprint has objectives defined at the start. At the end of each sprint we run a demo and the client provides approval or feedback. Sprint approval is not retroactive — already closed modules are not reopened without a Change Order.",
        },
        {
          label: "Client-side delays: timeline extends by the same amount",
          detail:
            "If the client takes more than 5 business days to respond to critical feedback, approve deliverables, or provide materials (copy, logos, access credentials), the timeline adjusts without penalty.",
        },
        {
          label: "Code Media delays: scope compensation",
          detail:
            "If we miss a delivery date due to our own fault, we offer compensation in additional functionality at no cost, equivalent to the proportional value of the delay.",
        },
        {
          label: "Documented force majeure",
          detail:
            "Situations outside both parties' control (third-party provider outages, external API changes, force majeure events) are documented and extend the deadline without penalty to either party.",
        },
      ],
    },
  },

  // ─── 4. CONGELAMIENTO DE REQUERIMIENTOS ─────────────────────────────────
  {
    id: "freeze",
    icon: "Lock",
    title: {
      es: "Congelamiento de requerimientos",
      en: "Requirements freeze",
    },
    subtitle: {
      es: "Por qué necesitamos definir el alcance antes de escribir código.",
      en: "Why we need to lock scope before writing code.",
    },
    items: {
      es: [
        {
          label: "Los requerimientos se documentan antes de iniciar",
          detail:
            "Al inicio del proyecto firmamos un documento de alcance que describe cada feature a desarrollar. Este documento es la referencia oficial para todo el proyecto.",
        },
        {
          label: "Freeze al inicio del sprint 2",
          detail:
            "Una vez iniciado el sprint 2, los requerimientos del proyecto se consideran congelados. Nuevas funcionalidades entran al backlog para una versión posterior o como Change Order.",
        },
        {
          label: "Por qué existe esta política",
          detail:
            "Cambiar requerimientos a mitad del desarrollo no solo agrega tiempo — puede invalidar código ya escrito y crear deuda técnica que se paga caro después. Esta política protege la integridad del producto y el presupuesto del cliente.",
        },
        {
          label: "Backlog abierto para versiones futuras",
          detail:
            "Todo lo que surge durante el proyecto y no cabe en el alcance original va a un backlog documentado. Al terminar V1 tenés una lista priorizada de features para V2.",
        },
      ],
      en: [
        {
          label: "Requirements are documented before starting",
          detail:
            "At the beginning of the project we sign a scope document describing each feature to develop. This document is the official reference for the entire project.",
        },
        {
          label: "Freeze at the start of sprint 2",
          detail:
            "Once sprint 2 begins, project requirements are considered frozen. New functionality enters the backlog for a future version or as a Change Order.",
        },
        {
          label: "Why this policy exists",
          detail:
            "Changing requirements mid-development doesn't just add time — it can invalidate already-written code and create technical debt that's expensive to pay later. This policy protects the product's integrity and the client's budget.",
        },
        {
          label: "Open backlog for future versions",
          detail:
            "Everything that comes up during the project that doesn't fit the original scope goes to a documented backlog. When V1 is done, you have a prioritized list of features for V2.",
        },
      ],
    },
  },

  // ─── 5. CRONOGRAMA DE PAGOS ─────────────────────────────────────────────
  {
    id: "payment_schedule",
    icon: "CreditCard",
    title: {
      es: "Cronograma de pagos",
      en: "Payment schedule",
    },
    subtitle: {
      es: "Pagos distribuidos en hitos, no al final. Así ambas partes tienen incentivos alineados.",
      en: "Payments tied to milestones, not to the end. This keeps both parties aligned.",
    },
    items: {
      es: [
        {
          label: "50% al iniciar el proyecto",
          detail:
            "El anticipo confirma el compromiso y permite reservar la disponibilidad del equipo. Sin anticipo, el proyecto no inicia. Aceptamos transferencia BCP (CCI 002-191-0013170337-56-33), Yape o Culqi (tarjeta).",
        },
        {
          label: "30% al aprobar el sprint final",
          detail:
            "Se factura al completar la última demo y recibir la aprobación del cliente sobre el alcance total entregado.",
        },
        {
          label: "20% al hacer el deploy en producción",
          detail:
            "El pago final se realiza cuando el producto está publicado y funcionando en el entorno de producción real (no en staging).",
        },
        {
          label: "Factura electrónica SUNAT incluida",
          detail:
            "Emitimos factura electrónica a través del SEE-SOL (RUC 20615496074 — Code Media EIRL). Podés usar la factura para sustentar el gasto ante SUNAT si tu empresa tributa renta de tercera categoría.",
        },
        {
          label: "Precios en S/. o USD según acuerdo",
          detail:
            "Podemos cotizar en Soles o Dólares. Si se acuerda en USD y el pago se realiza en Soles, se usa el tipo de cambio SBS del día de la transferencia.",
        },
        {
          label: "Retraso en pagos: pausa del proyecto",
          detail:
            "Si un pago se retrasa más de 10 días hábiles, pausamos el desarrollo hasta regularizar. El cronograma se extiende proporcionalmente sin penalidad adicional.",
        },
      ],
      en: [
        {
          label: "50% upon project start",
          detail:
            "The advance confirms commitment and allows us to reserve team availability. Without the advance, the project does not start. We accept BCP bank transfer, Yape, or Culqi (card).",
        },
        {
          label: "30% upon final sprint approval",
          detail:
            "Invoiced upon completing the last demo and receiving client approval on the total delivered scope.",
        },
        {
          label: "20% upon production deployment",
          detail:
            "Final payment is due when the product is live and working in the real production environment (not staging).",
        },
        {
          label: "SUNAT electronic invoice included",
          detail:
            "We issue electronic invoices through SUNAT's SEE-SOL system (RUC 20615496074 — Code Media EIRL). You can use the invoice to document the expense if your company pays third-category income tax.",
        },
        {
          label: "Prices in PEN or USD by agreement",
          detail:
            "We can quote in Peruvian Soles or US Dollars. If agreed in USD and payment is made in PEN, we use the SBS exchange rate on the day of the transfer.",
        },
        {
          label: "Delayed payments: project pause",
          detail:
            "If a payment is delayed more than 10 business days, we pause development until regularized. The timeline extends proportionally without additional penalty.",
        },
      ],
    },
  },

  // ─── 6. GARANTÍA POST-ENTREGA ────────────────────────────────────────────
  {
    id: "warranty",
    icon: "ShieldCheck",
    title: {
      es: "Garantía post-entrega",
      en: "Post-delivery warranty",
    },
    subtitle: {
      es: "30 días para reportar bugs sin costo. Después, mantenimiento por plan.",
      en: "30 days to report bugs at no cost. After that, maintenance by plan.",
    },
    items: {
      es: [
        {
          label: "30 días de garantía sobre bugs",
          detail:
            "Si después del deploy en producción encontrás un comportamiento que no coincide con lo acordado en el documento de alcance, lo corregimos sin costo adicional dentro de los 30 días calendario.",
        },
        {
          label: "Qué cubre la garantía",
          detail:
            "Cubre errores funcionales (algo que debería funcionar y no funciona), crashes reproducibles y comportamientos que contradigan los criterios de aceptación firmados.",
        },
        {
          label: "Qué no cubre la garantía",
          detail:
            "No cubre nuevas features, cambios de diseño, adaptación a cambios de APIs de terceros (ej. Facebook, Google), ni comportamientos en entornos que no hayan sido parte de la entrega original.",
        },
        {
          label: "Mantenimiento después de los 30 días",
          detail:
            "Ofrecemos planes de mantenimiento mensual desde S/600/mes (4h de soporte reactivo) hasta S/2,500/mes (20h de desarrollo + monitoreo + actualizaciones de seguridad). Cotizamos según tus necesidades.",
        },
        {
          label: "Actualizaciones de dependencias no están incluidas",
          detail:
            "Mantener las librerías del proyecto actualizadas es parte del mantenimiento continuo, no de la garantía. Las actualizaciones mayores (Next.js 14→15, Angular 17→18) requieren evaluación de impacto separada.",
        },
      ],
      en: [
        {
          label: "30-day bug warranty",
          detail:
            "If after production deployment you find behavior that doesn't match what was agreed in the scope document, we fix it at no extra cost within 30 calendar days.",
        },
        {
          label: "What the warranty covers",
          detail:
            "Covers functional errors (something that should work doesn't), reproducible crashes, and behaviors that contradict the signed acceptance criteria.",
        },
        {
          label: "What the warranty does not cover",
          detail:
            "Does not cover new features, design changes, adaptation to third-party API changes (e.g., Facebook, Google), or behaviors in environments not part of the original delivery.",
        },
        {
          label: "Maintenance after 30 days",
          detail:
            "We offer monthly maintenance plans from S/600/month (4h reactive support) to S/2,500/month (20h development + monitoring + security updates). We quote based on your needs.",
        },
        {
          label: "Dependency updates are not included",
          detail:
            "Keeping project libraries up to date is part of ongoing maintenance, not the warranty. Major upgrades (Next.js 14→15, Angular 17→18) require separate impact assessment.",
        },
      ],
    },
  },

  // ─── 7. RESPONSABILIDADES DEL CLIENTE ───────────────────────────────────
  {
    id: "client_responsibilities",
    icon: "Users",
    title: {
      es: "Responsabilidades del cliente",
      en: "Client responsibilities",
    },
    subtitle: {
      es: "Un proyecto es un trabajo conjunto. Esto es lo que necesitamos de tu lado.",
      en: "A project is a joint effort. Here's what we need from your side.",
    },
    items: {
      es: [
        {
          label: "Materiales en los primeros 5 días hábiles",
          detail:
            "Logos en SVG o PNG de alta resolución, paleta de colores, guía de marca (si existe), textos definitivos de la app, imágenes o acceso a banco de imágenes. Sin estos materiales, el diseño avanza en borrador.",
        },
        {
          label: "Un interlocutor técnico designado",
          detail:
            "Necesitamos una persona que pueda aprobar decisiones técnicas y de producto dentro de 48 horas. Los proyectos con múltiples tomadores de decisión sin estructura definida generan retrasos sistemáticos.",
        },
        {
          label: "Accesos y credenciales al inicio",
          detail:
            "Acceso al dominio (si ya existe), hosting actual, cuentas de terceros que integraremos (Culqi, Firebase, Brevo, etc.) y cualquier sistema con el que debamos conectarnos.",
        },
        {
          label: "Feedback dentro de 5 días hábiles por sprint",
          detail:
            "Cada demo requiere respuesta dentro de 5 días hábiles. Feedback tardío retrasa el sprint siguiente. Si necesitás más tiempo, avisá — lo agendamos sin penalidad.",
        },
        {
          label: "Ambiente de pruebas con datos reales (o realistas)",
          detail:
            "Para validar correctamente, necesitamos acceso a un entorno de staging con datos representativos. Cuentas de prueba Culqi, usuarios de ejemplo, productos ficticios — según aplique.",
        },
      ],
      en: [
        {
          label: "Materials in the first 5 business days",
          detail:
            "Logos in SVG or high-resolution PNG, color palette, brand guide (if available), final app copy, images or access to image bank. Without these materials, design advances as a draft.",
        },
        {
          label: "One designated technical contact",
          detail:
            "We need one person who can approve technical and product decisions within 48 hours. Projects with multiple unstructured decision-makers generate systematic delays.",
        },
        {
          label: "Access and credentials at the start",
          detail:
            "Domain access (if it exists), current hosting, third-party accounts we'll integrate (Culqi, Firebase, Brevo, etc.), and any system we need to connect with.",
        },
        {
          label: "Feedback within 5 business days per sprint",
          detail:
            "Each demo requires a response within 5 business days. Late feedback delays the next sprint. If you need more time, let us know — we'll reschedule without penalty.",
        },
        {
          label: "Testing environment with real (or realistic) data",
          detail:
            "To validate correctly, we need access to a staging environment with representative data. Test Culqi accounts, sample users, dummy products — as applicable.",
        },
      ],
    },
  },

  // ─── 8. PROPIEDAD INTELECTUAL ────────────────────────────────────────────
  {
    id: "ip_ownership",
    icon: "FileText",
    title: {
      es: "Propiedad intelectual y código fuente",
      en: "Intellectual property and source code",
    },
    subtitle: {
      es: "Al pagar el total, el código es tuyo. Sin restricciones.",
      en: "Once fully paid, the code is yours. No restrictions.",
    },
    items: {
      es: [
        {
          label: "Transferencia de IP al completar el pago total",
          detail:
            "La propiedad intelectual del código personalizado desarrollado para este proyecto se transfiere al cliente al acreditarse el último pago. El contrato formal lo especifica explícitamente.",
        },
        {
          label: "Librerías open source: licencias de terceros aplican",
          detail:
            "El proyecto usa librerías de código abierto (React, NestJS, Tailwind, etc.) bajo sus respectivas licencias (MIT, Apache 2.0). Estas licencias son permisivas y no restringen el uso comercial.",
        },
        {
          label: "Code Media puede usar el proyecto como referencia de portafolio",
          detail:
            "A menos que el cliente solicite confidencialidad explícita, Code Media puede mencionar el proyecto como referencia (nombre, tipo de producto, tecnologías). Nunca compartimos código propietario ni datos del cliente.",
        },
        {
          label: "Confidencialidad: firmamos NDA si el cliente lo requiere",
          detail:
            "Si tu proyecto involucra información sensible (modelo de negocio, datos de usuarios, propiedad industrial), firmamos un Acuerdo de Confidencialidad (NDA) antes de iniciar la conversación técnica.",
        },
        {
          label: "Retención de acceso durante el proyecto",
          detail:
            "Durante el desarrollo, Code Media tiene acceso de administrador al repositorio y entornos. Al finalizar el proyecto, transferimos todos los accesos y nos removemos. El cliente tiene acceso completo desde el primer día.",
        },
      ],
      en: [
        {
          label: "IP transfer upon full payment",
          detail:
            "Intellectual property of the custom code developed for this project transfers to the client upon confirmation of the final payment. The formal contract states this explicitly.",
        },
        {
          label: "Open source libraries: third-party licenses apply",
          detail:
            "The project uses open source libraries (React, NestJS, Tailwind, etc.) under their respective licenses (MIT, Apache 2.0). These licenses are permissive and do not restrict commercial use.",
        },
        {
          label: "Code Media may use the project as a portfolio reference",
          detail:
            "Unless the client requests explicit confidentiality, Code Media may mention the project as a reference (name, product type, technologies). We never share proprietary code or client data.",
        },
        {
          label: "Confidentiality: we sign an NDA if the client requires it",
          detail:
            "If your project involves sensitive information (business model, user data, industrial property), we sign a Non-Disclosure Agreement before beginning the technical conversation.",
        },
        {
          label: "Access retention during the project",
          detail:
            "During development, Code Media has admin access to the repository and environments. At project completion, we transfer all access and remove ourselves. The client has full access from day one.",
        },
      ],
    },
  },

  // ─── 9. HOSTING Y DOMINIO ────────────────────────────────────────────────
  {
    id: "hosting_domain",
    icon: "Server",
    title: {
      es: "Hosting y dominio",
      en: "Hosting and domain",
    },
    subtitle: {
      es: "Infraestructura a tu nombre, costos operativos transparentes.",
      en: "Infrastructure in your name, transparent operating costs.",
    },
    items: {
      es: [
        {
          label: "Las cuentas de hosting van a nombre del cliente",
          detail:
            "Railway, Cloudflare, AWS, Vercel — todas las cuentas se crean a nombre del cliente con el email del cliente. Code Media tiene acceso como colaborador, no como propietario. Esto garantiza que el proyecto te pertenece completamente.",
        },
        {
          label: "Costos de infraestructura no están incluidos en el presupuesto",
          detail:
            "El presupuesto cubre desarrollo, no hosting. Los costos mensuales de infraestructura (Railway ~$20/mes, MongoDB Atlas ~$9/mes, dominio ~$15/año) son responsabilidad del cliente y se pagan directamente al proveedor.",
        },
        {
          label: "Stack recomendado para proyectos peruanos",
          detail:
            "Railway para backend NestJS ($5–20/mes según uso), Cloudflare Pages para frontend (gratis o $5/mes Pro), MongoDB Atlas M10 para base de datos ($57/mes), Brevo para email transaccional (gratis hasta 300 emails/día).",
        },
        {
          label: "Dominio: registrá en Cloudflare Registrar",
          detail:
            "Cloudflare Registrar vende dominios al costo de registro sin markup (aprox. $10–15/año para .com). El DNS integrado con Cloudflare Pages simplifica el deploy. Si ya tenés dominio, lo configuramos donde está.",
        },
        {
          label: "SSL / HTTPS incluido en todos los deploys",
          detail:
            "Configuramos certificados SSL automáticos (Let's Encrypt o Cloudflare) en todos los entornos. HTTPS no es opcional — es el estándar mínimo para cualquier app en producción.",
        },
        {
          label: "Backup y monitoreo: responsabilidad del cliente post-entrega",
          detail:
            "Configuramos el primer backup y alertas de uptime durante el deploy. El mantenimiento continuo de backups y monitoreo forma parte de los planes de soporte mensual, no del proyecto base.",
        },
      ],
      en: [
        {
          label: "Hosting accounts are in the client's name",
          detail:
            "Railway, Cloudflare, AWS, Vercel — all accounts are created under the client's name and email. Code Media has collaborator access, not ownership. This ensures the project fully belongs to you.",
        },
        {
          label: "Infrastructure costs are not included in the estimate",
          detail:
            "The estimate covers development, not hosting. Monthly infrastructure costs (Railway ~$20/mo, MongoDB Atlas ~$9/mo, domain ~$15/yr) are the client's responsibility and paid directly to the provider.",
        },
        {
          label: "Recommended stack for Peruvian projects",
          detail:
            "Railway for NestJS backend ($5–20/mo by usage), Cloudflare Pages for frontend (free or $5/mo Pro), MongoDB Atlas M10 for database ($57/mo), Brevo for transactional email (free up to 300 emails/day).",
        },
        {
          label: "Domain: register at Cloudflare Registrar",
          detail:
            "Cloudflare Registrar sells domains at cost with no markup (approx. $10–15/year for .com). DNS integration with Cloudflare Pages simplifies deployment. If you already have a domain, we configure it wherever it lives.",
        },
        {
          label: "SSL / HTTPS included in all deployments",
          detail:
            "We configure automatic SSL certificates (Let's Encrypt or Cloudflare) in all environments. HTTPS is not optional — it's the minimum standard for any production app.",
        },
        {
          label: "Backup and monitoring: client responsibility post-delivery",
          detail:
            "We set up the first backup and uptime alerts during deployment. Ongoing backup maintenance and monitoring are part of monthly support plans, not the base project.",
        },
      ],
    },
  },
];

// ─── HELPER: getTermSection ────────────────────────────────────────────────────

/**
 * Returns a single term section by ID, or undefined if not found.
 */
export function getTermSection(id: string): TermSection | undefined {
  return PROJECT_TERMS.find((section) => section.id === id);
}

/**
 * Returns all section IDs in order — useful for rendering an ordered accordion.
 */
export function getTermSectionIds(): string[] {
  return PROJECT_TERMS.map((section) => section.id);
}
