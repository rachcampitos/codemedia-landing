import { Header } from "@/components/Header";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { About } from "@/components/About";
import { Product } from "@/components/Product";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
