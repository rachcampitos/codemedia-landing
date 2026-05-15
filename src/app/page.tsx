import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { About } from "@/components/About";
import { Product } from "@/components/Product";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { Process } from "@/components/Process";
import { Estimator } from "@/components/Estimator";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <About />
        <Product />
        <Portfolio />
        <Services />
        <TechStack />
        <Process />
        <Estimator />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
