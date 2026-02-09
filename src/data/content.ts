import {
  Smartphone,
  Globe,
  Server,
  Palette,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "Code Media",
  legalName: "Code Media EIRL",
  tagline: "Tecnologia peruana que conquista el mundo",
  description:
    "Desarrollamos software con la precision de nuestros ancestros y la innovacion del siglo XXI. Apps y plataformas que conectan tu negocio con miles de usuarios.",
  url: "https://codemediaperu.com",
  location: "Lima, Peru",
  email: "contacto@codemediaperu.com",
  whatsapp: "+51987654321",
  whatsappLink:
    "https://wa.me/51987654321?text=Hola%20Code%20Media%2C%20tengo%20un%20proyecto%20en%20mente",
};

export const navLinks = [
  { href: "#inicio", label: "Inicio", sectionId: "inicio" },
  { href: "#nosotros", label: "Nosotros", sectionId: "nosotros" },
  { href: "#producto", label: "Producto", sectionId: "producto" },
  { href: "#servicios", label: "Servicios", sectionId: "servicios" },
  { href: "#contacto", label: "Contacto", sectionId: "contacto" },
];

export const stats = [
  { value: "1,000+", label: "Usuarios Activos" },
  { value: "99.9%", label: "Uptime Produccion" },
  { value: "8+", label: "Tecnologias Modernas" },
];

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    icon: Smartphone,
    title: "Aplicaciones Moviles",
    description:
      "Apps iOS y Android con un solo codigo base. Misma tecnologia que impulsa NurseLite, donde enfermeras verificadas atienden pacientes reales todos los dias.",
    tags: ["Ionic", "Angular", "Capacitor"],
  },
  {
    icon: Globe,
    title: "Aplicaciones Web",
    description:
      "Desde landing pages de alta conversion hasta dashboards empresariales. Esta misma web esta hecha con Next.js: rapida, SEO-optimizada y en Cloudflare.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      "Arquitecturas que aguantan crecimiento. Chat en tiempo real, pagos con Culqi, autenticacion JWT: todo lo que NurseLite necesito, lo construimos.",
    tags: ["NestJS", "Node.js", "MongoDB"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Interfaces que los peruanos realmente usan. Diseno mobile-first que funciona con 3G. Botones grandes, flujos claros, cero confusion.",
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
];

export const product = {
  name: "NurseLite",
  tagline: "1,000+ conexiones entre pacientes y enfermeras CEP",
  description:
    "NurseLite es la prueba de que Code Media no solo escribe codigo, sino que resuelve problemas reales. Conectamos familias peruanas con enfermeras verificadas 24/7 con pagos seguros y chat en tiempo real.",
  url: "https://nurse-lite.com",
  appUrl: "https://app.nurse-lite.com",
  stats: [
    { value: "1,000+", label: "Servicios" },
    { value: "100%", label: "Verificadas" },
    { value: "99.9%", label: "Uptime" },
  ],
  features: [
    "Verificacion CEP en tiempo real",
    "Pagos seguros con Culqi y Yape",
    "Chat en tiempo real con Socket.io",
    "768 tests automatizados",
  ],
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
    { name: "Culqi", category: "Pagos" },
    { name: "API CEP", category: "Verificacion" },
    { name: "SendGrid", category: "Email" },
    { name: "Cloudinary", category: "Media" },
  ],
};

export const process = [
  {
    step: "01",
    title: "Entendemos tu problema",
    description:
      "Primera reunion: escuchamos, preguntamos, desafiamos supuestos. Salida: documento de requerimientos claro.",
  },
  {
    step: "02",
    title: "Disenamos antes de programar",
    description:
      "Figma primero, codigo despues. Te mostramos prototipos clickeables antes de escribir una linea.",
  },
  {
    step: "03",
    title: "Entregas semanales",
    description:
      "Cada viernes ves avances reales en ambiente de prueba. Comentas, ajustamos, avanzamos.",
  },
  {
    step: "04",
    title: "Produccion + soporte",
    description:
      "Deploy automatico, monitoreo 24/7. No te dejamos solo despues del lanzamiento.",
  },
];
