import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface CasoÉxito {
  id: string;
  nombre: string;
  industria: string;
  descripcion: string;
  resultado: string;
  incremento: string;
  imagen?: string;
  color: string;
  badge: string;
}

const casosÉxito: CasoÉxito[] = [
  {
    id: "1",
    nombre: "NovaMart",
    industria: "E-commerce",
    descripcion: "Plataforma de compras optimizada con UX estratégica",
    resultado: "LCP 0.8s • Conversión +34%",
    incremento: "34%",
    color: "#FF6B35",
    badge: "PERFORMANCE",
    imagen: "🛍️",
  },
  {
    id: "2",
    nombre: "FlowMetrics",
    industria: "SaaS",
    descripcion: "Dashboard analítico con data visualization premium",
    resultado: "98/100 Lighthouse • ROI +52%",
    incremento: "52%",
    color: "#004E89",
    badge: "ENTERPRISE",
    imagen: "📊",
  },
  {
    id: "3",
    nombre: "UrbanEats",
    industria: "Delivery",
    descripcion: "Landing viral con conversión explosiva",
    resultado: "99/100 Performance • Pre-reg +67%",
    incremento: "67%",
    color: "#F77F00",
    badge: "VIRAL",
    imagen: "🍕",
  },
  {
    id: "4",
    nombre: "Kinetic Studio",
    industria: "Portafolio",
    descripcion: "Portfolio creativo con 3D e interactividad avanzada",
    resultado: "95/100 Score • Clientes +28%",
    incremento: "28%",
    color: "#D62828",
    badge: "CREATIVE",
    imagen: "🎨",
  },
  {
    id: "5",
    nombre: "LexisLaw",
    industria: "Legal",
    descripcion: "Sitio corporativo con presencia institucional premium",
    resultado: "96/100 Lighthouse • Consultas +18%",
    incremento: "18%",
    color: "#003049",
    badge: "CORPORATE",
    imagen: "⚖️",
  },
];

