import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CasosÉxitoCarousel } from "./components/CasosÉxitoCarousel";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Process } from "./components/Process";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ParticleBackground } from "./components/ParticleBackground";
import { CustomCursor } from "./components/CustomCursor";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#0f0a05",
        minHeight: "100vh",
        scrollBehavior: "smooth",
        position: "relative",
      }}
    >
      <CustomCursor />
      <ParticleBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />
        <main>
          <Hero />
          <CasosÉxitoCarousel />
          <Services />
          <Portfolio />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>

      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; padding: 0; overflow-x: hidden; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0f0a05; }
        ::-webkit-scrollbar-thumb { background: rgba(236,128,43,0.3); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(236,128,43,0.5); }
        ::selection { background: rgba(236,128,43,0.25); color: #E8CCAD; }
        input::placeholder, textarea::placeholder { color: rgba(232,204,173,0.3) !important; }
        select option { background: #261a0a; color: #E8CCAD; }
        
        /* Urban typography */
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          letter-spacing: -0.03em;
        }
        
        p, body {
          font-family: 'Inter', sans-serif;
        }
        
        /* Smooth animations */
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        [data-aos="flip-right"] {
          animation: flipRight 0.8s ease both;
        }
        
        @keyframes flipRight {
          from {
            opacity: 0;
            transform: perspective(600px) rotateY(-90deg);
          }
          to {
            opacity: 1;
            transform: perspective(600px) rotateY(0);
          }
        }
      `}</style>
      
    </div>
  );
}
