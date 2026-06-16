import { Carousel3D } from "./Carousel3D";
import { Zap, Globe, Smartphone } from "lucide-react";

// Ejemplo de datos para el carrusel
const carouselItems = [
  {
    id: "1",
    title: "Desarrollo Web",
    description: "Sitios web rápidos y responsivos construidos con HTML5, CSS3 y JavaScript moderno.",
    color: "#EC802B",
    icon: "🚀",
  },
  {
    id: "2",
    title: "Optimización",
    description: "Core Web Vitals mejorados, velocidad ultra rápida y experiencia de usuario fluida.",
    color: "#EDC55B",
    icon: "⚡",
  },
  {
    id: "3",
    title: "Diseño Responsivo",
    description: "Interfaces hermosas que funcionan perfectamente en móvil, tablet y desktop.",
    color: "#66BCB4",
    icon: "📱",
  },
  {
    id: "4",
    title: "SEO Técnico",
    description: "Estructura optimizada para motores de búsqueda con Schema markup completo.",
    color: "#EC802B",
    icon: "📈",
  },
];

export function Carousel3DExample() {
  const handleCarouselSelect = (item: typeof carouselItems[0]) => {
    console.log("Carrusel item seleccionado:", item);
  };

  return (
    <section style={{ padding: "80px 24px", background: "#0f0a05" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 64, textAlign: "center" }}>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 12,
              color: "#66BCB4",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            — Carrusel 3D Pop-out
          </span>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 5vw, 48px)",
              color: "#E8CCAD",
              margin: "16px 0",
              letterSpacing: "-0.03em",
            }}
          >
            Explora nuestros
            <span style={{ color: "#EC802B" }}> Servicios</span>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              color: "rgba(232,204,173,0.6)",
              maxWidth: 560,
              lineHeight: 1.7,
              margin: "16px auto 0",
            }}
          >
            Desliza para ver cada servicio con efecto 3D pop-out interactivo.
          </p>
        </div>

        {/* Carrusel */}
        <Carousel3D items={carouselItems} onSelect={handleCarouselSelect} />

        {/* Features */}
        <div
          style={{
            marginTop: 80,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 32,
          }}
        >
          {[
            { title: "Diseño 3D", desc: "Tarjetas que se escalan y transforman suavemente" },
            { title: "Pop-out", desc: "Imágenes que sobresalen del contenedor" },
            { title: "Responsive", desc: "Funciona perfectamente en todos los dispositivos" },
            { title: "Animaciones", desc: "Transiciones fluidas con Framer Motion" },
          ].map((feature) => (
            <div
              key={feature.title}
              style={{
                padding: 24,
                borderRadius: 12,
                background: "rgba(232,204,173,0.02)",
                border: "1px solid rgba(232,204,173,0.08)",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  color: "#E8CCAD",
                  fontSize: 16,
                  margin: "0 0 8px 0",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "rgba(232,204,173,0.5)",
                  fontSize: 13,
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
