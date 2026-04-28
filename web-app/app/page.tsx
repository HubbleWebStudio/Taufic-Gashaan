import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Ticker from "./components/shared/Ticker";
import Hero from "./components/features/Hero";
import Proyectos from "./components/features/Proyectos";
import Nosotros from "./components/features/Nosotros";
import Contacto from "./components/features/Contacto";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Proyectos />
        <Nosotros />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
