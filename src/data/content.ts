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
  tagline: "Transformamos ideas en software",
  description:
    "Somos una empresa peruana de desarrollo de software especializada en crear soluciones tecnologicas a medida que impulsan el crecimiento de negocios.",
  url: "https://codemediaperu.com",
  location: "Lima, Peru",
  email: "contacto@codemediaperu.com",
  whatsapp: "+51987654321",
  whatsappLink: "https://wa.me/51987654321?text=Hola%2C%20tengo%20un%20proyecto%20en%20mente",
};

export const navLinks = [
  { href: "#inicio", label: "Inicio", sectionId: "inicio" },
  { href: "#nosotros", label: "Nosotros", sectionId: "nosotros" },
  { href: "#servicios", label: "Servicios", sectionId: "servicios" },
  { href: "#producto", label: "Producto", sectionId: "producto" },
  { href: "#contacto", label: "Contacto", sectionId: "contacto" },
];

export const stats = [
  { value: "5+", label: "Proyectos Entregados" },
  { value: "8+", label: "Tecnologias" },
  { value: "100%", label: "Compromiso" },
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
      "Apps nativas e hibridas con experiencias de usuario excepcionales. Desarrollo con Ionic, Angular y Capacitor para iOS y Android.",
    tags: ["Ionic", "Angular", "Capacitor"],
  },
  {
    icon: Globe,
    title: "Aplicaciones Web",
    description:
      "Plataformas web modernas y performantes. Desde landing pages hasta aplicaciones complejas con Next.js y React.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      "Arquitecturas robustas y escalables. APIs RESTful, microservicios y bases de datos optimizadas para alto rendimiento.",
    tags: ["NestJS", "Node.js", "MongoDB"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Interfaces intuitivas que conectan con los usuarios. Prototipos interactivos, sistemas de diseno y pruebas de usabilidad.",
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
];

export const product = {
  name: "NurseLite",
  tagline: "Enfermeria a domicilio, simplificada",
  description:
    "Plataforma que conecta pacientes con enfermeras profesionales verificadas por el Colegio de Enfermeros del Peru (CEP). Atencion medica de calidad en la comodidad del hogar.",
  url: "https://nurse-lite.com",
  appUrl: "https://app.nurse-lite.com",
  stats: [
    { value: "CEP", label: "Verificadas" },
    { value: "24/7", label: "Disponibilidad" },
    { value: "Lima", label: "Cobertura" },
  ],
  features: [
    "Verificacion CEP en tiempo real",
    "Pagos seguros con Culqi",
    "Chat en tiempo real",
    "Seguimiento de servicios",
  ],
};
