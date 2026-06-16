import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Sphere3D } from "./Sphere3D";

const words = ["Velocidad.", "Precisión.", "Impacto.", "Resultados."];

const stats = [
  { value: "150+", label: "Proyectos" },
  { value: "98%", label: "Satisfacción" },
  { value: "3×", label: "Más rápido" },
  { value: "10+", label: "Años" },
];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 280);
    }, 2600);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "#0a0603",
        display: "flex",
        alignItems: "center",
        paddingTop: 72,
      }}
    >
      {/* Deep background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(232,204,173,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232,204,173,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          pointerEvents: "none",
        }}
      />

      {/* Ambient bottom gradient */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
          background: "linear-gradient(to top, rgba(236,128,43,0.04), transparent)",
          pointerEvents: "none",
        }}
      />

      {/* Split layout */}
      <div
        style={{
          maxWidth: 1280,
          width: "100%",
          margin: "0 auto",
          padding: "60px 32px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "center",
          minHeight: "calc(100vh - 72px)",
        }}
        className="hero-split"
      >
        {/* LEFT — Text content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {/* Badge */}
          <div
            data-aos="fade-up"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderRadius: 100,
              border: "1px solid rgba(102,188,180,0.3)",
              background: "rgba(102,188,180,0.06)",
              marginBottom: 28,
              width: "fit-content",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#66BCB4",
                display: "inline-block",
                animation: "pulse-dot 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                color: "#66BCB4",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Disponible para proyectos
            </span>
          </div>

          {/* Headline */}
          <h1
            data-aos="flip-right"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(38px, 5.5vw, 70px)",
              lineHeight: 1.06,
              letterSpacing: "-0.035em",
              color: "#E8CCAD",
              margin: "0 0 12px 0",
            }}
          >
            Presencia web
            <br />
            que genera
            <br />
            <span
              style={{
                color: "#EC802B",
                display: "inline-block",
                transition: "opacity 0.28s ease, transform 0.28s ease",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(10px)",
              }}
            >
              {words[wordIndex]}
            </span>
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(15px, 1.8vw, 18px)",
              color: "rgba(232,204,173,0.6)",
              lineHeight: 1.75,
              maxWidth: 460,
              margin: "0 0 40px 0",
            }}
          >
            HTML5 semántico, CSS3 moderno y JavaScript optimizado.
            Sitios que cargan en milisegundos y convierten visitantes
            en clientes.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 56 }}>
            <button
              onClick={() => scrollTo("contact")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "15px 28px",
                borderRadius: 10,
                background: "linear-gradient(135deg, #EC802B, #d96e1e)",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                color: "#0a0603",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.transform = "translateY(-2px)";
                b.style.boxShadow = "0 10px 36px rgba(236,128,43,0.5)";
              }}
              onMouseLeave={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.transform = "translateY(0)";
                b.style.boxShadow = "none";
              }}
            >
              Iniciar proyecto <ArrowRight size={17} />
            </button>
            <button
              onClick={() => scrollTo("portfolio")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "15px 28px",
                borderRadius: 10,
                background: "transparent",
                border: "1px solid rgba(232,204,173,0.15)",
                cursor: "pointer",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: 15,
                color: "#E8CCAD",
                transition: "border-color 0.2s ease, background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.borderColor = "rgba(232,204,173,0.35)";
                b.style.background = "rgba(232,204,173,0.05)";
              }}
              onMouseLeave={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.borderColor = "rgba(232,204,173,0.15)";
                b.style.background = "transparent";
              }}
            >
              <Play size={14} fill="currentColor" /> Ver trabajos
            </button>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              borderTop: "1px solid rgba(232,204,173,0.07)",
              paddingTop: 28,
            }}
            className="hero-stats"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  paddingRight: i < 3 ? 16 : 0,
                  borderRight: i < 3 ? "1px solid rgba(232,204,173,0.07)" : "none",
                  paddingLeft: i > 0 ? 16 : 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(20px, 2.5vw, 28px)",
                    color: "#EC802B",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    color: "rgba(232,204,173,0.45)",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — 3D Sphere */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="sphere-wrapper"
        >
          {/* Outer glow ring */}
          <div
            style={{
              position: "absolute",
              width: "72%",
              paddingBottom: "72%",
              borderRadius: "50%",
              background:
                "conic-gradient(from 0deg, rgba(236,128,43,0.18), rgba(102,188,180,0.14), rgba(237,197,91,0.12), rgba(236,128,43,0.18))",
              filter: "blur(40px)",
              animation: "spin-slow 12s linear infinite",
            }}
          />

          {/* Thin orbit rings (decorative CSS) */}
          <div
            style={{
              position: "absolute",
              width: "88%",
              paddingBottom: "88%",
              borderRadius: "50%",
              border: "1px solid rgba(232,204,173,0.05)",
              transform: "rotateX(70deg)",
              animation: "orbit-ring 18s linear infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "68%",
              paddingBottom: "68%",
              borderRadius: "50%",
              border: "1px solid rgba(102,188,180,0.08)",
              transform: "rotateX(70deg) rotateY(40deg)",
              animation: "orbit-ring 14s linear infinite reverse",
            }}
          />

          {/* Canvas sphere */}
          <div
            style={{
              width: "80%",
              paddingBottom: "80%",
              position: "relative",
              borderRadius: "50%",
            }}
            className="sphere-canvas-container"
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
              }}
            >
              <Sphere3D />
            </div>
          </div>

          {/* Floating info chips */}
          <FloatingChip
            label="LCP 0.8s"
            sub="Lighthouse 99"
            color="#EC802B"
            style={{ top: "8%", right: "-4%", animation: "float-chip-a 6s ease-in-out infinite" }}
          />
          <FloatingChip
            label="WCAG 2.1 AA"
            sub="Accesibilidad"
            color="#66BCB4"
            style={{ bottom: "18%", left: "-8%", animation: "float-chip-b 7s ease-in-out infinite" }}
          />
          <FloatingChip
            label="CSS Grid"
            sub="Responsive"
            color="#EDC55B"
            style={{ bottom: "4%", right: "2%", animation: "float-chip-a 8s ease-in-out infinite 1s" }}
          />
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          opacity: 0.35,
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 9,
            color: "#E8CCAD",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 36,
            background: "linear-gradient(to bottom, #E8CCAD80, transparent)",
            animation: "scroll-bar 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.3;transform:scale(0.7)} }
        @keyframes scroll-bar {
          0%{transform:scaleY(0);transform-origin:top;opacity:0}
          50%{transform:scaleY(1);transform-origin:top;opacity:1}
          100%{transform:scaleY(0);transform-origin:bottom;opacity:0}
        }
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        @keyframes orbit-ring { to { transform: rotateX(70deg) rotateY(360deg); } }
        @keyframes float-chip-a {
          0%,100%{transform:translateY(0) rotate(-1deg)}
          50%{transform:translateY(-10px) rotate(1deg)}
        }
        @keyframes float-chip-b {
          0%,100%{transform:translateY(0) rotate(1deg)}
          50%{transform:translateY(-14px) rotate(-1deg)}
        }
        @media (max-width: 900px) {
          .hero-split {
            grid-template-columns: 1fr !important;
            padding: 48px 24px 80px !important;
            text-align: center;
          }
          .hero-split > div:first-child {
            align-items: center;
          }
          .sphere-wrapper {
            height: 340px;
          }
          .sphere-canvas-container {
            width: 320px !important;
            padding-bottom: 320px !important;
          }
          .hero-stats {
            justify-items: center;
          }
        }
        @media (max-width: 500px) {
          .hero-stats { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

function FloatingChip({
  label,
  sub,
  color,
  style,
}: {
  label: string;
  sub: string;
  color: string;
  style: React.CSSProperties;
}) {
  return (
    <div
      style={{
        position: "absolute",
        padding: "10px 14px",
        borderRadius: 12,
        background: "rgba(10,6,3,0.85)",
        backdropFilter: "blur(12px)",
        border: `1px solid ${color}28`,
        boxShadow: `0 0 20px ${color}18`,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        zIndex: 2,
        ...style,
      }}
    >
      <span
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 700,
          fontSize: 13,
          color,
          letterSpacing: "-0.01em",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 10,
          color: "rgba(232,204,173,0.45)",
          letterSpacing: "0.06em",
          whiteSpace: "nowrap",
        }}
      >
        {sub}
      </span>
    </div>
  );
}
