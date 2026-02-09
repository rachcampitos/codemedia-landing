import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codemediaperu.com"),
  title: "Code Media - Desarrollo de Software a Medida | Lima, Peru",
  description:
    "Empresa peruana de desarrollo de software. Creamos aplicaciones moviles, web y APIs con tecnologias modernas. Conoce NurseLite, nuestro producto estrella.",
  authors: [{ name: "Code Media EIRL" }],
  creator: "Code Media EIRL",
  publisher: "Code Media EIRL",
  openGraph: {
    title: "Code Media - Desarrollo de Software a Medida",
    description:
      "Software profesional para empresas que crecen. Aplicaciones moviles, web y APIs.",
    url: "https://codemediaperu.com",
    siteName: "Code Media",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Media - Desarrollo de Software a Medida",
    description:
      "Software profesional para empresas que crecen. Aplicaciones moviles, web y APIs.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareCompany",
  name: "Code Media EIRL",
  description:
    "Empresa peruana de desarrollo de software especializada en aplicaciones moviles, web y APIs.",
  url: "https://codemediaperu.com",
  logo: "https://codemediaperu.com/codemedia-logo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lima",
    addressRegion: "Lima",
    addressCountry: "PE",
  },
  areaServed: {
    "@type": "Country",
    name: "Peru",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0F172A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                var systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && systemPrefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0F172A] focus:text-white focus:rounded-lg"
        >
          Saltar al contenido principal
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
