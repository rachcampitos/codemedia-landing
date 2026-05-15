export type Locale = "es" | "en";

export const translations: Record<Locale, Record<string, string>> = {
  es: {
    // Header
    "header.contact": "Contactar",
    "header.closeMenu": "Cerrar menu",
    "header.openMenu": "Abrir menu",

    // Hero
    "hero.subtitle": "Desarrollo de Software",
    "hero.availability": "Disponibles para nuevos proyectos",
    "hero.cta1": "Estima tu proyecto",
    "hero.cta2": "Agendar consultoria",
    "hero.codeComment": "// \u2713 Build exitoso \u2014 0 errores",

    // TrustBar
    "trustbar.label": "Stack en Produccion",

    // About
    "about.label": "Sobre Nosotros",
    "about.title": "Experiencia tecnica,",
    "about.titleHighlight": "comunicacion clara",
    "about.description":
      "Somos un equipo de ingenieros especializados en aplicaciones de alto rendimiento. Nuestro codigo esta en produccion, atendiendo usuarios reales todos los dias.",
    "about.founder.role": "Fundador & Lead Engineer",
    "about.founder.bio":
      "Ingeniero de software con experiencia en aplicaciones de alto rendimiento para produccion. Fundador de NurseLite, plataforma de enfermeria a domicilio con usuarios reales en Peru.",

    // Product
    "product.label": "Lo Que Construimos",
    "product.tagline":
      "Plataforma de enfermeria a domicilio que conecta familias con enfermeras certificadas en Peru.",
    "product.description":
      "Verificacion profesional con el Colegio de Enfermeros del Peru, pagos seguros, chat en tiempo real. Software que resuelve problemas reales.",
    "product.cta": "Visitar NurseLite",
    "product.screenLabel": "Ver pantalla: {label}",

    // Portfolio
    "portfolio.label": "Portafolio",
    "portfolio.title": "Proyectos en produccion",
    "portfolio.description":
      "Software real, funcionando, con usuarios reales. Cada proyecto resuelve un problema concreto.",
    "portfolio.viewProject": "Ver proyecto",
    "portfolio.privateProject": "Proyecto privado",

    // Services
    "services.label": "Servicios",
    "services.title": "Servicios end-to-end",
    "services.description":
      "Desde el diseno UX hasta el deployment en produccion. Todo bajo un mismo equipo.",

    // TechStack
    "tech.label": "Tecnologias",
    "tech.title": "Stack que",
    "tech.titleHighlight": "ya funciona en produccion",
    "tech.description":
      "No experimentamos con tu presupuesto. Cada tecnologia que usamos esta probada con usuarios reales.",

    // Process
    "process.label": "Proceso",
    "process.title": "Como trabajamos",
    "process.description":
      "Transparencia total. Sabes que estamos haciendo en cada momento.",

    // Contact
    "contact.label": "Contacto",
    "contact.title": "Listo para",
    "contact.titleHighlight": "comenzar?",
    "contact.description":
      "Agenda una consultoria tecnica gratuita. Conversemos sobre tu idea, presupuesto y timeline.",
    "contact.whatsapp.title": "Respuesta Inmediata",
    "contact.whatsapp.desc": "Escribenos y conversamos hoy mismo",
    "contact.whatsapp.time": "Responde en <1 hora",
    "contact.email.title": "Cotizacion Formal",
    "contact.email.desc": "Propuesta tecnica + timeline + presupuesto",
    "contact.email.time": "Respuesta en 24h habiles",
    "contact.location.desc": "Trabajamos remoto con clientes en todo el Peru",

    // Estimator
    "estimator.label": "Estimador",
    "estimator.title": "Calcula tu proyecto",
    "estimator.subtitle":
      "Selecciona las caracteristicas y obtén un estimado instantaneo.",
    "estimator.step1": "Tipo de proyecto",
    "estimator.step2": "Funcionalidades",
    "estimator.step3": "Plazo de entrega",
    "estimator.estimate": "Estimado",
    "estimator.weeks": "Tiempo estimado",
    "estimator.cta": "Conversemos",
    "estimator.terms": "Ver terminos del proyecto",
    "estimator.termsTitle": "Como trabajamos",
    "estimator.selectProject":
      "Selecciona un tipo de proyecto para comenzar",
    "estimator.noFeatures":
      "Estimado base sin funcionalidades adicionales",
    "estimator.termsClose": "Cerrar",
    "estimator.weeksUnit": "semanas",

    "contact.whatsapp.ariaLabel": "Contactar por WhatsApp",
    "contact.email.ariaLabel": "Enviar correo electrónico",

    // FAQ
    "faq.label": "Preguntas Frecuentes",
    "faq.title": "Lo que suelen preguntar",
    "faq.q1.q": "¿Cuánto cuesta desarrollar mi proyecto?",
    "faq.q1.a": "Depende del tipo de proyecto y las funcionalidades que necesitas. Nuestra Landing Page parte desde $500 USD y un sistema completo puede llegar a $14,000 USD. Usa el estimador interactivo de esta misma página para obtener un rango personalizado en menos de un minuto.",
    "faq.q2.q": "¿Trabajan con clientes fuera de Lima o fuera de Perú?",
    "faq.q2.a": "Sí. Trabajamos 100% remoto y tenemos experiencia con clientes en distintas ciudades del Perú y en el extranjero. Las reuniones las coordinamos vía videollamada y usamos herramientas colaborativas para que siempre estés al tanto del avance.",
    "faq.q3.q": "¿Cuánto tiempo toma desarrollar una aplicación?",
    "faq.q3.a": "Una landing page puede estar lista en 2–4 semanas. Una app móvil o sistema con panel admin toma entre 10 y 24 semanas según la complejidad. Trabajamos en sprints de 2 semanas con demos regulares para que puedas ver el progreso.",
    "faq.q4.q": "¿Qué garantías ofrecen sobre la calidad del código?",
    "faq.q4.a": "Entregamos proyectos con cobertura de tests automatizados, revisión de seguridad y código documentado. NurseLite, nuestro propio producto, tiene 768 tests y 82% de cobertura como prueba concreta de nuestra metodología.",
    "faq.q5.q": "¿Pueden hacerse cargo del mantenimiento después del lanzamiento?",
    "faq.q5.a": "Sí. Ofrecemos planes de soporte mensual que incluyen actualizaciones de seguridad, corrección de bugs y mejoras incrementales. El precio varía según la complejidad del proyecto.",
    "faq.q6.q": "¿Por qué elegir Code Media y no un freelancer o una agencia grande?",
    "faq.q6.a": "A diferencia de un freelancer, somos un equipo con múltiples especialidades y continuidad garantizada. A diferencia de una agencia grande, no eres un número: tienes acceso directo al fundador y al equipo técnico. Y a diferencia de ambos, tenemos código en producción — NurseLite — que prueba que sabemos llevar proyectos a usuarios reales.",

    // Footer
    "footer.rights": "Todos los derechos reservados.",

    // ThemeToggle
    "theme.light": "Cambiar a modo claro",
    "theme.dark": "Cambiar a modo oscuro",

    // LanguageToggle
    "lang.switch": "Switch to English",

    // Layout
    "layout.skipToContent": "Saltar al contenido principal",
  },
  en: {
    "header.contact": "Contact",
    "header.closeMenu": "Close menu",
    "header.openMenu": "Open menu",

    "hero.subtitle": "Software Development",
    "hero.availability": "Available for new projects",
    "hero.cta1": "Estimate your project",
    "hero.cta2": "Book a consultation",
    "hero.codeComment": "// \u2713 Build successful \u2014 0 errors",

    "trustbar.label": "Production Stack",

    "about.label": "About Us",
    "about.title": "Technical expertise,",
    "about.titleHighlight": "clear communication",
    "about.description":
      "We're a team of engineers specialized in high-performance applications. Our code is in production, serving real users every day.",
    "about.founder.role": "Founder & Lead Engineer",
    "about.founder.bio":
      "Software engineer with experience in high-performance production applications. Founder of NurseLite, a home nursing platform with real users in Peru.",

    "product.label": "What We Build",
    "product.tagline":
      "Home nursing platform connecting families with certified nurses in Peru.",
    "product.description":
      "Professional verification with Peru's Nursing Board, secure payments, real-time chat. Software that solves real problems.",
    "product.cta": "Visit NurseLite",
    "product.screenLabel": "View screen: {label}",

    "portfolio.label": "Portfolio",
    "portfolio.title": "Projects in production",
    "portfolio.description":
      "Real software, running, with real users. Each project solves a concrete problem.",
    "portfolio.viewProject": "View project",
    "portfolio.privateProject": "Private project",

    "services.label": "Services",
    "services.title": "End-to-end services",
    "services.description":
      "From UX design to production deployment. All under one team.",

    "tech.label": "Technologies",
    "tech.title": "A stack that",
    "tech.titleHighlight": "already works in production",
    "tech.description":
      "We don't experiment with your budget. Every technology we use is proven with real users.",

    "process.label": "Process",
    "process.title": "How we work",
    "process.description":
      "Total transparency. You know what we're doing at every moment.",

    "contact.label": "Contact",
    "contact.title": "Ready to",
    "contact.titleHighlight": "get started?",
    "contact.description":
      "Book a free technical consultation. Let's discuss your idea, budget and timeline.",
    "contact.whatsapp.title": "Instant Response",
    "contact.whatsapp.desc": "Write to us and let's talk today",
    "contact.whatsapp.time": "Responds in <1 hour",
    "contact.email.title": "Formal Quote",
    "contact.email.desc": "Technical proposal + timeline + budget",
    "contact.email.time": "Response in 24 business hours",
    "contact.location.desc": "We work remotely with clients across Peru",

    // Estimator
    "estimator.label": "Estimator",
    "estimator.title": "Estimate your project",
    "estimator.subtitle":
      "Select features and get an instant estimate.",
    "estimator.step1": "Project type",
    "estimator.step2": "Features",
    "estimator.step3": "Timeline",
    "estimator.estimate": "Estimate",
    "estimator.weeks": "Estimated timeline",
    "estimator.cta": "Let's talk",
    "estimator.terms": "View project terms",
    "estimator.termsTitle": "How we work",
    "estimator.selectProject": "Select a project type to get started",
    "estimator.noFeatures": "Base estimate without additional features",
    "estimator.termsClose": "Close",
    "estimator.weeksUnit": "weeks",

    "contact.whatsapp.ariaLabel": "Contact via WhatsApp",
    "contact.email.ariaLabel": "Send an email",

    // FAQ
    "faq.label": "FAQ",
    "faq.title": "Common questions",
    "faq.q1.q": "How much does my project cost?",
    "faq.q1.a": "It depends on the project type and features you need. A Landing Page starts at $500 USD and a full system can reach $14,000 USD. Use the interactive estimator on this page to get a personalized range in under a minute.",
    "faq.q2.q": "Do you work with clients outside Lima or outside Peru?",
    "faq.q2.a": "Yes. We work 100% remotely and have experience with clients in different cities across Peru and abroad. We coordinate via video calls and use collaborative tools so you always know the project status.",
    "faq.q3.q": "How long does it take to build an app?",
    "faq.q3.a": "A landing page can be ready in 2–4 weeks. A mobile app or full admin system takes between 10 and 24 weeks depending on complexity. We work in 2-week sprints with regular demos so you can see progress throughout.",
    "faq.q4.q": "What quality guarantees do you offer?",
    "faq.q4.a": "We deliver projects with automated test coverage, security review, and documented code. NurseLite, our own product, has 768 tests and 82% coverage as concrete proof of our methodology.",
    "faq.q5.q": "Can you handle maintenance after launch?",
    "faq.q5.a": "Yes. We offer monthly support plans that include security updates, bug fixes, and incremental improvements. Pricing varies based on project complexity.",
    "faq.q6.q": "Why choose Code Media over a freelancer or a large agency?",
    "faq.q6.a": "Unlike a freelancer, we're a team with multiple specialties and guaranteed continuity. Unlike a large agency, you're not a number — you have direct access to the founder and technical team. And unlike both, we have code in production — NurseLite — that proves we know how to take projects to real users.",

    "footer.rights": "All rights reserved.",

    "theme.light": "Switch to light mode",
    "theme.dark": "Switch to dark mode",

    "lang.switch": "Cambiar a Espanol",

    "layout.skipToContent": "Skip to main content",
  },
};