export function CasosÉxitoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + casosÉxito.length) % casosÉxito.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % casosÉxito.length);
  };

  const currentCaso = casosÉxito[currentIndex];
  const nextIndex = (currentIndex + 1) % casosÉxito.length;
  const nextCaso = casosÉxito[nextIndex];

  return (
    <section
      style={{
        padding: "100px 24px",
        background: "linear-gradient(180deg, #0a0603 0%, #0f0a05 50%, #1a1410 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gradient backdrop */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-100px",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${currentCaso.color}08 0%, transparent 70%)`,
          filter: "blur(80px)",
          pointerEvents: "none",
          transition: "all 0.8s ease",
        }}
      />

      <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <div
          style={{
            marginBottom: 80,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
          data-aos="fade-up"
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 20px",
              background: "rgba(232, 204, 173, 0.05)",
              border: "1px solid rgba(232, 204, 173, 0.1)",
              borderRadius: 50,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: currentCaso.color,
              }}
            />
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                color: "rgba(232, 204, 173, 0.6)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Casos de Éxito
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(36px, 7vw, 64px)",
              fontWeight: 700,
              color: "#E8CCAD",
              margin: "0 0 16px 0",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Resultados que transforman negocios
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              fontWeight: 400,
              color: "rgba(232, 204, 173, 0.5)",
              maxWidth: 560,
              margin: 0,
              lineHeight: 1.7,
            }}
          >
            Proyectos reales que escalaron desde cero hasta miles de usuarios con optimización estratégica
          </p>
        </div>

        {/* Carousel Container */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 48,
            alignItems: "center",
            marginBottom: 64,
          }}
          className="carousel-grid"
        >
          {/* Main Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCaso.id}
              initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 40, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              data-aos="flip-right"
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                border: `1px solid ${currentCaso.color}20`,
                background: `linear-gradient(135deg, ${currentCaso.color}08 0%, ${currentCaso.color}03 100%)`,
                backdropFilter: "blur(20px)",
                boxShadow: `0 8px 32px rgba(0,0,0,0.3), inset 0 1px 1px ${currentCaso.color}15`,
              }}
            >
              {/* Icon Section */}
              <div
                style={{
                  width: "100%",
                  height: 220,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "clamp(60px, 15vw, 100px)",
                  background: `linear-gradient(135deg, ${currentCaso.color}12 0%, ${currentCaso.color}06 100%)`,
                  position: "relative",
                  borderBottom: `1px solid ${currentCaso.color}15`,
                }}
              >
                <div style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.2))" }}>
                  {currentCaso.imagen}
                </div>
              </div>

              {/* Content Section */}
              <div style={{ padding: "40px", position: "relative", zIndex: 1 }}>
                {/* Badge + Industry */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 20,
                  }}
                >
                  <span
                    style={{
                      padding: "6px 14px",
                      borderRadius: 100,
                      background: `${currentCaso.color}15`,
                      border: `1px solid ${currentCaso.color}30`,
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 10,
                      fontWeight: 700,
                      color: currentCaso.color,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {currentCaso.badge}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11,
                      fontWeight: 500,
                      color: "rgba(232, 204, 173, 0.4)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {currentCaso.industria}
                  </span>
                </div>

                {/* Name */}
                <h3
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 36,
                    fontWeight: 700,
                    color: "#E8CCAD",
                    margin: "0 0 14px 0",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {currentCaso.nombre}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 15,
                    fontWeight: 400,
                    color: "rgba(232, 204, 173, 0.55)",
                    lineHeight: 1.65,
                    margin: "0 0 24px 0",
                  }}
                >
                  {currentCaso.descripcion}
                </p>

                {/* Result Box */}
                <div
                  style={{
                    padding: "18px 20px",
                    borderRadius: 14,
                    background: `${currentCaso.color}08`,
                    border: `1px solid ${currentCaso.color}20`,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11,
                      fontWeight: 600,
                      color: "rgba(232, 204, 173, 0.4)",
                      margin: "0 0 6px 0",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Resultado Mensurable
                  </p>
                  <p
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 16,
                      fontWeight: 700,
                      color: currentCaso.color,
                      margin: 0,
                    }}
                  >
                    {currentCaso.resultado}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 40,
              justifyContent: "flex-start",
            }}
          >
            {/* Big Metric */}
            <motion.div
              key={`metric-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 8,
                  marginBottom: 12,
                }}
              >
                <span
                  style={{
                    fontSize: "clamp(64px, 12vw, 140px)",
                    fontWeight: 800,
                    lineHeight: 1,
                    background: `linear-gradient(135deg, ${currentCaso.color} 0%, ${currentCaso.color}dd 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {currentCaso.incremento}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "rgba(232, 204, 173, 0.5)",
                  margin: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Crecimiento Verificado
              </p>
            </motion.div>

            {/* Next Preview Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`preview-${nextCaso.id}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                style={{
                  padding: "28px",
                  borderRadius: 16,
                  border: `1px solid ${nextCaso.color}20`,
                  background: `linear-gradient(135deg, ${nextCaso.color}08 0%, ${nextCaso.color}03 100%)`,
                  backdropFilter: "blur(10px)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
                onClick={handleNext}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.borderColor = `${nextCaso.color}40`;
                  target.style.background = `linear-gradient(135deg, ${nextCaso.color}15 0%, ${nextCaso.color}08 100%)`;
                  target.style.transform = "translateY(-2px)";
                  target.style.boxShadow = `0 8px 24px rgba(0,0,0,0.2)`;
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.borderColor = `${nextCaso.color}20`;
                  target.style.background = `linear-gradient(135deg, ${nextCaso.color}08 0%, ${nextCaso.color}03 100%)`;
                  target.style.transform = "translateY(0)";
                  target.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 16,
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: 56,
                        marginBottom: 14,
                      }}
                    >
                      {nextCaso.imagen}
                    </div>
                    <h4
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 20,
                        fontWeight: 700,
                        color: "#E8CCAD",
                        margin: "0 0 6px 0",
                      }}
                    >
                      {nextCaso.nombre}
                    </h4>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 12,
                        fontWeight: 500,
                        color: "rgba(232, 204, 173, 0.5)",
                        margin: 0,
                      }}
                    >
                      {nextCaso.industria}
                    </p>
                  </div>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: `${nextCaso.color}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <ArrowRight size={16} color={nextCaso.color} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 32,
            borderTop: "1px solid rgba(232, 204, 173, 0.08)",
          }}
        >
          {/* Navigation Buttons */}
          <div style={{ display: "flex", gap: 10 }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: "rgba(232, 204, 173, 0.06)",
                border: "1px solid rgba(232, 204, 173, 0.12)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#E8CCAD",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const btn = e.currentTarget as HTMLButtonElement;
                btn.style.background = "rgba(236, 128, 43, 0.12)";
                btn.style.borderColor = "rgba(236, 128, 43, 0.3)";
                btn.style.color = "#EC802B";
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget as HTMLButtonElement;
                btn.style.background = "rgba(232, 204, 173, 0.06)";
                btn.style.borderColor = "rgba(232, 204, 173, 0.12)";
                btn.style.color = "#E8CCAD";
              }}
            >
              <ChevronLeft size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: "rgba(232, 204, 173, 0.06)",
                border: "1px solid rgba(232, 204, 173, 0.12)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#E8CCAD",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const btn = e.currentTarget as HTMLButtonElement;
                btn.style.background = "rgba(236, 128, 43, 0.12)";
                btn.style.borderColor = "rgba(236, 128, 43, 0.3)";
                btn.style.color = "#EC802B";
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget as HTMLButtonElement;
                btn.style.background = "rgba(232, 204, 173, 0.06)";
                btn.style.borderColor = "rgba(232, 204, 173, 0.12)";
                btn.style.color = "#E8CCAD";
              }}
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>

          {/* Indicators */}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {casosÉxito.map((_, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  width: idx === currentIndex ? 32 : 8,
                  height: 8,
                  borderRadius: 4,
                  background:
                    idx === currentIndex
                      ? casosÉxito[idx].color
                      : "rgba(232, 204, 173, 0.1)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>

          {/* Counter */}
          <span
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              color: "rgba(232, 204, 173, 0.4)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            {String(currentIndex + 1).padStart(2, "0")} / {String(casosÉxito.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1000px) {
          .carousel-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
