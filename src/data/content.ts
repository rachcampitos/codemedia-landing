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
  tagline: "Software profesional para empresas que crecen",
  description:
    "Desarrollamos aplicaciones moviles, web y APIs que escalan con tu negocio. Arquitecturas solidas, codigo limpio, resultados medibles.",
  url: "https://codemediaperu.com",
  location: "Lima, Peru",
  email: "contacto@codemediaperu.com",
  whatsapp: "+51939175392",
  whatsappLink:
    "https://wa.me/51939175392?text=Hola%20Code%20Media%2C%20tengo%20un%20proyecto%20en%20mente",
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
  { value: "80%+", label: "Cobertura de Tests" },
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
      "Apps nativas e hibridas optimizadas para iOS y Android. Misma tecnologia que impulsa NurseLite en produccion con miles de usuarios.",
    tags: ["Ionic", "Angular", "Capacitor"],
  },
  {
    icon: Globe,
    title: "Plataformas Web",
    description:
      "Interfaces rapidas, modernas y responsive. Desde landing pages de alta conversion hasta dashboards empresariales complejos.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      "Arquitecturas escalables y seguras. Chat en tiempo real, pagos integrados, autenticacion robusta: infraestructura que crece contigo.",
    tags: ["NestJS", "Node.js", "MongoDB"],
  },
  {
    icon: Palette,
    title: "Diseno UI/UX",
    description:
      "Interfaces que los usuarios entienden desde el primer uso. Mobile-first, accesibles, con design systems documentados.",
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
];

export const product = {
  name: "NurseLite",
  tagline: "Plataforma de enfermeria a domicilio que conecta familias con enfermeras certificadas en Peru.",
  description:
    "Verificacion profesional con el Colegio de Enfermeros del Peru, pagos seguros, chat en tiempo real. Software que resuelve problemas reales.",
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
