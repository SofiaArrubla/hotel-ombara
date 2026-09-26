import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import USPs from "@/app/components/USPs";
import Facilities from "@/app/components/Facilities";
import Rooms from "@/app/components/Rooms"; // ⬅️ TU COMPONENTE (intacto)
import Gallery from "@/app/components/Gallery";
import Register from "@/app/components/Register";
import Footer from "@/app/components/Footer";
import ToTop from "@/app/components/ToTop";
import "./styles/ombara.css";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <USPs />
      <Facilities />
      <Rooms />
      <Gallery />
      <Register />
      <Footer />
      <ToTop />
    </main>
  );
}